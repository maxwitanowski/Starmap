import * as THREE from 'three';
import { KM_PER_PC } from '../astro/units.js';

// Constellation stick figures drawn between the real 3D positions of their stars (Stellarium modern sky culture, HIP ids -> HYG).
export class ConstellationLayer {
  constructor(universe, data, stars) {
    this.u = universe; this.stars = stars; this.visible = true;
    this.cons = data.constellations;
    const segs = [];
    for (const c of this.cons) for (const line of c.lines) for (let k = 0; k + 1 < line.length; k++) segs.push(line[k], line[k + 1]);
    this.segIdx = segs;
    this.rel = new Float32Array(segs.length * 3);
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(this.rel, 3)); geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.lines = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: 0x5a78c8, transparent: true, opacity: 0.45, depthWrite: false, depthTest: true }));
    this.lines.frustumCulled = false; this.lines.renderOrder = 6;
    universe.scene.add(this.lines);
    // centroid direction (unit) for the name label
    for (const c of this.cons) {
      const v = new THREE.Vector3();
      let n = 0;
      for (const line of c.lines) for (const i of line) { v.add(new THREE.Vector3(stars.pos[3 * i], stars.pos[3 * i + 1], stars.pos[3 * i + 2]).normalize()); n++; }
      c.dir = n ? v.normalize() : null;
    }
  }
  update(ctx) {
    this.lines.visible = this.visible;
    if (!this.visible) return;
    const cam = ctx.camPos; const p = this.stars.pos;
    for (let k = 0; k < this.segIdx.length; k++) {
      const i = this.segIdx[k];
      this.rel[3 * k] = p[3 * i] * KM_PER_PC - cam[0]; this.rel[3 * k + 1] = p[3 * i + 1] * KM_PER_PC - cam[1]; this.rel[3 * k + 2] = p[3 * i + 2] * KM_PER_PC - cam[2];
    }
    this.lines.geometry.attributes.position.needsUpdate = true;
    // fade the figures when far from the Sun: they only make sense from here
    const dSun = Math.hypot(cam[0], cam[1], cam[2]) / KM_PER_PC;
    this.lines.material.opacity = 0.45 * THREE.MathUtils.clamp((60 - dSun) / 40, 0, 1);
  }
  labels(ctx, out) {
    if (!this.visible || this.lines.material.opacity < 0.05 || ctx.labelDensity < 0.15) return;
    for (const c of this.cons) {
      if (!c.dir) continue;
      const D = 400 * KM_PER_PC;
      out.push({ text: c.native || c.name, x: c.dir.x * D - ctx.camPos[0], y: c.dir.y * D - ctx.camPos[1], z: c.dir.z * D - ctx.camPos[2], cls: 'con', prio: 1, noLine: true });
    }
  }
  pick() { return null; }
  searchEntries() { return this.cons.map(c => ({ name: c.name, alt: c.native, kind: 'constellation', ref: { layer: 'con', id: c.id } })); }
  describe(id) {
    const c = this.cons.find(x => x.id === id); if (!c) return null;
    const self = this;
    const D = 60 * KM_PER_PC;
    return { kind: 'constellation', kindLabel: 'Constellation', name: c.name, sub: c.native, radius: 5 * KM_PER_PC, rows: [['Latin name', c.native], ['IAU abbreviation', c.id], ['Stick-figure stars', String(new Set(c.lines.flat()).size)]],
      desc: `One of the 88 IAU constellations. The lines connect the real 3D positions of the stars, so the familiar shape only holds from near the Sun: move a few dozen light-years and it distorts.`,
      source: 'Stellarium "modern" sky culture; star positions HYG v4.1.', ref: { layer: 'con', id }, getPos: (jd, out) => { out[0] = c.dir.x * D; out[1] = c.dir.y * D; out[2] = c.dir.z * D; return out; } };
  }
}
