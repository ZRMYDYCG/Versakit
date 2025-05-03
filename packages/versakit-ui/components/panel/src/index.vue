<template>
  <div :class="panelClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PanelProps, PanelShadow, PtProps } from '../type/index'

defineOptions({ name: 'VKPanel' })

// 阴影映射表
const SHADOW_CLASS_MAP: Record<PanelShadow, string> = {
  always: 'is-shadow-always',
  hover: 'is-shadow-hover',
  never: 'is-shadow-never',
} as const

// 属性定义
const props = withDefaults(defineProps<PanelProps>(), {
  shadow: 'always',
  unstyled: false,
  pt: () => ({}), // 默认 pt 是空对象
})

// pt 类名获取函数
const getPtClasses = (key: keyof PtProps) => {
  const ptValue = props.pt?.[key]

  // 如果 ptValue 不合法（如传入了字符串 "[object Object]"）
  if (
    !ptValue ||
    (typeof ptValue === 'string' && ptValue.includes('[object Object]'))
  ) {
    return ''
  }

  if (typeof ptValue === 'string') {
    return ptValue
  }

  if (Array.isArray(ptValue)) {
    return ptValue.join(' ')
  }

  if (typeof ptValue === 'object') {
    return Object.entries(ptValue)
      .filter(([, value]) => value) // 过滤掉值为 falsy 的项
      .map(([, value]) => (typeof value === 'string' ? value : '')) // 确保值是字符串
      .filter(Boolean) // 去掉空值
      .join(' ') // 连接成空格分隔的字符串
  }

  return ''
}

// 计算面板类名
const panelClass = computed(() => {
  const classes = []

  // 获取 pt 的 root 类名
  const ptRoot = getPtClasses('root')
  if (ptRoot) classes.push(ptRoot)

  // 添加默认类名（如果不是 unstyled）
  if (!props.unstyled) {
    classes.push('ver-panel', SHADOW_CLASS_MAP[props.shadow])
  }

  return classes
})
</script>

<style scoped>
@import url('../style/index.css');
</style>
