import { fmtDist, fmtNum, KM_PER_AU, KM_PER_PC, KM_PER_LY } from '../astro/units.js';
import { fetchWikipedia, starImpression, exoplanetImpression, aiSummary } from '../core/Media.js';
import { FAMILY_LABELS } from '../layers/Satellites.js';

const $ = id => document.getElementById(id);

export class UI {
  constructor(universe) {
    this.u = universe;
    this.searchIndex = null;
    this._bind();
  }
  _bind() {
    const u = this.u;
    $('info-close').onclick = () => u.select(null);
    $('btn-goto').onclick = () => u.selection && u.rig.goTo(u.selection);
    $('btn-follow').onclick = () => u.selection && u.rig.setOrbit(u.selection);
    $('t-pause').onclick = () => u.time.togglePause();
    $('t-fwd').onclick = () => u.time.faster();
    $('t-rev').onclick = () => u.time.slower();
    $('t-now').onclick = () => u.time.setNow();
    $('btn-mode').onclick = () => u.rig.toggleMode();
    $('btn-help').onclick = () => $('help').hidden = false;
    $('help-close').onclick = () => $('help').hidden = true;
    $('help').addEventListener('click', e => { if (e.target === $('help')) $('help').hidden = true; });
    $('limit-mag').oninput = e => { u.layers.stars.setLimitMag(+e.target.value); u.layers.mcstars.setLimitMag(+e.target.value); u.layers.gaia.setLimitMag(+e.target.value); $('limit-mag-out').textContent = (+e.target.value).toFixed(1); };
    $('label-density').oninput = e => { u.labelDensity = +e.target.value; };
    $('all-stars').onchange = e => { const on = e.target.checked ? 1 : 0; for (const k of ['stars', 'mcstars', 'gaia']) u.layers[k].mat.uniforms.uAllStars.value = on; $('limit-mag').disabled = !!on; };
    // layer toggles
    const toggles = [
      ['stars', 'Stars (HYG, 113k)'], ['gaia', 'Deep star field (Gaia DR3, 1.1M)'], ['con', 'Constellation figures'], ['solar', 'Planets & moons'], ['orbits', 'Orbit lines'], ['asteroids', 'Asteroids (36k, JPL)'], ['comets', 'Comets (600)'],
      ['exo', 'Exoplanets 6,360 + 7,034 candidates'], ['dso', 'Nebulae & clusters & galaxies (13.8k)'], ['galaxies', '2MRS galaxies (43k, shaped)'], ['gmodels', 'Galaxy particle models (on demand)'], ['volumes', '3D nebula & cluster volumes'], ['mw', 'Milky Way model'], ['sats', 'Satellites (14k, live SGP4)'], ['craft', 'Deep-space probes'], ['models', 'Close-range 3D models (generic)'], ['mcstars', 'Magellanic Cloud stars (Gaia, 108k)'], ['bh', 'Black holes (stellar, intermediate & supermassive)'], ['quasars', 'Quasars & active galaxies (Milliquas, 1.0M)'],
    ];
    const box = $('layer-toggles');
    for (const [key, label] of toggles) {
      const l = document.createElement('label');
      const cb = document.createElement('input'); cb.type = 'checkbox'; cb.checked = true;
      cb.onchange = () => u.setLayerVisible(key, cb.checked);
      l.appendChild(cb); l.appendChild(document.createTextNode(' ' + label));
      box.appendChild(l);
    }
    // quick travel
    const quick = [['Earth', { layer: 'solar', id: 'earth' }], ['Moon', { layer: 'solar', id: 'moon301' }], ['ISS', { layer: 'sats', norad: 25544 }], ['Mars', { layer: 'solar', id: 'mars' }], ['Jupiter', { layer: 'solar', id: 'jupiter' }], ['Saturn', { layer: 'solar', id: 'saturn' }], ['Pluto', { layer: 'solar', id: 'pluto' }],
      ['Voyager 1', { layer: 'craft', name: 'Voyager 1' }], ['Solar System', { special: 'solarsystem' }], ['α Centauri', { layer: 'stars', proper: 'Rigil Kentaurus' }], ['Sirius', { layer: 'stars', proper: 'Sirius' }], ['Betelgeuse', { layer: 'stars', proper: 'Betelgeuse' }],
      ['TRAPPIST-1', { layer: 'exo', name: 'TRAPPIST-1 e' }], ['Orion Nebula', { layer: 'dso', name: 'M42' }], ['Pleiades', { layer: 'dso', name: 'Pleiades' }], ['Sgr A*', { layer: 'dso', name: 'Sagittarius A*' }], ['Milky Way', { special: 'milkyway' }], ['Andromeda', { layer: 'dso', name: 'M31' }], ['Virgo Cluster', { layer: 'dso', name: 'Virgo Cluster' }], ['Local universe', { special: 'universe' }], ['Sgr A*', { layer: 'bh', name: 'Sagittarius A*' }], ['Observable universe', { special: 'cosmos' }]];
    const qbox = $('quick-travel');
    for (const [label, ref] of quick) { const b = document.createElement('button'); b.className = 'chip'; b.textContent = label; b.onclick = () => u.travel(ref); qbox.appendChild(b); }
    // search
    const input = $('search'), results = $('search-results');
    let active = -1, current = [];
    const render = () => {
      results.innerHTML = '';
      current.forEach((r, i) => {
        const d = document.createElement('div'); d.className = 'sr-item' + (i === active ? ' active' : '');
        d.innerHTML = `<span>${escapeHtml(r.name)}${r.alt ? ` <span class="dim">${escapeHtml(r.alt)}</span>` : ''}</span><span class="sr-kind">${escapeHtml(r.kind)}</span>`;
        d.onmousedown = e => { e.preventDefault(); choose(r); };
        results.appendChild(d);
      });
      results.hidden = current.length === 0;
    };
    const choose = r => { input.value = ''; results.hidden = true; input.blur(); u.travel(r.ref); };
    input.addEventListener('input', () => { current = this.search(input.value); active = current.length ? 0 : -1; render(); });
    input.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { active = Math.min(current.length - 1, active + 1); render(); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { active = Math.max(0, active - 1); render(); e.preventDefault(); }
      else if (e.key === 'Enter') { if (current[active]) choose(current[active]); }
      else if (e.key === 'Escape') { input.value = ''; results.hidden = true; input.blur(); }
    });
    input.addEventListener('blur', () => setTimeout(() => { results.hidden = true; }, 150));
    input.addEventListener('focus', () => { if (current.length) results.hidden = false; });
    window.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT') return;
      if (e.key === '/') { e.preventDefault(); input.focus(); }
      else if (e.key === '.') u.time.togglePause();
      else if (e.key === ']') u.time.faster();
      else if (e.key === '[') u.time.slower();
      else if (e.key === 'Escape') { u.select(null); }
      else if (e.key === 'h' || e.key === 'H') $('help').hidden = !$('help').hidden;
      else if (e.key === 'f' || e.key === 'F') u.rig.toggleMode();
    });
  }
  buildSearchIndex() {
    const idx = [];
    for (const [name, layer] of Object.entries(this.u.layers)) if (layer.searchEntries) for (const e of layer.searchEntries()) { e.lc = e.name.toLowerCase(); e.lcAlt = (e.alt || '').toLowerCase(); idx.push(e); }
    this.searchIndex = idx;
  }
  search(q) {
    q = q.trim().toLowerCase(); if (!q || !this.searchIndex) return [];
    const out = [];
    const starts = [], contains = [];
    for (const e of this.searchIndex) {
      if (e.lc.startsWith(q)) starts.push(e);
      else if (e.lc.includes(q) || (e.lcAlt && e.lcAlt.includes(q))) contains.push(e);
      if (starts.length > 400) break;
    }
    const rank = e => (e.lowPrio ? 10 : 0) + e.lc.length * 0.01 - (e.prio || 0);
    starts.sort((a, b) => rank(a) - rank(b)); contains.sort((a, b) => rank(a) - rank(b));
    for (const e of [...starts, ...contains]) { if (out.length >= 25) break; out.push(e); }
    return out;
  }
  showInfo(desc) {
    const panel = $('info-panel');
    if (!desc) { panel.hidden = true; return; }
    panel.hidden = false;
    $('info-kind').textContent = desc.kindLabel || desc.kind;
    $('info-name').textContent = desc.name;
    $('info-sub').textContent = desc.sub || '';
    $('info-desc').textContent = desc.desc || '';
    const t = $('info-table'); t.innerHTML = '';
    for (const [k, v] of desc.rows || []) { const tr = document.createElement('tr'); tr.innerHTML = `<td>${escapeHtml(k)}</td><td>${escapeHtml(String(v))}</td>`; t.appendChild(tr); }
    $('info-source').textContent = desc.source ? 'Source: ' + desc.source : '';
    this._loadMedia(desc);
  }
  async _loadMedia(desc) {
    const token = this._mediaToken = (this._mediaToken || 0) + 1;
    const fig = $('info-media'), img = $('info-img'), cap = $('info-caption'), wiki = $('info-wiki');
    fig.hidden = true; wiki.hidden = true; img.removeAttribute('src');
    if (desc.kind === 'galaxy' && desc.ref?.layer === 'galaxies') return; // 2MRS ids have no articles
    const w = await fetchWikipedia(desc);
    if (token !== this._mediaToken) return;
    if (w) {
      if (w.image) { img.src = w.image; cap.textContent = `Photograph: Wikipedia / Wikimedia Commons (${w.title})`; fig.hidden = false; }
      wiki.innerHTML = `<span class="tag">From Wikipedia</span>${escapeHtml(w.extract)} <a href="${w.url}" target="_blank" rel="noopener">Read more ↗</a>`;
      wiki.hidden = false;
    }
    if (!w || !w.image) {
      // no photograph exists: labelled impressions
      if (desc.kind === 'exoplanet') {
        cap.textContent = "Generating artist's impression…"; fig.hidden = false;
        const ai = await exoplanetImpression(desc);
        if (token !== this._mediaToken) return;
        if (ai) { img.src = ai.image; cap.textContent = ai.caption; } else fig.hidden = true;
      } else if (desc.kind === 'star') {
        const rep = starImpression(desc);
        if (rep) { img.src = rep.image; cap.textContent = rep.caption; fig.hidden = false; }
      } else if (desc.variant) {
        const label = { sat_station: 'space station', sat_telescope: 'space telescope', sat_comms: 'communications satellite', sat_gps: 'navigation satellite', sat_weather: 'Earth-observation satellite', sat_starlink: 'flat-panel broadband satellite', sat_cubesat: 'cubesat', sat_rocketbody: 'spent rocket stage', ast_rubble: 'rubble-pile asteroid', ast_elongated: 'elongated asteroid', ast_cratered: 'cratered asteroid', ast_irregular: 'irregular asteroid', ast_metallic: 'metallic asteroid', comet_nucleus: 'comet nucleus' }[desc.variant] || desc.variant;
        img.src = `${import.meta.env.BASE_URL}models/${desc.variant}.jpg`;
        cap.textContent = FAMILY_LABELS[desc.variant] ? `Rendering based on the ${FAMILY_LABELS[desc.variant]} design (AI-generated from the published spacecraft design; not a photograph of this unit). The 3D model you see up close is built from it.` : `Representative rendering of a ${label} (AI-generated; no photograph of this specific object exists). The same generic shape is used for its 3D model.`;
        fig.hidden = false;
      }
    }
    if (!w && ['star', 'exoplanet', 'dso', 'asteroid', 'comet', 'satellite', 'blackhole', 'quasar'].includes(desc.kind)) {
      const text = await aiSummary(desc);
      if (token !== this._mediaToken || !text) return;
      wiki.innerHTML = `<span class="tag">AI-written summary from the catalogue values above (may simplify; verify before citing)</span>${escapeHtml(text)}`;
      wiki.hidden = false;
    }
  }
  updateHUD(ctx) {
    const u = this.u, rig = u.rig;
    $('t-date').textContent = u.time.dateLabel();
    $('t-speed').textContent = u.time.speedLabel();
    $('t-pause').classList.toggle('active', u.time.paused);
    $('btn-mode').textContent = rig.mode === 'orbit' ? 'orbit' : 'free flight';
    $('btn-mode').classList.toggle('active', rig.mode === 'free');
    const f = rig.focus;
    $('hud-focus').textContent = f ? (rig.mode === 'orbit' ? `around ${f.name}` : `near ${f.name}`) : '';
    const dSun = Math.hypot(rig.pos[0], rig.pos[1], rig.pos[2]);
    let distText = f ? `${fmtDist(Math.max(0, rig.distanceTo(rig.focusPos) - f.radius))} above surface` : '';
    distText += ` · ${fmtDist(dSun)} from Sun`;
    $('hud-dist').textContent = distText;
    $('hud-speed').textContent = rig.mode === 'free' ? `speed ${fmtDist(rig.flySpeed)}/s` : '';
    // scale bar: km per pixel at the focus distance (or 1e4 km if none)
    const ref = f ? rig.distanceTo(rig.focusPos) : dSun;
    const kmPerPx = ref / ctx.pxPerRad;
    const target = kmPerPx * 140;
    const units = [[1, 'km'], [KM_PER_AU, 'AU'], [KM_PER_LY, 'ly'], [KM_PER_LY * 1e3, 'kly'], [KM_PER_LY * 1e6, 'Mly'], [KM_PER_LY * 1e9, 'Gly']];
    let unit = units[0]; for (const uu of units) if (target > uu[0] * 0.5) unit = uu;
    const val = target / unit[0]; const pow = Math.pow(10, Math.floor(Math.log10(val)));
    const nice = [1, 2, 5, 10].map(m => m * pow).reduce((a, b) => Math.abs(b - val) < Math.abs(a - val) ? b : a);
    const px = nice * unit[0] / kmPerPx;
    $('scale-line').style.width = `${px.toFixed(0)}px`;
    $('scale-text').textContent = `${nice >= 1000 ? nice.toExponential(0).replace('e+', 'e') : nice} ${unit[1]}`;
  }
}
function escapeHtml(s) { return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
