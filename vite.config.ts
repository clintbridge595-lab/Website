import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

function resolveBasePath(): string {
  if (process.env.VITE_BASE_PATH) {
    const raw = process.env.VITE_BASE_PATH.trim();
    return raw.endsWith('/') ? raw : `${raw}/`;
  }
  if (process.env.GITHUB_ACTIONS === 'true' && process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    if (repoName) {
      return `/${repoName}/`;
    }
  }
  return '/';
}

export default defineConfig(() => {
  return {
    base: resolveBasePath(),
    plugins: [
      react(),
      tailwindcss(),
      // Copies src/assets into dist/ and prepares GitHub Pages SPA fallback + clean asset bundle.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }

          // Remove unused screen-recording .mp4 files from production dist output
          const distAistudioDir = path.resolve(distDir, 'assets/aistudio');
          if (fs.existsSync(distAistudioDir)) {
            for (const entry of fs.readdirSync(distAistudioDir)) {
              if (entry.toLowerCase().endsWith('.mp4')) {
                fs.rmSync(path.join(distAistudioDir, entry), {force: true});
              }
            }
          }

          // Create 404.html fallback for GitHub Pages SPA routing
          const indexHtml = path.join(distDir, 'index.html');
          const notFoundHtml = path.join(distDir, '404.html');
          if (fs.existsSync(indexHtml)) {
            fs.copyFileSync(indexHtml, notFoundHtml);
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
