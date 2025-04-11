<template>
  <div :class="VerClass">
    <ver-icon :name="icon" size="120" :color="computedColor" />
    <div class="result-content">
      <slot name="content">{{ VerContent }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VKIcon } from '@versakit/icons'
import { computed } from 'vue'
import type { ResultProps } from '../type/index.ts'

defineOptions({ name: 'VerResult' })

const props = withDefaults(defineProps<ResultProps>(), {
  icon: '',
  type: 'success',
})

const VerClass = computed(() => {
  switch (props.type) {
    case 'success':
      return ['ver-result', 'is-result-success']
    case 'warning':
      return ['ver-result', 'is-result-warning']
    case 'error':
      return ['ver-result', 'is-result-error']
    case 'info':
      return ['ver-result', 'is-result-info']
    default:
      return ['ver-result', 'is-result-success']
  }
})
const VerContent = computed(() => {
  switch (props.type) {
    case 'success':
      return '成功'
    case 'warning':
      return '警告'
    case 'error':
      return '错误'
    case 'info':
      return '信息'
    default:
      return ''
  }
})

const computedColor = computed(() => {
  switch (props.type) {
    case 'success':
      return '#28a745'
    case 'warning':
      return '#ffc107'
    case 'error':
      return '#dc3545'
    case 'info':
      return '#17a2b8'
    default:
      return '#28a745'
  }
})
</script>

<style>
@import '../style/index.css';
</style>
