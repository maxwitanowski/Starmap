import * as THREE from 'three';
import { KM_PER_PC, DEG, fmtNum, SUN_RADIUS_KM } from '../astro/units.js';
import { teffFromCI, luminosityFromAbsMag, radiusFromLumTeff, colorFromTeff, spectralClassDescription } from '../astro/starphys.js';
import { STAR_VERT, STAR_FRAG, fmtRA, fmtDec } from './Stars.js';

// The deep star field: Gaia DR3 stars brighter than G = 11 with parallax S/N > 5 (1.1 million after removing the
// Hipparcos/HYG stars). Positions from Gaia parallaxes; colour and temperature from BP−RP.
export class GaiaFieldLayer {
  constructor(universe, data, idsText) {
    this.u = universe; this.visible = true; this.ids = idsText;
    this.pos = data.pos; this.absmag = data.absmag; this.ci = data.ci; this.mag = data.mag;
    const n = this.count = this.absmag.length;
    const color = new Float32Array(n * 3), rad = new Float32Array(n);
    this.teff = new Float32Array(n); this.radiusKm = rad;
    for (let i = 0; i < n; i++) {
      const T = teffFromCI(this.ci[i]); this.teff[i] = T;
      const [r, g, b] = colorFromTeff(T); color[3 * i] = r; color[3 * i + 1] = g; color[3 * i + 2] = b;
      rad[i] = radiusFromLumTeff(luminosityFromAbsMag(this.absmag[i], T), T) * SUN_RADIUS_KM;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('absmag', new THREE.BufferAttribute(this.absmag, 1));
    geo.setAttribute('color', new THREE.BufferAttribute(color, 3));
    geo.setAttribute('rad', new THREE.BufferAttribute(rad, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e30);
    this.mat = new THREE.ShaderMaterial({ vertexShader: STAR_VERT, fragmentShader: STAR_FRAG, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
      uniforms: { uCamPc: { value: new THREE.Vector3() }, uKmPerPc: { value: KM_PER_PC }, uPixelRatio: { value: 1 }, uLimitMag: { value: 7.5 }, uSizeScale: { value: 7.0 }, uAllStars: { value: 0 }, uHidePc: { value: 0.0 }, uFovScale: { value: 1000 } } });
    this.points = new THREE.Points(geo, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 5;
    universe.scene.add(this.points);
  }
  setLimitMag(m) { this.mat.uniforms.uLimitMag.value = m; }
  update(ctx) {
    this.points.visible = this.visible;
    const u = this.mat.uniforms;
    u.uCamPc.value.set(ctx.camPos[0] / KM_PER_PC, ctx.camPos[1] / KM_PER_PC, ctx.camPos[2] / KM_PER_PC);
    u.uPixelRatio.value = ctx.pixelRatio; u.uFovScale.value = ctx.pxPerRad;
  }
  worldPos(i, out) { out[0] = this.pos[3 * i] * KM_PER_PC; out[1] = this.pos[3 * i + 1] * KM_PER_PC; out[2] = this.pos[3 * i + 2] * KM_PER_PC; return out; }
  nearestSurface(camPos) {
    // only worth checking when the camera is well outside the Solar System
    const d0 = Math.hypot(camPos[0], camPos[1], camPos[2]) / KM_PER_PC; if (d0 < 0.05) return Infinity;
    const cx = camPos[0] / KM_PER_PC, cy = camPos[1] / KM_PER_PC, cz = camPos[2] / KM_PER_PC;
    let best = Infinity;
    for (let i = 0; i < this.count; i++) {
      const x = this.pos[3 * i] - cx; if (x > 0.05 || x < -0.05) continue;
      const y = this.pos[3 * i + 1] - cy; if (y > 0.05 || y < -0.05) continue;
      const z = this.pos[3 * i + 2] - cz; if (z > 0.05 || z < -0.05) continue;
      const d = Math.sqrt(x * x + y * y + z * z) * KM_PER_PC - this.radiusKm[i]; if (d < best) best = d;
    }
    return best;
  }
  pick(ray, camPos, pxPerRad) {
    if (!this.visible) return null;
    const cx = camPos[0] / KM_PER_PC, cy = camPos[1] / KM_PER_PC, cz = camPos[2] / KM_PER_PC;
    let best = -1, bestSep = 10; const lim = this.mat.uniforms.uLimitMag.value + 1;
    for (let i = 0; i < this.count; i++) {
      const x = this.pos[3 * i] - cx, y = this.pos[3 * i + 1] - cy, z = this.pos[3 * i + 2] - cz;
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.9999) continue;
      const m = this.absmag[i] + 5 * Math.log10(d / 10); if (m > lim) continue;
      const sep = Math.acos(Math.min(1, dot)) * pxPerRad - Math.max(0, 6 - m);
      if (sep < bestSep) { bestSep = sep; best = i; }
    }
    return best < 0 ? null : { sepPx: bestSep, desc: this.describe(best) };
  }
  name(i) { return 'Gaia DR3 ' + this.ids.slice(19 * i, 19 * i + 19).trim(); }
  describe(i) {
    const self = this, T = this.teff[i], M = this.absmag[i], L = luminosityFromAbsMag(M, T), R = radiusFromLumTeff(L, T);
    const d = Math.hypot(this.pos[3 * i], this.pos[3 * i + 1], this.pos[3 * i + 2]);
    const ra = ((Math.atan2(this.pos[3 * i + 1], this.pos[3 * i]) / DEG) + 360) % 360, dec = Math.asin(this.pos[3 * i + 2] / d) / DEG;
    const cls = T > 30000 ? 'O' : T > 10000 ? 'B' : T > 7500 ? 'A' : T > 6000 ? 'F' : T > 5200 ? 'G' : T > 3700 ? 'K' : 'M';
    const rows = [['Designation', this.name(i)], ['Distance', `${fmtNum(d * 3.26156)} ly (${fmtNum(d)} pc), from the Gaia parallax`], ['Apparent magnitude (G)', fmtNum(this.mag[i], 3)], ['Absolute magnitude', fmtNum(M, 2)],
      ['Temperature (est.)', `${fmtNum(T, 4)} K (${cls}-type)`], ['Luminosity (est.)', `${fmtNum(L, 3)} × Sun`], ['Radius (est.)', `${fmtNum(R, 3)} × Sun`], ['RA / Dec (J2000)', `${fmtRA(ra)} / ${fmtDec(dec)}`]];
    return { kind: 'star', kindLabel: 'Star (Gaia DR3)', name: this.name(i), sub: `${cls}-type star · ${fmtNum(d * 3.26156, 3)} ly`, radius: this.radiusKm[i], rows,
      desc: `A ${spectralClassDescription(cls) || 'star'} ${fmtNum(d * 3.26156, 3)} light-years away, measured by ESA's Gaia mission. Its distance comes from Gaia's parallax; temperature, luminosity and radius are estimates from its colour and brightness.`,
      source: 'Gaia DR3 (ESA), gaia_source_lite: G < 11, parallax signal-to-noise > 5.', ref: { layer: 'gaia', index: i }, getPos: (jd, out) => self.worldPos(i, out) };
  }
  labels() { }
  searchEntries() { return []; }
}
