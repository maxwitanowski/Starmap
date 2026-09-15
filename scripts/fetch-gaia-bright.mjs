// Gaia DR3 stars brighter than G=11 with good parallaxes: the deeper star field beyond Hipparcos/HYG.
import fs from 'node:fs';
const BASE = 'https://gea.esac.esa.int/tap-server/tap/async';
const q = `SELECT source_id, ra, dec, parallax, phot_g_mean_mag, bp_rp FROM gaiadr3.gaia_source_lite WHERE phot_g_mean_mag < 11.0 AND parallax > 0.25 AND parallax_over_error > 5`;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const body = new URLSearchParams({ REQUEST: 'doQuery', LANG: 'ADQL', FORMAT: 'csv', PHASE: 'RUN', QUERY: q });
const r = await fetch(BASE, { method: 'POST', body, redirect: 'manual' });
const loc = r.headers.get('location'); if (!loc) { console.log('no job', r.status, (await r.text()).slice(0, 300)); process.exit(1); }
console.log('job', loc);
for (let i = 0; i < 360; i++) { await sleep(10000); const ph = await (await fetch(loc + '/phase')).text(); if (ph.includes('COMPLETED')) break; if (ph.includes('ERROR') || ph.includes('ABORTED')) { console.log('job', ph, (await (await fetch(loc + '/error')).text()).slice(0, 300)); process.exit(1); } if (i % 6 === 0) console.log(ph.trim()); }
const res = await fetch(loc + '/results/result');
const ws = fs.createWriteStream('raw/gaia_bright.csv');
for await (const chunk of res.body) ws.write(chunk);
ws.end(); await new Promise(r => ws.on('finish', r));
console.log('saved', (fs.statSync('raw/gaia_bright.csv').size / 1e6).toFixed(1), 'MB');
