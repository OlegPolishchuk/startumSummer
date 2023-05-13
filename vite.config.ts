import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: '/src/pages',
      ui: '/src/shared/ui',
      constants: '/src/shared/constants',
      components: '/src/shared/components',
      router: '/src/router',
      api: '/src/api',
      services: '/src/services',
      context: '/src/context',
      hooks: '/src/hooks',
    },
  },
});
