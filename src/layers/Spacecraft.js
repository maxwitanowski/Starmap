import * as THREE from 'three';
import { KM_PER_AU, LIGHT_SPEED, fmtNum, fmtDist, fmtTime } from '../astro/units.js';
import { interpolateEphemeris, keplerICRF } from '../astro/orbits.js';
import { markerMaterial } from '../render/materials.js';

export class SpacecraftLayer {
  constructor(universe, list, solar) {
    this.u = universe; this.solar = solar; this.visible = true;
    this.items = list.filter(s => s.frame);
    this.items.forEach(s => { s.pos = new Float64Array(3); });
    const n = this.items.length;
    this.rel = new Float32Array(n * 3); this.alpha = new Float32Array(n).fill(1);
    const col = new Float32Array(n * 3), size = new Float32Array(n).fill(8);
    for (let i = 0; i < n; i++) { col[3 * i] = 1.0; col[3 * i + 1] = 0.75; col[3 * i + 2] = 0.45; }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.rel, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1)); geo.setAttribute('size', new THREE.BufferAttribute(size, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.points = new THREE.Points(geo, markerMaterial()); this.points.frustumCulled = false; this.points.renderOrder = 21;
    universe.scene.add(this.points);
    this.track = null; this._tmp = [0, 0, 0];
  }
  position(s, jd, out) {
    if (s.frame === 'helio') return interpolateEphemeris(s, jd, out);
    if (s.frame === 'geo') { interpolateEphemeris(s, jd, out); const e = this.solar.earth.pos; out[0] += e[0]; out[1] += e[1]; out[2] += e[2]; return out; }
    // kepler around a parent body
    const parent = this.solar.byId.get(s.parent === 599 ? 'jupiter' : 'mars').pos;
    keplerICRF(s.a, s.e, s.i, s.om, s.w, s.ma, s.n_degps, s.jd, jd, out);
    out[0] += parent[0]; out[1] += parent[1]; out[2] += parent[2];
    return out;
  }
  velocity(s, jd) {
    if (s.frame === 'kepler') return null;
    const a = this.position(s, jd - 1 / 86400, [0, 0, 0]), b = this.position(s, jd + 1 / 86400, [0, 0, 0]);
    return Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]) / 2;
  }
  update(ctx) {
    this.points.visible = this.visible;
    const cam = ctx.camPos;
    this.items.forEach((s, i) => {
      this.position(s, ctx.jd, s.pos);
      this.rel[3 * i] = s.pos[0] - cam[0]; this.rel[3 * i + 1] = s.pos[1] - cam[1]; this.rel[3 * i + 2] = s.pos[2] - cam[2];
      // hide orbiters when their planet is tiny on screen
      if (s.frame === 'kepler' || s.frame === 'geo') {
        const parent = s.frame === 'geo' ? this.solar.earth : this.solar.byId.get(s.parent === 599 ? 'jupiter' : 'mars');
        const sepPx = Math.hypot(s.pos[0] - parent.pos[0], s.pos[1] - parent.pos[1], s.pos[2] - parent.pos[2]) / Math.hypot(this.rel[3 * i], this.rel[3 * i + 1], this.rel[3 * i + 2]) * ctx.pxPerRad;
        this.alpha[i] = THREE.MathUtils.clamp((sepPx - 8) / 12, 0, 1);
      } else this.alpha[i] = 1;
    });
    this.points.geometry.attributes.position.needsUpdate = true; this.points.geometry.attributes.alpha.needsUpdate = true;
    this.points.material.uniforms.uPixelRatio.value = ctx.pixelRatio;
    if (this.track) {
      const s = this.track.sc; const base = s.frame === 'geo' ? this.solar.earth.pos : [0, 0, 0];
      this.track.position.set(base[0] - cam[0], base[1] - cam[1], base[2] - cam[2]);
    }
  }
  showTrack(desc) {
    if (this.track) { this.u.scene.remove(this.track); this.track.geometry.dispose(); this.track = null; }
    if (!desc || desc.ref.layer !== 'craft') return;
    const s = this.items[desc.ref.index];
    if (!s.t) return;
    const pts = new Float32Array(s.r.length);
    for (let k = 0; k < s.r.length; k++) pts[k] = s.r[k];
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pts, 3)); geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.track = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xffb070, transparent: true, opacity: 0.55, depthWrite: false })); this.track.frustumCulled = false; this.track.sc = s;
    this.u.scene.add(this.track);
  }
  pick(ray, camPos, pxPerRad) {
    if (!this.visible) return null;
    let best = -1, bestSep = 12;
    this.items.forEach((s, i) => {
      if (this.alpha[i] < 0.3) return;
      const x = s.pos[0] - camPos[0], y = s.pos[1] - camPos[1], z = s.pos[2] - camPos[2];
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.999) return;
      const sep = Math.acos(Math.min(1, dot)) * pxPerRad;
      if (sep < bestSep) { bestSep = sep; best = i; }
    });
    return best < 0 ? null : { sepPx: bestSep, desc: this.describe(best) };
  }
  describe(i) {
    const self = this, s = this.items[i];
    const jd = this.u.time.jd;
    const p = this.position(s, jd, [0, 0, 0]);
    const rSun = Math.hypot(...p);
    const e = this.solar.earth.pos; const rEarth = Math.hypot(p[0] - e[0], p[1] - e[1], p[2] - e[2]);
    const rows = [['Distance from Sun', `${fmtNum(rSun / KM_PER_AU, 4)} AU (${fmtDist(rSun)})`], ['Distance from Earth', `${fmtNum(rEarth / KM_PER_AU, 4)} AU (${fmtDist(rEarth)})`], ['One-way light time', fmtTime(rEarth / LIGHT_SPEED)]];
    const v = this.velocity(s, jd); if (v) rows.push(['Heliocentric speed', `${fmtNum(v, 4)} km/s`]);
    if (s.frame === 'kepler') { const parent = s.parent === 599 ? 'Jupiter' : 'Mars'; rows.push([`Orbit around ${parent}`, `a = ${fmtDist(s.a)}, e = ${fmtNum(s.e, 3)}, period ${fmtTime(s.per_s)}`]); }
    if (s.t) rows.push(['Ephemeris coverage', `${jdToDate(s.t[0])} → ${jdToDate(s.t[s.t.length - 1])}${jd > s.t[s.t.length - 1] || jd < s.t[0] ? ' (extrapolating linearly outside this range)' : ''}`]);
    rows.push(['Horizons ID', s.id]);
    return { kind: 'spacecraft', kindLabel: 'Spacecraft', name: s.n, sub: 'Spacecraft', radius: 0.01, rows, desc: s.desc, source: 'NASA/JPL Horizons system: state vectors at daily steps (Hermite-interpolated) or osculating elements for planetary orbiters.',
      ref: { layer: 'craft', index: i }, getPos: (jd2, out) => self.position(s, jd2, out) };
  }
  labels(ctx, out) {
    if (!this.visible) return;
    this.items.forEach((s, i) => { if (this.alpha[i] < 0.3) return; if (Math.hypot(this.rel[3 * i], this.rel[3 * i + 1], this.rel[3 * i + 2]) > 1.5e10) return; out.push({ text: s.n, x: this.rel[3 * i], y: this.rel[3 * i + 1], z: this.rel[3 * i + 2], cls: 'craft', prio: 45, ref: { layer: 'craft', index: i } }); });
  }
  searchEntries() { return this.items.map((s, i) => ({ name: s.n, kind: 'spacecraft', ref: { layer: 'craft', index: i } })); }
}
function jdToDate(jd) { return new Date((jd - 2440587.5) * 86400000).toISOString().slice(0, 10); }
