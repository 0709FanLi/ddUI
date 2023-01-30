<template>
  <button class="dd-button-set" :class="classes">
    <span v-if="loading" class="dd-loadingIndicator"></span>
    <slot> {{ theme }} </slot>
  </button>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'default'
  },
  dashed: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'default'
  },
  round: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const { theme, dashed, size, round, disabled } = toRefs(props)

const classes = computed(() => {
  return {
    [`dd-theme-${theme.value}`]: theme.value,
    [`dd-theme-dashed`]: dashed.value,
    [`dd-size-${size.value}`]: size.value,
    [`is-round`]: round.value,
    [`is-disabled`]: disabled.value
  }
})
</script>
<script lang="ts">
export default {
  name: 'DdButton'
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
