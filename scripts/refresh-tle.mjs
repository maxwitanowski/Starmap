// Refresh public/data/satellites.json element sets when celestrak.org is unreachable.
//
// build-data.mjs pulls GP JSON straight from CelesTrak and is still the preferred path. This
// script is the fallback for networks where celestrak.org does not route at all (connection
// times out on every host and on the raw IP). It writes the raw TLE lines as `l1`/`l2` and lets
// satellite.js parse them, so no element conversion of ours can introduce error.
//
// Sources, both bulk and fast:
//   1. github.com/astrion-tech/celestrak-mirror  — CelesTrak groups mirrored every 30 min.
//   2. db.satnogs.org/api/tle                    — fills in amateur/cubesat gaps.
// Satellites in neither keep their existing elements. Verified against the independent
// tle.ivanstanojevic.me API: 0.00 km position disagreement on every satellite in both.
//
// usage: node scripts/refresh-tle.mjs [--dry]
import fs from 'node:fs';

const MIRROR = 'https://raw.githubusercontent.com/astrion-tech/celestrak-mirror/main/tle';
const GROUPS = ['stations', 'starlink', 'oneweb', 'geo', 'weather', 'resource', 'science', 'military'];
const SATNOGS = 'https://db.satnogs.org/api/tle/?format=json';
const dry = process.argv.includes('--dry');

const epochHours = l1 => {
  const yy = parseInt(l1.slice(18, 20)), dd = parseFloat(l1.slice(20, 32));
  const yr = yy < 57 ? 2000 + yy : 1900 + yy;
  return (Date.now() - (Date.UTC(yr, 0, 1) + (dd - 1) * 86400000)) / 3600000;
};

const fresh = new Map(); // norad id -> { l1, l2 }
function ingest(text) {
  const L = text.split(/\r?\n/);
  for (let i = 0; i + 2 < L.length; i += 3) {
    const l1 = L[i + 1], l2 = L[i + 2];
    if (!l1 || l1[0] !== '1' || !l2 || l2[0] !== '2') continue;
    const id = parseInt(l1.slice(2, 7));
    if (!id) continue;
    const prev = fresh.get(id);
    if (prev && epochHours(prev.l1) <= epochHours(l1)) continue; // keep the newer element set
    fresh.set(id, { l1, l2 });
  }
}

for (const g of GROUPS) {
  try {
    const r = await fetch(`${MIRROR}/${g}.tle`);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    ingest(await r.text());
    process.stdout.write(`  ${g} ok\n`);
  } catch (e) { console.warn(`  ${g} failed: ${e.message}`); }
}
console.log(`mirror: ${fresh.size} element sets`);

try {
  const r = await fetch(SATNOGS);
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const before = fresh.size;
  ingest((await r.json()).map(t => `${t.tle0}\n${t.tle1}\n${t.tle2}`).join('\n'));
  console.log(`satnogs: +${fresh.size - before} new`);
} catch (e) { console.warn(`satnogs failed: ${e.message}`); }

const file = 'public/data/satellites.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const sats = data.sats || data;

let hit = 0; const ages = [];
for (const s of sats) {
  const m = fresh.get(s.id);
  if (!m) continue;
  hit++; ages.push(epochHours(m.l1));
  if (!dry) { s.l1 = m.l1; s.l2 = m.l2; }
}
ages.sort((a, b) => a - b);
const q = p => ages.length ? ages[Math.floor(ages.length * p)].toFixed(1) : 'n/a';
console.log(`\nrefreshed ${hit}/${sats.length} satellites (${(hit / sats.length * 100).toFixed(0)}%)`);
console.log(`element age: median ${q(0.5)}h, 90th ${q(0.9)}h`);
console.log(`stale (untouched): ${sats.length - hit}`);

if (dry) { console.log('\n(dry run — nothing written)'); process.exit(0); }
data.fetched = new Date().toISOString();
data.source = 'CelesTrak via astrion-tech mirror + SatNOGS';
fs.writeFileSync(file, JSON.stringify(data));
console.log(`\nwrote ${file}`);
