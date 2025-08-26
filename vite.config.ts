import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use relative base for GitHub Pages compatibility without knowing the repo name
  base: './'
});

