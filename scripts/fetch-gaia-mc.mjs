// Gaia DR3 members of the Magellanic Clouds via the ESA archive async TAP (proper-motion + parallax selected).
import fs from 'node:fs';
const BASE = 'https://gea.esac.esa.int/tap-server/tap/async';
const jobs = {
  lmc: `SELECT TOP 80000 source_id, ra, dec, phot_g_mean_mag, bp_rp FROM gaiadr3.gaia_source_lite WHERE 1=CONTAINS(POINT('ICRS',ra,dec), CIRCLE('ICRS',80.894,-69.756,4.6)) AND phot_g_mean_mag < 15.8 AND (parallax < 0.25 OR parallax IS NULL) AND pmra BETWEEN 0.5 AND 3.2 AND pmdec BETWEEN -1.2 AND 1.6`,
  smc: `SELECT TOP 40000 source_id, ra, dec, phot_g_mean_mag, bp_rp FROM gaiadr3.gaia_source_lite WHERE 1=CONTAINS(POINT('ICRS',ra,dec), CIRCLE('ICRS',13.187,-72.829,2.9)) AND phot_g_mean_mag < 16.3 AND (parallax < 0.25 OR parallax IS NULL) AND pmra BETWEEN -0.4 AND 2.0 AND pmdec BETWEEN -2.2 AND -0.2`,
};
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function run(name, q) {
  const body = new URLSearchParams({ REQUEST: 'doQuery', LANG: 'ADQL', FORMAT: 'csv', PHASE: 'RUN', QUERY: q });
  const r = await fetch(BASE, { method: 'POST', body, redirect: 'manual' });
  const loc = r.headers.get('location'); if (!loc) throw new Error('no job location: ' + r.status + ' ' + (await r.text()).slice(0, 200));
  console.log(name, 'job', loc);
  for (let i = 0; i < 120; i++) {
    await sleep(5000);
    const ph = await (await fetch(loc + '/phase')).text();
    if (ph.includes('COMPLETED')) break;
    if (ph.includes('ERROR') || ph.includes('ABORTED')) throw new Error(name + ' job ' + ph + ' ' + (await (await fetch(loc + '/error')).text()).slice(0, 300));
    if (i % 6 === 0) console.log(name, ph.trim());
  }
  const csv = await (await fetch(loc + '/results/result')).text();
  fs.writeFileSync(`raw/gaia_${name}.csv`, csv);
  console.log(name, 'rows', csv.split('\n').length - 2);
}
await Promise.all(Object.entries(jobs).map(([n, q]) => run(n, q).catch(e => console.log(e.message))));
