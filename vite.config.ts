import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

const mdPlugin = require('vite-plugin-markdown')

const vitePluginVue = {
  name: 'demo',
  transform(code, id) {
    if (!/vue&type=demo/.test(id)) {
      return ''
    }
    const file = fs.readFileSync('./src/components/Button1.demo.vue').toString()
    const parsed: any = baseParse(file).children.find((n: any) => n.tag === 'demo')
    const title = parsed.children[0].content
    const main = file.split(parsed.loc.source).join('').trim()
    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim()
  }
}

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
