import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 100)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

// ---------- Satellites: double precision, near-camera propagation each frame, anchored fine track, variant for media
patch('src/layers/Satellites.js', [
  [`    this.rel = new Float32Array(this.count * 3);`, `    this.rel = new Float32Array(this.count * 3);
    this.posD = new Float64Array(this.count * 3); // Earth-relative, extrapolated, double precision (camera focus, models, picking)
    this.nearIdx = [];`],
  [`    // featured satellites and the selected one every frame
    for (const id of [25544, 48274, 20580]) { const i = this.byId.get(id); if (i !== undefined) this._propagate(i, unixMs); }
    if (this.selectedIndex !== undefined && this.selectedIndex >= 0) this._propagate(this.selectedIndex, unixMs);`, `    // featured, selected, focused and nearby satellites every frame (no extrapolation jumps when you are close)
    for (const id of [25544, 48274, 20580]) { const i = this.byId.get(id); if (i !== undefined) this._propagate(i, unixMs); }
    if (this.selectedIndex !== undefined && this.selectedIndex >= 0) this._propagate(this.selectedIndex, unixMs);
    const f = ctx.rig.focus; if (f && f.ref && f.ref.layer === 'sats') this._propagate(f.ref.index, unixMs);
    for (const i of this.nearIdx) this._propagate(i, unixMs);
    const camX = cam[0] - earth[0], camY = cam[1] - earth[1], camZ = cam[2] - earth[2];
    const near = [];`],
  [`      this.rel[3 * i] = this.pos[3 * i] + this.vel[3 * i] * dt;
      this.rel[3 * i + 1] = this.pos[3 * i + 1] + this.vel[3 * i + 1] * dt;
      this.rel[3 * i + 2] = this.pos[3 * i + 2] + this.vel[3 * i + 2] * dt;
      this.alpha[i] = this.hideMarker.has(i) ? 0.02 : 1;`, `      const px = this.pos[3 * i] + this.vel[3 * i] * dt, py = this.pos[3 * i + 1] + this.vel[3 * i + 1] * dt, pz = this.pos[3 * i + 2] + this.vel[3 * i + 2] * dt;
      this.posD[3 * i] = px; this.posD[3 * i + 1] = py; this.posD[3 * i + 2] = pz;
      this.rel[3 * i] = px; this.rel[3 * i + 1] = py; this.rel[3 * i + 2] = pz;
      this.alpha[i] = this.hideMarker.has(i) ? 0.02 : 1;
      if (Math.abs(px - camX) < 40 && Math.abs(py - camY) < 40 && Math.abs(pz - camZ) < 40 && near.length < 40) near.push(i);`],
  [`    this.points.geometry.attributes.position.needsUpdate = true; this.points.geometry.attributes.alpha.needsUpdate = true;
    this.mat.uniforms.uPixelRatio.value = ctx.pixelRatio;
    if (this.selectedTrack) this.selectedTrack.position.set(ex, ey, ez);`, `    this.nearIdx = near;
    this.points.geometry.attributes.position.needsUpdate = true; this.points.geometry.attributes.alpha.needsUpdate = true;
    this.mat.uniforms.uPixelRatio.value = ctx.pixelRatio;
    if (this.selectedTrack) {
      // re-anchor the track every couple of seconds of simulated time so it always passes exactly through the satellite
      if (Math.abs(unixMs - this.trackT0) > 2500) this._buildTrack(this.selectedIndex);
      const a = this.trackAnchor;
      this.selectedTrack.position.set(ex + a[0], ey + a[1], ez + a[2]);
    }`],
  [`  satWorld(i, out) {`, `  // Generic class of the satellite (for the representative 3D model / picture)
  variant(i) {
    const s = this.sats[i]; const g = s.g.map(k => this.groups[k]);
    if (/ R\\/B/.test(s.n) || / DEB/.test(s.n)) return 'sat_rocketbody';
    if (g.includes('stations') && /ISS|TIANHE|CSS|MENGTIAN|WENTIAN|ZARYA|NAUKA|PROGRESS|SOYUZ|DRAGON|CYGNUS/.test(s.n)) return 'sat_station';
    if (g.includes('starlink') || g.includes('oneweb') || g.includes('iridium-NEXT')) return 'sat_starlink';
    if (g.includes('gps-ops') || g.includes('glo-ops') || g.includes('galileo') || g.includes('beidou') || g.includes('gnss') || g.includes('sbas')) return 'sat_gps';
    if (/HST|HUBBLE|TESS|CHANDRA|XMM|SWIFT|FERMI|GAIA|WISE|KEPLER|IRIS|SDO|INTEGRAL|CHEOPS/.test(s.n)) return 'sat_telescope';
    if (g.includes('weather') || g.includes('noaa') || g.includes('goes') || g.includes('resource') || g.includes('planet') || g.includes('spire') || g.includes('sarsat') || g.includes('science') || g.includes('geodetic')) return 'sat_weather';
    if (g.includes('cubesat') || g.includes('amateur') || g.includes('satnogs') || g.includes('education')) return 'sat_cubesat';
    return 'sat_comms';
  }
  _buildTrack(i) {
    const rec = this._rec(i); if (!rec) return;
    const periodMin = 2 * Math.PI / rec.no;
    const N = 1600; const pts = new Float32Array(N * 3);
    const t0 = this.u.time.unixMs;
    this.tmpDate.setTime(t0);
    let a0;
    try { a0 = sat.propagate(rec, this.tmpDate).position; } catch { return; }
    this.trackAnchor = [a0.x, a0.y, a0.z]; this.trackT0 = t0;
    for (let k = 0; k < N; k++) {
      this.tmpDate.setTime(t0 + (k / (N - 1) - 0.5) * periodMin * 60000);
      try { const pv = sat.propagate(rec, this.tmpDate); pts[3 * k] = pv.position.x - a0.x; pts[3 * k + 1] = pv.position.y - a0.y; pts[3 * k + 2] = pv.position.z - a0.z; } catch { }
    }
    if (!this.selectedTrack) {
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pts, 3)); geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
      this.selectedTrack = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x9ff1c8, transparent: true, opacity: 0.6, depthWrite: false })); this.selectedTrack.frustumCulled = false;
      this.u.scene.add(this.selectedTrack);
    } else { this.selectedTrack.geometry.attributes.position.array.set(pts); this.selectedTrack.geometry.attributes.position.needsUpdate = true; }
  }
  satWorld(i, out) {`],
  [`    const i = desc.ref.index; this.selectedIndex = i;
    const rec = this._rec(i); if (!rec) return;
    const periodMin = 2 * Math.PI / rec.no; // rec.no is rad/min
    const N = 240; const pts = new Float32Array(N * 3);
    const t0 = this.u.time.unixMs;
    for (let k = 0; k < N; k++) {
      this.tmpDate.setTime(t0 + (k / (N - 1) - 0.5) * periodMin * 60000);
      try { const pv = sat.propagate(rec, this.tmpDate); pts[3 * k] = pv.position.x; pts[3 * k + 1] = pv.position.y; pts[3 * k + 2] = pv.position.z; } catch { }
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pts, 3)); geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.selectedTrack = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x9ff1c8, transparent: true, opacity: 0.6, depthWrite: false })); this.selectedTrack.frustumCulled = false;
    this.u.scene.add(this.selectedTrack);
  }`, `    const i = desc.ref.index; this.selectedIndex = i;
    this._buildTrack(i);
  }`],
  [`    return { kind: 'satellite', kindLabel: kind, name: s.n,`, `    return { kind: 'satellite', kindLabel: kind, name: s.n, variant: this.variant(i),`],
  [`      const x = this.rel[3 * i] - cx, y = this.rel[3 * i + 1] - cy, z = this.rel[3 * i + 2] - cz;
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.999) continue;`, `      const x = this.posD[3 * i] - cx, y = this.posD[3 * i + 1] - cy, z = this.posD[3 * i + 2] - cz;
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.999) continue;`],
]);
// ---------- Models: double positions and the shared variant()
patch('src/layers/Models.js', [
  [`          const dx = S.rel[3 * i] - cx, dy = S.rel[3 * i + 1] - cy, dz = S.rel[3 * i + 2] - cz;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          const v = this.satVariant(S.sats[i]); const size = SAT_SIZES[v];`, `          const dx = S.posD[3 * i] - cx, dy = S.posD[3 * i + 1] - cy, dz = S.posD[3 * i + 2] - cz;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          const v = S.variant(i); const size = SAT_SIZES[v];`],
  [`            for (const pid of [25544, 48274]) { const p = S.byId.get(pid); if (p !== undefined && Math.hypot(S.rel[3 * p] - S.rel[3 * i], S.rel[3 * p + 1] - S.rel[3 * i + 1], S.rel[3 * p + 2] - S.rel[3 * i + 2]) < 1.0) nearPrimary = true; }`, `            for (const pid of [25544, 48274]) { const p = S.byId.get(pid); if (p !== undefined && Math.hypot(S.posD[3 * p] - S.posD[3 * i], S.posD[3 * p + 1] - S.posD[3 * i + 1], S.posD[3 * p + 2] - S.posD[3 * i + 2]) < 1.0) nearPrimary = true; }`],
  [`          if (this._place('sat' + i, v, size, [e[0] + S.rel[3 * i], e[1] + S.rel[3 * i + 1], e[2] + S.rel[3 * i + 2]], 1 + (i % 7))) { S.hideMarker.add(i); shown++; }`, `          if (this._place('sat' + i, v, size, [e[0] + S.posD[3 * i], e[1] + S.posD[3 * i + 1], e[2] + S.posD[3 * i + 2]], 1 + (i % 7))) { S.hideMarker.add(i); shown++; }`],
]);
// ---------- asteroid / comet descriptors carry their model variant
patch('src/layers/SmallBodies.js', [
  [`    return { kind: 'asteroid', kindLabel: cls[0], name: this.names[i], sub: cls[0], radius, rows,`, `    return { kind: 'asteroid', kindLabel: cls[0], name: this.names[i], sub: cls[0], radius, rows, variant: ['ast_rubble', 'ast_elongated', 'ast_cratered', 'ast_irregular', 'ast_metallic'][i % 5],`],
  [`    return { kind: 'comet', kindLabel: 'Comet', name: c.n, sub: cls[0], radius: (c.dia || 2) / 2, rows,`, `    return { kind: 'comet', kindLabel: 'Comet', name: c.n, sub: cls[0], radius: (c.dia || 2) / 2, rows, variant: 'comet_nucleus',`],
]);
// ---------- UI: representative image for satellites / rocks without a photograph
patch('src/ui/UI.js', [[`      } else if (desc.kind === 'star') {
        const rep = starImpression(desc);
        if (rep) { img.src = rep.image; cap.textContent = rep.caption; fig.hidden = false; }
      }`, `      } else if (desc.kind === 'star') {
        const rep = starImpression(desc);
        if (rep) { img.src = rep.image; cap.textContent = rep.caption; fig.hidden = false; }
      } else if (desc.variant) {
        const label = { sat_station: 'space station', sat_telescope: 'space telescope', sat_comms: 'communications satellite', sat_gps: 'navigation satellite', sat_weather: 'Earth-observation satellite', sat_starlink: 'flat-panel broadband satellite', sat_cubesat: 'cubesat', sat_rocketbody: 'spent rocket stage', ast_rubble: 'rubble-pile asteroid', ast_elongated: 'elongated asteroid', ast_cratered: 'cratered asteroid', ast_irregular: 'irregular asteroid', ast_metallic: 'metallic asteroid', comet_nucleus: 'comet nucleus' }[desc.variant] || desc.variant;
        img.src = \`/models/\${desc.variant}.jpg\`; cap.textContent = \`Representative rendering of a \${label} (AI-generated; no photograph of this specific object exists). The same generic shape is used for its 3D model.\`; fig.hidden = false;
      }`]]);
console.log('patched');
