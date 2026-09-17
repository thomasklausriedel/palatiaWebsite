import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imagetools()],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "/src/styles/variables" as *;
          @use "/src/styles/utils" as *;
          `,
      },
    },
  },
})