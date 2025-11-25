// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import typography from '@tailwindcss/typography';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx()],
  prefetch: {
    prefetchAll: true, // 自动预加载视口内的链接
    defaultStrategy: 'hover', // 鼠标放上去就开始加载
  },
});