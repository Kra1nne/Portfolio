import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: 'https://github.com/Kra1nne/Portfolio',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
