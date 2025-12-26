import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // For danielvm28.github.io (root deployment)
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
