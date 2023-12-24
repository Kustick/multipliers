import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/multipliers/',
  plugins: [
    react(),
    Inspect()
  ],
})
