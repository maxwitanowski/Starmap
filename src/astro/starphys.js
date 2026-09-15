// Derived stellar physics from catalog values (B-V colour index, absolute magnitude).

// Ballesteros (2012) formula: effective temperature from B-V
export function teffFromCI(ci) {
  return 4600 * (1 / (0.92 * ci + 1.7) + 1 / (0.92 * ci + 0.62));
}
// Luminosity in solar units from absolute visual magnitude (ignores bolometric correction beyond a mild fit)
export function luminosityFromAbsMag(M, teff = 5772) {
  // rough bolometric correction
  let bc = 0;
  if (teff > 8000) bc = -0.3 - 2.0 * Math.log10(teff / 8000);
  else if (teff < 4500) bc = -0.6 - 3.5 * Math.log10(4500 / teff);
  const Mbol = M + bc;
  return Math.pow(10, (4.74 - Mbol) / 2.5);
}
// Radius in solar radii from Stefan-Boltzmann
export function radiusFromLumTeff(L, teff) {
  return Math.sqrt(L) * Math.pow(5772 / teff, 2);
}
// Approximate main-sequence mass from luminosity (mass-luminosity relation), solar masses
export function massEstimate(L) {
  if (L < 0.03) return Math.pow(L / 0.23, 1 / 2.3);
  if (L < 16) return Math.pow(L, 1 / 4);
  if (L < 1.7e6) return Math.pow(L / 1.4, 1 / 3.5);
  return L / 32000;
}
// Blackbody-ish sRGB colour for a temperature (Kelvin). Returns [r,g,b] 0..1
export function colorFromTeff(T) {
  const t = Math.min(40000, Math.max(1000, T)) / 100;
  let r, g, b;
  if (t <= 66) { r = 255; g = 99.4708025861 * Math.log(t) - 161.1195681661; }
  else { r = 329.698727446 * Math.pow(t - 60, -0.1332047592); g = 288.1221695283 * Math.pow(t - 60, -0.0755148492); }
  if (t >= 66) b = 255; else if (t <= 19) b = 0; else b = 138.5177312231 * Math.log(t - 10) - 305.0447927307;
  const c = v => Math.min(255, Math.max(0, v)) / 255;
  // desaturate slightly toward white so faint stars read as stars, not paint
  const rr = c(r), gg = c(g), bb = c(b);
  const k = 0.88;
  return [rr * k + (1 - k), gg * k + (1 - k), bb * k + (1 - k)];
}
export function spectralClassDescription(sp) {
  if (!sp) return '';
  const cls = sp[0].toUpperCase();
  const lum = (sp.match(/(Ia|Ib|II|III|IV|V|VI|VII|D)/) || [])[1];
  const clsText = {
    O: 'blue, extremely hot and luminous (over 30,000 K)', B: 'blue-white, very hot (10,000–30,000 K)', A: 'white (7,500–10,000 K)',
    F: 'yellow-white (6,000–7,500 K)', G: 'yellow, Sun-like (5,200–6,000 K)', K: 'orange (3,700–5,200 K)', M: 'red, cool (below 3,700 K)',
    L: 'very cool brown dwarf', T: 'methane brown dwarf', W: 'Wolf-Rayet star shedding its outer layers', C: 'carbon star', S: 'S-type giant', D: 'white dwarf'
  }[cls] || '';
  const lumText = { Ia: 'luminous supergiant', Ib: 'supergiant', II: 'bright giant', III: 'giant', IV: 'subgiant', V: 'main-sequence dwarf', VI: 'subdwarf', VII: 'white dwarf', D: 'white dwarf' }[lum] || '';
  return [clsText, lumText].filter(Boolean).join(', ');
}
