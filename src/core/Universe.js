import * as THREE from 'three';
import { CameraRig } from './CameraRig.js';
import { SimTime } from './Time.js';
import { LabelManager } from './Labels.js';
import { UI } from '../ui/UI.js';
import { StarLayer } from '../layers/Stars.js';
import { SolarSystemLayer } from '../layers/SolarSystem.js';
import { SmallBodyLayer } from '../layers/SmallBodies.js';
import { ExoplanetLayer } from '../layers/Exoplanets.js';
import { DeepSkyLayer } from '../layers/DeepSky.js';
import { GalaxyLayer } from '../layers/Galaxies2MRS.js';
import { MilkyWayLayer } from '../layers/MilkyWay.js';
import { SatelliteLayer } from '../layers/Satellites.js';
import { SpacecraftLayer } from '../layers/Spacecraft.js';
import { ConstellationLayer } from '../layers/Constellations.js';
import { GalaxyModelLayer } from '../layers/GalaxyModels.js';
import { NebulaVolumeLayer } from '../layers/NebulaVolumes.js';
import { ModelLayer } from '../layers/Models.js';
import { GaiaStarLayer } from '../layers/GaiaStars.js';
import { GaiaFieldLayer } from '../layers/GaiaField.js';
import { QuasarLayer } from '../layers/Quasars.js';
import { BlackHoleLayer } from '../layers/BlackHoles.js';
import { KM_PER_AU, KM_PER_PC, KM_PER_MPC, KM_PER_LY, DEG } from '../astro/units.js';

export class Universe {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, logarithmicDepthBuffer: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, 1, 1e-3, 1e24);
    this.rig = new CameraRig(this.camera, canvas);
    this.time = new SimTime();
    this.labels = new LabelManager(document.getElementById('labels'), this.camera);
    this.labelDensity = 0.6;
    this.layers = {};
    this.selection = null;
    this.ui = new UI(this);
    this._resize();
    window.addEventListener('resize', () => this._resize());
    this._bindPicking();
    this._last = performance.now();
    this.ctx = { camPos: this.rig.pos, jd: this.time.jd, time: this.time, rig: this.rig, pixelRatio: this.renderer.getPixelRatio(), pxPerRad: 1000, forward: new THREE.Vector3(), cosHalfFov: 0.5, labelDensity: 0.6 };
  }
  _resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.width = w; this.height = h;
  }
  init(data) {
    const L = this.layers;
    L.asteroids = new SmallBodyLayer(this, data.asteroids, data.asteroidsMeta, data.comets);
    L.solar = new SolarSystemLayer(this, data.moons, L.asteroids);
    L.stars = new StarLayer(this, data.stars, data.starsMeta);
    L.exo = new ExoplanetLayer(this, data.exoplanets, L.stars);
    L.dso = new DeepSkyLayer(this, data.dso);
    L.galaxies = new GalaxyLayer(this, data.mrs, data.mrsIds, L.dso);
    L.gmodels = new GalaxyModelLayer(this, L.dso); L.gmodels.mrs = L.galaxies;
    L.volumes = new NebulaVolumeLayer(this, L.dso);
    L.mw = new MilkyWayLayer(this);
    L.sats = new SatelliteLayer(this, data.satellites, L.solar);
    L.craft = new SpacecraftLayer(this, data.spacecraft, L.solar);
    L.con = new ConstellationLayer(this, data.constellations, L.stars);
    L.models = new ModelLayer(this, L.sats, L.asteroids);
    L.mcstars = new GaiaStarLayer(this, data.mcstars, data.mcstarsIds);
    L.gaia = new GaiaFieldLayer(this, data.gaia, data.gaiaIds);
    L.quasars = new QuasarLayer(this, data.quasars, data.quasarNames, data.quasarSources);
    L.bh = new BlackHoleLayer(this, data.blackholes, L.dso);
    this.ui.buildSearchIndex();
    // opening view: Earth, sunlit side
    L.solar.computePositions(this.time.jd);
    const earth = L.solar.describe(L.solar.earth);
    const e = L.solar.earth.pos;
    const toSun = Math.atan2(-e[1], -e[0]);
    this.rig.focus = earth; this.rig.dist = 42000; this.rig.yaw = toSun + 0.5; this.rig.pitch = 0.32; this.rig.mode = 'orbit';
    this.rig.update(0, this.time.jd);
    this.select(earth, false);
  }
  setLayerVisible(key, v) {
    const L = this.layers;
    if (key === 'orbits') { L.solar.showOrbits = v; return; }
    if (key === 'comets') { L.asteroids.cometsVisible = v; return; }
    if (L[key]) L[key].visible = v;
  }

  // ---- selection & travel ----
  resolveRef(ref) {
    const L = this.layers;
    if (!ref) return null;
    if (ref.special) return null;
    switch (ref.layer) {
      case 'stars': if (ref.proper !== undefined) { for (const [i, n] of L.stars.proper) if (n === ref.proper) return L.stars.describe(i); return null; } return L.stars.describe(ref.index);
      case 'solar': return L.solar.descriptorById(ref.id);
      case 'asteroids': return L.asteroids.describe(ref.index);
      case 'comets': return L.asteroids.describeComet(ref.index);
      case 'exo': return ref.name ? L.exo.descriptorByName(ref.name) : null;
      case 'dso': if (ref.name !== undefined) { const i = L.dso.byName.get(ref.name.toUpperCase().replace(/\s+/g, '').replace(/^([A-Z]+)0+(\d)/, '$1$2')); return i === undefined ? L.dso.describe(L.dso.items.findIndex(x => x.n === ref.name || (x.cn && x.cn.split(',').map(s => s.trim()).includes(ref.name)))) : L.dso.describe(i); } return L.dso.describe(ref.index);
      case 'galaxies': return L.galaxies.describe(ref.index);
      case 'sats': if (ref.norad !== undefined) { const i = L.sats.byId.get(ref.norad); return i === undefined ? null : L.sats.describe(i); } return L.sats.describe(ref.index);
      case 'craft': if (ref.name !== undefined) { const i = L.craft.items.findIndex(s => s.n === ref.name); return i < 0 ? null : L.craft.describe(i); } return L.craft.describe(ref.index);
      case 'con': return L.con.describe(ref.id);
      case 'gmodels': return L.gmodels.describeByRef(ref);
      case 'mcstars': return L.mcstars.describe(ref.index);
      case 'gaia': return L.gaia.describe(ref.index);
      case 'quasars': if (ref.name !== undefined) { const i = L.quasars.byName(ref.name); return i < 0 ? null : L.quasars.describe(i); } return L.quasars.describe(ref.index);
      case 'bh': if (ref.name !== undefined) { const i = L.bh.byName(ref.name); return i < 0 ? null : L.bh.describe(i); } return L.bh.describe(ref.index);
    }
    return null;
  }
  travel(ref) {
    if (ref.special === 'solarsystem') { const d = this.layers.solar.describe(this.layers.solar.sun); this.select(d, false); this.rig.goTo(d, 45 * KM_PER_AU); return; }
    if (ref.special === 'milkyway') { const d = this.resolveRef({ layer: 'dso', name: 'Sagittarius A*' }); if (d) { this.select(d, false); this.rig.goTo(d, 32000 * KM_PER_PC); } return; }
    if (ref.special === 'cosmos') { const d = this.layers.solar.describe(this.layers.solar.sun); this.select(d, false); this.rig.goTo(d, 32e9 * KM_PER_LY); return; }
    if (ref.special === 'universe') { const d = this.resolveRef({ layer: 'dso', name: 'Virgo Cluster' }); if (d) { this.select(d, false); this.rig.goTo(d, 120 * KM_PER_MPC); } return; }
    const desc = this.resolveRef(ref);
    if (!desc) return;
    this.select(desc, false);
    this.rig.goTo(desc);
  }
  select(desc, showPanel = true) {
    this.selection = desc;
    this.ui.showInfo(desc);
    this.labels.selectedKey = desc ? LabelManager.key(desc.ref) : null;
    this.layers.asteroids.showOrbitFor(desc);
    this.layers.sats.showTrack(desc);
    this.layers.craft.showTrack(desc);
  }

  // ---- picking ----
  _bindPicking() {
    const c = this.canvas;
    let lastClick = 0, downPos = null;
    c.addEventListener('pointerdown', e => { downPos = [e.clientX, e.clientY]; });
    c.addEventListener('pointerup', e => {
      if (!downPos || e.button !== 0) return;
      const moved = Math.hypot(e.clientX - downPos[0], e.clientY - downPos[1]);
      downPos = null;
      if (moved > 4) return;
      const now = performance.now();
      const hit = this.pick(e.clientX, e.clientY);
      if (now - lastClick < 320) { // double click
        const target = hit || this.selection;
        if (target) { this.select(target); this.rig.goTo(target); }
        lastClick = 0; return;
      }
      lastClick = now;
      if (hit) this.select(hit);
    });
    // clicking a label selects too
    document.getElementById('labels').style.pointerEvents = 'none';
  }
  pick(clientX, clientY) {
    const ndc = new THREE.Vector3((clientX / this.width) * 2 - 1, -(clientY / this.height) * 2 + 1, 0.5);
    const ray = ndc.unproject(this.camera).normalize();
    const pxPerRad = this.ctx.pxPerRad;
    const cam = this.rig.pos;
    const L = this.layers;
    let best = null;
    const consider = r => { if (r && (!best || r.sepPx < best.sepPx)) best = r; };
    const s = L.stars.pick(ray, cam, pxPerRad);
    if (s && s.sunHit) consider({ sepPx: s.sepPx, desc: L.solar.describe(L.solar.sun) }); else consider(s);
    consider(L.solar.pick(ray, cam, pxPerRad));
    consider(L.exo.pick(ray, cam, pxPerRad));
    consider(L.dso.pick(ray, cam, pxPerRad));
    consider(L.craft.pick(ray, cam, pxPerRad));
    consider(L.sats.pick(ray, cam, pxPerRad));
    consider(L.galaxies.pick(ray, cam, pxPerRad));
    consider(L.gmodels.pick(ray, cam, pxPerRad));
    consider(L.mcstars.pick(ray, cam, pxPerRad));
    consider(L.gaia.pick(ray, cam, pxPerRad));
    consider(L.bh.pick(ray, cam, pxPerRad));
    consider(L.quasars.pick(ray, cam, pxPerRad));
    // asteroids last: expensive (CPU Kepler for 36k bodies)
    if (!best || best.sepPx > 4) consider(L.asteroids.pick(ray, cam, pxPerRad, this.time.jd));
    return best ? best.desc : null;
  }

  // ---- frame loop ----
  start() { const loop = () => { this.frame(); requestAnimationFrame(loop); }; requestAnimationFrame(loop); }
  frame() {
    this._frames = (this._frames || 0) + 1;
    const now = performance.now();
    const realDt = (now - this._last) / 1000; this._last = now;
    const dt = Math.min(0.1, realDt);
    this.time.update(Math.min(realDt, 5));
    const L = this.layers;
    // positions must be current before the rig follows its focus
    L.solar.computePositions(this.time.jd);
    let nearest = Math.min(L.solar.nearestSurface(this.rig.pos), L.stars.nearestSurface(this.rig.pos), L.exo.nearestSurface(this.rig.pos), L.sats.nearestSurface(this.rig.pos), L.asteroids.nearestSurface(this.rig.pos), L.gaia.nearestSurface(this.rig.pos), L.bh.nearestSurface(this.rig.pos));
    const f = this.rig.focus;
    if (f) {
      // the object you are visiting sets the pace too: outside it, the gap to its edge; inside it (a nebula, a galaxy), a fraction of its size
      f.getPos(this.time.jd, this._fp || (this._fp = [0, 0, 0]));
      const d = this.rig.distanceTo(this._fp);
      nearest = Math.min(nearest, Math.max(Math.abs(d - f.radius), f.radius * 0.06));
    }
    this.rig.nearestSurface = Math.max(1e-3, nearest);
    this.rig.update(dt, this.time.jd);
    const ctx = this.ctx;
    ctx.jd = this.time.jd; ctx.pixelRatio = this.renderer.getPixelRatio(); ctx.labelDensity = this.labelDensity;
    ctx.pxPerRad = (this.height / 2) / Math.tan(this.camera.fov * DEG / 2);
    ctx.forward.set(0, 0, -1).applyQuaternion(this.camera.quaternion);
    ctx.cosHalfFov = Math.cos(Math.min(1.4, (this.camera.fov * DEG / 2) * Math.hypot(1, this.camera.aspect) + 0.05));
    for (const k of ['mw', 'galaxies', 'dso', 'gmodels', 'volumes', 'stars', 'con', 'asteroids', 'solar', 'exo', 'sats', 'craft', 'models', 'mcstars', 'gaia', 'quasars', 'bh']) L[k].update(ctx);
    // labels
    const items = [];
    L.solar.labels(ctx, items); L.stars.labels(ctx, items, Math.round(6 + 30 * this.labelDensity)); L.dso.labels(ctx, items, Math.round(4 + 26 * this.labelDensity));
    L.exo.labels(ctx, items); L.craft.labels(ctx, items); L.sats.labels(ctx, items); L.asteroids.labels(ctx, items); L.con.labels(ctx, items); L.mw.labels(ctx, items);
    const occluders = L.solar.bodies.filter(b => b.screenPx > 25).map(b => ({ x: b.pos[0] - this.rig.pos[0], y: b.pos[1] - this.rig.pos[1], z: b.pos[2] - this.rig.pos[2], r: b.radius }));
    if (this.selection) { const p = this.selection.getPos(this.time.jd, [0, 0, 0]); items.push({ text: this.selection.name, x: p[0] - this.rig.pos[0], y: p[1] - this.rig.pos[1], z: p[2] - this.rig.pos[2], cls: 'selected', prio: 5000, ref: this.selection.ref, offsetPx: Math.min(60, this.selection.radius / Math.max(1e-9, this.rig.distanceTo(p)) * ctx.pxPerRad) }); }
    this.labels.render(items, this.width, this.height, occluders, ctx.pxPerRad);
    this.ui.updateHUD(ctx);
    this.renderer.render(this.scene, this.camera);
  }
}
