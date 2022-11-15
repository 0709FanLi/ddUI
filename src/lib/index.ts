import { App } from 'vue'
import DdSwitch from './switch/index.vue'
import DdButton from './button/index.vue'
import DdTag from './tag/index.vue'
import DdAvatar from './avatar/index.vue'
import DdEllipsis from './ellipsis/index.vue'

export { DdSwitch, DdButton, DdTag, DdAvatar, DdEllipsis }

const components = [DdSwitch, DdButton, DdTag, DdAvatar, DdEllipsis]

function registerDdUi(app: App): void {
  console.log('DdButton-------', DdButton)

  // eslint-disable-next-line array-callback-return
  components.map((component) => {
    app.component(component.name, component)
  })
}

export default registerDdUi
