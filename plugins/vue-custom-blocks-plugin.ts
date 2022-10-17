import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

const vitePluginVue = {
  name: 'preview',
  transform(code, id) {
    if (!/\/src\/views\/doc\/.*\.preview\.vue/.test(id) || !/vue&type=preview/.test(id)) {
      return
    }
    const path = `.${id.match(/\/src\/views\/doc\/.*\.preview\.vue/)[0]}`
    const file = fs.readFileSync(path).toString()
    const parsed = baseParse(file).children.find((n) => n.tag === 'preview')
    const title = (parsed as any).children[0].content
    const main = file.split(parsed.loc.source).join('').trim()

    // eslint-disable-next-line consistent-return
    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim()
  }
}

export default vitePluginVue
