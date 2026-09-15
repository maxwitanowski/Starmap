import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 120)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }
patch('scripts/build-blackholes.mjs', [
  [`  const ra = [], dec = [], z = [], mag = [], type = [], names = [];`, `  const ra = [], dec = [], z = [], mag = [], type = [], names = [], src = [];
  // redshift citations (Milliquas rz column): kept per object so the info panel can name the survey the distance comes from
  const srcIdx = new Map(); const srcList = [];
  const PHOT_SOURCES = new Set(['3HSP', 'MQ', 'GAIA3']); let dropped = 0;`],
  [`    if (code === 6 || code === 5) continue; // stars flagged as candidates, unknown classes`, `    if (code === 6 || code === 5) continue; // stars flagged as candidates, unknown classes
    // only spectroscopic redshifts: Milliquas rounds photometric estimates to 0.1 (BL Lacs and a few catalogues carry them)
    const rz = L.slice(90, 96).trim(); const rounded = Math.abs(zz * 10 - Math.round(zz * 10)) < 1e-6;
    if (rz === 'GAIA3' || (rounded && (code === 2 || PHOT_SOURCES.has(rz)))) { dropped++; continue; }
    let si = srcIdx.get(rz); if (si === undefined) { si = srcList.length < 255 ? srcList.length : 255; if (si < 255) { srcIdx.set(rz, si); srcList.push(rz); } }
    src.push(si);`],
  [`  packBinary(path.join(OUT, 'quasars.bin'), { ra: Float32Array.from(ra), dec: Float32Array.from(dec), z: Float32Array.from(z), mag: Uint8Array.from(mag), type: Uint8Array.from(type) });
  fs.writeFileSync(path.join(OUT, 'quasar_names.txt'), names.join('\n'));
  console.log(\`  \${n} quasars/AGN with redshifts (\${names.length} with literature names)\`);`, `  packBinary(path.join(OUT, 'quasars.bin'), { ra: Float32Array.from(ra), dec: Float32Array.from(dec), z: Float32Array.from(z), mag: Uint8Array.from(mag), type: Uint8Array.from(type), src: Uint8Array.from(src) });
  fs.writeFileSync(path.join(OUT, 'quasar_names.txt'), names.join('\n'));
  fs.writeFileSync(path.join(OUT, 'quasar_sources.txt'), srcList.join('\n'));
  console.log(\`  \${n} quasars/AGN with spectroscopic redshifts (\${names.length} with literature names, \${srcList.length} redshift sources; \${dropped} photometric-redshift objects dropped)\`);`],
]);
patch('src/main.js', [[`['quasarNames', 'quasar_names.txt', (u) => loadText(u)],`, `['quasarNames', 'quasar_names.txt', (u) => loadText(u)], ['quasarSources', 'quasar_sources.txt', (u) => loadText(u)],`], [`const DATA_VERSION = 6;`, `const DATA_VERSION = 7;`]]);
patch('src/core/Universe.js', [[`L.quasars = new QuasarLayer(this, data.quasars, data.quasarNames);`, `L.quasars = new QuasarLayer(this, data.quasars, data.quasarNames, data.quasarSources);`]]);
patch('src/layers/Quasars.js', [
  [`const QUASAR_RS = 2.95e9;`, `// human names for the most common redshift sources (Milliquas "rz" citations); the rest are shown as their Milliquas code
const SOURCE_NAMES = { DR16Q: 'SDSS DR16 quasar catalogue (Lyke+ 2020), spectroscopic', DR16: 'SDSS DR16 spectroscopy', DR17: 'SDSS DR17 spectroscopy', DR18Q: 'SDSS DR18 quasar catalogue', DR14Q: 'SDSS DR14 quasar catalogue', DR16QN: 'SDSS DR16 quasar catalogue (new)', DESEDR: 'DESI Early Data Release spectroscopy', DESVI: 'DESI visual-inspection catalogue', '2QZ': '2dF QSO Redshift Survey', '2SLAQ': '2dF-SDSS LRG and QSO survey', LOZAGN: 'low-redshift AGN compilation (spectroscopic)', LAMQ1: 'LAMOST quasar survey DR1', LAMQ3: 'LAMOST quasar survey DR2-3', LAMQ5: 'LAMOST quasar survey DR4-5', LAMQ9: 'LAMOST quasar survey DR6-9', '2MAGN': '2MASS-selected AGN spectroscopy', '6dAGN': '6dF Galaxy Survey AGN', AAOz: 'AAOmega spectroscopy', OzDES2: 'OzDES survey', AGES: 'AGN and Galaxy Evolution Survey', HETDEX: 'HETDEX survey', RLAGN: 'radio-loud AGN spectroscopy', DPeake: 'Peake+ AGN spectroscopy' };
const QUASAR_RS = 2.95e9;`],
  [`  constructor(universe, data, namesText) {
    this.u = universe; this.visible = true;
    this.ra = data.ra; this.dec = data.dec; this.z = data.z; this.magRaw = data.mag; this.type = data.type;`, `  constructor(universe, data, namesText, sourcesText = '') {
    this.u = universe; this.visible = true;
    this.ra = data.ra; this.dec = data.dec; this.z = data.z; this.magRaw = data.mag; this.type = data.type; this.src = data.src; this.sources = sourcesText.split('\n');`],
  [`      ['Cosmology', 'flat ΛCDM, H₀ = 70 km/s/Mpc, Ωm = 0.3 (comoving position)'],`, `      ['Redshift source', (() => { const code = this.src ? this.sources[this.src[i]] : ''; return SOURCE_NAMES[code] || (code ? \`\${code} (literature reference indexed in Milliquas), spectroscopic\` : 'spectroscopic (Milliquas)'); })()],
      ['Position', 'catalogued sky position (0.1″ level) and spectroscopic redshift; distance = comoving distance in the cosmology below. Zoomed out, the wedge shapes are the footprints of the surveys that took spectra (SDSS covers the north galactic cap; DESI, 2QZ and LAMOST add strips), not structure in the universe — and the Milky Way\'s dust hides the plane'],
      ['Cosmology', 'flat ΛCDM, H₀ = 70 km/s/Mpc, Ωm = 0.3 (comoving position)'],`],
  [`source: 'Million Quasars catalogue v8 (Flesch 2023, OJAp 6, 49) via CDS VII/294.'`, `source: 'Million Quasars catalogue v8 (Flesch 2023, OJAp 6, 49) via CDS VII/294 — only objects with spectroscopic redshifts are placed; photometric estimates are excluded.'`],
]);
patch('index.html', [[`and 955,000 quasars/active galaxies (Milliquas) at their comoving distances out to z ≈ 7 — that shell is the observable universe.`, `and 953,000 quasars/active galaxies with spectroscopic redshifts (Milliquas, mostly SDSS, DESI, 2QZ and LAMOST) at their comoving distances out to z ≈ 7. Zoomed all the way out, the fan and wedge shapes you see are the sky footprints of those surveys (SDSS covers the northern galactic cap, others add strips), not the shape of the universe: nobody has taken spectra of the whole sky, and the Milky Way's dust hides the galactic plane.`]]);
console.log('patched');
