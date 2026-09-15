// Converts the raw catalogs in ./raw into compact files under ./public/data
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CURATED, EXTRA_DSO, STAR_NOTES, norm } from './curated.mjs';

// Canonical cluster designation: "Mel022", "Melotte 22" and "Melotte_22" all become MEL22 so duplicates can be merged.
function canon(s) {
  let k = norm(String(s)).replace(/[\s_]/g, '');
  k = k.replace(/^MELOTTE/, 'MEL').replace(/^COLLINDER/, 'CR').replace(/^COL(?=\d)/, 'CR').replace(/^CALDWELL/, 'C').replace(/^MESSIER/, 'M').replace(/^TRUMPLER/, 'TR').replace(/^RUPRECHT/, 'RUP').replace(/^BOCHUM/, 'BO').replace(/^BERKELEY/, 'BE').replace(/^HAFFNER/, 'HAF').replace(/^CZERNIK/, 'CZ').replace(/^DOLIDZE/, 'DO').replace(/^STOCK/, 'ST');
  k = k.replace(/^([A-Z]+)0+(\d)/, '$1$2');
  return k;
}
// curated (literature) cluster distances win over the Gaia catalogue value so stars, volume and marker all sit at one distance
const curatedClusterD = new Map();
for (const x of EXTRA_DSO) if ((x.t === 'OCl' || x.t === '*Ass') && Number.isFinite(x.d)) for (const a of [x.n, ...String(x.aka || '').split(',')]) if (a.trim()) curatedClusterD.set(canon(a), x.d);


const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RAW = path.join(ROOT, 'raw');
const OUT = path.join(ROOT, 'public', 'data');
fs.mkdirSync(OUT, { recursive: true });

const DEG = Math.PI / 180;
const C_KMS = 299792.458;
const H0 = 70; // km/s/Mpc

// ---------- helpers ----------
function parseCSV(text, delim = ',') {
  const rows = [];
  let row = [], field = '', inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else inQ = false; }
      else field += c;
    } else if (c === '"') inQ = true;
    else if (c === delim) { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}
function readCSV(file, delim) {
  const rows = parseCSV(fs.readFileSync(path.join(RAW, file), 'utf8'), delim);
  const header = rows.shift();
  const idx = Object.fromEntries(header.map((h, i) => [h, i]));
  return { header, idx, rows: rows.filter(r => r.length > 1) };
}
function num(v) { const n = parseFloat(v); return Number.isFinite(n) ? n : NaN; }
function hmsToDeg(s) { const [h, m, sec] = s.split(':').map(parseFloat); return (h + m / 60 + (sec || 0) / 3600) * 15; }
function dmsToDeg(s) { const sign = s.trim().startsWith('-') ? -1 : 1; const [d, m, sec] = s.replace(/[+-]/, '').split(':').map(parseFloat); return sign * (d + m / 60 + (sec || 0) / 3600); }
function raDecToXYZ(raDeg, decDeg, r) {
  const ra = raDeg * DEG, dec = decDeg * DEG;
  return [r * Math.cos(dec) * Math.cos(ra), r * Math.cos(dec) * Math.sin(ra), r * Math.sin(dec)];
}
// Pack typed arrays into one binary with a JSON header
function packBinary(file, segments) {
  const meta = []; let offset = 0; const bufs = [];
  for (const [name, arr] of Object.entries(segments)) {
    const bytes = Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength);
    const pad = (8 - (offset % 8)) % 8;
    if (pad) { bufs.push(Buffer.alloc(pad)); offset += pad; }
    meta.push({ name, type: arr.constructor.name, length: arr.length, offset });
    bufs.push(bytes); offset += bytes.length;
  }
  const header = Buffer.from(JSON.stringify({ segments: meta }), 'utf8');
  const hlen = Buffer.alloc(4); hlen.writeUInt32LE(header.length);
  const headPad = Buffer.alloc((8 - ((4 + header.length) % 8)) % 8);
  fs.writeFileSync(path.join(OUT, file), Buffer.concat([hlen, header, headPad, ...bufs]));
  console.log(`  wrote ${file} (${((4 + header.length + headPad.length + offset) / 1e6).toFixed(2)} MB)`);
}
function writeJSON(file, obj) {
  const s = JSON.stringify(obj);
  fs.writeFileSync(path.join(OUT, file), s);
  console.log(`  wrote ${file} (${(s.length / 1e6).toFixed(2)} MB)`);
}
// B-V colour index from effective temperature (inverse of Ballesteros 2012)
function teffToCI(T) {
  let lo = -0.5, hi = 2.5;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    const t = 4600 * (1 / (0.92 * mid + 1.7) + 1 / (0.92 * mid + 0.62));
    if (t > T) lo = mid; else hi = mid;
  }
  return (lo + hi) / 2;
}

// ---------- STARS (HYG v4.1) ----------
console.log('Stars...');
const hyg = readCSV('hyg.csv');
const H = hyg.idx;
const starRows = [];
for (const r of hyg.rows) {
  if (r[H.id] === '0') continue; // Sun handled separately
  const dist = num(r[H.dist]);
  if (!Number.isFinite(dist) || dist >= 99999) continue; // unknown parallax
  starRows.push(r);
}
// sort brightest first so partial loads still show important stars
starRows.sort((a, b) => num(a[H.mag]) - num(b[H.mag]));
const N0 = starRows.length;

const pos = [], absmag = [], ci = [], mag = [], distArr = [], pm = [], ids = [];
const spectDict = [], spectMap = new Map(); const spectIdx = [];
const conDict = [], conMap = new Map(); const conIdx = [];
const proper = [], bayer = [], flam = [], gl = [], bf = [], vars = [];
const hipMap = new Map(), hdMap = new Map(), glMap = new Map();
function dictIdx(dict, map, v) { if (!v) return 0; if (!map.has(v)) { map.set(v, dict.length + 1); dict.push(v); } return map.get(v); }

let i = 0;
for (const r of starRows) {
  const x = num(r[H.x]), y = num(r[H.y]), z = num(r[H.z]);
  pos.push(x, y, z);
  absmag.push(num(r[H.absmag]));
  let c = num(r[H.ci]);
  const sp = r[H.spect].trim();
  if (!Number.isFinite(c)) {
    const cls = sp[0];
    c = { O: -0.33, B: -0.2, A: 0.05, F: 0.4, G: 0.65, K: 1.1, M: 1.5, L: 2.0, T: 2.2, D: 0.0, W: -0.3, C: 2.0, S: 1.6 }[cls];
    if (c === undefined) c = 0.65;
  }
  ci.push(c);
  mag.push(num(r[H.mag]));
  distArr.push(num(r[H.dist]));
  pm.push(num(r[H.pmra]) || 0, num(r[H.pmdec]) || 0, num(r[H.rv]) || 0);
  const hip = parseInt(r[H.hip]) || 0, hd = parseInt(r[H.hd]) || 0, hr = parseInt(r[H.hr]) || 0;
  ids.push(hip, hd, hr);
  if (hip) hipMap.set(hip, i);
  if (hd) hdMap.set(hd, i);
  spectIdx.push(dictIdx(spectDict, spectMap, sp));
  conIdx.push(dictIdx(conDict, conMap, r[H.con].trim()));
  if (r[H.proper]) proper.push([i, r[H.proper]]);
  if (r[H.bayer]) bayer.push([i, r[H.bayer]]);
  if (r[H.flam]) flam.push([i, parseInt(r[H.flam])]);
  if (r[H.gl]) { gl.push([i, r[H.gl]]); glMap.set(r[H.gl].replace(/\s+/g, ''), i); }
  if (r[H.bf] && !r[H.bayer] && !r[H.flam]) bf.push([i, r[H.bf]]);
  if (r[H.var]) vars.push([i, r[H.var], num(r[H.var_min]), num(r[H.var_max])]);
  i++;
}
console.log(`  ${N0} stars from HYG`);

// --- Cluster members: individual Hipparcos parallaxes are far worse than the cluster's Gaia distance, which stretches every
//     open cluster into a spear pointing at the Sun. Stars inside a known cluster's footprint whose distance is compatible
//     with the cluster are moved to the cluster distance (with a spread equal to the cluster's physical half-light radius).
const snapped = new Uint8Array(N0);
{
  const ocSnap = readCSV('open_clusters.csv'); const OC = ocSnap.idx;
  const rng = mulberryNode(41);
  const gauss = () => { let u = 0, v = 0; while (u === 0) u = rng(); while (v === 0) v = rng(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  let moved = 0;
  const clusters = ocSnap.rows.map(r => ({ ra: num(r[OC.RA_ICRS]), dec: num(r[OC.DE_ICRS]), r50: num(r[OC.r50]), D: curatedClusterD.get(canon(r[OC.Cluster])) ?? num(r[OC.DistPc]) })).filter(c => Number.isFinite(c.D) && Number.isFinite(c.r50) && c.D > 0);
  for (let i = 0; i < N0; i++) {
    const x = pos[3 * i], y = pos[3 * i + 1], z = pos[3 * i + 2], d = distArr[i];
    const ra = ((Math.atan2(y, x) / DEG) + 360) % 360, dec = Math.asin(z / d) / DEG;
    for (const c of clusters) {
      const rad = Math.max(0.12, c.r50 * 1.6);
      if (Math.abs(dec - c.dec) > rad) continue;
      const dra = Math.abs(((ra - c.ra + 540) % 360) - 180) * Math.cos(dec * DEG);
      if (Math.hypot(dra, dec - c.dec) > rad) continue;
      if (Math.abs(d - c.D) / c.D > 0.4) continue; // not compatible with membership
      const r50pc = c.D * c.r50 * DEG;
      const newD = c.D * (1 + gauss() * Math.min(0.05, r50pc / c.D));
      const k = newD / d;
      pos[3 * i] *= k; pos[3 * i + 1] *= k; pos[3 * i + 2] *= k; distArr[i] = newD; mag[i] = absmag[i] + 5 * Math.log10(newD / 10);
      snapped[i] = 1; moved++; break;
    }
  }
  console.log(`  ${moved} cluster member stars placed at their cluster's Gaia distance`);
}
function mulberryNode(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

// ---------- EXOPLANETS (NASA Exoplanet Archive pscomppars) ----------
console.log('Exoplanets...');
const exo = readCSV('exoplanets.csv');
const E = exo.idx;
const systems = new Map();
let newHosts = 0, matched = 0, skipped = 0;
// spatial grid for position matching (only bright-ish stars < 500 pc + all)
const grid = new Map();
for (let k = 0; k < N0; k++) {
  const x = pos[3 * k], y = pos[3 * k + 1], z = pos[3 * k + 2];
  const d = distArr[k];
  const ra = Math.atan2(y, x) / DEG, dec = Math.asin(z / d) / DEG;
  const key = `${Math.floor(ra)}_${Math.floor(dec)}`;
  if (!grid.has(key)) grid.set(key, []);
  grid.get(key).push(k);
}
function findStarByPos(ra, dec, dist) {
  let best = -1, bestSep = 1e9;
  for (let dr = -1; dr <= 1; dr++) for (let dd = -1; dd <= 1; dd++) {
    const arr = grid.get(`${Math.floor(ra) + dr}_${Math.floor(dec) + dd}`);
    if (!arr) continue;
    for (const k of arr) {
      const x = pos[3 * k], y = pos[3 * k + 1], z = pos[3 * k + 2], d = distArr[k];
      const ra2 = Math.atan2(y, x) / DEG, dec2 = Math.asin(z / d) / DEG;
      const sep = Math.hypot((ra - ((ra2 + 360) % 360)) * Math.cos(dec * DEG), dec - dec2) * 3600;
      if (sep < 20 && sep < bestSep && (!Number.isFinite(dist) || Math.abs(d - dist) / dist < 0.25)) { best = k; bestSep = sep; }
    }
  }
  return best;
}
for (const r of exo.rows) {
  const host = r[E.hostname];
  const ra = num(r[E.ra]), dec = num(r[E.dec]), dist = num(r[E.sy_dist]);
  if (!systems.has(host)) {
    let star = -1;
    const hip = parseInt((r[E.hip_name] || '').replace(/\D/g, ''));
    const hd = parseInt((r[E.hd_name] || '').replace(/\D/g, ''));
    if (hip && hipMap.has(hip)) star = hipMap.get(hip);
    else if (hd && hdMap.has(hd)) star = hdMap.get(hd);
    else if (/^(GJ|Gliese|Gl|Wolf|Ross|Wolf) /.test(host) && glMap.has(host.replace(/^Gliese/, 'Gl').replace(/^GJ/, 'GJ').replace(/\s+/g, ''))) star = glMap.get(host.replace(/^Gliese/, 'Gl').replace(/\s+/g, ''));
    if (star < 0 && Number.isFinite(ra)) star = findStarByPos((ra + 360) % 360, dec, dist);
    if (star >= 0) matched++;
    else {
      if (!Number.isFinite(dist) || !Number.isFinite(ra)) { skipped++; continue; }
      // Create a new star entry for this host
      const teff = num(r[E.st_teff]), srad = num(r[E.st_rad]);
      let M, c;
      if (Number.isFinite(teff)) {
        c = teffToCI(teff);
        const L = (Number.isFinite(srad) ? srad * srad : 1) * Math.pow(teff / 5772, 4);
        M = 4.83 - 2.5 * Math.log10(Math.max(L, 1e-6));
      } else { c = 1.2; M = 9; }
      const [x, y, z] = raDecToXYZ(ra, dec, dist);
      pos.push(x, y, z); absmag.push(M); ci.push(c); mag.push(M + 5 * Math.log10(dist / 10)); distArr.push(dist);
      pm.push(0, 0, 0); ids.push(0, 0, 0);
      spectIdx.push(dictIdx(spectDict, spectMap, (r[E.st_spectype] || '').trim().slice(0, 12)));
      conIdx.push(0);
      star = pos.length / 3 - 1;
      proper.push([star, host]);
      newHosts++;
    }
    systems.set(host, {
      s: star, teff: num(r[E.st_teff]), srad: num(r[E.st_rad]), smass: num(r[E.st_mass]),
      sp: r[E.st_spectype], nstars: parseInt(r[E.sy_snum]) || 1, p: []
    });
  }
  const sys = systems.get(host);
  sys.p.push({
    n: r[E.pl_name], rade: num(r[E.pl_rade]), masse: num(r[E.pl_bmasse]), per: num(r[E.pl_orbper]),
    a: num(r[E.pl_orbsmax]), e: num(r[E.pl_orbeccen]), inc: num(r[E.pl_orbincl]), eqt: num(r[E.pl_eqt]),
    dens: num(r[E.pl_dens]), yr: parseInt(r[E.disc_year]) || null, m: r[E.discoverymethod], fac: r[E.disc_facility],
    w: num(r[E.pl_orblper])
  });
}
// --- candidates: TESS Objects of Interest (PC/APC) and Kepler KOI candidates; plus famous unconfirmed objects ---
function addCandidateHost(host, ra, dec, dist, teff, srad, planet) {
  if (!Number.isFinite(dist) || !Number.isFinite(ra)) return false;
  if (!systems.has(host)) {
    let star = findStarByPos((ra + 360) % 360, dec, dist);
    if (star < 0) {
      let M, c;
      if (Number.isFinite(teff)) { c = teffToCI(teff); const L = (Number.isFinite(srad) ? srad * srad : 1) * Math.pow(teff / 5772, 4); M = 4.83 - 2.5 * Math.log10(Math.max(L, 1e-6)); } else { c = 0.9; M = 6; }
      const [x, y, z] = raDecToXYZ(ra, dec, dist);
      pos.push(x, y, z); absmag.push(M); ci.push(c); mag.push(M + 5 * Math.log10(dist / 10)); distArr.push(dist); pm.push(0, 0, 0); ids.push(0, 0, 0);
      spectIdx.push(0); conIdx.push(0);
      star = pos.length / 3 - 1; proper.push([star, host]);
    }
    systems.set(host, { s: star, teff, srad, smass: NaN, sp: '', nstars: 1, p: [] });
  }
  systems.get(host).p.push(planet);
  return true;
}
let nToi = 0, nKoi = 0;
if (fs.existsSync(path.join(RAW, 'toi.csv'))) {
  const t = readCSV('toi.csv'); const T = t.idx;
  for (const r of t.rows) {
    const disp = r[T.tfopwg_disp]; if (disp === 'CP' || disp === 'KP') continue; // confirmed ones are already in pscomppars
    const host = 'TOI-' + String(r[T.toi]).split('.')[0];
    const ok = addCandidateHost(host, num(r[T.ra]), num(r[T.dec]), num(r[T.st_dist]), num(r[T.st_teff]), num(r[T.st_rad]),
      { n: 'TOI-' + r[T.toi], rade: num(r[T.pl_rade]), masse: NaN, per: num(r[T.pl_orbper]), a: NaN, e: 0, inc: 88, eqt: num(r[T.pl_eqt]), dens: NaN, yr: null, m: 'Transit', fac: 'TESS', w: NaN, cand: disp === 'APC' ? 'TESS candidate (ambiguous)' : 'TESS planet candidate' });
    if (ok) nToi++;
  }
}
if (fs.existsSync(path.join(RAW, 'koi.csv'))) {
  const t = readCSV('koi.csv'); const K = t.idx;
  for (const r of t.rows) {
    const teff = num(r[K.koi_steff]), srad = num(r[K.koi_srad]), kmag = num(r[K.koi_kepmag]);
    if (!Number.isFinite(teff) || !Number.isFinite(kmag)) continue;
    // Kepler field stars: distance from magnitude + estimated luminosity (photometric, rough)
    const L = (Number.isFinite(srad) ? srad * srad : 1) * Math.pow(teff / 5772, 4); const M = 4.83 - 2.5 * Math.log10(Math.max(L, 1e-6));
    const dist = Math.pow(10, (kmag - M + 5) / 5);
    const host = r[K.kepler_name] ? r[K.kepler_name].replace(/ [a-z]$/, '') : 'KOI-' + String(r[K.kepoi_name]).replace(/^K0*/, '').split('.')[0];
    const ok = addCandidateHost(host, num(r[K.ra]), num(r[K.dec]), dist, teff, srad,
      { n: r[K.kepler_name] || r[K.kepoi_name], rade: num(r[K.koi_prad]), masse: NaN, per: num(r[K.koi_period]), a: NaN, e: 0, inc: 88, eqt: num(r[K.koi_teq]), dens: NaN, yr: null, m: 'Transit', fac: 'Kepler', w: NaN, cand: 'Kepler planet candidate (distance estimated photometrically)' });
    if (ok) nKoi++;
  }
}
// J1407b: the "super Saturn" ring-system candidate around V1400 Centauri (1SWASP J140747.93-394542.6), Kenworthy & Mamajek 2015
addCandidateHost('V1400 Centauri', 211.94971, -39.76183, 133.8, 4500, 0.99,
  { n: 'J1407 b', rade: 11.2, masse: 6360, per: 4015, a: 5.0, e: 0.3, inc: 70, eqt: 100, dens: NaN, yr: 2012, m: 'Eclipse (ring occultation)', fac: 'SuperWASP', w: NaN, cand: 'unconfirmed companion with a giant ring system (~0.6 AU across, 37 rings); period 3.5–13.8 yr uncertain, may even be free-floating', rings: { inner: 1.0e7, outer: 9.0e7 } });
console.log(`  candidates: ${nToi} TESS, ${nKoi} Kepler, + J1407b`);
const exoOut = [];
for (const [host, s] of systems) exoOut.push({ host, ...s });
console.log(`  ${exoOut.length} systems, ${exo.rows.length} planets; matched ${matched} HYG stars, created ${newHosts} host stars, skipped ${skipped}`);

const N = pos.length / 3;
const cleanF = a => Float32Array.from(a, v => (Number.isFinite(v) ? v : 0));
packBinary('stars.bin', {
  pos: cleanF(pos), absmag: cleanF(absmag), ci: cleanF(ci), mag: cleanF(mag), dist: cleanF(distArr), pm: cleanF(pm),
  ids: Uint32Array.from(ids), spect: Uint16Array.from(spectIdx), con: Uint8Array.from(conIdx), snapped: (() => { const a = new Uint8Array(N); a.set(snapped); return a; })()
});
// Notes keyed by star index
const notes = [];
const properByName = new Map(proper.map(([k, v]) => [v, k]));
for (const [name, text] of Object.entries(STAR_NOTES)) if (properByName.has(name)) notes.push([properByName.get(name), text]);
writeJSON('stars_meta.json', { count: N, hygCount: N0, spectDict, conDict, proper, bayer, flam, gl, bf, vars, notes });
writeJSON('exoplanets.json', exoOut);

// ---------- CONSTELLATIONS (Stellarium modern sky culture) ----------
console.log('Constellations...');
const sc = JSON.parse(fs.readFileSync(path.join(RAW, 'stellarium_modern.json'), 'utf8'));
const cons = [];
for (const c of sc.constellations) {
  const lines = [];
  for (const seg of c.lines) {
    const idxs = seg.map(h => hipMap.has(h) ? hipMap.get(h) : -1);
    let cur = [];
    for (const k of idxs) { if (k < 0) { if (cur.length > 1) lines.push(cur); cur = []; } else cur.push(k); }
    if (cur.length > 1) lines.push(cur);
  }
  cons.push({ id: c.id.replace('CON modern ', ''), name: c.common_name?.english || c.id, native: c.common_name?.native || '', lines });
}
const asterisms = [];
for (const a of sc.asterisms) {
  if (a.is_ray_helper) continue;
  const lines = [];
  for (const seg of a.lines) {
    const idxs = seg.map(h => hipMap.has(h) ? hipMap.get(h) : -1).filter(k => k >= 0);
    if (idxs.length > 1) lines.push(idxs);
  }
  asterisms.push({ name: a.common_name?.english || a.id, lines });
}
writeJSON('constellations.json', { constellations: cons, asterisms });

// ---------- DEEP SKY OBJECTS ----------
console.log('Deep sky...');
const dso = [];
const seenNames = new Set();
const SKIP_TYPES = new Set(['*', '**', 'Dup', 'NonEx', 'Other', 'Nova']);
const GAL_TYPES = new Set(['G', 'GPair', 'GTrpl', 'GGroup']);
const NOMINAL = { PN: 1500, HII: 2000, EmN: 1500, Neb: 1500, RfN: 800, 'Cl+N': 1800, OCl: 1500, GCl: 10000, SNR: 3000, DrkN: 500, '*Ass': 800 };

// Gaia open clusters (Cantat-Gaudin+ 2020) and globulars (Baumgardt+ 2019)
const oc = readCSV('open_clusters.csv');
const ocByName = new Map();
for (const r of oc.rows) ocByName.set(norm(r[oc.idx.Cluster].replace(/_/g, '')), r);
const gc = readCSV('globulars.csv');
const gcByName = new Map();
for (const r of gc.rows) gcByName.set(norm(r[gc.idx.Name]), r);

function addNGC(file) {
  const t = readCSV(file, ';');
  const I = t.idx;
  for (const r of t.rows) {
    const type = r[I.Type];
    if (SKIP_TYPES.has(type)) continue;
    if (!r[I.RA] || !r[I.Dec]) continue;
    const name = r[I.Name];
    const key = norm(name);
    if (seenNames.has(key)) continue;
    seenNames.add(key);
    const ra = hmsToDeg(r[I.RA]), dec = dmsToDeg(r[I.Dec]);
    const maj = num(r[I.MajAx]), min = num(r[I.MinAx]), pa = num(r[I.PosAng]);
    const bmag = num(r[I['B-Mag']]), vmag = num(r[I['V-Mag']]);
    const z = num(r[I.Redshift]), pax = num(r[I.Pax]), rv = num(r[I.RadVel]);
    const m = r[I.M] ? 'M' + parseInt(r[I.M]) : '';
    const cur = CURATED[key] || (m && CURATED[norm(m)]);
    let d = NaN, dq = 'u';
    const ocRow = ocByName.get(key), gcRow = gcByName.get(key);
    if (cur && Number.isFinite(cur.d)) { d = cur.d; dq = 'c'; }
    else if (ocRow && Number.isFinite(num(ocRow[oc.idx.DistPc]))) { d = num(ocRow[oc.idx.DistPc]); dq = 'g'; }
    else if (gcRow && Number.isFinite(num(gcRow[gc.idx.Rsun]))) { d = num(gcRow[gc.idx.Rsun]) * 1000; dq = 'g'; }
    else if (Number.isFinite(pax) && pax > 0.02 && !GAL_TYPES.has(type)) { d = 1000 / pax; dq = 'p'; }
    else if (GAL_TYPES.has(type) && Number.isFinite(z) && z * C_KMS > 400) { d = (z * C_KMS / H0) * 1e6; dq = 'z'; }
    else if (GAL_TYPES.has(type)) {
      const mm = Number.isFinite(bmag) ? bmag : (Number.isFinite(vmag) ? vmag + 0.8 : NaN);
      d = Number.isFinite(mm) ? Math.pow(10, (mm + 20 + 5) / 5) : 30e6; dq = 'e';
    } else { d = NOMINAL[type] || 1500; dq = 'u'; }
    const common = [cur?.common, r[I['Common names']]].filter(Boolean).join(',').split(',').map(s => s.trim()).filter((s, k, a) => s && a.indexOf(s) === k).join(', ');
    const e = {
      n: name.replace(/^(NGC|IC)0*(\d)/, '$1 $2'), m, t: type, ra: +ra.toFixed(5), dec: +dec.toFixed(5), d: +d.toPrecision(5), dq,
      maj: Number.isFinite(maj) ? maj : 0, min: Number.isFinite(min) ? min : 0, pa: Number.isFinite(pa) ? pa : 0,
      mag: Number.isFinite(vmag) ? vmag : (Number.isFinite(bmag) ? bmag : null), con: r[I.Const], hub: r[I.Hubble] || '',
      z: Number.isFinite(z) ? z : null, rv: Number.isFinite(rv) ? rv : null, cn: common,
      ids: r[I.Identifiers] || '', desc: cur?.desc || '', notes: r[I['NED notes']] || ''
    };
    if (ocRow) { e.age = num(ocRow[oc.idx.AgeNN]); e.nstars = parseInt(ocRow[oc.idx.nbstars07]); }
    if (gcRow) { e.rper = num(gcRow[gc.idx.Rper]); e.rapo = num(gcRow[gc.idx.Rapo]); }
    dso.push(e);
  }
}
addNGC('ngc.csv');
addNGC('ngc_addendum.csv');
const ngcCount = dso.length;
// Open clusters not in NGC/IC
for (const r of oc.rows) {
  const raw = r[oc.idx.Cluster];
  const key = norm(raw.replace(/_/g, ''));
  if (seenNames.has(key)) continue;
  const d = num(r[oc.idx.DistPc]); if (!Number.isFinite(d)) continue;
  seenNames.add(key);
  const r50 = num(r[oc.idx.r50]);
  dso.push({ n: raw.replace(/_/g, ' '), m: '', t: 'OCl', ra: num(r[oc.idx.RA_ICRS]), dec: num(r[oc.idx.DE_ICRS]), d, dq: 'g',
    maj: Number.isFinite(r50) ? +(2 * r50 * 60).toFixed(1) : 5, min: Number.isFinite(r50) ? +(2 * r50 * 60).toFixed(1) : 5, pa: 0, mag: null, con: '', hub: '',
    z: null, rv: null, cn: '', ids: r[oc.idx.SimbadName] || '', desc: '', notes: '', age: num(r[oc.idx.AgeNN]), nstars: parseInt(r[oc.idx.nbstars07]) });
}
for (const r of gc.rows) {
  const key = norm(r[gc.idx.Name]);
  if (seenNames.has(key)) continue;
  seenNames.add(key);
  dso.push({ n: r[gc.idx.Name], m: '', t: 'GCl', ra: num(r[gc.idx.RAJ2000]), dec: num(r[gc.idx.DEJ2000]), d: num(r[gc.idx.Rsun]) * 1000, dq: 'g',
    maj: 5, min: 5, pa: 0, mag: null, con: '', hub: '', z: null, rv: num(r[gc.idx.RV]), cn: '', ids: '', desc: '', notes: '',
    rper: num(r[gc.idx.Rper]), rapo: num(r[gc.idx.Rapo]) });
}
for (const x of EXTRA_DSO) {
  const key = norm(x.n);
  if (seenNames.has(key)) continue;
  seenNames.add(key);
  dso.push({ n: x.n, m: /^M\d+/.test(x.aka) ? x.aka.split(',')[0] : '', t: x.t, ra: x.ra, dec: x.dec, d: x.d, dq: 'c', maj: x.maj, min: x.min, pa: x.pa,
    mag: null, con: '', hub: x.hubble || '', z: null, rv: null, cn: [x.n, ...String(x.aka || '').split(',')].map(s => s.trim()).filter((s, i, a) => s && a.indexOf(s) === i).join(', '), ids: '', desc: x.desc, notes: '' });
}
// --- Merge duplicate cluster entries: the same cluster arrives from OpenNGC ("Mel022"), Cantat-Gaudin ("Melotte_22") and the
//     curated list ("Pleiades"), each at a slightly different distance, which stacked three volumes into a spear. Keep the
//     best-sourced entry (curated > Gaia > parallax) and pool the names.
{
  const CL = new Set(['OCl', 'GCl', '*Ass', 'Cl+N']);
  const rank = e => (e.dq === 'c' ? 3 : e.dq === 'g' ? 2 : e.dq === 'p' ? 1 : 0);
  const aliases = e => { const a = new Set(); for (const s of [e.n, e.m, ...String(e.cn || '').split(','), ...String(e.ids || '').split(',')]) { const k = s && canon(s); if (k && k.length > 1) a.add(k); } return a; };
  const byAlias = new Map(); const out = []; let mergedN = 0;
  for (const e of dso) {
    if (!CL.has(e.t)) { out.push(e); continue; }
    const al = aliases(e); let target = null;
    for (const k of al) { const j = byAlias.get(k); if (j === undefined) continue; const o = out[j]; const sep = Math.hypot((e.ra - o.ra) * Math.cos(e.dec * DEG), e.dec - o.dec); if (sep < 1.5) { target = j; break; } }
    if (target === null) { const j = out.length; out.push(e); for (const k of al) if (!byAlias.has(k)) byAlias.set(k, j); continue; }
    const o = out[target]; const win = rank(e) > rank(o) ? e : o, lose = win === e ? o : e;
    const names = [...String(win.cn || '').split(','), lose.n, ...String(lose.cn || '').split(',')].map(s => s.trim()).filter((s, i, a) => s && s !== win.n && a.indexOf(s) === i);
    win.cn = names.join(', '); win.m = win.m || lose.m; win.desc = win.desc || lose.desc; win.notes = win.notes || lose.notes;
    win.ids = [...String(win.ids || '').split(','), ...String(lose.ids || '').split(',')].map(s => s.trim()).filter((s, i, a) => s && a.indexOf(s) === i).join(',');
    if (win.age === undefined && lose.age !== undefined) win.age = lose.age; if (win.nstars === undefined && lose.nstars !== undefined) win.nstars = lose.nstars;
    if (!(win.maj > 0) && lose.maj > 0) { win.maj = lose.maj; win.min = lose.min; win.pa = lose.pa; }
    if (win.mag === null && lose.mag !== null) win.mag = lose.mag; if (!win.con) win.con = lose.con;
    out[target] = win; for (const k of al) if (!byAlias.has(k)) byAlias.set(k, target); mergedN++;
  }
  dso.length = 0; dso.push(...out);
  console.log(`  ${mergedN} duplicate cluster entries merged`);
}
// image list for DSS thumbnails
const imgList = [];
for (let k = 0; k < dso.length; k++) {
  const e = dso[k];
  const notable = e.m || CURATED[norm(e.n)] || (e.dq === 'c') || (e.mag !== null && e.mag < 10.5 && e.maj > 1.5);
  if (!notable) continue;
  if (e.t === 'BH' || e.t === 'QSO' || e.t === 'GGroup' || e.t === '*Ass' || e.t === 'Other' || e.t === '*') continue;
  if (e.maj > 400) continue; // too big for a useful cutout
  const fov = Math.min(Math.max((e.maj || 5) * 1.5 / 60, 0.04), 6);
  e.img = norm(e.n).replace(/[^A-Z0-9]/g, '_');
  imgList.push({ id: e.img, ra: e.ra, dec: e.dec, fov: +fov.toFixed(4), t: e.t, maj: e.maj });
}
console.log(`  ${dso.length} deep-sky objects (${ngcCount} NGC/IC/addendum), ${imgList.length} flagged for DSS images`);
writeJSON('dso.json', dso);
writeJSON('dso_imglist.json', imgList);

// ---------- 2MRS galaxies ----------
console.log('2MRS...');
const mrs = readCSV('mrs.csv');
const MI = mrs.idx;
const mPos = [], mAttr = [], mIds = [];
for (const r of mrs.rows) {
  const cz = num(r[MI.cz]); if (!Number.isFinite(cz) || cz < 300) continue;
  const ra = num(r[MI.RAJ2000]), dec = num(r[MI.DEJ2000]);
  const dMpc = cz / H0;
  mPos.push(ra, dec, dMpc);
  const k = num(r[MI.Ktmag]), riso = num(r[MI.Riso]), ba = num(r[MI['b/a']]);
  const T = parseInt((r[MI.type] || '').trim()); // RC3-style T type
  mAttr.push(Number.isFinite(k) ? k : 12, Number.isFinite(riso) ? Math.pow(10, riso) / 60 : 0.3, Number.isFinite(ba) ? ba : 0.7, Number.isFinite(T) ? T : 99);
  mIds.push(r[MI.ID].padEnd(16, ' ').slice(0, 16));
}
packBinary('mrs.bin', { pos: Float32Array.from(mPos), attr: Float32Array.from(mAttr) });
fs.writeFileSync(path.join(OUT, 'mrs_ids.txt'), mIds.join(''));
console.log(`  ${mPos.length / 3} galaxies`);

// ---------- SMALL BODIES ----------
console.log('Small bodies...');
const DWARF = new Set(['1 Ceres', '134340 Pluto', '136199 Eris', '136108 Haumea', '136472 Makemake', '225088 Gonggong', '50000 Quaoar', '90482 Orcus', '90377 Sedna', '120347 Salacia', '4 Vesta', '2 Pallas', '10 Hygiea', '2060 Chiron', '5145 Pholus', '19521 Chaos', '28978 Ixion', '55565', '20000 Varuna', '3200 Phaethon', '433 Eros', '99942 Apophis', '101955 Bennu', '162173 Ryugu', '25143 Itokawa', '4179 Toutatis', '1036 Ganymed', '243 Ida', '951 Gaspra', '253 Mathilde', '21 Lutetia', '2867 Steins', '4 Vesta', '16 Psyche', '52246 Donaldjohanson', '3548 Eurybates', '15094 Polymele', '11351 Leucus', '21900 Orus', '617 Patroclus', '65803 Didymos', '486958 Arrokoth', '624 Hektor', '588 Achilles', '3 Juno', '6 Hebe', '7 Iris', '15 Eunomia', '511 Davida', '704 Interamnia', '87 Sylvia', '31 Euphrosyne', '65 Cybele', '107 Camilla', '52 Europa', '9 Metis', '324 Bamberga', '1862 Apollo', '2062 Aten', '1221 Amor', '1566 Icarus', '3753 Cruithne', '469219 Kamoʻoalewa', '1998 KY26', '2010 TK7', '2001 FO32', '7482']);
function loadSB(file) {
  const j = JSON.parse(fs.readFileSync(path.join(RAW, file), 'utf8'));
  const F = Object.fromEntries(j.fields.map((f, k) => [f, k]));
  return j.data.map(row => Object.fromEntries(j.fields.map((f, k) => [f, row[k]])));
}
const ast = [...loadSB('asteroids.json'), ...loadSB('tnos.json')];
const seenSB = new Set();
const aEl = [], aNames = [], aExtra = [];
const notable = [];
for (const b of ast) {
  const full = b.full_name.trim();
  if (seenSB.has(full)) continue; seenSB.add(full);
  const a = num(b.a), e = num(b.e), inc = num(b.i), om = num(b.om), w = num(b.w), ma = num(b.ma), ep = num(b.epoch);
  if (![a, e, inc, om, w, ma, ep].every(Number.isFinite) || e >= 1) continue;
  const dia = num(b.diameter), Hm = num(b.H);
  aEl.push(a, e, inc, om, w, ma, ep - 2451545.0, Number.isFinite(Hm) ? Hm : 20, Number.isFinite(dia) ? dia : 0);
  const short = full.replace(/\s*\(.*\)$/, '').replace(/^\s*(\d+)\s+/, '$1 ').trim();
  aNames.push(short);
  aExtra.push([b.class || '', num(b.albedo), num(b.rot_per), num(b.per_y)]);
  const numName = short.match(/^(\d+)\s+([A-Za-z].*)$/);
  if (numName && DWARF.has(short) || (numName && parseInt(numName[1]) <= 10)) notable.push(aNames.length - 1);
}
packBinary('asteroids.bin', { el: Float32Array.from(aEl) });
writeJSON('asteroids_meta.json', { names: aNames, extra: aExtra.map(x => x.map(v => (typeof v === 'number' && !Number.isFinite(v)) ? null : v)), notable });
console.log(`  ${aNames.length} asteroids/TNOs`);

const com = loadSB('comets.json');
const comets = [];
for (const b of com) {
  const a = num(b.a), e = num(b.e), inc = num(b.i), om = num(b.om), w = num(b.w), ma = num(b.ma), ep = num(b.epoch), q = num(b.q), tp = num(b.tp);
  if (![e, inc, om, w, ep, q].every(Number.isFinite)) continue;
  comets.push({ n: b.full_name.trim(), a: Number.isFinite(a) ? a : null, e, i: inc, om, w, ma: Number.isFinite(ma) ? ma : null, ep, q, tp: Number.isFinite(tp) ? tp : null,
    per: num(b.per_y) || null, dia: num(b.diameter) || null, cls: b.class || '' });
}
writeJSON('comets.json', comets);
console.log(`  ${comets.length} comets`);

// ---------- SATELLITES (CelesTrak GP) ----------
console.log('Satellites...');
const satMap = new Map();
const groups = [];
for (const f of fs.readdirSync(RAW)) {
  const m = f.match(/^sat_(.+)\.json$/); if (!m) continue;
  let arr; try { arr = JSON.parse(fs.readFileSync(path.join(RAW, f), 'utf8')); } catch { continue; }
  if (!Array.isArray(arr)) continue;
  const gi = groups.length; groups.push(m[1]);
  for (const s of arr) {
    const id = s.NORAD_CAT_ID;
    if (!satMap.has(id)) satMap.set(id, { ...s, g: [] });
    satMap.get(id).g.push(gi);
  }
}
const sats = [];
for (const s of satMap.values()) {
  sats.push({
    n: s.OBJECT_NAME, id: s.NORAD_CAT_ID, intl: s.OBJECT_ID, ep: s.EPOCH, mm: s.MEAN_MOTION, ecc: s.ECCENTRICITY, inc: s.INCLINATION,
    raan: s.RA_OF_ASC_NODE, argp: s.ARG_OF_PERICENTER, ma: s.MEAN_ANOMALY, bstar: s.BSTAR, mmdot: s.MEAN_MOTION_DOT, mmddot: s.MEAN_MOTION_DDOT,
    rev: s.REV_AT_EPOCH, els: s.ELEMENT_SET_NO, cls: s.CLASSIFICATION_TYPE, g: s.g
  });
}
writeJSON('satellites.json', { groups, fetched: new Date().toISOString(), sats });
console.log(`  ${sats.length} satellites from ${groups.length} groups`);

// ---------- SPACECRAFT (Horizons state vectors) ----------
console.log('Spacecraft...');
const SC_DESC = {
  '-31': 'Launched 1977. Flew past Jupiter and Saturn, then crossed the heliopause into interstellar space in 2012. The most distant human-made object, still transmitting with a 22-watt radio.',
  '-32': 'Launched 1977. The only spacecraft to visit all four giant planets; entered interstellar space in 2018.',
  '-98': 'Launched 2006. Flew past Pluto in July 2015 and the Kuiper Belt object Arrokoth in 2019, now heading out of the Solar System.',
  '-23': 'Launched 1972, the first spacecraft to cross the asteroid belt and fly past Jupiter. Contact was lost in 2003; it coasts toward Aldebaran.',
  '-24': 'Launched 1973. First spacecraft to fly past Saturn (1979). Contact was lost in 1995.',
  '-170': 'James Webb Space Telescope, launched December 2021, observing in the infrared from a halo orbit around the Sun-Earth L2 point 1.5 million km from Earth.',
  '-96': 'Parker Solar Probe, launched 2018. Repeatedly dives through the Sun\'s corona, reaching within 6.1 million km of the surface at 690,000 km/h, the fastest object ever built.',
  '-61': 'Juno, in a polar orbit around Jupiter since 2016, mapping its gravity, magnetic field and deep atmosphere.',
  '-49': 'Lucy, launched 2021, on a 12-year tour of eight Trojan asteroids that share Jupiter\'s orbit.',
  '-255': 'Psyche, launched 2023, travelling to the metal-rich asteroid 16 Psyche, arriving in 2029.',
  '-159': 'Europa Clipper, launched October 2024, en route to Jupiter\'s ocean moon Europa, arriving in 2030.',
  '-121': 'BepiColombo, joint ESA/JAXA mission to Mercury, launched 2018, due to enter orbit in late 2026.',
  '-28': 'JUICE, ESA\'s Jupiter Icy Moons Explorer, launched 2023, arriving at Jupiter in 2031.',
  '-74': 'Mars Reconnaissance Orbiter, imaging Mars at 30 cm resolution since 2006.',
  '-82': 'Cassini (mission ended 2017; archived trajectory).',
  '-226': 'Rosetta (mission ended 2016; archived trajectory).',
  '-37': 'Hayabusa2, returned samples of asteroid Ryugu in 2020 and is on an extended mission to asteroid 1998 KY26.',
  '-168': 'Mars 2020 Perseverance cruise stage (archived).',
  '-202': 'MAVEN, studying the upper atmosphere of Mars since 2014.',
  '-234': 'STEREO-A, watching the Sun from a heliocentric orbit ahead of Earth since 2006.',
  '-236': 'MESSENGER (mission ended 2015; archived trajectory).',
  '-235': 'STEREO-B (contact lost 2014; archived trajectory).',
  '-1': 'Geotail, joint Japan/NASA magnetospheric mission (ended 2022).',
  '-240': 'SMART-1 (archived).',
  '-21': 'SOHO, the Solar and Heliospheric Observatory, watching the Sun from the L1 point since 1996.',
  '-140': 'Deep Impact / EPOXI (contact lost 2013; archived trajectory).',
};
const spacecraft = [];
function parseTable(txt) {
  const soe = txt.indexOf('$$SOE'), eoe = txt.indexOf('$$EOE');
  if (soe < 0) return null;
  const t = [], r = [], v = [];
  for (const line of txt.slice(soe + 5, eoe).trim().split('\n')) {
    const p = line.split(',').map(s => s.trim());
    if (p.length < 8) continue;
    t.push(parseFloat(p[0]));
    for (let k = 2; k < 5; k++) r.push(+parseFloat(p[k]).toPrecision(8));
    for (let k = 5; k < 8; k++) v.push(+parseFloat(p[k]).toPrecision(7));
  }
  return { t, r, v };
}
const SC_NAMES = { '-31': 'Voyager 1', '-32': 'Voyager 2', '-98': 'New Horizons', '-23': 'Pioneer 10', '-24': 'Pioneer 11', '-96': 'Parker Solar Probe', '-49': 'Lucy', '-255': 'Psyche',
  '-159': 'Europa Clipper', '-121': 'BepiColombo', '-28': 'JUICE', '-37': 'Hayabusa2', '-234': 'STEREO-A', '-170': 'James Webb Space Telescope', '-21': 'SOHO', '-61': 'Juno', '-74': 'Mars Reconnaissance Orbiter' };
for (const f of fs.readdirSync(path.join(RAW, 'sc'))) {
  const m = f.match(/^(helio|geo|elem)_(-\d+)\.txt$/); if (!m) continue;
  const txt = fs.readFileSync(path.join(RAW, 'sc', f), 'utf8');
  const id = m[2], kind = m[1];
  if (kind === 'elem') {
    const soe = txt.indexOf('$$SOE'); if (soe < 0) continue;
    const p = txt.slice(soe + 5).trim().split('\n')[0].split(',').map(s => s.trim());
    const parent = id === '-61' ? 599 : 499;
    spacecraft.push({ id, n: SC_NAMES[id], desc: SC_DESC[id] || '', frame: 'kepler', parent, jd: parseFloat(p[0]), e: parseFloat(p[2]), i: parseFloat(p[4]), om: parseFloat(p[5]), w: parseFloat(p[6]), n_degps: parseFloat(p[8]), ma: parseFloat(p[9]), a: parseFloat(p[11]), per_s: parseFloat(p[13]) });
  } else {
    const tab = parseTable(txt); if (!tab || tab.t.length < 2) { console.log('   ! no table for', f); continue; }
    spacecraft.push({ id, n: SC_NAMES[id], desc: SC_DESC[id] || '', frame: kind, ...tab });
  }
}
writeJSON('spacecraft.json', spacecraft);
console.log(`  ${spacecraft.length} spacecraft`);

// ---------- MOONS (Horizons osculating elements, ICRF frame, relative to parent) ----------
console.log('Moons...');
const moons = [];
for (const f of fs.readdirSync(path.join(RAW, 'moons'))) {
  const txt = fs.readFileSync(path.join(RAW, 'moons', f), 'utf8');
  const nm = txt.match(/Target body name:\s*(.+?)\s*\(/);
  const soe = txt.indexOf('$$SOE'); if (soe < 0 || !nm) { console.log('   ! no data for', f); continue; }
  const line = txt.slice(soe + 5).trim().split('\n')[0];
  const p = line.split(',').map(s => s.trim());
  // JDTDB, Cal, EC, QR, IN, OM, W, Tp, N, MA, TA, A, AD, PR
  const id = parseInt(f.replace('.txt', ''));
  const parent = { 3: 399, 4: 499, 5: 599, 6: 699, 7: 799, 8: 899, 9: 999 }[Math.floor(id / 100)];
  const radius = txt.match(/(?:Mean radius|Radius)[^=]*=\s*([\d.]+)/i);
  moons.push({ id, parent, n: nm[1].trim(), jd: parseFloat(p[0]), e: parseFloat(p[2]), i: parseFloat(p[4]), om: parseFloat(p[5]), w: parseFloat(p[6]),
    n_degps: parseFloat(p[8]), ma: parseFloat(p[9]), a: parseFloat(p[11]), per_s: parseFloat(p[13]), rHorizons: radius ? parseFloat(radius[1]) : null });
}
writeJSON('moons.json', moons);
console.log(`  ${moons.length} moons`);

// ---------- GAIA DR3 STARS IN THE MAGELLANIC CLOUDS ----------
console.log('Gaia Magellanic Clouds...');
{
  const gal = [['lmc', 49970, 'Large Magellanic Cloud'], ['smc', 62440, 'Small Magellanic Cloud']];
  const ra = [], dec = [], g = [], bprp = [], which = [], ids = [];
  for (const [k, dpc, name] of gal) {
    const f = path.join(RAW, `gaia_${k}.csv`); if (!fs.existsSync(f)) continue;
    const t = readCSV(`gaia_${k}.csv`); const I = t.idx;
    for (const r of t.rows) {
      const G = num(r[I.phot_g_mean_mag]); if (!Number.isFinite(G)) continue;
      ra.push(num(r[I.ra])); dec.push(num(r[I.dec])); g.push(G); const c = num(r[I.bp_rp]); bprp.push(Number.isFinite(c) ? c : 0.8); which.push(k === 'lmc' ? 0 : 1); ids.push(String(r[I.source_id]).padStart(19, ' '));
    }
  }
  packBinary('mcstars.bin', { ra: Float32Array.from(ra), dec: Float32Array.from(dec), g: Float32Array.from(g), bprp: Float32Array.from(bprp), which: Uint8Array.from(which) });
  fs.writeFileSync(path.join(OUT, 'mcstars_ids.txt'), ids.join(''));
  console.log(`  ${ra.length} Gaia stars`);
}

// ---------- GAIA DR3 BRIGHT STARS (G < 11, good parallaxes): the deeper field beyond Hipparcos ----------
console.log('Gaia bright stars...');
if (fs.existsSync(path.join(RAW, 'gaia_bright.csv'))) {
  // HYG stars already cover the bright end; drop Gaia stars within 2" of an HYG star to avoid doubles
  const cell = new Map();
  for (let k = 0; k < N0; k++) { const x = pos[3 * k], y = pos[3 * k + 1], z = pos[3 * k + 2], d = distArr[k]; const ra = ((Math.atan2(y, x) / DEG) + 360) % 360, dec = Math.asin(z / d) / DEG; const key = `${Math.floor(ra * 10)}_${Math.floor(dec * 10)}`; if (!cell.has(key)) cell.set(key, []); cell.get(key).push([ra, dec]); }
  const gpos = [], gabs = [], gci = [], gmag = [], gids = [];
  const ocG = readCSV('open_clusters.csv'); const OCG = ocG.idx; let gSnapped = 0;
  const gClusters = ocG.rows.map(r => ({ ra: num(r[OCG.RA_ICRS]), dec: num(r[OCG.DE_ICRS]), r50: num(r[OCG.r50]), D: curatedClusterD.get(canon(r[OCG.Cluster])) ?? num(r[OCG.DistPc]) })).filter(c => Number.isFinite(c.D) && Number.isFinite(c.r50) && c.D > 0);
  const t = readCSV('gaia_bright.csv'); const G = t.idx;
  let dropped = 0;
  for (const r of t.rows) {
    const ra = num(r[G.ra]), dec = num(r[G.dec]), plx = num(r[G.parallax]), g = num(r[G.phot_g_mean_mag]), bprp = num(r[G.bp_rp]);
    if (!Number.isFinite(plx) || plx <= 0 || !Number.isFinite(g)) continue;
    const key = `${Math.floor(ra * 10)}_${Math.floor(dec * 10)}`;
    let dup = false;
    for (const dr of [-1, 0, 1]) for (const dd of [-1, 0, 1]) { const arr = cell.get(`${Math.floor(ra * 10) + dr}_${Math.floor(dec * 10) + dd}`); if (!arr) continue; for (const [r2, d2] of arr) { if (Math.abs(d2 - dec) < 0.0006 && Math.abs((r2 - ra) * Math.cos(dec * DEG)) < 0.0006) { dup = true; break; } } if (dup) break; }
    if (dup) { dropped++; continue; }
    let dist = 1000 / plx;
    for (const c of gClusters) {
      const rad = Math.max(0.12, c.r50 * 1.6);
      if (Math.abs(dec - c.dec) > rad) continue;
      const dra = Math.abs(((ra - c.ra + 540) % 360) - 180) * Math.cos(dec * DEG);
      if (Math.hypot(dra, dec - c.dec) > rad) continue;
      if (Math.abs(dist - c.D) / c.D > 0.5) continue;
      dist = c.D * (1 + (Math.random() - 0.5) * 2 * Math.min(0.03, c.D * c.r50 * DEG / c.D)); gSnapped++; break;
    }
    const [x, y, z] = raDecToXYZ(ra, dec, dist);
    gpos.push(x, y, z); gabs.push(g - 5 * Math.log10(dist / 10)); gci.push(Number.isFinite(bprp) ? Math.max(-0.4, Math.min(2.5, 0.8 * bprp - 0.05)) : 0.7); gmag.push(g); gids.push(String(r[G.source_id]).padStart(19, ' '));
  }
  packBinary('gaia_bright.bin', { pos: Float32Array.from(gpos), absmag: Float32Array.from(gabs), ci: Float32Array.from(gci), mag: Float32Array.from(gmag) });
  fs.writeFileSync(path.join(OUT, 'gaia_bright_ids.txt'), gids.join(''));
  console.log(`  ${gpos.length / 3} Gaia stars kept (${dropped} duplicates of HYG dropped, ${gSnapped} cluster members snapped)`);
}

// ---------- TEXTURES ----------
const texOut = path.join(ROOT, 'public', 'textures');
fs.mkdirSync(texOut, { recursive: true });
for (const f of fs.readdirSync(path.join(RAW, 'tex'))) fs.copyFileSync(path.join(RAW, 'tex', f), path.join(texOut, f));
console.log('Done.');
