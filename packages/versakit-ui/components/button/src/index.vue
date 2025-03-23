<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { ButtonProps } from '../type/index'
import { VerIcon } from '@versakit/icons'

defineOptions({ name: 'VerButton' })

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  circle: false,
  size: 'md',
  icon: '',
  variant: '',
  type: '',
})

const attrs: any = useAttrs()

// 计算样式类
const baseClass = computed(() => {
  const variantClasses = props.variant
    .split(' ')
    .filter(Boolean)
    .map((v) => `is-${v}`)

  return [
    'ver-btn',
    props.type === 'primary' ? 'ver-btn-primary' : `ver-btn-${props.type}`,
    ...variantClasses,
    props.circle && 'is-circle',
    props.disabled && 'is-disabled',
    props.size !== 'md' && `is-${props.size}`,
  ].filter(Boolean)
})

// 合并根元素属性
const rootAttrs: any = computed(() => ({
  ...attrs,
  class: baseClass.value.join(' '),
  disabled: props.disabled || undefined,
}))
</script>

<template>
  <button v-bind="rootAttrs">
    <!-- icon -->
    <ver-icon v-if="props.icon" :name="props.icon" :class="props.icon" />
    <!-- Label -->
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style>
@import '../style/index.css';
</style>
