<template>
  <h1>Button 示例</h1>
  <div class="demo-wrapper">
    <Demo :component="ButtonDemo1" />
    <Demo :component="ButtonDemo2" />
    <Demo :component="ButtonDemo3" />
    <Demo :component="ButtonDemo4" />
    <Demo :component="ButtonDemo5" />
    <Demo :component="ButtonDemo6" />
    <Doc title="属性" type="prop" :body="propDoc" />
    <Doc title="插槽" type="slot" :body="slotDoc" />
  </div>
</template>

<script setup lang="ts">
import Demo from '@/components/Demo.vue'
import ButtonDemo1 from './ButtonDemo1.preview.vue'
import ButtonDemo2 from './ButtonDemo2.preview.vue'
import ButtonDemo3 from './ButtonDemo3.preview.vue'
import ButtonDemo4 from './ButtonDemo4.preview.vue'
import ButtonDemo5 from './ButtonDemo5.preview.vue'
import ButtonDemo6 from './ButtonDemo6.preview.vue'
import Doc from '@/components/Doc.vue'

const propDoc = [
  ['theme', '类型', 'string', 'default / primary / info / success / warning / error', 'default'],
  ['dashed', '是否虚线为按钮', 'boolean', '-', 'false'],
  ['size', '大小', 'string', 'small / default / large', 'default'],
  ['round', '是否为圆角按钮', 'boolean', '-', 'false'],
  ['circle', '是否为圆形按钮', 'boolean', '-', 'false'],
  ['disabled', '是否禁用', 'boolean', '-', 'fasle'],
  ['loading', '是否显示加载中', 'boolean', '-', 'fasle'],
  ['icon-placement', '按钮中图标的位置', 'string', 'left / right', 'left']
]
const slotDoc = [
  ['default', '自定义默认内容'],
  ['icon', '按钮的图标']
]
</script>

<style lang="scss">
.jw-button + .jw-button {
  margin-left: 8px;
  margin-top: 8px;
}
</style>
