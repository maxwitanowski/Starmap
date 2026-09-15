import * as THREE from 'three';
import { KM_PER_MPC, DEG, fmtNum } from '../astro/units.js';
import { fmtRA, fmtDec } from './Stars.js';
import { PROC, GRID } from './DeepSky.js';

// 2MASS Redshift Survey: 43k galaxies drawn as oriented sprites. Shape comes from the catalogue — morphological T-type
// picks elliptical / lenticular / spiral / irregular, the isophotal radius sets the size and b/a the axis ratio.
// 2MRS publishes no position angle, so the orientation of the major axis on the sky is random (seeded).
const VERT = /* glsl */`
  attribute vec3 iPos; attribute vec4 iQuat; attribute vec2 iSize; attribute vec4 iUV; attribute vec3 iColor; attribute float iAlpha;
  uniform float uFovScale; uniform float uMinPx; uniform float uDim;
  varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vDot;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  vec3 rot(vec4 q, vec3 v) { return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
  void main() {
    float d = length(iPos * 1e-10) * 1e10;
    float pxH = iSize.y / d * uFovScale;
    float scale = 1.0; float alpha = iAlpha * uDim;
    if (pxH < uMinPx) { scale = uMinPx / pxH; alpha *= max(0.6, pow(pxH / uMinPx, 0.3)); }
    vec3 local = vec3(position.x * iSize.x * scale, position.y * iSize.y * scale, 0.0);
    vec3 world = iPos + rot(iQuat, local);
    vUv = vec2(mix(iUV.x, iUV.z, uv.x), mix(iUV.y, iUV.w, uv.y));
    vColor = iColor * (1.0 + 2.5 * (1.0 - smoothstep(2.0, 30.0, pxH))); vAlpha = alpha * smoothstep(0.3, 1.2, d / iSize.y); vDot = 1.0 - smoothstep(4.0, 14.0, pxH);
    gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
    #include <logdepthbuf_vertex>
  }`;
const FRAG = /* glsl */`
  uniform sampler2D uAtlas; varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vDot;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec4 t = texture2D(uAtlas, vUv);
    vec2 cell = fract(vUv * ${GRID}.0) - 0.5;
    float vign = smoothstep(0.5, 0.3, length(cell));
    vec3 c = t.rgb * vColor * vign * vAlpha;
    float rr = length(cell) * 2.0;
    vec3 dotc = vColor * exp(-rr * rr * 5.0) * 1.4 * vAlpha; // sub-pixel galaxies read as bright points, not smeared texture
    c = mix(c, dotc, vDot);
    gl_FragColor = vec4(c, max(max(c.r, c.g), c.b));
  }`;

export class GalaxyLayer {
  constructor(universe, data, idsText, dsoLayer) {
    this.u = universe; this.visible = true;
    this.raDecDist = data.pos; this.attr = data.attr; this.ids = idsText;
    const n = this.raDecDist.length / 3; this.count = n;
    this.pos = new Float64Array(n * 3); this.rel = new Float32Array(n * 3);
    this.sizeKm = new Float32Array(n * 2); this.quat = new Float32Array(n * 4); this.uvs = new Float32Array(n * 4);
    const color = new Float32Array(n * 3); this.alpha = new Float32Array(n); this.baseAlpha = new Float32Array(n);
    const cE = new THREE.Color('#ffd9a8'), cS0 = new THREE.Color('#ffe8c8'), cS = new THREE.Color('#c8d6ff'), cI = new THREE.Color('#c8e0ff'), cU = new THREE.Color('#d8d8e8');
    const q = new THREE.Quaternion(), m = new THREE.Matrix4(), X = new THREE.Vector3(), Y = new THREE.Vector3(), Z = new THREE.Vector3(), rq = new THREE.Quaternion();
    const rnd = mulberry(31);
    this.pa = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const ra = this.raDecDist[3 * i] * DEG, dec = this.raDecDist[3 * i + 1] * DEG, d = this.raDecDist[3 * i + 2] * KM_PER_MPC;
      const dx = Math.cos(dec) * Math.cos(ra), dy = Math.cos(dec) * Math.sin(ra), dz = Math.sin(dec);
      this.pos[3 * i] = d * dx; this.pos[3 * i + 1] = d * dy; this.pos[3 * i + 2] = d * dz;
      const T = this.attr[4 * i + 3], ba = this.attr[4 * i + 2], riso = this.attr[4 * i + 1];
      const major = d * (riso * 2 / 60) * DEG * 1.6; // isophotal radius -> a generous visible diameter
      this.sizeKm[2 * i + 1] = major; this.sizeKm[2 * i] = major * Math.max(0.15, Math.min(1, ba));
      Y.set(-Math.sin(dec) * Math.cos(ra), -Math.sin(dec) * Math.sin(ra), Math.cos(dec)); X.set(Math.sin(ra), -Math.cos(ra), 0); Z.crossVectors(X, Y);
      m.makeBasis(X, Y, Z); q.setFromRotationMatrix(m);
      const pa = rnd() * Math.PI; this.pa[i] = pa; rq.setFromAxisAngle(Z, pa); q.premultiply(rq);
      this.quat[4 * i] = q.x; this.quat[4 * i + 1] = q.y; this.quat[4 * i + 2] = q.z; this.quat[4 * i + 3] = q.w;
      const cell = T >= 90 ? PROC.ellip : T <= 1 ? PROC.ellip : T <= 8 ? (rnd() < 0.45 ? PROC.bar : PROC.spiral) : PROC.irr;
      const cx = cell % GRID, cy = Math.floor(cell / GRID);
      this.uvs[4 * i] = cx / GRID; this.uvs[4 * i + 1] = 1 - (cy + 1) / GRID; this.uvs[4 * i + 2] = (cx + 1) / GRID; this.uvs[4 * i + 3] = 1 - cy / GRID;
      const c = T >= 90 ? cU : T <= -4 ? cE : T <= 0 ? cS0 : T <= 8 ? cS : cI;
      color[3 * i] = c.r; color[3 * i + 1] = c.g; color[3 * i + 2] = c.b;
      const k = this.attr[4 * i];
      this.baseAlpha[i] = this.alpha[i] = THREE.MathUtils.clamp(1.3 - (k - 9.0) * 0.25, 0.35, 1.0);
    }
    // duplicates of catalogue galaxies (within 1.5 arcmin of an NGC/IC/curated galaxy) are hidden: one object, one label, one distance
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
    geo.instanceCount = n;
    geo.setAttribute('iPos', new THREE.InstancedBufferAttribute(this.rel, 3));
    geo.setAttribute('iQuat', new THREE.InstancedBufferAttribute(this.quat, 4));
    geo.setAttribute('iSize', new THREE.InstancedBufferAttribute(this.sizeKm, 2));
    geo.setAttribute('iUV', new THREE.InstancedBufferAttribute(this.uvs, 4));
    geo.setAttribute('iColor', new THREE.InstancedBufferAttribute(color, 3));
    geo.setAttribute('iAlpha', new THREE.InstancedBufferAttribute(this.alpha, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: { uAtlas: { value: dsoLayer.atlas }, uFovScale: { value: 1000 }, uMinPx: { value: 3.0 }, uDim: { value: 1 } } });
    this.mesh = new THREE.Mesh(geo, this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = 1;
    universe.scene.add(this.mesh);
    this.alphaAttr = geo.attributes.iAlpha;
  }
  update(ctx) {
    this.mesh.visible = this.visible;
    if (!this.visible) return;
    const cam = ctx.camPos, n = this.count, rel = this.rel, pos = this.pos;
    for (let i = 0; i < n; i++) { rel[3 * i] = pos[3 * i] - cam[0]; rel[3 * i + 1] = pos[3 * i + 1] - cam[1]; rel[3 * i + 2] = pos[3 * i + 2] - cam[2]; }
    this.mesh.geometry.attributes.iPos.needsUpdate = true;
    this.mat.uniforms.uFovScale.value = ctx.pxPerRad;
    // faint while inside the Milky Way (galaxies of K~11 are invisible to the eye), full out in intergalactic space
    const dSunPc = Math.hypot(cam[0], cam[1], cam[2]) / KM_PER_MPC * 1e6;
    this.mat.uniforms.uDim.value = 0.18 + 0.82 * THREE.MathUtils.smoothstep(dSunPc, 30000, 300000);
  }
  // info for the on-demand particle model
  modelInfo(i) {
    const T = this.attr[4 * i + 3];
    return { center: [this.pos[3 * i], this.pos[3 * i + 1], this.pos[3 * i + 2]], Rkm: this.sizeKm[2 * i + 1] / 2, ratio: Math.max(0.15, Math.min(1, this.attr[4 * i + 2])), kind: T >= 90 ? 'E' : T <= -4 ? 'E' : T <= 0 ? 'S0' : T <= 8 ? 'S' : 'I', ra: this.raDecDist[3 * i], dec: this.raDecDist[3 * i + 1], pa: this.pa[i] / DEG, name: this.name(i) };
  }
  worldPos(i, out) { out[0] = this.pos[3 * i]; out[1] = this.pos[3 * i + 1]; out[2] = this.pos[3 * i + 2]; return out; }
  pick(ray, camPos, pxPerRad) {
    if (!this.visible) return null;
    let best = -1, bestSep = 10;
    for (let i = 0; i < this.count; i++) {
      if (this.dup[i] >= 0) continue;
      const x = this.pos[3 * i] - camPos[0], y = this.pos[3 * i + 1] - camPos[1], z = this.pos[3 * i + 2] - camPos[2];
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.9995) continue;
      const sep = Math.acos(Math.min(1, dot)) * pxPerRad - Math.min(30, this.sizeKm[2 * i + 1] * 0.4 / d * pxPerRad);
      if (sep < bestSep) { bestSep = sep; best = i; }
    }
    return best < 0 ? null : { sepPx: bestSep + 2, desc: this.describe(best) };
  }
  name(i) { return '2MASX J' + this.ids.slice(16 * i, 16 * i + 16).trim(); }
  describe(i) {
    const self = this;
    const ra = this.raDecDist[3 * i], dec = this.raDecDist[3 * i + 1], dMpc = this.raDecDist[3 * i + 2];
    const k = this.attr[4 * i], riso = this.attr[4 * i + 1], ba = this.attr[4 * i + 2], T = this.attr[4 * i + 3];
    const morph = T >= 90 ? 'unclassified' : T <= -6 ? 'compact elliptical' : T <= -4 ? 'elliptical (E)' : T <= -1 ? 'lenticular (S0)' : T <= 0 ? 'S0/a' : T <= 2 ? 'early spiral (Sa–Sab)' : T <= 4 ? 'spiral (Sb–Sbc)' : T <= 6 ? 'late spiral (Sc–Scd)' : T <= 8 ? 'Sd–Sdm' : 'irregular / Magellanic';
    const cz = dMpc * 70, dly = dMpc * 3.26156;
    const rows = [
      ['Catalog', '2MASS Redshift Survey (Huchra et al. 2012)'], ['Morphology', `${morph} (T = ${T >= 90 ? '?' : T})`],
      ['Distance', `${fmtNum(dly, 3)} million ly (${fmtNum(dMpc, 3)} Mpc), from recession velocity ${fmtNum(cz, 4)} km/s with H₀ = 70`],
      ['Redshift z', fmtNum(cz / 299792.458, 5)], ['K-band magnitude', fmtNum(k, 2)], ['Isophotal radius', `${fmtNum(riso, 3)}′`], ['Axis ratio b/a', fmtNum(ba, 2)],
      ['Light travel time', `${fmtNum(dly, 3)} million years`], ['RA / Dec (J2000)', `${fmtRA(ra)} / ${fmtDec(dec)}`], ['Orientation', 'axis ratio measured; position angle not published, drawn at a random angle'],
    ];
    return { kind: 'galaxy', kindLabel: 'Galaxy (2MRS)', name: this.name(i), sub: `${morph} galaxy · ${fmtNum(dly, 3)} Mly`, radius: this.sizeKm[2 * i + 1] / 2, rows,
      desc: `A ${morph} galaxy from the 2MASS Redshift Survey, an all-sky map of 44,599 galaxies with measured recession velocities that traces the large-scale structure of the local universe. Its shape here follows the catalogued type and axis ratio; up close it is drawn as a particle model.`,
      source: '2MRS (Huchra+ 2012) via VizieR J/ApJS/199/26. Distance is a Hubble-flow estimate and ignores peculiar velocities.', ref: { layer: 'galaxies', index: i }, getPos: (jd, out) => self.worldPos(i, out), faceFrom: [0, 0, 0] };
  }
  searchEntries() { return []; }
}
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
