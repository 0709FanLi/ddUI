<template>
  <h1>Switch 示例</h1>
  <Demo :component="SwitchDemo1" />
  <Demo :component="SwitchDemo2" />
  <Demo :component="SwitchDemo3" />
  <Doc title="属性" type="prop" :body="propDoc" />
</template>

<script setup lang="ts">
import Demo from '@/components/Demo.vue'
import SwitchDemo1 from './SwitchDemo1.preview.vue'
import SwitchDemo2 from './SwitchDemo2.preview.vue'
import SwitchDemo3 from './SwitchDemo3.preview.vue'
import Doc from '@/components/Doc.vue'

const propDoc = [
  ['v-model', '绑定值', 'boolean', '-', 'false'],
  ['active-color', '在开启状态时的背景颜色', 'string', '-', '#18a058'],
  ['inactive-color', '在关闭状态时的背景颜色', 'string', '-', '#dbdbdb'],
  ['disabled', '是否禁用', 'boolean', '-', 'false'],
  ['size', '大小', 'string', 'small / default / large', 'default']
]
</script>

<style lang="scss">
.dd-switch + .dd-switch {
  margin-left: 8px;
  margin-top: 8px;
}
</style>
