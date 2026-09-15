import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 100)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

// ---- build-data: TESS + Kepler candidates and J1407b appended to the exoplanet systems
patch('scripts/build-data.mjs', [[`const exoOut = [];
for (const [host, s] of systems) exoOut.push({ host, ...s });`, `// --- candidates: TESS Objects of Interest (PC/APC) and Kepler KOI candidates; plus famous unconfirmed objects ---
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
console.log(\`  candidates: \${nToi} TESS, \${nKoi} Kepler, + J1407b\`);
const exoOut = [];
for (const [host, s] of systems) exoOut.push({ host, ...s });`]]);

// ---- Exoplanet layer: candidate labelling, ring systems, measured brightness maps
patch('src/layers/Exoplanets.js', [
  [`    const cls = p.rade < 1.25 ? 'Earth-sized' : p.rade < 2 ? 'super-Earth' : p.rade < 6 ? 'Neptune-like' : 'gas giant';`, `    const cls = p.rade < 1.25 ? 'Earth-sized' : p.rade < 2 ? 'super-Earth' : p.rade < 6 ? 'Neptune-like' : 'gas giant';
    if (p.cand) rows.unshift(['Status', p.cand]);
    const mapInfo = MAPPED[p.n];
    if (mapInfo) rows.push(['Measured brightness map', mapInfo.note]);
    if (p.rings) rows.push(['Ring system', \`inner \${fmtDist(p.rings.inner)}, outer \${fmtDist(p.rings.outer)} (inferred from the 2007 eclipse light curve)\`]);`],
  [`    return { kind: 'exoplanet', kindLabel: 'Exoplanet', name: p.n, sub: \`\${cls} orbiting \${s.host}\`, radius: p.radiusKm, rows,
      desc: \`A \${cls} exoplanet\${temp}, discovered in \${p.yr || 'an unknown year'} by the \${p.m.toLowerCase()} method.`, `    return { kind: 'exoplanet', kindLabel: p.cand ? 'Exoplanet candidate' : 'Exoplanet', name: p.n, sub: \`\${cls} \${p.cand ? 'candidate ' : ''}orbiting \${s.host}\`, radius: p.radiusKm, rows,
      desc: (p.cand ? \`Candidate, not yet confirmed: \${p.cand}. \` : '') + (mapInfo ? mapInfo.desc + ' ' : '') + \`A \${cls} exoplanet\${temp}, \${p.yr ? 'discovered in ' + p.yr : 'detected'} by the \${p.m.toLowerCase()} method.`],
  [`      source: 'NASA Exoplanet Archive, Planetary Systems Composite Parameters (pscomppars).', ref: { layer: 'exo', k, name: p.n },`, `      source: p.cand ? (p.fac === 'TESS' ? 'NASA Exoplanet Archive, TESS Objects of Interest (TOI) table.' : p.fac === 'Kepler' ? 'NASA Exoplanet Archive, Kepler cumulative KOI table; distance estimated from Kepler magnitude and stellar parameters.' : 'Kenworthy & Mamajek 2015 (ApJ 800, 126); SuperWASP light curve of V1400 Cen.') : 'NASA Exoplanet Archive, Planetary Systems Composite Parameters (pscomppars).', ref: { layer: 'exo', k, name: p.n },`],
  [`        u.locked.value = Number.isFinite(p.per) && p.per < 12 ? 1 : 0;`, `        u.locked.value = Number.isFinite(p.per) && p.per < 12 ? 1 : 0;
        const mi = MAPPED[p.n]; u.hotspot.value = mi ? mi.hotspot * DEG : 0; u.cloudSide.value = mi ? mi.cloud : 0;
        // ring systems (J1407b)
        if (p.rings && !slot.ring) { const rg = new THREE.RingGeometry(p.rings.inner, p.rings.outer, 192, 1); slot.ring = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: 0xc8b8a0, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false })); slot.ring.rotation.x = -Math.PI / 2 + 0.2; slot.mesh.add(slot.ring); }
        if (slot.ring) { slot.ring.visible = !!p.rings; if (p.rings) slot.ring.scale.setScalar(1 / p.radiusKm); }`],
  [`function pcol_set(arr, i, c) {`, `// Exoplanets with published brightness / temperature maps (eclipse mapping and phase curves). hotspot: longitude offset of the
// hottest point east of the substellar point (degrees); cloud: -1 clouds on the western dayside, 0 none, 1 eastern.
const MAPPED = {
  'HD 189733 b': { hotspot: 30, cloud: 0, note: 'Spitzer 8 µm phase curve (Knutson+ 2007): hottest point offset ~30° east of the substellar point — the first exoplanet brightness map.', desc: 'This is one of the few exoplanets with a measured brightness map: Spitzer phase curves place its hotspot about 30° east of the point facing the star, so its glow is drawn shifted accordingly.' },
  'Kepler-7 b': { hotspot: 41, cloud: -1, note: 'Kepler optical + Spitzer thermal phase curves (Demory+ 2013): reflective clouds cover the western half of the dayside, the east is clear.', desc: 'Kepler-7 b has a real cloud map: its western dayside is covered in bright reflective clouds while the east is clear, so clouds are drawn on the western hemisphere.' },
  'WASP-43 b': { hotspot: 7, cloud: 1, note: 'HST/Spitzer and JWST MIRI phase curves (Stevenson+ 2014, Bell+ 2024): hotspot ~7° east, nightside blanketed by clouds.', desc: 'WASP-43 b has a JWST temperature map: a hotspot just east of the substellar point and a cloud-covered nightside.' },
  'WASP-18 b': { hotspot: 0, cloud: 0, note: 'JWST NIRISS eclipse map (Coulombe+ 2023): hotspot at the substellar point, steep temperature drop toward the limb.', desc: 'WASP-18 b was mapped by JWST eclipse mapping: the hotspot sits at the substellar point with a steep temperature gradient.' },
  'HD 209458 b': { hotspot: 20, cloud: 0, note: 'Spitzer phase curve (Zellem+ 2014): hotspot offset ~20° east.', desc: 'Spitzer phase curves give HD 209458 b a hotspot about 20° east of the substellar point.' },
  'WASP-121 b': { hotspot: 5, cloud: 0, note: 'HST/JWST phase curves (Mikal-Evans+ 2022): small eastward hotspot offset, nightside clouds of minerals.', desc: 'WASP-121 b has a measured thermal map from HST and JWST phase curves.' },
  'LTT 9779 b': { hotspot: 20, cloud: -1, note: 'JWST NIRISS phase curve (Coulombe+ 2025): highly reflective western dayside clouds.', desc: 'JWST mapped LTT 9779 b: reflective clouds on its western dayside make it unusually shiny.' },
  'HD 80606 b': { hotspot: 0, cloud: 0, note: 'Spitzer observed its atmosphere heating by ~700 K during periastron passage (Laughlin+ 2009).', desc: 'HD 80606 b is known for Spitzer catching its atmosphere heat up violently as it swings past its star on a highly eccentric orbit.' },
};
function pcol_set(arr, i, c) {`],
]);
// shader: hotspot offset + cloud hemisphere
patch('src/render/materials.js', [
  [`    uniforms: { type: { value: 0 }, teq: { value: 300 }, seed: { value: 1 }, starPos: { value: new THREE.Vector3() }, starColor: { value: new THREE.Color(1, 1, 1) }, locked: { value: 0 }, spin: { value: 0 } },`, `    uniforms: { type: { value: 0 }, teq: { value: 300 }, seed: { value: 1 }, starPos: { value: new THREE.Vector3() }, starColor: { value: new THREE.Color(1, 1, 1) }, locked: { value: 0 }, spin: { value: 0 }, hotspot: { value: 0 }, cloudSide: { value: 0 } },`],
  [`      uniform float type; uniform float teq; uniform float seed; uniform vec3 starPos; uniform vec3 starColor; uniform float locked; uniform float spin;`, `      uniform float type; uniform float teq; uniform float seed; uniform vec3 starPos; uniform vec3 starColor; uniform float locked; uniform float spin; uniform float hotspot; uniform float cloudSide;`],
  [`        if (teq > 700.0) { float glow = smoothstep(700.0, 2500.0, teq); float side = locked > 0.5 ? smoothstep(-0.4, 0.4, ndl) * 0.9 + 0.1 : 0.7; col += blackbody(teq) * glow * side * 0.9; }`, `        if (teq > 700.0) {
          float glow = smoothstep(700.0, 2500.0, teq);
          // measured hotspot offset: rotate the star direction about the pole by the offset angle
          vec3 up = normalize(mat3(modelMatrix) * vec3(0.0, 1.0, 0.0));
          vec3 Lr = normalize(L - up * dot(L, up)); vec3 Lt = cross(up, Lr);
          vec3 Lh = normalize(Lr * cos(hotspot) + Lt * sin(hotspot)) ;
          float ndh = dot(N, Lh);
          float side = locked > 0.5 ? smoothstep(-0.4, 0.4, ndh) * 0.9 + 0.1 : 0.7;
          col += blackbody(teq) * glow * side * 0.9;
        }
        if (cloudSide != 0.0) {
          // measured cloud hemisphere: bright reflective clouds on one side of the dayside
          vec3 up = normalize(mat3(modelMatrix) * vec3(0.0, 1.0, 0.0)); vec3 Lt = cross(up, normalize(L - up * dot(L, up)));
          float west = dot(N, Lt) * cloudSide;
          float cl = smoothstep(-0.1, 0.5, west) * smoothstep(-0.1, 0.3, ndl);
          col = mix(col, starColor * vec3(0.9), cl * 0.75);
        }`],
]);
console.log('patched');
