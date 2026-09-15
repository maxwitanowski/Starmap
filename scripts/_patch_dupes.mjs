import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 120)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

// ---- 2MRS galaxies that duplicate an NGC/IC/curated galaxy: hide the 2MRS sprite (the catalogue entry carries the better
//      distance, the label and the photo), so the label no longer floats away from a second copy at a Hubble-flow distance.
patch('src/layers/Galaxies2MRS.js', [
  [`    const quad = new THREE.PlaneGeometry(1, 1);
    const geo = new THREE.InstancedBufferGeometry(); geo.index = quad.index; geo.attributes.position = quad.attributes.position; geo.attributes.uv = quad.attributes.uv;
    geo.instanceCount = n;`, `    // duplicates of catalogue galaxies (within 1.5 arcmin of an NGC/IC/curated galaxy) are hidden: one object, one label, one distance
    this.dup = new Int32Array(n).fill(-1);
    {
      const cells = new Map(); const key = (ra, dec) => (Math.floor(ra * 2) + 1000 * Math.floor((dec + 90) * 2));
      dsoLayer.items.forEach((e, j) => { if (e.t !== 'G' && e.t !== 'GPair' && e.t !== 'GTrpl' && e.t !== 'QSO') return; const k = key(e.ra, e.dec); if (!cells.has(k)) cells.set(k, []); cells.get(k).push(j); });
      let hidden = 0;
      for (let i = 0; i < n; i++) {
        const ra = this.raDecDist[3 * i], dec = this.raDecDist[3 * i + 1]; const cd = Math.cos(dec * DEG);
        let best = -1, bestSep = 1.5 / 60;
        for (let dr = -1; dr <= 1; dr++) for (let dd = -1; dd <= 1; dd++) {
          const list = cells.get(key(ra + dr * 0.5, dec + dd * 0.5)); if (!list) continue;
          for (const j of list) { const e = dsoLayer.items[j]; const sep = Math.hypot((e.ra - ra) * cd, e.dec - dec); if (sep < bestSep) { bestSep = sep; best = j; } }
        }
        if (best >= 0) { this.dup[i] = best; this.baseAlpha[i] = this.alpha[i] = 0; hidden++; }
      }
      this.hiddenDup = hidden;
    }
    const quad = new THREE.PlaneGeometry(1, 1);
    const geo = new THREE.InstancedBufferGeometry(); geo.index = quad.index; geo.attributes.position = quad.attributes.position; geo.attributes.uv = quad.attributes.uv;
    geo.instanceCount = n;`],
  [`    for (let i = 0; i < this.count; i++) {
      const x = this.pos[3 * i] - camPos[0], y = this.pos[3 * i + 1] - camPos[1], z = this.pos[3 * i + 2] - camPos[2];
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.9995) continue;`, `    for (let i = 0; i < this.count; i++) {
      if (this.dup[i] >= 0) continue;
      const x = this.pos[3 * i] - camPos[0], y = this.pos[3 * i + 1] - camPos[1], z = this.pos[3 * i + 2] - camPos[2];
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.9995) continue;`],
]);
patch('src/layers/GalaxyModels.js', [
  [`for (let i = 0; i < M.count; i++) consider('m' + i,`, `for (let i = 0; i < M.count; i++) if (M.dup[i] < 0) consider('m' + i,`],
]);

// ---- Flat sprites only fade out when something 3D replaces them (a nebula/cluster volume or a galaxy particle model).
//      Objects with no stand-in (unknown distance, tiny clusters, dark nebulae, groups…) used to vanish when approached.
patch('src/layers/DeepSky.js', [
  [`attribute float iAlpha; attribute float iImg;
  uniform float uFovScale; uniform float uMinPx;`, `attribute float iAlpha; attribute float iImg; attribute float iFade;
  uniform float uFovScale; uniform float uMinPx;`],
  [`    if (iImg < 0.5) alpha *= 1.0 - smoothstep(250.0, 700.0, pxH);`, `    if (iImg < 0.5 && iFade > 0.5) alpha *= 1.0 - smoothstep(250.0, 700.0, pxH); // a 3D stand-in takes over
    if (iImg < 0.5 && iFade < 0.5) alpha *= 1.0 - 0.6 * smoothstep(400.0, 1600.0, pxH); // nothing replaces it: just soften`],
  [`this.alphas = new Float32Array(n); this.imgFlag = new Float32Array(n);`, `this.alphas = new Float32Array(n); this.imgFlag = new Float32Array(n); this.fadeFlag = new Float32Array(n);`],
  [`    geo.setAttribute('iImg', new THREE.InstancedBufferAttribute(this.imgFlag, 1));`, `    geo.setAttribute('iImg', new THREE.InstancedBufferAttribute(this.imgFlag, 1));
    geo.setAttribute('iFade', new THREE.InstancedBufferAttribute(this.fadeFlag, 1));`],
]);
patch('src/layers/NebulaVolumes.js', [
  [`    this.pos = new Float32Array(cap * 3); this.center = new Float32Array(cap * 3); this.half = new Float32Array(cap);`, `    for (const i of this.eligible) dsoLayer.fadeFlag[i] = 1;
    dsoLayer.mesh.geometry.attributes.iFade.needsUpdate = true;
    this.pos = new Float32Array(cap * 3); this.center = new Float32Array(cap * 3); this.half = new Float32Array(cap);`],
]);
patch('src/layers/GalaxyModels.js', [
  [`    dsoLayer.items.forEach((e, i) => { if ((e.t === 'G' || e.t === 'GPair' || e.t === 'GTrpl') && e.maj) this.dsoGal.push(i); });`, `    dsoLayer.items.forEach((e, i) => { if ((e.t === 'G' || e.t === 'GPair' || e.t === 'GTrpl') && e.maj) { this.dsoGal.push(i); dsoLayer.fadeFlag[i] = 1; } });
    dsoLayer.mesh.geometry.attributes.iFade.needsUpdate = true;`],
]);
// camera far plane: room for the quasar shell (comoving distances up to ~30 Gly ≈ 3e23 km)
patch('src/core/Universe.js', [[`new THREE.PerspectiveCamera(50, 1, 1e-3, 1e22)`, `new THREE.PerspectiveCamera(50, 1, 1e-3, 1e24)`]]);
console.log('patched');
