import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 100)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

// ---- NebulaVolumes: one Points object per nebula/cluster so off-screen or tiny objects cost nothing
patch('src/layers/NebulaVolumes.js', [
  [`    this.count = 0;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('center', new THREE.BufferAttribute(this.center, 3));
    geo.setAttribute('halfSize', new THREE.BufferAttribute(this.half, 1));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    geo.setAttribute('kind', new THREE.BufferAttribute(this.kind, 1));
    geo.setDrawRange(0, 0);
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.geo = geo;
    this.mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
      uniforms: { uCam: { value: new THREE.Vector3() }, uPixelRatio: { value: 1 }, uFovScale: { value: 1000 } } });
    this.points = new THREE.Points(geo, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 3;
    universe.scene.add(this.points);
    this.built = []; // [dsoIndex, baseAlpha]`, `    this.count = 0;
    this.mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
      uniforms: { uCam: { value: new THREE.Vector3() }, uPixelRatio: { value: 1 }, uFovScale: { value: 1000 } } });
    this.group = new THREE.Group(); universe.scene.add(this.group);
    this.built = []; // [dsoIndex, baseAlpha, pointsObject]`],
  [`    this.built.push([i, this.dso.alphas[i]]);
    this._dirty = true;
  }`, `    // one draw object per nebula, over views of the shared arrays
    const start = startCount, n = this.count - start;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos.subarray(3 * start, 3 * (start + n)), 3));
    geo.setAttribute('center', new THREE.BufferAttribute(this.center.subarray(3 * start, 3 * (start + n)), 3));
    geo.setAttribute('halfSize', new THREE.BufferAttribute(this.half.subarray(start, start + n), 1));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col.subarray(3 * start, 3 * (start + n)), 3));
    geo.setAttribute('size', new THREE.BufferAttribute(this.size.subarray(start, start + n), 1));
    geo.setAttribute('kind', new THREE.BufferAttribute(this.kind.subarray(start, start + n), 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    const pts = new THREE.Points(geo, this.mat); pts.frustumCulled = false; pts.renderOrder = 3; pts.visible = false;
    this.group.add(pts);
    this.built.push([i, this.dso.alphas[i], pts]);
  }`],
  [`    const { S, px, cdf, acc, S2, p2, stars } = data;
    const isShell = e.t === 'PN' || e.t === 'SNR';`, `    const { S, px, cdf, acc, S2, p2, stars } = data;
    const isShell = e.t === 'PN' || e.t === 'SNR';
    const startCount = this.count;`],
  [`    this.points.visible = this.visible && this.count > 0;
    if (this._dirty) {
      for (const a of ['position', 'center', 'halfSize', 'color', 'size', 'kind']) this.geo.attributes[a].needsUpdate = true;
      this.geo.setDrawRange(0, this.count); this._dirty = false;
    }
    this.mat.uniforms.uCam.value.set(ctx.camPos[0], ctx.camPos[1], ctx.camPos[2]);`, `    this.group.visible = this.visible;
    this.mat.uniforms.uCam.value.set(ctx.camPos[0], ctx.camPos[1], ctx.camPos[2]);`],
  [`    for (const [i, base] of this.built) {
      const d = Math.hypot(this.dso.pos[3 * i] - ctx.camPos[0], this.dso.pos[3 * i + 1] - ctx.camPos[1], this.dso.pos[3 * i + 2] - ctx.camPos[2]);
      const objPx = this.dso.sizeKm[2 * i + 1] / 2 / d * ctx.pxPerRad;
      const f = this.visible ? THREE.MathUtils.smoothstep(objPx, 20, 70) : 0;`, `    for (const [i, base, pts] of this.built) {
      const d = Math.hypot(this.dso.pos[3 * i] - ctx.camPos[0], this.dso.pos[3 * i + 1] - ctx.camPos[1], this.dso.pos[3 * i + 2] - ctx.camPos[2]);
      const objPx = this.dso.sizeKm[2 * i + 1] / 2 / d * ctx.pxPerRad;
      pts.visible = objPx > 22; // the shader fades in from 25 px: anything smaller is skipped entirely
      const f = this.visible ? THREE.MathUtils.smoothstep(objPx, 20, 70) : 0;`],
]);

// ---- GalaxyModels: one Points object per galaxy
patch('src/layers/GalaxyModels.js', [
  [`    const rnd = mulberry(99);
    const pos = [], col = [], size = [], gidx = [];`, `    const rnd = mulberry(99);
    const pos = [], col = [], size = [], gidx = []; const ranges = [];`],
  [`      const parts = generate(kind, ratio, rnd);
      const pscale = Rkm;`, `      const parts = generate(kind, ratio, rnd);
      const pscale = Rkm; const r0 = pos.length / 3;`],
  [`        pos.push(v.x, v.y, v.z); col.push(parts[k + 3], parts[k + 4], parts[k + 5]); size.push(parts[k + 6] * pscale); gidx.push(g);
      }
    });`, `        pos.push(v.x, v.y, v.z); col.push(parts[k + 3], parts[k + 4], parts[k + 5]); size.push(parts[k + 6] * pscale); gidx.push(g);
      }
      ranges.push([r0, pos.length / 3 - r0]);
    });`],
  [`    this.points = new THREE.Points(geo, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 2;
    universe.scene.add(this.points);
    this.count = pos.length / 3;`, `    // one draw object per galaxy (views over the shared arrays) so distant galaxies cost nothing
    this.group = new THREE.Group(); universe.scene.add(this.group); this.perGal = [];
    const P = geo.attributes.position.array, C = geo.attributes.color.array, Sz = geo.attributes.size.array, Gi = geo.attributes.gidx.array;
    for (const [r0, n] of ranges) {
      const gg = new THREE.BufferGeometry();
      gg.setAttribute('position', new THREE.BufferAttribute(P.subarray(3 * r0, 3 * (r0 + n)), 3));
      gg.setAttribute('color', new THREE.BufferAttribute(C.subarray(3 * r0, 3 * (r0 + n)), 3));
      gg.setAttribute('size', new THREE.BufferAttribute(Sz.subarray(r0, r0 + n), 1));
      gg.setAttribute('gidx', new THREE.BufferAttribute(Gi.subarray(r0, r0 + n), 1));
      gg.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
      const p = new THREE.Points(gg, this.mat); p.frustumCulled = false; p.renderOrder = 2; this.group.add(p); this.perGal.push(p);
    }
    this.points = this.group;
    this.count = pos.length / 3;`],
  [`      const f = this.visible ? THREE.MathUtils.smoothstep(px, 40, 160) : 0;
      this.fade[g] = f;`, `      const f = this.visible ? THREE.MathUtils.smoothstep(px, 40, 160) : 0;
      this.fade[g] = f;
      this.perGal[g].visible = f > 0.005;`],
]);
console.log('patched');
