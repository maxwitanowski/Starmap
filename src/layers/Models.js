import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { SAT_SIZES } from './Satellites.js';

// Close-range 3D models for satellites, asteroids and comet nuclei. Element sets and orbital catalogues carry no
// shape information, so these are generic representative variants (generated with FLUX + TRELLIS), scaled to the
// catalogued size where one exists. They appear only when the camera is close enough for the object to have a visible extent.
const AST_VARIANTS = ['ast_rubble', 'ast_elongated', 'ast_cratered', 'ast_irregular', 'ast_metallic'];

export class ModelLayer {
  constructor(universe, sats, smallBodies) {
    this.u = universe; this.sats = sats; this.sb = smallBodies; this.visible = true;
    this.loader = new GLTFLoader();
    this.templates = new Map(); this.loading = new Set();
    this.group = new THREE.Group(); universe.scene.add(this.group);
    this.sun = new THREE.DirectionalLight(0xfff4e0, 3.2); universe.scene.add(this.sun); universe.scene.add(this.sun.target);
    this.fill = new THREE.HemisphereLight(0x99aacc, 0x111111, 0.35); universe.scene.add(this.fill);
    this.instances = new Map(); // key -> { mesh, kind, index }
    this._tmp = [0, 0, 0];
  }
  _template(name) {
    if (this.templates.has(name)) return this.templates.get(name);
    if (this.loading.has(name)) return null;
    this.loading.add(name);
    this.loader.load(`/models/${name}.glb`, gltf => {
      const root = gltf.scene;
      // normalise: longest side = 1, centred
      const box = new THREE.Box3().setFromObject(root); const size = new THREE.Vector3(); box.getSize(size); const c = new THREE.Vector3(); box.getCenter(c);
      const s = 1 / Math.max(size.x, size.y, size.z, 1e-6);
      root.position.sub(c).multiplyScalar(s); root.scale.setScalar(s);
      const wrapper = new THREE.Group(); wrapper.add(root);
      root.traverse(o => { if (o.isMesh) { o.frustumCulled = false; if (o.material) { o.material.side = THREE.FrontSide; o.material.needsUpdate = true; } } });
      this.templates.set(name, wrapper);
    }, undefined, () => { this.templates.set(name, false); });
    return null;
  }
  satVariant(s) {
    const g = s.g.map(k => this.sats.groups[k]);
    if (/ R\/B/.test(s.n) || / DEB/.test(s.n)) return 'sat_rocketbody';
    if (g.includes('stations') && /ISS|TIANHE|CSS|MENGTIAN|WENTIAN|ZARYA|NAUKA|PROGRESS|SOYUZ|DRAGON|CYGNUS/.test(s.n)) return 'sat_station';
    if (g.includes('starlink') || g.includes('oneweb') || g.includes('iridium-NEXT')) return 'sat_starlink';
    if (g.includes('gps-ops') || g.includes('glo-ops') || g.includes('galileo') || g.includes('beidou') || g.includes('gnss') || g.includes('sbas')) return 'sat_gps';
    if (/HST|HUBBLE|TESS|CHANDRA|XMM|SWIFT|FERMI|GAIA|WISE|KEPLER|IRIS|SDO|INTEGRAL|CHEOPS/.test(s.n)) return 'sat_telescope';
    if (g.includes('weather') || g.includes('noaa') || g.includes('goes') || g.includes('resource') || g.includes('planet') || g.includes('spire') || g.includes('sarsat') || g.includes('science') || g.includes('geodetic')) return 'sat_weather';
    if (g.includes('cubesat') || g.includes('amateur') || g.includes('satnogs') || g.includes('education')) return 'sat_cubesat';
    return 'sat_comms';
  }
  _place(key, name, sizeKm, worldPos, spin) {
    let inst = this.instances.get(key);
    if (!inst) {
      const t = this._template(name); if (!t) return false;
      inst = { mesh: t.clone(true), spin };
      this.group.add(inst.mesh); this.instances.set(key, inst);
    }
    inst.used = true;
    const cam = this.u.rig.pos;
    inst.mesh.position.set(worldPos[0] - cam[0], worldPos[1] - cam[1], worldPos[2] - cam[2]);
    inst.mesh.scale.setScalar(sizeKm);
    inst.mesh.rotation.y += spin * 0.0005; inst.mesh.visible = true;
    return true;
  }
  update(ctx) {
    for (const inst of this.instances.values()) inst.used = false;
    this.group.visible = this.visible;
    // light from the Sun
    const cam = ctx.camPos; const d = Math.hypot(cam[0], cam[1], cam[2]) || 1;
    this.sun.position.set(-cam[0] / d, -cam[1] / d, -cam[2] / d).multiplyScalar(10); this.sun.target.position.set(0, 0, 0);
    if (this.visible) {
      // satellites within 25 km, plus the focused one
      const S = this.sats;
      if (S.points.visible) {
        const e = S.solar.earth.pos; const cx = cam[0] - e[0], cy = cam[1] - e[1], cz = cam[2] - e[2];
        let shown = 0;
        for (let i = 0; i < S.count && shown < 24; i++) {
          if (S.alpha[i] < 0.5 && !S.hideMarker.has(i)) continue;
          const dx = S.posD[3 * i] - cx, dy = S.posD[3 * i + 1] - cy, dz = S.posD[3 * i + 2] - cz;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          let v = S.variant(i); const size = SAT_SIZES[v];
          if (this.templates.get(v) === false) v = S.genericVariant(i); // family model unavailable: use the class model at the family's size
          if (size / dist * ctx.pxPerRad < 1.5) continue; // sub-pixel: keep the marker
          // a space station is catalogued as many NORAD objects (modules, docked craft): one model for the complex, the rest are parts
          if (v === 'sat_station' && S.sats[i].id !== 25544 && S.sats[i].id !== 48274) {
            let nearPrimary = false;
            for (const pid of [25544, 48274]) { const p = S.byId.get(pid); if (p !== undefined && Math.hypot(S.posD[3 * p] - S.posD[3 * i], S.posD[3 * p + 1] - S.posD[3 * i + 1], S.posD[3 * p + 2] - S.posD[3 * i + 2]) < 1.0) nearPrimary = true; }
            if (nearPrimary) { S.hideMarker.add(i); continue; }
          }
          if (this._place('sat' + i, v, size, [e[0] + S.posD[3 * i], e[1] + S.posD[3 * i + 1], e[2] + S.posD[3 * i + 2]], 1 + (i % 7))) { S.hideMarker.add(i); shown++; }
          else if (this.templates.get(v) === undefined) this._template(v); // kick off loading
        }
      }
      // focused / selected asteroid or comet
      const f = this.u.rig.focus;
      if (f && (f.kind === 'asteroid' || f.kind === 'comet')) {
        f.getPos(ctx.jd, this._tmp);
        const dist = this.u.rig.distanceTo(this._tmp);
        const sizeKm = f.radius * 2;
        if (sizeKm / dist * ctx.pxPerRad > 1.5) {
          const idx = f.ref.index;
          const name = f.kind === 'comet' ? 'comet_nucleus' : AST_VARIANTS[idx % AST_VARIANTS.length];
          this._place(f.kind + idx, name, sizeKm, this._tmp, 0.4);
        }
      }
    }
    for (const [key, inst] of this.instances) if (!inst.used) { inst.mesh.visible = false; if (key.startsWith('sat')) this.sats.hideMarker.delete(+key.slice(3)); }
  }
  pick() { return null; }
  labels() { }
  searchEntries() { return []; }
}
