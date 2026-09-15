import { DEG, OBLIQUITY, KM_PER_AU, JD_J2000 } from './units.js';

const GAUSS_K = 0.01720209895; // rad/day, sqrt(GM_sun) in AU^1.5/day

export function solveKepler(M, e) {
  M = M % (2 * Math.PI); if (M < 0) M += 2 * Math.PI;
  let E = e < 0.8 ? M : Math.PI;
  for (let i = 0; i < 30; i++) {
    const dE = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    E -= dE;
    if (Math.abs(dE) < 1e-12) break;
  }
  return E;
}

// Position in the orbital reference plane frame given classical elements (angles in radians).
// Returns [x,y,z] in the same length unit as a.
export function elementsToPosition(a, e, inc, om, w, M, out = [0, 0, 0]) {
  const E = solveKepler(M, e);
  const xp = a * (Math.cos(E) - e);
  const yp = a * Math.sqrt(1 - e * e) * Math.sin(E);
  const cw = Math.cos(w), sw = Math.sin(w), co = Math.cos(om), so = Math.sin(om), ci = Math.cos(inc), si = Math.sin(inc);
  out[0] = (cw * co - sw * so * ci) * xp + (-sw * co - cw * so * ci) * yp;
  out[1] = (cw * so + sw * co * ci) * xp + (-sw * so + cw * co * ci) * yp;
  out[2] = (sw * si) * xp + (cw * si) * yp;
  return out;
}

export function eclipticToEquatorial(v) {
  const c = Math.cos(OBLIQUITY), s = Math.sin(OBLIQUITY);
  const y = v[1], z = v[2];
  v[1] = y * c - z * s;
  v[2] = y * s + z * c;
  return v;
}

// JPL approximate Keplerian elements (Standish), J2000 ecliptic, valid 1800-2050.
// [a, e, I, L, wbar, Omega] and per-century rates.
export const PLANET_ELEMENTS = {
  Mercury: { el: [0.38709927, 0.20563593, 7.00497902, 252.25032350, 77.45779628, 48.33076593], rate: [0.00000037, 0.00001906, -0.00594749, 149472.67411175, 0.16047689, -0.12534081] },
  Venus: { el: [0.72333566, 0.00677672, 3.39467605, 181.97909950, 131.60246718, 76.67984255], rate: [0.00000390, -0.00004107, -0.00078890, 58517.81538729, 0.00268329, -0.27769418] },
  EMB: { el: [1.00000261, 0.01671123, -0.00001531, 100.46457166, 102.93768193, 0.0], rate: [0.00000562, -0.00004392, -0.01294668, 35999.37244981, 0.32327364, 0.0] },
  Mars: { el: [1.52371034, 0.09339410, 1.84969142, -4.55343205, -23.94362959, 49.55953891], rate: [0.00001847, 0.00007882, -0.00813131, 19140.30268499, 0.44441088, -0.29257343] },
  Jupiter: { el: [5.20288700, 0.04838624, 1.30439695, 34.39644051, 14.72847983, 100.47390909], rate: [-0.00011607, -0.00013253, -0.00183714, 3034.74612775, 0.21252668, 0.20469106] },
  Saturn: { el: [9.53667594, 0.05386179, 2.48599187, 49.95424423, 92.59887831, 113.66242448], rate: [-0.00125060, -0.00050991, 0.00193609, 1222.49362201, -0.41897216, -0.28867794] },
  Uranus: { el: [19.18916464, 0.04725744, 0.77263783, 313.23810451, 170.95427630, 74.01692503], rate: [-0.00196176, -0.00004397, -0.00242939, 428.48202785, 0.40805281, 0.04240589] },
  Neptune: { el: [30.06992276, 0.00859048, 1.77004347, -55.12002969, 44.96476227, 131.78422574], rate: [0.00026291, 0.00005105, 0.00035372, 218.45945325, -0.32241464, -0.00508664] },
  Pluto: { el: [39.48211675, 0.24882730, 17.14001206, 238.92903833, 224.06891629, 110.30393684], rate: [-0.00031596, 0.00005170, 0.00004818, 145.20780515, -0.04062942, -0.01183482] },
};

// Heliocentric equatorial position (km) of a major planet at Julian date jd.
export function planetPosition(name, jd, out = [0, 0, 0]) {
  const P = PLANET_ELEMENTS[name];
  const T = (jd - JD_J2000) / 36525;
  const a = P.el[0] + P.rate[0] * T, e = P.el[1] + P.rate[1] * T;
  const I = (P.el[2] + P.rate[2] * T) * DEG;
  const L = (P.el[3] + P.rate[3] * T) * DEG;
  const wbar = (P.el[4] + P.rate[4] * T) * DEG;
  const Om = (P.el[5] + P.rate[5] * T) * DEG;
  const w = wbar - Om;
  const M = L - wbar;
  elementsToPosition(a, e, I, Om, w, M, out);
  out[0] *= KM_PER_AU; out[1] *= KM_PER_AU; out[2] *= KM_PER_AU;
  return eclipticToEquatorial(out);
}

// Returns the current osculating-style elements of a planet (for drawing its orbit)
export function planetElements(name, jd) {
  const P = PLANET_ELEMENTS[name];
  const T = (jd - JD_J2000) / 36525;
  const wbar = P.el[4] + P.rate[4] * T, Om = P.el[5] + P.rate[5] * T;
  return { a: (P.el[0] + P.rate[0] * T) * KM_PER_AU, e: P.el[1] + P.rate[1] * T, i: (P.el[2] + P.rate[2] * T) * DEG, om: Om * DEG, w: (wbar - Om) * DEG, ecliptic: true };
}

// Small body (asteroid/comet) heliocentric equatorial position from SBDB elements (ecliptic, degrees, AU)
export function smallBodyPosition(a, e, incDeg, omDeg, wDeg, maDeg, epochJD, jd, out = [0, 0, 0]) {
  const n = GAUSS_K / Math.pow(a, 1.5); // rad/day
  const M = maDeg * DEG + n * (jd - epochJD);
  elementsToPosition(a, e, incDeg * DEG, omDeg * DEG, wDeg * DEG, M, out);
  out[0] *= KM_PER_AU; out[1] *= KM_PER_AU; out[2] *= KM_PER_AU;
  return eclipticToEquatorial(out);
}

// Generic Keplerian propagation in the ICRF frame (used for moons/orbiters with Horizons elements, km and degrees)
export function keplerICRF(a_km, e, incDeg, omDeg, wDeg, maDeg, nDegPerSec, epochJD, jd, out = [0, 0, 0]) {
  const M = (maDeg + nDegPerSec * (jd - epochJD) * 86400) * DEG;
  return elementsToPosition(a_km, e, incDeg * DEG, omDeg * DEG, wDeg * DEG, M, out);
}

// Points along an ellipse in the ICRF frame (or ecliptic if flagged) for orbit drawing. Returns Float32Array xyz.
export function orbitPath(a, e, inc, om, w, segments = 256, ecliptic = false) {
  const arr = new Float32Array((segments + 1) * 3);
  const tmp = [0, 0, 0];
  for (let k = 0; k <= segments; k++) {
    const M = (k / segments) * 2 * Math.PI;
    elementsToPosition(a, e, inc, om, w, M, tmp);
    if (ecliptic) eclipticToEquatorial(tmp);
    arr[3 * k] = tmp[0]; arr[3 * k + 1] = tmp[1]; arr[3 * k + 2] = tmp[2];
  }
  return arr;
}

// ---- Moon: truncated ELP/Meeus series (accuracy ~0.1 deg, ~30 km). Geocentric equatorial J2000 km. ----
export function moonGeocentric(jd, out = [0, 0, 0]) {
  const T = (jd - JD_J2000) / 36525;
  const r = x => ((x % 360) + 360) % 360 * DEG;
  const Lp = r(218.3164477 + 481267.88123421 * T - 0.0015786 * T * T);
  const D = r(297.8501921 + 445267.1114034 * T - 0.0018819 * T * T);
  const M = r(357.5291092 + 35999.0502909 * T - 0.0001536 * T * T);
  const Mp = r(134.9633964 + 477198.8675055 * T + 0.0087414 * T * T);
  const F = r(93.2720950 + 483202.0175233 * T - 0.0036539 * T * T);
  const E = 1 - 0.002516 * T - 0.0000074 * T * T;
  const sl = [[0, 0, 1, 0, 6288774], [2, 0, -1, 0, 1274027], [2, 0, 0, 0, 658314], [0, 0, 2, 0, 213618], [0, 1, 0, 0, -185116], [0, 0, 0, 2, -114332],
    [2, 0, -2, 0, 58793], [2, -1, -1, 0, 57066], [2, 0, 1, 0, 53322], [2, -1, 0, 0, 45758], [0, 1, -1, 0, -40923], [1, 0, 0, 0, -34720], [0, 1, 1, 0, -30383],
    [2, 0, 0, -2, 15327], [0, 0, 1, 2, -12528], [0, 0, 1, -2, 10980], [4, 0, -1, 0, 10675], [0, 0, 3, 0, 10034], [4, 0, -2, 0, 8548], [2, 1, -1, 0, -7888],
    [2, 1, 0, 0, -6766], [1, 0, -1, 0, -5163], [1, 1, 0, 0, 4987], [2, -1, 1, 0, 4036], [2, 0, 2, 0, 3994], [4, 0, 0, 0, 3861], [2, 0, -3, 0, 3665], [0, 1, -2, 0, -2689], [2, 0, -1, 2, -2602], [2, -1, -2, 0, 2390]];
  const sr = [[0, 0, 1, 0, -20905355], [2, 0, -1, 0, -3699111], [2, 0, 0, 0, -2955968], [0, 0, 2, 0, -569925], [0, 1, 0, 0, 48888], [0, 0, 0, 2, -3149],
    [2, 0, -2, 0, 246158], [2, -1, -1, 0, -152138], [2, 0, 1, 0, -170733], [2, -1, 0, 0, -204586], [0, 1, -1, 0, -129620], [1, 0, 0, 0, 108743], [0, 1, 1, 0, 104755],
    [2, 0, 0, -2, 10321], [0, 0, 1, -2, 79661], [4, 0, -1, 0, -34782], [0, 0, 3, 0, -23210], [4, 0, -2, 0, -21636], [2, 1, -1, 0, 24208], [2, 1, 0, 0, 30824],
    [1, 0, -1, 0, -8379], [1, 1, 0, 0, -16675], [2, -1, 1, 0, -12831], [2, 0, 2, 0, -10445], [4, 0, 0, 0, -11650], [2, 0, -3, 0, 14403], [0, 1, -2, 0, -7003], [2, -1, -2, 0, 10056]];
  const sb = [[0, 0, 0, 1, 5128122], [0, 0, 1, 1, 280602], [0, 0, 1, -1, 277693], [2, 0, 0, -1, 173237], [2, 0, -1, 1, 55413], [2, 0, -1, -1, 46271], [2, 0, 0, 1, 32573],
    [0, 0, 2, 1, 17198], [2, 0, 1, -1, 9266], [0, 0, 2, -1, 8822], [2, -1, 0, -1, 8216], [2, 0, -2, -1, 4324], [2, 0, 1, 1, 4200], [2, 1, 0, -1, -3359], [2, -1, -1, 1, 2463],
    [2, -1, 0, 1, 2211], [2, -1, -1, -1, 2065], [0, 1, -1, -1, -1870], [4, 0, -1, -1, 1828], [0, 1, 0, 1, -1794]];
  let suml = 0, sumr = 0, sumb = 0;
  for (const [d, m, mp, f, c] of sl) { const arg = d * D + m * M + mp * Mp + f * F; const ef = Math.abs(m) === 1 ? E : (Math.abs(m) === 2 ? E * E : 1); suml += c * ef * Math.sin(arg); }
  for (const [d, m, mp, f, c] of sr) { const arg = d * D + m * M + mp * Mp + f * F; const ef = Math.abs(m) === 1 ? E : (Math.abs(m) === 2 ? E * E : 1); sumr += c * ef * Math.cos(arg); }
  for (const [d, m, mp, f, c] of sb) { const arg = d * D + m * M + mp * Mp + f * F; const ef = Math.abs(m) === 1 ? E : (Math.abs(m) === 2 ? E * E : 1); sumb += c * ef * Math.sin(arg); }
  // additive terms
  const A1 = r(119.75 + 131.849 * T), A2 = r(53.09 + 479264.290 * T), A3 = r(313.45 + 481266.484 * T);
  suml += 3958 * Math.sin(A1) + 1962 * Math.sin(Lp - F) + 318 * Math.sin(A2);
  sumb += -2235 * Math.sin(Lp) + 382 * Math.sin(A3) + 175 * Math.sin(A1 - F) + 175 * Math.sin(A1 + F) + 127 * Math.sin(Lp - Mp) - 115 * Math.sin(Lp + Mp);
  // longitude of date -> J2000 (subtract general precession)
  const lon = Lp + suml / 1e6 * DEG - (1.396971 * T + 0.0003086 * T * T) * DEG;
  const lat = sumb / 1e6 * DEG;
  const dist = 385000.56 + sumr / 1000;
  out[0] = dist * Math.cos(lat) * Math.cos(lon);
  out[1] = dist * Math.cos(lat) * Math.sin(lon);
  out[2] = dist * Math.sin(lat);
  return eclipticToEquatorial(out);
}

// Greenwich mean sidereal time in radians
export function gmst(jd) {
  const T = (jd - JD_J2000) / 36525;
  let g = 280.46061837 + 360.98564736629 * (jd - JD_J2000) + 0.000387933 * T * T - T * T * T / 38710000;
  g = ((g % 360) + 360) % 360;
  return g * DEG;
}

// Cubic Hermite interpolation of a state-vector table [{t, r, v}] sorted by t (days). Returns km.
export function interpolateEphemeris(table, jd, out = [0, 0, 0]) {
  const n = table.t.length;
  if (jd <= table.t[0]) { const dt = (jd - table.t[0]) * 86400; for (let k = 0; k < 3; k++) out[k] = table.r[k] + table.v[k] * dt; return out; }
  if (jd >= table.t[n - 1]) { const b = 3 * (n - 1); const dt = (jd - table.t[n - 1]) * 86400; for (let k = 0; k < 3; k++) out[k] = table.r[b + k] + table.v[b + k] * dt; return out; }
  // binary search
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (table.t[mid] <= jd) lo = mid; else hi = mid; }
  const h = (table.t[hi] - table.t[lo]) * 86400;
  const s = (jd - table.t[lo]) * 86400 / h;
  const s2 = s * s, s3 = s2 * s;
  const h00 = 2 * s3 - 3 * s2 + 1, h10 = s3 - 2 * s2 + s, h01 = -2 * s3 + 3 * s2, h11 = s3 - s2;
  for (let k = 0; k < 3; k++) {
    out[k] = h00 * table.r[3 * lo + k] + h10 * h * table.v[3 * lo + k] + h01 * table.r[3 * hi + k] + h11 * h * table.v[3 * hi + k];
  }
  return out;
}

// Direction unit vector from RA/Dec (degrees)
export function raDecToUnit(raDeg, decDeg, out = [0, 0, 0]) {
  const ra = raDeg * DEG, dec = decDeg * DEG;
  out[0] = Math.cos(dec) * Math.cos(ra); out[1] = Math.cos(dec) * Math.sin(ra); out[2] = Math.sin(dec);
  return out;
}
