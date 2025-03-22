<script setup lang="ts">
import { ref, watch, onMounted, computed, inject, unref } from 'vue'

import type { ColorItemProps } from '../type'

const props = withDefaults(defineProps<ColorItemProps>(), {
  size: 20,
  value: '',
  border: true,
  borderRadius: 5,
  selected: false,
  draggable: false,
})

defineEmits(['select'])

const canvas = ref<HTMLCanvasElement>()
const { theme } = inject('theme', { theme: 'light' })

const width = computed(() => parseFloat((props.width || props.size) + ''))
const height = computed(() => parseFloat((props.height || props.size) + ''))

const colorItemStyle = computed(() => ({
  width: `${unref(width)}px`,
  height: `${unref(height)}px`,
  border: props.border
    ? `1px solid ${unref(theme) === 'dark' ? '#434345' : '#d9d9d9'}`
    : '',
  borderRadius: `${props.borderRadius}px`,
  boxShadow: props.selected
    ? `0 0 3px 2px ${unref(theme) === 'dark' ? '#2681ff' : '#1890ff'}`
    : '',
}))

const createAlphaSquare = (size: number) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  const doubleSize = size * 2
  canvas.width = doubleSize
  canvas.height = doubleSize
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, doubleSize, doubleSize)
  ctx.fillStyle = '#ccd5db'
  ctx.fillRect(0, 0, size, size)
  ctx.fillRect(size, size, size, size)
  return canvas
}

const renderColor = () => {
  if (!canvas.value) return

  const ctx = canvas.value.getContext('2d')!
  canvas.value.width = unref(width)
  canvas.value.height = unref(height)
  const canvasSquare = createAlphaSquare(5)
  ctx.fillStyle = ctx.createPattern(canvasSquare, 'repeat')!
  ctx.fillRect(0, 0, unref(width), unref(height))
  ctx.fillStyle = props.value
  ctx.fillRect(0, 0, unref(width), unref(height))
}

watch(
  () => props.value,
  () => renderColor(),
)

onMounted(() => {
  renderColor()
})
</script>

<template>
  <canvas
    class="ver-color-picker-color-item"
    :style="colorItemStyle"
    ref="canvas"
    :draggable="draggable"
  />
</template>

<style scoped>
@import '../style/ColorItem.css';
</style>
