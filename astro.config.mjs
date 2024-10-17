import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jan.homes',
  integrations: [tailwind()],
  base: '/saturn/',
});
