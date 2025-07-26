import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // ✅ THIS LINE IS CRUCIAL
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
