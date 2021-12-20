import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  extensions: ['.js', '.vue', '.json'],
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src')
    },
  },
  plugins: [vue()],
  server: {
    host: true,
    port: 9000,
  },
})
