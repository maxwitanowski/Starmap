import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 120)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

// ---------------------------------------------------------------- build-data: alias canon + curated cluster distances
patch('scripts/build-data.mjs', [
  [`import { CURATED, EXTRA_DSO, STAR_NOTES, norm } from './curated.mjs';`, `import { CURATED, EXTRA_DSO, STAR_NOTES, norm } from './curated.mjs';

// Canonical cluster designation: "Mel022", "Melotte 22" and "Melotte_22" all become MEL22 so duplicates can be merged.
function canon(s) {
  let k = norm(String(s)).replace(/[\\s_]/g, '');
  k = k.replace(/^MELOTTE/, 'MEL').replace(/^COLLINDER/, 'CR').replace(/^COL(?=\\d)/, 'CR').replace(/^CALDWELL/, 'C').replace(/^MESSIER/, 'M').replace(/^TRUMPLER/, 'TR').replace(/^RUPRECHT/, 'RUP').replace(/^BOCHUM/, 'BO').replace(/^BERKELEY/, 'BE').replace(/^HAFFNER/, 'HAF').replace(/^CZERNIK/, 'CZ').replace(/^DOLIDZE/, 'DO').replace(/^STOCK/, 'ST');
  k = k.replace(/^([A-Z]+)0+(\\d)/, '$1$2');
  return k;
}
// curated (literature) cluster distances win over the Gaia catalogue value so stars, volume and marker all sit at one distance
const curatedClusterD = new Map();
for (const x of EXTRA_DSO) if ((x.t === 'OCl' || x.t === '*Ass') && Number.isFinite(x.d)) for (const a of [x.n, ...String(x.aka || '').split(',')]) if (a.trim()) curatedClusterD.set(canon(a), x.d);
`],
  [`  const clusters = ocSnap.rows.map(r => ({ ra: num(r[OC.RA_ICRS]), dec: num(r[OC.DE_ICRS]), r50: num(r[OC.r50]), D: num(r[OC.DistPc]) })).filter(c => Number.isFinite(c.D) && Number.isFinite(c.r50) && c.D > 0);`,
   `  const clusters = ocSnap.rows.map(r => ({ ra: num(r[OC.RA_ICRS]), dec: num(r[OC.DE_ICRS]), r50: num(r[OC.r50]), D: curatedClusterD.get(canon(r[OC.Cluster])) ?? num(r[OC.DistPc]) })).filter(c => Number.isFinite(c.D) && Number.isFinite(c.r50) && c.D > 0);`],
  [`  const gClusters = ocG.rows.map(r => ({ ra: num(r[OCG.RA_ICRS]), dec: num(r[OCG.DE_ICRS]), r50: num(r[OCG.r50]), D: num(r[OCG.DistPc]) })).filter(c => Number.isFinite(c.D) && Number.isFinite(c.r50) && c.D > 0);`,
   `  const gClusters = ocG.rows.map(r => ({ ra: num(r[OCG.RA_ICRS]), dec: num(r[OCG.DE_ICRS]), r50: num(r[OCG.r50]), D: curatedClusterD.get(canon(r[OCG.Cluster])) ?? num(r[OCG.DistPc]) })).filter(c => Number.isFinite(c.D) && Number.isFinite(c.r50) && c.D > 0);`],
  // Cantat-Gaudin distance for OpenNGC clusters: prefer the curated value if one exists under an alias
  [`// image list for DSS thumbnails`, `// --- Merge duplicate cluster entries: the same cluster arrives from OpenNGC ("Mel022"), Cantat-Gaudin ("Melotte_22") and the
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
  console.log(\`  \${mergedN} duplicate cluster entries merged\`);
}
// image list for DSS thumbnails`],
]);

// ---------------------------------------------------------------- curated: Pillars of Creation
patch('scripts/curated.mjs', [
  [`  { n: 'Hyades', aka: 'Melotte 25, C41',`, `  { n: 'Pillars of Creation', aka: 'Eagle Nebula pillars, M16 pillars', t: 'HII', ra: 274.7163, dec: -13.8222, d: 1740, maj: 5, min: 4, pa: 0, desc: 'The famous columns of cold gas and dust inside the Eagle Nebula, photographed by Hubble in 1995 and again by JWST. The tallest pillar is about 4 light-years long; new stars are forming in their tips.' },
  { n: 'Hyades', aka: 'Melotte 25, C41',`],
]);

// ---------------------------------------------------------------- volumes: skip unknown distances; spherical clusters
patch('src/layers/NebulaVolumes.js', [
  [`      if (!neb && !cl) return;
      if (e.img)`, `      if (!neb && !cl) return;
      if (e.dq === 'u') return; // unknown distance: the physical size would be a guess, keep the flat sprite only
      if (e.img)`],
  [`    for (let n = 0; n < N; n++) {
      const r = rnd() * acc;
      let lo = 0, hi = S * S - 1;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (cdf[mid] < r) lo = mid + 1; else hi = mid; }
      const k = lo;
      const u = ((k % S) + rnd()) / S, v = (Math.floor(k / S) + rnd()) / S;
      const lx = (u - 0.5) * 2 * half * ratioX, ly = (0.5 - v) * 2 * half;
      const rad = Math.hypot(u - 0.5, v - 0.5) * 2;
      let lz;
      if (isShell) { const rn = Math.min(1, rad / objFrac); lz = (rnd() < 0.5 ? -1 : 1) * Math.sqrt(Math.max(0, 1 - rn * rn)) * halfObj * 0.85 + gauss() * 0.1 * halfObj; }
      else if (isCluster) { const rn = Math.min(1, rad / objFrac); lz = gauss() * depth * halfObj * Math.sqrt(Math.max(0.05, 1 - rn * rn * 0.8)); }
      else lz = gauss() * depth * halfObj;`,
   `    // sample the sky-plane positions first so the line-of-sight spread can be matched to the measured lateral spread
    const samp = new Array(N); let sumR2 = 0;
    for (let n = 0; n < N; n++) {
      const r = rnd() * acc;
      let lo = 0, hi = S * S - 1;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (cdf[mid] < r) lo = mid + 1; else hi = mid; }
      const k = lo;
      const u = ((k % S) + rnd()) / S, v = (Math.floor(k / S) + rnd()) / S;
      samp[n] = [u, v, k];
      const hx = (u - 0.5) * 2 * ratioX, hy = (0.5 - v) * 2; sumR2 += hx * hx + hy * hy;
    }
    // Clusters are roughly spherical: a particle at projected radius rho gets a depth drawn from a Gaussian whose width grows
    // with rho (core radius aCore), so the core stays a compact ball and the overall along/across spread is 1:1 instead of
    // a broad Gaussian pointing at the Sun (which looked like a spear from the side).
    const sigLat = Math.max(0.02, Math.sqrt(sumR2 / (2 * N))), aCore = 0.5 * sigLat;
    const clusterDepth = (hx, hy) => gauss() * 0.667 * Math.sqrt(aCore * aCore + hx * hx + hy * hy) * half;
    for (let n = 0; n < N; n++) {
      const [u, v, k] = samp[n];
      const lx = (u - 0.5) * 2 * half * ratioX, ly = (0.5 - v) * 2 * half;
      const rad = Math.hypot(u - 0.5, v - 0.5) * 2;
      let lz;
      if (isShell) { const rn = Math.min(1, rad / objFrac); lz = (rnd() < 0.5 ? -1 : 1) * Math.sqrt(Math.max(0, 1 - rn * rn)) * halfObj * 0.85 + gauss() * 0.1 * halfObj; }
      else if (isCluster) lz = clusterDepth((u - 0.5) * 2 * ratioX, (0.5 - v) * 2);
      else lz = gauss() * depth * halfObj;`],
  [`      const lz = gauss() * (isCluster ? 0.5 : 0.3) * halfObj * Math.sqrt(Math.max(0.1, 1 - rn * rn * 0.7));`,
   `      const lz = isCluster ? clusterDepth((fx - 0.5) * 2 * ratioX, (0.5 - fy) * 2) : gauss() * 0.3 * halfObj * Math.sqrt(Math.max(0.1, 1 - rn * rn * 0.7));`],
]);

// ---------------------------------------------------------------- galaxy sprites: bright point core when tiny on screen
const DOT_FRAG = `    float rr = length(cell) * 2.0;
    vec3 dotc = vColor * exp(-rr * rr * 5.0) * 1.4 * vAlpha; // sub-pixel galaxies read as bright points, not smeared texture
    c = mix(c, dotc, vDot);
    gl_FragColor = vec4(c, max(max(c.r, c.g), c.b));`;
patch('src/layers/Galaxies2MRS.js', [
  [`  varying vec2 vUv; varying vec3 vColor; varying float vAlpha;
  #include <common>`, `  varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vDot;
  #include <common>`],
  [`    vColor = iColor * (1.0 + 2.5 * (1.0 - smoothstep(2.0, 30.0, pxH))); vAlpha = alpha * smoothstep(0.3, 1.2, d / iSize.y);`,
   `    vColor = iColor * (1.0 + 2.5 * (1.0 - smoothstep(2.0, 30.0, pxH))); vAlpha = alpha * smoothstep(0.3, 1.2, d / iSize.y); vDot = 1.0 - smoothstep(4.0, 14.0, pxH);`],
  [`  uniform sampler2D uAtlas; varying vec2 vUv; varying vec3 vColor; varying float vAlpha;
  #include <logdepthbuf_pars_fragment>`, `  uniform sampler2D uAtlas; varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vDot;
  #include <logdepthbuf_pars_fragment>`],
  [`    vec3 c = t.rgb * vColor * vign * vAlpha;
    gl_FragColor = vec4(c, max(max(c.r, c.g), c.b));`, `    vec3 c = t.rgb * vColor * vign * vAlpha;
${DOT_FRAG}`],
  [`uMinPx: { value: 2.2 }, uDim: { value: 1 }`, `uMinPx: { value: 3.0 }, uDim: { value: 1 }`],
]);
patch('src/layers/DeepSky.js', [
  [`  varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vImg;
  #include <common>`, `  varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vImg; varying float vDot;
  #include <common>`],
  [`    vColor = iColor * (1.0 + 2.5 * (1.0 - smoothstep(2.0, 30.0, pxH))); vAlpha = alpha; vImg = iImg;`,
   `    vColor = iColor * (1.0 + 2.5 * (1.0 - smoothstep(2.0, 30.0, pxH))); vAlpha = alpha; vImg = iImg; vDot = 1.0 - smoothstep(4.0, 14.0, pxH);`],
  [`  uniform sampler2D uAtlas; varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vImg;
  #include <logdepthbuf_pars_fragment>`, `  uniform sampler2D uAtlas; varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vImg; varying float vDot;
  #include <logdepthbuf_pars_fragment>`],
  [`    vec3 c = t.rgb * vColor * vign * vAlpha * (1.0 + 0.1 * vImg);
    gl_FragColor = vec4(c, max(max(c.r, c.g), c.b));`, `    vec3 c = t.rgb * vColor * vign * vAlpha * (1.0 + 0.1 * vImg);
${DOT_FRAG}`],
  [`uFovScale: { value: 1000 }, uMinPx: { value: 2.5 } } });`, `uFovScale: { value: 1000 }, uMinPx: { value: 3.0 } } });`],
]);

// ---------------------------------------------------------------- every star: ignore the magnitude limit
patch('src/layers/Stars.js', [
  [`uniform float uHidePc; uniform float uFovScale;
  varying vec3 vColor; varying float vAlpha; varying float vCore;`, `uniform float uHidePc; uniform float uFovScale; uniform float uAllStars;
  varying vec3 vColor; varying float vAlpha; varying float vCore;`],
  [`    alpha *= smoothstep(uLimitMag + 1.2, uLimitMag - 0.3, m);
    s = min(s, 90.0);`, `    alpha *= smoothstep(uLimitMag + 1.2, uLimitMag - 0.3, m);
    if (uAllStars > 0.5) alpha = max(alpha, 0.55); // "every star" mode: the faintest still show as a dim point
    s = min(s, 90.0);`],
]);
for (const f of ['src/layers/Stars.js', 'src/layers/GaiaField.js', 'src/layers/GaiaStars.js']) patch(f, [[`uHidePc: { value: 0.0`, `uAllStars: { value: 0 }, uHidePc: { value: 0.0`]]);
patch('index.html', [[`<label class="slider-row"><span>Label density</span>`, `<label class="slider-row"><span>Show every star</span><input id="all-stars" type="checkbox" /></label>
    <label class="slider-row"><span>Label density</span>`]]);
patch('src/ui/UI.js', [[`    $('label-density').oninput = e => { u.labelDensity = +e.target.value; };`, `    $('label-density').oninput = e => { u.labelDensity = +e.target.value; };
    $('all-stars').onchange = e => { const on = e.target.checked ? 1 : 0; for (const k of ['stars', 'mcstars', 'gaia']) u.layers[k].mat.uniforms.uAllStars.value = on; $('limit-mag').disabled = !!on; };`]]);
patch('src/main.js', [[`const DATA_VERSION = 4;`, `const DATA_VERSION = 5;`]]);
console.log('patched');
