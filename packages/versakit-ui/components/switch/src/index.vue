<template>
  <label :class="verClass" @click="handleClick">
    <span ref="core" :class="coreClass">
      <span :class="buttonClass"></span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SwitchPrpops, PtProps } from '../type/index'

defineOptions({ name: 'VerSwitch' })

const props = withDefaults(defineProps<SwitchPrpops>(), {
  modelValue: false,
  size: 'md',
  unstyled: false,
  pt: () => ({}),
})

const emit = defineEmits(['input', 'update:modelValue'])

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

// 外层 label 类
const verClass = computed(() => {
  const classes = []

  const ptRoot = getPtClasses('root')
  if (ptRoot) classes.push(ptRoot)

  if (!props.unstyled) {
    classes.push(
      'ver-switch',
      props.modelValue ? 'is-checked' : '',
      props.size !== 'md' ? `is-${props.size}` : '',
    )
  }

  return classes
})

// 内部 core 类
const coreClass = computed(() => {
  const ptCore = getPtClasses('core')
  return props.unstyled ? ptCore : ['ver-switch-core', ptCore].filter(Boolean)
})

// 内部 button 类
const buttonClass = computed(() => {
  const ptBtn = getPtClasses('button')
  return props.unstyled ? ptBtn : ['ver-switch-button', ptBtn].filter(Boolean)
})

const handleClick = () => {
  emit('input', !props.modelValue)
  emit('update:modelValue', !props.modelValue)
}
</script>

<style>
@import '../style/index.css';
</style>
