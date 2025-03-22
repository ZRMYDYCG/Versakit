<template>
  <svg
    class="ver-color-picker-add"
    :style="addColorItemStyle"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g class="ver-color-picker-container">
      <path d="M544 464V160h-80v304H160v80h304v304h80V544h304v-80z"></path>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed, inject, unref } from 'vue'

import type { AddColorProps } from '../type'

const props = withDefaults(defineProps<AddColorProps>(), {
  size: 160,
  selected: false,
})

const { theme } = inject('theme', { theme: 'light' })

const addColorItemStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  lineHeight: `${props.size}px`,
  boxShadow: props.selected
    ? `0 0 3px 2px ${unref(theme) === 'dark' ? '#2681ff' : '#1890ff'}`
    : '',
}))
</script>

<style scoped>
@import '../style/AddColorItem.css';
</style>
