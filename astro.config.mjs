import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://linde.demo',
  integrations: [sitemap()],
  output: 'static',
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
    },
    server: {
      fs: {
        strict: true,
      },
    },
  },
});
