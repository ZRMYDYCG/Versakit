<template>
  <div
    class="ver-color-picker-hue"
    @mousedown.prevent.stop="onSelect"
    @touchstart.prevent.stop="onSelect"
  >
    <canvas ref="canvas" />
    <div class="ver-color-picker-hue-slider" :style="sliderStyle" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { HueProps } from '../../type'

const props = withDefaults(defineProps<HueProps>(), {
  width: 15,
  height: 160,
  hue: 0,
})

const emit = defineEmits(['change'])

const sliderHeight = 4
const sliderHeightHalf = sliderHeight / 2
const canvas = ref<HTMLCanvasElement>()

const sliderStyle = computed(() => ({
  top: `${(1 - props.hue / 360) * props.height - sliderHeightHalf}px`,
  height: `${sliderHeight}px`,
}))

const renderHue = () => {
  if (!canvas.value) return

  const ctx = canvas.value.getContext('2d')!
  canvas.value.width = props.width
  canvas.value.height = props.height

  const gradient = ctx.createLinearGradient(0, 0, 0, props.height)
  gradient.addColorStop(0, '#FF0000')
  gradient.addColorStop(0.17, '#FF00FF')
  gradient.addColorStop(0.34, '#0000FF')
  gradient.addColorStop(0.51, '#00FFFF')
  gradient.addColorStop(0.68, '#00FF00')
  gradient.addColorStop(0.85, '#FFFF00')
  gradient.addColorStop(1, '#FF0000')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, props.width, props.height)
}

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
    y = Math.max(0, Math.min(y, props.height))
    const percent = -((y * 100) / props.height) + 100
    emit('change', (360 * percent) / 100)
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
    document.addEventListener('touchmove', onSelectMoving, { passive: false })
    document.addEventListener('touchend', onSelectEnd)
  }
}

onMounted(() => {
  renderHue()
})
</script>

<style scoped>
@import '../../style/Hue.css';
</style>
