<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
<script lang="ts" setup>
import { ref, provide } from 'vue'
import router from './router'

const width = document.documentElement.clientWidth
const asideVisible = ref(!(width <= 500))
provide('asideVisible', asideVisible)
router.afterEach(() => {
  if (width <= 500) {
    asideVisible.value = false
  }
})
</script>
