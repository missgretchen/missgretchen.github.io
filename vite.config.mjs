import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.join(path.resolve(), 'src/components'),
      '@assets': path.join(path.resolve(), 'src/assets')
    }
  }
})
