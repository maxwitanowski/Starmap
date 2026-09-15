import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 100)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

// ---- build-data: snap cluster members to their cluster's Gaia distance (removes the parallax "finger of God")
patch('scripts/build-data.mjs', [
  [`console.log(\`  \${N0} stars from HYG\`);`, `console.log(\`  \${N0} stars from HYG\`);

// --- Cluster members: individual Hipparcos parallaxes are far worse than the cluster's Gaia distance, which stretches every
//     open cluster into a spear pointing at the Sun. Stars inside a known cluster's footprint whose distance is compatible
//     with the cluster are moved to the cluster distance (with a spread equal to the cluster's physical half-light radius).
const snapped = new Uint8Array(N0);
{
  const ocSnap = readCSV('open_clusters.csv'); const OC = ocSnap.idx;
  const rng = mulberryNode(41);
  const gauss = () => { let u = 0, v = 0; while (u === 0) u = rng(); while (v === 0) v = rng(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  let moved = 0;
  const clusters = ocSnap.rows.map(r => ({ ra: num(r[OC.RA_ICRS]), dec: num(r[OC.DE_ICRS]), r50: num(r[OC.r50]), D: num(r[OC.DistPc]) })).filter(c => Number.isFinite(c.D) && Number.isFinite(c.r50) && c.D > 0);
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
  console.log(\`  \${moved} cluster member stars placed at their cluster's Gaia distance\`);
}
function mulberryNode(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }`],
  [`  ids: Uint32Array.from(ids), spect: Uint16Array.from(spectIdx), con: Uint8Array.from(conIdx)
});`, `  ids: Uint32Array.from(ids), spect: Uint16Array.from(spectIdx), con: Uint8Array.from(conIdx), snapped: (() => { const a = new Uint8Array(N); a.set(snapped); return a; })()
});`],
  // Gaia bright stars: same snapping
  [`    const dist = 1000 / plx;
    const [x, y, z] = raDecToXYZ(ra, dec, dist);
    gpos.push(x, y, z);`, `    let dist = 1000 / plx;
    for (const c of gClusters) {
      const rad = Math.max(0.12, c.r50 * 1.6);
      if (Math.abs(dec - c.dec) > rad) continue;
      const dra = Math.abs(((ra - c.ra + 540) % 360) - 180) * Math.cos(dec * DEG);
      if (Math.hypot(dra, dec - c.dec) > rad) continue;
      if (Math.abs(dist - c.D) / c.D > 0.25) continue;
      dist = c.D * (1 + (Math.random() - 0.5) * 2 * Math.min(0.03, c.D * c.r50 * DEG / c.D)); gSnapped++; break;
    }
    const [x, y, z] = raDecToXYZ(ra, dec, dist);
    gpos.push(x, y, z);`],
  [`  const gpos = [], gabs = [], gci = [], gmag = [], gids = [];
  const t = readCSV('gaia_bright.csv'); const G = t.idx;`, `  const gpos = [], gabs = [], gci = [], gmag = [], gids = [];
  const ocG = readCSV('open_clusters.csv'); const OCG = ocG.idx; let gSnapped = 0;
  const gClusters = ocG.rows.map(r => ({ ra: num(r[OCG.RA_ICRS]), dec: num(r[OCG.DE_ICRS]), r50: num(r[OCG.r50]), D: num(r[OCG.DistPc]) })).filter(c => Number.isFinite(c.D) && Number.isFinite(c.r50) && c.D > 0);
  const t = readCSV('gaia_bright.csv'); const G = t.idx;`],
  [`  console.log(\`  \${gpos.length / 3} Gaia stars kept (\${dropped} duplicates of HYG dropped)\`);`, `  console.log(\`  \${gpos.length / 3} Gaia stars kept (\${dropped} duplicates of HYG dropped, \${gSnapped} cluster members snapped)\`);`],
]);

// ---- Stars layer: mention the snapped distance
patch('src/layers/Stars.js', [
  [`    this.spectIdx = data.spect; this.conIdx = data.con; this.meta = meta;`, `    this.spectIdx = data.spect; this.conIdx = data.con; this.meta = meta; this.snapped = data.snapped;`],
  [`    rows.push(['Distance', \`\${fmtNum(d * 3.26156)} ly (\${fmtNum(d)} pc)\`]);`, `    rows.push(['Distance', \`\${fmtNum(d * 3.26156)} ly (\${fmtNum(d)} pc)\${this.snapped && this.snapped[i] ? ' — member of an open cluster: placed at the cluster\\'s Gaia distance, which is far more accurate than its own parallax' : ''}\`]);`],
]);

// ---- small sprites read as bright dots
patch('src/layers/DeepSky.js', [[`    vColor = iColor; vAlpha = alpha; vImg = iImg;`, `    vColor = iColor * (1.0 + 2.5 * (1.0 - smoothstep(2.0, 30.0, pxH))); vAlpha = alpha; vImg = iImg;`]]);
patch('src/layers/Galaxies2MRS.js', [[`    vColor = iColor; vAlpha = alpha * smoothstep(0.3, 1.2, d / iSize.y);`, `    vColor = iColor * (1.0 + 2.5 * (1.0 - smoothstep(2.0, 30.0, pxH))); vAlpha = alpha * smoothstep(0.3, 1.2, d / iSize.y);`]]);
console.log('patched');
