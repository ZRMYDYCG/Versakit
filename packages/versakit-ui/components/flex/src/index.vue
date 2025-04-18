<script setup lang="ts">
import { computed } from 'vue'
import type { FlexProps } from '../type'

const props = withDefaults(defineProps<FlexProps>(), {
  vertical: false,
  wrap: 'nowrap',
  justify: 'normal',
  align: 'normal',
  gap: 'middle',
})

const gap = computed(() => {
  let gapValue = undefined
  switch (props.gap) {
    case 'small':
      gapValue = '8px'
      break
    case 'middle':
      gapValue = '16px'
      break
    case 'large':
      gapValue = '24px'
      break
    default:
      if (typeof props.gap === 'number') {
        gapValue = props.gap + 'px'
      } else if (Array.isArray(props.gap)) {
        gapValue = props.gap
          .map((item) => {
            return item + 'px'
          })
          .join(' ')
      }
  }
  return gapValue
})
</script>

<template>
  <div
    class="vk-flex"
    :class="{ 'vk-flex--vktical': vertical }"
    :style="{
      '--vk-flex-gap': gap,
      '--vk-flex-justify': justify,
      '--vk-flex-align': align,
      '--vk-flex-wrap': wrap,
    }"
    aria-orientation="horizontal"
    aria-live="polite"
  >
    <slot></slot>
  </div>
</template>

<style>
@import '../style/index.css';
</style>
