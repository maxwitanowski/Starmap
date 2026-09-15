import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 100)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

// camera focus uses this frame's SGP4 solution (identical to the model/marker), not last frame's extrapolation
patch('src/layers/Satellites.js', [[`  satWorld(i, out) {
    const e = this.solar.earth.pos;
    const dt = (this.u.time.unixMs - this.lastT[i]) / 1000;
    if (!Number.isFinite(dt) || Math.abs(dt) > 600) this._propagate(i, this.u.time.unixMs);`, `  satWorld(i, out) {
    const e = this.solar.earth.pos;
    if (this.lastT[i] !== Math.floor(this.u.time.unixMs)) this._propagate(i, this.u.time.unixMs);`]]);

// schematic volumes: analyse each procedural cell once, then emitting particles is pure arithmetic
patch('src/layers/NebulaVolumes.js', [
  [`  _buildSchematic(i) {
    const u0 = this.dso.uvs[4 * i], v0 = this.dso.uvs[4 * i + 1];
    const cx = Math.round(u0 * GRID) * CELL, cy = Math.round((1 - v0) * GRID - 1) * CELL;
    const tint = [this.dso.colors[3 * i], this.dso.colors[3 * i + 1], this.dso.colors[3 * i + 2]];
    this._build(i, (g, S) => g.drawImage(this.dso.canvas, cx, cy, CELL, CELL, 0, 0, S, S), true, tint);
  }
  _build(i, draw, schematic, tint = null) {
    const e = this.dso.items[i];
    const isCluster = CLUSTER_TYPES.has(e.t);
    const N = schematic ? (isCluster ? N_CL_SCHEM : N_NEB_SCHEM) : (isCluster ? N_CL : N_NEB);
    if (this.count + N + 1500 > this.half.length) return;
    const g = this._g64, S = 64;
    g.clearRect(0, 0, S, S); draw(g, S);
    const px = g.getImageData(0, 0, S, S).data;
    const w = new Float32Array(S * S); let maxB = 0;
    for (let k = 0; k < S * S; k++) {
      const x = (k % S) / S - 0.5, y = Math.floor(k / S) / S - 0.5;
      const vign = 1 - smooth(0.3, 0.5, Math.hypot(x, y));
      const b = (0.3 * px[4 * k] + 0.5 * px[4 * k + 1] + 0.2 * px[4 * k + 2]) / 255 * vign;
      w[k] = b; if (b > maxB) maxB = b;
    }
    if (maxB <= 0.02) return;
    const isShell = e.t === 'PN' || e.t === 'SNR';
    const floor = isCluster ? 0.35 : isShell ? 0.3 : 0.2;
    for (let k = 0; k < S * S; k++) { const b = w[k] / maxB; w[k] = b > floor ? Math.pow(b - floor, isCluster ? 2.2 : isShell ? 2.6 : 2.0) : 0; }
    const cdf = new Float32Array(S * S); let acc = 0;
    for (let k = 0; k < S * S; k++) { acc += w[k]; cdf[k] = acc; }
    if (acc <= 0) return;`, `  _buildSchematic(i) {
    const u0 = this.dso.uvs[4 * i], v0 = this.dso.uvs[4 * i + 1];
    const cx = Math.round(u0 * GRID) * CELL, cy = Math.round((1 - v0) * GRID - 1) * CELL;
    const tint = [this.dso.colors[3 * i], this.dso.colors[3 * i + 1], this.dso.colors[3 * i + 2]];
    const e = this.dso.items[i];
    const isCluster = CLUSTER_TYPES.has(e.t), isShell = e.t === 'PN' || e.t === 'SNR';
    const key = cx + ',' + cy + ':' + isCluster + ':' + isShell;
    this._cellCache = this._cellCache || new Map();
    let data = this._cellCache.get(key);
    if (data === undefined) { data = this._analyse((g, S) => g.drawImage(this.dso.canvas, cx, cy, CELL, CELL, 0, 0, S, S), isCluster, isShell, 96); this._cellCache.set(key, data); }
    if (data) this._build(i, data, true, tint);
  }
  // Image analysis: sampling weights (64 px) and resolved point sources (S2 px)
  _analyse(draw, isCluster, isShell, S2) {
    const g = this._g64, S = 64;
    g.clearRect(0, 0, S, S); draw(g, S);
    const px = g.getImageData(0, 0, S, S).data;
    const w = new Float32Array(S * S); let maxB = 0;
    for (let k = 0; k < S * S; k++) {
      const x = (k % S) / S - 0.5, y = Math.floor(k / S) / S - 0.5;
      const vign = 1 - smooth(0.3, 0.5, Math.hypot(x, y));
      const b = (0.3 * px[4 * k] + 0.5 * px[4 * k + 1] + 0.2 * px[4 * k + 2]) / 255 * vign;
      w[k] = b; if (b > maxB) maxB = b;
    }
    if (maxB <= 0.02) return null;
    const floor = isCluster ? 0.35 : isShell ? 0.3 : 0.2;
    for (let k = 0; k < S * S; k++) { const b = w[k] / maxB; w[k] = b > floor ? Math.pow(b - floor, isCluster ? 2.2 : isShell ? 2.6 : 2.0) : 0; }
    const cdf = new Float32Array(S * S); let acc = 0;
    for (let k = 0; k < S * S; k++) { acc += w[k]; cdf[k] = acc; }
    if (acc <= 0) return null;
    const g2 = this._g192; g2.clearRect(0, 0, 192, 192); draw(g2, S2);
    const p2 = g2.getImageData(0, 0, S2, S2).data;
    const L2 = new Float32Array(S2 * S2);
    for (let k = 0; k < S2 * S2; k++) L2[k] = (0.3 * p2[4 * k] + 0.5 * p2[4 * k + 1] + 0.2 * p2[4 * k + 2]) / 255;
    const stars = [];
    for (let y = 2; y < S2 - 2; y++) for (let x = 2; x < S2 - 2; x++) {
      const k = y * S2 + x, v = L2[k]; if (v < 0.35) continue;
      let isMax = true, ring = 0;
      for (let dy = -1; dy <= 1 && isMax; dy++) for (let dx = -1; dx <= 1; dx++) { if (!dx && !dy) continue; if (L2[k + dy * S2 + dx] > v) { isMax = false; break; } }
      if (!isMax) continue;
      for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) if (Math.abs(dx) === 2 || Math.abs(dy) === 2) ring += L2[k + dy * S2 + dx];
      ring /= 16;
      const contrast = v - ring; if (contrast < 0.045) continue;
      const fx = (x + 0.5) / S2, fy = (y + 0.5) / S2;
      if (Math.hypot(fx - 0.5, fy - 0.5) > 0.5) continue;
      stars.push([contrast * (0.5 + v), fx, fy, k]);
    }
    stars.sort((a, b) => b[0] - a[0]);
    return { S, px, cdf, acc, S2, p2, stars };
  }
  _build(i, data, schematic, tint = null) {
    const e = this.dso.items[i];
    const isCluster = CLUSTER_TYPES.has(e.t);
    const N = schematic ? (isCluster ? N_CL_SCHEM : N_NEB_SCHEM) : (isCluster ? N_CL : N_NEB);
    if (this.count + N + 1500 > this.half.length) return;
    const { S, px, cdf, acc, S2, p2, stars } = data;
    const isShell = e.t === 'PN' || e.t === 'SNR';`],
  [`    const draw = img => (g, S) => g.drawImage(img, 0, 0, S, S);
    if (NEBULA_TYPES.has(e.t)) {
      const img = new Image();
      img.onload = () => this._build(i, draw(img), false);
      img.onerror = () => this._build(i, draw(spriteImg), false);
      img.src = \`/dso_vol/\${e.img}.jpg\`;
    } else this._build(i, draw(spriteImg), false);`, `    const isCluster = CLUSTER_TYPES.has(e.t), isShell = e.t === 'PN' || e.t === 'SNR';
    const go = img => { const d = this._analyse((g, S) => g.drawImage(img, 0, 0, S, S), isCluster, isShell, 192); if (d) this._build(i, d, false); };
    if (NEBULA_TYPES.has(e.t)) {
      const img = new Image();
      img.onload = () => go(img);
      img.onerror = () => go(spriteImg);
      img.src = \`/dso_vol/\${e.img}.jpg\`;
    } else go(spriteImg);`],
  [`    // resolved stars: local maxima at full resolution
    const S2 = schematic ? 96 : 192, g2 = this._g192; g2.clearRect(0, 0, 192, 192); draw(g2, S2);
    const p2 = g2.getImageData(0, 0, S2, S2).data;
    const L2 = new Float32Array(S2 * S2);
    for (let k = 0; k < S2 * S2; k++) L2[k] = (0.3 * p2[4 * k] + 0.5 * p2[4 * k + 1] + 0.2 * p2[4 * k + 2]) / 255;
    const stars = [];
    for (let y = 2; y < S2 - 2; y++) for (let x = 2; x < S2 - 2; x++) {
      const k = y * S2 + x, v = L2[k]; if (v < 0.35) continue;
      let isMax = true, ring = 0;
      for (let dy = -1; dy <= 1 && isMax; dy++) for (let dx = -1; dx <= 1; dx++) { if (!dx && !dy) continue; if (L2[k + dy * S2 + dx] > v) { isMax = false; break; } }
      if (!isMax) continue;
      for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) if (Math.abs(dx) === 2 || Math.abs(dy) === 2) ring += L2[k + dy * S2 + dx];
      ring /= 16;
      const contrast = v - ring; if (contrast < 0.045) continue;
      const fx = (x + 0.5) / S2, fy = (y + 0.5) / S2;
      if (Math.hypot(fx - 0.5, fy - 0.5) > 0.5) continue;
      stars.push([contrast * (0.5 + v), fx, fy, k]);
    }
    stars.sort((a, b) => b[0] - a[0]);
    const maxS = stars.length ? stars[0][0] : 1;`, `    // resolved stars (local maxima found in _analyse)
    const maxS = stars.length ? stars[0][0] : 1;`],
  [`    for (let n = 0; n < 2 && this.schematicQueue.length; n++) this._buildSchematic(this.schematicQueue.shift());`, `    for (let n = 0; n < 12 && this.schematicQueue.length; n++) this._buildSchematic(this.schematicQueue.shift());`],
]);
console.log('patched');
