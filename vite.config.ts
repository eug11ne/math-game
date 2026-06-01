import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: resolve(__dirname, 'static'),
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});