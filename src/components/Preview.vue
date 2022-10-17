<template>
  <div class="preview-container">
    <h2>
      {{ component.__sourceCodeTitle }}
      <jw-button @click="hideCode" v-if="codeVisible">隐藏代码</jw-button>
      <jw-button @click="showCode" v-else>查看代码</jw-button>
    </h2>
    <div class="preview-container-component">
      <component :is="component" />
    </div>

    <div class="preview-container-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'prismjs'
import 'prismjs/themes/prism.css'
import { computed, ref } from 'vue'

const { Prism } = window as any
const props = defineProps({
  component: Object
})

const html = computed(() => {
  // eslint-disable-next-line no-underscore-dangle
  return Prism.highlight((props as any).component.__sourceCode, Prism.languages.html, 'html')
})
const codeVisible = ref(false)
// eslint-disable-next-line no-return-assign
const showCode = () => (codeVisible.value = true)
// eslint-disable-next-line no-return-assign
const hideCode = () => (codeVisible.value = false)
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.preview-container {
  border: 1px solid $border-color;
  margin: 32px 0px 32px;
  min-width: 300px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-component {
    padding: 16px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
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
      background-color: rgb(250, 250, 250);
    }
  }
}
</style>
