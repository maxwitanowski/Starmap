import * as THREE from 'three';
import { DEG } from '../astro/units.js';

// On-demand 3D particle models for ANY catalogued galaxy (NGC/IC and 2MRS): when a galaxy grows past ~40 px on screen
// a model is generated from its catalogued size, axis ratio, position angle and morphological type, and kept in one of
// MAX_ACTIVE slots (least-visible slot is recycled). The particle distribution itself is a model.
const MAX_ACTIVE = 48;

const VERT = /* glsl */`
  attribute vec3 color; attribute float size;
  uniform vec3 uCenter; uniform float uFade;
  uniform float uPixelRatio; uniform float uFovScale;
  varying vec3 vColor; varying float vAlpha;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vec3 rel = uCenter + position;
    float d = length(rel * 1e-10) * 1e10;
    float px = size / d * uFovScale;
    float fade = uFade * (1.0 - smoothstep(30.0, 90.0, px));
    float soft = smoothstep(6.0, 30.0, px);
    vAlpha = fade * clamp(px / 2.0, 0.55, 1.0) * mix(0.6, 0.12, soft);
    vColor = color;
    vec4 mv = modelViewMatrix * vec4(rel, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(px, 1.7, 120.0) * uPixelRatio;
    if (vAlpha < 0.003) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    #include <logdepthbuf_vertex>
  }`;
const FRAG = /* glsl */`
  varying vec3 vColor; varying float vAlpha;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0;
    float a = exp(-r2 * 2.8) * vAlpha;
    gl_FragColor = vec4(vColor * a, a);
  }`;

export class GalaxyModelLayer {
  constructor(universe, dsoLayer) {
    this.u = universe; this.dso = dsoLayer; this.visible = true;
    this.mrs = null; // set later (Galaxies2MRS layer)
    // candidate galaxies from the NGC/IC catalogue
    this.dsoGal = [];
    dsoLayer.items.forEach((e, i) => { if ((e.t === 'G' || e.t === 'GPair' || e.t === 'GTrpl') && e.maj) { this.dsoGal.push(i); dsoLayer.fadeFlag[i] = 1; } });
    dsoLayer.mesh.geometry.attributes.iFade.needsUpdate = true;
    this.slots = new Map(); // key -> { points, center, R, fade, px, key, dsoIndex }
    this.group = new THREE.Group(); universe.scene.add(this.group);
    this.baseMat = { vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending };
    this.rnd = mulberry(99);
    this._v = new THREE.Vector3(); this._m = new THREE.Matrix4();
    this.count = 0;
  }
  dsoInfo(i) {
    const e = this.dso.items[i];
    const hub = (e.hub || '').toUpperCase();
    const kind = /^E|^DSPH|^DE/.test(hub) ? 'E' : /^S0/.test(hub) ? 'S0' : /IRR|^I|^IB|^SM|^IM|DIRR/.test(hub) ? 'I' : 'S';
    return { center: [this.dso.pos[3 * i], this.dso.pos[3 * i + 1], this.dso.pos[3 * i + 2]], Rkm: this.dso.sizeKm[2 * i + 1] / (e.img ? 3 : 2), ratio: e.min && e.maj ? Math.min(1, e.min / e.maj) : 0.7, kind, ra: e.ra, dec: e.dec, pa: e.pa || 0, name: this.dso.displayName(e), dsoIndex: i };
  }
  _build(key, info) {
    const { center, Rkm, ratio, kind, ra, dec, pa } = info;
    const X = new THREE.Vector3(), Y = new THREE.Vector3(), Z = new THREE.Vector3(), v = this._v, m = this._m;
    const raR = ra * DEG, decR = dec * DEG;
    const los = new THREE.Vector3(Math.cos(decR) * Math.cos(raR), Math.cos(decR) * Math.sin(raR), Math.sin(decR));
    const north = new THREE.Vector3(-Math.sin(decR) * Math.cos(raR), -Math.sin(decR) * Math.sin(raR), Math.cos(decR));
    const east = new THREE.Vector3(-Math.sin(raR), Math.cos(raR), 0);
    const paR = pa * DEG;
    X.copy(north).multiplyScalar(Math.cos(paR)).addScaledVector(east, Math.sin(paR)).normalize();
    const inc = kind === 'E' ? 0 : Math.acos(Math.max(0.12, ratio));
    Z.copy(los).applyAxisAngle(X, inc).normalize(); Y.crossVectors(Z, X).normalize();
    m.makeBasis(X, Y, Z);
    const parts = generate(kind, ratio, this.rnd, Rkm > 3e17);
    const n = parts.length / 7;
    const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), size = new Float32Array(n);
    for (let k = 0, j = 0; k < parts.length; k += 7, j++) {
      v.set(parts[k], parts[k + 1], parts[k + 2]).multiplyScalar(Rkm).applyMatrix4(m);
      pos[3 * j] = v.x; pos[3 * j + 1] = v.y; pos[3 * j + 2] = v.z; col[3 * j] = parts[k + 3]; col[3 * j + 1] = parts[k + 4]; col[3 * j + 2] = parts[k + 5]; size[j] = parts[k + 6] * Rkm;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3)); geo.setAttribute('size', new THREE.BufferAttribute(size, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    const mat = new THREE.ShaderMaterial({ ...this.baseMat, uniforms: { uCenter: { value: new THREE.Vector3() }, uFade: { value: 0 }, uPixelRatio: { value: 1 }, uFovScale: { value: 1000 } } });
    const points = new THREE.Points(geo, mat); points.frustumCulled = false; points.renderOrder = 2;
    this.group.add(points);
    const slot = { key, points, center, R: Rkm, fade: 0, px: 0, info, n };
    this.slots.set(key, slot); this.count += n;
    return slot;
  }
  _evict(slot) { this.group.remove(slot.points); slot.points.geometry.dispose(); slot.points.material.dispose(); this.slots.delete(slot.key); this.count -= slot.n; }
  update(ctx) {
    this.group.visible = this.visible;
    const cam = ctx.camPos;
    // which galaxies are big enough on screen to deserve a model?
    const wanted = [];
    const consider = (key, cx, cy, cz, R, getInfo) => {
      const d = Math.hypot(cx - cam[0], cy - cam[1], cz - cam[2]); const px = R / d * ctx.pxPerRad;
      if (px > 40) wanted.push([px, key, getInfo]);
    };
    const D = this.dso;
    for (const i of this.dsoGal) consider('d' + i, D.pos[3 * i], D.pos[3 * i + 1], D.pos[3 * i + 2], D.sizeKm[2 * i + 1] / (D.items[i].img ? 3 : 2), () => this.dsoInfo(i));
    if (this.mrs) { const M = this.mrs; for (let i = 0; i < M.count; i++) if (M.dup[i] < 0) consider('m' + i, M.pos[3 * i], M.pos[3 * i + 1], M.pos[3 * i + 2], M.sizeKm[2 * i + 1] / 2, () => M.modelInfo(i)); }
    wanted.sort((a, b) => b[0] - a[0]);
    const keep = new Set();
    for (const [px, key, getInfo] of wanted.slice(0, MAX_ACTIVE)) {
      keep.add(key);
      if (!this.slots.has(key)) { if (this.slots.size >= MAX_ACTIVE) { let worst = null; for (const s of this.slots.values()) if (!keep.has(s.key) && (!worst || s.px < worst.px)) worst = s; if (worst) this._evict(worst); else break; } this._build(key, getInfo()); }
    }
    for (const s of [...this.slots.values()]) if (!keep.has(s.key)) this._evict(s);
    // per-slot uniforms + fading of the flat sprite it replaces
    let dsoDirty = false, mrsDirty = false;
    for (const s of this.slots.values()) {
      const x = s.center[0] - cam[0], y = s.center[1] - cam[1], z = s.center[2] - cam[2];
      const d = Math.sqrt(x * x + y * y + z * z);
      s.px = s.R / d * ctx.pxPerRad;
      s.fade = this.visible ? THREE.MathUtils.smoothstep(s.px, 40, 160) : 0;
      const u = s.points.material.uniforms; u.uCenter.value.set(x, y, z); u.uFade.value = s.fade; u.uPixelRatio.value = ctx.pixelRatio; u.uFovScale.value = ctx.pxPerRad;
      s.points.visible = s.fade > 0.005;
      if (s.info.dsoIndex !== undefined) { const i = s.info.dsoIndex; const base = s.baseAlpha ?? (s.baseAlpha = this.dso.alphas[i]); const a = base * (1 - 0.85 * s.fade); if (Math.abs(this.dso.alphas[i] - a) > 1e-3) { this.dso.alphas[i] = a; dsoDirty = true; } }
      else if (this.mrs && s.key[0] === 'm') { const i = +s.key.slice(1); const a = this.mrs.baseAlpha[i] * (1 - 0.85 * s.fade); if (Math.abs(this.mrs.alpha[i] - a) > 1e-3) { this.mrs.alpha[i] = a; mrsDirty = true; } }
    }
    if (dsoDirty) this.dso.mesh.geometry.attributes.iAlpha.needsUpdate = true;
    if (mrsDirty) this.mrs.alphaAttr.needsUpdate = true;
  }
  pick(ray, camPos, pxPerRad) {
    if (!this.visible) return null;
    let best = null, bestSep = 9, bestK = -1;
    for (const s of this.slots.values()) {
      if (s.fade < 0.3) continue;
      const p = s.points.geometry.attributes.position.array;
      for (let k = 0; k < s.n; k++) {
        const x = s.center[0] + p[3 * k] - camPos[0], y = s.center[1] + p[3 * k + 1] - camPos[1], z = s.center[2] + p[3 * k + 2] - camPos[2];
        const d = Math.sqrt(x * x + y * y + z * z);
        const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.9998) continue;
        const sep = Math.acos(Math.min(1, dot)) * pxPerRad;
        if (sep < bestSep) { bestSep = sep; best = s; bestK = k; }
      }
    }
    return best ? { sepPx: bestSep + 3, desc: this.describeParticle(best, bestK) } : null;
  }
  describeParticle(s, k) {
    const p = s.points.geometry.attributes.position.array, c = s.points.geometry.attributes.color.array;
    const lx = p[3 * k], ly = p[3 * k + 1], lz = p[3 * k + 2];
    const rKm = Math.hypot(lx, ly, lz), frac = rKm / s.R;
    const pop = c[3 * k + 2] > c[3 * k] ? 'young blue stars and star-forming regions (spiral arm)' : c[3 * k] > 0.98 && c[3 * k + 1] < 0.7 ? 'HII region: hot young stars in glowing hydrogen' : 'older yellow stars (disk / bulge population)';
    const where = frac < 0.18 ? 'central bulge' : frac < 0.7 ? 'inner disk' : 'outer disk';
    const galName = s.info.name;
    const rows = [['Host galaxy', galName], ['Region', `${where}, ${(frac * 100).toFixed(0)}% of the way to the visible edge`], ['Distance from galaxy centre', `${(rKm / 9.4607e12).toLocaleString('en-US', { maximumFractionDigits: 0 })} ly`], ['Stellar population (model)', pop], ['Represents', 'roughly 10⁵–10⁶ stars whose combined light is drawn as one particle']];
    const center = s.center;
    return { kind: 'galaxy', kindLabel: 'Star cloud (model)', name: `Star cloud in ${galName}`, sub: `${where} of ${galName}`, radius: s.R * 0.01, rows,
      desc: `No survey resolves individual stars in this galaxy, so it is drawn as a particle model shaped by its catalogued size, axis ratio, orientation and type. Each particle stands for a cloud of stars; the population label comes from its place in the model, not from a measurement.`,
      source: 'Model particle (see Nearby galaxy models). Galaxy data: OpenNGC / 2MRS.', ref: { layer: 'gmodels', key: s.key, k },
      getPos: (jd, out) => { out[0] = center[0] + lx; out[1] = center[1] + ly; out[2] = center[2] + lz; return out; } };
  }
  describeByRef(ref) { const s = this.slots.get(ref.key); return s ? this.describeParticle(s, ref.k) : null; }
  labels() { }
  searchEntries() { return []; }
}

// particles in a unit frame: disk radius 1 in XY, returns flat [x,y,z,r,g,b,size]
function generate(kind, ratio, rnd, big) {
  const gauss = () => { let u = 0, v = 0; while (u === 0) u = rnd(); while (v === 0) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  const out = []; const q = big ? 1 : 0.5; // fewer particles for the thousands of small distant galaxies
  const yellow = [1.0, 0.9, 0.72], blue = [0.7, 0.8, 1.0], pink = [1.0, 0.6, 0.7], white = [0.95, 0.95, 1.0], orange = [1.0, 0.82, 0.6];
  const push = (x, y, z, c, s) => out.push(x, y, z, c[0], c[1], c[2], s);
  const S = 0.011;
  if (kind === 'E') {
    for (let i = 0; i < 5000 * q; i++) { const r = Math.pow(rnd(), 1.6); const th = rnd() * 6.283, ph = Math.acos(2 * rnd() - 1); push(r * Math.sin(ph) * Math.cos(th), r * Math.sin(ph) * Math.sin(th) * ratio, r * Math.cos(ph) * Math.min(ratio, 0.75), i % 3 ? yellow : orange, (i % 6 === 0 ? 0.05 : S) * (1 + rnd())); }
    return out;
  }
  if (kind === 'I') {
    for (let i = 0; i < 4500 * q; i++) { const r = Math.pow(rnd(), 0.8); const th = rnd() * 6.283; const x = r * Math.cos(th) + gauss() * 0.08, y = r * Math.sin(th) * 0.8 + gauss() * 0.08; push(x, y, gauss() * 0.06, rnd() < 0.3 ? pink : rnd() < 0.6 ? blue : white, (i % 5 === 0 ? 0.05 : S) * (0.8 + rnd() * 1.5)); }
    return out;
  }
  const bulgeN = (kind === 'S0' ? 2600 : 1300) * q;
  for (let i = 0; i < bulgeN; i++) { const r = Math.abs(gauss()) * 0.10; const th = rnd() * 6.283, ph = Math.acos(2 * rnd() - 1); push(r * Math.sin(ph) * Math.cos(th), r * Math.sin(ph) * Math.sin(th), r * Math.cos(ph) * 0.55, i % 2 ? yellow : orange, S * (0.7 + rnd() * 0.8)); }
  for (let i = 0; i < 4000 * q; i++) { const r = Math.min(1.05, -0.32 * Math.log(rnd())); const th = rnd() * 6.283; push(r * Math.cos(th), r * Math.sin(th), gauss() * 0.012, kind === 'S0' ? yellow : white, S * (0.8 + rnd() * 0.8)); }
  for (let i = 0; i < 900 * q; i++) { const r = Math.min(1.0, -0.3 * Math.log(rnd())); const th = rnd() * 6.283; push(r * Math.cos(th), r * Math.sin(th), gauss() * 0.01, kind === 'S0' ? yellow : [0.85, 0.85, 0.95], 0.06 * (0.6 + rnd())); }
  if (kind === 'S') {
    const arms = rnd() < 0.5 ? 2 : rnd() < 0.5 ? 3 : 4; const pitch = Math.tan((10 + rnd() * 10) * DEG);
    for (let a = 0; a < arms; a++) {
      const th0 = a * 6.283 / arms + rnd();
      for (let i = 0; i < 1600 * q; i++) {
        const t = rnd() * 2.4; const r = 0.22 * Math.exp(pitch * t * 2.5); if (r > 1.02) continue;
        const th = th0 + t * 2.5; const spread = 0.05 + 0.05 * r;
        const k = rnd(); const c = k < 0.15 ? pink : k < 0.7 ? blue : white;
        push(r * Math.cos(th) + gauss() * spread, r * Math.sin(th) + gauss() * spread, gauss() * 0.008, c, S * (k < 0.15 ? 1.4 : 0.9) * (0.7 + rnd()));
        if (i % 4 === 0) push(r * Math.cos(th) + gauss() * spread, r * Math.sin(th) + gauss() * spread, gauss() * 0.008, k < 0.3 ? pink : blue, 0.045 * (0.6 + rnd()));
      }
    }
  }
  return out;
}
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
