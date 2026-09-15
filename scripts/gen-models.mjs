// Generates 3D model variants (GLB) for satellite classes and asteroid shapes: FLUX image -> TRELLIS image-to-3D, via fal.ai.
// These are generic representative shapes, not engineering models of specific spacecraft.
import fs from 'node:fs';
const KEY = fs.readFileSync('.env.local', 'utf8').match(/VITE_FAL_KEY=(.+)/)[1].trim();
const H = { Authorization: 'Key ' + KEY, 'Content-Type': 'application/json' };
const STYLE = ', studio product render, isolated on plain white background, centered, three-quarter view, sharp detail, no text, no watermark, no people';
const ITEMS = {
  sat_comms: 'a geostationary communications satellite: boxy gold-foil body with a large parabolic dish antenna and two long blue solar panel wings',
  sat_cubesat: 'a small cubesat: a 30 cm rectangular box covered in dark blue solar cells with a short antenna',
  sat_starlink: 'a Starlink-style flat-panel satellite: a thin flat rectangular chassis with a single large solar panel array extending from one side, silver',
  sat_gps: 'a GPS navigation satellite: cylindrical body with helical antenna array on one face and two rectangular solar panel wings',
  sat_weather: 'an Earth observation weather satellite: hexagonal body wrapped in gold and silver insulation, one large solar panel, telescope aperture, radiators',
  sat_telescope: 'a space telescope like Hubble: long silver cylinder with an open aperture door, two rectangular solar panels, high-gain antennas',
  sat_station: 'a space station module cluster: connected cylindrical white modules with a truss and large solar arrays',
  sat_rocketbody: 'a spent rocket upper stage: a plain white cylinder with an engine nozzle at one end, slightly scorched',
  ast_rubble: 'a rubble-pile asteroid: a lumpy grey-brown rock covered in boulders and regolith, roughly diamond shaped like Bennu',
  ast_elongated: 'an elongated peanut-shaped asteroid: two lobes joined by a neck, dark grey cratered rock, like Itokawa',
  ast_cratered: 'a large rounded asteroid: dark grey rock heavily cratered with one giant impact basin, like Vesta',
  ast_irregular: 'an irregular potato-shaped asteroid: grey-brown rock with grooves and craters, like Eros',
  ast_metallic: 'a metallic asteroid: irregular dull silver-grey rock with smooth faces and pits, like Psyche',
  comet_nucleus: 'a comet nucleus: a dark bilobed dusty body with smooth plains and cliffs, like 67P Churyumov-Gerasimenko, jets of gas subtle',
};
for (const [name, desc] of Object.entries(ITEMS)) {
  const file = `public/models/${name}.glb`;
  if (fs.existsSync(file)) continue;
  try {
    const img = await (await fetch('https://fal.run/fal-ai/flux/schnell', { method: 'POST', headers: H, body: JSON.stringify({ prompt: desc + STYLE, image_size: 'square_hd', num_images: 1, num_inference_steps: 4, enable_safety_checker: false }) })).json();
    const url = img.images?.[0]?.url; if (!url) { console.log(name, 'image failed'); continue; }
    fs.writeFileSync(`public/models/${name}.jpg`, Buffer.from(await (await fetch(url)).arrayBuffer()));
    const m = await (await fetch('https://fal.run/fal-ai/trellis', { method: 'POST', headers: H, body: JSON.stringify({ image_url: url, texture_size: 1024, mesh_simplify: 0.95 }) })).json();
    const glb = m.model_mesh?.url; if (!glb) { console.log(name, '3d failed', JSON.stringify(m).slice(0, 200)); continue; }
    const buf = Buffer.from(await (await fetch(glb)).arrayBuffer());
    fs.writeFileSync(file, buf);
    console.log(name, (buf.length / 1e6).toFixed(2) + ' MB');
  } catch (e) { console.log(name, 'error', e.message); }
}
