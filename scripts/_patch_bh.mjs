import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 120)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

patch('src/core/Universe.js', [
  [`import { GaiaFieldLayer } from '../layers/GaiaField.js';`, `import { GaiaFieldLayer } from '../layers/GaiaField.js';
import { QuasarLayer } from '../layers/Quasars.js';
import { BlackHoleLayer } from '../layers/BlackHoles.js';`],
  [`import { KM_PER_AU, KM_PER_PC, KM_PER_MPC, DEG } from '../astro/units.js';`, `import { KM_PER_AU, KM_PER_PC, KM_PER_MPC, KM_PER_LY, DEG } from '../astro/units.js';`],
  [`    L.gaia = new GaiaFieldLayer(this, data.gaia, data.gaiaIds);`, `    L.gaia = new GaiaFieldLayer(this, data.gaia, data.gaiaIds);
    L.quasars = new QuasarLayer(this, data.quasars, data.quasarNames);
    L.bh = new BlackHoleLayer(this, data.blackholes, L.dso);`],
  [`'sats', 'craft', 'models', 'mcstars', 'gaia']) L[k].update(ctx);`, `'sats', 'craft', 'models', 'mcstars', 'gaia', 'quasars', 'bh']) L[k].update(ctx);`],
  [`    consider(L.gaia.pick(ray, cam, pxPerRad));`, `    consider(L.gaia.pick(ray, cam, pxPerRad));
    consider(L.bh.pick(ray, cam, pxPerRad));
    consider(L.quasars.pick(ray, cam, pxPerRad));`],
  [`      case 'gaia': return L.gaia.describe(ref.index);`, `      case 'gaia': return L.gaia.describe(ref.index);
      case 'quasars': if (ref.name !== undefined) { const i = L.quasars.byName(ref.name); return i < 0 ? null : L.quasars.describe(i); } return L.quasars.describe(ref.index);
      case 'bh': if (ref.name !== undefined) { const i = L.bh.byName(ref.name); return i < 0 ? null : L.bh.describe(i); } return L.bh.describe(ref.index);`],
  [`    if (ref.special === 'universe') {`, `    if (ref.special === 'cosmos') { const d = this.layers.solar.describe(this.layers.solar.sun); this.select(d, false); this.rig.goTo(d, 32e9 * KM_PER_LY); return; }
    if (ref.special === 'universe') {`],
  [`L.asteroids.nearestSurface(this.rig.pos), L.gaia.nearestSurface(this.rig.pos));`, `L.asteroids.nearestSurface(this.rig.pos), L.gaia.nearestSurface(this.rig.pos), L.bh.nearestSurface(this.rig.pos));`],
]);
patch('src/main.js', [
  [`['gaia', 'gaia_bright.bin', loadBinary], ['gaiaIds', 'gaia_bright_ids.txt', (u) => loadText(u)],`, `['gaia', 'gaia_bright.bin', loadBinary], ['gaiaIds', 'gaia_bright_ids.txt', (u) => loadText(u)], ['quasars', 'quasars.bin', loadBinary], ['quasarNames', 'quasar_names.txt', (u) => loadText(u)], ['blackholes', 'blackholes.json', loadJSON],`],
  [`const DATA_VERSION = 5;`, `const DATA_VERSION = 6;`],
]);
patch('src/ui/UI.js', [
  [`['mcstars', 'Magellanic Cloud stars (Gaia, 108k)'],`, `['mcstars', 'Magellanic Cloud stars (Gaia, 108k)'], ['bh', 'Black holes (stellar, intermediate & supermassive)'], ['quasars', 'Quasars & active galaxies (Milliquas, 1.0M)'],`],
  [`['Local universe', { special: 'universe' }]];`, `['Local universe', { special: 'universe' }], ['Sgr A*', { layer: 'bh', name: 'Sagittarius A*' }], ['Observable universe', { special: 'cosmos' }]];`],
  [`['star', 'exoplanet', 'dso', 'asteroid', 'comet', 'satellite'].includes(desc.kind)`, `['star', 'exoplanet', 'dso', 'asteroid', 'comet', 'satellite', 'blackhole', 'quasar'].includes(desc.kind)`],
  [`[KM_PER_LY * 1e3, 'kly'], [KM_PER_LY * 1e6, 'Mly']];`, `[KM_PER_LY * 1e3, 'kly'], [KM_PER_LY * 1e6, 'Mly'], [KM_PER_LY * 1e9, 'Gly']];`],
]);
patch('src/core/Media.js', [
  [`    case 'constellation': c.push(\`\${name} (constellation)\`, name); break;`, `    case 'constellation': c.push(\`\${name} (constellation)\`, name); break;
    case 'blackhole': case 'quasar': {
      for (const a of [name, ...(desc.wiki || [])]) {
        const v = a.match(/^(V\\d+|[A-Z]{1,2})\\s+([A-Z][a-z]{2})$/); // variable-star name: "V404 Cyg" -> "V404 Cygni"
        if (v && GENITIVE[v[2]]) c.push(\`\${v[1]} \${GENITIVE[v[2]]}\`);
        c.push(a.replace(/ central black hole$/, '').replace(/ black hole$/, ''));
      }
      break;
    }`],
]);
patch('src/style.css', [[`.label.craft { color: #ffd0a0; font-size: 10.5px; font-family: var(--mono); }`, `.label.craft { color: #ffd0a0; font-size: 10.5px; font-family: var(--mono); }
.label.bh { color: #ffb070; }
.label.quasar { color: #c8b0ff; font-size: 10.5px; }`]]);
console.log('patched');
