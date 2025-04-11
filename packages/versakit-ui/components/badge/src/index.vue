<template>
  <div class="vkbadge" role="status">
    <slot />
    <!-- 通过上标文本标签实现徽标 -->
    <sup
      ref="verBadge"
      :class="badgeClass"
      :aria-label="ariaLabel"
      aria-live="polite"
    >
      <template v-if="type !== 'dot'">{{ displayValue }}</template>
    </sup>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BadgeProps, BadgeType } from '../type/index'

defineOptions({ name: 'VKBadge' })

// Badge类型映射
const TYPE_CLASS_MAP: Record<BadgeType, string> = {
  dot: 'vkbadge-dot',
  number: 'vkbadge-num',
  text: 'vkbadge-text',
} as const

const props = withDefaults(defineProps<BadgeProps>(), {
  type: 'dot',
})

// 优化值的计算
const displayValue = computed(() => {
  if (typeof props.value !== 'number') return props.value
  return props.value > 99 ? '99+' : props.value
})

// 优化类名计算
const badgeClass = computed(() => ['vkbadge', TYPE_CLASS_MAP[props.type]])

// 计算aria标签文本
const ariaLabel = computed(() => {
  if (props.type === 'dot') return 'Notification indicator'
  return `Badge value is ${displayValue.value}`
})
</script>

<style>
@import '../style/index.css';
</style>
