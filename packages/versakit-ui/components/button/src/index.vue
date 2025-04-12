<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { ButtonProps } from '../type/index'
import { VKIcon } from '@versakit/icons'

defineOptions({ name: 'VkButton' }) // 修改组件名

// 按钮类型映射
const TYPE_CLASS_MAP = {
  primary: 'vk-btn-primary',
  secondary: 'vk-btn-secondary',
  success: 'vk-btn-success',
  info: 'vk-btn-info',
  error: 'vk-btn-error',
  warn: 'vk-btn-warn',
} as const

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  circle: false,
  size: 'md',
  icon: '',
  variant: '',
  type: '',
})

const attrs = useAttrs()

// 优化类名计算逻辑
const baseClass = computed(() => {
  const classes = ['vk-btn']

  // 处理按钮类型
  classes.push(TYPE_CLASS_MAP[props.type as keyof typeof TYPE_CLASS_MAP] || '')

  // 处理变体类名
  if (props.variant) {
    const variants = props.variant.split(' ').filter(Boolean)
    classes.push(...variants.map((v) => `is-${v}`))
  }

  // 处理其他状态类名
  if (props.circle) classes.push('is-circle')
  if (props.disabled) classes.push('is-disabled')
  if (props.size !== 'md') classes.push(`is-${props.size}`)

  return classes.filter(Boolean)
})

// 优化根元素属性
const rootAttrs = computed(() => ({
  ...attrs,
  class: baseClass.value.join(' '),
  disabled: props.disabled || undefined,
  role: 'button',
  'aria-disabled': props.disabled,
  tabindex: props.disabled ? -1 : 0,
}))

// 优化键盘事件处理
const handleKeydown = (event: KeyboardEvent) => {
  const isActionKey = event.key === 'Enter' || event.key === ' '
  if (!isActionKey || props.disabled) return

  event.preventDefault()
  event.target?.dispatchEvent(new Event('click', { bubbles: true }))
}
</script>

<template>
  <button v-bind="rootAttrs" @keydown="handleKeydown">
    <VKIcon v-if="icon" :name="icon" :class="icon" aria-hidden="true" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<style>
@import '../style/index.css';
</style>
