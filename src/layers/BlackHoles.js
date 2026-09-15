import * as THREE from 'three';
import { KM_PER_PC, KM_PER_LY, DEG, fmtNum, fmtDist } from '../astro/units.js';
import { fmtRA, fmtDec } from './Stars.js';

// Black holes with measured positions: stellar-mass X-ray binaries and dormant Gaia black holes, intermediate-mass
// candidates, and dynamically weighed supermassive black holes in galaxy centres. Far away each is a ringed marker
// (a black hole itself is far too small to see); up close the focused one is drawn to scale: an event-horizon sphere of
// Schwarzschild radius 2GM/c², a bright photon ring, and a glowing accretion disc out to ~12 Schwarzschild radii.
const KIND_LABEL = { stellar: 'Black hole (stellar-mass)', imbh: 'Black hole (intermediate-mass candidate)', smbh: 'Supermassive black hole' };

const MARK_VERT = /* glsl */`
  attribute float kind; attribute float alpha;
  uniform vec3 uCam; uniform float uPixelRatio;
  varying float vKind; varying float vAlpha;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vec3 rel = position - uCam;
    vKind = kind; vAlpha = alpha;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(rel, 1.0);
    if (alpha <= 0.001) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = (kind > 1.5 ? 11.0 : 7.0) * uPixelRatio * (0.6 + 0.4 * alpha);
    #include <logdepthbuf_vertex>
  }`;
const MARK_FRAG = /* glsl */`
  varying float vKind; varying float vAlpha;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    float r = length(gl_PointCoord - 0.5) * 2.0;
    // black disc with a thin orange-white ring: an "event horizon" glyph
    float ring = smoothstep(0.42, 0.52, r) * (1.0 - smoothstep(0.72, 0.85, r));
    vec3 c = vKind > 1.5 ? vec3(1.0, 0.72, 0.35) : vKind > 0.5 ? vec3(0.8, 0.6, 1.0) : vec3(0.55, 0.8, 1.0);
    float disc = 1.0 - smoothstep(0.38, 0.46, r);
    float a = max(ring, disc * 0.9) * vAlpha;
    if (a < 0.02) discard;
    gl_FragColor = vec4(c * ring * vAlpha, a);
  }`;
// accretion disc: additive, temperature falls off outward, inner edge at the ISCO (3 Rs)
const DISC_VERT = /* glsl */`
  varying vec2 vUv;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #include <logdepthbuf_vertex>
  }`;
const DISC_FRAG = /* glsl */`
  varying vec2 vUv; uniform float uTime; uniform float uInner;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 p = vUv * 2.0 - 1.0; float r = length(p); float ang = atan(p.y, p.x);
    if (r < uInner || r > 1.0) discard;
    float t = (r - uInner) / (1.0 - uInner);
    float lanes = 0.75 + 0.25 * sin(ang * 9.0 + r * 40.0 - uTime * 1.5) * sin(ang * 3.0 - r * 25.0 + uTime);
    float heat = pow(1.0 - t, 1.6);
    vec3 col = mix(vec3(1.0, 0.35, 0.05), vec3(1.0, 0.95, 0.8), heat);
    float a = heat * lanes * (1.0 - smoothstep(0.85, 1.0, r)) * smoothstep(uInner, uInner + 0.03, r);
    gl_FragColor = vec4(col * a * 1.4, a);
  }`;

// Close-range black hole: event-horizon sphere, photon ring, accretion disc and a faint glow, all scaled by the Schwarzschild
// radius. Shared by the black-hole layer and the quasar layer (positions handed in exactly, relative to the camera).
export class HorizonModel {
  constructor(scene) {
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.horizon = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), new THREE.MeshBasicMaterial({ color: 0x000000 }));
    this.photon = new THREE.Mesh(new THREE.TorusGeometry(1, 0.03, 8, 96), new THREE.MeshBasicMaterial({ color: 0xffe0b0, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.discMat = new THREE.ShaderMaterial({ vertexShader: DISC_VERT, fragmentShader: DISC_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { uTime: { value: 0 }, uInner: { value: 0.25 } } });
    this.disc = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 1, 1), this.discMat);
    this.glow = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), new THREE.MeshBasicMaterial({ color: 0xffa050, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide }));
    this.group.add(this.horizon, this.photon, this.disc, this.glow);
    this.seed = -1;
  }
  hide() { this.group.visible = false; }
  show(x, y, z, rs, seed) {
    this.group.position.set(x, y, z); this.group.visible = true;
    this.horizon.scale.setScalar(rs);
    this.photon.scale.setScalar(rs * 2.6); // photon ring: apparent radius √27/2 ≈ 2.6 Rs
    this.disc.scale.setScalar(rs * 12); this.discMat.uniforms.uInner.value = 3 / 12; this.discMat.uniforms.uTime.value = performance.now() * 1e-3;
    this.glow.scale.setScalar(rs * 4);
    // the disc plane is unknown for most objects: a fixed per-object tilt so it reads as a disc
    if (this.seed !== seed) { this.seed = seed; this.disc.rotation.set(1.22 + 0.4 * ((seed * 7) % 5) / 5, 0, (seed * 13 % 7) / 7); }
    this.photon.lookAt(-x, -y, -z); // the photon ring always faces the viewer (it is a lensing effect)
  }
}

export class BlackHoleLayer {
  constructor(universe, items, dsoLayer) {
    this.u = universe; this.visible = true; this.items = items;
    const n = this.count = items.length;
    this.pos = new Float64Array(n * 3); const pos32 = new Float32Array(n * 3); const kind = new Float32Array(n); this.alpha = new Float32Array(n).fill(1);
    // supermassive black holes sit at the catalogue distance of their host galaxy when we have one (label and galaxy stay together)
    const galByPos = new Map(); const key = (ra, dec) => Math.floor(ra * 4) + 4000 * Math.floor((dec + 90) * 4);
    if (dsoLayer) dsoLayer.items.forEach((e, j) => { if (e.t === 'G' || e.t === 'GPair' || e.t === 'QSO') { const k = key(e.ra, e.dec); if (!galByPos.has(k)) galByPos.set(k, []); galByPos.get(k).push(j); } });
    for (let i = 0; i < n; i++) {
      const e = items[i]; let dpc = e.d; e.hostIndex = -1;
      if (e.kind === 'smbh' && dsoLayer) {
        const cd = Math.cos(e.dec * DEG); let best = -1, bs = 0.5 / 60;
        for (let dr = -1; dr <= 1; dr++) for (let dd = -1; dd <= 1; dd++) { const list = galByPos.get(key(e.ra + dr * 0.25, e.dec + dd * 0.25)); if (!list) continue; for (const j of list) { const g = dsoLayer.items[j]; const s = Math.hypot((g.ra - e.ra) * cd, g.dec - e.dec); if (s < bs) { bs = s; best = j; } } }
        if (best >= 0) { const g = dsoLayer.items[best]; e.hostIndex = best; e.hostName = dsoLayer.displayName(g); if (g.dq === 'c' || g.dq === 'z' || g.dq === 'e') dpc = g.d; }
      }
      e.dpc = dpc;
      const ra = e.ra * DEG, dec = e.dec * DEG, dkm = dpc * KM_PER_PC, cd = Math.cos(dec);
      const x = cd * Math.cos(ra) * dkm, y = cd * Math.sin(ra) * dkm, z = Math.sin(dec) * dkm;
      this.pos[3 * i] = x; this.pos[3 * i + 1] = y; this.pos[3 * i + 2] = z; pos32[3 * i] = x; pos32[3 * i + 1] = y; pos32[3 * i + 2] = z;
      kind[i] = e.kind === 'smbh' ? 2 : e.kind === 'imbh' ? 1 : 0;
      e.rsKm = e.rs || (e.kind === 'smbh' ? 3e7 : 30); // unknown mass: draw a nominal 10 Msun / 10^7 Msun horizon
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos32, 3));
    geo.setAttribute('kind', new THREE.BufferAttribute(kind, 1));
    geo.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.mat = new THREE.ShaderMaterial({ vertexShader: MARK_VERT, fragmentShader: MARK_FRAG, transparent: true, depthWrite: false, depthTest: true,
      uniforms: { uCam: { value: new THREE.Vector3() }, uPixelRatio: { value: 1 } } });
    this.points = new THREE.Points(geo, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 8;
    universe.scene.add(this.points);
    // close-range model (one, for the nearest black hole)
    this.model = new HorizonModel(universe.scene);
    this.modelIndex = -1;
  }
  update(ctx) {
    this.points.visible = this.visible; this.model.hide();
    if (!this.visible) return;
    const cam = ctx.camPos; this.mat.uniforms.uCam.value.set(cam[0], cam[1], cam[2]); this.mat.uniforms.uPixelRatio.value = ctx.pixelRatio;
    const dSunPc = Math.hypot(cam[0], cam[1], cam[2]) / KM_PER_PC;
    // markers: stellar ones fade once the camera is far outside the Galaxy (they collapse to one pixel anyway), all fade when the model takes over
    const stellarA = 0.75 * (1 - THREE.MathUtils.smoothstep(dSunPc, 5e4, 3e5));
    const outside = THREE.MathUtils.smoothstep(dSunPc, 1e5, 1e6); // camera outside the Milky Way: galaxy-centre markers make sense
    const sel = this.u.selection?.ref?.layer === 'bh' ? this.u.selection.ref.index : -1;
    let dirty = false, nearest = -1, nearestPx = 0;
    for (let i = 0; i < this.count; i++) {
      const e = this.items[i];
      const x = this.pos[3 * i] - cam[0], y = this.pos[3 * i + 1] - cam[1], z = this.pos[3 * i + 2] - cam[2];
      const d = Math.sqrt(x * x + y * y + z * z);
      const px = e.rsKm * 12 / d * ctx.pxPerRad; // apparent size of the accretion disc
      if (px > nearestPx) { nearestPx = px; nearest = i; }
      // stellar-mass holes: faint marks while inside the Galaxy; supermassive ones: shown from outside the Galaxy, or when nearby
      let a = e.kind === 'stellar' ? stellarA : Math.max(outside, 1 - THREE.MathUtils.smoothstep(d / KM_PER_PC, 2e6, 4e6));
      if (i === sel) a = 1;
      a *= 1 - THREE.MathUtils.smoothstep(px, 4, 12);
      if (Math.abs(this.alpha[i] - a) > 1e-3) { this.alpha[i] = a; dirty = true; }
    }
    if (dirty) this.points.geometry.attributes.alpha.needsUpdate = true;
    if (nearest >= 0 && nearestPx > 2) {
      const e = this.items[nearest]; const rs = e.rsKm;
      const x = this.pos[3 * nearest] - cam[0], y = this.pos[3 * nearest + 1] - cam[1], z = this.pos[3 * nearest + 2] - cam[2];
      this.modelIndex = nearest; this.model.show(x, y, z, rs, nearest);
    }
  }
  worldPos(i, out) { out[0] = this.pos[3 * i]; out[1] = this.pos[3 * i + 1]; out[2] = this.pos[3 * i + 2]; return out; }
  nearestSurface(camPos) {
    let best = Infinity;
    for (let i = 0; i < this.count; i++) { const d = Math.hypot(this.pos[3 * i] - camPos[0], this.pos[3 * i + 1] - camPos[1], this.pos[3 * i + 2] - camPos[2]) - this.items[i].rsKm; if (d < best) best = d; }
    return best;
  }
  pick(ray, camPos, pxPerRad) {
    if (!this.visible) return null;
    let best = -1, bestSep = 12;
    for (let i = 0; i < this.count; i++) {
      if (this.alpha[i] < 0.05 && i !== this.modelIndex) continue;
      const x = this.pos[3 * i] - camPos[0], y = this.pos[3 * i + 1] - camPos[1], z = this.pos[3 * i + 2] - camPos[2];
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.999) continue;
      const rpx = Math.min(200, this.items[i].rsKm * 12 / d * pxPerRad);
      const sep = Math.max(0, Math.acos(Math.min(1, dot)) * pxPerRad - rpx);
      if (sep < bestSep) { bestSep = sep; best = i; }
    }
    return best < 0 ? null : { sepPx: bestSep, desc: this.describe(best) };
  }
  describe(i) {
    const self = this, e = this.items[i]; const rs = e.rsKm; const dly = e.dpc * 3.26156;
    const massStr = e.massText ? `${e.massText} solar masses` : 'not measured';
    const rows = [['Type', KIND_LABEL[e.kind]], ['Mass', massStr], ['How the mass was measured', e.method || '—'],
      ['Schwarzschild radius', e.mass ? `${fmtDist(rs)} (event-horizon radius for a non-rotating hole)` : `unknown mass — drawn with a nominal ${fmtDist(rs)} horizon`],
      ['Distance', `${fmtDist(e.dpc * KM_PER_PC)}${e.dq === 'u' ? ' — distance unknown, placed at a nominal value' : ''}${e.hostIndex >= 0 ? ' (host galaxy catalogue distance)' : ''}`]];
    if (e.hostName || e.host) rows.push(['Host', e.hostName || e.host]);
    if (e.spec) rows.push(['Companion star', e.spec]);
    if (e.porb) rows.push(['Orbital period', /[a-z]/.test(e.porb) ? e.porb : `${e.porb} days`]);
    if (e.year) rows.push(['Discovered', e.year]);
    if (e.aka?.length) rows.push(['Other names', e.aka.join(', ')]);
    rows.push(['RA / Dec (J2000)', `${fmtRA(e.ra)} / ${fmtDec(e.dec)}`]);
    const what = e.kind === 'smbh' ? `the supermassive black hole at the heart of ${e.hostName || e.host || 'its galaxy'}` : e.kind === 'imbh' ? 'a candidate intermediate-mass black hole' : e.spec ? `a stellar-mass black hole pulling gas from a ${e.spec}-type companion star` : 'a stellar-mass black hole in a binary system';
    return { kind: 'blackhole', kindLabel: KIND_LABEL[e.kind], name: e.n, sub: `${KIND_LABEL[e.kind]} · ${fmtNum(dly, 3)} ly`, radius: rs * 12, rows,
      desc: e.desc || `${e.n} is ${what}, ${fmtNum(dly, 3)} light-years away.${e.mass ? ` With ${massStr}, its event horizon would be ${fmtDist(rs)} across in radius.` : ''} Nothing of the hole itself can be seen — what glows is the accretion disc of infalling matter, drawn here to scale around a horizon of the measured size.`,
      source: e.src, wiki: [e.n, ...(e.aka || [])], ref: { layer: 'bh', index: i }, getPos: (jd, out) => self.worldPos(i, out), faceFrom: [0, 0, 0] };
  }
  labels(ctx, out) {
    if (!this.visible) return;
    const cam = ctx.camPos, f = ctx.forward;
    for (let i = 0; i < this.count; i++) {
      if (this.alpha[i] < 0.3 && i !== this.modelIndex) continue;
      const x = this.pos[3 * i] - cam[0], y = this.pos[3 * i + 1] - cam[1], z = this.pos[3 * i + 2] - cam[2];
      const d = Math.sqrt(x * x + y * y + z * z); if ((x * f.x + y * f.y + z * f.z) / d < ctx.cosHalfFov) continue;
      out.push({ text: this.items[i].n, x, y, z, cls: 'bh', prio: this.items[i].kind === 'smbh' ? 30 : 22, ref: { layer: 'bh', index: i } });
    }
  }
  searchEntries() { return this.items.map((e, i) => ({ name: e.n, alt: (e.aka || []).join(' '), kind: 'black hole', ref: { layer: 'bh', index: i } })); }
  byName(name) { const q = name.toLowerCase(); return this.items.findIndex(e => e.n.toLowerCase() === q || (e.aka || []).some(a => a.toLowerCase() === q)); }
}
