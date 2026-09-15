import * as THREE from 'three';

// Double-precision camera. World position is kept in `pos` (Float64 triplet, km);
// the THREE camera itself always sits at the origin and only carries orientation.
const UP = new THREE.Vector3(0, 0, 1);
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _v = new THREE.Vector3(), _v2 = new THREE.Vector3();

export class CameraRig {
  constructor(camera, dom) {
    this.camera = camera;
    this.dom = dom;
    this.pos = new Float64Array(3);
    this.quat = new THREE.Quaternion();
    this.mode = 'orbit';
    this.focus = null;           // object descriptor with getPos(jd, out) and radius
    this.focusPos = new Float64Array(3);
    this.dist = 1e5; this.yaw = 0.6; this.pitch = 0.35;
    this.speedMul = 1;           // free-flight multiplier
    this.flySpeed = 0;           // km/s (real seconds) computed each frame
    this.nearestSurface = 1e9;   // km, supplied by Universe
    this.keys = new Set();
    this.transition = null;
    this.onModeChange = null;
    this._drag = null;
    this._bind();
  }

  _bind() {
    const d = this.dom;
    d.addEventListener('contextmenu', e => e.preventDefault());
    d.addEventListener('pointerdown', e => {
      if (e.button !== 0 && e.button !== 2) return;
      this._drag = { x: e.clientX, y: e.clientY, button: e.button, moved: 0 };
      d.setPointerCapture(e.pointerId);
    });
    d.addEventListener('pointermove', e => {
      if (!this._drag) return;
      const dx = e.clientX - this._drag.x, dy = e.clientY - this._drag.y;
      this._drag.x = e.clientX; this._drag.y = e.clientY; this._drag.moved += Math.abs(dx) + Math.abs(dy);
      const s = 0.005;
      if (this.mode === 'orbit' && this._drag.button === 0 && !this.transition) {
        this.yaw -= dx * s; this.pitch = THREE.MathUtils.clamp(this.pitch + dy * s, -1.55, 1.55);
      } else {
        // free look: yaw about world up, pitch about local right
        this.transition = null;
        _q.setFromAxisAngle(UP, -dx * s); this.quat.premultiply(_q);
        _v.set(1, 0, 0).applyQuaternion(this.quat);
        _q.setFromAxisAngle(_v, -dy * s); this.quat.premultiply(_q);
        if (this.mode === 'orbit') this._enterFree();
      }
    });
    const end = e => { if (this._drag) { try { d.releasePointerCapture(e.pointerId); } catch {} } this._drag = null; };
    d.addEventListener('pointerup', end); d.addEventListener('pointercancel', end);
    d.addEventListener('wheel', e => {
      e.preventDefault();
      const small = this.focus && this.focus.radius < 5 && this.mode === 'orbit';
      const f = Math.exp(THREE.MathUtils.clamp(e.deltaY, -200, 200) * (small ? 0.0012 : 0.0025));
      if (this.mode === 'orbit') {
        this.transition = null;
        const minD = this.focus ? this.focus.radius * 1.05 + this.minApproach(this.focus) : 1;
        this.dist = Math.max(minD, this.dist * f);
      } else {
        this.speedMul = THREE.MathUtils.clamp(this.speedMul / f, 1e-4, 1e4);
      }
    }, { passive: false });
    window.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT') return;
      this.keys.add(e.code);
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'ShiftLeft', 'KeyR', 'KeyC'].includes(e.code) && this.mode === 'orbit') this._enterFree();
    });
    window.addEventListener('keyup', e => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
  }

  minApproach(obj) { return obj.kind === 'satellite' ? 0.002 : obj.kind === 'spacecraft' ? 0.002 : 0; }
  get dragMoved() { return this._drag ? this._drag.moved : 0; }

  _enterFree() {
    if (this.mode === 'free') return;
    this.mode = 'free'; this.transition = null;
    this.onModeChange?.(this.mode);
  }
  toggleMode() {
    if (this.mode === 'free') this.setOrbit(this.focus);
    else this._enterFree();
  }
  // Switch to orbit mode around obj, keeping the current camera position
  setOrbit(obj) {
    if (!obj) return;
    this.focus = obj;
    this.mode = 'orbit';
    this.focus.getPos(this._jd, this.focusPos);
    const dx = this.pos[0] - this.focusPos[0], dy = this.pos[1] - this.focusPos[1], dz = this.pos[2] - this.focusPos[2];
    this.dist = Math.hypot(dx, dy, dz) || obj.radius * 5;
    this.yaw = Math.atan2(dy, dx);
    this.pitch = Math.asin(THREE.MathUtils.clamp(dz / this.dist, -1, 1));
    this.onModeChange?.(this.mode);
  }
  // Fly to an object and end up orbiting it
  goTo(obj, endDist) {
    if (!obj) return;
    obj.getPos(this._jd, this.focusPos);
    const dx = this.pos[0] - this.focusPos[0], dy = this.pos[1] - this.focusPos[1], dz = this.pos[2] - this.focusPos[2];
    const d0 = Math.hypot(dx, dy, dz);
    const factor = obj.kind === 'star' || obj.kind === 'sun' ? 8 : obj.kind === 'galaxy' ? 2.6 : obj.kind === 'dso' ? 3.2 : obj.kind === 'satellite' || obj.kind === 'asteroid' || obj.kind === 'comet' ? 3.5 : 4.5;
    const target = endDist || Math.max(obj.radius * factor, obj.radius + this.minApproach(obj) * 4, 1e-3);
    this.focus = obj; this.mode = 'orbit';
    if (d0 > 1e-6) { this.yaw = Math.atan2(dy, dx); this.pitch = Math.asin(THREE.MathUtils.clamp(dz / d0, -1, 1)); }
    // preferred final viewpoint: on the lit side of a planet, or between the Sun and a flat deep-sky card
    let yaw1 = this.yaw, pitch1 = THREE.MathUtils.clamp(this.pitch, -1.0, 1.0);
    const toward = obj.lightPos || obj.faceFrom;
    if (toward) {
      const tx = toward[0] - this.focusPos[0], ty = toward[1] - this.focusPos[1], tz = toward[2] - this.focusPos[2];
      const tl = Math.hypot(tx, ty, tz);
      if (tl > 0) { yaw1 = Math.atan2(ty, tx) + (obj.lightPos ? 0.55 : 0); pitch1 = Math.asin(THREE.MathUtils.clamp(tz / tl, -1, 1)) + (obj.lightPos ? 0.25 : 0); pitch1 = THREE.MathUtils.clamp(pitch1, -1.3, 1.3); }
    }
    // shortest yaw path
    while (yaw1 - this.yaw > Math.PI) yaw1 -= 2 * Math.PI; while (yaw1 - this.yaw < -Math.PI) yaw1 += 2 * Math.PI;
    // don't fly through: when the target is inside/behind, keep the direction
    const ratio = Math.abs(Math.log10(Math.max(d0, 1e-6) / target));
    const duration = THREE.MathUtils.clamp(1.2 + ratio * 0.35, 1.5, 6);
    this.transition = { t: 0, duration, d0: Math.max(d0, target * 0.5), d1: target, q0: this.quat.clone(), yaw0: this.yaw, pitch0: this.pitch, yaw1, pitch1 };
    this.dist = this.transition.d0;
    this.onModeChange?.(this.mode);
  }

  // Called once per frame
  update(dt, jd) {
    this._jd = jd;
    if (this.focus) {
      this.focus.getPos(jd, this.focusPos);
      // in free flight, move with the focused body so planets/satellites don't slide away at their orbital speed
      if (this.mode === 'free' && this._followObj === this.focus && this._followPos) {
        this.pos[0] += this.focusPos[0] - this._followPos[0]; this.pos[1] += this.focusPos[1] - this._followPos[1]; this.pos[2] += this.focusPos[2] - this._followPos[2];
      }
      this._followObj = this.focus; this._followPos = this._followPos || new Float64Array(3); this._followPos.set(this.focusPos);
    }
    if (this.transition) {
      const tr = this.transition;
      tr.t = Math.min(1, tr.t + dt / tr.duration);
      const s = tr.t < 0.5 ? 4 * tr.t ** 3 : 1 - Math.pow(-2 * tr.t + 2, 3) / 2; // ease in-out cubic
      this.dist = Math.exp(THREE.MathUtils.lerp(Math.log(tr.d0), Math.log(tr.d1), s));
      this.pitch = THREE.MathUtils.lerp(tr.pitch0, tr.pitch1, s); this.yaw = THREE.MathUtils.lerp(tr.yaw0, tr.yaw1, s);
      this._placeOrbit();
      // orientation: slerp toward look-at during first half
      this._lookAtFocus(_q);
      const k = Math.min(1, tr.t * 2.2);
      this.quat.copy(tr.q0).slerp(_q, k);
      if (tr.t >= 1) this.transition = null;
    } else if (this.mode === 'orbit' && this.focus) {
      const minD = this.focus.radius * 1.02 + this.minApproach(this.focus);
      if (this.dist < minD) this.dist = minD;
      this._placeOrbit();
      this._lookAtFocus(this.quat);
    } else {
      this._fly(dt);
    }
    this.camera.quaternion.copy(this.quat);
    this.camera.position.set(0, 0, 0);
    this.camera.updateMatrixWorld();
  }

  _placeOrbit() {
    const cp = Math.cos(this.pitch);
    this.pos[0] = this.focusPos[0] + this.dist * cp * Math.cos(this.yaw);
    this.pos[1] = this.focusPos[1] + this.dist * cp * Math.sin(this.yaw);
    this.pos[2] = this.focusPos[2] + this.dist * Math.sin(this.pitch);
  }
  _lookAtFocus(outQ) {
    _v.set(this.pos[0] - this.focusPos[0], this.pos[1] - this.focusPos[1], this.pos[2] - this.focusPos[2]);
    _m.lookAt(_v, _v2.set(0, 0, 0), UP);
    outQ.setFromRotationMatrix(_m);
  }
  _fly(dt) {
    // adaptive speed: proportional to distance from the nearest surface
    // slower relative pace near small objects: metres per second beside a satellite, km/s beside an asteroid
    const near = Math.max(this.nearestSurface, 0.0005);
    const pace = near < 1 ? 0.12 : 0.2;   // ~5 s to cross the gap to whatever you are near, at every scale
    const base = near * pace;
    this.flySpeed = base * this.speedMul;
    const k = this.keys;
    let fx = 0, fy = 0, fz = 0;
    if (k.has('KeyW') || k.has('ArrowUp')) fz -= 1;
    if (k.has('KeyS') || k.has('ArrowDown')) fz += 1;
    if (k.has('KeyA') || k.has('ArrowLeft')) fx -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) fx += 1;
    if (k.has('Space') || k.has('KeyR')) fy += 1;
    if (k.has('ShiftLeft') || k.has('ShiftRight') || k.has('KeyC')) fy -= 1;
    if (k.has('KeyQ') || k.has('KeyE')) {
      _v.set(0, 0, 1).applyQuaternion(this.quat);
      _q.setFromAxisAngle(_v, (k.has('KeyQ') ? 1 : -1) * dt * 1.2);
      this.quat.premultiply(_q);
    }
    if (fx || fy || fz) {
      _v.set(fx, fy, fz).normalize().applyQuaternion(this.quat).multiplyScalar(this.flySpeed * dt);
      this.pos[0] += _v.x; this.pos[1] += _v.y; this.pos[2] += _v.z;
    }
  }
  // world -> camera-relative float vector
  rel(worldXYZ, out) {
    out.set(worldXYZ[0] - this.pos[0], worldXYZ[1] - this.pos[1], worldXYZ[2] - this.pos[2]);
    return out;
  }
  distanceTo(worldXYZ) {
    return Math.hypot(worldXYZ[0] - this.pos[0], worldXYZ[1] - this.pos[1], worldXYZ[2] - this.pos[2]);
  }
}
