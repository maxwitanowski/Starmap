import fs from 'node:fs';
function patch(file, pairs) { let s = fs.readFileSync(file, 'utf8'); for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('MISSING in', file, ':', a.slice(0, 100)); continue; } s = s.split(a).join(b); } fs.writeFileSync(file, s); }

patch('src/layers/Satellites.js', [
  [`export const SAT_SIZES = { sat_station: 0.109, sat_telescope: 0.0132, sat_comms: 0.0065, sat_gps: 0.0052, sat_weather: 0.0045, sat_starlink: 0.003, sat_cubesat: 0.0003, sat_rocketbody: 0.009 };`,
   `export const SAT_SIZES = {
  // generic classes
  sat_station: 0.109, sat_telescope: 0.0132, sat_comms: 0.0065, sat_gps: 0.0052, sat_weather: 0.0045, sat_starlink: 0.0085, sat_cubesat: 0.0003, sat_rocketbody: 0.009,
  // constellation families with their own design-accurate models (deployed longest extent, km)
  fam_starlink_v1: 0.0085, fam_starlink_v2: 0.030, fam_oneweb: 0.0035, fam_dove: 0.0007, fam_lemur: 0.0006, fam_iridium: 0.0094, fam_glonass: 0.0072, fam_beidou: 0.012, fam_galileo: 0.0147, fam_gps: 0.0147,
  fam_globalstar: 0.008, fam_geo_comms: 0.040, fam_kineis: 0.0009, fam_eo_china: 0.010, fam_o3b: 0.010, fam_gonets: 0.0025, fam_orbcomm: 0.007, fam_tianmu: 0.0015,
};
export const FAMILY_LABELS = {
  fam_starlink_v1: 'Starlink v1.5', fam_starlink_v2: 'Starlink v2 mini', fam_oneweb: 'OneWeb', fam_dove: 'Planet Dove (Flock) 3U cubesat', fam_lemur: 'Spire Lemur 3U cubesat', fam_iridium: 'Iridium NEXT', fam_glonass: 'GLONASS-K (Cosmos)', fam_beidou: 'BeiDou-3', fam_galileo: 'Galileo FOC', fam_gps: 'GPS Block III',
  fam_globalstar: 'Globalstar second generation', fam_geo_comms: 'geostationary communications satellite (Intelsat/SES/Eutelsat class)', fam_kineis: 'Kineis IoT nanosatellite', fam_eo_china: 'Chinese Earth-observation satellite (Gaofen/Yaogan/Jilin class)', fam_o3b: 'O3b mPOWER', fam_gonets: 'Gonets-M', fam_orbcomm: 'Orbcomm OG2', fam_tianmu: 'Tianmu-1 microsatellite',
};`],
  [`  // Generic class of the satellite (for the representative 3D model / picture)
  variant(i) {
    const s = this.sats[i]; const g = s.g.map(k => this.groups[k]);`, `  // Design-accurate family model where the constellation is large enough to deserve one; generic class otherwise
  variant(i) {
    const s = this.sats[i]; const n = s.n.toUpperCase();
    if (/^STARLINK/.test(n)) return s.id > 55300 ? 'fam_starlink_v2' : 'fam_starlink_v1';
    if (/^ONEWEB/.test(n)) return 'fam_oneweb';
    if (/^FLOCK|^DOVE|^SKYSAT/.test(n)) return 'fam_dove';
    if (/^LEMUR/.test(n)) return 'fam_lemur';
    if (/^IRIDIUM/.test(n)) return 'fam_iridium';
    if (/^COSMOS/.test(n) && s.g.some(k => /glo-ops|gnss/.test(this.groups[k]))) return 'fam_glonass';
    if (/^BEIDOU/.test(n)) return 'fam_beidou';
    if (/^GSAT0|^GALILEO/.test(n)) return 'fam_galileo';
    if (/^GPS|^NAVSTAR/.test(n)) return 'fam_gps';
    if (/^GLOBALSTAR/.test(n)) return 'fam_globalstar';
    if (/^INTELSAT|^SES[ -]|^EUTELSAT|^GALAXY|^ECHOSTAR|^ASTRA|^JCSAT|^INMARSAT|^ZHONGXING|^CHINASAT|^ARABSAT|^TELSTAR|^VIASAT|^SKYNET|^HOTBIRD|^THAICOM|^AMAZONAS|^YAMAL|^EXPRESS|^DIRECTV|^SIRIUS|^XM /.test(n) && s.g.some(k => /geo|intelsat|ses|x-comm|other-comm|gorizont|raduga/.test(this.groups[k]))) return 'fam_geo_comms';
    if (/^KINEIS/.test(n)) return 'fam_kineis';
    if (/^GAOFEN|^YAOGAN|^JILIN|^SHIJIAN|^ZIYUAN|^HAIYANG|^HUANJING/.test(n)) return 'fam_eo_china';
    if (/^O3B/.test(n)) return 'fam_o3b';
    if (/^GONETS/.test(n)) return 'fam_gonets';
    if (/^ORBCOMM/.test(n)) return 'fam_orbcomm';
    if (/^TIANMU/.test(n)) return 'fam_tianmu';
    return this.genericVariant(i);
  }
  genericVariant(i) {
    const s = this.sats[i]; const g = s.g.map(k => this.groups[k]);`],
]);
// Models: fall back to the generic class if a family model is missing
patch('src/layers/Models.js', [[`          const v = S.variant(i); const size = SAT_SIZES[v];`, `          let v = S.variant(i); const size = SAT_SIZES[v];
          if (this.templates.get(v) === false) v = S.genericVariant(i); // family model unavailable: use the class model at the family's size`],
  [`          if (this._place('sat' + i, v, size, [e[0] + S.posD[3 * i], e[1] + S.posD[3 * i + 1], e[2] + S.posD[3 * i + 2]], 1 + (i % 7))) { S.hideMarker.add(i); shown++; }`, `          if (this._place('sat' + i, v, size, [e[0] + S.posD[3 * i], e[1] + S.posD[3 * i + 1], e[2] + S.posD[3 * i + 2]], 1 + (i % 7))) { S.hideMarker.add(i); shown++; }
          else if (this.templates.get(v) === undefined) this._template(v); // kick off loading`]]);
// UI captions for family models
patch('src/ui/UI.js', [
  [`import { fetchWikipedia, starImpression, exoplanetImpression, aiSummary } from '../core/Media.js';`, `import { fetchWikipedia, starImpression, exoplanetImpression, aiSummary } from '../core/Media.js';
import { FAMILY_LABELS } from '../layers/Satellites.js';`],
  [`        img.src = \`/models/\${desc.variant}.jpg\`; cap.textContent = \`Representative rendering of a \${label} (AI-generated; no photograph of this specific object exists). The same generic shape is used for its 3D model.\`; fig.hidden = false;`, `        img.src = \`/models/\${desc.variant}.jpg\`;
        cap.textContent = FAMILY_LABELS[desc.variant] ? \`Rendering based on the \${FAMILY_LABELS[desc.variant]} design (AI-generated from the published spacecraft design; not a photograph of this unit). The 3D model you see up close is built from it.\` : \`Representative rendering of a \${label} (AI-generated; no photograph of this specific object exists). The same generic shape is used for its 3D model.\`;
        fig.hidden = false;`],
]);
console.log('patched');
