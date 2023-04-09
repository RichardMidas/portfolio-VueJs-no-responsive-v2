import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/":`${import.meta.url}/src/`
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@import "./src/scss/typed.scss";`
      }
    }
  },
  plugins: [vue()],
})
