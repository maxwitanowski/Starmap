// Fetch helpers for the packed binary + JSON produced by scripts/build-data.mjs
const TYPES = { Float32Array, Float64Array, Uint32Array, Uint16Array, Uint8Array, Int32Array, Int16Array };

export async function loadBinary(url, onProgress) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  const buf = await readWithProgress(res, onProgress);
  const view = new DataView(buf);
  const hlen = view.getUint32(0, true);
  const header = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, hlen)));
  const base = 4 + hlen + ((8 - ((4 + hlen) % 8)) % 8);
  const out = {};
  for (const seg of header.segments) out[seg.name] = new TYPES[seg.type](buf, base + seg.offset, seg.length);
  return out;
}

export async function loadJSON(url, onProgress) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  const buf = await readWithProgress(res, onProgress);
  return JSON.parse(new TextDecoder().decode(buf));
}

export async function loadText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return res.text();
}

async function readWithProgress(res, onProgress) {
  const total = +res.headers.get('content-length') || 0;
  if (!res.body || !onProgress) return res.arrayBuffer();
  const reader = res.body.getReader();
  const chunks = []; let got = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value); got += value.length;
    onProgress(got, total);
  }
  const out = new Uint8Array(got); let o = 0;
  for (const c of chunks) { out.set(c, o); o += c.length; }
  return out.buffer;
}
