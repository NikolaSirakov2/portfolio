import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['framer-motion'],
          // Component chunks
          'sections': [
            './src/sections/About',
            './src/sections/Portfolio', 
            './src/sections/WorkingProcess',
            './src/sections/Pricing',
            './src/sections/Reviews',
            './src/sections/FAQ'
          ],
          'components': [
            './src/components/ui/sparkles',
            './src/components/ui/animated-review-card',
            './src/components/ui/timeline-animation'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
  },
})