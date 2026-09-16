import { defineConfig } from 'vite';

// base must match the GitHub Pages project path (https://<user>.github.io/Starmap/).
// Override with BASE=/ for a root deploy (custom domain, Netlify, etc).
export default defineConfig({
  base: process.env.BASE ?? '/Starmap/',
  server: { port: 5174, host: true },
  preview: { port: 5174, host: true },
  build: { chunkSizeWarningLimit: 1500 },
});
