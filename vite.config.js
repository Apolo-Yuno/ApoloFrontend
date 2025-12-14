import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        open: true,
        proxy: {
            '/api/text': {
                target: 'http://apolobackend-production.up.railway.app',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/text/, '')
            },
            '/api/audio': {
                target: 'http://apolobackend-production.up.railway.app',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/audio/, '')
            }
        }
    }
});
