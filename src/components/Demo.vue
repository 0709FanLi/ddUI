<template>
  <div class="demo">
    <h2>
      {{ component?.__sourceCodeTitle }}
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from '../lib/button/index.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'

const { Prism } = window as any

const props = defineProps({
  component: Object
})

const html = computed(() => {
  // eslint-disable-next-line no-underscore-dangle
  return Prism.highlight(props?.component?.__sourceCode, Prism.languages.html, 'html')
})

const codeVisible = ref(false)
const showCode = () => {
  codeVisible.value = true
}
const hideCode = () => {
  codeVisible.value = false
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0px 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    justify-content: space-between;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
