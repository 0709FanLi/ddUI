<demo>
自定义颜色
</demo>
<template>
  <Switch v-model="checked" active-color="red" inactive-color="pink" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/lib/switch/index.vue'

const checked = ref(false)
</script>
