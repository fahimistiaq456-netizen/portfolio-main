import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The single .env file lives at the repo root and is shared with the API server
const envDir = fileURLToPath(new URL('..', import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, envDir, '')
  const proxyTarget = env.VITE_API_PROXY_TARGET || 'http://localhost:5001'

  return {
    envDir,
    plugins: [react(), tailwindcss()],
    server: {
      port: 5173,
      strictPort: true,
      proxy: {
        '/api': {
          target: proxyTarget,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    build: {
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Split Three.js into its own vendor chunk so the main JS stays small
            // and the browser can cache the 3D library independently
            if (id.includes('node_modules/three') || id.includes('node_modules/@react-three')) {
              return 'three-vendor'
            }
          },
        },
      },
    },
  }
})
