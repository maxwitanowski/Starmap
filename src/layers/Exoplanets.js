import * as THREE from 'three';
import { KM_PER_AU, KM_PER_PC, EARTH_RADIUS_KM, JD_J2000, DEG, fmtNum, fmtDist, fmtTime } from '../astro/units.js';
import { planetMaterial, markerMaterial, exoplanetMaterial, atmosphereMaterial } from '../render/materials.js';
import { colorFromTeff } from '../astro/starphys.js';
import { elementsToPosition, orbitPath } from '../astro/orbits.js';

const NEAR_PC = 0.03; // systems within this distance get rendered in detail
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3(), _q = new THREE.Quaternion(), _m = new THREE.Matrix4();

export class ExoplanetLayer {
  constructor(universe, systems, stars) {
    this.u = universe; this.systems = systems; this.stars = stars; this.visible = true;
    this.hostPos = new Float64Array(systems.length * 3);
    systems.forEach((s, k) => {
      stars.worldPos(s.s, this._tmp = [0, 0, 0]);
      this.hostPos[3 * k] = this._tmp[0]; this.hostPos[3 * k + 1] = this._tmp[1]; this.hostPos[3 * k + 2] = this._tmp[2];
      stars.exoHost.set(s.s, s);
      s.k = k;
      for (const p of s.p) {
        // fill gaps: semi-major axis from Kepler's third law, radius from mass
        if (!Number.isFinite(p.a) && Number.isFinite(p.per) && Number.isFinite(s.smass)) p.a = Math.cbrt(s.smass * Math.pow(p.per / 365.25, 2));
        if (!Number.isFinite(p.per) && Number.isFinite(p.a) && Number.isFinite(s.smass)) p.per = Math.sqrt(Math.pow(p.a, 3) / s.smass) * 365.25;
        if (!Number.isFinite(p.rade)) p.rade = Number.isFinite(p.masse) ? (p.masse < 2 ? Math.pow(p.masse, 0.27) : p.masse < 130 ? Math.pow(p.masse, 0.55) : 11.5 * Math.pow(p.masse / 318, -0.04)) : 2;
        if (!Number.isFinite(p.e)) p.e = 0;
        p.radiusKm = p.rade * EARTH_RADIUS_KM;
        p.color = planetColor(p);
      }
    });
    // host markers (small green rings)
    const n = systems.length;
    this.hostRel = new Float32Array(n * 3); this.hostAlpha = new Float32Array(n);
    const col = new Float32Array(n * 3), size = new Float32Array(n).fill(5);
    for (let i = 0; i < n; i++) { col[3 * i] = 0.55; col[3 * i + 1] = 1.0; col[3 * i + 2] = 0.75; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.hostRel, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.hostAlpha, 1)); g.setAttribute('size', new THREE.BufferAttribute(size, 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.hostMarkers = new THREE.Points(g, markerMaterial()); this.hostMarkers.frustumCulled = false; this.hostMarkers.renderOrder = 19;
    universe.scene.add(this.hostMarkers);
    // pool for planets of the nearby system(s)
    this.sphereGeo = new THREE.SphereGeometry(1, 48, 32);
    this.pool = [];
    for (let i = 0; i < 12; i++) {
      const mesh = new THREE.Mesh(this.sphereGeo, exoplanetMaterial()); mesh.visible = false; mesh.frustumCulled = false; mesh.renderOrder = 10;
      const atm = new THREE.Mesh(this.sphereGeo, atmosphereMaterial('#88aaff', 0.8)); atm.renderOrder = 12; atm.frustumCulled = false; mesh.add(atm);
      const orbit = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0x7fffb0, transparent: true, opacity: 0.35, depthWrite: false })); orbit.visible = false; orbit.frustumCulled = false;
      universe.scene.add(mesh); universe.scene.add(orbit);
      this.pool.push({ mesh, orbit, sys: null, p: null, pos: new Float64Array(3) });
    }
    const pm = new THREE.BufferGeometry();
    this.pMarkerRel = new Float32Array(12 * 3); this.pMarkerAlpha = new Float32Array(12); const pcol = new Float32Array(12 * 3); this.pMarkerCol = pcol;
    pm.setAttribute('position', new THREE.BufferAttribute(this.pMarkerRel, 3)); pm.setAttribute('color', new THREE.BufferAttribute(pcol, 3)); pm.setAttribute('alpha', new THREE.BufferAttribute(this.pMarkerAlpha, 1)); pm.setAttribute('size', new THREE.BufferAttribute(new Float32Array(12).fill(7), 1));
    pm.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.pMarkers = new THREE.Points(pm, markerMaterial()); this.pMarkers.frustumCulled = false; this.pMarkers.renderOrder = 20; universe.scene.add(this.pMarkers);
    this.nearSystems = [];
    this._frame = 0;
  }

  // Orbit frame for a planet around its host: Z = orbit normal, X = periapsis direction
  _orbitBasis(k, p, out) {
    const los = _v.set(this.hostPos[3 * k], this.hostPos[3 * k + 1], this.hostPos[3 * k + 2]).normalize();
    const north = _v2.set(0, 0, 1).sub(los.clone().multiplyScalar(los.z)).normalize();
    const inc = (Number.isFinite(p.inc) ? p.inc : 60) * DEG;
    const normal = _v3.copy(los).multiplyScalar(Math.cos(inc)).addScaledVector(north, Math.sin(inc)).normalize();
    const east = new THREE.Vector3().crossVectors(north, los).normalize();
    // periapsis direction: rotate east about normal by argument of periastron
    const w = (Number.isFinite(p.w) ? p.w : 0) * DEG;
    const xAxis = east.clone().applyQuaternion(_q.setFromAxisAngle(normal, w));
    xAxis.sub(normal.clone().multiplyScalar(xAxis.dot(normal))).normalize();
    const yAxis = new THREE.Vector3().crossVectors(normal, xAxis);
    out.makeBasis(xAxis, yAxis, normal);
    return out;
  }
  planetPos(k, p, jd, out) {
    const s = this.systems[k];
    const a = (Number.isFinite(p.a) ? p.a : 0.1) * KM_PER_AU;
    const per = Number.isFinite(p.per) ? p.per : 365;
    const phase = (s.p.indexOf(p) * 2.399963) % (2 * Math.PI); // arbitrary but deterministic
    const M = phase + 2 * Math.PI * ((jd - JD_J2000) / per);
    const local = elementsToPosition(a, Math.min(p.e, 0.95), 0, 0, 0, M, [0, 0, 0]);
    const v = new THREE.Vector3(local[0], local[1], local[2]).applyMatrix4(this._orbitBasis(k, p, _m));
    out[0] = this.hostPos[3 * k] + v.x; out[1] = this.hostPos[3 * k + 1] + v.y; out[2] = this.hostPos[3 * k + 2] + v.z;
    return out;
  }

  update(ctx) {
    const cam = ctx.camPos; const n = this.systems.length;
    this.hostMarkers.visible = this.visible; this.pMarkers.visible = this.visible;
    if (!this.visible) { for (const s of this.pool) { s.mesh.visible = s.orbit.visible = false; } return; }
    // host markers & nearby detection
    const near = [];
    const limit = NEAR_PC * KM_PER_PC;
    for (let k = 0; k < n; k++) {
      const x = this.hostPos[3 * k] - cam[0], y = this.hostPos[3 * k + 1] - cam[1], z = this.hostPos[3 * k + 2] - cam[2];
      this.hostRel[3 * k] = x; this.hostRel[3 * k + 1] = y; this.hostRel[3 * k + 2] = z;
      const d = Math.sqrt(x * x + y * y + z * z);
      // ring fades in when within 300 pc, out when the star disc gets large or the camera is inside the system
      // subtle rings only in the solar neighbourhood so they don't read as "green stars"
      const a = THREE.MathUtils.clamp((80 * KM_PER_PC - d) / (40 * KM_PER_PC), 0, 1) * THREE.MathUtils.clamp((d - 0.001 * KM_PER_PC) / (0.003 * KM_PER_PC), 0, 1) * (0.1 + 0.3 * ctx.labelDensity);
      this.hostAlpha[k] = a;
      if (d < limit) near.push(k);
    }
    this.hostMarkers.geometry.attributes.position.needsUpdate = true; this.hostMarkers.geometry.attributes.alpha.needsUpdate = true;
    this.hostMarkers.material.uniforms.uPixelRatio.value = ctx.pixelRatio;
    // assign pool
    const wanted = [];
    for (const k of near) for (const p of this.systems[k].p) wanted.push([k, p]);
    this.nearSystems = near;
    const sunRel = _v.set(-cam[0], -cam[1], -cam[2]);
    for (let i = 0; i < this.pool.length; i++) {
      const slot = this.pool[i];
      const w = wanted[i];
      if (!w) { slot.mesh.visible = slot.orbit.visible = false; slot.p = null; this.pMarkerAlpha[i] = 0; continue; }
      const [k, p] = w;
      if (slot.p !== p) {
        slot.p = p; slot.k = k;
        const s = this.systems[k];
        const u = slot.mesh.material.uniforms;
        u.type.value = planetType(p); u.teq.value = Number.isFinite(p.eqt) ? p.eqt : 250; u.seed.value = (k * 7 + s.p.indexOf(p) * 13) % 97;
        u.locked.value = Number.isFinite(p.per) && p.per < 12 ? 1 : 0;
        const mi = MAPPED[p.n]; u.hotspot.value = mi ? mi.hotspot * DEG : 0; u.cloudSide.value = mi ? mi.cloud : 0;
        // ring systems (J1407b)
        if (p.rings && !slot.ring) { const rg = new THREE.RingGeometry(p.rings.inner, p.rings.outer, 192, 1); slot.ring = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: 0xc8b8a0, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false })); slot.ring.rotation.x = -Math.PI / 2 + 0.2; slot.mesh.add(slot.ring); }
        if (slot.ring) { slot.ring.visible = !!p.rings; if (p.rings) slot.ring.scale.setScalar(1 / p.radiusKm); }
        const [r, g, b] = colorFromTeff(Number.isFinite(s.teff) ? s.teff : 5500); u.starColor.value.setRGB(0.6 + 0.4 * r, 0.6 + 0.4 * g, 0.6 + 0.4 * b);
        const atm = slot.mesh.children[0]; const t = planetType(p);
        atm.visible = t >= 1 && t <= 4; atm.scale.setScalar(t >= 3 ? 1.04 : 1.025);
        atm.material.uniforms.color.value.set(t >= 3.5 ? (t > 4.5 ? '#ff9a60' : '#e0c8a0') : t >= 2.5 ? '#7fa8ff' : '#6fa8ff');
        slot.mesh.scale.setScalar(p.radiusKm);
        const a = (Number.isFinite(p.a) ? p.a : 0.1) * KM_PER_AU;
        const pts = orbitPath(a, Math.min(p.e, 0.95), 0, 0, 0, 256, false);
        const basis = this._orbitBasis(k, p, new THREE.Matrix4());
        const vv = new THREE.Vector3();
        for (let j = 0; j < pts.length; j += 3) { vv.set(pts[j], pts[j + 1], pts[j + 2]).applyMatrix4(basis); pts[j] = vv.x; pts[j + 1] = vv.y; pts[j + 2] = vv.z; }
        slot.orbit.geometry.dispose(); slot.orbit.geometry = new THREE.BufferGeometry(); slot.orbit.geometry.setAttribute('position', new THREE.BufferAttribute(pts, 3)); slot.orbit.geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
        const c = new THREE.Color(p.color); pcol_set(this.pMarkerCol, i, c);
      }
      this.planetPos(k, p, ctx.jd, slot.pos);
      const rx = slot.pos[0] - cam[0], ry = slot.pos[1] - cam[1], rz = slot.pos[2] - cam[2];
      const d = Math.sqrt(rx * rx + ry * ry + rz * rz);
      const px = p.radiusKm / d * ctx.pxPerRad;
      slot.mesh.visible = px > 0.4; slot.mesh.position.set(rx, ry, rz);
      // light comes from the host star, not the Sun
      slot.mesh.material.uniforms.starPos.value.set(this.hostPos[3 * k] - cam[0], this.hostPos[3 * k + 1] - cam[1], this.hostPos[3 * k + 2] - cam[2]);
      slot.mesh.material.uniforms.spin.value = (ctx.jd % 1) * 6.283 * (slot.mesh.material.uniforms.locked.value > 0.5 ? 0.0 : 1.0);
      slot.mesh.children[0].material.uniforms.sunPos.value.copy(slot.mesh.material.uniforms.starPos.value);
      slot.orbit.visible = true; slot.orbit.position.set(this.hostPos[3 * k] - cam[0], this.hostPos[3 * k + 1] - cam[1], this.hostPos[3 * k + 2] - cam[2]);
      this.pMarkerRel[3 * i] = rx; this.pMarkerRel[3 * i + 1] = ry; this.pMarkerRel[3 * i + 2] = rz;
      this.pMarkerAlpha[i] = THREE.MathUtils.clamp((4 - px) / 3, 0, 1);
    }
    this.pMarkers.geometry.attributes.position.needsUpdate = true; this.pMarkers.geometry.attributes.alpha.needsUpdate = true; this.pMarkers.geometry.attributes.color.needsUpdate = true;
    this.pMarkers.material.uniforms.uPixelRatio.value = ctx.pixelRatio;
  }
  nearestSurface(camPos) {
    let best = Infinity;
    for (const s of this.pool) if (s.p) { const d = Math.hypot(s.pos[0] - camPos[0], s.pos[1] - camPos[1], s.pos[2] - camPos[2]) - s.p.radiusKm; if (d < best) best = d; }
    return best;
  }
  pick(ray, camPos, pxPerRad) {
    if (!this.visible) return null;
    let best = null, bestSep = 14;
    for (const s of this.pool) {
      if (!s.p) continue;
      const x = s.pos[0] - camPos[0], y = s.pos[1] - camPos[1], z = s.pos[2] - camPos[2];
      const d = Math.sqrt(x * x + y * y + z * z); if (d < s.p.radiusKm) continue;
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.99) continue;
      const sep = Math.max(0, Math.acos(Math.min(1, dot)) * pxPerRad - s.p.radiusKm / d * pxPerRad);
      if (sep < bestSep) { bestSep = sep; best = s; }
    }
    return best ? { sepPx: bestSep, desc: this.describe(best.k, best.p) } : null;
  }
  describe(k, p) {
    const self = this, s = this.systems[k];
    const rows = [['Host star', `${s.host}${s.sp ? ' (' + s.sp.trim() + ')' : ''}`], ['System', `${s.nstars} star${s.nstars > 1 ? 's' : ''}, ${s.p.length} known planet${s.p.length > 1 ? 's' : ''}`]];
    rows.push(['Distance from Sun', `${fmtNum(this.stars.dist[s.s] * 3.26156, 3)} ly`]);
    rows.push(['Radius', `${fmtNum(p.rade, 3)} Earth radii (${fmtDist(p.radiusKm)})${Number.isFinite(p.masse) && !Number.isFinite(p.rade) ? ' — estimated from mass' : ''}`]);
    if (Number.isFinite(p.masse)) rows.push(['Mass', `${fmtNum(p.masse, 3)} Earth masses (${fmtNum(p.masse / 317.8, 3)} Jupiter)`]);
    if (Number.isFinite(p.dens)) rows.push(['Density', `${fmtNum(p.dens, 3)} g/cm³`]);
    if (Number.isFinite(p.per)) rows.push(['Orbital period', fmtTime(p.per * 86400)]);
    if (Number.isFinite(p.a)) rows.push(['Semi-major axis', `${fmtNum(p.a, 4)} AU`]);
    if (p.e) rows.push(['Eccentricity', fmtNum(p.e, 3)]);
    if (Number.isFinite(p.inc)) rows.push(['Inclination (to sky plane)', `${fmtNum(p.inc, 2)}°`]);
    if (Number.isFinite(p.eqt)) rows.push(['Equilibrium temperature', `${fmtNum(p.eqt, 4)} K (${fmtNum(p.eqt - 273.15, 3)} °C)`]);
    rows.push(['Discovered', `${p.yr || '?'} · ${p.m}${p.fac ? ' · ' + p.fac : ''}`]);
    if (Number.isFinite(s.teff)) rows.push(['Star temperature', `${fmtNum(s.teff, 4)} K`]);
    if (Number.isFinite(s.srad)) rows.push(['Star radius', `${fmtNum(s.srad, 3)} × Sun`]);
    if (Number.isFinite(s.smass)) rows.push(['Star mass', `${fmtNum(s.smass, 3)} × Sun`]);
    const cls = p.rade < 1.25 ? 'Earth-sized' : p.rade < 2 ? 'super-Earth' : p.rade < 6 ? 'Neptune-like' : 'gas giant';
    if (p.cand) rows.unshift(['Status', p.cand]);
    const mapInfo = MAPPED[p.n];
    if (mapInfo) rows.push(['Measured brightness map', mapInfo.note]);
    if (p.rings) rows.push(['Ring system', `inner ${fmtDist(p.rings.inner)}, outer ${fmtDist(p.rings.outer)} (inferred from the 2007 eclipse light curve)`]);
    const temp = Number.isFinite(p.eqt) ? (p.eqt > 1000 ? ', scorching hot' : p.eqt > 400 ? ', hot' : p.eqt > 200 ? ', temperate' : ', frigid') : '';
    return { kind: 'exoplanet', kindLabel: p.cand ? 'Exoplanet candidate' : 'Exoplanet', name: p.n, sub: `${cls} ${p.cand ? 'candidate ' : ''}orbiting ${s.host}`, radius: p.radiusKm, rows,
      desc: (p.cand ? `Candidate, not yet confirmed: ${p.cand}. ` : '') + (mapInfo ? mapInfo.desc + ' ' : '') + `A ${cls} exoplanet${temp}, ${p.yr ? 'discovered in ' + p.yr : 'detected'} by the ${p.m.toLowerCase()} method. Orbit orientation uses the measured inclination where available; the longitude of the node and the orbital phase are not known, so the position along the orbit is illustrative. Colour is a guess from temperature and size.`,
      source: p.cand ? (p.fac === 'TESS' ? 'NASA Exoplanet Archive, TESS Objects of Interest (TOI) table.' : p.fac === 'Kepler' ? 'NASA Exoplanet Archive, Kepler cumulative KOI table; distance estimated from Kepler magnitude and stellar parameters.' : 'Kenworthy & Mamajek 2015 (ApJ 800, 126); SuperWASP light curve of V1400 Cen.') : 'NASA Exoplanet Archive, Planetary Systems Composite Parameters (pscomppars).', ref: { layer: 'exo', k, name: p.n },
      getPos: (jd, out) => self.planetPos(k, p, jd, out), lightPos: [this.hostPos[3 * k], this.hostPos[3 * k + 1], this.hostPos[3 * k + 2]] };
  }
  descriptorByName(name) { for (const s of this.systems) for (const p of s.p) if (p.n === name) return this.describe(s.k, p); return null; }
  labels(ctx, out) {
    if (!this.visible) return;
    for (let i = 0; i < this.pool.length; i++) {
      const s = this.pool[i]; if (!s.p) continue;
      out.push({ text: s.p.n, x: this.pMarkerRel[3 * i], y: this.pMarkerRel[3 * i + 1], z: this.pMarkerRel[3 * i + 2], cls: 'exo', prio: 70, ref: { layer: 'exo', k: s.k, name: s.p.n } });
    }
  }
  searchEntries() { const out = []; for (const s of this.systems) for (const p of s.p) out.push({ name: p.n, kind: 'exoplanet', ref: { layer: 'exo', k: s.k, name: p.n } }); return out; }
}
// physical class from radius, density and temperature (used for the procedural appearance)
function planetType(p) {
  const T = Number.isFinite(p.eqt) ? p.eqt : 250;
  const dens = Number.isFinite(p.dens) ? p.dens : (p.rade > 6 ? 1 : p.rade > 2 ? 2 : 5);
  if (p.rade > 6 || (p.rade > 3.5 && dens < 2)) return T > 1000 ? 5 : 4;
  if (p.rade > 1.8 && dens < 3.5) return 3;
  if (T > 900) return 5;
  if (T > 200 && T < 330) return 1;
  if (T <= 200) return 2;
  return 0;
}
// Exoplanets with published brightness / temperature maps (eclipse mapping and phase curves). hotspot: longitude offset of the
// hottest point east of the substellar point (degrees); cloud: -1 clouds on the western dayside, 0 none, 1 eastern.
const MAPPED = {
  'HD 189733 b': { hotspot: 30, cloud: 0, note: 'Spitzer 8 µm phase curve (Knutson+ 2007): hottest point offset ~30° east of the substellar point — the first exoplanet brightness map.', desc: 'This is one of the few exoplanets with a measured brightness map: Spitzer phase curves place its hotspot about 30° east of the point facing the star, so its glow is drawn shifted accordingly.' },
  'Kepler-7 b': { hotspot: 41, cloud: -1, note: 'Kepler optical + Spitzer thermal phase curves (Demory+ 2013): reflective clouds cover the western half of the dayside, the east is clear.', desc: 'Kepler-7 b has a real cloud map: its western dayside is covered in bright reflective clouds while the east is clear, so clouds are drawn on the western hemisphere.' },
  'WASP-43 b': { hotspot: 7, cloud: 1, note: 'HST/Spitzer and JWST MIRI phase curves (Stevenson+ 2014, Bell+ 2024): hotspot ~7° east, nightside blanketed by clouds.', desc: 'WASP-43 b has a JWST temperature map: a hotspot just east of the substellar point and a cloud-covered nightside.' },
  'WASP-18 b': { hotspot: 0, cloud: 0, note: 'JWST NIRISS eclipse map (Coulombe+ 2023): hotspot at the substellar point, steep temperature drop toward the limb.', desc: 'WASP-18 b was mapped by JWST eclipse mapping: the hotspot sits at the substellar point with a steep temperature gradient.' },
  'HD 209458 b': { hotspot: 20, cloud: 0, note: 'Spitzer phase curve (Zellem+ 2014): hotspot offset ~20° east.', desc: 'Spitzer phase curves give HD 209458 b a hotspot about 20° east of the substellar point.' },
  'WASP-121 b': { hotspot: 5, cloud: 0, note: 'HST/JWST phase curves (Mikal-Evans+ 2022): small eastward hotspot offset, nightside clouds of minerals.', desc: 'WASP-121 b has a measured thermal map from HST and JWST phase curves.' },
  'LTT 9779 b': { hotspot: 20, cloud: -1, note: 'JWST NIRISS phase curve (Coulombe+ 2025): highly reflective western dayside clouds.', desc: 'JWST mapped LTT 9779 b: reflective clouds on its western dayside make it unusually shiny.' },
  'HD 80606 b': { hotspot: 0, cloud: 0, note: 'Spitzer observed its atmosphere heating by ~700 K during periastron passage (Laughlin+ 2009).', desc: 'HD 80606 b is known for Spitzer catching its atmosphere heat up violently as it swings past its star on a highly eccentric orbit.' },
};
function pcol_set(arr, i, c) { arr[3 * i] = c.r; arr[3 * i + 1] = c.g; arr[3 * i + 2] = c.b; }
function planetColor(p) {
  const t = p.eqt;
  if (p.rade > 6) return Number.isFinite(t) && t > 1000 ? '#e0906a' : Number.isFinite(t) && t < 150 ? '#8fb4e6' : '#d8b98a';
  if (p.rade > 2) return Number.isFinite(t) && t > 800 ? '#d8a080' : '#7fa8e0';
  if (Number.isFinite(t)) { if (t > 1200) return '#ff9a5a'; if (t > 500) return '#c8a080'; if (t > 230 && t < 330) return '#6fa4c8'; if (t <= 230) return '#c8d8e8'; }
  return '#a89c90';
}
