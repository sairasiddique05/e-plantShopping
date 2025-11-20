import { defineConfig } from 'vite'    // ✅ make sure this line exists
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ensures paths are relative
})