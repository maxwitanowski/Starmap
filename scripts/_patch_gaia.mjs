import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 100)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }
patch('src/core/Universe.js', [
  [`import { GaiaStarLayer } from '../layers/GaiaStars.js';`, `import { GaiaStarLayer } from '../layers/GaiaStars.js';\nimport { GaiaFieldLayer } from '../layers/GaiaField.js';`],
  [`    L.mcstars = new GaiaStarLayer(this, data.mcstars, data.mcstarsIds);`, `    L.mcstars = new GaiaStarLayer(this, data.mcstars, data.mcstarsIds);
    L.gaia = new GaiaFieldLayer(this, data.gaia, data.gaiaIds);`],
  [`'sats', 'craft', 'models', 'mcstars']) L[k].update(ctx);`, `'sats', 'craft', 'models', 'mcstars', 'gaia']) L[k].update(ctx);`],
  [`    consider(L.mcstars.pick(ray, cam, pxPerRad));`, `    consider(L.mcstars.pick(ray, cam, pxPerRad));
    consider(L.gaia.pick(ray, cam, pxPerRad));`],
  [`      case 'mcstars': return L.mcstars.describe(ref.index);`, `      case 'mcstars': return L.mcstars.describe(ref.index);
      case 'gaia': return L.gaia.describe(ref.index);`],
  [`L.sats.nearestSurface(this.rig.pos), L.asteroids.nearestSurface(this.rig.pos));`, `L.sats.nearestSurface(this.rig.pos), L.asteroids.nearestSurface(this.rig.pos), L.gaia.nearestSurface(this.rig.pos));`],
]);
patch('src/main.js', [[`['mcstars', 'mcstars.bin', loadBinary], ['mcstarsIds', 'mcstars_ids.txt', (u) => loadText(u)],`, `['mcstars', 'mcstars.bin', loadBinary], ['mcstarsIds', 'mcstars_ids.txt', (u) => loadText(u)], ['gaia', 'gaia_bright.bin', loadBinary], ['gaiaIds', 'gaia_bright_ids.txt', (u) => loadText(u)],`]]);
patch('src/ui/UI.js', [
  [`['stars', 'Stars (HYG, 113k)'],`, `['stars', 'Stars (HYG, 113k)'], ['gaia', 'Deep star field (Gaia DR3, 1.1M)'],`],
  [`u.layers.mcstars.setLimitMag(+e.target.value);`, `u.layers.mcstars.setLimitMag(+e.target.value); u.layers.gaia.setLimitMag(+e.target.value);`],
  [`['Exoplanets (6,360)']`, `['Exoplanets + candidates (13.4k)']`],
]);
console.log('patched');
