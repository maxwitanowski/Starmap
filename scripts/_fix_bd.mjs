import fs from 'node:fs';
let s = fs.readFileSync('scripts/build-data.mjs', 'utf8');
const bt = String.raw`\``, dl = String.raw`\${`;
const n1 = s.split(bt).length - 1, n2 = s.split(dl).length - 1;
s = s.split(bt).join('`').split(dl).join('${');
fs.writeFileSync('scripts/build-data.mjs', s);
console.log('fixed', n1, n2);
// sprite dimming for sub-pixel galaxies: keep them visible as dots in wide views
function patch(file, pairs) { let t = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!t.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 80)); continue; } t = t.split(a).join(b); } fs.writeFileSync(file, t); }
patch('src/layers/DeepSky.js', [[`    if (pxH < uMinPx) { scale = uMinPx / pxH; alpha *= pow(pxH / uMinPx, 0.6); }`, `    if (pxH < uMinPx) { scale = uMinPx / pxH; alpha *= max(0.5, pow(pxH / uMinPx, 0.3)); }`]]);
patch('src/layers/Galaxies2MRS.js', [[`    if (pxH < uMinPx) { scale = uMinPx / pxH; alpha *= pow(pxH / uMinPx, 0.5); }`, `    if (pxH < uMinPx) { scale = uMinPx / pxH; alpha *= max(0.6, pow(pxH / uMinPx, 0.3)); }`]]);
