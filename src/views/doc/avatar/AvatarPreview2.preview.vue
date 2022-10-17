<preview>形状</preview>
<template>
  <Avator :src="imgUrl" shape="square" size="small" />
  <Avator :src="imgUrl" shape="square" size="default" />
  <Avator :src="imgUrl" shape="square" size="large" />
  <Avator :src="imgUrl" shape="square" :size="100" />
</template>
<script setup lang="ts">
import imgUrl from '@/assets/image/avator.png'
import Avator from '@/lib/avatar/index.vue'
</script>
