// Pictures and text for the info panel.
//  1. Real photographs + summaries from Wikipedia (REST summary API) for anything with an article.
//  2. Artist's impressions generated with fal.ai (FLUX) for exoplanets, which have no photographs — clearly labelled.
//  3. Representative AI impressions of stellar types for stars without an article.
//  4. Short AI-written summaries (OpenRouter) grounded strictly in the catalogue values when Wikipedia has nothing.
const FAL_KEY = import.meta.env.VITE_FAL_KEY;
const OR_KEY = import.meta.env.VITE_OPENROUTER_KEY;

const GREEK = { Alp: 'Alpha', Bet: 'Beta', Gam: 'Gamma', Del: 'Delta', Eps: 'Epsilon', Zet: 'Zeta', Eta: 'Eta', The: 'Theta', Iot: 'Iota', Kap: 'Kappa', Lam: 'Lambda', Mu: 'Mu', Nu: 'Nu', Xi: 'Xi', Omi: 'Omicron', Pi: 'Pi', Rho: 'Rho', Sig: 'Sigma', Tau: 'Tau', Ups: 'Upsilon', Phi: 'Phi', Chi: 'Chi', Psi: 'Psi', Ome: 'Omega' };
const GENITIVE = { And: 'Andromedae', Ant: 'Antliae', Aps: 'Apodis', Aqr: 'Aquarii', Aql: 'Aquilae', Ara: 'Arae', Ari: 'Arietis', Aur: 'Aurigae', Boo: 'Boötis', Cae: 'Caeli', Cam: 'Camelopardalis', Cnc: 'Cancri', CVn: 'Canum Venaticorum', CMa: 'Canis Majoris', CMi: 'Canis Minoris', Cap: 'Capricorni', Car: 'Carinae', Cas: 'Cassiopeiae', Cen: 'Centauri', Cep: 'Cephei', Cet: 'Ceti', Cha: 'Chamaeleontis', Cir: 'Circini', Col: 'Columbae', Com: 'Comae Berenices', CrA: 'Coronae Australis', CrB: 'Coronae Borealis', Crv: 'Corvi', Crt: 'Crateris', Cru: 'Crucis', Cyg: 'Cygni', Del: 'Delphini', Dor: 'Doradus', Dra: 'Draconis', Equ: 'Equulei', Eri: 'Eridani', For: 'Fornacis', Gem: 'Geminorum', Gru: 'Gruis', Her: 'Herculis', Hor: 'Horologii', Hya: 'Hydrae', Hyi: 'Hydri', Ind: 'Indi', Lac: 'Lacertae', Leo: 'Leonis', LMi: 'Leonis Minoris', Lep: 'Leporis', Lib: 'Librae', Lup: 'Lupi', Lyn: 'Lyncis', Lyr: 'Lyrae', Men: 'Mensae', Mic: 'Microscopii', Mon: 'Monocerotis', Mus: 'Muscae', Nor: 'Normae', Oct: 'Octantis', Oph: 'Ophiuchi', Ori: 'Orionis', Pav: 'Pavonis', Peg: 'Pegasi', Per: 'Persei', Phe: 'Phoenicis', Pic: 'Pictoris', Psc: 'Piscium', PsA: 'Piscis Austrini', Pup: 'Puppis', Pyx: 'Pyxidis', Ret: 'Reticuli', Sge: 'Sagittae', Sgr: 'Sagittarii', Sco: 'Scorpii', Scl: 'Sculptoris', Sct: 'Scuti', Ser: 'Serpentis', Sex: 'Sextantis', Tau: 'Tauri', Tel: 'Telescopii', Tri: 'Trianguli', TrA: 'Trianguli Australis', Tuc: 'Tucanae', UMa: 'Ursae Majoris', UMi: 'Ursae Minoris', Vel: 'Velorum', Vir: 'Virginis', Vol: 'Volantis', Vul: 'Vulpeculae' };
const SPECIAL = { 'Rigil Kentaurus': 'Alpha Centauri A', 'Toliman': 'Alpha Centauri B', 'ISS (ZARYA)': 'International Space Station', 'CSS (TIANHE)': 'Tiangong space station', 'HST': 'Hubble Space Telescope', 'JUICE': 'Jupiter Icy Moons Explorer', 'SOHO': 'Solar and Heliospheric Observatory', 'STEREO-A': 'STEREO', 'Hayabusa2': 'Hayabusa2', 'Sgr A*': 'Sagittarius A*', 'Sagittarius A*': 'Sagittarius A*', 'LMC': 'Large Magellanic Cloud', 'Sun': 'Sun', 'Moon': 'Moon' };

const cache = new Map();
const lsGet = k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { } };

// Candidate Wikipedia titles for a descriptor, most specific first
export function wikiCandidates(desc) {
  const c = [];
  const name = desc.name;
  if (SPECIAL[name]) c.push(SPECIAL[name]);
  const rows = Object.fromEntries((desc.rows || []).map(r => [r[0], String(r[1])]));
  switch (desc.kind) {
    case 'sun': c.push('Sun'); break;
    case 'planet': c.push(name); break;
    case 'dwarf': c.push(`${name} (dwarf planet)`, name); break;
    case 'moon': c.push(name === 'Moon' ? 'Moon' : `${name} (moon)`, name); break;
    case 'star': {
      const des = (rows['Designations'] || '').split(',').map(s => s.trim());
      for (const d of des) {
        if (/^HIP |^HD |^HR /.test(d)) continue;
        const bay = d.match(/^([A-Z][a-z]{1,2})(?:-?\d)?\s+([A-Z][A-Za-z]{2})$/);
        if (bay && GREEK[bay[1]] && GENITIVE[bay[2]]) { c.push(`${GREEK[bay[1]]} ${GENITIVE[bay[2]]}`); continue; }
        const flam = d.match(/^(\d+)\s+([A-Z][A-Za-z]{2})$/);
        if (flam && GENITIVE[flam[2]]) { c.push(`${flam[1]} ${GENITIVE[flam[2]]}`); continue; }
        const gl = d.match(/^(Gl|GJ)\s*(\d+\.?\d*[A-Z]?)$/);
        if (gl) { c.push(`Gliese ${gl[2]}`); continue; }
        c.push(d);
      }
      if (!c.includes(name)) c.push(name);
      for (const d of des) if (/^HD /.test(d)) c.push(d);
      break;
    }
    case 'exoplanet': c.push(name.replace(/\s+([a-h])$/, '$1'), name); break;
    case 'dso': case 'galaxy': {
      const des = (rows['Designations'] || '').split(',').map(s => s.trim());
      const common = des.filter(d => !/^(M|NGC|IC|Mel|Cr|Tr|C)\s?\d/.test(d));
      c.push(...common);
      for (const d of des) { const m = d.match(/^M\s?(\d+)$/); if (m) c.push(`Messier ${m[1]}`); }
      for (const d of des) if (/^(NGC|IC) \d+/.test(d)) c.push(d);
      if (!c.includes(name)) c.push(name);
      break;
    }
    case 'asteroid': { c.push(name); const m = name.match(/^\d+\s+(.+)$/); if (m) c.push(`${m[1]} (asteroid)`, m[1]); break; }
    case 'comet': { const m = name.match(/^\d+P\/(.+?)( \d)?$/); if (m) c.push(`Comet ${m[1]}`, `${m[1]}'s Comet`); c.push(name.replace(/\s*\(.*\)$/, '')); break; }
    case 'satellite': c.push(name.replace(/\s*\(.*\)$/, ''), name); break;
    case 'spacecraft': c.push(name, `${name} (spacecraft)`); break;
    case 'constellation': c.push(`${name} (constellation)`, name); break;
    case 'blackhole': case 'quasar': {
      for (const a of [name, ...(desc.wiki || [])]) {
        const v = a.match(/^(V\d+|[A-Z]{1,2})\s+([A-Z][a-z]{2})$/); // variable-star name: "V404 Cyg" -> "V404 Cygni"
        if (v && GENITIVE[v[2]]) c.push(`${v[1]} ${GENITIVE[v[2]]}`);
        c.push(a.replace(/ central black hole$/, '').replace(/ black hole$/, ''));
      }
      break;
    }
  }
  return [...new Set(c.filter(Boolean))];
}

async function wikiSummary(title) {
  const key = 'wiki:' + title;
  if (cache.has(key)) return cache.get(key);
  const stored = lsGet(key); if (stored !== null) { cache.set(key, stored); return stored; }
  let out = false;
  try {
    const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`, { headers: { Accept: 'application/json' } });
    if (r.ok) {
      const j = await r.json();
      if (j.type === 'standard' && j.extract) {
        let image = j.thumbnail?.source || null;
        if (image && /map|chart|diagram|location|constellation|orbit|svg|plot|graph|comparison|size_|_sizes|light_?curve/i.test(decodeURIComponent(image))) image = null; // charts are not photographs
        out = { title: j.title, extract: j.extract, image, original: j.originalimage?.source || null, url: j.content_urls?.desktop?.page };
      }
    }
  } catch { }
  cache.set(key, out); lsSet(key, out);
  return out;
}

// Heuristic: does the article look like it is about the sky object (guards against "Juno" the goddess etc.)?
function looksAstronomical(summary) {
  return /star|planet|moon|galaxy|nebula|cluster|comet|asteroid|satellite|spacecraft|probe|telescope|constellation|light-year|orbit|astronom|solar|space station|dwarf|remnant|quasar|black hole|sun/i.test(summary.extract);
}

export async function fetchWikipedia(desc) {
  for (const t of wikiCandidates(desc).slice(0, 6)) {
    const s = await wikiSummary(t);
    if (s && looksAstronomical(s)) return s;
  }
  return null;
}

// ---- AI fallbacks ----
export function starImpression(desc) {
  const rows = Object.fromEntries((desc.rows || []).map(r => [r[0], String(r[1])]));
  const sp = (rows['Spectral type'] || '').trim();
  const lum = parseFloat((rows['Luminosity (est.)'] || '').replace(/[^\d.e+-]/g, ''));
  const cls = sp[0]?.toUpperCase();
  let key = null;
  if (/^W/.test(sp)) key = 'wolfrayet';
  else if (/^D/.test(sp) || /VII/.test(sp)) key = 'whitedwarf';
  else if (/^[LT]/.test(sp)) key = 'browndwarf';
  else if (/^[OB]/.test(sp) && (/\bI(a|b)?\b/.test(sp) || lum > 20000)) key = 'bluegiant';
  else if (/^[KM]/.test(sp) && (/\bI(a|b)?\b/.test(sp) || lum > 3000)) key = 'supergiant';
  else if (/^[KM]/.test(sp) && (/III|II/.test(sp) || lum > 30)) key = 'giant';
  else if ('OBAFGKM'.includes(cls)) key = cls;
  if (!key) return null;
  const label = { O: 'O-type star', B: 'B-type star', A: 'A-type star', F: 'F-type star', G: 'G-type (Sun-like) star', K: 'K-type orange star', M: 'M-type red dwarf', giant: 'red giant', supergiant: 'red supergiant', bluegiant: 'blue supergiant', whitedwarf: 'white dwarf', browndwarf: 'brown dwarf', wolfrayet: 'Wolf-Rayet star' }[key];
  return { image: `/img/stars/${key}.jpg`, caption: `Representative artist's impression of a ${label} (AI-generated, not a photograph of this star)` };
}

export async function exoplanetImpression(desc) {
  if (!FAL_KEY) return null;
  const key = 'fal:' + desc.name;
  const stored = lsGet(key); if (stored) return stored;
  const rows = Object.fromEntries((desc.rows || []).map(r => [r[0], String(r[1])]));
  const cls = (desc.sub || '').split(' orbiting')[0];
  const temp = rows['Equilibrium temperature'] ? `equilibrium temperature ${rows['Equilibrium temperature'].split(' (')[0]}` : 'unknown temperature';
  const star = rows['Host star'] || 'its star';
  const look = /gas giant/.test(cls) ? 'banded gas giant with swirling cloud belts' : /Neptune/.test(cls) ? 'hazy blue-green ice giant' : /super-Earth/.test(cls) ? 'rocky super-Earth with thin atmosphere' : 'rocky Earth-sized planet';
  const hot = parseFloat(rows['Equilibrium temperature'] || '0');
  const climate = hot > 1000 ? ', glowing hot, molten surface, scorched' : hot > 400 ? ', hot and dry, thick atmosphere' : hot > 230 && hot < 330 ? ', temperate, possible oceans and clouds' : hot > 0 ? ', frozen, icy surface' : '';
  const prompt = `Photorealistic space artist's impression of the exoplanet ${desc.name}, a ${look}${climate}, ${temp}, lit by ${star} which appears in the distance, seen from orbit, black starry background, NASA-style scientific illustration, no text, no watermark`;
  try {
    const r = await fetch('https://fal.run/fal-ai/flux/schnell', { method: 'POST', headers: { Authorization: 'Key ' + FAL_KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt, image_size: 'landscape_4_3', num_images: 1, num_inference_steps: 4, enable_safety_checker: false }) });
    const j = await r.json();
    const url = j.images?.[0]?.url; if (!url) return null;
    const out = { image: url, caption: `Artist's impression generated from the catalogued properties (AI-generated, FLUX via fal.ai). No photograph of this planet exists.` };
    lsSet(key, out);
    return out;
  } catch { return null; }
}

export async function aiSummary(desc) {
  if (!OR_KEY) return null;
  const key = 'or:' + desc.kind + ':' + desc.name;
  const stored = lsGet(key); if (stored) return stored;
  const facts = (desc.rows || []).map(r => `${r[0]}: ${r[1]}`).join('\n');
  const body = {
    model: 'openai/gpt-4o-mini', max_tokens: 160, temperature: 0.3,
    messages: [
      { role: 'system', content: 'You write short, engaging, factual descriptions (2–3 sentences, plain text) for an astronomy app. Use ONLY the facts provided; you may explain what the values mean in everyday terms (e.g. compare to the Sun or Earth) but must not add any fact, name, or history that is not in the data. Never invent discovery dates, names or missions.' },
      { role: 'user', content: `Object type: ${desc.kindLabel || desc.kind}\nName: ${desc.name}\nData:\n${facts}` },
    ],
  };
  try {
    const r = await fetch('https://openrouter.ai/api/v1/chat/completions', { method: 'POST', headers: { Authorization: 'Bearer ' + OR_KEY, 'Content-Type': 'application/json', 'HTTP-Referer': location.origin, 'X-Title': 'Starmap' }, body: JSON.stringify(body) });
    const j = await r.json();
    const text = j.choices?.[0]?.message?.content?.trim();
    if (!text) return null;
    lsSet(key, text);
    return text;
  } catch { return null; }
}

export const hasAI = { fal: !!FAL_KEY, openrouter: !!OR_KEY };
