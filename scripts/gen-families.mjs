// Accurate-design 3D models for the satellite families that dominate the catalogue.
// FLUX (image, ~$0.003) -> Hunyuan3D v2 (image-to-3D, ~$0.10) via fal.ai. Budget guard: stops at MAX_USD.
import fs from 'node:fs';
const KEY = fs.readFileSync('.env.local', 'utf8').match(/VITE_FAL_KEY=(.+)/)[1].trim();
const H = { Authorization: 'Key ' + KEY, 'Content-Type': 'application/json' };
const MAX_USD = 20, COST_IMG = 0.003, COST_3D = 0.10;
const STYLE = ', studio product render, isolated on plain white background, centered, three-quarter view from slightly above, even lighting, sharp detail, no text, no watermark, no people, no ground shadow';
// Descriptions follow the real spacecraft designs (public spec sheets / photographs).
const FAMILIES = {
  fam_starlink_v1: 'the SpaceX Starlink v1.5 satellite: a flat rectangular slab bus about 2.8 by 1.4 m, dark grey with four phased-array antenna panels on the Earth-facing side and a krypton ion thruster at the back, with a single long rectangular solar array (about 8 m) extending from one short edge, folded flat when stowed, here fully deployed',
  fam_starlink_v2: 'the SpaceX Starlink v2 mini satellite: a flat rectangular slab bus about 4 by 2.7 m, dark grey with phased-array antenna panels on one face, and two very long rectangular solar arrays extending symmetrically from opposite short edges (total span about 30 m), argon thruster at the rear',
  fam_oneweb: 'a OneWeb broadband satellite: a compact boxy bus about 1 m across, white and gold insulation, two flat solar panels on short booms deployed on either side, two Ku-band flat antennas and a Ka-band gimballed antenna on the Earth-facing side, small ion thruster',
  fam_dove: 'a Planet Labs Dove (Flock) 3U cubesat: a 10 by 10 by 30 cm box with a telescope aperture at one end, two long flat solar panel wings deployed from the sides forming a wide T shape, dark blue solar cells',
  fam_lemur: 'a Spire Lemur-2 3U cubesat: a 10 by 10 by 30 cm box with four deployable solar panels unfolded like petals, GPS radio-occultation antennas, dark blue cells',
  fam_iridium: 'an Iridium NEXT satellite: a trapezoidal box bus with a large flat square L-band phased-array main mission antenna tilted on the Earth-facing side, two rectangular solar arrays on booms extending sideways (about 9 m span), gold insulation, silver antennas',
  fam_glonass: 'a GLONASS-K navigation satellite: an unpressurized rectangular bus with gold insulation, two long solar array wings each made of several panels (about 7 m span), an L-band antenna array of helical elements facing Earth',
  fam_beidou: 'a BeiDou-3 MEO navigation satellite: a rectangular gold-insulated bus with two solar array wings of three panels each (about 12 m span), a phased-array navigation antenna and laser retroreflector on the Earth-facing side',
  fam_galileo: 'a Galileo FOC navigation satellite: a rectangular bus 2.7 by 1.2 by 1.1 m with gold and silver insulation, two solar wings of two panels each (14.7 m span), a hexagonal L-band navigation antenna array and a small search-and-rescue antenna on the Earth-facing face',
  fam_gps: 'a GPS Block III navigation satellite: a boxy silver and gold bus with two solar wings of three panels each, and an array of twelve conical L-band helix antennas arranged in a circle on the Earth-facing side',
  fam_globalstar: 'a Globalstar second-generation satellite: a trapezoidal bus with two large rectangular solar arrays on booms and flat phased-array antenna panels on the Earth-facing side, gold insulation',
  fam_geo_comms: 'a large geostationary communications satellite like Intelsat or SES: a big rectangular bus wrapped in gold insulation, two extremely long solar array wings of five panels each (about 40 m span), three large white parabolic reflector dishes and several smaller horn antennas on the Earth face',
  fam_kineis: 'a Kineis IoT nanosatellite: a 16U cubesat about 30 by 30 by 20 cm with two deployable solar panel wings, small UHF antennas, dark blue cells',
  fam_eo_china: 'a Chinese Earth observation satellite like Gaofen or Yaogan: a rectangular bus with a large cylindrical optical telescope tube along its axis and two solar array wings, gold and grey insulation',
  fam_o3b: 'an O3b mPOWER MEO communications satellite: a rectangular bus with two solar wings of three panels each (about 10 m span), flat digital beamforming antenna panels on the Earth-facing side, silver and gold insulation',
  fam_gonets: 'a Gonets-M small communications satellite: a short cylindrical body covered in body-mounted solar cells with a hemispherical antenna dome and several whip antennas, gold-grey finish',
  fam_orbcomm: 'an Orbcomm OG2 satellite: a flat rectangular bus with a single large solar array deployed from one side and long VHF antenna booms, dark panels and silver insulation',
  fam_tianmu: 'a small Chinese meteorological microsatellite like Tianmu-1: a compact box bus about 1 m with two small solar panels and GNSS occultation antennas, gold and dark grey',
};
const spend = fs.existsSync('raw/fal_spend.json') ? JSON.parse(fs.readFileSync('raw/fal_spend.json', 'utf8')) : { usd: 0 };
fs.mkdirSync('public/models', { recursive: true });
for (const [name, desc] of Object.entries(FAMILIES)) {
  const file = `public/models/${name}.glb`;
  if (fs.existsSync(file)) continue;
  if (spend.usd + COST_IMG + COST_3D > MAX_USD) { console.log('budget reached', spend.usd); break; }
  try {
    const img = await (await fetch('https://fal.run/fal-ai/flux/schnell', { method: 'POST', headers: H, body: JSON.stringify({ prompt: 'Photorealistic rendering of ' + desc + STYLE, image_size: 'square_hd', num_images: 1, num_inference_steps: 4, enable_safety_checker: false }) })).json();
    spend.usd += COST_IMG;
    const url = img.images?.[0]?.url; if (!url) { console.log(name, 'image failed'); continue; }
    fs.writeFileSync(`public/models/${name}.jpg`, Buffer.from(await (await fetch(url)).arrayBuffer()));
    // queue API: submit, poll, fetch (the synchronous endpoint can hang on long generations)
    const sub = await (await fetch('https://queue.fal.run/fal-ai/hunyuan3d/v2', { method: 'POST', headers: H, body: JSON.stringify({ input_image_url: url, textured_mesh: true, octree_resolution: 192 }) })).json();
    if (!sub.status_url) { console.log(name, 'submit failed', JSON.stringify(sub).slice(0, 200)); continue; }
    let st; for (let i = 0; i < 90; i++) { await new Promise(r => setTimeout(r, 5000)); st = await (await fetch(sub.status_url, { headers: H })).json(); if (st.status === 'COMPLETED' || st.status === 'FAILED') break; }
    if (!st || st.status !== 'COMPLETED') { console.log(name, '3d status', st && st.status); continue; }
    const m = await (await fetch(sub.response_url, { headers: H })).json();
    spend.usd += COST_3D;
    const glb = m.model_mesh?.url; if (!glb) { console.log(name, '3d failed', JSON.stringify(m).slice(0, 200)); continue; }
    const buf = Buffer.from(await (await fetch(glb)).arrayBuffer());
    fs.writeFileSync(file, buf);
    console.log(name, (buf.length / 1e6).toFixed(2) + ' MB', 'spent ~$' + spend.usd.toFixed(2));
  } catch (e) { console.log(name, 'error', e.message); }
  fs.writeFileSync('raw/fal_spend.json', JSON.stringify(spend));
}
console.log('done, estimated spend $' + spend.usd.toFixed(2));
