import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactSvg from 'vite-plugin-react-svg';

export default defineConfig({
  plugins: [react(), reactSvg()],
});