import * as THREE from 'three';
import { KM_PER_PC, KM_PER_LY, DEG, fmtNum, fmtDist } from '../astro/units.js';
import { CON_NAMES, fmtRA, fmtDec } from './Stars.js';

export const DSO_TYPES = { G: 'Galaxy', GPair: 'Galaxy pair', GTrpl: 'Galaxy triplet', GGroup: 'Galaxy group / cluster', OCl: 'Open cluster', GCl: 'Globular cluster', PN: 'Planetary nebula', HII: 'HII region (emission nebula)', EmN: 'Emission nebula', Neb: 'Nebula', RfN: 'Reflection nebula', SNR: 'Supernova remnant', DrkN: 'Dark nebula', 'Cl+N': 'Cluster with nebulosity', '*Ass': 'Stellar association', BH: 'Supermassive black hole', QSO: 'Quasar', Other: 'Region', '*': 'Star' };
const DQ = { c: 'literature value', g: 'Gaia parallax (cluster catalogue)', p: 'parallax', z: 'redshift (Hubble law, H₀ = 70 km/s/Mpc)', e: 'rough estimate from apparent magnitude — treat with caution', u: 'unknown — placed at a nominal distance for its type' };
const TYPE_COLOR = { G: '#e8dcc8', GPair: '#e8dcc8', GTrpl: '#e8dcc8', GGroup: '#b0a0ff', OCl: '#cfe0ff', GCl: '#ffe6b8', PN: '#8affd8', HII: '#ff8aa8', EmN: '#ff8aa8', Neb: '#ffa8c0', RfN: '#8ab0ff', SNR: '#ffb890', DrkN: '#5a3a30', 'Cl+N': '#ffb0c8', '*Ass': '#c0d0ff', BH: '#ffffff', QSO: '#c8f0ff', Other: '#8899aa', '*': '#fff' };

export const CELL = 128, GRID = 32; // 4096 atlas
export const PROC = { ellip: 0, spiral: 1, irr: 2, emn: 3, refl: 4, pn: 5, snr: 6, ocl: 7, gcl: 8, dark: 9, point: 10, ring: 11, bar: 12 };

const VERT = /* glsl */`
  attribute vec3 iPos; attribute vec4 iQuat; attribute vec2 iSize; attribute vec4 iUV; attribute vec3 iColor; attribute float iAlpha; attribute float iImg; attribute float iFade;
  uniform float uFovScale; uniform float uMinPx;
  varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vImg; varying float vDot;
  #include <common>
#include <logdepthbuf_pars_vertex>
  vec3 rot(vec4 q, vec3 v) { return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
  void main() {
    float d = length(iPos * 1e-10) * 1e10; // rescaled: km^2 overflows float32 beyond ~1e19 km
    float pxH = iSize.y / d * uFovScale;
    float scale = 1.0; float alpha = iAlpha;
    if (pxH < uMinPx) { scale = uMinPx / pxH; alpha *= max(0.5, pow(pxH / uMinPx, 0.3)); }
    if (iImg < 0.5 && iFade > 0.5) alpha *= 1.0 - smoothstep(250.0, 700.0, pxH); // a 3D stand-in takes over
    if (iImg < 0.5 && iFade < 0.5) alpha *= 1.0 - 0.6 * smoothstep(400.0, 1600.0, pxH); // nothing replaces it: just soften
    vec3 local = vec3(position.x * iSize.x * scale, position.y * iSize.y * scale, 0.0);
    vec3 world = iPos + rot(iQuat, local);
    vUv = vec2(mix(iUV.x, iUV.z, uv.x), mix(iUV.y, iUV.w, uv.y));
    vColor = iColor * (1.0 + 2.5 * (1.0 - smoothstep(2.0, 30.0, pxH))); vAlpha = alpha; vImg = iImg; vDot = 1.0 - smoothstep(4.0, 14.0, pxH);
    // fade when the camera is inside the object
    vAlpha *= smoothstep(0.3, 1.2, d / iSize.y);
    gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
    #include <logdepthbuf_vertex>
  }`;
const FRAG = /* glsl */`
  uniform sampler2D uAtlas; varying vec2 vUv; varying vec3 vColor; varying float vAlpha; varying float vImg; varying float vDot;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec4 t = texture2D(uAtlas, vUv);
    vec2 cell = fract(vUv * ${GRID}.0) - 0.5;
    float vign = smoothstep(0.5, mix(0.3, 0.4, vImg), length(cell));
    vec3 c = t.rgb * vColor * vign * vAlpha * (1.0 + 0.1 * vImg);
    float rr = length(cell) * 2.0;
    vec3 dotc = vColor * exp(-rr * rr * 5.0) * 1.4 * vAlpha; // sub-pixel galaxies read as bright points, not smeared texture
    c = mix(c, dotc, vDot);
    gl_FragColor = vec4(c, max(max(c.r, c.g), c.b));
  }`;

export class DeepSkyLayer {
  constructor(universe, dso) {
    this.u = universe; this.items = dso; this.visible = true;
    const n = dso.length;
    this.pos = new Float64Array(n * 3); this.sizeKm = new Float32Array(n * 2); this.quat = new Float32Array(n * 4);
    this.rel = new Float32Array(n * 3); this.uvs = new Float32Array(n * 4); this.colors = new Float32Array(n * 3); this.alphas = new Float32Array(n); this.imgFlag = new Float32Array(n); this.fadeFlag = new Float32Array(n);
    this.named = [];
    const q = new THREE.Quaternion(), m = new THREE.Matrix4(), X = new THREE.Vector3(), Y = new THREE.Vector3(), Z = new THREE.Vector3(), rq = new THREE.Quaternion();
    const col = new THREE.Color();
    for (let i = 0; i < n; i++) {
      const e = dso[i];
      const ra = e.ra * DEG, dec = e.dec * DEG, dkm = e.d * KM_PER_PC;
      const dx = Math.cos(dec) * Math.cos(ra), dy = Math.cos(dec) * Math.sin(ra), dz = Math.sin(dec);
      this.pos[3 * i] = dx * dkm; this.pos[3 * i + 1] = dy * dkm; this.pos[3 * i + 2] = dz * dkm;
      const maj = e.maj || defaultSize(e.t), min = e.min || maj * (e.t.startsWith('G') ? 0.7 : 1);
      if (e.img) {
        // DSS cutouts are square with fov = 1.5 x major axis (see scripts/build-data.mjs); the picture carries the true shape
        const fovDeg = Math.min(Math.max(maj * 1.5 / 60, 0.04), 6);
        this.sizeKm[2 * i] = this.sizeKm[2 * i + 1] = dkm * fovDeg * DEG;
      } else {
        this.sizeKm[2 * i + 1] = dkm * maj / 60 * DEG; // major along local Y
        this.sizeKm[2 * i] = dkm * min / 60 * DEG;
      }
      // tangent frame: Y = north, X = west, Z toward the Sun
      Y.set(-Math.sin(dec) * Math.cos(ra), -Math.sin(dec) * Math.sin(ra), Math.cos(dec));
      X.set(Math.sin(ra), -Math.cos(ra), 0); // west
      Z.crossVectors(X, Y);
      m.makeBasis(X, Y, Z); q.setFromRotationMatrix(m);
      if (!e.img && e.pa) { rq.setFromAxisAngle(Z, e.pa * DEG); q.premultiply(rq); }
      this.quat[4 * i] = q.x; this.quat[4 * i + 1] = q.y; this.quat[4 * i + 2] = q.z; this.quat[4 * i + 3] = q.w;
      // colour & default (procedural) cell
      col.set(e.img ? '#ffffff' : (TYPE_COLOR[e.t] || '#ccc'));
      this.colors[3 * i] = col.r; this.colors[3 * i + 1] = col.g; this.colors[3 * i + 2] = col.b;
      this.setCell(i, procCell(e));
      this.alphas[i] = e.img ? 1.0 : (e.t === 'DrkN' ? 0.04 : e.t === 'GGroup' ? 0.25 : e.t === '*Ass' ? 0.06 : e.t === 'OCl' ? 0.45 : e.t === 'GCl' ? 0.7 : 0.6);
      if (e.cn || e.m) this.named.push(i);
    }
    // atlas
    const size = CELL * GRID;
    this.canvas = document.createElement('canvas'); this.canvas.width = this.canvas.height = size;
    this.ctx2d = this.canvas.getContext('2d');
    drawProcedural(this.ctx2d);
    this.atlas = new THREE.CanvasTexture(this.canvas); this.atlas.colorSpace = THREE.SRGBColorSpace; this.atlas.generateMipmaps = true; this.atlas.minFilter = THREE.LinearMipmapLinearFilter;
    this.nextCell = 16;
    // instanced geometry
    const quad = new THREE.PlaneGeometry(1, 1);
    const geo = new THREE.InstancedBufferGeometry(); geo.index = quad.index; geo.attributes.position = quad.attributes.position; geo.attributes.uv = quad.attributes.uv;
    geo.instanceCount = n;
    geo.setAttribute('iPos', new THREE.InstancedBufferAttribute(this.rel, 3));
    geo.setAttribute('iQuat', new THREE.InstancedBufferAttribute(this.quat, 4));
    geo.setAttribute('iSize', new THREE.InstancedBufferAttribute(this.sizeKm, 2));
    geo.setAttribute('iUV', new THREE.InstancedBufferAttribute(this.uvs, 4));
    geo.setAttribute('iColor', new THREE.InstancedBufferAttribute(this.colors, 3));
    geo.setAttribute('iAlpha', new THREE.InstancedBufferAttribute(this.alphas, 1));
    geo.setAttribute('iImg', new THREE.InstancedBufferAttribute(this.imgFlag, 1));
    geo.setAttribute('iFade', new THREE.InstancedBufferAttribute(this.fadeFlag, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: { uAtlas: { value: this.atlas }, uFovScale: { value: 1000 }, uMinPx: { value: 3.0 } } });
    this.mesh = new THREE.Mesh(geo, this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = 2;
    universe.scene.add(this.mesh);
    this.byName = new Map();
    dso.forEach((e, i) => { this.byName.set(norm(e.n), i); if (e.m) this.byName.set(norm(e.m), i); });
    this._loadImages();
  }
  setCell(i, cell) {
    const cx = cell % GRID, cy = Math.floor(cell / GRID);
    // canvas y is top-down, texture v is bottom-up
    this.uvs[4 * i] = cx / GRID; this.uvs[4 * i + 1] = 1 - (cy + 1) / GRID; this.uvs[4 * i + 2] = (cx + 1) / GRID; this.uvs[4 * i + 3] = 1 - cy / GRID;
  }
  async _loadImages() {
    const withImg = this.items.map((e, i) => e.img ? i : -1).filter(i => i >= 0);
    // most famous first
    withImg.sort((a, b) => (this.items[a].m ? 0 : 1) - (this.items[b].m ? 0 : 1) || (this.items[a].mag ?? 15) - (this.items[b].mag ?? 15));
    let pending = 0, dirty = false;
    const flush = () => { if (dirty) { this.atlas.needsUpdate = true; this.mesh.geometry.attributes.iUV.needsUpdate = true; this.mesh.geometry.attributes.iColor.needsUpdate = true; this.mesh.geometry.attributes.iImg.needsUpdate = true; dirty = false; } };
    const timer = setInterval(flush, 400);
    const loadOne = i => new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        if (this.nextCell < GRID * GRID) {
          const cell = this.nextCell++;
          const cx = (cell % GRID) * CELL, cy = Math.floor(cell / GRID) * CELL;
          this.ctx2d.drawImage(img, cx, cy, CELL, CELL);
          this.setCell(i, cell);
          // cutouts saturated across most of the frame (objects embedded in a brighter nebula) get dimmed so they don't read as flat discs
          const px = this.ctx2d.getImageData(cx, cy, CELL, CELL).data; let sum = 0;
          for (let k = 0; k < px.length; k += 16) sum += (px[k] + px[k + 1] + px[k + 2]) / 765;
          const mean = sum / (px.length / 16);
          const tint = mean > 0.35 ? Math.max(0.3, 0.35 / mean) : 1.0;
          this.colors[3 * i] = this.colors[3 * i + 1] = this.colors[3 * i + 2] = tint;
          this.imgFlag[i] = 1;
          dirty = true;
          this.volumes?.addFromImage(i, img);
        }
        resolve();
      };
      img.onerror = () => resolve();
      img.src = `/dso/${this.items[i].img}.jpg`;
    });
    const queue = [...withImg];
    const worker = async () => { while (queue.length) await loadOne(queue.shift()); };
    await Promise.all([worker(), worker(), worker(), worker()]);
    flush(); clearInterval(timer);
  }
  update(ctx) {
    this.mesh.visible = this.visible;
    if (!this.visible) return;
    const cam = ctx.camPos; const n = this.items.length; const rel = this.rel, pos = this.pos;
    for (let i = 0; i < n; i++) { rel[3 * i] = pos[3 * i] - cam[0]; rel[3 * i + 1] = pos[3 * i + 1] - cam[1]; rel[3 * i + 2] = pos[3 * i + 2] - cam[2]; }
    this.mesh.geometry.attributes.iPos.needsUpdate = true;
    this.mat.uniforms.uFovScale.value = ctx.pxPerRad;
  }
  worldPos(i, out) { out[0] = this.pos[3 * i]; out[1] = this.pos[3 * i + 1]; out[2] = this.pos[3 * i + 2]; return out; }
  pick(ray, camPos, pxPerRad) {
    if (!this.visible) return null;
    let best = -1, bestSep = 14;
    for (let i = 0; i < this.items.length; i++) {
      const x = this.pos[3 * i] - camPos[0], y = this.pos[3 * i + 1] - camPos[1], z = this.pos[3 * i + 2] - camPos[2];
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.98) continue;
      const sep = Math.acos(Math.min(1, dot)) * pxPerRad;
      const rpx = Math.min(this.sizeKm[2 * i + 1] * (this.items[i].img ? 0.33 : 0.5) / d * pxPerRad, 200);
      const s = Math.max(0, sep - rpx * 0.7);
      if (s < bestSep) { bestSep = s; best = i; }
    }
    return best < 0 ? null : { sepPx: bestSep, desc: this.describe(best) };
  }
  displayName(e) { return e.cn ? e.cn.split(',')[0].trim() : (e.m ? `${e.m} (${e.n})` : e.n); }
  describe(i) {
    const self = this, e = this.items[i];
    const names = [e.m, e.n, ...(e.cn ? e.cn.split(',').map(s => s.trim()) : [])].filter(Boolean).filter((s, k, a) => a.indexOf(s) === k);
    const dly = e.d * 3.26156;
    const physKm = this.sizeKm[2 * i + 1];
    const rows = [['Type', DSO_TYPES[e.t] || e.t], ['Designations', names.join(', ')]];
    if (e.ids) rows.push(['Other identifiers', e.ids.split(',').slice(0, 6).join(', ')]);
    if (e.con) rows.push(['Constellation', CON_NAMES[e.con] || e.con]);
    rows.push(['Distance', `${dly >= 1e6 ? fmtNum(dly / 1e6, 3) + ' million ly' : dly >= 1e4 ? fmtNum(dly / 1e3, 3) + ' thousand ly' : fmtNum(dly, 3) + ' ly'} (${e.d >= 1e6 ? fmtNum(e.d / 1e6, 3) + ' Mpc' : e.d >= 1e3 ? fmtNum(e.d / 1e3, 3) + ' kpc' : fmtNum(e.d, 3) + ' pc'})`]);
    rows.push(['Distance source', DQ[e.dq] || e.dq]);
    if (e.maj) rows.push(['Apparent size', `${fmtNum(e.maj, 3)}′${e.min ? ' × ' + fmtNum(e.min, 3) + '′' : ''}${e.pa ? ', PA ' + e.pa + '°' : ''}`]);
    rows.push(['Physical size (major axis)', physKm > KM_PER_LY * 0.05 ? `${fmtNum(physKm / KM_PER_LY, 3)} ly` : fmtDist(physKm)]);
    if (e.mag != null) rows.push(['Apparent magnitude', fmtNum(e.mag, 2)]);
    if (e.hub) rows.push(['Morphology', e.hub]);
    if (e.z != null) rows.push(['Redshift z', fmtNum(e.z, 5)]);
    if (e.rv != null) rows.push(['Radial velocity', `${fmtNum(e.rv, 4)} km/s`]);
    if (e.age) rows.push(['Age (Gaia estimate)', `${fmtNum(Math.pow(10, e.age) / 1e6, 3)} million years`]);
    if (e.nstars) rows.push(['Member stars (Gaia)', String(e.nstars)]);
    if (e.rper) rows.push(['Galactic orbit (peri / apo)', `${fmtNum(e.rper, 3)} / ${fmtNum(e.rapo, 3)} kpc`]);
    rows.push(['RA / Dec (J2000)', `${fmtRA(e.ra)} / ${fmtDec(e.dec)}`]);
    if (e.notes) rows.push(['Notes', e.notes]);
    let desc = e.desc;
    if (!desc) desc = defaultDesc(e, dly);
    const cls = e.t.startsWith('G') || e.t === 'QSO' ? 'galaxy' : 'dso';
    return { kind: cls, kindLabel: DSO_TYPES[e.t] || e.t, name: this.displayName(e), sub: `${DSO_TYPES[e.t] || e.t}${e.con ? ' in ' + (CON_NAMES[e.con] || e.con) : ''}`, radius: physKm / 2, rows, desc,
      source: e.img ? 'OpenNGC (NGC/IC catalogue) · Cantat-Gaudin 2020 & Baumgardt 2019 for clusters · image: DSS2 colour via CDS hips2fits (real photograph)' + (this.volumes && this.volumes.eligible.has(i) ? ' · 3D volume: particles sampled from the photograph (PanSTARRS DR1 / Mellinger / DSS2); depth along the line of sight is a model (shell for planetary nebulae and remnants, slab for emission nebulae, sphere for clusters).' : '.') : 'OpenNGC (NGC/IC catalogue) · Cantat-Gaudin 2020 (Gaia open clusters) · Baumgardt 2019 (globulars). Shape drawn schematically from catalogued size, axis ratio and position angle.',
      ref: { layer: 'dso', index: i }, getPos: (jd, out) => self.worldPos(i, out), faceFrom: [0, 0, 0] };
  }
  labels(ctx, out, maxCount) {
    if (!this.visible) return;
    const cand = [];
    const cam = ctx.camPos;
    for (const i of this.named) {
      const e = this.items[i];
      const x = this.pos[3 * i] - cam[0], y = this.pos[3 * i + 1] - cam[1], z = this.pos[3 * i + 2] - cam[2];
      const d = Math.sqrt(x * x + y * y + z * z);
      if ((x * ctx.forward.x + y * ctx.forward.y + z * ctx.forward.z) / d < ctx.cosHalfFov) continue;
      // importance: bright & famous first; boost things with images
      let imp = (e.mag ?? 12) - (e.m ? 3 : 0) - (e.img ? 1 : 0) - (e.dq === 'c' ? 1.5 : 0);
      const px = this.sizeKm[2 * i + 1] / d * ctx.pxPerRad; if (px > 40) imp -= 3;
      cand.push([imp, i, x, y, z, px]);
    }
    cand.sort((a, b) => a[0] - b[0]);
    for (const c of cand.slice(0, maxCount)) { const e = this.items[c[1]]; out.push({ text: this.displayName(e), x: c[2], y: c[3], z: c[4], cls: e.t.startsWith('G') ? 'galaxy' : 'dso', prio: 8 - c[0] * 0.1, offsetPx: Math.min(50, c[5] / 2), ref: { layer: 'dso', index: c[1] } }); }
  }
  searchEntries() {
    const out = [];
    this.items.forEach((e, i) => {
      out.push({ name: e.n, kind: DSO_TYPES[e.t] || e.t, ref: { layer: 'dso', index: i }, lowPrio: !(e.m || e.cn) });
      if (e.m) out.push({ name: e.m, alt: e.n, kind: DSO_TYPES[e.t] || e.t, ref: { layer: 'dso', index: i } });
      if (e.cn) for (const c of e.cn.split(',')) out.push({ name: c.trim(), alt: e.n, kind: DSO_TYPES[e.t] || e.t, ref: { layer: 'dso', index: i } });
    });
    return out;
  }
}

function norm(s) { return s.toUpperCase().replace(/\s+/g, '').replace(/^([A-Z]+)0+(\d)/, '$1$2'); }
function defaultSize(t) { return { G: 1.0, GPair: 2, GTrpl: 3, GGroup: 60, OCl: 6, GCl: 4, PN: 0.4, HII: 5, EmN: 5, Neb: 4, RfN: 3, SNR: 5, DrkN: 10, 'Cl+N': 6, '*Ass': 30, BH: 0.001, QSO: 0.05 }[t] || 2; }
function procCell(e) {
  const t = e.t, h = (e.hub || '').toUpperCase();
  if (e.t === 'G' || t === 'GPair' || t === 'GTrpl') { if (/^E|^S0|^DSPH|^DE/.test(h)) return PROC.ellip; if (/^SB|^IB/.test(h)) return PROC.bar; if (/^S/.test(h)) return PROC.spiral; if (/^I|IRR|IM|DIRR/.test(h)) return PROC.irr; return PROC.spiral; }
  return { GGroup: PROC.ring, OCl: PROC.ocl, GCl: PROC.gcl, PN: PROC.pn, HII: PROC.emn, EmN: PROC.emn, Neb: PROC.emn, RfN: PROC.refl, SNR: PROC.snr, DrkN: PROC.dark, 'Cl+N': PROC.emn, '*Ass': PROC.ocl, BH: PROC.point, QSO: PROC.point, Other: PROC.ring }[t] ?? PROC.ellip;
}
function defaultDesc(e, dly) {
  const T = DSO_TYPES[e.t] || e.t;
  const where = e.con ? ` in ${CON_NAMES[e.con] || e.con}` : '';
  const dist = dly >= 1e6 ? `${fmtNum(dly / 1e6, 3)} million light-years` : `${fmtNum(dly, 3)} light-years`;
  const base = {
    G: `A ${e.hub ? e.hub + ' ' : ''}galaxy${where}, about ${dist} away${e.dq === 'z' ? ' (from its redshift)' : ''}.`,
    OCl: `An open star cluster${where}, ${dist} from the Sun${e.age ? `, about ${fmtNum(Math.pow(10, e.age) / 1e6, 2)} million years old` : ''}. Open clusters are loose families of a few hundred to a few thousand stars born from the same cloud.`,
    GCl: `A globular cluster${where}, ${dist} away: a dense, ancient ball of hundreds of thousands of stars orbiting in the halo of the Milky Way.`,
    PN: `A planetary nebula${where}, ${dist} away: the glowing shell of gas thrown off by a dying Sun-like star, lit by the hot white dwarf left behind.`,
    HII: `An HII region${where}, ${dist} away: a cloud of hydrogen ionised by newborn massive stars, glowing pink-red.`,
    EmN: `An emission nebula${where}, ${dist} away.`, Neb: `A nebula${where}, ${dist} away.`,
    RfN: `A reflection nebula${where}, ${dist} away: dust scattering the blue light of nearby stars.`,
    SNR: `A supernova remnant${where}, ${dist} away: the expanding debris of an exploded star.`,
    DrkN: `A dark nebula${where}, ${dist} away: a cold dust cloud that blocks the light of stars behind it.`,
    'Cl+N': `A young star cluster still embedded in the nebula it formed from${where}, ${dist} away.`,
    '*Ass': `A loose association of young stars${where}, ${dist} away.`,
    GPair: `A pair of galaxies${where}, about ${dist} away.`, GTrpl: `A triplet of galaxies${where}, about ${dist} away.`, GGroup: `A group of galaxies${where}, about ${dist} away.`,
  }[e.t];
  return base || `${T}${where}, ${dist} away.`;
}

// ---- procedural sprite atlas ----
function drawProcedural(g) {
  const cell = (k, fn) => { const cx = (k % GRID) * CELL, cy = Math.floor(k / GRID) * CELL; g.save(); g.translate(cx + CELL / 2, cy + CELL / 2); fn(); g.restore(); };
  const rnd = seed => () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
  const radial = (r0, r1, stops) => { const gr = g.createRadialGradient(0, 0, r0, 0, 0, r1); for (const [o, c] of stops) gr.addColorStop(o, c); return gr; };
  g.fillStyle = '#000'; g.fillRect(0, 0, CELL * GRID, CELL * GRID);
  // 0 elliptical
  cell(PROC.ellip, () => { g.fillStyle = radial(0, 60, [[0, 'rgba(255,240,215,1)'], [0.12, 'rgba(255,230,190,0.85)'], [0.4, 'rgba(255,220,180,0.25)'], [1, 'rgba(0,0,0,0)']]); g.fillRect(-64, -64, 128, 128); });
  // 1 spiral
  cell(PROC.spiral, () => drawSpiral(g, rnd(7), 2, 0.28));
  // 12 barred spiral
  cell(PROC.bar, () => { drawSpiral(g, rnd(11), 2, 0.22); g.save(); g.rotate(0.3); g.fillStyle = 'rgba(255,225,190,0.55)'; g.beginPath(); g.ellipse(0, 0, 30, 6, 0, 0, Math.PI * 2); g.fill(); g.restore(); });
  // 2 irregular
  cell(PROC.irr, () => { const r = rnd(3); for (let k = 0; k < 40; k++) { const x = (r() - 0.5) * 70, y = (r() - 0.5) * 50, s = 6 + r() * 14; g.fillStyle = radial(0, s, [[0, `rgba(200,220,255,${0.35})`], [1, 'rgba(0,0,0,0)']]); g.save(); g.translate(x, y); g.fillRect(-s, -s, 2 * s, 2 * s); g.restore(); } });
  // 3 emission nebula
  cell(PROC.emn, () => { const r = rnd(5); for (let k = 0; k < 28; k++) { const x = (r() - 0.5) * 60, y = (r() - 0.5) * 60, s = 12 + r() * 22; g.fillStyle = radial(0, s, [[0, 'rgba(255,255,255,0.22)'], [0.5, 'rgba(255,255,255,0.1)'], [1, 'rgba(0,0,0,0)']]); g.save(); g.translate(x, y); g.fillRect(-s, -s, 2 * s, 2 * s); g.restore(); } for (let k = 0; k < 12; k++) { g.fillStyle = 'rgba(255,255,255,0.9)'; g.beginPath(); g.arc((r() - 0.5) * 50, (r() - 0.5) * 50, 0.8 + r(), 0, 7); g.fill(); } });
  // 4 reflection
  cell(PROC.refl, () => { g.fillStyle = radial(0, 45, [[0, 'rgba(255,255,255,0.6)'], [0.3, 'rgba(255,255,255,0.25)'], [1, 'rgba(0,0,0,0)']]); g.fillRect(-64, -64, 128, 128); });
  // 5 planetary nebula ring
  cell(PROC.pn, () => { g.fillStyle = radial(20, 48, [[0, 'rgba(255,255,255,0.05)'], [0.5, 'rgba(255,255,255,0.7)'], [1, 'rgba(0,0,0,0)']]); g.fillRect(-64, -64, 128, 128); g.fillStyle = radial(0, 18, [[0, 'rgba(255,255,255,0.5)'], [1, 'rgba(255,255,255,0.05)']]); g.fillRect(-64, -64, 128, 128); g.fillStyle = '#fff'; g.beginPath(); g.arc(0, 0, 1.5, 0, 7); g.fill(); });
  // 6 SNR shell
  cell(PROC.snr, () => { const r = rnd(9); g.fillStyle = radial(30, 58, [[0, 'rgba(255,255,255,0.03)'], [0.55, 'rgba(255,255,255,0.45)'], [0.8, 'rgba(255,255,255,0.2)'], [1, 'rgba(0,0,0,0)']]); g.fillRect(-64, -64, 128, 128); for (let k = 0; k < 40; k++) { const a = r() * 6.283, rr = 30 + r() * 25; g.fillStyle = 'rgba(255,255,255,0.35)'; g.beginPath(); g.arc(Math.cos(a) * rr, Math.sin(a) * rr, 1 + r() * 3, 0, 7); g.fill(); } });
  // 7 open cluster
  cell(PROC.ocl, () => { const r = rnd(13); for (let k = 0; k < 70; k++) { const a = r() * 6.283, rr = Math.pow(r(), 0.7) * 55, s = 0.6 + r() * r() * 2.4; g.fillStyle = radial(0, s * 2.5, [[0, 'rgba(255,255,255,1)'], [0.4, 'rgba(255,255,255,0.5)'], [1, 'rgba(0,0,0,0)']]); g.save(); g.translate(Math.cos(a) * rr, Math.sin(a) * rr); g.fillRect(-s * 3, -s * 3, s * 6, s * 6); g.restore(); } });
  // 8 globular
  cell(PROC.gcl, () => { const r = rnd(17); g.fillStyle = radial(0, 55, [[0, 'rgba(255,255,255,0.9)'], [0.15, 'rgba(255,255,255,0.5)'], [0.5, 'rgba(255,255,255,0.12)'], [1, 'rgba(0,0,0,0)']]); g.fillRect(-64, -64, 128, 128); for (let k = 0; k < 400; k++) { const a = r() * 6.283, rr = Math.pow(r(), 2.2) * 58; g.fillStyle = 'rgba(255,255,255,0.7)'; g.beginPath(); g.arc(Math.cos(a) * rr, Math.sin(a) * rr, 0.5 + r() * 1.2, 0, 7); g.fill(); } });
  // 9 dark nebula (faint haze)
  cell(PROC.dark, () => { const r = rnd(21); for (let k = 0; k < 20; k++) { const x = (r() - 0.5) * 60, y = (r() - 0.5) * 60, s = 15 + r() * 25; g.fillStyle = radial(0, s, [[0, 'rgba(255,255,255,0.25)'], [1, 'rgba(0,0,0,0)']]); g.save(); g.translate(x, y); g.fillRect(-s, -s, 2 * s, 2 * s); g.restore(); } });
  // 10 point (black hole / quasar)
  cell(PROC.point, () => { g.fillStyle = radial(0, 40, [[0, 'rgba(255,255,255,1)'], [0.1, 'rgba(255,255,255,0.8)'], [0.3, 'rgba(255,255,255,0.15)'], [1, 'rgba(0,0,0,0)']]); g.fillRect(-64, -64, 128, 128); g.strokeStyle = 'rgba(255,255,255,0.6)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(-60, 0); g.lineTo(-12, 0); g.moveTo(12, 0); g.lineTo(60, 0); g.moveTo(0, -60); g.lineTo(0, -12); g.moveTo(0, 12); g.lineTo(0, 60); g.stroke(); });
  // 11 ring outline (groups / regions)
  cell(PROC.ring, () => { g.strokeStyle = 'rgba(255,255,255,0.7)'; g.lineWidth = 2; g.setLineDash([6, 6]); g.beginPath(); g.arc(0, 0, 56, 0, 7); g.stroke(); });
}
function drawSpiral(g, r, arms, pitch) {
  g.fillStyle = 'rgba(255,240,215,0.9)'; g.beginPath(); g.arc(0, 0, 5, 0, 7); g.fill();
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, 58); gr.addColorStop(0, 'rgba(255,235,205,0.75)'); gr.addColorStop(0.25, 'rgba(230,225,255,0.22)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(-64, -64, 128, 128);
  for (let a = 0; a < arms; a++) {
    const off = a * Math.PI * 2 / arms;
    for (let t = 0.4; t < 4.2; t += 0.035) {
      const rad = 7 * Math.exp(pitch * t * 1.6); if (rad > 58) break;
      const ang = t + off + (r() - 0.5) * 0.25;
      const x = Math.cos(ang) * rad + (r() - 0.5) * 6, y = Math.sin(ang) * rad + (r() - 0.5) * 6;
      const s = 2.5 + r() * 4 * (rad / 58);
      const c = r() < 0.25 ? 'rgba(255,170,190,' : 'rgba(200,215,255,';
      const gg = g.createRadialGradient(x, y, 0, x, y, s); gg.addColorStop(0, c + (0.5 - rad / 160) + ')'); gg.addColorStop(1, c + '0)');
      g.fillStyle = gg; g.fillRect(x - s, y - s, 2 * s, 2 * s);
    }
  }
}
