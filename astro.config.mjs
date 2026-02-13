// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeAffiliateCta } from './src/plugins/rehype-affiliate-cta.mjs';
import { affiliatePlacements } from './src/data/affiliatePlacements.mjs';

export default defineConfig({
  site: 'https://fuyouhin-erabi.com',
  integrations: [sitemap()],
  output: 'static',
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
    rehypePlugins: [
      [rehypeAffiliateCta, { placements: affiliatePlacements }],
    ],
  },
});
