import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Multi-page app: include every HTML page so they all get deployed
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        login: resolve(import.meta.dirname, 'login.html'),
        attendence: resolve(import.meta.dirname, 'attendence.html'),
        lab2: resolve(import.meta.dirname, 'lab2/index.html'),
        lab3: resolve(import.meta.dirname, 'lab3/index.html'),
      },
    },
  },
})
