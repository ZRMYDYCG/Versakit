<template>
  <span :class="tClass" role="status" aria-label="Tag Component">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TagProps, PtProps } from '../type/index'

defineOptions({ name: 'VKTag' })

const props = withDefaults(defineProps<TagProps>(), {
  type: 'primary',
  plain: false,
  size: 'md',
  round: false,
  unstyled: false,
  pt: () => ({}),
})

// 统一 pt class 提取函数
const getPtClasses = (key: keyof PtProps) => {
  const ptValue = props.pt?.[key]
  if (!ptValue) return ''

  if (typeof ptValue === 'string') return ptValue
  if (Array.isArray(ptValue)) return ptValue.join(' ')
  if (typeof ptValue === 'object') {
    return Object.entries(ptValue)
      .filter(([, v]) => v)
      .map(([, v]) => (typeof v === 'string' ? v : ''))
      .filter(Boolean)
      .join(' ')
  }

  return ''
}

// 计算类名
const tClass = computed(() => {
  const classes = []

  const ptRoot = getPtClasses('root')
  if (ptRoot) classes.push(ptRoot)

  if (!props.unstyled) {
    const base = 'vk-tag'
    classes.push(
      base,
      props.type === 'primary' ? `${base}-primary` : `${base}-${props.type}`,
      props.round ? 'is-round' : '',
      props.plain ? 'is-plain' : '',
      props.size === 'md' ? '' : `is-${props.size}`,
    )
  }

  return classes
})
</script>

<style>
@import '../style/index.css';
</style>
