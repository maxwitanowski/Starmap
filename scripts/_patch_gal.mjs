import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 100)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

// DeepSky: export atlas cell constants for the 2MRS sprite layer
patch('src/layers/DeepSky.js', [[`const CELL = 128, GRID = 32; // 4096 atlas
const PROC = {`, `export const CELL = 128, GRID = 32; // 4096 atlas
export const PROC = {`]]);

// Universe: new construction order / references
patch('src/core/Universe.js', [
  [`    L.galaxies = new GalaxyLayer(this, data.mrs, data.mrsIds);
    L.gmodels = new GalaxyModelLayer(this, L.dso);`, `    L.galaxies = new GalaxyLayer(this, data.mrs, data.mrsIds, L.dso);
    L.gmodels = new GalaxyModelLayer(this, L.dso); L.gmodels.mrs = L.galaxies;`],
  [`      case 'gmodels': return L.gmodels.describeParticle(ref.index);`, `      case 'gmodels': return L.gmodels.describeByRef(ref);`],
  // speed governor: the focused object of any kind counts, even when you are inside it (nebula, galaxy)
  [`    this.rig.nearestSurface = Math.max(1e-3, Math.min(L.solar.nearestSurface(this.rig.pos), L.stars.nearestSurface(this.rig.pos), L.exo.nearestSurface(this.rig.pos), L.sats.nearestSurface(this.rig.pos), L.asteroids.nearestSurface(this.rig.pos)));`,
   `    let nearest = Math.min(L.solar.nearestSurface(this.rig.pos), L.stars.nearestSurface(this.rig.pos), L.exo.nearestSurface(this.rig.pos), L.sats.nearestSurface(this.rig.pos), L.asteroids.nearestSurface(this.rig.pos));
    const f = this.rig.focus;
    if (f) {
      // the object you are visiting sets the pace too: outside it, the gap to its edge; inside it (a nebula, a galaxy), a fraction of its size
      f.getPos(this.time.jd, this._fp || (this._fp = [0, 0, 0]));
      const d = this.rig.distanceTo(this._fp);
      nearest = Math.min(nearest, Math.max(Math.abs(d - f.radius), f.radius * 0.06));
    }
    this.rig.nearestSurface = Math.max(1e-3, nearest);`],
]);
patch('src/ui/UI.js', [[`['galaxies', '2MRS galaxies (43k)'], ['gmodels', 'Nearby galaxy models (64)'],`, `['galaxies', '2MRS galaxies (43k, shaped)'], ['gmodels', 'Galaxy particle models (on demand)'],`]]);
console.log('patched');
