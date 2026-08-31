import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://linde.demo',
  integrations: [sitemap()],
  output: 'static',
  vite: {
    build: {
      // MapLibre se carga de forma diferida sólo en /proyectos/.
      chunkSizeWarningLimit: 1000,
    },
    ssr: {
      noExternal: ['maplibre-gl'],
    },
    server: {
      fs: {
        strict: true,
      },
    },
  },
});
