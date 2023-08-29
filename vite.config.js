import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: "/aimee-react-portfolio",
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})