import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const curlJson = url => JSON.parse(execFileSync('curl', ['-sL', '-A', 'Starmap/1.0 (educational)', url], { maxBuffer: 1e8 }).toString());
const curlBuf = url => execFileSync('curl', ['-sL', '-A', 'Starmap/1.0 (educational)', url], { maxBuffer: 3e8 });
const sleep = ms => new Promise(r => setTimeout(r, ms));
const targets = { Ceres: ['Ceres Dawn global map', 'Ceres cylindrical map'], Vesta: ['Vesta Dawn global map', 'Vesta cylindrical map'], Pluto: ['Pluto New Horizons global map', 'Pluto cylindrical mosaic'], Charon: ['Charon New Horizons global mosaic', 'Charon cylindrical'], Io: ['Io Galileo global mosaic USGS', 'Io cylindrical mosaic'], Callisto: ['Callisto global mosaic Galileo', 'Callisto cylindrical map'], Phobos: ['Phobos cylindrical map', 'Phobos global mosaic'], Hyperion: ['Hyperion map Cassini'], Umbriel: ['Umbriel Voyager map'], Ariel: ['Ariel Voyager map cylindrical'], Titania: ['Titania Voyager map'], Oberon: ['Oberon Voyager map'], Miranda: ['Miranda Voyager map'], Deimos: ['Deimos map cylindrical'] };
const bad = /label|grid|topograph|geolog|nomenclature|hemispher|sheet|pdf|diagram|globe/i;
for (const [name, qs] of Object.entries(targets)) {
  if (fs.existsSync(`public/textures/moons/${name}.jpg`) || fs.existsSync(`public/textures/moons/${name}.png`)) continue;
  let pick = null;
  for (const q of qs) {
    const s = curlJson(`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&gsrlimit=20&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=4096&format=json`);
    const pages = Object.values(s.query?.pages || {});
    const c = pages.map(p => ({ title: p.title, ...(p.imageinfo?.[0] || {}) })).filter(p => p.width && p.height && p.width / p.height > 1.9 && p.width / p.height < 2.1 && p.width >= 1000 && /jpe?g|png/.test(p.mime || '') && !bad.test(p.title));
    c.sort((a, b) => b.width - a.width);
    if (c[0]) { pick = c[0]; break; }
    await sleep(700);
  }
  if (!pick) { console.log(name, '-> none'); continue; }
  const buf = curlBuf(pick.thumburl || pick.url);
  const ext = /png/.test(pick.mime) ? 'png' : 'jpg';
  fs.writeFileSync(`public/textures/moons/${name}.${ext}`, buf);
  console.log(name, '->', pick.title, `${pick.width}x${pick.height}`, (buf.length / 1e6).toFixed(1) + 'MB');
  await sleep(800);
}
