// Headless Chrome harness (CDP over Node's built-in WebSocket): loads the app, logs console errors, runs scripted views, saves screenshots.
// usage: node scripts/shot.mjs [outDir] [scenario]
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const outDir = process.argv[2] || 'raw/shots';
const scenario = process.argv[3] || 'default';
fs.mkdirSync(outDir, { recursive: true });
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const port = 9333;
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${port}`, '--window-size=1600,900', ...(process.env.SWIFT ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : ['--use-angle=d3d11', '--enable-gpu-rasterization']), '--ignore-gpu-blocklist', '--no-first-run', '--no-default-browser-check', `--user-data-dir=${path.resolve('raw/chrome-profile')}`, 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));

let ws, id = 0; const pending = new Map(); const events = [];
async function connect() {
  for (let i = 0; i < 40; i++) {
    try { const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); const page = list.find(t => t.type === 'page'); if (page) { ws = new WebSocket(page.webSocketDebuggerUrl); break; } } catch { }
    await sleep(250);
  }
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } else if (m.method) events.push(m); };
}
function send(method, params = {}) { return new Promise(res => { const mid = ++id; pending.set(mid, res); ws.send(JSON.stringify({ id: mid, method, params })); }); }
async function evaluate(expr) { const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true }); if (r.result?.exceptionDetails) return 'EXC: ' + (r.result.exceptionDetails.exception?.description || r.result.exceptionDetails.text); return r.result?.result?.value; }
async function shot(name) { const r = await send('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(path.join(outDir, name + '.png'), Buffer.from(r.result.data, 'base64')); console.log('shot', name); }
function drainLogs() {
  for (const ev of events.splice(0)) {
    if (ev.method === 'Runtime.consoleAPICalled') { const t = ev.params.type; if (t === 'error' || t === 'warning') console.log(`[console.${t}]`, ev.params.args.map(a => a.value ?? a.description).join(' ').slice(0, 2500)); }
    if (ev.method === 'Runtime.exceptionThrown') console.log('[exception]', (ev.params.exceptionDetails.exception?.description || ev.params.exceptionDetails.text).slice(0, 800));
    if (ev.method === 'Log.entryAdded' && ev.params.entry.level === 'error') console.log('[log]', ev.params.entry.text.slice(0, 400));
  }
}

try {
  await connect();
  await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1600, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: process.env.URL || 'http://127.0.0.1:5174/Starmap/' });
  // wait for universe
  for (let i = 0; i < 120; i++) { const ok = await evaluate('!!window.universe'); if (ok === true) break; await sleep(500); }
  await evaluate(`document.getElementById('help')?.setAttribute('hidden','')`);
  await sleep(2500); drainLogs();
  console.log('loaded:', await evaluate('window.universe ? Object.keys(window.universe.layers).join(",") : "NO UNIVERSE"'));
  if (scenario === 'eval') {
    const steps = JSON.parse(fs.readFileSync(process.argv[4], 'utf8'));
    for (const [name, js, wait] of steps) { const r = await evaluate(js); console.log(name, '=>', typeof r === 'string' ? r.slice(0, 1500) : JSON.stringify(r)?.slice(0, 1500)); await sleep(wait || 1500); drainLogs(); if (name.startsWith('shot')) await shot(name); }
    drainLogs(); ws.close(); chrome.kill(); process.exit(0);
  }
  const scenarios = {
    default: [
      ['earth', null, 3000],
      ['iss', `universe.travel({layer:'sats', norad:25544})`, 7000],
      ['moon', `universe.travel({layer:'solar', id:'moon301'})`, 7000],
      ['saturn', `universe.travel({layer:'solar', id:'saturn'})`, 7000],
      ['solarsystem', `universe.travel({special:'solarsystem'})`, 7000],
      ['sirius', `universe.travel({layer:'stars', proper:'Sirius'})`, 8000],
      ['orion', `universe.travel({layer:'dso', name:'M42'})`, 8000],
      ['milkyway', `universe.travel({special:'milkyway'})`, 9000],
      ['universe', `universe.travel({special:'universe'})`, 9000],
    ],
  };
  for (const [name, js, wait] of scenarios[scenario] || scenarios.default) {
    if (js) { const r = await evaluate(js + '; "ok"'); if (r !== 'ok') console.log('eval', name, r); }
    await sleep(wait); drainLogs();
    const info = await evaluate(`(() => { const u = window.universe; const r = u.rig; return JSON.stringify({ mode: r.mode, focus: r.focus?.name, dist: r.dist, sel: u.selection?.name, fps: u._fps }); })()`);
    console.log(name, info);
    await shot(name);
  }
  drainLogs();
} catch (e) { console.error('harness error', e); }
finally { ws?.close(); chrome.kill(); process.exit(0); }
