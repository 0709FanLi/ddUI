<template>
  <div>
    <Switch v-model="checked" @input="checked = $event" active-color="#69f" inactive-color="#ccc" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Switch from '../lib/switch/index.vue'

const checked = ref<any>(false)
</script>
