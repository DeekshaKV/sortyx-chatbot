import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // 👈 makes current directory root
  publicDir: 'public', // 👈 tells Vite where index.html is
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
