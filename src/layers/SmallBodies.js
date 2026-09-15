import * as THREE from 'three';
import { KM_PER_AU, JD_J2000, DEG, fmtNum, fmtDist, fmtTime } from '../astro/units.js';
import { smallBodyPosition, orbitPath } from '../astro/orbits.js';
import { makeGlowTexture } from './Stars.js';

const CLASS_INFO = {
  MBA: ['Main-belt asteroid', '#b8a890'], IMB: ['Inner main-belt asteroid', '#c0b09a'], OMB: ['Outer main-belt asteroid', '#a89c8c'], MCA: ['Mars-crossing asteroid', '#d09a70'],
  APO: ['Apollo near-Earth asteroid', '#ff8a5a'], ATE: ['Aten near-Earth asteroid', '#ff7a4a'], AMO: ['Amor near-Earth asteroid', '#ff9a6a'], IEO: ['Atira (interior-Earth) asteroid', '#ff6a3a'],
  TJN: ['Jupiter Trojan', '#9a7a5a'], CEN: ['Centaur', '#7ab0d0'], TNO: ['Trans-Neptunian object', '#8ab8ff'], HYA: ['Hyperbolic asteroid', '#ffffff'], PAA: ['Parabolic asteroid', '#fff'], AST: ['Asteroid', '#bbb'],
  JFc: ['Jupiter-family comet', '#8ff'], JFC: ['Jupiter-family comet', '#8ff'], HTC: ['Halley-type comet', '#9ff'], ETc: ['Encke-type comet', '#8ff'], COM: ['Comet', '#8ff'], CTc: ['Chiron-type comet', '#8ff'], HYP: ['Hyperbolic comet', '#aff'], PAR: ['Parabolic comet', '#aff'],
};

const VERT = /* glsl */`
  attribute vec4 el0; attribute vec4 el1; attribute vec3 color;
  uniform float uT; uniform vec3 uCam; uniform float uPixelRatio; uniform float uRef; uniform float uAU; uniform float uBoost;
  varying vec3 vColor; varying float vAlpha;
  #include <common>
#include <logdepthbuf_pars_vertex>
  const float K = 0.01720209895; const float OBL = 0.4090926;
  void main() {
    float a = el0.x, e = el0.y, inc = el0.z, om = el0.w, w = el1.x, ma0 = el1.y, ep = el1.z, H = el1.w;
    float n = K / pow(a, 1.5);
    float M = mod(ma0 + n * (uT - ep), 6.283185307);
    float E = e < 0.8 ? M : 3.14159265;
    for (int i = 0; i < 14; i++) { float dE = (E - e * sin(E) - M) / (1.0 - e * cos(E)); E -= dE; }
    float xp = a * (cos(E) - e), yp = a * sqrt(1.0 - e * e) * sin(E);
    float cw = cos(w), sw = sin(w), co = cos(om), so = sin(om), ci = cos(inc), si = sin(inc);
    vec3 p = vec3((cw*co - sw*so*ci) * xp + (-sw*co - cw*so*ci) * yp, (cw*so + sw*co*ci) * xp + (-sw*so + cw*co*ci) * yp, (sw*si) * xp + (cw*si) * yp);
    // ecliptic -> equatorial
    float c = cos(OBL), s = sin(OBL);
    p = vec3(p.x, p.y * c - p.z * s, p.y * s + p.z * c);
    float rSun = length(p);
    vec3 rel = p * uAU - uCam;
    float d = length(rel);
    float m = H + 5.0 * log(max(rSun * d / uAU, 1e-6)) / 2.302585;
    float sz = 2.6 * pow(10.0, -0.2 * (m - mix(15.5, uRef, uBoost)));
    vAlpha = clamp(sz / 1.4, mix(0.0, 0.35, uBoost), 1.0);
    if (sz < 0.5) vAlpha *= sz / 0.5;
    sz = clamp(sz, 1.4, 7.0);
    vColor = color;
    vec4 mv = modelViewMatrix * vec4(rel, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = sz * uPixelRatio;
    #include <logdepthbuf_vertex>
  }`;
const FRAG = /* glsl */`
  varying vec3 vColor; varying float vAlpha;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0; float a = exp(-r2 * 3.0) * vAlpha;
    gl_FragColor = vec4(vColor * a, a);
  }`;

export class SmallBodyLayer {
  constructor(universe, astData, astMeta, comets) {
    this.u = universe;
    this.el = astData.el; this.names = astMeta.names; this.extra = astMeta.extra; this.notable = astMeta.notable;
    this.count = this.names.length;
    this.visible = true; this.cometsVisible = true;
    this.nameIndex = new Map(this.names.map((n, i) => [n.toLowerCase(), i]));
    const n = this.count;
    const el0 = new Float32Array(n * 4), el1 = new Float32Array(n * 4), color = new Float32Array(n * 3);
    const c = new THREE.Color();
    for (let i = 0; i < n; i++) {
      const b = 9 * i;
      el0[4 * i] = this.el[b]; el0[4 * i + 1] = this.el[b + 1]; el0[4 * i + 2] = this.el[b + 2] * DEG; el0[4 * i + 3] = this.el[b + 3] * DEG;
      el1[4 * i] = this.el[b + 4] * DEG; el1[4 * i + 1] = this.el[b + 5] * DEG; el1[4 * i + 2] = this.el[b + 6]; el1[4 * i + 3] = this.el[b + 7];
      c.set((CLASS_INFO[this.extra[i][0]] || CLASS_INFO.AST)[1]);
      color[3 * i] = c.r; color[3 * i + 1] = c.g; color[3 * i + 2] = c.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    geo.setAttribute('el0', new THREE.BufferAttribute(el0, 4));
    geo.setAttribute('el1', new THREE.BufferAttribute(el1, 4));
    geo.setAttribute('color', new THREE.BufferAttribute(color, 3));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
      uniforms: { uT: { value: 0 }, uCam: { value: new THREE.Vector3() }, uPixelRatio: { value: 1 }, uRef: { value: 21.0 }, uAU: { value: KM_PER_AU }, uBoost: { value: 1 } } });
    this.points = new THREE.Points(geo, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 4;
    universe.scene.add(this.points);

    // comets on the CPU
    this.comets = comets.filter(c => c.e < 1 && c.a);
    const cn = this.comets.length;
    this.cometPos = new Float64Array(cn * 3);
    const cgeo = new THREE.BufferGeometry();
    this.cometRel = new Float32Array(cn * 3);
    cgeo.setAttribute('position', new THREE.BufferAttribute(this.cometRel, 3));
    cgeo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.cometPoints = new THREE.Points(cgeo, new THREE.PointsMaterial({ color: 0x9df7ff, size: 9, map: makeGlowTexture(), sizeAttenuation: false, transparent: true, opacity: 0.85, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending }));
    this.cometPoints.frustumCulled = false; this.cometPoints.renderOrder = 4;
    universe.scene.add(this.cometPoints);
    this.tailRel = new Float32Array(cn * 6);
    const tgeo = new THREE.BufferGeometry(); tgeo.setAttribute('position', new THREE.BufferAttribute(this.tailRel, 3)); tgeo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.tails = new THREE.LineSegments(tgeo, new THREE.LineBasicMaterial({ color: 0x7fe9ff, transparent: true, opacity: 0.22, depthWrite: false })); this.tails.frustumCulled = false;
    universe.scene.add(this.tails);

    this.selectedOrbit = null;
    this._tmp = [0, 0, 0];
    this.notablePos = new Float64Array(this.notable.length * 3);
    // dwarf planets are drawn and labelled by the Solar System layer
    this.skipLabel = new Set(['4 Vesta', '1 Ceres', '134340 Pluto', '136199 Eris', '136108 Haumea', '136472 Makemake', '225088 Gonggong', '50000 Quaoar', '90482 Orcus', '90377 Sedna']);
  }

  elementsByName(name) {
    const i = this.nameIndex.get(name.toLowerCase());
    if (i === undefined) return null;
    return this.elementsOf(i);
  }
  elementsOf(i) { const b = 9 * i; return { a: this.el[b], e: this.el[b + 1], i: this.el[b + 2], om: this.el[b + 3], w: this.el[b + 4], ma: this.el[b + 5], epoch: this.el[b + 6] + JD_J2000, H: this.el[b + 7], dia: this.el[b + 8] }; }
  position(i, jd, out) { const e = this.elementsOf(i); return smallBodyPosition(e.a, e.e, e.i, e.om, e.w, e.ma, e.epoch, jd, out); }
  cometPosition(c, jd, out) { return smallBodyPosition(c.a, c.e, c.i, c.om, c.w, c.ma ?? 0, c.ep, jd, out); }

  update(ctx) {
    this.mat.uniforms.uT.value = ctx.jd - JD_J2000;
    this.mat.uniforms.uCam.value.set(ctx.camPos[0], ctx.camPos[1], ctx.camPos[2]);
    this.mat.uniforms.uPixelRatio.value = ctx.pixelRatio;
    const dSunAU = Math.hypot(ctx.camPos[0], ctx.camPos[1], ctx.camPos[2]) / KM_PER_AU;
    this.mat.uniforms.uBoost.value = THREE.MathUtils.smoothstep(dSunAU, 1.3, 6);
    this.points.visible = this.visible;
    this.cometPoints.visible = this.tails.visible = this.cometsVisible;
    if (this.cometsVisible) {
      const t = this._tmp; const cam = ctx.camPos;
      for (let k = 0; k < this.comets.length; k++) {
        this.cometPosition(this.comets[k], ctx.jd, t);
        this.cometPos[3 * k] = t[0]; this.cometPos[3 * k + 1] = t[1]; this.cometPos[3 * k + 2] = t[2];
        const rx = t[0] - cam[0], ry = t[1] - cam[1], rz = t[2] - cam[2];
        this.cometRel[3 * k] = rx; this.cometRel[3 * k + 1] = ry; this.cometRel[3 * k + 2] = rz;
        const r = Math.hypot(t[0], t[1], t[2]) / KM_PER_AU;
        const L = r < 3 ? Math.min(0.25, 0.03 * Math.pow(2 / r, 2)) * KM_PER_AU : 0;
        const inv = L / (r * KM_PER_AU);
        this.tailRel[6 * k] = rx; this.tailRel[6 * k + 1] = ry; this.tailRel[6 * k + 2] = rz;
        this.tailRel[6 * k + 3] = rx + t[0] * inv; this.tailRel[6 * k + 4] = ry + t[1] * inv; this.tailRel[6 * k + 5] = rz + t[2] * inv;
      }
      this.cometPoints.geometry.attributes.position.needsUpdate = true; this.tails.geometry.attributes.position.needsUpdate = true;
    }
    for (let k = 0; k < this.notable.length; k++) { this.position(this.notable[k], ctx.jd, this._tmp); this.notablePos[3 * k] = this._tmp[0]; this.notablePos[3 * k + 1] = this._tmp[1]; this.notablePos[3 * k + 2] = this._tmp[2]; }
    if (this.selectedOrbit) this.selectedOrbit.position.set(-ctx.camPos[0], -ctx.camPos[1], -ctx.camPos[2]);
  }

  nearestSurface(camPos) {
    let best = Infinity;
    for (const d of [this.u.rig.focus, this.u.selection]) {
      if (!d || (d.kind !== 'asteroid' && d.kind !== 'comet')) continue;
      d.getPos(this.u.time.jd, this._tmp);
      const dist = Math.hypot(this._tmp[0] - camPos[0], this._tmp[1] - camPos[1], this._tmp[2] - camPos[2]) - d.radius;
      if (dist < best) best = dist;
    }
    return best;
  }
  showOrbitFor(desc) {
    if (this.selectedOrbit) { this.u.scene.remove(this.selectedOrbit); this.selectedOrbit.geometry.dispose(); this.selectedOrbit = null; }
    if (!desc || (desc.ref.layer !== 'asteroids' && desc.ref.layer !== 'comets')) return;
    const e = desc.ref.layer === 'asteroids' ? this.elementsOf(desc.ref.index) : this.comets[desc.ref.index];
    const pts = orbitPath(e.a * KM_PER_AU, e.e, e.i * DEG, e.om * DEG, e.w * DEG, 720, true);
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pts, 3)); geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.selectedOrbit = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: desc.ref.layer === 'comets' ? 0x7fe9ff : 0xffc27a, transparent: true, opacity: 0.55, depthWrite: false }));
    this.selectedOrbit.frustumCulled = false;
    this.u.scene.add(this.selectedOrbit);
  }

  pick(ray, camPos, pxPerRad, jd) {
    let best = -1, bestSep = 12, bestKind = null;
    const t = this._tmp;
    if (this.visible) for (let i = 0; i < this.count; i++) {
      this.position(i, jd, t);
      const x = t[0] - camPos[0], y = t[1] - camPos[1], z = t[2] - camPos[2];
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.9995) continue;
      const sep = Math.acos(Math.min(1, dot)) * pxPerRad;
      if (sep < bestSep) { bestSep = sep; best = i; bestKind = 'asteroids'; }
    }
    if (this.cometsVisible) for (let k = 0; k < this.comets.length; k++) {
      const x = this.cometPos[3 * k] - camPos[0], y = this.cometPos[3 * k + 1] - camPos[1], z = this.cometPos[3 * k + 2] - camPos[2];
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.9995) continue;
      const sep = Math.acos(Math.min(1, dot)) * pxPerRad;
      if (sep < bestSep) { bestSep = sep; best = k; bestKind = 'comets'; }
    }
    if (best < 0) return null;
    return { sepPx: bestSep, desc: bestKind === 'asteroids' ? this.describe(best) : this.describeComet(best) };
  }

  describe(i) {
    const self = this, e = this.elementsOf(i), x = this.extra[i];
    const cls = CLASS_INFO[x[0]] || CLASS_INFO.AST;
    const per = Math.pow(e.a, 1.5);
    const rows = [
      ['Orbit class', `${cls[0]} (${x[0]})`],
      ['Semi-major axis', `${fmtNum(e.a, 4)} AU`], ['Eccentricity', fmtNum(e.e, 4)], ['Inclination', `${fmtNum(e.i, 3)}°`],
      ['Perihelion / aphelion', `${fmtNum(e.a * (1 - e.e), 3)} / ${fmtNum(e.a * (1 + e.e), 3)} AU`],
      ['Orbital period', `${fmtNum(per, 4)} yr`],
      ['Absolute magnitude H', fmtNum(e.H, 2)],
    ];
    if (e.dia) rows.push(['Diameter', `${fmtNum(e.dia, 3)} km`]);
    else rows.push(['Diameter (est. from H)', `${fmtNum(1329 / Math.sqrt(0.14) * Math.pow(10, -0.2 * e.H), 2)} km (assuming albedo 0.14)`]);
    if (x[1] != null) rows.push(['Geometric albedo', fmtNum(x[1], 3)]);
    if (x[2] != null) rows.push(['Rotation period', `${fmtNum(x[2], 4)} h`]);
    const pos = this.position(i, this.u.time.jd, [0, 0, 0]);
    rows.push(['Distance from Sun (now)', `${fmtNum(Math.hypot(...pos) / KM_PER_AU, 4)} AU`]);
    const radius = (e.dia || 1329 / Math.sqrt(0.14) * Math.pow(10, -0.2 * e.H)) / 2;
    return { kind: 'asteroid', kindLabel: cls[0], name: this.names[i], sub: cls[0], radius, rows, variant: ['ast_rubble', 'ast_elongated', 'ast_cratered', 'ast_irregular', 'ast_metallic'][i % 5], desc: `${cls[0]} catalogued by the JPL Small-Body Database. Orbital elements at epoch JD ${fmtNum(e.epoch, 8)}.`,
      source: 'JPL Small-Body Database (SBDB) query API, numbered asteroids.', ref: { layer: 'asteroids', index: i },
      getPos: (jd, out) => self.position(i, jd, out) };
  }
  describeComet(k) {
    const self = this, c = this.comets[k];
    const cls = CLASS_INFO[c.cls] || CLASS_INFO.COM;
    const rows = [['Orbit class', `${cls[0]} (${c.cls})`], ['Perihelion distance', `${fmtNum(c.q, 4)} AU`], ['Eccentricity', fmtNum(c.e, 4)], ['Inclination', `${fmtNum(c.i, 3)}°`]];
    if (c.a) rows.push(['Semi-major axis', `${fmtNum(c.a, 3)} AU`], ['Aphelion', `${fmtNum(c.a * (1 + c.e), 3)} AU`]);
    if (c.per) rows.push(['Orbital period', `${fmtNum(c.per, 4)} yr`]);
    if (c.tp) rows.push(['Perihelion passage (JD)', fmtNum(c.tp, 8)]);
    if (c.dia) rows.push(['Nucleus diameter', `${fmtNum(c.dia, 3)} km`]);
    const pos = this.cometPosition(c, this.u.time.jd, [0, 0, 0]);
    rows.push(['Distance from Sun (now)', `${fmtNum(Math.hypot(...pos) / KM_PER_AU, 4)} AU`]);
    return { kind: 'comet', kindLabel: 'Comet', name: c.n, sub: cls[0], radius: (c.dia || 2) / 2, rows, variant: 'comet_nucleus', desc: `${cls[0]}. Tail drawn schematically pointing away from the Sun; length grows as it approaches perihelion.`,
      source: 'JPL Small-Body Database (SBDB).', ref: { layer: 'comets', index: k }, getPos: (jd, out) => self.cometPosition(c, jd, out) };
  }
  labels(ctx, out) {
    if (this.visible) for (let k = 0; k < this.notable.length; k++) {
      const i = this.notable[k];
      if (this.skipLabel.has(this.names[i])) continue;
      const x = this.notablePos[3 * k] - ctx.camPos[0], y = this.notablePos[3 * k + 1] - ctx.camPos[1], z = this.notablePos[3 * k + 2] - ctx.camPos[2];
      out.push({ text: this.names[i].replace(/^\d+\s+/, ''), x, y, z, cls: 'small', prio: 20, ref: { layer: 'asteroids', index: i } });
    }
    if (this.cometsVisible) for (let k = 0; k < this.comets.length; k++) {
      const c = this.comets[k];
      const r = Math.hypot(this.cometPos[3 * k], this.cometPos[3 * k + 1], this.cometPos[3 * k + 2]) / KM_PER_AU;
      const famous = /Halley|Encke|Churyumov|Hale-Bopp|Tempel 1|Wild 2|Hartley 2|Borrelly|Giacobini|Swift-Tuttle|Tuttle|Wirtanen/.test(c.n);
      if (!famous && !(r < 1.6 && ctx.labelDensity > 0.5)) continue;
      const x = this.cometPos[3 * k] - ctx.camPos[0], y = this.cometPos[3 * k + 1] - ctx.camPos[1], z = this.cometPos[3 * k + 2] - ctx.camPos[2];
      if (Math.hypot(x, y, z) > 80 * KM_PER_AU) continue; // a comet is a point from beyond the Solar System: no label
      out.push({ text: c.n.replace(/\s*\(.*\)$/, ''), x, y, z, cls: 'small', prio: 22, ref: { layer: 'comets', index: k } });
    }
  }
  searchEntries() {
    const out = [];
    for (let i = 0; i < this.count; i++) out.push({ name: this.names[i], kind: 'asteroid', ref: { layer: 'asteroids', index: i }, lowPrio: i > 200 });
    this.comets.forEach((c, k) => out.push({ name: c.n, kind: 'comet', ref: { layer: 'comets', index: k } }));
    return out;
  }
}
