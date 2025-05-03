<template>
  <div
    :class="baseClass"
    role="region"
    :aria-label="title || 'Card'"
    :aria-description="description"
    aria-roledescription="Card container"
  >
    <div
      v-if="hasHeaderSlot"
      :class="headerClass"
      role="heading"
      aria-level="3"
    >
      <slot name="header" />
    </div>
    <div :class="bodyClass" role="group" aria-label="Card content">
      <slot />
    </div>
    <div
      v-if="hasFooterSlot"
      :class="footerClass"
      role="contentinfo"
      aria-label="Card footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, shallowRef, onMounted } from 'vue'
import type { CardProps, ShadowType, PtProps } from '../type/index'

defineOptions({ name: 'VKCard' })

const slots = useSlots()

const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'always',
  title: undefined,
  description: undefined,
  unstyled: false,
  pt: () => ({}),
})

const SHADOW_CLASS_MAP: Readonly<Record<ShadowType, string>> = {
  always: 'is-shadow-always',
  hover: 'is-shadow-hover',
  never: 'is-shadow-never',
} as const

const getPtClasses = (key: keyof PtProps) => {
  const ptValue = props.pt?.[key]
  if (!ptValue) return ''

  if (typeof ptValue === 'string') {
    return ptValue
  }

  if (Array.isArray(ptValue)) {
    return ptValue.join(' ')
  }

  return Object.entries(ptValue)
    .filter(([, value]) => value)
    .map(([, value]) => (typeof value === 'string' ? value : ''))
    .filter(Boolean)
    .join(' ')
}

// =======================
// Class 计算
// =======================
const baseClass = computed(() => {
  const classes = []

  const ptRoot = getPtClasses('root')
  if (ptRoot) classes.push(ptRoot)

  if (!props.unstyled) {
    classes.push('ver-card', SHADOW_CLASS_MAP[props.shadow])
  }

  return classes
})

const headerClass = computed(() => {
  const classes = []

  const ptHeader = getPtClasses('header')
  if (ptHeader) classes.push(ptHeader)

  if (!props.unstyled) {
    classes.push('ver-card-header')
  }

  return classes
})

const bodyClass = computed(() => {
  const classes = []

  const ptBody = getPtClasses('body')
  if (ptBody) classes.push(ptBody)

  if (!props.unstyled) {
    classes.push('ver-card-body')
  }

  return classes
})

const footerClass = computed(() => {
  const classes = []

  const ptFooter = getPtClasses('footer')
  if (ptFooter) classes.push(ptFooter)

  if (!props.unstyled) {
    classes.push('ver-card-footer')
  }

  return classes
})

// 插槽存在性检测
const hasHeaderSlot = shallowRef(false)
const hasFooterSlot = shallowRef(false)

onMounted(() => {
  hasHeaderSlot.value = Boolean(slots.header)
  hasFooterSlot.value = Boolean(slots.footer)
})
</script>
