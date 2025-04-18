<template>
  <span :class="VerClass">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TextProps } from '../type/index'

defineOptions({ name: 'VerText' })

const props = withDefaults(defineProps<TextProps>(), {
  type: 'info',
  size: 'md',
  truncated: false,
})

const VerClass = computed(() => {
  return [
    'vk-text',
    props.type == 'info' ? 'vk-text-info' : `vk-text-${props.type}`,
    props.size == 'md' ? '' : `is-${props.size}`,
    props.truncated == false ? '' : 'is-truncated',
  ]
})
</script>

<style>
@import '../style/index.css';
</style>
