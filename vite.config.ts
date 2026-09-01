import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The site is served from https://keean07.github.io/Portfolio/
// so every asset/route must be prefixed with that base path.
// Override with `VITE_BASE=/ npm run build` for a root deployment (custom domain).
const base = process.env.VITE_BASE ?? '/Portfolio/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    assetsDir: 'assets',
  },
})
