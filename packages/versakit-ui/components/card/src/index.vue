<template>
  <div
    :class="cardClass"
    role="region"
    :aria-label="title || 'Card'"
    :aria-description="description"
    aria-roledescription="Card container"
  >
    <div
      v-if="hasHeaderSlot"
      class="ver-card-header"
      role="heading"
      aria-level="3"
    >
      <slot name="header" />
    </div>
    <div class="ver-card-body" role="group" aria-label="Card content">
      <slot />
    </div>
    <div
      v-if="hasFooterSlot"
      class="ver-card-footer"
      role="contentinfo"
      aria-label="Card footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, shallowRef, onMounted } from 'vue'
import type { CardProps, ShadowType } from '../type/index'

defineOptions({ name: 'VKCard' })

const slots = useSlots()

// 阴影类型映射 - 使用常量避免重复创建
const SHADOW_CLASS_MAP: Readonly<Record<ShadowType, string>> = {
  always: 'is-shadow-always',
  hover: 'is-shadow-hover',
  never: 'is-shadow-never',
} as const

const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'always',
  title: undefined,
  description: undefined,
})

// 优化类名计算 - 使用数组字面量减少GC压力
const cardClass = computed(() => ['ver-card', SHADOW_CLASS_MAP[props.shadow]])

// 使用v-if替代v-show+computed以提高性能
// 使用shallowRef优化插槽检查，减少不必要的重新计算
const hasHeaderSlot = shallowRef(false)
const hasFooterSlot = shallowRef(false)

// 只在组件挂载时检查一次插槽，避免每次渲染都重新计算
onMounted(() => {
  hasHeaderSlot.value = Boolean(slots.header)
  hasFooterSlot.value = Boolean(slots.footer)
})
</script>

<style>
@import '../style/index.css';
</style>
