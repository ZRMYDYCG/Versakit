<template>
  <div :class="panelClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PanelProps, PanelShadow } from '../type/index'

defineOptions({ name: 'VerPanel' })

// 阴影类型映射
const SHADOW_CLASS_MAP: Record<PanelShadow, string> = {
  always: 'is-shadow-always',
  hover: 'is-shadow-hover',
  never: 'is-shadow-never',
} as const

const props = withDefaults(defineProps<PanelProps>(), {
  shadow: 'always',
})

// 优化类名计算
const panelClass = computed(() => ['ver-panel', SHADOW_CLASS_MAP[props.shadow]])
</script>

<style>
@import '../style/index.css';
</style>
