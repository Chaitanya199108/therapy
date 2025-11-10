import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/therapy', // ✅ must exactly match your repo name
  
  }
)
