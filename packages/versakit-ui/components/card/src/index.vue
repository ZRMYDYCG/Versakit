<template>
  <div :class="cardClass">
    <div v-show="hasHeaderSlot" class="ver-card-header">
      <slot name="header" />
    </div>
    <div class="ver-card-body">
      <slot />
    </div>
    <div v-show="hasFooterSlot" class="ver-card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { CardProps, ShadowType } from '../type/index'

defineOptions({ name: 'VerCard' })

const slots = useSlots()

// 阴影类型映射
const SHADOW_CLASS_MAP: Record<ShadowType, string> = {
  always: 'is-shadow-always',
  hover: 'is-shadow-hover',
  never: 'is-shadow-never',
} as const

const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'always',
})

// 优化类名计算
const cardClass = computed(() => ['ver-card', SHADOW_CLASS_MAP[props.shadow]])

// 优化插槽检查
const hasHeaderSlot = computed(() => Boolean(slots.header))
const hasFooterSlot = computed(() => Boolean(slots.footer))
</script>

<style>
@import '../style/index.css';
</style>
