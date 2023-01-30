import DdSwitch from './switch/index.vue'
import DdButton from './button/index.vue'
import DdTag from './tag/index.vue'
import DdAvatar from './avatar/index.vue'
import DdEllipsis from './ellipsis/index.vue'

function registerDdUi(): void {
  console.log('DdButton-------', DdButton)
}

export { DdSwitch, DdButton, DdTag, DdAvatar, DdEllipsis }
export default registerDdUi
