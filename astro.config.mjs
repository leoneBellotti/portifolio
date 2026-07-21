// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import { SITE_URL } from './src/site.config.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [vue(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});