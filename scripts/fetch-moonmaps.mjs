// Finds public-domain equirectangular maps of moons/dwarf planets on Wikimedia Commons (NASA/USGS mosaics) and downloads them.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
// Node's fetch times out against Commons from this network; curl works, so shell out.
const curlJson = url => JSON.parse(execFileSync('curl', ['-sL', '-A', 'Starmap/1.0 (educational)', url], { maxBuffer: 1e8 }).toString());
const curlBuf = url => execFileSync('curl', ['-sL', '-A', 'Starmap/1.0 (educational)', url], { maxBuffer: 2e8 });
const UA = { 'User-Agent': 'Starmap/1.0 (educational; maxwitanowski@gmail.com)' };
const targets = { Io: 'Io moon map', Europa: 'Europa moon map', Ganymede: 'Ganymede moon map', Callisto: 'Callisto moon map', Titan: 'Titan moon map', Enceladus: 'Map of Enceladus', Tethys: 'Map of Tethys', Dione: 'Dione map', Rhea: 'Rhea map Cassini', Iapetus: 'Iapetus map', Mimas: 'Mimas map Cassini', Triton: 'Triton map Voyager', Pluto: 'Pluto map New Horizons', Charon: 'Charon map New Horizons', Ceres: 'Ceres map Dawn', Vesta: 'Vesta map Dawn', Phobos: 'Phobos map', Deimos: 'Deimos map', Miranda: 'Miranda moon map', Ariel: 'Ariel moon map', Titania: 'Titania moon map', Oberon: 'Oberon moon map', Umbriel: 'Umbriel moon map', Mercury: 'Mercury MESSENGER global map', Hyperion: 'Hyperion map' };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const out = {};
for (const [name, q] of Object.entries(targets)) {
  const s = curlJson(`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&gsrlimit=15&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=4096&format=json`);
  const pages = Object.values(s.query?.pages || {});
  const cands = pages.map(p => ({ title: p.title, ...(p.imageinfo?.[0] || {}) })).filter(p => p.width && p.height && p.width / p.height > 1.85 && p.width / p.height < 2.15 && p.width >= 1000 && /jpe?g|png/.test(p.mime || ''));
  cands.sort((a, b) => b.width - a.width);
  const pick = cands[0];
  if (!pick) { console.log(name, '-> none'); await sleep(400); continue; }
  const url = pick.thumburl || pick.url;
  const file = `raw/moonmaps/${name}.${/png/.test(pick.mime) ? 'png' : 'jpg'}`;
  try {
    const buf = curlBuf(url);
    fs.writeFileSync(file, buf);
    out[name] = { title: pick.title, width: pick.width, height: pick.height, file };
    console.log(name, '->', pick.title, `${pick.width}x${pick.height}`, (buf.length / 1e6).toFixed(1) + 'MB');
  } catch (e) { console.log(name, 'download failed', e.message); }
  await sleep(500);
}
fs.writeFileSync('raw/moonmaps/index.json', JSON.stringify(out, null, 1));
