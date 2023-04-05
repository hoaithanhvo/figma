import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
      output: {
        assetFileNames: 'image/[name].[ext]',
      },
    },
  },
});
