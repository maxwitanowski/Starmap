import * as THREE from 'three';
import { KM_PER_MPC, KM_PER_LY, DEG, fmtNum } from '../astro/units.js';
import { fmtRA, fmtDec } from './Stars.js';
import { HorizonModel } from './BlackHoles.js';

// Every quasar / active galactic nucleus with a redshift in the Million Quasars catalogue (Milliquas v8, Flesch 2023):
// each is a supermassive black hole caught feeding. Placed at its comoving distance in a flat ΛCDM universe
// (H0 = 70 km/s/Mpc, Ωm = 0.3), so the layer is a to-scale map of the observable universe out to z ≈ 7.
const TYPE_LABEL = ['quasar (type-I, broad-line)', 'AGN (type-I Seyfert, host-dominated)', 'BL Lac object (blazar)', 'narrow-line quasar (type II)', 'narrow-line AGN (type-II Seyfert)'];
const C_H0_MPC = 299792.458 / 70, T_H0_GYR = 977.8 / 70; // c/H0 and 1/H0
// human names for the most common redshift sources (Milliquas "rz" citations); the rest are shown as their Milliquas code
const SOURCE_NAMES = { DR16Q: 'SDSS DR16 quasar catalogue (Lyke+ 2020), spectroscopic', DR16: 'SDSS DR16 spectroscopy', DR17: 'SDSS DR17 spectroscopy', DR18Q: 'SDSS DR18 quasar catalogue', DR14Q: 'SDSS DR14 quasar catalogue', DR16QN: 'SDSS DR16 quasar catalogue (new)', DESEDR: 'DESI Early Data Release spectroscopy', DESVI: 'DESI visual-inspection catalogue', '2QZ': '2dF QSO Redshift Survey', '2SLAQ': '2dF-SDSS LRG and QSO survey', LOZAGN: 'low-redshift AGN compilation (spectroscopic)', LAMQ1: 'LAMOST quasar survey DR1', LAMQ3: 'LAMOST quasar survey DR2-3', LAMQ5: 'LAMOST quasar survey DR4-5', LAMQ9: 'LAMOST quasar survey DR6-9', '2MAGN': '2MASS-selected AGN spectroscopy', '6dAGN': '6dF Galaxy Survey AGN', AAOz: 'AAOmega spectroscopy', OzDES2: 'OzDES survey', AGES: 'AGN and Galaxy Evolution Survey', HETDEX: 'HETDEX survey', RLAGN: 'radio-loud AGN spectroscopy', DPeake: 'Peake+ AGN spectroscopy' };
const QUASAR_RS = 2.95e9; // no individual masses in Milliquas: draw a nominal 10^9 solar-mass horizon (Schwarzschild radius 2.95e9 km)

const VERT = /* glsl */`
  attribute float qmag; attribute float qtype;
  uniform vec3 uCam; uniform float uPixelRatio; uniform float uDim; uniform float uFovScale; uniform vec3 uHide;
  varying vec3 vColor; varying float vAlpha;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vec3 rel = position - uCam;
    float d = length(rel * 1e-12) * 1e12;
    // colour by class: quasars blue-white, Seyferts warm white, blazars violet, narrow-line objects orange
    vec3 c = qtype < 0.5 ? vec3(0.75, 0.85, 1.0) : qtype < 1.5 ? vec3(1.0, 0.95, 0.85) : qtype < 2.5 ? vec3(0.8, 0.6, 1.0) : vec3(1.0, 0.75, 0.5);
    float bright = qmag <= 0.0 ? 0.5 : clamp((21.0 - qmag) / 6.0, 0.3, 1.4);
    float s = (1.6 + 1.2 * bright) * uPixelRatio;
    // grow into a soft disc when the camera comes within a few million light-years
    float px = 3e19 / d * uFovScale; s = max(s, min(px, 40.0));
    vColor = c * bright; vAlpha = uDim;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(rel, 1.0);
    if (all(equal(position, uHide))) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // the focused quasar is drawn exactly by the close-range model
    gl_PointSize = s;
    #include <logdepthbuf_vertex>
  }`;
const FRAG = /* glsl */`
  varying vec3 vColor; varying float vAlpha;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0;
    float a = exp(-r2 * 4.0) * vAlpha;
    gl_FragColor = vec4(vColor * a, a);
  }`;

export class QuasarLayer {
  constructor(universe, data, namesText, sourcesText = '') {
    this.u = universe; this.visible = true;
    this.ra = data.ra; this.dec = data.dec; this.z = data.z; this.magRaw = data.mag; this.type = data.type; this.src = data.src; this.sources = sourcesText.split('\n');
    const n = this.count = this.z.length;
    // comoving distance and light-travel time tables
    const NZ = 4000, ZMAX = 8; this.dcTab = new Float64Array(NZ + 1); this.ltTab = new Float64Array(NZ + 1);
    for (let i = 1; i <= NZ; i++) { const z = (i - 0.5) * ZMAX / NZ, E = Math.sqrt(0.3 * Math.pow(1 + z, 3) + 0.7); this.dcTab[i] = this.dcTab[i - 1] + (ZMAX / NZ) / E; this.ltTab[i] = this.ltTab[i - 1] + (ZMAX / NZ) / ((1 + z) * E); }
    this.pos = new Float64Array(n * 3); const pos32 = new Float32Array(n * 3); const mag = new Float32Array(n), type = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const dMpc = this.comovingMpc(this.z[i]), dkm = dMpc * KM_PER_MPC;
      const ra = this.ra[i] * DEG, dec = this.dec[i] * DEG, cd = Math.cos(dec);
      const x = cd * Math.cos(ra) * dkm, y = cd * Math.sin(ra) * dkm, zz = Math.sin(dec) * dkm;
      this.pos[3 * i] = x; this.pos[3 * i + 1] = y; this.pos[3 * i + 2] = zz; pos32[3 * i] = x; pos32[3 * i + 1] = y; pos32[3 * i + 2] = zz;
      mag[i] = this.magRaw[i] ? this.magRaw[i] / 10 : 0; type[i] = this.type[i];
    }
    // literature names (the rest are coordinate designations, generated on demand)
    this.names = new Map();
    for (const line of namesText.split('\n')) { const t = line.indexOf('\t'); if (t > 0) this.names.set(+line.slice(0, t), line.slice(t + 1)); }
    this.named = [...this.names.keys()].filter(i => mag[i] > 0 && mag[i] < 17.5).sort((a, b) => mag[a] - mag[b]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos32, 3));
    geo.setAttribute('qmag', new THREE.BufferAttribute(mag, 1));
    geo.setAttribute('qtype', new THREE.BufferAttribute(type, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
      uniforms: { uCam: { value: new THREE.Vector3() }, uPixelRatio: { value: 1 }, uDim: { value: 1 }, uFovScale: { value: 1000 }, uHide: { value: new THREE.Vector3(NaN, NaN, NaN) } } });
    this.pos32 = pos32;
    // Float32 positions are ~1e15 km off at 2 Gly, so the focused quasar is drawn by an exact close-range model instead
    this.model = new HorizonModel(universe.scene); this.modelIndex = -1;
    this.points = new THREE.Points(geo, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 1;
    universe.scene.add(this.points);
    this.rel = new Float32Array(3);
  }
  comovingMpc(z) { const NZ = 4000, ZMAX = 8; const f = Math.min(NZ, z / ZMAX * NZ), i = Math.floor(f), t = f - i; return C_H0_MPC * (this.dcTab[i] * (1 - t) + this.dcTab[Math.min(NZ, i + 1)] * t); }
  lookbackGyr(z) { const NZ = 4000, ZMAX = 8; const f = Math.min(NZ, z / ZMAX * NZ), i = Math.floor(f), t = f - i; return T_H0_GYR * (this.ltTab[i] * (1 - t) + this.ltTab[Math.min(NZ, i + 1)] * t); }
  update(ctx) {
    this.points.visible = this.visible;
    if (!this.visible) return;
    const u = this.mat.uniforms; const cam = ctx.camPos;
    u.uCam.value.set(cam[0], cam[1], cam[2]); u.uPixelRatio.value = ctx.pixelRatio; u.uFovScale.value = ctx.pxPerRad;
    // faint from inside the Milky Way (they are 15th-20th magnitude points there), full strength once out among the galaxies
    const dSunMpc = Math.hypot(cam[0], cam[1], cam[2]) / KM_PER_MPC;
    u.uDim.value = 0.22 + 0.78 * THREE.MathUtils.smoothstep(dSunMpc, 1, 60);
    // exact rendering of the focused / selected quasar (Float64 on the CPU), as a black hole with an accretion disc
    this.model.hide(); u.uHide.value.set(NaN, NaN, NaN);
    const rig = ctx.rig; const ref = rig.focus?.ref?.layer === 'quasars' ? rig.focus.ref : this.u.selection?.ref?.layer === 'quasars' ? this.u.selection.ref : null;
    if (ref) {
      const i = ref.index; const x = this.pos[3 * i] - cam[0], y = this.pos[3 * i + 1] - cam[1], z = this.pos[3 * i + 2] - cam[2];
      const d = Math.sqrt(x * x + y * y + z * z); const rs = QUASAR_RS;
      if (rs * 12 / d * ctx.pxPerRad > 1.5) { this.model.show(x, y, z, rs, i); u.uHide.value.set(this.pos32[3 * i], this.pos32[3 * i + 1], this.pos32[3 * i + 2]); }
    }
  }
  worldPos(i, out) { out[0] = this.pos[3 * i]; out[1] = this.pos[3 * i + 1]; out[2] = this.pos[3 * i + 2]; return out; }
  name(i) { const n = this.names.get(i); if (n) return n; const ra = this.ra[i] / 15, dec = this.dec[i]; const h = Math.floor(ra), m = Math.floor((ra - h) * 60), s = ((ra - h) * 60 - m) * 60; const ad = Math.abs(dec), dd = Math.floor(ad), dm = Math.floor((ad - dd) * 60), ds = ((ad - dd) * 60 - dm) * 60; return `MQ J${String(h).padStart(2, '0')}${String(m).padStart(2, '0')}${s.toFixed(1).padStart(4, '0')}${dec < 0 ? '-' : '+'}${String(dd).padStart(2, '0')}${String(dm).padStart(2, '0')}${ds.toFixed(0).padStart(2, '0')}`; }
  pick(ray, camPos, pxPerRad) {
    if (!this.visible) return null;
    const cx = camPos[0], cy = camPos[1], cz = camPos[2];
    let best = -1, bestSep = 8; const P = this.pos;
    for (let i = 0; i < this.count; i++) {
      const x = P[3 * i] - cx, y = P[3 * i + 1] - cy, z = P[3 * i + 2] - cz;
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.99995) continue;
      const sep = Math.acos(Math.min(1, dot)) * pxPerRad;
      if (sep < bestSep) { bestSep = sep; best = i; }
    }
    return best < 0 ? null : { sepPx: bestSep + 1, desc: this.describe(best) };
  }
  describe(i) {
    const self = this, z = this.z[i], dMpc = this.comovingMpc(z), dGly = dMpc * 3.26156 / 1000, lt = this.lookbackGyr(z);
    const t = this.type[i], mag = this.magRaw[i] ? this.magRaw[i] / 10 : null; const name = this.name(i);
    const rows = [['Class', TYPE_LABEL[t] || 'active galactic nucleus'], ['Redshift z', fmtNum(z, 4)], ['Comoving distance', `${fmtNum(dGly, 3)} billion ly (${fmtNum(dMpc, 4)} Mpc)`],
      ['Light travel time', `${fmtNum(lt, 3)} billion years — seen as it was ${fmtNum(lt, 3)} Gyr ago`], ['Red magnitude', mag ? fmtNum(mag, 2) : 'not measured'], ['RA / Dec (J2000)', `${fmtRA(this.ra[i])} / ${fmtDec(this.dec[i])}`],
      ['Redshift source', (() => { const code = this.src ? this.sources[this.src[i]] : ''; return SOURCE_NAMES[code] || (code ? `${code} (literature reference indexed in Milliquas), spectroscopic` : 'spectroscopic (Milliquas)'); })()],
      ['Position', 'catalogued sky position (0.1″ level) and spectroscopic redshift; distance = comoving distance in the cosmology below. Zoomed out, the wedge shapes are the footprints of the surveys that took spectra (SDSS covers the north galactic cap; DESI, 2QZ and LAMOST add strips), not structure in the universe; the Milky Way dust lane hides the galactic plane'],
      ['Cosmology', 'flat ΛCDM, H₀ = 70 km/s/Mpc, Ωm = 0.3 (comoving position)'], ['Black hole', 'mass not in this catalogue — up close it is drawn with a nominal 1-billion-solar-mass horizon (radius 3 billion km) and accretion disc']];
    return { kind: 'quasar', kindLabel: 'Quasar / active galactic nucleus', name, sub: `${TYPE_LABEL[t] ? TYPE_LABEL[t].split(' (')[0] : 'AGN'} · z = ${fmtNum(z, 3)} · ${fmtNum(dGly, 2)} Gly`, radius: QUASAR_RS * 12, rows,
      desc: `${name} is a ${TYPE_LABEL[t] || 'active galaxy'}: a supermassive black hole at the centre of a galaxy, feeding fast enough to outshine its host. Its light has travelled ${fmtNum(lt, 3)} billion years to reach us. Drawn as a point: at this distance only its accretion-disc glow is visible.`,
      source: 'Million Quasars catalogue v8 (Flesch 2023, OJAp 6, 49) via CDS VII/294 — only objects with spectroscopic redshifts are placed; photometric estimates are excluded.', wiki: this.names.has(i) ? [name] : [], ref: { layer: 'quasars', index: i }, getPos: (jd, out) => self.worldPos(i, out), faceFrom: [0, 0, 0] };
  }
  labels(ctx, out, maxCount) {
    if (!this.visible || ctx.labelDensity <= 0) return;
    const cam = ctx.camPos, f = ctx.forward; const lim = Math.round(20 + 200 * ctx.labelDensity);
    let n = 0;
    for (const i of this.named) {
      const x = this.pos[3 * i] - cam[0], y = this.pos[3 * i + 1] - cam[1], z = this.pos[3 * i + 2] - cam[2];
      const d = Math.sqrt(x * x + y * y + z * z); if ((x * f.x + y * f.y + z * f.z) / d < ctx.cosHalfFov) continue;
      out.push({ text: this.names.get(i), x, y, z, cls: 'quasar', prio: 6, ref: { layer: 'quasars', index: i } });
      if (++n >= lim) break;
    }
  }
  searchEntries() { return this.named.slice(0, 20000).map(i => ({ name: this.names.get(i), kind: 'quasar', ref: { layer: 'quasars', index: i } })); }
  nearestSurface() { return Infinity; }
  byName(name) { const q = name.toLowerCase(); for (const [i, n] of this.names) if (n.toLowerCase() === q) return i; return -1; }
}
