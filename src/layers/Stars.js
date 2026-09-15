import * as THREE from 'three';
import { KM_PER_PC, KM_PER_LY, DEG, fmtNum, fmtDist, SUN_RADIUS_KM } from '../astro/units.js';
import { sunMaterial } from '../render/materials.js';
import { teffFromCI, luminosityFromAbsMag, radiusFromLumTeff, colorFromTeff, massEstimate, spectralClassDescription } from '../astro/starphys.js';

const GREEK = { Alp: 'α', Bet: 'β', Gam: 'γ', Del: 'δ', Eps: 'ε', Zet: 'ζ', Eta: 'η', The: 'θ', Iot: 'ι', Kap: 'κ', Lam: 'λ', Mu: 'μ', Nu: 'ν', Xi: 'ξ', Omi: 'ο', Pi: 'π', Rho: 'ρ', Sig: 'σ', Tau: 'τ', Ups: 'υ', Phi: 'φ', Chi: 'χ', Psi: 'ψ', Ome: 'ω' };
const CON_NAMES = { And: 'Andromeda', Ant: 'Antlia', Aps: 'Apus', Aqr: 'Aquarius', Aql: 'Aquila', Ara: 'Ara', Ari: 'Aries', Aur: 'Auriga', Boo: 'Boötes', Cae: 'Caelum', Cam: 'Camelopardalis', Cnc: 'Cancer', CVn: 'Canes Venatici', CMa: 'Canis Major', CMi: 'Canis Minor', Cap: 'Capricornus', Car: 'Carina', Cas: 'Cassiopeia', Cen: 'Centaurus', Cep: 'Cepheus', Cet: 'Cetus', Cha: 'Chamaeleon', Cir: 'Circinus', Col: 'Columba', Com: 'Coma Berenices', CrA: 'Corona Australis', CrB: 'Corona Borealis', Crv: 'Corvus', Crt: 'Crater', Cru: 'Crux', Cyg: 'Cygnus', Del: 'Delphinus', Dor: 'Dorado', Dra: 'Draco', Equ: 'Equuleus', Eri: 'Eridanus', For: 'Fornax', Gem: 'Gemini', Gru: 'Grus', Her: 'Hercules', Hor: 'Horologium', Hya: 'Hydra', Hyi: 'Hydrus', Ind: 'Indus', Lac: 'Lacerta', Leo: 'Leo', LMi: 'Leo Minor', Lep: 'Lepus', Lib: 'Libra', Lup: 'Lupus', Lyn: 'Lynx', Lyr: 'Lyra', Men: 'Mensa', Mic: 'Microscopium', Mon: 'Monoceros', Mus: 'Musca', Nor: 'Norma', Oct: 'Octans', Oph: 'Ophiuchus', Ori: 'Orion', Pav: 'Pavo', Peg: 'Pegasus', Per: 'Perseus', Phe: 'Phoenix', Pic: 'Pictor', Psc: 'Pisces', PsA: 'Piscis Austrinus', Pup: 'Puppis', Pyx: 'Pyxis', Ret: 'Reticulum', Sge: 'Sagitta', Sgr: 'Sagittarius', Sco: 'Scorpius', Scl: 'Sculptor', Sct: 'Scutum', Ser: 'Serpens', Sex: 'Sextans', Tau: 'Taurus', Tel: 'Telescopium', Tri: 'Triangulum', TrA: 'Triangulum Australe', Tuc: 'Tucana', UMa: 'Ursa Major', UMi: 'Ursa Minor', Vel: 'Vela', Vir: 'Virgo', Vol: 'Volans', Vul: 'Vulpecula' };
export { CON_NAMES };

export const STAR_VERT = /* glsl */`
  attribute float absmag; attribute vec3 color; attribute float rad;
  uniform vec3 uCamPc; uniform float uKmPerPc; uniform float uPixelRatio; uniform float uLimitMag; uniform float uSizeScale; uniform float uHidePc; uniform float uFovScale; uniform float uAllStars;
  varying vec3 vColor; varying float vAlpha; varying float vCore;
  #include <common>
#include <logdepthbuf_pars_vertex>
  void main() {
    vec3 rel = position - uCamPc;
    float d = max(length(rel * 1e-3) * 1e3, 1e-9);
    float m = absmag + 5.0 * log(d / 10.0) / 2.302585;
    float s = uSizeScale * pow(10.0, -0.2 * (m - 1.0));
    float alpha = 1.0;
    if (s < 1.8) { alpha = pow(s / 1.8, 1.5); s = 1.8; }
    alpha *= smoothstep(uLimitMag + 1.2, uLimitMag - 0.3, m);
    if (uAllStars > 0.5) alpha = max(alpha, 0.55); // "every star" mode: the faintest still show as a dim point
    s = min(s, 90.0);
    float discPx = rad / (d * uKmPerPc) * uFovScale * 2.0;
    if (discPx > s * 0.35 || d < uHidePc) alpha = 0.0;
    vAlpha = alpha; vColor = color; vCore = clamp((3.0 - m) * 0.12, 0.0, 0.8);
    vec4 mv = modelViewMatrix * vec4(rel * uKmPerPc, 1.0);
    gl_Position = projectionMatrix * mv;
    if (alpha <= 0.001) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = s * uPixelRatio;
    #include <logdepthbuf_vertex>
  }`;
export const STAR_FRAG = /* glsl */`
  varying vec3 vColor; varying float vAlpha; varying float vCore;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0;
    float core = exp(-r2 * 9.0); float halo = exp(-r2 * 2.2) * 0.32;
    float a = (core + halo) * vAlpha;
    vec3 col = vColor * a + vec3(core * a * (0.35 + vCore));
    gl_FragColor = vec4(col, a);
  }`;

export class StarLayer {
  constructor(universe, data, meta) {
    this.u = universe;
    this.count = meta.count;
    this.pos = data.pos; this.absmag = data.absmag; this.ci = data.ci; this.mag = data.mag; this.dist = data.dist; this.pm = data.pm; this.ids = data.ids;
    this.spectIdx = data.spect; this.conIdx = data.con; this.meta = meta; this.snapped = data.snapped;
    this.proper = new Map(meta.proper); this.bayer = new Map(meta.bayer); this.flam = new Map(meta.flam); this.gl = new Map(meta.gl); this.bf = new Map(meta.bf);
    this.vars = new Map(meta.vars.map(v => [v[0], v])); this.notes = new Map(meta.notes);
    this.exoHost = new Map(); // star index -> system (set by Exoplanets layer)
    this.visible = true;

    const n = this.count;
    const color = new Float32Array(n * 3), rad = new Float32Array(n);
    this.radiusKm = rad; this.teff = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const T = teffFromCI(this.ci[i]); this.teff[i] = T;
      const [r, g, b] = colorFromTeff(T);
      color[3 * i] = r; color[3 * i + 1] = g; color[3 * i + 2] = b;
      const L = luminosityFromAbsMag(this.absmag[i], T);
      rad[i] = radiusFromLumTeff(L, T) * SUN_RADIUS_KM;
    }
    // Append the Sun as a star point (hidden when nearby)
    const posAll = new Float32Array((n + 1) * 3); posAll.set(this.pos);
    const absAll = new Float32Array(n + 1); absAll.set(this.absmag); absAll[n] = 4.83;
    const colAll = new Float32Array((n + 1) * 3); colAll.set(color); colAll.set(colorFromTeff(5772), 3 * n);
    const radAll = new Float32Array(n + 1); radAll.set(rad); radAll[n] = SUN_RADIUS_KM;

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(posAll, 3));
    geo.setAttribute('absmag', new THREE.BufferAttribute(absAll, 1));
    geo.setAttribute('color', new THREE.BufferAttribute(colAll, 3));
    geo.setAttribute('rad', new THREE.BufferAttribute(radAll, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: STAR_VERT, fragmentShader: STAR_FRAG, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
      uniforms: { uCamPc: { value: new THREE.Vector3() }, uKmPerPc: { value: KM_PER_PC }, uPixelRatio: { value: 1 }, uLimitMag: { value: 7.5 }, uSizeScale: { value: 7.0 }, uAllStars: { value: 0 }, uHidePc: { value: 0.003 }, uFovScale: { value: 1000 } }
    });
    this.points = new THREE.Points(geo, this.mat);
    this.points.frustumCulled = false; this.points.renderOrder = 5;
    universe.scene.add(this.points);

    // Pool of sphere meshes for stars the camera is close to
    this.pool = [];
    const sphereGeo = new THREE.SphereGeometry(1, 48, 32);
    for (let k = 0; k < 6; k++) {
      const mesh = new THREE.Mesh(sphereGeo, sunMaterial());
      mesh.visible = false; mesh.frustumCulled = false; mesh.renderOrder = 6;
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: true }));
      glow.visible = false; glow.renderOrder = 7;
      universe.scene.add(mesh); universe.scene.add(glow);
      this.pool.push({ mesh, glow, star: -1 });
    }
    this.nearStars = []; // indices within reach
    this._frame = 0;
    this._tmp = new THREE.Vector3();
  }

  setLimitMag(m) { this.mat.uniforms.uLimitMag.value = m; }

  name(i) {
    if (i === this.count) return 'Sun';
    const p = this.proper.get(i); if (p) return p;
    const b = this.bayer.get(i), con = this.meta.conDict[this.conIdx[i] - 1] || '';
    if (b) { const m = b.match(/^([A-Za-z]+)(-?\d*)$/); const g = m ? (GREEK[m[1]] || m[1]) + (m[2] ? m[2].replace('-', '') : '') : b; return `${g} ${con}`; }
    const f = this.flam.get(i); if (f) return `${f} ${con}`;
    const bfn = this.bf.get(i); if (bfn) return `${bfn} ${con}`.trim();
    const g = this.gl.get(i); if (g) return g;
    const hip = this.ids[3 * i], hd = this.ids[3 * i + 1], hr = this.ids[3 * i + 2];
    if (hip) return `HIP ${hip}`; if (hd) return `HD ${hd}`; if (hr) return `HR ${hr}`;
    return `Star #${i}`;
  }
  worldPos(i, out) {
    if (i === this.count) { out[0] = out[1] = out[2] = 0; return out; }
    out[0] = this.pos[3 * i] * KM_PER_PC; out[1] = this.pos[3 * i + 1] * KM_PER_PC; out[2] = this.pos[3 * i + 2] * KM_PER_PC; return out;
  }
  describe(i) {
    const self = this;
    const isExoHost = this.exoHost.has(i);
    const T = this.teff[i], M = this.absmag[i], L = luminosityFromAbsMag(M, T), R = radiusFromLumTeff(L, T);
    const sp = this.meta.spectDict[this.spectIdx[i] - 1] || '';
    const con = this.meta.conDict[this.conIdx[i] - 1] || '';
    const d = this.dist[i];
    const rows = [];
    const names = [];
    const p = this.proper.get(i); if (p) names.push(p);
    const b = this.bayer.get(i); if (b) names.push(`${b} ${con}`);
    const f = this.flam.get(i); if (f) names.push(`${f} ${con}`);
    const g = this.gl.get(i); if (g) names.push(g);
    const hip = this.ids[3 * i], hd = this.ids[3 * i + 1], hr = this.ids[3 * i + 2];
    if (hip) names.push(`HIP ${hip}`); if (hd) names.push(`HD ${hd}`); if (hr) names.push(`HR ${hr}`);
    rows.push(['Designations', names.join(', ') || '—']);
    if (con) rows.push(['Constellation', CON_NAMES[con] || con]);
    rows.push(['Distance', `${fmtNum(d * 3.26156)} ly (${fmtNum(d)} pc)${this.snapped && this.snapped[i] ? ' — member of an open cluster: placed at the cluster\'s Gaia distance, which is far more accurate than its own parallax' : ''}`]);
    rows.push(['Apparent magnitude', fmtNum(this.mag[i], 3)]);
    rows.push(['Absolute magnitude', fmtNum(M, 3)]);
    if (sp) rows.push(['Spectral type', `${sp}${spectralClassDescription(sp) ? ' — ' + spectralClassDescription(sp) : ''}`]);
    rows.push(['Colour index (B−V)', fmtNum(this.ci[i], 2)]);
    rows.push(['Temperature (est.)', `${fmtNum(T, 4)} K`]);
    rows.push(['Luminosity (est.)', `${fmtNum(L, 3)} × Sun`]);
    rows.push(['Radius (est.)', `${fmtNum(R, 3)} × Sun (${fmtDist(R * SUN_RADIUS_KM)})`]);
    rows.push(['Mass (rough est.)', `${fmtNum(massEstimate(L), 2)} × Sun`]);
    const pmra = this.pm[3 * i], pmdec = this.pm[3 * i + 1], rv = this.pm[3 * i + 2];
    if (pmra || pmdec) rows.push(['Proper motion', `${fmtNum(Math.hypot(pmra, pmdec), 3)} mas/yr`]);
    if (rv) rows.push(['Radial velocity', `${fmtNum(rv, 3)} km/s`]);
    const v = this.vars.get(i); if (v) rows.push(['Variable star', `${v[1]}${Number.isFinite(v[2]) ? ` (mag ${fmtNum(v[3], 2)}–${fmtNum(v[2], 2)})` : ''}`]);
    const ra = Math.atan2(this.pos[3 * i + 1], this.pos[3 * i]) / DEG, dec = Math.asin(this.pos[3 * i + 2] / d) / DEG;
    rows.push(['RA / Dec (J2000)', `${fmtRA(ra)} / ${fmtDec(dec)}`]);
    let desc = this.notes.get(i) || '';
    if (isExoHost) { const s = this.exoHost.get(i); rows.push(['Known planets', `${s.p.length}: ${s.p.map(p => p.n).join(', ')}`]); if (!desc) desc = `Host star of ${s.p.length} confirmed exoplanet${s.p.length > 1 ? 's' : ''} (NASA Exoplanet Archive).`; }
    if (!desc) desc = `A ${spectralClassDescription(sp) || 'star'} ${fmtNum(d * 3.26156, 3)} light-years from the Sun.` + (i >= this.meta.hygCount ? ' Position and properties from the NASA Exoplanet Archive (not in the Hipparcos catalog).' : '');
    return {
      kind: 'star', name: this.name(i), sub: sp ? `${sp} star · ${fmtNum(d * 3.26156, 3)} ly` : `${fmtNum(d * 3.26156, 3)} ly`, radius: this.radiusKm[i], rows, desc,
      source: i >= this.meta.hygCount ? 'NASA Exoplanet Archive (pscomppars); temperature/radius estimated from colour and magnitude where not given.' : 'HYG v4.1 (Hipparcos, Yale BSC, Gliese); temperature, luminosity, radius and mass are estimates derived from B−V colour and absolute magnitude.',
      getPos: (jd, out) => self.worldPos(i, out), ref: { layer: 'stars', index: i }
    };
  }

  // Screen-space pick: returns {sepPx, desc} or null
  pick(ray, camPos, pxPerRad) {
    const n = this.count;
    let best = -1, bestSep = 14;
    const cx = camPos[0] / KM_PER_PC, cy = camPos[1] / KM_PER_PC, cz = camPos[2] / KM_PER_PC;
    const lim = this.mat.uniforms.uLimitMag.value + 1.0;
    for (let i = 0; i <= n; i++) {
      const x = (i === n ? 0 : this.pos[3 * i]) - cx, y = (i === n ? 0 : this.pos[3 * i + 1]) - cy, z = (i === n ? 0 : this.pos[3 * i + 2]) - cz;
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d;
      if (dot < 0.9999) continue;
      const m = (i === n ? 4.83 : this.absmag[i]) + 5 * Math.log10(d / 10);
      if (m > lim) continue;
      const sep = Math.acos(Math.min(1, dot)) * pxPerRad;
      const bonus = Math.max(0, 6 - m); // easier to click bright stars
      if (sep - bonus < bestSep) { bestSep = sep - bonus; best = i; }
    }
    if (best < 0) return null;
    return { sepPx: bestSep, desc: best === n ? null : this.describe(best), sunHit: best === n };
  }

  update(ctx) {
    const u = this.mat.uniforms;
    u.uCamPc.value.set(ctx.camPos[0] / KM_PER_PC, ctx.camPos[1] / KM_PER_PC, ctx.camPos[2] / KM_PER_PC);
    u.uPixelRatio.value = ctx.pixelRatio; u.uFovScale.value = ctx.pxPerRad;
    this.points.visible = this.visible;
    // near-star sphere pool, refreshed every few frames
    if ((this._frame++ % 8) === 0) this._refreshNear(ctx);
    for (const slot of this.pool) {
      if (slot.star < 0 || !this.visible) { slot.mesh.visible = slot.glow.visible = false; continue; }
      const i = slot.star;
      const rel = this._tmp.set(this.pos[3 * i] * KM_PER_PC - ctx.camPos[0], this.pos[3 * i + 1] * KM_PER_PC - ctx.camPos[1], this.pos[3 * i + 2] * KM_PER_PC - ctx.camPos[2]);
      const R = this.radiusKm[i];
      const d = rel.length();
      slot.mesh.position.copy(rel); slot.mesh.scale.setScalar(R); slot.mesh.visible = true;
      // glow scaled so the star stays visible as a bright blob at any range
      const px = R / d * ctx.pxPerRad;
      const glowScale = Math.max(R * 3.2, d / ctx.pxPerRad * Math.max(12, Math.min(90, 40 - 5 * (this.absmag[i] + 5 * Math.log10(d / KM_PER_PC / 10)))) );
      slot.glow.position.copy(rel); slot.glow.scale.set(glowScale, glowScale, 1); slot.glow.visible = true;
      slot.glow.material.opacity = px > 200 ? 0.3 : 0.9;
    }
  }
  _refreshNear(ctx) {
    const cx = ctx.camPos[0] / KM_PER_PC, cy = ctx.camPos[1] / KM_PER_PC, cz = ctx.camPos[2] / KM_PER_PC;
    const lim = this.mat.uniforms.uHidePc.value; const lim2 = lim * lim;
    const found = [];
    for (let i = 0; i < this.count; i++) {
      const x = this.pos[3 * i] - cx, y = this.pos[3 * i + 1] - cy, z = this.pos[3 * i + 2] - cz;
      const d2 = x * x + y * y + z * z;
      if (d2 < lim2) found.push([d2, i]);
    }
    found.sort((a, b) => a[0] - b[0]);
    this.nearStars = found.slice(0, this.pool.length).map(f => f[1]);
    for (let k = 0; k < this.pool.length; k++) {
      const slot = this.pool[k];
      const i = this.nearStars[k] ?? -1;
      if (i !== slot.star) {
        slot.star = i;
        if (i >= 0) {
          const [r, g, b] = colorFromTeff(this.teff[i]);
          // saturate the eye-response colour so cool giants read deep orange and hot stars blue-white
          const lum = 0.3 * r + 0.5 * g + 0.2 * b, sat = 1.9;
          const R = Math.min(1, Math.max(0, lum + (r - lum) * sat)), Gc = Math.min(1, Math.max(0, lum + (g - lum) * sat)), B = Math.min(1, Math.max(0, lum + (b - lum) * sat));
          // photographs of cool giants read orange-red: deepen the green/blue channels for T < 5000 K
          const cool = THREE.MathUtils.clamp((5000 - this.teff[i]) / 1800, 0, 1);
          slot.mesh.material.uniforms.color.value.setRGB(R, Math.pow(Gc, 1 + 0.9 * cool), Math.pow(B, 1 + 1.4 * cool));
          slot.glow.material.color.setRGB(r, g, b);
        }
      }
    }
  }
  // objects for camera speed / nearest-surface computation
  nearestSurface(camPos) {
    let best = Infinity;
    for (const i of this.nearStars) {
      const d = Math.hypot(this.pos[3 * i] * KM_PER_PC - camPos[0], this.pos[3 * i + 1] * KM_PER_PC - camPos[1], this.pos[3 * i + 2] * KM_PER_PC - camPos[2]) - this.radiusKm[i];
      if (d < best) best = d;
    }
    return best;
  }
  // label candidates: named stars, by apparent brightness from the camera
  labels(ctx, out, maxCount) {
    const cx = ctx.camPos[0] / KM_PER_PC, cy = ctx.camPos[1] / KM_PER_PC, cz = ctx.camPos[2] / KM_PER_PC;
    const cand = [];
    for (const [i, name] of this.proper) {
      const x = this.pos[3 * i] - cx, y = this.pos[3 * i + 1] - cy, z = this.pos[3 * i + 2] - cz;
      const d = Math.sqrt(x * x + y * y + z * z);
      const m = this.absmag[i] + 5 * Math.log10(d / 10);
      if (m > 4.5 + ctx.labelDensity * 4) continue;
      if ((x * ctx.forward.x + y * ctx.forward.y + z * ctx.forward.z) / d < ctx.cosHalfFov) continue;
      cand.push([m, i, name, x * KM_PER_PC, y * KM_PER_PC, z * KM_PER_PC]);
    }
    cand.sort((a, b) => a[0] - b[0]);
    for (const c of cand.slice(0, maxCount)) out.push({ text: c[2], x: c[3], y: c[4], z: c[5], cls: 'star', prio: 10 - c[0], ref: { layer: 'stars', index: c[1] } });
  }
  searchEntries() {
    const out = [];
    for (const [i, n] of this.proper) out.push({ name: n, kind: 'star', ref: { layer: 'stars', index: i } });
    for (const [i, b] of this.bayer) { const con = this.meta.conDict[this.conIdx[i] - 1] || ''; const m = b.match(/^([A-Za-z]+)(-?\d*)$/); const g = m ? (GREEK[m[1]] || m[1]) + (m[2] || '') : b; out.push({ name: `${g} ${con}`, alt: `${b} ${con} ${this.name(i)}`, kind: 'star', ref: { layer: 'stars', index: i } }); }
    for (const [i, f] of this.flam) { if (this.bayer.has(i)) continue; const con = this.meta.conDict[this.conIdx[i] - 1] || ''; out.push({ name: `${f} ${con}`, kind: 'star', ref: { layer: 'stars', index: i } }); }
    for (const [i, g] of this.gl) out.push({ name: g, kind: 'star', ref: { layer: 'stars', index: i } });
    for (let i = 0; i < this.count; i++) { const hip = this.ids[3 * i], hd = this.ids[3 * i + 1]; if (hip) out.push({ name: `HIP ${hip}`, kind: 'star', ref: { layer: 'stars', index: i }, lowPrio: true }); else if (hd) out.push({ name: `HD ${hd}`, kind: 'star', ref: { layer: 'stars', index: i }, lowPrio: true }); }
    return out;
  }
}

export function fmtRA(deg) { const h = deg / 15; const hh = Math.floor(h), mm = Math.floor((h - hh) * 60), ss = ((h - hh) * 60 - mm) * 60; return `${hh}h ${String(mm).padStart(2, '0')}m ${ss.toFixed(1).padStart(4, '0')}s`; }
export function fmtDec(deg) { const s = deg < 0 ? '−' : '+'; const a = Math.abs(deg); const dd = Math.floor(a), mm = Math.floor((a - dd) * 60), ss = ((a - dd) * 60 - mm) * 60; return `${s}${dd}° ${String(mm).padStart(2, '0')}′ ${ss.toFixed(0).padStart(2, '0')}″`; }

let _glowTex = null;
export function makeGlowTexture() {
  if (_glowTex) return _glowTex;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)'); grad.addColorStop(0.08, 'rgba(255,255,255,0.9)'); grad.addColorStop(0.25, 'rgba(255,255,255,0.28)'); grad.addColorStop(0.6, 'rgba(255,255,255,0.05)'); grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad; g.fillRect(0, 0, 128, 128);
  _glowTex = new THREE.CanvasTexture(c);
  return _glowTex;
}
