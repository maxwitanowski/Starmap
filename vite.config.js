import { defineConfig } from 'vite';

// base must match the GitHub Pages project path (https://<user>.github.io/Starmap/).
// Override with BASE=/ for a root deploy (custom domain, Netlify, etc).
//
// DEPLOY=1 strips the VITE_* API keys from the bundle. Vite inlines any VITE_*
// var at build time, so a normal build bakes .env.local straight into public JS
// where anyone can read it. Media.js already guards on both keys: without them
// the fal.ai artist's impressions and the OpenRouter summary fallback switch
// off, and Wikipedia photos/summaries (and the whole map) are unaffected.
const deploy = !!process.env.DEPLOY;

export default defineConfig({
  base: process.env.BASE ?? '/Starmap/',
  server: { port: 5174, host: true },
  preview: { port: 5174, host: true },
  build: { chunkSizeWarningLimit: 1500 },
  ...(deploy && {
    define: {
      'import.meta.env.VITE_FAL_KEY': 'undefined',
      'import.meta.env.VITE_OPENROUTER_KEY': 'undefined',
    },
  }),
});
