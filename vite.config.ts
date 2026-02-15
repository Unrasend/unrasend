import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/unrasend/',
  build: {
    outDir: 'docs',
  },
  plugins: [
    react({ tsDecorators: true })
  ],
})
