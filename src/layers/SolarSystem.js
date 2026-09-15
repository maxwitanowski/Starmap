import * as THREE from 'three';
import { SUN, PLANETS, DWARF_PLANETS, MOONS } from '../data/solarsystem.js';
import { planetPosition, planetElements, moonGeocentric, keplerICRF, orbitPath, smallBodyPosition, gmst, elementsToPosition, eclipticToEquatorial } from '../astro/orbits.js';
import { KM_PER_AU, DEG, JD_J2000, fmtNum, fmtDist, fmtTime } from '../astro/units.js';
import { planetMaterial, atmosphereMaterial, cloudMaterial, ringMaterial, sunMaterial, markerMaterial } from '../render/materials.js';
import { makeGlowTexture } from './Stars.js';

const texLoader = new THREE.TextureLoader();
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3(), _m = new THREE.Matrix4(), _q = new THREE.Quaternion();
const GM_SUN = 1.32712440018e11; // km^3/s^2

function loadTex(name, srgb = true, onLoad) {
  const t = texLoader.load('/textures/' + name, onLoad);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

// Orientation quaternion of a body from IAU pole + prime meridian angle
function bodyOrientation(pole, W0, Wd, jd, outQ, isEarth = false) {
  const d = jd - JD_J2000;
  const ra = pole[0] * DEG, dec = pole[1] * DEG;
  const P = _v.set(Math.cos(dec) * Math.cos(ra), Math.cos(dec) * Math.sin(ra), Math.sin(dec));
  let ang;
  const Q = _v2;
  if (isEarth) { Q.set(1, 0, 0); ang = gmst(jd); }
  else { Q.set(-Math.sin(ra), Math.cos(ra), 0); ang = (W0 + Wd * d) * DEG; }
  // e1 = Q rotated about P by ang
  _q.setFromAxisAngle(P, ang);
  const e1 = Q.applyQuaternion(_q).normalize();
  const e2 = _v3.crossVectors(e1, P).normalize();
  _m.makeBasis(e1, P, e2);
  return outQ.setFromRotationMatrix(_m);
}

class Body {
  constructor(layer, def, kind, parent) {
    this.layer = layer; this.def = def; this.kind = kind; this.parent = parent;
    this.id = def.id || String(def.hid); this.name = def.name; this.radius = def.radius;
    this.pos = new Float64Array(3);
    this.color = new THREE.Color(def.color || '#aaa');
    this.group = new THREE.Group(); this.group.visible = false; this.group.frustumCulled = false;
    layer.u.scene.add(this.group);
    const geo = layer.sphereGeo;
    if (kind === 'sun') { this.mat = sunMaterial(); }
    else this.mat = planetMaterial({ color: def.color, specular: !!def.specular, bump: def.rings || kind === 'sun' ? 0.0 : (def.id === 'jupiter' || def.id === 'saturn' || def.id === 'uranus' || def.id === 'neptune' || def.id === 'venus' ? 0.15 : 0.8) });
    this.mesh = new THREE.Mesh(geo, this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = 10;
    this.mesh.scale.setScalar(this.radius);
    this.group.add(this.mesh);
    if (def.atmosphere) {
      this.atm = new THREE.Mesh(geo, atmosphereMaterial(def.atmosphere.color, def.atmosphere.strength));
      this.atm.scale.setScalar(this.radius * def.atmosphere.scale); this.atm.renderOrder = 12; this.atm.frustumCulled = false;
      this.group.add(this.atm);
    }
    if (def.clouds) {
      this.clouds = new THREE.Mesh(geo, cloudMaterial()); this.clouds.scale.setScalar(this.radius * 1.0016); this.clouds.renderOrder = 11; this.clouds.frustumCulled = false;
      this.group.add(this.clouds);
    }
    if (def.rings) {
      const r = def.rings;
      const rg = new THREE.RingGeometry(r.inner, r.outer, 256, 4);
      this.ring = new THREE.Mesh(rg, ringMaterial(r.inner, r.outer, r.color, r.opacity, null));
      if (r.texture) { const rt = loadTex(r.texture, true, () => { this.ring.material.uniforms.map.value = rt; this.ring.material.uniforms.hasMap.value = 1; }); }
      this.ring.rotation.x = -Math.PI / 2; // ring plane = local XZ (equator); RingGeometry is in XY
      this.ring.renderOrder = 11; this.ring.frustumCulled = false;
      this.group.add(this.ring);
      this.mat.uniforms.ringInner.value = r.inner; this.mat.uniforms.ringOuter.value = r.outer; this.mat.uniforms.ringOpacity.value = r.opacity;
    }
    if (kind === 'sun') {
      this.glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xfff1cc, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: true }));
      this.glow.renderOrder = 8; layer.u.scene.add(this.glow);
    }
    this.texLoaded = false;
    this.quat = new THREE.Quaternion();
  }
  ensureTextures() {
    if (this.texLoaded) return; this.texLoaded = true;
    const d = this.def;
    if (d.texture) this.mat.uniforms.map.value = loadTex(d.texture, true, () => { this.mat.uniforms.hasMap.value = 1; });
    if (d.night) this.mat.uniforms.nightMap.value = loadTex(d.night, true, () => { this.mat.uniforms.hasNight.value = 1; });
    if (d.clouds) { this.clouds.visible = false; this.clouds.material.uniforms.map.value = loadTex(d.clouds, false, () => { this.clouds.visible = true; }); }
  }
}

export class SolarSystemLayer {
  constructor(universe, moonsData, smallBodies) {
    this.u = universe;
    this.sphereGeo = new THREE.SphereGeometry(1, 96, 64);
    this.bodies = []; this.byId = new Map();
    this.visible = true; this.showOrbits = true;
    this.sun = this._add(SUN, 'sun', null);
    for (const p of PLANETS) this._add(p, 'planet', this.sun);
    for (const d of DWARF_PLANETS) {
      const b = this._add(d, 'dwarf', this.sun);
      if (d.sb && smallBodies) { b.sbEl = smallBodies.elementsByName(d.sb); if (!b.sbEl) console.warn('no elements for', d.sb); }
    }
    const parentIds = { 399: 'earth', 499: 'mars', 599: 'jupiter', 699: 'saturn', 799: 'uranus', 899: 'neptune', 999: 'pluto' };
    for (const m of moonsData) {
      const info = MOONS[m.id]; if (!info) continue;
      const parent = this.byId.get(parentIds[m.parent]); if (!parent) continue;
      const def = { ...info, id: 'moon' + m.id, hid: m.id, el: m };
      const b = this._add(def, 'moon', parent);
      b.el = m;
    }
    // markers
    const n = this.bodies.length;
    this.markerGeo = new THREE.BufferGeometry();
    this.markerPos = new Float32Array(n * 3); this.markerAlpha = new Float32Array(n); this.markerSize = new Float32Array(n);
    const mcol = new Float32Array(n * 3);
    this.bodies.forEach((b, i) => { mcol[3 * i] = b.color.r; mcol[3 * i + 1] = b.color.g; mcol[3 * i + 2] = b.color.b; this.markerSize[i] = b.kind === 'planet' ? 9 : b.kind === 'sun' ? 12 : b.kind === 'dwarf' ? 7 : 6; });
    this.markerGeo.setAttribute('position', new THREE.BufferAttribute(this.markerPos, 3));
    this.markerGeo.setAttribute('color', new THREE.BufferAttribute(mcol, 3));
    this.markerGeo.setAttribute('alpha', new THREE.BufferAttribute(this.markerAlpha, 1));
    this.markerGeo.setAttribute('size', new THREE.BufferAttribute(this.markerSize, 1));
    this.markerGeo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.markers = new THREE.Points(this.markerGeo, markerMaterial()); this.markers.frustumCulled = false; this.markers.renderOrder = 20;
    universe.scene.add(this.markers);
    // orbit lines
    for (const b of this.bodies) if (b.parent) this._makeOrbit(b);
    this.earth = this.byId.get('earth'); this.moon = this.byId.get('moon301');
    this._tmp = [0, 0, 0]; this._tmp2 = [0, 0, 0];
    this._rel = new THREE.Vector3(); this._sunRel = new THREE.Vector3(); this._nrm = new THREE.Vector3();
  }
  _add(def, kind, parent) {
    const b = new Body(this, def, kind, parent);
    this.bodies.push(b); this.byId.set(b.id, b);
    return b;
  }
  _makeOrbit(b) {
    let pts;
    const jd = this.u.time.jd;
    if (b.kind === 'planet' || (b.kind === 'dwarf' && b.def.el)) {
      const e = planetElements(b.def.el, jd); pts = orbitPath(e.a, e.e, e.i, e.om, e.w, 720, true);
    } else if (b.kind === 'dwarf' && b.sbEl) {
      const e = b.sbEl; pts = orbitPath(e.a * KM_PER_AU, e.e, e.i * DEG, e.om * DEG, e.w * DEG, 720, true);
    } else if (b.kind === 'moon' && b.el) {
      const e = b.el; pts = orbitPath(e.a, e.e, e.i * DEG, e.om * DEG, e.w * DEG, 360, false);
    } else return;
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pts, 3));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: b.color.clone().lerp(new THREE.Color(1, 1, 1), 0.25), transparent: true, opacity: b.kind === 'moon' ? 0.3 : 0.38, depthWrite: false }));
    line.frustumCulled = false; line.renderOrder = 3;
    b.orbit = line; b.orbitA = b.kind === 'moon' ? b.el.a : (b.sbEl ? b.sbEl.a * KM_PER_AU : planetElements(b.def.el, jd).a);
    this.u.scene.add(line);
  }

  // ---- positions ----
  computePositions(jd) {
    const t = this._tmp;
    this.sun.pos.fill(0);
    for (const b of this.bodies) {
      if (b.kind === 'planet' || (b.kind === 'dwarf' && b.def.el)) {
        planetPosition(b.def.el, jd, t);
        b.pos[0] = t[0]; b.pos[1] = t[1]; b.pos[2] = t[2];
        if (b.id === 'earth') { moonGeocentric(jd, this._tmp2); const k = 0.0121505; b.pos[0] -= this._tmp2[0] * k; b.pos[1] -= this._tmp2[1] * k; b.pos[2] -= this._tmp2[2] * k; }
      } else if (b.kind === 'dwarf' && b.sbEl) {
        const e = b.sbEl; smallBodyPosition(e.a, e.e, e.i, e.om, e.w, e.ma, e.epoch, jd, t);
        b.pos[0] = t[0]; b.pos[1] = t[1]; b.pos[2] = t[2];
      }
    }
    for (const b of this.bodies) {
      if (b.kind !== 'moon') continue;
      const p = b.parent.pos;
      if (b.def.hid === 301) moonGeocentric(jd, t);
      else { const e = b.el; keplerICRF(e.a, e.e, e.i, e.om, e.w, e.ma, e.n_degps, e.jd, jd, t); }
      b.pos[0] = p[0] + t[0]; b.pos[1] = p[1] + t[1]; b.pos[2] = p[2] + t[2];
    }
  }
  bodyPos(id, jd, out) { const b = this.byId.get(id); out[0] = b.pos[0]; out[1] = b.pos[1]; out[2] = b.pos[2]; return out; }

  update(ctx) {
    const jd = ctx.jd, cam = ctx.camPos;
    this.computePositions(jd);
    const sunRel = this._sunRel.set(-cam[0], -cam[1], -cam[2]);
    this.bodies.forEach((b, i) => {
      const rel = this._rel.set(b.pos[0] - cam[0], b.pos[1] - cam[1], b.pos[2] - cam[2]);
      const d = rel.length();
      const px = b.radius / d * ctx.pxPerRad; // radius in pixels
      const show = this.visible && px > 0.4;
      b.group.visible = show;
      b.screenPx = px; b.dist = d;
      // marker
      this.markerPos[3 * i] = rel.x; this.markerPos[3 * i + 1] = rel.y; this.markerPos[3 * i + 2] = rel.z;
      let a = this.visible ? THREE.MathUtils.clamp((4 - px) / 3, 0, 1) : 0;
      if (b.kind === 'moon') {
        // hide moon markers when the parent is small on screen
        const pp = b.parent; const sepPx = Math.hypot(b.pos[0] - pp.pos[0], b.pos[1] - pp.pos[1], b.pos[2] - pp.pos[2]) / d * ctx.pxPerRad;
        a *= THREE.MathUtils.clamp((sepPx - 6) / 10, 0, 1);
      }
      this.markerAlpha[i] = a;
      if (show) {
        b.group.position.copy(rel);
        if (px > 2) b.ensureTextures();
        const def = b.def;
        if (def.pole) bodyOrientation(def.pole, def.W0, def.Wd, jd, b.quat, b.id === 'earth');
        else if (b.parent && b.parent.def.pole) b.quat.copy(b.parent.quat);
        else b.quat.identity();
        b.group.quaternion.copy(b.quat);
        b.mat.uniforms.sunPos?.value.copy(sunRel);
        if (b.ring) {
          b.ring.material.uniforms.sunPos.value.copy(sunRel); b.ring.material.uniforms.center.value.copy(rel); b.ring.material.uniforms.planetRadius.value = b.radius;
          const nrm = this._nrm.set(0, 1, 0).applyQuaternion(b.quat); b.ring.material.uniforms.normal.value.copy(nrm);
          b.mat.uniforms.ringNormal.value.copy(nrm); b.mat.uniforms.shadowCenter.value.copy(rel);
        }
        if (b.atm) b.atm.material.uniforms.sunPos.value.copy(sunRel);
        if (b.clouds) b.clouds.material.uniforms.sunPos.value.copy(sunRel);
      }
      if (b.glow) {
        b.glow.position.copy(rel);
        const minPx = 44; const s = Math.max(b.radius * 5.5, d / ctx.pxPerRad * minPx);
        b.glow.scale.set(s, s, 1); b.glow.visible = this.visible;
        b.glow.material.opacity = px > 400 ? 0.15 : 0.85;
      }
      // orbit line
      if (b.orbit) {
        const orbitPx = b.orbitA / Math.max(1, Math.hypot(b.parent.pos[0] - cam[0], b.parent.pos[1] - cam[1], b.parent.pos[2] - cam[2])) * ctx.pxPerRad;
        // orbits only make sense from outside: hide when the camera is closer to the parent than ~the orbit radius
        const camInside = ctx.rig.distanceTo(b.parent.pos) < b.orbitA * 1.15;
        const vis = this.visible && this.showOrbits && orbitPx > 12 && !camInside;
        b.orbit.visible = vis;
        if (vis) { b.orbit.position.set(b.parent.pos[0] - cam[0], b.parent.pos[1] - cam[1], b.parent.pos[2] - cam[2]); b.orbit.material.opacity = (b.kind === 'moon' ? 0.3 : 0.4) * THREE.MathUtils.clamp((orbitPx - 12) / 30, 0, 1); }
      }
    });
    this.markerGeo.attributes.position.needsUpdate = true; this.markerGeo.attributes.alpha.needsUpdate = true;
    this.markers.material.uniforms.uPixelRatio.value = ctx.pixelRatio;
  }

  nearestSurface(camPos) {
    let best = Infinity;
    for (const b of this.bodies) { const d = Math.hypot(b.pos[0] - camPos[0], b.pos[1] - camPos[1], b.pos[2] - camPos[2]) - b.radius; if (d < best) best = d; }
    return best;
  }

  pick(ray, camPos, pxPerRad) {
    let best = null, bestSep = 16;
    for (const b of this.bodies) {
      if (!this.visible) break;
      const x = b.pos[0] - camPos[0], y = b.pos[1] - camPos[1], z = b.pos[2] - camPos[2];
      const d = Math.hypot(x, y, z); if (d < b.radius) continue;
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.99) continue;
      const sep = Math.acos(Math.min(1, dot)) * pxPerRad;
      const rpx = b.radius / d * pxPerRad;
      const s = Math.max(0, sep - rpx);
      // moon markers hidden -> not pickable
      if (b.kind === 'moon') { const i = this.bodies.indexOf(b); if (this.markerAlpha[i] <= 0.01 && rpx < 2) continue; }
      if (s < bestSep) { bestSep = s; best = b; }
    }
    return best ? { sepPx: bestSep, desc: this.describe(best) } : null;
  }

  describe(b) {
    const self = this, d = b.def;
    const rows = [];
    const jd = this.u.time.jd;
    const rSun = Math.hypot(...b.pos);
    const rEarth = Math.hypot(b.pos[0] - this.earth.pos[0], b.pos[1] - this.earth.pos[1], b.pos[2] - this.earth.pos[2]);
    if (b.kind !== 'sun') {
      if (b.parent && b.kind === 'moon') {
        const rp = Math.hypot(b.pos[0] - b.parent.pos[0], b.pos[1] - b.parent.pos[1], b.pos[2] - b.parent.pos[2]);
        rows.push([`Distance from ${b.parent.name}`, fmtDist(rp)]);
        if (b.el) rows.push(['Orbital period', fmtTime(b.el.per_s)], ['Semi-major axis', fmtDist(b.el.a)], ['Eccentricity', fmtNum(b.el.e, 4)], ['Inclination (ICRF)', `${fmtNum(b.el.i, 3)}°`]);
        if (b.def.hid === 301) rows.push(['Orbital period', '27.32 days (sidereal)']);
      } else {
        rows.push(['Distance from Sun', `${fmtNum(rSun / KM_PER_AU, 4)} AU (${fmtDist(rSun)})`]);
        const v = Math.sqrt(GM_SUN * (2 / rSun - 1 / (b.orbitA || rSun)));
        if (Number.isFinite(v)) rows.push(['Orbital speed (now)', `${fmtNum(v, 3)} km/s`]);
        if (b.orbitA) rows.push(['Orbital period', fmtTime(2 * Math.PI * Math.sqrt(Math.pow(b.orbitA, 3) / GM_SUN))]);
      }
      if (b.id !== 'earth') rows.push(['Distance from Earth', `${fmtNum(rEarth / KM_PER_AU, 4)} AU · light time ${fmtTime(rEarth / 299792.458)}`]);
    }
    rows.push(['Equatorial radius', `${fmtNum(b.radius, 4)} km`]);
    if (d.mass) rows.push(['Mass', `${d.mass.toExponential(3).replace('e+', ' × 10^')} kg${b.kind !== 'sun' ? ` (${fmtNum(d.mass / 5.9722e24, 3)} Earths)` : ''}`]);
    if (d.density) rows.push(['Mean density', `${fmtNum(d.density, 3)} g/cm³`]);
    if (d.gravity) rows.push(['Surface gravity', `${fmtNum(d.gravity, 3)} m/s² (${fmtNum(d.gravity / 9.807, 2)} g)`]);
    if (d.escape) rows.push(['Escape velocity', `${fmtNum(d.escape, 3)} km/s`]);
    if (d.rot) rows.push(['Rotation period', `${fmtTime(Math.abs(d.rot) * 3600)}${d.rot < 0 ? ' (retrograde)' : ''}`]);
    if (d.tilt !== undefined) rows.push(['Axial tilt', `${fmtNum(d.tilt, 3)}°`]);
    if (d.temp) rows.push(['Mean temperature', `${d.temp} K (${fmtNum(d.temp - 273.15, 3)} °C)`]);
    if (d.albedo) rows.push(['Albedo', fmtNum(d.albedo, 3)]);
    if (d.moons !== undefined) rows.push(['Known moons', String(d.moons)]);
    for (const [k, v] of Object.entries(d.facts || {})) rows.push([k, v]);
    const kindLabel = { sun: 'Star', planet: 'Planet', dwarf: 'Dwarf planet', moon: `Moon of ${b.parent?.name}` }[b.kind];
    return {
      kind: b.kind, kindLabel, name: b.name, sub: kindLabel, radius: b.radius, rows, desc: d.desc || '', ref: { layer: 'solar', id: b.id },
      source: b.kind === 'moon' && b.def.hid !== 301 ? 'Orbit: JPL Horizons osculating elements (epoch 2026-09-07), propagated as a two-body orbit. Physical data: NASA/JPL fact sheets.' : b.kind === 'moon' ? 'Orbit: truncated ELP-2000 lunar theory (Meeus). Physical data: NASA fact sheets.' : b.kind === 'dwarf' && b.sbEl ? 'Orbit: JPL Small-Body Database elements. Physical data: NASA/JPL, IAU.' : 'Orbit: JPL approximate Keplerian elements (Standish). Rotation: IAU WGCCRE. Physical data: NASA planetary fact sheets. Textures: Solar System Scope (CC BY 4.0).',
      getPos: (jd2, out) => { out[0] = b.pos[0]; out[1] = b.pos[1]; out[2] = b.pos[2]; return out; },
      lightPos: b.kind === 'sun' ? null : [0, 0, 0]
    };
  }
  descriptorById(id) { const b = this.byId.get(id); return b ? this.describe(b) : null; }

  labels(ctx, out) {
    for (const b of this.bodies) {
      if (!this.visible) return;
      const x = b.pos[0] - ctx.camPos[0], y = b.pos[1] - ctx.camPos[1], z = b.pos[2] - ctx.camPos[2];
      const d = Math.sqrt(x * x + y * y + z * z);
      if (b.kind === 'moon') { const i = this.bodies.indexOf(b); if (this.markerAlpha[i] < 0.3 && b.screenPx < 3) continue; }
      if (b.kind === 'dwarf' && ctx.labelDensity < 0.3 && b.screenPx < 1) continue;
      // from light-years away the whole Solar System is one dot: only the Sun keeps a (low-priority) label
      if (b.kind !== 'sun' && d > 1.5e10) continue;
      const cls = b.kind === 'moon' ? 'moon' : 'planet';
      const farFromSun = b.kind === 'sun' && d > 3e9; // beyond ~20 AU the Sun is just another star: drop its label priority
      out.push({ text: b.name, x, y, z, cls, prio: farFromSun ? 20 : b.kind === 'planet' || b.kind === 'sun' ? 100 : b.kind === 'dwarf' ? 60 : 50, offsetPx: Math.min(60, b.screenPx), ref: { layer: 'solar', id: b.id } });
    }
  }
  searchEntries() { return this.bodies.map(b => ({ name: b.name, kind: b.kind === 'moon' ? `moon of ${b.parent.name}` : b.kind === 'dwarf' ? 'dwarf planet' : b.kind, ref: { layer: 'solar', id: b.id }, prio: 5 })); }
}
