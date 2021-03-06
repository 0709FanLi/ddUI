import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vitePluginVue from './plugins/vue-custom-blocks-plugin'

const mdPlugin = require('vite-plugin-markdown')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdPlugin.plugin({
      mode: ['html']
    }),
    vitePluginVue
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.mjs', '.ts', '.js', '.jsx', '.tsx', '.json', '.vue']
  }
})
