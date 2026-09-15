import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 100)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

// satellites: real model size as radius, get within metres
patch('src/layers/Satellites.js', [
  [`export class SatelliteLayer {`, `// typical longest extent per class, km (element sets carry no size: these are representative)
export const SAT_SIZES = { sat_station: 0.109, sat_telescope: 0.0132, sat_comms: 0.0065, sat_gps: 0.0052, sat_weather: 0.0045, sat_starlink: 0.003, sat_cubesat: 0.0003, sat_rocketbody: 0.009 };

export class SatelliteLayer {`],
  [`    return { kind: 'satellite', kindLabel: kind, name: s.n, variant: this.variant(i), sub: \`\${kind} · \${groups.split(',')[0] || ''} · \${fmtNum(periodMin, 3)} min orbit\`, radius: 0.05, rows, desc,`, `    return { kind: 'satellite', kindLabel: kind, name: s.n, variant: this.variant(i), sub: \`\${kind} · \${groups.split(',')[0] || ''} · \${fmtNum(periodMin, 3)} min orbit\`, radius: SAT_SIZES[this.variant(i)] / 2, rows, desc,`],
  [`const d = Math.hypot(this.rel[3 * i] - cx, this.rel[3 * i + 1] - cy, this.rel[3 * i + 2] - cz) - 0.03; if (d < best) best = d; }`, `const d = Math.hypot(this.posD[3 * i] - cx, this.posD[3 * i + 1] - cy, this.posD[3 * i + 2] - cz) - SAT_SIZES[this.variant(i)] / 2; if (d < best) best = d; }`],
]);
patch('src/layers/Models.js', [
  [`import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';`, `import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { SAT_SIZES } from './Satellites.js';`],
  [`const SAT_SIZES = { sat_station: 0.109, sat_telescope: 0.0132, sat_comms: 0.0065, sat_gps: 0.0052, sat_weather: 0.0045, sat_starlink: 0.003, sat_cubesat: 0.0003, sat_rocketbody: 0.009 }; // km (longest extent)
`, ``],
]);
// small bodies: the focused / selected asteroid or comet counts as a surface for the speed governor
patch('src/layers/SmallBodies.js', [[`  showOrbitFor(desc) {`, `  nearestSurface(camPos) {
    let best = Infinity;
    for (const d of [this.u.rig.focus, this.u.selection]) {
      if (!d || (d.kind !== 'asteroid' && d.kind !== 'comet')) continue;
      d.getPos(this.u.time.jd, this._tmp);
      const dist = Math.hypot(this._tmp[0] - camPos[0], this._tmp[1] - camPos[1], this._tmp[2] - camPos[2]) - d.radius;
      if (dist < best) best = dist;
    }
    return best;
  }
  showOrbitFor(desc) {`]]);
patch('src/core/Universe.js', [[`L.exo.nearestSurface(this.rig.pos), L.sats.nearestSurface(this.rig.pos)));`, `L.exo.nearestSurface(this.rig.pos), L.sats.nearestSurface(this.rig.pos), L.asteroids.nearestSurface(this.rig.pos)));`]]);
// camera: gentler speed near small things, closer approach limits
patch('src/core/CameraRig.js', [
  [`  minApproach(obj) { return obj.kind === 'satellite' ? 0.02 : 0; }`, `  minApproach(obj) { return obj.kind === 'satellite' ? 0.002 : obj.kind === 'spacecraft' ? 0.002 : 0; }`],
  [`    const base = Math.max(this.nearestSurface, 0.002) * 0.9;`, `    // slower relative pace near small objects: metres per second beside a satellite, km/s beside an asteroid
    const near = Math.max(this.nearestSurface, 0.0005);
    const pace = near < 1 ? 0.18 : near < 100 ? 0.3 : 0.7;
    const base = near * pace;`],
  [`    const factor = obj.kind === 'star' || obj.kind === 'sun' ? 8 : obj.kind === 'galaxy' ? 2.6 : obj.kind === 'dso' ? 3.2 : 4.5;`, `    const factor = obj.kind === 'star' || obj.kind === 'sun' ? 8 : obj.kind === 'galaxy' ? 2.6 : obj.kind === 'dso' ? 3.2 : obj.kind === 'satellite' || obj.kind === 'asteroid' || obj.kind === 'comet' ? 3.5 : 4.5;`],
  // scroll zoom in small steps near small bodies so you can creep in
  [`      const f = Math.exp(THREE.MathUtils.clamp(e.deltaY, -200, 200) * 0.0025);`, `      const small = this.focus && this.focus.radius < 5 && this.mode === 'orbit';
      const f = Math.exp(THREE.MathUtils.clamp(e.deltaY, -200, 200) * (small ? 0.0012 : 0.0025));`],
]);
console.log('patched');
