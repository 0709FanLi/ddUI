import path from 'path'
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

const vitePluginVue = {
  name: 'demo',
  transform(code, id) {
    if (!/\/src\/views\/doc\/.*\.demo\.vue/.test(id) || !/vue&type=demo/.test(id)) {
      return ''
    }
    const pathUrl = `.${id.match(/\/src\/views\/doc\/.*\.demo\.vue/)[0]}`
    const file = fs.readFileSync(pathUrl).toString()
    const parsed: any = baseParse(file).children.find((n: any) => n.tag === 'demo')
    const title = parsed.children[0].content
    const main = file.split(parsed.loc.source).join('').trim()

    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim()
  }
}

export default vitePluginVue
