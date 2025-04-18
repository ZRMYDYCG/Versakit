<template>
  <span :class="tClass" role="status" aria-label="Tag Component">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TagProps } from '../type/index'

defineOptions({ name: 'VKTag' }) // 修改组件名称为 VKTag

const props = withDefaults(defineProps<TagProps>(), {
  type: 'primary',
  plain: false,
  size: 'md',
  round: false,
})

const tClass = computed(() => {
  const baseClass = 'vk-tag' // 修改类名前缀为 VK
  return [
    baseClass,
    props.type === 'primary'
      ? `${baseClass}-primary`
      : `${baseClass}-${props.type}`,
    props.round ? 'is-round' : '',
    props.plain ? 'is-plain' : '',
    props.size === 'md' ? '' : `is-${props.size}`,
  ]
})
</script>

<style>
@import '../style/index.css';
</style>
