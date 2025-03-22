<template>
  <div
    class="ver-color-picker-alpha"
    @mousedown.prevent.stop="onSelect"
    @touchstart.prevent.stop="onSelect"
  >
    <canvas ref="canvas" />
    <div class="ver-color-picker-slider" :style="sliderStyle" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

import type { AlphaProps } from '../../type'

const props = withDefaults(defineProps<AlphaProps>(), {
  width: 15,
  height: 160,
  alpha: 1,
  color: '#000000',
})

const emit = defineEmits(['change'])

const sliderHeight = 4
const sliderHeightHalf = sliderHeight / 2
const canvas = ref<HTMLCanvasElement>()

const sliderStyle = computed(() => ({
  top: `${props.alpha * props.height - sliderHeightHalf}px`,
  height: `${sliderHeight}px`,
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

const renderAlpha = () => {
  if (!canvas.value) return

  const ctx = canvas.value.getContext('2d')!
  canvas.value.width = props.width
  canvas.value.height = props.height
  const canvasSquare = createAlphaSquare(5)
  ctx.fillStyle = ctx.createPattern(canvasSquare, 'repeat')!
  ctx.fillRect(0, 0, props.width, props.height)
  const gradient = ctx.createLinearGradient(0, 0, 0, props.height)
  gradient.addColorStop(0.01, 'rgba(255,255,255,0)')
  gradient.addColorStop(0.99, props.color)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, props.width, props.height)
}

watch(
  () => props.color,
  () => renderAlpha(),
)

onMounted(() => {
  renderAlpha()
})

const onSelect = (e: MouseEvent | TouchEvent) => {
  const target = e.target as HTMLCanvasElement
  const { top } = target.getBoundingClientRect()

  const onSelectMoving = (e: MouseEvent | TouchEvent) => {
    let clientY = 0
    if (e instanceof MouseEvent) {
      clientY = e.clientY
    } else if (e instanceof TouchEvent) {
      clientY = e.touches[0].clientY
    }

    let y = clientY - top
    if (y < 0) y = 0
    if (y > props.height) y = props.height
    const a = parseFloat((y / props.height).toFixed(2))
    emit('change', a)
  }

  const onSelectEnd = () => {
    document.removeEventListener('mousemove', onSelectMoving)
    document.removeEventListener('mouseup', onSelectEnd)
    document.removeEventListener('touchmove', onSelectMoving)
    document.removeEventListener('touchend', onSelectEnd)
  }

  onSelectMoving(e)

  if (e instanceof MouseEvent) {
    document.addEventListener('mousemove', onSelectMoving)
    document.addEventListener('mouseup', onSelectEnd)
  }

  if (e instanceof TouchEvent) {
    e.preventDefault()
    document.addEventListener('touchmove', onSelectMoving, {
      passive: false,
    })
    document.addEventListener('touchend', onSelectEnd)
  }
}
</script>

<style scoped>
@import '../../style/Alpha.css';
</style>
