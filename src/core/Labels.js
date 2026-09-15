import * as THREE from 'three';

// HTML label pool with simple overlap avoidance.
const _v = new THREE.Vector3();
export class LabelManager {
  constructor(container, camera) {
    this.container = container; this.camera = camera;
    this.pool = []; this.max = 90;
    for (let i = 0; i < this.max; i++) { const d = document.createElement('div'); d.className = 'label'; d.style.display = 'none'; container.appendChild(d); this.pool.push(d); }
    this.selectedKey = null;
    this.onClick = null;
  }
  static key(ref) { return ref ? `${ref.layer}:${ref.index ?? ref.id ?? ref.name ?? ref.k}` : null; }
  render(items, width, height, occluders = [], pxPerRad = 1000) {
    // project
    const placed = [];
    const seen = new Set();
    for (const it of items) {
      _v.set(it.x, it.y, it.z);
      const d = _v.length(); if (d <= 0) continue;
      const key = LabelManager.key(it.ref);
      if (key && it.prio < 5000 && key === this.selectedKey) continue; // the selection label is added separately
      // hidden behind a big body?
      let occluded = false;
      for (const o of occluders) {
        const od = Math.hypot(o.x, o.y, o.z); if (od >= d) continue;
        const cosAng = (it.x * o.x + it.y * o.y + it.z * o.z) / (d * od);
        const ang = Math.acos(Math.min(1, Math.max(-1, cosAng)));
        if (ang < Math.asin(Math.min(1, o.r / od)) * 0.98) { occluded = true; break; }
      }
      if (occluded) continue;
      _v.project(this.camera);
      if (_v.z > 1 || _v.z < -1) continue; // behind camera
      const sx = (_v.x * 0.5 + 0.5) * width, sy = (-_v.y * 0.5 + 0.5) * height;
      if (sx < -50 || sx > width + 50 || sy < -20 || sy > height + 20) continue;
      it.sx = sx; it.sy = sy - (it.offsetPx || 6) - 4;
      it.key = LabelManager.key(it.ref);
      if (it.key && it.key === this.selectedKey) it.prio += 1000;
      placed.push(it);
    }
    placed.sort((a, b) => b.prio - a.prio);
    const boxes = [];
    let used = 0;
    for (const it of placed) {
      if (used >= this.max) break;
      const w = it.text.length * 6.2 + 8, h = 14;
      const x0 = it.sx - w / 2, y0 = it.sy - h;
      let collide = false;
      for (const b of boxes) { if (x0 < b[2] && x0 + w > b[0] && y0 < b[3] && y0 + h > b[1]) { collide = true; break; } }
      if (collide && it.prio < 1000) continue;
      boxes.push([x0, y0, x0 + w, y0 + h]);
      const el = this.pool[used++];
      el.textContent = it.text;
      el.className = `label ${it.cls || ''}${it.key && it.key === this.selectedKey ? ' selected' : ''}${it.noLine ? ' noline' : ''}`;
      el.style.display = 'block';
      el.style.transform = `translate(${it.sx.toFixed(1)}px, ${it.sy.toFixed(1)}px) translate(-50%, -100%)`;
      el.__ref = it.ref;
    }
    for (let i = used; i < this.max; i++) this.pool[i].style.display = 'none';
  }
}
