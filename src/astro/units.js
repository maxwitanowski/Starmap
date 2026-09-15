// All world coordinates are heliocentric, ICRF/J2000 equatorial, in kilometres (doubles).
export const KM_PER_AU = 149597870.7;
export const KM_PER_PC = 3.0856775814913673e13;
export const KM_PER_LY = 9.4607304725808e12;
export const KM_PER_MPC = KM_PER_PC * 1e6;
export const LIGHT_SPEED = 299792.458; // km/s
export const DEG = Math.PI / 180;
export const OBLIQUITY = 23.4392911 * DEG;
export const SUN_RADIUS_KM = 695700;
export const EARTH_RADIUS_KM = 6371.0084;
export const JD_J2000 = 2451545.0;
export const SOLAR_LUM_W = 3.828e26;

export function jdFromDate(date) { return date.getTime() / 86400000 + 2440587.5; }
export function dateFromJD(jd) { return new Date((jd - 2440587.5) * 86400000); }

// Human-friendly distance formatter
export function fmtDist(km, digits = 3) {
  const a = Math.abs(km);
  if (a < 1) return `${(km * 1000).toPrecision(digits)} m`;
  if (a < 1e6) return `${fmtNum(km, digits)} km`;
  if (a < KM_PER_AU * 0.05) return `${fmtNum(km, digits)} km`;
  if (a < KM_PER_LY * 0.1) return `${fmtNum(km / KM_PER_AU, digits)} AU`;
  if (a < KM_PER_LY * 1e3) return `${fmtNum(km / KM_PER_LY, digits)} ly`;
  if (a < KM_PER_LY * 1e6) return `${fmtNum(km / KM_PER_LY / 1e3, digits)} kly`;
  if (a < KM_PER_LY * 1e9) return `${fmtNum(km / KM_PER_LY / 1e6, digits)} Mly`;
  return `${fmtNum(km / KM_PER_LY / 1e9, digits)} Gly`;
}
export function fmtNum(v, digits = 3) {
  if (!Number.isFinite(v)) return '—';
  const a = Math.abs(v);
  if (a === 0) return '0';
  if (a >= 1e6 || a < 1e-3) return v.toExponential(digits - 1).replace('e+', 'e');
  const p = Math.max(0, digits - 1 - Math.floor(Math.log10(a)));
  return v.toLocaleString('en-US', { maximumFractionDigits: Math.min(p, 6), minimumFractionDigits: 0 });
}
export function fmtTime(seconds) {
  const a = Math.abs(seconds);
  if (a < 60) return `${fmtNum(seconds, 3)} s`;
  if (a < 3600) return `${fmtNum(seconds / 60, 3)} min`;
  if (a < 86400) return `${fmtNum(seconds / 3600, 3)} h`;
  if (a < 86400 * 365.25) return `${fmtNum(seconds / 86400, 3)} days`;
  return `${fmtNum(seconds / 86400 / 365.25, 3)} yr`;
}
