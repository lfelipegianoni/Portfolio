import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  server: {
    open: '/portfolio/', // <-- Altere de 'true' para o caminho base
  },
})