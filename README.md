# Starmap

A to-scale, navigable 3D map of the universe in the browser, built from real catalogues.
Every object sits at its measured position and is drawn at its real physical size, from the
109-metre ISS to galaxy clusters 300 million light-years away. Click anything to read about it.

## Run it

```bash
npm install
npm run dev        # http://127.0.0.1:5174
```

`npm run data` rebuilds `public/data/*` from the raw catalogues in `raw/` (re-download them with the
curl commands in `scripts/` history if needed); `npm run dss` fetches the deep-sky photographs.

## Deploy to GitHub Pages

The published site is the **built** app on the `gh-pages` branch — never the repo root,
which holds Vite's dev `index.html` and untranspiled source.

```bash
npm run build:pages          # DEPLOY=1: sets base /Starmap/ and strips the VITE_* keys
cd dist && git init -b gh-pages && git add -A && git commit -m Deploy
git push -f https://github.com/maxwitanowski/Starmap.git gh-pages
```

Then set **Settings → Pages → Source** to `gh-pages` / `root` (once).

Two things to keep in mind:

- **Never deploy a plain `npm run build`.** Vite inlines every `VITE_*` variable at build
  time, so an ordinary build embeds the `.env.local` keys in public JavaScript. `build:pages`
  defines them as `undefined`; the deployed site simply loses the exoplanet artist's
  impressions and the AI summary fallback.
- `base` must match the repo path. For a custom domain or root deploy, build with `BASE=/`.

## What is in it

| Layer | Count | Source |
| --- | --- | --- |
| Stars | 109,400 (+3,858 exoplanet hosts) | HYG v4.1 (Hipparcos / Yale BSC / Gliese). Members of known open clusters are placed at the cluster's Gaia distance (their own Hipparcos parallaxes stretched every cluster into a spear pointing at the Sun) — the info panel says when this was done |
| Deep star field | 1,124,007 | Gaia DR3 (G < 11, parallax S/N > 5), duplicates of HYG removed; cluster members snapped as above. "Show every star" ignores the magnitude limit |
| Exoplanets | 6,360 confirmed + 7,034 candidates | NASA Exoplanet Archive `pscomppars`; TESS TOI and Kepler KOI candidates (labelled as candidates); J1407 b drawn with its ring system |
| Black holes | 368 | BlackCAT X-ray transients (Corral-Santana+ 2016, live table) + persistent/dormant systems (Cyg X-1, Gaia BH1–3, LMC X-1/X-3, M33 X-7…) + two intermediate-mass candidates + 281 supermassive black holes with dynamical masses (van den Bosch 2016) and famous extremes (M87*, Sgr A*, TON 618, Holm 15A, OJ 287…). Drawn as markers; up close the focused one shows an event horizon of the measured Schwarzschild radius, photon ring and accretion disc |
| Quasars & active galaxies | 955,153 | Million Quasars catalogue v8 (Flesch 2023) — every object with a redshift, placed at its comoving distance (flat ΛCDM, H₀ = 70, Ωm = 0.3): a to-scale map of the observable universe to z ≈ 7 ("Observable universe" quick-travel) |
| Nebulae, clusters, galaxies | 13,810 | OpenNGC (NGC/IC + addendum), Cantat-Gaudin 2020 Gaia open clusters, Baumgardt 2019 globulars, curated Local Group / landmark table |
| Deep-sky photographs | 865 | DSS2 colour cutouts via CDS hips2fits (PanSTARRS DR1 for planetary nebulae) |
| 3D nebula & cluster volumes | ~2,300 | Photographed objects: particles sampled from the photographs (PanSTARRS / Mellinger / DSS2), with resolved stars detected as point sources. Others: schematic volumes from catalogued size, axis ratio, position angle and type. Line-of-sight depth is always a model (shell / slab / sphere) |
| Galaxies (large-scale structure) | 43,463 | 2MASS Redshift Survey (Huchra+ 2012); each sprite shaped by its catalogued type and axis ratio (position angle is not published, so it is random); the 7,957 that duplicate NGC/IC galaxies are hidden so each galaxy has one position and one label; any galaxy gets an on-demand particle model when it fills more than 40 px |
| Planets, dwarf planets, moons | 8 + 9 + 39 | JPL Keplerian elements (Standish), JPL Horizons osculating elements, ELP lunar theory, IAU rotation elements, NASA fact sheets |
| Asteroids & TNOs | 35,962 | JPL Small-Body Database |
| Comets | 600 | JPL Small-Body Database |
| Satellites | 14,465 | CelesTrak GP element sets, propagated live with SGP4 (refreshes from CelesTrak when reachable) |
| Deep-space probes | 17 | JPL Horizons state vectors (2026–2028) |
| Stars in other galaxies | 107,582 | Gaia DR3 members of the Large and Small Magellanic Clouds (proper-motion selected); individual depths modelled |
| Close-range 3D models | 14 generic + 18 family | Generic satellite classes, asteroid shapes and a comet nucleus (FLUX + TRELLIS); design-accurate models for the large constellations — Starlink v1.5/v2 mini, OneWeb, Iridium NEXT, GPS III, Galileo, GLONASS, BeiDou, Globalstar, Planet Dove, Spire Lemur, Kineis, O3b, Gonets, Orbcomm, GEO comms buses, Chinese EO — generated with FLUX + Hunyuan3D v2 from their published designs, scaled to real dimensions |
| Exoplanet appearance | 6,360 | No exoplanet has a surface map; each is rendered from its measured radius, density, equilibrium temperature and host-star colour (rocky / temperate / icy / Neptune-like / gas giant / hot Jupiter), lit by its own star |
| Photos & summaries | on click | Wikipedia REST API (real photographs, article extracts); AI artist's impressions (fal.ai) only for exoplanets and star types with no photograph, always labelled |
| Constellations | 88 | Stellarium modern sky culture, drawn between the real 3D star positions |
| Nearby galaxies | 64 particle models | Size, axis ratio, PA, type and distance from the catalogue; particles are a model, faded in as you approach |
| Milky Way | model | Exponential disk / bar / 4 log-spiral arms in the real galactic frame (Sun at 8,178 pc) |

Planet textures: Solar System Scope (CC BY 4.0, 8k for the inner planets, Moon, Jupiter, Saturn); moon and dwarf-planet maps from NASA/USGS mission mosaics on Wikimedia Commons (Europa, Ganymede, Callisto, Titan, Enceladus, Tethys, Dione, Rhea, Iapetus, Mimas, Titania, Umbriel, Triton, Pluto, Charon, Ceres, Vesta).

## API keys

Copy `.env.local` (gitignored) with `VITE_FAL_KEY` and `VITE_OPENROUTER_KEY` to enable AI artist's impressions for exoplanets and short AI-written summaries for objects without a Wikipedia article. Anything prefixed `VITE_` is bundled into the browser, so never deploy those keys publicly. `npm run` scripts `scripts/gen-star-impressions.mjs` and `scripts/gen-models.mjs` regenerate the impressions and 3D model variants. Star temperatures, luminosities and radii are
estimated from B−V colour and absolute magnitude; the info panel says which values are measured
and which are derived.

## How the scale works

World coordinates are heliocentric ICRF/J2000 in kilometres, kept in double precision on the CPU.
The camera always sits at the origin; every object is re-expressed relative to it each frame
(floating origin), and a logarithmic depth buffer covers 1 m to 10²² km in one pass. Asteroid
positions are solved on the GPU from their orbital elements, so time can run at up to years per
second.

## Controls

Drag to orbit, scroll to zoom, double-click to fly somewhere, `/` to search. Press `F` (or any of
`WASD`) for free flight; speed scales with your distance to the nearest surface. `.` pauses time,
`[` `]` change its speed, `H` shows help.
