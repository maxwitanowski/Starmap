import * as THREE from 'three';
import { KM_PER_PC, DEG } from '../astro/units.js';

// A structural model of the Milky Way (exponential disk, bar/bulge, four log-spiral arms, dust lane),
// oriented with the real galactic coordinate system (IAU 1958): NGP at RA 192.86°, Dec +27.13°; centre at RA 266.4°, Dec −28.9°.
// The Sun sits 8,178 pc from the centre (GRAVITY collaboration 2019), ~21 pc above the plane.
const SUN_R = 8178, SUN_Z = 20.8;

function galacticMatrix() {
  const ngp = dir(192.85948, 27.12825), gc = dir(266.40499, -28.93617);
  const z = new THREE.Vector3(...ngp);
  const x = new THREE.Vector3(...gc); // toward galactic centre (l=0)
  x.sub(z.clone().multiplyScalar(x.dot(z))).normalize();
  const y = new THREE.Vector3().crossVectors(z, x).normalize();
  return new THREE.Matrix4().makeBasis(x, y, z); // maps galactic (x,y,z) -> equatorial
}
function dir(ra, dec) { const r = ra * DEG, d = dec * DEG; return [Math.cos(d) * Math.cos(r), Math.cos(d) * Math.sin(r), Math.sin(d)]; }
export const GAL_MATRIX = galacticMatrix();

const VERT = /* glsl */`
  attribute vec3 color; attribute float size; attribute float kind;
  uniform vec3 uCam; uniform float uPixelRatio; uniform float uFovScale; uniform float uKmPerPc; uniform float uOpacity; uniform float uGlobal;
  varying vec3 vColor; varying float vAlpha; varying float vKind;
  #include <common>
#include <logdepthbuf_pars_vertex>
  void main() {
    vec3 relPc = position - uCam;
    float d = length(relPc);
    float px = size / d * uFovScale;
    // model particles fade out near the camera: the real star catalogue takes over there
    float fade = smoothstep(250.0, 1800.0, d) * (1.0 - smoothstep(22.0, 70.0, px));
    vAlpha = fade * uOpacity * uGlobal * clamp(px / 3.0, 0.15, 1.0);
    vColor = color; vKind = kind;
    vec4 mv = modelViewMatrix * vec4(relPc * uKmPerPc, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(px, 1.0, 110.0) * uPixelRatio;
    if (vAlpha < 0.002) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    #include <logdepthbuf_vertex>
  }`;
const FRAG = /* glsl */`
  varying vec3 vColor; varying float vAlpha; varying float vKind;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0;
    float a = exp(-r2 * 2.6) * vAlpha;
    if (vKind > 0.5) { gl_FragColor = vec4(vColor * 0.0, a * 0.9); } // dust: darkens (normal blending pass)
    else gl_FragColor = vec4(vColor * a, a);
  }`;

export class MilkyWayLayer {
  constructor(universe) {
    this.u = universe; this.visible = true;
    const rnd = mulberry(1234);
    const gauss = () => { let u = 0, v = 0; while (u === 0) u = rnd(); while (v === 0) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
    const stars = [], dust = [];
    const push = (arr, x, y, z, col, size) => arr.push(x, y, z, col[0], col[1], col[2], size);
    const yellow = [1.0, 0.92, 0.78], blue = [0.72, 0.8, 1.0], pink = [1.0, 0.55, 0.65], orange = [1.0, 0.8, 0.55], white = [0.95, 0.95, 1.0];
    // Thin disk
    for (let i = 0; i < 26000; i++) {
      const r = -2600 * Math.log(rnd()) * (0.6 + 0.4 * rnd()); if (r > 16000 || r < 300) continue;
      const th = rnd() * 2 * Math.PI; const z = 300 * atanhRand(rnd()) * 0.7;
      push(stars, r * Math.cos(th), r * Math.sin(th), z, lerp(yellow, white, rnd() * 0.5), 220 + rnd() * 260);
    }
    // Thick disk (faint)
    for (let i = 0; i < 6000; i++) {
      const r = -3600 * Math.log(rnd()); if (r > 18000) continue;
      const th = rnd() * 2 * Math.PI; const z = 900 * atanhRand(rnd());
      push(stars, r * Math.cos(th), r * Math.sin(th), z, orange, 400 + rnd() * 400);
    }
    // Bar + bulge (bar angle ~27° from Sun–centre line)
    const barAng = 27 * DEG;
    for (let i = 0; i < 9000; i++) {
      const bx = gauss() * 1900, by = gauss() * 650, bz = gauss() * 500;
      const x = bx * Math.cos(barAng) - by * Math.sin(barAng), y = bx * Math.sin(barAng) + by * Math.cos(barAng);
      push(stars, x, y, bz, lerp(orange, yellow, rnd()), 150 + rnd() * 250);
    }
    for (let i = 0; i < 4000; i++) { const r = Math.abs(gauss()) * 900; const th = rnd() * 2 * Math.PI, ph = Math.acos(2 * rnd() - 1); push(stars, r * Math.sin(ph) * Math.cos(th), r * Math.sin(ph) * Math.sin(th), r * Math.cos(ph) * 0.7, orange, 140 + rnd() * 200); }
    // Four spiral arms: Scutum–Centaurus & Perseus (major), Norma/Outer & Sagittarius–Carina (minor). Pitch ≈ 12.5°.
    const pitch = Math.tan(12.5 * DEG);
    const arms = [{ th0: 0.0 + barAng, major: true }, { th0: Math.PI + barAng, major: true }, { th0: Math.PI / 2 + barAng, major: false }, { th0: 1.5 * Math.PI + barAng, major: false }];
    for (const arm of arms) {
      const count = arm.major ? 9000 : 5500;
      for (let i = 0; i < count; i++) {
        const t = rnd() * 2.1; // winding parameter
        const r = 3300 * Math.exp(pitch * t * 2.2); if (r > 15500) continue;
        const th = arm.th0 + t * 2.2 + 0.0;
        const spread = 330 * (0.6 + r / 15000);
        const x = r * Math.cos(th) + gauss() * spread, y = r * Math.sin(th) + gauss() * spread, z = gauss() * 140;
        const k = rnd();
        const col = k < 0.12 ? pink : k < 0.7 ? blue : white;
        push(stars, x, y, z, col, k < 0.12 ? 260 + rnd() * 320 : 170 + rnd() * 240);
        if (rnd() < 0.45) { push(dust, r * Math.cos(th) + gauss() * spread * 0.8, r * Math.sin(th) + gauss() * spread * 0.8, gauss() * 70, [0, 0, 0], 300 + rnd() * 500); }
      }
    }
    // Local (Orion) spur near the Sun
    for (let i = 0; i < 1400; i++) { const t = (rnd() - 0.5) * 3000; const x = -SUN_R + t * Math.cos(0.9) + gauss() * 250, y = t * Math.sin(0.9) + gauss() * 250; push(stars, x, y, gauss() * 120, blue, 150 + rnd() * 200); }
    // Dust in the disk midplane (general)
    for (let i = 0; i < 9000; i++) { const r = -3000 * Math.log(rnd()); if (r > 14000 || r < 1500) continue; const th = rnd() * 2 * Math.PI; push(dust, r * Math.cos(th), r * Math.sin(th), gauss() * 90, [0, 0, 0], 350 + rnd() * 550); }

    this.starPoints = this._build(stars, 0);
    this.dustPoints = this._build(dust, 1);
    this.dustPoints.material.blending = THREE.NormalBlending; this.dustPoints.renderOrder = 0; this.starPoints.renderOrder = 0;
    this.dustPoints.material.uniforms.uOpacity.value = 0.14;
    this.centerKm = new Float64Array(3);
    const c = new THREE.Vector3(SUN_R, 0, -SUN_Z).applyMatrix4(GAL_MATRIX).multiplyScalar(KM_PER_PC);
    this.centerKm.set([c.x, c.y, c.z]);
  }
  _build(arr, kind) {
    const n = arr.length / 7;
    const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), size = new Float32Array(n), kinds = new Float32Array(n).fill(kind);
    const v = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      // galactocentric -> heliocentric galactic -> equatorial (pc)
      v.set(arr[7 * i] + SUN_R, arr[7 * i + 1], arr[7 * i + 2] - SUN_Z).applyMatrix4(GAL_MATRIX);
      pos[3 * i] = v.x; pos[3 * i + 1] = v.y; pos[3 * i + 2] = v.z;
      col[3 * i] = arr[7 * i + 3]; col[3 * i + 1] = arr[7 * i + 4]; col[3 * i + 2] = arr[7 * i + 5];
      size[i] = arr[7 * i + 6];
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(size, 1)); geo.setAttribute('kind', new THREE.BufferAttribute(kinds, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
      uniforms: { uCam: { value: new THREE.Vector3() }, uPixelRatio: { value: 1 }, uFovScale: { value: 1000 }, uKmPerPc: { value: KM_PER_PC }, uOpacity: { value: 0.32 }, uGlobal: { value: 1 } } });
    const p = new THREE.Points(geo, mat); p.frustumCulled = false;
    this.u.scene.add(p);
    return p;
  }
  update(ctx) {
    for (const p of [this.starPoints, this.dustPoints]) {
      p.visible = this.visible;
      p.material.uniforms.uCam.value.set(ctx.camPos[0] / KM_PER_PC, ctx.camPos[1] / KM_PER_PC, ctx.camPos[2] / KM_PER_PC);
      p.material.uniforms.uPixelRatio.value = ctx.pixelRatio; p.material.uniforms.uFovScale.value = ctx.pxPerRad;
      // the model is only meaningful from outside: invisible within ~2 kpc of the Sun, full beyond ~12 kpc
      const dSunPc = Math.hypot(ctx.camPos[0], ctx.camPos[1], ctx.camPos[2]) / KM_PER_PC;
      p.material.uniforms.uGlobal.value = THREE.MathUtils.smoothstep(dSunPc, 2000, 12000);
    }
  }
  labels(ctx, out) {
    if (!this.visible) return;
    const d = ctx.rig.distanceTo(this.centerKm);
    if (d > 25000 * KM_PER_PC) out.push({ text: 'Milky Way', x: this.centerKm[0] - ctx.camPos[0], y: this.centerKm[1] - ctx.camPos[1], z: this.centerKm[2] - ctx.camPos[2], cls: 'galaxy', prio: 90 });
  }
  pick() { return null; }
  searchEntries() { return []; }
}
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function atanhRand(u) { return Math.atanh(2 * u - 1) * 0.9; } // sech² vertical profile
function lerp(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
