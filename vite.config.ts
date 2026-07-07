import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// SPA fallback: serve index.html for all non-asset routes in preview mode
function spaFallback(): Plugin {
  return {
    name: 'spa-fallback',
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url ?? '/';
        // Only rewrite requests that don't look like static files
        if (!url.includes('.') && !url.startsWith('/@')) {
          req.url = '/';
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    spaFallback(),
  ],
  // Ensure dev server also handles SPA routing
  appType: 'spa',
});
