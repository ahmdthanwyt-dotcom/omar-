import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/1-/',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: ["front.generationoffaith.org"],
    cors: true
  }
})
