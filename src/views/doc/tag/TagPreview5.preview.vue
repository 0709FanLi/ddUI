<preview>动态编辑标签</preview>
<template>
  <Tag v-for="tag in dynamicTags" :key="tag" closeable type="success" @close="handleClose(tag)">
    {{ tag }}
  </Tag>
  <jw-input
    v-if="inputVisible"
    :ref="(e:any) => (InputRef = e)"
    v-model="inputValue"
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm"
    size="small"
    style="width: 180px"
  />
  <Button v-else size="small" @click="showInput"> + New Tag </Button>
</template>
<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue'
import Tag from '@/lib/tag/index.vue'
import Button from '@/lib/button/index.vue'

const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const inputVisible = ref(false)
const inputValue = ref('')
const InputRef = ref()
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    console.log(InputRef.value!.focus())
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
</script>
