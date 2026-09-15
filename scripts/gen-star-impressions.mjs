// Pre-generates representative artist's impressions of stellar types with fal.ai (FLUX schnell). Used only for stars
// that have no real photograph; the UI labels them as AI-generated impressions.
import fs from 'node:fs';
const KEY = fs.readFileSync('.env.local', 'utf8').match(/VITE_FAL_KEY=(.+)/)[1].trim();
const TYPES = {
  O: 'an O-type star: an intensely bright blue-violet giant star, blazing white-blue surface, violent stellar wind, hot',
  B: 'a B-type star: a brilliant blue-white star, sharp bright surface with faint blue corona',
  A: 'an A-type star: a bright white star with a slight blue tint, clean crisp photosphere',
  F: 'an F-type star: a yellow-white star, bright creamy surface with faint granulation',
  G: 'a G-type star like the Sun: a yellow-white star with visible granulation, sunspots and prominences',
  K: 'a K-type orange dwarf star: an orange star with mottled surface and small starspots',
  M: 'an M-type red dwarf star: a dim deep-red star with large dark starspots and flares',
  giant: 'a red giant star: a huge bloated orange-red star with a diffuse boiling surface and mass loss',
  supergiant: 'a red supergiant star like Betelgeuse: an enormous deep-red star with huge convection cells and shed gas',
  bluegiant: 'a blue supergiant star like Rigel: an immense blue-white star, extremely luminous with a bright halo',
  whitedwarf: 'a white dwarf: a tiny, dense, brilliant white-blue star, smooth featureless surface, faint glow',
  browndwarf: 'a brown dwarf: a dim magenta-brown substellar object with cloud bands, barely glowing',
  wolfrayet: 'a Wolf-Rayet star: a blue star shrouded in a violent expanding shell of ejected gas',
};
for (const [k, desc] of Object.entries(TYPES)) {
  const file = `public/img/stars/${k}.jpg`;
  if (fs.existsSync(file)) continue;
  const prompt = `Photorealistic astronomical visualization of ${desc}, seen from space at close range, centered, black space background with faint distant stars, no text, no watermark, scientific illustration style, high detail`;
  const r = await fetch('https://fal.run/fal-ai/flux/schnell', { method: 'POST', headers: { Authorization: 'Key ' + KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt, image_size: 'square', num_images: 1, num_inference_steps: 4, enable_safety_checker: false }) });
  const j = await r.json();
  const url = j.images?.[0]?.url; if (!url) { console.log(k, 'failed', JSON.stringify(j).slice(0, 200)); continue; }
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  fs.writeFileSync(file, buf); console.log(k, (buf.length / 1e3).toFixed(0) + 'KB');
}
