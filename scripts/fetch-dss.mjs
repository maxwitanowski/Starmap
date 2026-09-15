// Downloads real DSS2 colour cutouts (CDS hips2fits) for notable deep-sky objects.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const list = JSON.parse(fs.readFileSync(path.join(ROOT, 'public/data/dso_imglist.json'), 'utf8'));
const OUT = path.join(ROOT, 'public', 'dso');
fs.mkdirSync(OUT, { recursive: true });

const SIZE = 192;
const VOL_OUT = path.join(ROOT, 'public', 'dso_vol');
fs.mkdirSync(VOL_OUT, { recursive: true });
const NEB = new Set(['HII', 'EmN', 'Neb', 'RfN', 'PN', 'SNR', 'Cl+N']);
// Second image set for the 3D volumes: DSS saturates in bright nebula cores, so use PanSTARRS (small objects, dec > -30)
// or the Mellinger all-sky mosaic (large nebulae) where they have more dynamic range.
function volSurvey(e) {
  if (!NEB.has(e.t)) return null;
  if ((e.maj || 5) >= 15) return 'CDS%2FP%2FMellinger%2Fcolor';
  if (e.dec > -29) return 'CDS%2FP%2FPanSTARRS%2FDR1%2Fcolor-z-zg-g';
  return null;
}
let done = 0, fail = 0;
async function fetchOne(e, vol = false) {
  const survey = vol ? volSurvey(e) : 'CDS%2FP%2FDSS2%2Fcolor';
  if (!survey) return;
  const file = path.join(vol ? VOL_OUT : OUT, e.id + '.jpg');
  if (fs.existsSync(file) && fs.statSync(file).size > 1000) { done++; return; }
  const url = `https://alasky.cds.unistra.fr/hips-image-services/hips2fits?hips=${survey}&ra=${e.ra}&dec=${e.dec}&fov=${e.fov}&width=${SIZE}&height=${SIZE}&projection=TAN&format=jpg${vol ? '' : '&stretch=linear'}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Starmap/1.0 (educational)' } });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 500) throw new Error('tiny');
      fs.writeFileSync(file, buf);
      // planetary nebulae: the PanSTARRS picture is far better than the saturated DSS one, use it for the sprite too
      if (vol && e.t === 'PN' && survey.includes('PanSTARRS')) fs.writeFileSync(path.join(OUT, e.id + '.jpg'), buf);
      done++; return;
    } catch (err) {
      if (attempt === 2) { fail++; console.log('  failed', e.id, err.message); }
      else await new Promise(r => setTimeout(r, 1500));
    }
  }
}
const queue = [...list.map(e => [e, false]), ...list.filter(e => volSurvey(e)).map(e => [e, true])];
console.log(`${queue.length} requests`);
async function worker() { while (queue.length) { const [e, vol] = queue.shift(); await fetchOne(e, vol); if ((done + fail) % 50 === 0) console.log(`  ${done + fail}`); } }
await Promise.all([worker(), worker(), worker()]);
console.log(`DSS done: ${done} ok, ${fail} failed`);
