<preview>图片加载失败的回滚行为</preview>
<template>
  <Avator src="empty" size="large" @error="handleError">
    <img src="@/assets/image/avator.png" alt="" />
  </Avator>
</template>
<script setup lang="ts">
import Avator from '@/lib/avatar/index.vue'

const handleError = () => {
  return false
}
</script>
