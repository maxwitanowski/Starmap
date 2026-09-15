import * as THREE from 'three';
import * as sat from '../astro/sat.js';
import { EARTH_RADIUS_KM, fmtNum, fmtTime, fmtDist } from '../astro/units.js';

const GROUP_COLOR = { stations: '#ffffff', visual: '#ffe9a0', starlink: '#7fd0ff', oneweb: '#9fe0ff', 'gps-ops': '#ffd27f', 'glo-ops': '#ffb07f', galileo: '#ffc47f', beidou: '#ffb87f', gnss: '#ffd27f', sbas: '#ffdc9f', weather: '#a0ffb8', noaa: '#a0ffb8', goes: '#a0ffb8', resource: '#b8ffa0', sarsat: '#c8ffa0', dmc: '#b8ffa0', tdrss: '#ffa0d0', argos: '#b0ffb0', planet: '#c0ffc0', spire: '#c0ffd0', geo: '#ff9fdc', intelsat: '#ff9fdc', ses: '#ff9fdc', 'iridium-NEXT': '#ffa0f0', orbcomm: '#ffa0e8', globalstar: '#ffa0e8', swarm: '#d0d0ff', amateur: '#d8a0ff', 'x-comm': '#ffa0c8', 'other-comm': '#ffa0c8', satnogs: '#c8a0ff', gorizont: '#ff9fdc', raduga: '#ff9fdc', molniya: '#ffb0b0', nnss: '#ffdca0', musson: '#ffd0a0', science: '#a0f0ff', geodetic: '#a0e8ff', engineering: '#c0c0ff', education: '#d0c0ff', military: '#ff8080', radar: '#ff9090', cubesat: '#c0ffe0', other: '#cccccc', analyst: '#666666' };
const FEATURED = { 25544: 'ISS', 48274: 'Tiangong', 20580: 'Hubble', 43013: 'NOAA-20', 25994: 'Terra', 27424: 'Aqua', 39084: 'Landsat 8', 49260: 'Landsat 9', 41866: 'GOES-16', 43226: 'GOES-17', 40697: 'Sentinel-2A', 44714: 'Starlink-1007', 33591: 'NOAA-19', 25338: 'NOAA-15', 28654: 'NOAA-18', 37849: 'Suomi NPP', 36411: 'CryoSat-2', 27386: 'Envisat', 22675: 'Cosmos 2251 debris', 20638: 'Ofeq', 38771: 'Metop-B', 41240: 'Jason-3', 48859: 'Shijian-21', 43689: 'SAOCOM 1A', 39634: 'Sentinel-1A', 41335: 'Sentinel-3A', 42063: 'Sentinel-2B', 43437: 'Sentinel-3B', 25989: 'XMM-Newton', 25867: 'Chandra', 26464: 'Cluster II', 37820: 'Tiangong-1', 43435: 'TESS', 39144: 'IRIS', 36577: 'SDO', 40376: 'Fermi', 33053: 'Fermi (GLAST)', 27540: 'INTEGRAL', 39197: 'Gaia', 44874: 'CHEOPS', 41783: 'Yaogan', 32711: 'GPS IIR-M', 40730: 'GPS IIF-10', 43873: 'GPS III-1', 28474: 'Swift', 36395: 'SES-1', 27386.1: '', 46984: 'Sentinel-6A', 48915: 'Landsat 9', 25063: 'Iridium 8', 40258: 'CZ-4B debris', 44420: 'Starlink' };

// typical longest extent per class, km (element sets carry no size: these are representative)
export const SAT_SIZES = {
  // generic classes
  sat_station: 0.109, sat_telescope: 0.0132, sat_comms: 0.0065, sat_gps: 0.0052, sat_weather: 0.0045, sat_starlink: 0.0085, sat_cubesat: 0.0003, sat_rocketbody: 0.009,
  // constellation families with their own design-accurate models (deployed longest extent, km)
  fam_starlink_v1: 0.0085, fam_starlink_v2: 0.030, fam_oneweb: 0.0035, fam_dove: 0.0007, fam_lemur: 0.0006, fam_iridium: 0.0094, fam_glonass: 0.0072, fam_beidou: 0.012, fam_galileo: 0.0147, fam_gps: 0.0147,
  fam_globalstar: 0.008, fam_geo_comms: 0.040, fam_kineis: 0.0009, fam_eo_china: 0.010, fam_o3b: 0.010, fam_gonets: 0.0025, fam_orbcomm: 0.007, fam_tianmu: 0.0015,
};
export const FAMILY_LABELS = {
  fam_starlink_v1: 'Starlink v1.5', fam_starlink_v2: 'Starlink v2 mini', fam_oneweb: 'OneWeb', fam_dove: 'Planet Dove (Flock) 3U cubesat', fam_lemur: 'Spire Lemur 3U cubesat', fam_iridium: 'Iridium NEXT', fam_glonass: 'GLONASS-K (Cosmos)', fam_beidou: 'BeiDou-3', fam_galileo: 'Galileo FOC', fam_gps: 'GPS Block III',
  fam_globalstar: 'Globalstar second generation', fam_geo_comms: 'geostationary communications satellite (Intelsat/SES/Eutelsat class)', fam_kineis: 'Kineis IoT nanosatellite', fam_eo_china: 'Chinese Earth-observation satellite (Gaofen/Yaogan/Jilin class)', fam_o3b: 'O3b mPOWER', fam_gonets: 'Gonets-M', fam_orbcomm: 'Orbcomm OG2', fam_tianmu: 'Tianmu-1 microsatellite',
};

export class SatelliteLayer {
  constructor(universe, data, solar) {
    this.u = universe; this.solar = solar; this.visible = true;
    this.groups = data.groups; this.fetched = data.fetched;
    this.sats = data.sats;
    this.count = this.sats.length;
    this.satrec = new Array(this.count).fill(null);
    this.pos = new Float64Array(this.count * 3); this.vel = new Float64Array(this.count * 3);
    this.lastT = new Float64Array(this.count).fill(NaN);
    this.rel = new Float32Array(this.count * 3);
    this.posD = new Float64Array(this.count * 3); // Earth-relative, extrapolated, double precision (camera focus, models, picking)
    this.nearIdx = [];
    const col = new Float32Array(this.count * 3), size = new Float32Array(this.count);
    this.alpha = new Float32Array(this.count).fill(1);
    const c = new THREE.Color();
    for (let i = 0; i < this.count; i++) {
      const s = this.sats[i];
      const g = s.g.map(k => this.groups[k]);
      const primary = g.find(x => x !== 'active' && x !== 'visual' && x !== 'analyst') || g[0];
      c.set(GROUP_COLOR[primary] || '#ccc');
      if (g.includes('stations')) c.set('#ffffff');
      col[3 * i] = c.r; col[3 * i + 1] = c.g; col[3 * i + 2] = c.b;
      size[i] = FEATURED[s.id] || g.includes('stations') ? 6 : g.includes('starlink') || g.includes('oneweb') ? 2.2 : 3.2;
      s.primary = primary;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.rel, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1)); geo.setAttribute('size', new THREE.BufferAttribute(size, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uPixelRatio: { value: 1 } },
      vertexShader: /* glsl */`attribute vec3 color; attribute float alpha; attribute float size; varying vec3 vColor; varying float vAlpha; uniform float uPixelRatio;
        #include <common>
#include <logdepthbuf_pars_vertex>
        void main() { vColor = color; vAlpha = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * uPixelRatio; if (alpha < 0.01) gl_Position = vec4(2.0,2.0,2.0,1.0);
        #include <logdepthbuf_vertex>
  }`,
      fragmentShader: /* glsl */`varying vec3 vColor; varying float vAlpha;
        #include <logdepthbuf_pars_fragment>
        void main() {
    #include <logdepthbuf_fragment>
          vec2 c = gl_PointCoord - 0.5; float r = length(c) * 2.0; float a = smoothstep(1.0, 0.5, r) * vAlpha; gl_FragColor = vec4(vColor, a); }`,
      transparent: true, depthWrite: false, depthTest: true,
    });
    this.points = new THREE.Points(geo, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 15;
    universe.scene.add(this.points);
    this.byId = new Map(this.sats.map((s, i) => [s.id, i]));
    this.hideMarker = new Set(); // satellites currently drawn as 3D models
    this._cursor = 0; this._built = 0;
    this.selectedTrack = null;
    this.tmpDate = new Date();
    this.liveStatus = 'bundled elements';
    this._refreshLive();
  }
  async _refreshLive() {
    // CelesTrak allows CORS; if reachable, replace bundled elements with fresh ones
    try {
      const res = await fetch('https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=json', { cache: 'no-store' });
      if (!res.ok) throw new Error(res.status);
      const arr = await res.json();
      if (!Array.isArray(arr) || arr.length < 100) throw new Error('bad payload');
      let updated = 0;
      for (const o of arr) {
        const i = this.byId.get(o.NORAD_CAT_ID);
        if (i === undefined) continue;
        const s = this.sats[i];
        Object.assign(s, { ep: o.EPOCH, mm: o.MEAN_MOTION, ecc: o.ECCENTRICITY, inc: o.INCLINATION, raan: o.RA_OF_ASC_NODE, argp: o.ARG_OF_PERICENTER, ma: o.MEAN_ANOMALY, bstar: o.BSTAR, mmdot: o.MEAN_MOTION_DOT, mmddot: o.MEAN_MOTION_DDOT, rev: o.REV_AT_EPOCH, els: o.ELEMENT_SET_NO });
        this.satrec[i] = null; this.lastT[i] = NaN; updated++;
      }
      this.liveStatus = `live elements from CelesTrak (${updated} updated ${new Date().toISOString().slice(11, 16)} UTC)`;
      this._built = 0;
    } catch (err) {
      this.liveStatus = `bundled CelesTrak elements from ${this.fetched.slice(0, 16).replace('T', ' ')} UTC (live refresh unavailable: ${err.message})`;
    }
  }
  _rec(i) {
    if (this.satrec[i]) return this.satrec[i];
    const s = this.sats[i];
    try {
      this.satrec[i] = sat.json2satrec({ OBJECT_NAME: s.n, OBJECT_ID: s.intl, EPOCH: s.ep, MEAN_MOTION: s.mm, ECCENTRICITY: s.ecc, INCLINATION: s.inc, RA_OF_ASC_NODE: s.raan, ARG_OF_PERICENTER: s.argp, MEAN_ANOMALY: s.ma, EPHEMERIS_TYPE: 0, CLASSIFICATION_TYPE: s.cls || 'U', NORAD_CAT_ID: s.id, ELEMENT_SET_NO: s.els, REV_AT_EPOCH: s.rev, BSTAR: s.bstar, MEAN_MOTION_DOT: s.mmdot, MEAN_MOTION_DDOT: s.mmddot });
    } catch { this.satrec[i] = false; }
    return this.satrec[i];
  }
  _propagate(i, unixMs) {
    const rec = this._rec(i); if (!rec) return false;
    unixMs = Math.floor(unixMs);
    this.tmpDate.setTime(unixMs);
    let pv;
    try { pv = sat.propagate(rec, this.tmpDate); } catch { return false; }
    if (!pv || !pv.position || !Number.isFinite(pv.position.x)) return false;
    this.pos[3 * i] = pv.position.x; this.pos[3 * i + 1] = pv.position.y; this.pos[3 * i + 2] = pv.position.z;
    this.vel[3 * i] = pv.velocity.x; this.vel[3 * i + 1] = pv.velocity.y; this.vel[3 * i + 2] = pv.velocity.z;
    this.lastT[i] = unixMs;
    return true;
  }
  update(ctx) {
    this.points.visible = this.visible;
    if (!this.visible) return;
    const earth = this.solar.earth.pos;
    const cam = ctx.camPos;
    const ex = earth[0] - cam[0], ey = earth[1] - cam[1], ez = earth[2] - cam[2];
    const dEarth = Math.hypot(ex, ey, ez);
    // skip all work when Earth is far away (satellites would be sub-pixel around a sub-pixel Earth)
    const active = dEarth < 3e6;
    this.points.visible = active;
    if (!active) return;
    const unixMs = ctx.time.unixMs;
    const speed = Math.abs(ctx.time.speed);
    // time-budgeted round-robin SGP4; the rest is extrapolated with velocity
    const budgetMs = speed > 50 ? 6 : 3.5;
    const t0 = performance.now();
    let n = 0;
    while (performance.now() - t0 < budgetMs && n < this.count) {
      this._propagate(this._cursor, unixMs);
      this._cursor = (this._cursor + 1) % this.count; n++;
    }
    // featured, selected, focused and nearby satellites every frame (no extrapolation jumps when you are close)
    for (const id of [25544, 48274, 20580]) { const i = this.byId.get(id); if (i !== undefined) this._propagate(i, unixMs); }
    if (this.selectedIndex !== undefined && this.selectedIndex >= 0) this._propagate(this.selectedIndex, unixMs);
    const f = ctx.rig.focus; if (f && f.ref && f.ref.layer === 'sats') this._propagate(f.ref.index, unixMs);
    for (const i of this.nearIdx) this._propagate(i, unixMs);
    const camX = cam[0] - earth[0], camY = cam[1] - earth[1], camZ = cam[2] - earth[2];
    const near = [];
    this.points.position.set(ex, ey, ez);
    for (let i = 0; i < this.count; i++) {
      if (!Number.isFinite(this.lastT[i])) { this.alpha[i] = 0; continue; }
      const dt = (unixMs - this.lastT[i]) / 1000;
      if (Math.abs(dt) > 600) { this.alpha[i] = 0; continue; } // stale: hide until re-propagated
      const px = this.pos[3 * i] + this.vel[3 * i] * dt, py = this.pos[3 * i + 1] + this.vel[3 * i + 1] * dt, pz = this.pos[3 * i + 2] + this.vel[3 * i + 2] * dt;
      this.posD[3 * i] = px; this.posD[3 * i + 1] = py; this.posD[3 * i + 2] = pz;
      this.rel[3 * i] = px; this.rel[3 * i + 1] = py; this.rel[3 * i + 2] = pz;
      this.alpha[i] = this.hideMarker.has(i) ? 0.02 : 1;
      if (Math.abs(px - camX) < 40 && Math.abs(py - camY) < 40 && Math.abs(pz - camZ) < 40 && near.length < 40) near.push(i);
    }
    this.nearIdx = near;
    this.earthAtUpdate = [earth[0], earth[1], earth[2]]; // Earth position the current posD values refer to
    this.points.geometry.attributes.position.needsUpdate = true; this.points.geometry.attributes.alpha.needsUpdate = true;
    this.mat.uniforms.uPixelRatio.value = ctx.pixelRatio;
    if (this.selectedTrack) {
      // re-anchor the track every couple of seconds of simulated time so it always passes exactly through the satellite
      if (Math.abs(unixMs - this.trackT0) > 2500) this._buildTrack(this.selectedIndex);
      const a = this.trackAnchor;
      this.selectedTrack.position.set(ex + a[0], ey + a[1], ez + a[2]);
    }
  }
  // Design-accurate family model where the constellation is large enough to deserve one; generic class otherwise
  variant(i) {
    const s = this.sats[i]; const n = s.n.toUpperCase();
    if (/^STARLINK/.test(n)) return s.id > 55300 ? 'fam_starlink_v2' : 'fam_starlink_v1';
    if (/^ONEWEB/.test(n)) return 'fam_oneweb';
    if (/^FLOCK|^DOVE|^SKYSAT/.test(n)) return 'fam_dove';
    if (/^LEMUR/.test(n)) return 'fam_lemur';
    if (/^IRIDIUM/.test(n)) return 'fam_iridium';
    if (/^COSMOS/.test(n) && s.g.some(k => /glo-ops|gnss/.test(this.groups[k]))) return 'fam_glonass';
    if (/^BEIDOU/.test(n)) return 'fam_beidou';
    if (/^GSAT0|^GALILEO/.test(n)) return 'fam_galileo';
    if (/^GPS|^NAVSTAR/.test(n)) return 'fam_gps';
    if (/^GLOBALSTAR/.test(n)) return 'fam_globalstar';
    if (/^INTELSAT|^SES[ -]|^EUTELSAT|^GALAXY|^ECHOSTAR|^ASTRA|^JCSAT|^INMARSAT|^ZHONGXING|^CHINASAT|^ARABSAT|^TELSTAR|^VIASAT|^SKYNET|^HOTBIRD|^THAICOM|^AMAZONAS|^YAMAL|^EXPRESS|^DIRECTV|^SIRIUS|^XM /.test(n) && s.g.some(k => /geo|intelsat|ses|x-comm|other-comm|gorizont|raduga/.test(this.groups[k]))) return 'fam_geo_comms';
    if (/^KINEIS/.test(n)) return 'fam_kineis';
    if (/^GAOFEN|^YAOGAN|^JILIN|^SHIJIAN|^ZIYUAN|^HAIYANG|^HUANJING/.test(n)) return 'fam_eo_china';
    if (/^O3B/.test(n)) return 'fam_o3b';
    if (/^GONETS/.test(n)) return 'fam_gonets';
    if (/^ORBCOMM/.test(n)) return 'fam_orbcomm';
    if (/^TIANMU/.test(n)) return 'fam_tianmu';
    return this.genericVariant(i);
  }
  genericVariant(i) {
    const s = this.sats[i]; const g = s.g.map(k => this.groups[k]);
    if (/ R\/B/.test(s.n) || / DEB/.test(s.n)) return 'sat_rocketbody';
    if (g.includes('stations') && /ISS|TIANHE|CSS|MENGTIAN|WENTIAN|ZARYA|NAUKA|PROGRESS|SOYUZ|DRAGON|CYGNUS/.test(s.n)) return 'sat_station';
    if (g.includes('starlink') || g.includes('oneweb') || g.includes('iridium-NEXT')) return 'sat_starlink';
    if (g.includes('gps-ops') || g.includes('glo-ops') || g.includes('galileo') || g.includes('beidou') || g.includes('gnss') || g.includes('sbas')) return 'sat_gps';
    if (/HST|HUBBLE|TESS|CHANDRA|XMM|SWIFT|FERMI|GAIA|WISE|KEPLER|IRIS|SDO|INTEGRAL|CHEOPS/.test(s.n)) return 'sat_telescope';
    if (g.includes('weather') || g.includes('noaa') || g.includes('goes') || g.includes('resource') || g.includes('planet') || g.includes('spire') || g.includes('sarsat') || g.includes('science') || g.includes('geodetic')) return 'sat_weather';
    if (g.includes('cubesat') || g.includes('amateur') || g.includes('satnogs') || g.includes('education')) return 'sat_cubesat';
    return 'sat_comms';
  }
  _buildTrack(i) {
    const rec = this._rec(i); if (!rec) return;
    const periodMin = 2 * Math.PI / rec.no;
    const N = 1600; const pts = new Float32Array(N * 3);
    const t0 = this.u.time.unixMs;
    this.tmpDate.setTime(t0);
    let a0;
    try { a0 = sat.propagate(rec, this.tmpDate).position; } catch { return; }
    this.trackAnchor = [a0.x, a0.y, a0.z]; this.trackT0 = t0;
    for (let k = 0; k < N; k++) {
      this.tmpDate.setTime(t0 + (k / (N - 1) - 0.5) * periodMin * 60000);
      try { const pv = sat.propagate(rec, this.tmpDate); pts[3 * k] = pv.position.x - a0.x; pts[3 * k + 1] = pv.position.y - a0.y; pts[3 * k + 2] = pv.position.z - a0.z; } catch { }
    }
    if (!this.selectedTrack) {
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pts, 3)); geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
      this.selectedTrack = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x9ff1c8, transparent: true, opacity: 0.6, depthWrite: false })); this.selectedTrack.frustumCulled = false;
      this.u.scene.add(this.selectedTrack);
    } else { this.selectedTrack.geometry.attributes.position.array.set(pts); this.selectedTrack.geometry.attributes.position.needsUpdate = true; }
  }
  satWorld(i, out) {
    const e = this.solar.earth.pos;
    if (this.lastT[i] !== Math.floor(this.u.time.unixMs)) this._propagate(i, this.u.time.unixMs);
    const dt2 = (this.u.time.unixMs - this.lastT[i]) / 1000;
    out[0] = e[0] + this.pos[3 * i] + this.vel[3 * i] * dt2; out[1] = e[1] + this.pos[3 * i + 1] + this.vel[3 * i + 1] * dt2; out[2] = e[2] + this.pos[3 * i + 2] + this.vel[3 * i + 2] * dt2;
    return out;
  }
  nearestSurface(camPos) {
    if (!this.points.visible) return Infinity;
    // use the Earth position posD was computed with: the frame loop moves Earth before this is called
    const e = this.earthAtUpdate || this.solar.earth.pos; const cx = camPos[0] - e[0], cy = camPos[1] - e[1], cz = camPos[2] - e[2];
    let best = Infinity;
    for (let i = 0; i < this.count; i++) { if (this.alpha[i] < 0.5 && !this.hideMarker.has(i)) continue; const d = Math.hypot(this.posD[3 * i] - cx, this.posD[3 * i + 1] - cy, this.posD[3 * i + 2] - cz) - SAT_SIZES[this.variant(i)] / 2; if (d < best) best = d; }
    return best;
  }
  pick(ray, camPos, pxPerRad) {
    if (!this.points.visible) return null;
    const e = this.solar.earth.pos; const cx = camPos[0] - e[0], cy = camPos[1] - e[1], cz = camPos[2] - e[2];
    let best = -1, bestSep = 10;
    for (let i = 0; i < this.count; i++) {
      if (this.alpha[i] < 0.5 && !this.hideMarker.has(i)) continue;
      const x = this.posD[3 * i] - cx, y = this.posD[3 * i + 1] - cy, z = this.posD[3 * i + 2] - cz;
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.999) continue;
      const sep = Math.acos(Math.min(1, dot)) * pxPerRad;
      if (sep < bestSep) { bestSep = sep; best = i; }
    }
    return best < 0 ? null : { sepPx: bestSep, desc: this.describe(best) };
  }
  showTrack(desc) {
    if (this.selectedTrack) { this.u.scene.remove(this.selectedTrack); this.selectedTrack.geometry.dispose(); this.selectedTrack = null; }
    this.selectedIndex = -1;
    if (!desc || desc.ref.layer !== 'sats') return;
    const i = desc.ref.index; this.selectedIndex = i;
    this._buildTrack(i);
  }
  describe(i) {
    const self = this, s = this.sats[i];
    const rec = this._rec(i);
    const rows = [['NORAD ID', String(s.id)], ['International designator', `${s.intl} (launched ${intlYear(s.intl)})`]];
    const groups = s.g.map(k => this.groups[k]).filter(g => g !== 'analyst').join(', ');
    rows.push(['Categories', groups || '—']);
    const n = s.mm; const periodMin = 1440 / n;
    const mu = 398600.4418; const a = Math.cbrt(mu / Math.pow(n * 2 * Math.PI / 86400, 2));
    rows.push(['Orbital period', fmtTime(periodMin * 60)], ['Inclination', `${fmtNum(s.inc, 3)}°`], ['Eccentricity', fmtNum(s.ecc, 5)]);
    rows.push(['Perigee / apogee altitude', `${fmtNum(a * (1 - s.ecc) - EARTH_RADIUS_KM, 4)} / ${fmtNum(a * (1 + s.ecc) - EARTH_RADIUS_KM, 4)} km`]);
    this._propagate(i, this.u.time.unixMs);
    const r = Math.hypot(this.pos[3 * i], this.pos[3 * i + 1], this.pos[3 * i + 2]), v = Math.hypot(this.vel[3 * i], this.vel[3 * i + 1], this.vel[3 * i + 2]);
    rows.push(['Altitude (now)', `${fmtNum(r - EARTH_RADIUS_KM, 4)} km`], ['Speed (now)', `${fmtNum(v, 4)} km/s (${fmtNum(v * 3600, 5)} km/h)`]);
    try {
      const gmst = sat.gstime(this.u.time.date);
      const geo = sat.eciToGeodetic({ x: this.pos[3 * i], y: this.pos[3 * i + 1], z: this.pos[3 * i + 2] }, gmst);
      rows.push(['Sub-satellite point', `${fmtNum(sat.degreesLat(geo.latitude), 3)}°, ${fmtNum(sat.degreesLong(geo.longitude), 3)}°`]);
    } catch { }
    const epochAge = (this.u.time.unixMs - Date.parse(s.ep + 'Z')) / 86400000;
    rows.push(['Element set epoch', `${s.ep.slice(0, 19).replace('T', ' ')} UTC (${fmtNum(epochAge, 2)} days ago)`], ['Drag term B*', s.bstar.toExponential(3)], ['Revolutions at epoch', String(s.rev)]);
    const kind = s.primary === 'analyst' ? 'Unidentified / analyst object' : s.n.includes('DEB') ? 'Debris' : s.n.includes('R/B') ? 'Rocket body' : 'Satellite';
    const featured = FEATURED[s.id];
    let desc = `${kind} tracked by radar and optical sensors. Position is computed live with the SGP4 propagator from the latest published orbital elements (accuracy typically ~1 km near the epoch, degrading by a few km per day). Shown as a marker: element sets carry no information about physical size.`;
    if (s.id === 25544) desc = 'The International Space Station, the largest structure ever built in space: 109 m across, 420 tonnes, continuously crewed since November 2000. It circles Earth every 93 minutes at 7.66 km/s, seeing 16 sunrises a day. ' + desc;
    else if (s.id === 48274) desc = 'Tiangong, China\'s space station, permanently crewed since 2022, about 55 m long with three modules. ' + desc;
    else if (s.id === 20580) desc = 'The Hubble Space Telescope, launched 1990: a 2.4 m telescope that has made over 1.5 million observations and transformed astronomy. ' + desc;
    return { kind: 'satellite', kindLabel: kind, name: s.n, variant: this.variant(i), sub: `${kind} · ${groups.split(',')[0] || ''} · ${fmtNum(periodMin, 3)} min orbit`, radius: SAT_SIZES[this.variant(i)] / 2, rows, desc, source: `CelesTrak GP element sets — ${this.liveStatus}. Propagation: SGP4 (satellite.js). TEME frame treated as J2000 (≈0.4° precession offset ignored).`,
      ref: { layer: 'sats', index: i }, getPos: (jd, out) => self.satWorld(i, out) };
  }
  labels(ctx, out) {
    if (!this.points.visible) return;
    const e = this.solar.earth.pos; const cam = ctx.camPos;
    const ex = e[0] - cam[0], ey = e[1] - cam[1], ez = e[2] - cam[2];
    const dEarth = Math.hypot(ex, ey, ez);
    const show = new Set([25544, 48274, 20580]);
    if (dEarth < 60000) { for (const id of Object.keys(FEATURED)) if (ctx.labelDensity > 0.4) show.add(+id); }
    for (const id of show) {
      const i = this.byId.get(id); if (i === undefined || this.alpha[i] < 0.5) continue;
      out.push({ text: FEATURED[id] || this.sats[i].n, x: ex + this.rel[3 * i], y: ey + this.rel[3 * i + 1], z: ez + this.rel[3 * i + 2], cls: 'sat', prio: id === 25544 ? 80 : 30, ref: { layer: 'sats', index: i } });
    }
    // nearby satellites get names when the camera is close
    if (dEarth < 80000 && ctx.labelDensity > 0.2) {
      const cx = cam[0] - e[0], cy = cam[1] - e[1], cz = cam[2] - e[2];
      const near = [];
      for (let i = 0; i < this.count; i++) { if (this.alpha[i] < 0.5) continue; const d = Math.hypot(this.rel[3 * i] - cx, this.rel[3 * i + 1] - cy, this.rel[3 * i + 2] - cz); if (d < 1500) near.push([d, i]); }
      near.sort((a, b) => a[0] - b[0]);
      for (const [, i] of near.slice(0, 12)) if (!show.has(this.sats[i].id)) out.push({ text: this.sats[i].n, x: ex + this.rel[3 * i], y: ey + this.rel[3 * i + 1], z: ez + this.rel[3 * i + 2], cls: 'sat', prio: 25, ref: { layer: 'sats', index: i } });
    }
  }
  searchEntries() { return this.sats.map((s, i) => ({ name: s.n, alt: `NORAD ${s.id}`, kind: 'satellite', ref: { layer: 'sats', index: i }, lowPrio: !FEATURED[s.id] })); }
}
function intlYear(intl) { const y = parseInt(intl.slice(0, 4)); return Number.isFinite(y) ? y : '?'; }
