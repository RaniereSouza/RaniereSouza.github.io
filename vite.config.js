import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vuePlugin()],
  server: {
    host: '0.0.0.0',
  },
});
