<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { IconsProps } from '../type/index'

const attrs = useAttrs()

defineOptions({ name: 'VerIcon', inheritAttrs: false })

const props = withDefaults(defineProps<IconsProps>(), {
  name: '',
  size: 14,
  color: '',
  variant: '',
})

// 合并根元素属性
const rootAttrs = computed(() => {
  return {
    ...attrs,
    class: ['ver-icon', attrs.class].filter(Boolean).join(' '),
  }
})

const size = `${props.size}px`

const IconName = computed(() => `#icon-${props.name}`)
</script>

<template>
  <svg
    v-bind="rootAttrs"
    aria-hidden="true"
    :style="{
      width: size,
      height: size,
      color: props.color,
    }"
  >
    <use :xlink:href="IconName"></use>
  </svg>
</template>

<style>
@import '../style/index.css';
</style>
