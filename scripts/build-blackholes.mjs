// Builds public/data/quasars.bin + quasar_names.txt (Milliquas v8, every object with a redshift: each one is an accreting
// supermassive black hole) and public/data/blackholes.json (stellar-mass black holes from BlackCAT + well-known persistent
// systems, intermediate-mass candidates, and dynamically measured supermassive black holes from van den Bosch 2016 +
// famous extreme cases).
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const ROOT = process.cwd();
const RAW = path.join(ROOT, 'raw'), OUT = path.join(ROOT, 'public', 'data');

function packBinary(file, segments) {
  const meta = []; const bufs = []; let offset = 0;
  for (const [name, arr] of Object.entries(segments)) {
    const b = Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength);
    meta.push({ name, type: arr.constructor.name, offset, length: arr.length });
    bufs.push(b); offset += b.length; const pad = (8 - (offset % 8)) % 8; if (pad) { bufs.push(Buffer.alloc(pad)); offset += pad; }
  }
  const header = Buffer.from(JSON.stringify({ segments: meta }), 'utf8');
  const hlen = Buffer.alloc(4); hlen.writeUInt32LE(header.length, 0);
  const padH = Buffer.alloc((8 - ((4 + header.length) % 8)) % 8);
  fs.writeFileSync(file, Buffer.concat([hlen, header, padH, ...bufs]));
}
const hmsToDeg = s => { const [h, m, sec] = s.split(':').map(Number); return (h + m / 60 + sec / 3600) * 15; };
const dmsToDeg = s => { const neg = s.trim().startsWith('-'); const [d, m, sec] = s.replace(/^[+-]/, '').split(':').map(Number); const v = d + m / 60 + sec / 3600; return neg ? -v : v; };
const firstNum = s => { if (!s) return NaN; const m = String(s).replace(/&sim;|~|≥|≤|>|<|\?/g, ' ').match(/-?\d+(\.\d+)?/); return m ? parseFloat(m[0]) : NaN; };

// ------------------------------------------------------------------ Milliquas
{
  const s = zlib.gunzipSync(fs.readFileSync(path.join(RAW, 'milliquas.dat.gz'))).toString('latin1');
  const lines = s.split('\n');
  const ra = [], dec = [], z = [], mag = [], type = [], names = [], src = [];
  // redshift citations (Milliquas rz column): kept per object so the info panel can name the survey the distance comes from
  const srcIdx = new Map(); const srcList = [];
  const PHOT_SOURCES = new Set(['3HSP', 'MQ', 'GAIA3']); let dropped = 0;
  const TYPES = { Q: 0, A: 1, B: 2, K: 3, N: 4, S: 5 };
  let n = 0;
  for (const L of lines) {
    if (L.length < 82) continue;
    const zz = parseFloat(L.slice(76, 82)); if (!(zz > 0)) continue;
    const t = L.slice(51, 55); let code = 6; for (const ch of t) if (TYPES[ch] !== undefined) { code = TYPES[ch]; break; }
    if (code === 6 || code === 5) continue; // stars flagged as candidates, unknown classes
    // only spectroscopic redshifts: Milliquas rounds photometric estimates to 0.1 (BL Lacs and a few catalogues carry them)
    const rz = L.slice(90, 96).trim(); const rounded = Math.abs(zz * 10 - Math.round(zz * 10)) < 1e-6;
    if (rz === 'GAIA3' || (rounded && (code === 2 || PHOT_SOURCES.has(rz)))) { dropped++; continue; }
    let si = srcIdx.get(rz); if (si === undefined) { si = srcList.length < 255 ? srcList.length : 255; if (si < 255) { srcIdx.set(rz, si); srcList.push(rz); } }
    src.push(si);
    ra.push(parseFloat(L.slice(0, 11))); dec.push(parseFloat(L.slice(12, 23))); z.push(zz);
    const rm = parseFloat(L.slice(56, 61)); mag.push(rm > 0 && rm < 25.5 ? Math.round(rm * 10) : 0);
    type.push(code);
    const name = L.slice(25, 50).trim();
    if (!/J\d{4,6}[.\d]*[+-]\d{4,6}/.test(name)) names.push(n + '\t' + name);
    n++;
  }
  packBinary(path.join(OUT, 'quasars.bin'), { ra: Float32Array.from(ra), dec: Float32Array.from(dec), z: Float32Array.from(z), mag: Uint8Array.from(mag), type: Uint8Array.from(type), src: Uint8Array.from(src) });
  fs.writeFileSync(path.join(OUT, 'quasar_names.txt'), names.join('\n'));
  fs.writeFileSync(path.join(OUT, 'quasar_sources.txt'), srcList.join('\n'));
  console.log(`  ${n} quasars/AGN with spectroscopic redshifts (${names.length} with literature names, ${srcList.length} redshift sources; ${dropped} photometric-redshift objects dropped)`);
}

// ------------------------------------------------------------------ black holes with measured masses
const bh = [];
const RS_KM = 2.9532; // Schwarzschild radius per solar mass, km
// stellar-mass: BlackCAT (Corral-Santana et al. 2016, kept updated) — X-ray transients with dynamically confirmed or strongly suspected black holes
{
  const cat = JSON.parse(fs.readFileSync(path.join(RAW, 'blackcat_full.json'), 'utf8'));
  for (const e of cat) {
    const dk = /Sgr A/.test(e.distKpc) ? 8.2 : firstNum(e.distKpc === 'Distance' ? '' : e.distKpc); // "Distance" = the page had no value; "1 pc of Sgr A*" = Galactic Centre
    const massText = (e.mass || '').replace(/&sim;/g, '~').trim();
    const mass = firstNum(massText);
    const aka = (e.alt || '').split(/\s*=\s*/).map(s => s.trim()).filter(Boolean);
    bh.push({ n: e.name, aka, kind: 'stellar', ra: +hmsToDeg(e.ra).toFixed(5), dec: +dmsToDeg(e.dec).toFixed(5), d: Number.isFinite(dk) ? dk * 1000 : 8000, dq: Number.isFinite(dk) ? 'l' : 'u',
      mass: Number.isFinite(mass) ? mass : null, massText: massText || '', method: massText ? 'dynamical (companion radial velocities)' : 'not yet measured (X-ray spectral/timing signature of a black hole)',
      porb: e.porbD && /\d/.test(e.porbD) ? e.porbD.replace(/&sim;/g, '~') : '', year: e.year || '', spec: e.spec && e.spec !== 'N' ? e.spec : '', host: 'Milky Way', src: 'BlackCAT (Corral-Santana et al. 2016, A&A 587, A61; online update)' });
  }
}
// persistent / dormant / extragalactic stellar-mass systems and intermediate-mass candidates (literature values)
const EXTRA_STELLAR = [
  { n: 'Cygnus X-1', aka: ['Cyg X-1', 'HDE 226868'], ra: 299.59032, dec: 35.20160, d: 2220, mass: 21.2, massText: '21.2 ± 2.2', method: 'dynamical (Miller-Jones et al. 2021)', porb: '5.6 d', year: '1964', spec: 'O9.7Iab', desc: 'The first object widely accepted to be a black hole (1971), a persistent X-ray source fed by the wind of its blue supergiant companion.' },
  { n: 'SS 433', aka: ['V1343 Aql'], ra: 287.95653, dec: 4.98272, d: 5500, mass: 4.3, massText: '~4.3 (uncertain, 3–15)', method: 'dynamical (uncertain)', porb: '13.1 d', year: '1978', spec: 'A7Ib', desc: 'Microquasar with precessing relativistic jets moving at 26% of the speed of light, inside the supernova remnant W50.' },
  { n: '1E 1740.7-2942', aka: ['Great Annihilator'], ra: 265.97833, dec: -29.74500, d: 8500, mass: null, massText: '', method: 'black-hole candidate (persistent hard X-ray spectrum, radio jets)', porb: '12.7 d', year: '1984', spec: '', desc: 'Persistent microquasar near the Galactic Centre, nicknamed the Great Annihilator for a reported electron-positron annihilation line.' },
  { n: 'GRS 1758-258', aka: [], ra: 270.30125, dec: -25.74139, d: 8500, mass: null, massText: '', method: 'black-hole candidate (persistent hard X-ray spectrum, radio jets)', porb: '18.5 d', year: '1990', spec: '', desc: 'One of the two persistent hard X-ray sources of the Galactic bulge, with double-sided radio jets.' },
  { n: '4U 1957+115', aka: ['V1408 Aql'], ra: 299.99908, dec: 11.70830, d: 5000, dq: 'u', mass: null, massText: '', method: 'black-hole candidate (soft-state X-ray spectrum)', porb: '9.3 h', year: '1974', spec: '', desc: 'Persistent low-mass X-ray binary that has stayed in the soft, disc-dominated state since discovery.' },
  { n: 'LMC X-1', aka: [], ra: 84.91190, dec: -69.74317, d: 49600, mass: 10.9, massText: '10.9 ± 1.4', method: 'dynamical (Orosz et al. 2009)', porb: '3.9 d', year: '1969', spec: 'O7III', host: 'Large Magellanic Cloud', desc: 'The first extragalactic black hole found, a persistent X-ray source in the Large Magellanic Cloud.' },
  { n: 'LMC X-3', aka: [], ra: 84.73583, dec: -64.08417, d: 49600, mass: 7.0, massText: '6.98 ± 0.56', method: 'dynamical (Orosz et al. 2014)', porb: '1.7 d', year: '1971', spec: 'B3V', host: 'Large Magellanic Cloud', desc: 'Persistent black-hole X-ray binary in the Large Magellanic Cloud with a B-type companion.' },
  { n: 'M33 X-7', aka: [], ra: 23.46262, dec: 30.53170, d: 840000, mass: 15.65, massText: '15.65 ± 1.45', method: 'dynamical, eclipsing (Orosz et al. 2007)', porb: '3.45 d', year: '1981', spec: 'O7-8III', host: 'Triangulum Galaxy (M33)', desc: 'Eclipsing black-hole binary in the Triangulum Galaxy; one of the most massive stellar black holes with a dynamical mass.' },
  { n: 'IC 10 X-1', aka: [], ra: 5.10733, dec: 59.28328, d: 700000, mass: 24, massText: '~24–33 (uncertain)', method: 'dynamical (Wolf-Rayet companion; uncertain)', porb: '34.9 h', year: '2007', spec: 'WN', host: 'IC 10', desc: 'Black hole orbiting a Wolf-Rayet star in the starburst dwarf IC 10; possibly the most massive stellar black hole in an X-ray binary.' },
  { n: 'NGC 300 X-1', aka: [], ra: 13.77104, dec: -37.70567, d: 1900000, mass: 17, massText: '17 ± 4', method: 'dynamical (Wolf-Rayet companion; Binder et al. 2021)', porb: '32.8 h', year: '2007', spec: 'WN5', host: 'NGC 300', desc: 'Wolf-Rayet + black-hole binary in the nearby spiral NGC 300.' },
  { n: 'Gaia BH1', aka: ['Gaia DR3 4373465352415301632'], ra: 262.17120, dec: -0.58109, d: 480, mass: 9.62, massText: '9.62 ± 0.18', method: 'astrometric + spectroscopic orbit (El-Badry et al. 2023)', porb: '185.6 d', year: '2022', spec: 'G', desc: 'The nearest known black hole: a dormant black hole orbited by a Sun-like star, found in Gaia astrometry. It emits no X-rays.' },
  { n: 'Gaia BH2', aka: ['Gaia DR3 5870569352746779008'], ra: 207.56952, dec: -59.23930, d: 1160, mass: 8.94, massText: '8.94 ± 0.34', method: 'astrometric + spectroscopic orbit (El-Badry et al. 2023)', porb: '1277 d', year: '2023', spec: 'K0III', desc: 'Dormant black hole with a red giant companion on a 3.5-year orbit, the second found by Gaia.' },
  { n: 'Gaia BH3', aka: ['Gaia DR3 4318465066420528000'], ra: 294.82786, dec: 14.93055, d: 591, mass: 32.7, massText: '32.70 ± 0.82', method: 'astrometric + spectroscopic orbit (Gaia Collaboration 2024)', porb: '11.6 yr', year: '2024', spec: 'G (metal-poor giant)', desc: 'The most massive stellar black hole known in the Milky Way, orbited by an ancient metal-poor star in the constellation Aquila.' },
  { n: 'Omega Centauri IMBH', aka: ['NGC 5139 central black hole'], ra: 201.69700, dec: -47.47947, d: 5430, mass: 8200, massText: '≥ 8,200', method: 'fast-moving stars in the core (Häberle et al. 2024)', porb: '', year: '2024', spec: '', kind: 'imbh', host: 'Omega Centauri', desc: 'Intermediate-mass black hole candidate in the core of Omega Centauri, revealed by stars moving faster than the cluster escape speed.' },
  { n: 'HLX-1', aka: ['ESO 243-49 HLX-1', '2XMM J011028.1-460421'], ra: 17.61708, dec: -46.07250, d: 95000000, mass: 20000, massText: '~20,000 (3,000–300,000)', method: 'X-ray luminosity and spectral modelling', porb: '', year: '2009', spec: '', kind: 'imbh', host: 'ESO 243-49', desc: 'The strongest intermediate-mass black hole candidate: a hyper-luminous X-ray source in the outskirts of the galaxy ESO 243-49.' },
];
for (const x of EXTRA_STELLAR) bh.push({ kind: 'stellar', dq: 'l', host: 'Milky Way', src: 'literature values (see method)', ...x, aka: x.aka || [] });

// supermassive: van den Bosch (2016, ApJ 831, 134) compilation of dynamical masses
{
  const parse = f => { const lines = fs.readFileSync(path.join(RAW, f), 'utf8').trim().split('\n'); const H = lines[0].split(','); return lines.slice(1).map(l => { const cells = []; let cur = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { cells.push(cur); cur = ''; } else cur += ch; } cells.push(cur); return Object.fromEntries(H.map((h, i) => [h, cells[i]])); }); };
  const rows = [...parse('smbh_table2.csv'), ...parse('smbh_table3.csv')];
  const METH = { star: 'stellar dynamics', gas: 'gas dynamics', maser: 'water-maser disc', reverb: 'reverberation mapping', 'CO ': 'molecular gas dynamics' };
  for (const r of rows) {
    let name = r.Name.trim(); const ra = parseFloat(r._RA), dec = parseFloat(r._DE); const logM = parseFloat(r.logBHMass); const dist = parseFloat(r.Dist);
    if (name === 'MW') continue; // Sgr A* is added below with the GRAVITY value
    if (!Number.isFinite(logM) || !Number.isFinite(ra)) continue;
    const disp = name.replace(/^(NGC|IC|UGC|M)(\d)/, '$1 $2').replace(/^A(\d+)BCG$/, 'Abell $1 BCG').replace(/^Circinus$/, 'Circinus Galaxy');
    const meth = r.Meth.trim();
    bh.push({ n: `${disp} central black hole`, aka: [disp, r.SimbadName.trim()].filter(Boolean), kind: 'smbh', ra: +ra.toFixed(5), dec: +dec.toFixed(5), d: dist * 1e6, dq: 'l', mass: Math.pow(10, logM), massText: `10^${logM.toFixed(2)} (± ${r.e_logBHMass} dex)`,
      method: METH[meth] || meth, host: disp, src: 'van den Bosch (2016, ApJ 831, 134) compilation of dynamical black-hole masses' });
  }
}
const EXTRA_SMBH = [
  { n: 'Sagittarius A*', aka: ['Sgr A*'], ra: 266.41683, dec: -29.00781, d: 8178, mass: 4.297e6, massText: '4.297 ± 0.012 million', method: 'stellar orbits (GRAVITY Collaboration 2022); imaged by the Event Horizon Telescope in 2022', host: 'Milky Way', desc: 'The supermassive black hole at the centre of our Galaxy. Its shadow was imaged by the Event Horizon Telescope in 2022.' },
  { n: 'M87*', aka: ['Messier 87 black hole', 'NGC 4486 central black hole', 'Virgo A'], ra: 187.70593, dec: 12.39112, d: 16.8e6, mass: 6.5e9, massText: '6.5 ± 0.7 billion', method: 'Event Horizon Telescope shadow (2019) and stellar dynamics', host: 'M87', desc: 'The first black hole ever imaged (Event Horizon Telescope, April 2019). It powers a 5,000-light-year relativistic jet.' },
  { n: 'TON 618', aka: [], ra: 194.19752, dec: 31.46640, z: 2.219, mass: 4.07e10, massText: '~40 billion (virial estimate; 66 billion in some analyses)', method: 'broad emission-line virial estimate', host: 'TON 618 (quasar)', desc: 'Hyperluminous quasar whose black hole is among the most massive known, roughly 40 billion solar masses, 10 billion light-years away.' },
  { n: 'Holmberg 15A central black hole', aka: ['Holm 15A', 'Holmberg 15A'], ra: 10.46042, dec: -9.30306, d: 214e6, mass: 4.0e10, massText: '40 ± 8 billion', method: 'stellar dynamics (Mehrgan et al. 2019)', host: 'Holmberg 15A (Abell 85 BCG)', desc: 'The most massive black hole measured directly by stellar dynamics, in the central galaxy of the cluster Abell 85.' },
  { n: 'OJ 287 primary black hole', aka: ['OJ 287'], ra: 133.70365, dec: 20.10852, z: 0.306, mass: 1.835e10, massText: '18.35 billion (primary) + 150 million (secondary)', method: 'binary black-hole model of the 12-year outburst cycle', host: 'OJ 287 (BL Lac object)', desc: 'A blazar with a binary supermassive black hole: the smaller one punches through the accretion disc of the larger every 12 years, producing predictable flares.' },
  { n: 'S5 0014+81', aka: [], ra: 4.28542, dec: 81.58553, z: 3.366, mass: 4.0e10, massText: '~40 billion (virial estimate)', method: 'broad emission-line virial estimate', host: 'S5 0014+81 (blazar)', desc: 'Distant blazar hosting one of the most massive black holes known, seen as it was 12 billion years ago.' },
  { n: 'Abell 1201 BCG central black hole', aka: ['Abell 1201 BCG'], ra: 168.22625, dec: 13.43583, z: 0.169, mass: 3.27e10, massText: '32.7 ± 2.1 billion', method: 'gravitational lensing (Nightingale et al. 2023)', host: 'Abell 1201 BCG', desc: 'Ultramassive black hole weighed by the way it bends light from a background galaxy — the first measured purely by gravitational lensing.' },
  { n: 'Cygnus A central black hole', aka: ['Cygnus A', '3C 405'], ra: 299.86815, dec: 40.73392, d: 232e6, mass: 2.5e9, massText: '2.5 ± 0.7 billion', method: 'gas dynamics (Tadhunter et al. 2003)', host: 'Cygnus A', desc: 'The black hole powering Cygnus A, one of the brightest radio sources in the sky, with two enormous radio lobes.' },
  { n: 'NGC 1600 central black hole', aka: ['NGC 1600'], ra: 67.91621, dec: -5.08633, d: 64e6, mass: 1.7e10, massText: '17 ± 1.5 billion', method: 'stellar dynamics (Thomas et al. 2016)', host: 'NGC 1600', desc: 'An unexpectedly massive black hole in an isolated elliptical galaxy, 17 billion solar masses.' },
  { n: 'IC 1101 central black hole', aka: ['IC 1101'], ra: 220.17168, dec: 5.74467, z: 0.0779, mass: 4e10, massText: '~40 billion (rough estimate from the galaxy core size)', method: 'estimate from the depleted stellar core (very uncertain)', host: 'IC 1101', desc: 'Central black hole of IC 1101, one of the largest galaxies known, in the cluster Abell 2029.' },
  { n: '3C 273 black hole', aka: ['3C 273'], ra: 187.27792, dec: 2.05239, z: 0.1583, mass: 8.9e8, massText: '890 million', method: 'reverberation mapping / GRAVITY interferometry', host: '3C 273 (quasar)', desc: 'The first quasar identified (1963) and the optically brightest, 2.4 billion light-years away.' },
];
// convert redshift-only distances to comoving distance (flat ΛCDM, H0 = 70, Ωm = 0.3)
function comovingMpc(z) { const n = 2000; let s = 0; for (let i = 0; i < n; i++) { const zz = z * (i + 0.5) / n; s += 1 / Math.sqrt(0.3 * Math.pow(1 + zz, 3) + 0.7); } return 4282.7 * z * s / n; }
for (const x of EXTRA_SMBH) { const d = x.d ?? comovingMpc(x.z) * 1e6; bh.push({ kind: 'smbh', dq: 'l', src: 'literature values (see method)', ...x, d, aka: x.aka || [] }); }
// de-duplicate: a curated entry replaces a van den Bosch row for the same galaxy (same position within 1 arcmin)
const DEG = Math.PI / 180;
for (let i = bh.length - 1; i >= 0; i--) for (let j = 0; j < i; j++) {
  const a = bh[i], b = bh[j]; if (a.kind !== b.kind) continue;
  if (Math.hypot((a.ra - b.ra) * Math.cos(a.dec * DEG), a.dec - b.dec) < 1 / 60) { const keep = a.src.startsWith('literature') ? a : b, drop = keep === a ? b : a; keep.aka = [...new Set([...keep.aka, drop.n, ...drop.aka])].filter(s => s !== keep.n); if (!keep.massText && drop.massText) { keep.massText = drop.massText; keep.mass = drop.mass; keep.method = drop.method; } bh.splice(bh.indexOf(drop), 1); break; }
}
for (const e of bh) { e.rs = e.mass ? +(RS_KM * e.mass).toPrecision(4) : null; e.ra = +e.ra.toFixed(5); e.dec = +e.dec.toFixed(5); e.d = +e.d.toPrecision(6); }
fs.writeFileSync(path.join(OUT, 'blackholes.json'), JSON.stringify(bh));
console.log(`  ${bh.length} black holes with positions: ${bh.filter(e => e.kind === 'stellar').length} stellar-mass, ${bh.filter(e => e.kind === 'imbh').length} intermediate, ${bh.filter(e => e.kind === 'smbh').length} supermassive`);
