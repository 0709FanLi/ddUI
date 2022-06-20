<demo>
基础用法
</demo>
<template>
  <Switch v-model="checked" />
  <Switch v-model="checked" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/lib/switch/index.vue'

const checked = ref(false)
</script>
