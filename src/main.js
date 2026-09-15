import { Universe } from './core/Universe.js';
import { loadBinary, loadJSON, loadText } from './core/Loader.js';

const DATA_VERSION = 7; // bump when public/data changes so browsers refetch
const fill = document.getElementById('load-fill'), status = document.getElementById('load-status');
const files = [
  ['stars', 'stars.bin', loadBinary], ['starsMeta', 'stars_meta.json', loadJSON], ['exoplanets', 'exoplanets.json', loadJSON], ['constellations', 'constellations.json', loadJSON],
  ['dso', 'dso.json', loadJSON], ['mrs', 'mrs.bin', loadBinary], ['mrsIds', 'mrs_ids.txt', (u) => loadText(u)], ['asteroids', 'asteroids.bin', loadBinary], ['asteroidsMeta', 'asteroids_meta.json', loadJSON],
  ['comets', 'comets.json', loadJSON], ['satellites', 'satellites.json', loadJSON], ['spacecraft', 'spacecraft.json', loadJSON], ['moons', 'moons.json', loadJSON], ['mcstars', 'mcstars.bin', loadBinary], ['mcstarsIds', 'mcstars_ids.txt', (u) => loadText(u)], ['gaia', 'gaia_bright.bin', loadBinary], ['gaiaIds', 'gaia_bright_ids.txt', (u) => loadText(u)], ['quasars', 'quasars.bin', loadBinary], ['quasarNames', 'quasar_names.txt', (u) => loadText(u)], ['quasarSources', 'quasar_sources.txt', (u) => loadText(u)], ['blackholes', 'blackholes.json', loadJSON],
];

async function boot() {
  const data = {};
  let done = 0;
  const progress = {};
  const tick = () => { const p = Object.values(progress).reduce((a, b) => a + b, 0) / files.length; fill.style.width = `${(p * 100).toFixed(0)}%`; };
  await Promise.all(files.map(async ([key, file, loader]) => {
    status.textContent = `loading ${file}`;
    data[key] = await loader(`/data/${file}?v=${DATA_VERSION}`, (got, total) => { progress[key] = total ? got / total * 0.95 : 0.5; tick(); });
    progress[key] = 1; done++; tick();
  }));
  status.textContent = 'building scene';
  await new Promise(r => setTimeout(r, 30));
  const universe = new Universe(document.getElementById('gl'));
  universe.init(data);
  window.universe = universe;
  universe.start();
  document.getElementById('loading').classList.add('done');
  setTimeout(() => document.getElementById('loading').remove(), 800);
  if (!localStorage.getItem('starmap-help-seen')) { document.getElementById('help').hidden = false; localStorage.setItem('starmap-help-seen', '1'); }
}
boot().catch(err => { console.error(err); status.textContent = 'Failed: ' + err.message; status.style.color = '#f77'; });
