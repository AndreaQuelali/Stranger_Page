import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    icon(),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});