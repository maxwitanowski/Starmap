import * as THREE from 'three';

// 3D volumes for nebulae and star clusters.
// Photographed objects: particles are importance-sampled from the real image (PanSTARRS / Mellinger / DSS2), so sky structure
// and colour come from the photograph. Objects without a photograph get a schematic volume built from their catalogued
// size, axis ratio, position angle and type. Depth along the line of sight is always a model: hollow shell for planetary
// nebulae and supernova remnants, slab for emission nebulae, sphere for clusters.
const NEBULA_TYPES = new Set(['HII', 'EmN', 'Neb', 'RfN', 'PN', 'SNR', 'Cl+N']);
const CLUSTER_TYPES = new Set(['OCl', 'GCl', '*Ass']);
const N_NEB = 7000, N_CL = 6000, N_NEB_SCHEM = 2200, N_CL_SCHEM = 500;
const CELL = 128, GRID = 32;

const VERT = /* glsl */`
  attribute vec3 center; attribute float halfSize; attribute vec3 color; attribute float size; attribute float kind;
  uniform vec3 uCam; uniform float uPixelRatio; uniform float uFovScale;
  varying vec3 vColor; varying float vAlpha; varying float vKind; varying float vSeed;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vec3 cRel = center - uCam;
    float objPx = halfSize / (length(cRel * 1e-10) * 1e10) * uFovScale;
    float fade = smoothstep(25.0, 110.0, objPx);          // volume appears as the object grows on screen
    vec3 rel = position - uCam;
    float d = length(rel * 1e-10) * 1e10;
    float px = size / d * uFovScale;
    fade *= 1.0 - smoothstep(600.0, 1400.0, px);          // no single particle may swallow the view
    if (kind >= 2.0) {
      float b = kind - 2.0;
      vAlpha = fade * (0.55 + 0.45 * b);
      gl_PointSize = (1.6 + 4.5 * b * b) * uPixelRatio * clamp(uFovScale / 1000.0, 0.7, 1.6);
    } else if (kind > 0.5) {
      vAlpha = fade * clamp(px / 2.0, 0.7, 1.0) * 0.8;
      gl_PointSize = clamp(px, 2.2, 420.0) * uPixelRatio;
    } else {
      // gas: overlapping soft clouds; the bigger a blob is on screen the fainter it is, so many layers add up to smooth structure
      vAlpha = fade * 0.3 * clamp(px / 6.0, 0.35, 1.0) * clamp(90.0 / max(px, 1.0), 0.18, 1.0);
      gl_PointSize = clamp(px, 3.0, 1400.0) * uPixelRatio;
    }
    vSeed = fract(size * 0.000731 + kind * 0.37);
    vColor = color; vKind = kind;
    vec4 mv = modelViewMatrix * vec4(rel, 1.0);
    gl_Position = projectionMatrix * mv;
    if (vAlpha < 0.003) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    #include <logdepthbuf_vertex>
  }`;
const FRAG = /* glsl */`
  varying vec3 vColor; varying float vAlpha; varying float vKind; varying float vSeed;
  #include <logdepthbuf_pars_fragment>
  float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0;
    float a; vec3 col = vColor;
    if (vKind >= 2.0) { a = exp(-r2 * 9.0) + 0.25 * exp(-r2 * 2.5); col = mix(vColor, vec3(1.0), exp(-r2 * 9.0) * 0.6); }
    else if (vKind > 0.5) a = exp(-r2 * 6.0);
    else {
      // wispy cloud: radial falloff broken up by two octaves of noise, different per particle
      vec2 p = gl_PointCoord * 3.0 + vSeed * 17.0;
      float n = 0.65 * n2(p) + 0.35 * n2(p * 2.3 + 5.0);
      float edge = smoothstep(1.0, 0.15, r2);
      a = edge * exp(-r2 * 1.6) * (0.35 + 0.9 * n);
    }
    a *= vAlpha;
    gl_FragColor = vec4(col * a, a);
  }`;

export class NebulaVolumeLayer {
  constructor(universe, dsoLayer) {
    this.u = universe; this.dso = dsoLayer; this.visible = true;
    this.eligible = new Set(); this.schematicQueue = [];
    let cap = 0;
    dsoLayer.items.forEach((e, i) => {
      const neb = NEBULA_TYPES.has(e.t), cl = CLUSTER_TYPES.has(e.t);
      if (!neb && !cl) return;
      if (e.dq === 'u') return; // unknown distance: the physical size would be a guess, keep the flat sprite only
      if (e.img) { this.eligible.add(i); cap += (neb ? N_NEB : N_CL) + 1500; }
      else if (neb || (cl && (e.maj >= 4 || (e.nstars || 0) >= 40))) { this.eligible.add(i); this.schematicQueue.push(i); cap += (neb ? N_NEB_SCHEM : N_CL_SCHEM) + 400; }
    });
    for (const i of this.eligible) dsoLayer.fadeFlag[i] = 1;
    dsoLayer.mesh.geometry.attributes.iFade.needsUpdate = true;
    this.pos = new Float32Array(cap * 3); this.center = new Float32Array(cap * 3); this.half = new Float32Array(cap);
    this.col = new Float32Array(cap * 3); this.size = new Float32Array(cap); this.kind = new Float32Array(cap);
    this.count = 0;
    this.mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
      uniforms: { uCam: { value: new THREE.Vector3() }, uPixelRatio: { value: 1 }, uFovScale: { value: 1000 } } });
    this.group = new THREE.Group(); universe.scene.add(this.group);
    this.built = []; // [dsoIndex, baseAlpha, pointsObject]
    this._c64 = Object.assign(document.createElement('canvas'), { width: 64, height: 64 }); this._g64 = this._c64.getContext('2d', { willReadFrequently: true });
    this._c192 = Object.assign(document.createElement('canvas'), { width: 192, height: 192 }); this._g192 = this._c192.getContext('2d', { willReadFrequently: true });
    this._q = new THREE.Quaternion(); this._v = new THREE.Vector3();
    this._rnd = mulberry(7);
    this._dirty = false;
    dsoLayer.volumes = this;
  }
  // Called by DeepSky when a DSS image has loaded; nebulae try the higher-dynamic-range volume image first
  addFromImage(i, spriteImg) {
    if (!this.eligible.has(i) || !this.dso.items[i].img) return;
    const e = this.dso.items[i];
    const isCluster = CLUSTER_TYPES.has(e.t), isShell = e.t === 'PN' || e.t === 'SNR';
    const go = img => { const d = this._analyse((g, S) => g.drawImage(img, 0, 0, S, S), isCluster, isShell, 192); if (d) this._build(i, d, false); };
    if (NEBULA_TYPES.has(e.t)) {
      const img = new Image();
      img.onload = () => go(img);
      img.onerror = () => go(spriteImg);
      img.src = `${import.meta.env.BASE_URL}dso_vol/${e.img}.jpg`;
    } else go(spriteImg);
  }
  // Schematic volume from the procedural atlas cell (objects with no photograph)
  _buildSchematic(i) {
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
    const floor = isCluster ? 0.12 : isShell ? 0.3 : 0.2;
    for (let k = 0; k < S * S; k++) { const b = w[k] / maxB; w[k] = b > floor ? Math.pow(b - floor, isCluster ? 1.3 : isShell ? 2.6 : 2.0) : 0; }
    if (isCluster) { // cap: no single bright star may soak up the particle budget
      let sum = 0, nz = 0; for (let k = 0; k < S * S; k++) if (w[k] > 0) { sum += w[k]; nz++; }
      const cap = nz ? 3 * sum / nz : 1; for (let k = 0; k < S * S; k++) if (w[k] > cap) w[k] = cap;
    }
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
    const isShell = e.t === 'PN' || e.t === 'SNR';
    const startCount = this.count;
    // quad half-size (km): photo frames span fov = 1.5 x major axis; schematic sprites span the major axis itself
    const half = this.dso.sizeKm[2 * i + 1] / 2;
    const halfX = this.dso.sizeKm[2 * i] / 2;
    this._q.set(this.dso.quat[4 * i], this.dso.quat[4 * i + 1], this.dso.quat[4 * i + 2], this.dso.quat[4 * i + 3]);
    const cx = this.dso.pos[3 * i], cy = this.dso.pos[3 * i + 1], cz = this.dso.pos[3 * i + 2];
    const rnd = this._rnd;
    const gauss = () => { let u = 0, v = 0; while (u === 0) u = rnd(); while (v === 0) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
    const depth = isCluster ? 0.6 : 0.22;
    const fovDeg = Math.min(Math.max((e.maj || 5) * 1.5 / 60, 0.04), 6);
    const objFrac = schematic ? 1 : Math.min(1, ((e.maj || 5) / 60) / fovDeg);
    const halfObj = half * objFrac;
    const ratioX = schematic ? halfX / half : 1; // schematic sprites are ellipses: squeeze the minor axis
    // sample the sky-plane positions first so the line-of-sight spread can be matched to the measured lateral spread
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
    // one coherent depth per image cell (seeded by the cell), plus a jitter of one cell: a star's particles stay together
    const cellGauss = new Map();
    const cellDepth = (k, hx, hy) => {
      let g = cellGauss.get(k);
      if (g === undefined) { const r = mulberry(k * 2654435 + i * 97 + 11); let u = 0, v = 0; while (u === 0) u = r(); while (v === 0) v = r(); g = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); cellGauss.set(k, g); }
      return (g * 0.667 * Math.sqrt(aCore * aCore + hx * hx + hy * hy) + (rnd() - 0.5) * 4 / S) * half;
    };
    for (let n = 0; n < N; n++) {
      const [u, v, k] = samp[n];
      const lx = (u - 0.5) * 2 * half * ratioX, ly = (0.5 - v) * 2 * half;
      const rad = Math.hypot(u - 0.5, v - 0.5) * 2;
      let lz;
      if (isShell) { const rn = Math.min(1, rad / objFrac); lz = (rnd() < 0.5 ? -1 : 1) * Math.sqrt(Math.max(0, 1 - rn * rn)) * halfObj * 0.85 + gauss() * 0.1 * halfObj; }
      else if (isCluster) lz = cellDepth(k, (u - 0.5) * 2 * ratioX, (0.5 - v) * 2);
      else lz = gauss() * depth * halfObj;
      this._v.set(lx, ly, lz).applyQuaternion(this._q);
      const j = this.count++;
      this.pos[3 * j] = cx + this._v.x; this.pos[3 * j + 1] = cy + this._v.y; this.pos[3 * j + 2] = cz + this._v.z;
      this.center[3 * j] = cx; this.center[3 * j + 1] = cy; this.center[3 * j + 2] = cz; this.half[j] = half;
      let cr = px[4 * k] / 255, cg = px[4 * k + 1] / 255, cb = px[4 * k + 2] / 255;
      if (tint) { cr *= tint[0]; cg *= tint[1]; cb *= tint[2]; }
      const m = Math.max(cr, cg, cb, 0.05); cr /= m; cg /= m; cb /= m;
      const lum = 0.3 * cr + 0.5 * cg + 0.2 * cb; const sat = isCluster ? 1.2 : 1.4;
      cr = Math.min(1, Math.max(0, lum + (cr - lum) * sat)); cg = Math.min(1, Math.max(0, lum + (cg - lum) * sat)); cb = Math.min(1, Math.max(0, lum + (cb - lum) * sat));
      if (isCluster) { cr = 0.6 + 0.4 * cr; cg = 0.6 + 0.4 * cg; cb = 0.6 + 0.4 * cb; }
      this.col[3 * j] = cr; this.col[3 * j + 1] = cg; this.col[3 * j + 2] = cb;
      const glow = isCluster && n % 9 === 0;
      let sz;
      if (glow) sz = halfObj * (0.05 + 0.06 * rnd());
      else if (isCluster) sz = half * 0.008 * (0.6 + rnd());
      else { const t = rnd(); sz = halfObj * (t < 0.25 ? 0.10 + 0.14 * rnd() : t < 0.65 ? 0.04 + 0.06 * rnd() : 0.012 + 0.03 * rnd()); } // large, medium, fine cloudlets
      this.size[j] = sz;
      this.kind[j] = isCluster && !glow ? 1 : 0;
    }
    // resolved stars (local maxima found in _analyse)
    const maxS = stars.length ? stars[0][0] : 1;
    const cap = schematic ? 400 : (isCluster ? 1500 : 500);
    for (const [bri, fx, fy, k] of stars.slice(0, cap)) {
      if (this.count >= this.half.length) break;
      const b = Math.min(1, Math.pow(bri / maxS, 0.5));
      const lx = (fx - 0.5) * 2 * half * ratioX, ly = (0.5 - fy) * 2 * half;
      const rn = Math.min(1, Math.hypot(fx - 0.5, fy - 0.5) * 2 / objFrac);
      const lz = isCluster ? clusterDepth((fx - 0.5) * 2 * ratioX, (0.5 - fy) * 2) : gauss() * 0.3 * halfObj * Math.sqrt(Math.max(0.1, 1 - rn * rn * 0.7));
      this._v.set(lx, ly, lz).applyQuaternion(this._q);
      const j = this.count++;
      this.pos[3 * j] = cx + this._v.x; this.pos[3 * j + 1] = cy + this._v.y; this.pos[3 * j + 2] = cz + this._v.z;
      this.center[3 * j] = cx; this.center[3 * j + 1] = cy; this.center[3 * j + 2] = cz; this.half[j] = half;
      let cr = p2[4 * k] / 255, cg = p2[4 * k + 1] / 255, cb = p2[4 * k + 2] / 255; const m = Math.max(cr, cg, cb, 0.05); cr /= m; cg /= m; cb /= m;
      this.col[3 * j] = 0.55 + 0.45 * cr; this.col[3 * j + 1] = 0.55 + 0.45 * cg; this.col[3 * j + 2] = 0.55 + 0.45 * cb;
      this.size[j] = 1; this.kind[j] = 2 + b;
    }
    // one draw object per nebula, over views of the shared arrays
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
  }
  update(ctx) {
    // build a few schematic volumes per frame so startup stays smooth
    for (let n = 0; n < 12 && this.schematicQueue.length; n++) this._buildSchematic(this.schematicQueue.shift());
    this.group.visible = this.visible;
    this.mat.uniforms.uCam.value.set(ctx.camPos[0], ctx.camPos[1], ctx.camPos[2]);
    this.mat.uniforms.uPixelRatio.value = ctx.pixelRatio; this.mat.uniforms.uFovScale.value = ctx.pxPerRad;
    // fade the flat sprite as the volume takes over
    let dirty = false;
    for (const [i, base, pts] of this.built) {
      const d = Math.hypot(this.dso.pos[3 * i] - ctx.camPos[0], this.dso.pos[3 * i + 1] - ctx.camPos[1], this.dso.pos[3 * i + 2] - ctx.camPos[2]);
      const objPx = this.dso.sizeKm[2 * i + 1] / 2 / d * ctx.pxPerRad;
      pts.visible = objPx > 22; // the shader fades in from 25 px: anything smaller is skipped entirely
      const f = this.visible ? THREE.MathUtils.smoothstep(objPx, 20, 70) : 0;
      const a = base * (1 - 0.97 * f);
      if (Math.abs(this.dso.alphas[i] - a) > 1e-3) { this.dso.alphas[i] = a; dirty = true; }
    }
    if (dirty) this.dso.mesh.geometry.attributes.iAlpha.needsUpdate = true;
  }
  pick() { return null; }
  labels() { }
  searchEntries() { return []; }
}
function smooth(a, b, x) { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
