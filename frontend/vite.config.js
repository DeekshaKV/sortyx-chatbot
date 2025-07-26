import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Set current folder as root
  publicDir: 'public', // Ensures it loads from public/
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
