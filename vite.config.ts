import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    //exclude: ['lucide-react'],
  },
  assetsInclude: ['src/images/*.png', 'src/images/*.jpg', 'src/videos/*.mp4'],
});
