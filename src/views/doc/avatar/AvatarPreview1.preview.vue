<preview>尺寸</preview>
<template>
  <Avator :src="imgUrl" size="small" />
  <Avator :src="imgUrl" size="default" />
  <Avator :src="imgUrl" size="large" />
  <Avator :src="imgUrl" :size="100" />
</template>
<script setup lang="ts">
import imgUrl from '@/assets/image/avator.png'
import Avator from '@/lib/avatar/index.vue'
</script>
