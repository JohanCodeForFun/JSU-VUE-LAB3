import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    //add proxies to routes that must match same-origin policy
    proxy: {
      '/post': {
        target: 'http://localhost:8080/post',
        changeOrigin: true,
      },
      '/img': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
      },
    }
  }
})
