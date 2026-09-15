import { jdFromDate, dateFromJD } from '../astro/units.js';

const SPEEDS = [-1e7, -1e6, -86400, -3600, -60, -1, 0, 1, 60, 3600, 86400, 1e6, 1e7, 1e8];

export class SimTime {
  constructor() {
    this.jd = jdFromDate(new Date());
    this.speedIndex = 7; // 1x real time
    this.paused = false;
    this._pausedIndex = 7;
  }
  get speed() { return this.paused ? 0 : SPEEDS[this.speedIndex]; }
  get date() { return dateFromJD(this.jd); }
  get unixMs() { return (this.jd - 2440587.5) * 86400000; }
  update(dtSeconds) { if (!this.paused) this.jd += dtSeconds * SPEEDS[this.speedIndex] / 86400; }
  setNow() { this.jd = jdFromDate(new Date()); }
  faster() { this.paused = false; this.speedIndex = Math.min(SPEEDS.length - 1, this.speedIndex + 1); if (SPEEDS[this.speedIndex] === 0) this.speedIndex++; }
  slower() { this.paused = false; this.speedIndex = Math.max(0, this.speedIndex - 1); if (SPEEDS[this.speedIndex] === 0) this.speedIndex--; }
  togglePause() { this.paused = !this.paused; }
  speedLabel() {
    if (this.paused) return 'paused';
    const s = SPEEDS[this.speedIndex];
    const a = Math.abs(s), sign = s < 0 ? '−' : '';
    if (a === 1) return sign + 'real time';
    if (a < 3600) return `${sign}${a}× (1 s = ${a} s)`;
    if (a === 3600) return `${sign}1 h / s`;
    if (a === 86400) return `${sign}1 day / s`;
    if (a === 1e6) return `${sign}11.6 days / s`;
    if (a === 1e7) return `${sign}116 days / s`;
    return `${sign}3.2 yr / s`;
  }
  dateLabel() {
    const d = this.date;
    if (!Number.isFinite(d.getTime())) return '—';
    return d.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
  }
}
