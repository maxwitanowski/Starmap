import * as THREE from 'three';
import { KM_PER_PC, DEG, fmtNum, fmtDist, SUN_RADIUS_KM } from '../astro/units.js';
import { teffFromCI, luminosityFromAbsMag, radiusFromLumTeff, colorFromTeff } from '../astro/starphys.js';
import { STAR_VERT, STAR_FRAG, fmtRA, fmtDec } from './Stars.js';

// Real stars in other galaxies: Gaia DR3 members of the Large and Small Magellanic Clouds (selected by proper motion and
// parallax). Sky positions, brightness and colour are measured; individual distances are not, so every star sits at its
// galaxy's distance with a modelled line-of-sight spread.
const GAL = [
  { key: 'lmc', name: 'Large Magellanic Cloud', dpc: 49970, dm: 18.49, depthPc: 1500 },
  { key: 'smc', name: 'Small Magellanic Cloud', dpc: 62440, dm: 18.98, depthPc: 2500 },
];

export class GaiaStarLayer {
  constructor(universe, data, idsText) {
    this.u = universe; this.visible = true; this.ids = idsText;
    this.ra = data.ra; this.dec = data.dec; this.g = data.g; this.bprp = data.bprp; this.which = data.which;
    const n = this.count = this.ra.length;
    this.pos = new Float32Array(n * 3); // pc, equatorial (same convention as the HYG layer)
    const absmag = new Float32Array(n), color = new Float32Array(n * 3), rad = new Float32Array(n);
    this.teff = new Float32Array(n); this.absmag = absmag; this.radiusKm = rad;
    const rnd = mulberry(5);
    const gauss = () => { let u = 0, v = 0; while (u === 0) u = rnd(); while (v === 0) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
    for (let i = 0; i < n; i++) {
      const G = GAL[this.which[i]];
      const d = G.dpc + gauss() * G.depthPc;
      const ra = this.ra[i] * DEG, dec = this.dec[i] * DEG;
      this.pos[3 * i] = d * Math.cos(dec) * Math.cos(ra); this.pos[3 * i + 1] = d * Math.cos(dec) * Math.sin(ra); this.pos[3 * i + 2] = d * Math.sin(dec);
      absmag[i] = this.g[i] - G.dm;
      // Gaia BP-RP -> approximate B-V -> temperature (Ballesteros); rough but consistent with the HYG colours
      const T = teffFromCI(Math.max(-0.3, Math.min(2.4, 0.8 * this.bprp[i] - 0.05))); this.teff[i] = T;
      const [r, g, b] = colorFromTeff(T); color[3 * i] = r; color[3 * i + 1] = g; color[3 * i + 2] = b;
      rad[i] = radiusFromLumTeff(luminosityFromAbsMag(absmag[i], T), T) * SUN_RADIUS_KM;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('absmag', new THREE.BufferAttribute(absmag, 1));
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
  pick(ray, camPos, pxPerRad) {
    if (!this.visible) return null;
    const cx = camPos[0] / KM_PER_PC, cy = camPos[1] / KM_PER_PC, cz = camPos[2] / KM_PER_PC;
    let best = -1, bestSep = 12; const lim = this.mat.uniforms.uLimitMag.value + 1;
    for (let i = 0; i < this.count; i++) {
      const x = this.pos[3 * i] - cx, y = this.pos[3 * i + 1] - cy, z = this.pos[3 * i + 2] - cz;
      const d = Math.sqrt(x * x + y * y + z * z);
      const dot = (x * ray.x + y * ray.y + z * ray.z) / d; if (dot < 0.9999) continue;
      const m = this.absmag[i] + 5 * Math.log10(d / 10); if (m > lim) continue;
      const sep = Math.acos(Math.min(1, dot)) * pxPerRad - Math.max(0, 5 - m);
      if (sep < bestSep) { bestSep = sep; best = i; }
    }
    return best < 0 ? null : { sepPx: bestSep, desc: this.describe(best) };
  }
  name(i) { return 'Gaia DR3 ' + this.ids.slice(19 * i, 19 * i + 19).trim(); }
  describe(i) {
    const self = this, G = GAL[this.which[i]], T = this.teff[i], M = this.absmag[i], L = luminosityFromAbsMag(M, T), R = radiusFromLumTeff(L, T);
    const kind = L > 20000 ? 'supergiant' : L > 1500 ? 'bright giant' : L > 100 ? 'giant' : 'luminous star';
    const rows = [
      ['Galaxy', `${G.name} (${fmtNum(G.dpc * 3.26156 / 1000, 3)} thousand ly)`], ['Gaia DR3 source', this.ids.slice(19 * i, 19 * i + 19).trim()],
      ['Apparent magnitude (G)', fmtNum(this.g[i], 3)], ['Colour BP−RP', fmtNum(this.bprp[i], 2)], ['Absolute magnitude', `${fmtNum(M, 2)} (at the galaxy's distance)`],
      ['Temperature (est.)', `${fmtNum(T, 4)} K`], ['Luminosity (est.)', `${fmtNum(L, 3)} × Sun`], ['Radius (est.)', `${fmtNum(R, 3)} × Sun`],
      ['RA / Dec (J2000)', `${fmtRA(this.ra[i])} / ${fmtDec(this.dec[i])}`],
    ];
    return { kind: 'star', kindLabel: `Star in the ${G.name}`, name: this.name(i), sub: `${kind} in the ${G.name}`, radius: this.radiusKm[i], rows,
      desc: `A ${kind} in the ${G.name}, one of the brightest stars of that galaxy measured by ESA's Gaia mission. Its sky position, brightness and colour are measured; its exact depth within the galaxy is not, so it is placed at the galaxy's distance with a modelled spread of a few thousand light-years. Membership is inferred from its proper motion and parallax.`,
      source: 'Gaia DR3 (ESA), gaia_source_lite, selected by proper motion and parallax within the galaxy\'s footprint. Temperature, luminosity and radius are estimates from colour and magnitude.',
      ref: { layer: 'mcstars', index: i }, getPos: (jd, out) => self.worldPos(i, out) };
  }
  labels() { }
  searchEntries() { return []; }
}
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
