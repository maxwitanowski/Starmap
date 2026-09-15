import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 120)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

// Sparse clusters (Coma, Hyades…) photograph as a handful of bright stars: the old weighting piled hundreds of particles
// on each of them and then spread each pile along the line of sight — a streak per star. Now cluster weights are flatter
// and capped, and every image cell gets one coherent depth so a bright star stays a compact blob.
patch('src/layers/NebulaVolumes.js', [
  [`    const floor = isCluster ? 0.35 : isShell ? 0.3 : 0.2;
    for (let k = 0; k < S * S; k++) { const b = w[k] / maxB; w[k] = b > floor ? Math.pow(b - floor, isCluster ? 2.2 : isShell ? 2.6 : 2.0) : 0; }`,
   `    const floor = isCluster ? 0.12 : isShell ? 0.3 : 0.2;
    for (let k = 0; k < S * S; k++) { const b = w[k] / maxB; w[k] = b > floor ? Math.pow(b - floor, isCluster ? 1.3 : isShell ? 2.6 : 2.0) : 0; }
    if (isCluster) { // cap: no single bright star may soak up the particle budget
      let sum = 0, nz = 0; for (let k = 0; k < S * S; k++) if (w[k] > 0) { sum += w[k]; nz++; }
      const cap = nz ? 3 * sum / nz : 1; for (let k = 0; k < S * S; k++) if (w[k] > cap) w[k] = cap;
    }`],
  [`    const sigLat = Math.max(0.02, Math.sqrt(sumR2 / (2 * N))), aCore = 0.5 * sigLat;
    const clusterDepth = (hx, hy) => gauss() * 0.667 * Math.sqrt(aCore * aCore + hx * hx + hy * hy) * half;`,
   `    const sigLat = Math.max(0.02, Math.sqrt(sumR2 / (2 * N))), aCore = 0.5 * sigLat;
    const clusterDepth = (hx, hy) => gauss() * 0.667 * Math.sqrt(aCore * aCore + hx * hx + hy * hy) * half;
    // one coherent depth per image cell (seeded by the cell), plus a jitter of one cell: a star's particles stay together
    const cellGauss = new Map();
    const cellDepth = (k, hx, hy) => {
      let g = cellGauss.get(k);
      if (g === undefined) { const r = mulberry(k * 2654435 + i * 97 + 11); let u = 0, v = 0; while (u === 0) u = r(); while (v === 0) v = r(); g = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); cellGauss.set(k, g); }
      return (g * 0.667 * Math.sqrt(aCore * aCore + hx * hx + hy * hy) + (rnd() - 0.5) * 4 / S) * half;
    };`],
  [`      else if (isCluster) lz = clusterDepth((u - 0.5) * 2 * ratioX, (0.5 - v) * 2);
      else lz = gauss() * depth * halfObj;`, `      else if (isCluster) lz = cellDepth(k, (u - 0.5) * 2 * ratioX, (0.5 - v) * 2);
      else lz = gauss() * depth * halfObj;`],
]);
// curated objects: show the curated name first ("Pillars of Creation", "Coma Star Cluster") rather than an alias
patch('scripts/build-data.mjs', [[`mag: null, con: '', hub: x.hubble || '', z: null, rv: null, cn: x.aka, ids: '', desc: x.desc, notes: '' });`, `mag: null, con: '', hub: x.hubble || '', z: null, rv: null, cn: [x.n, ...String(x.aka || '').split(',')].map(s => s.trim()).filter((s, i, a) => s && a.indexOf(s) === i).join(', '), ids: '', desc: x.desc, notes: '' });`]]);
patch('scripts/curated.mjs', [[`t: 'HII', ra: 274.7163, dec: -13.8222, d: 1740, maj: 5, min: 4, pa: 0,`, `t: 'HII', ra: 274.7163, dec: -13.8222, d: 1740, maj: 3.5, min: 3.2, pa: 0,`]]);
console.log('patched');
