<template>
  <div
    class="ver-color-picker-saturation"
    :style="saturationStyle"
    @mousedown.prevent.stop="onSelect"
    @touchstart.prevent.stop="onSelect"
  >
    <div class="ver-color-picker-saturation-white" />
    <div class="ver-color-picker-saturation-black" />
    <div class="ver-color-picker-slider" :style="sliderStyle" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SaturationProps } from '../../type'

const props = withDefaults(defineProps<SaturationProps>(), {
  size: 160,
  hue: 0,
  saturation: 0,
  value: 0,
})

const emit = defineEmits(['change'])

// 样式计算
const saturationStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  background: `hsl(${props.hue}, 100%, 50%)`,
}))

// 滑块样式计算
const sliderSize = 10
const sliderRadius = sliderSize / 2
const sliderStyle = computed(() => ({
  top: `${((100 - props.value) / 100) * props.size - sliderRadius}px`,
  left: `${(props.saturation * props.size) / 100 - sliderRadius}px`,
  width: `${sliderSize}px`,
  height: `${sliderSize}px`,
}))

// 交互事件处理
const onSelect = (e: MouseEvent | TouchEvent) => {
  const target = e.target as HTMLElement
  const { left, top: targetTop } = target.getBoundingClientRect()

  const handleMove = (moveEvent: MouseEvent | TouchEvent) => {
    let clientX = 0,
      clientY = 0

    if (moveEvent instanceof MouseEvent) {
      clientX = moveEvent.clientX
      clientY = moveEvent.clientY
    } else if (moveEvent instanceof TouchEvent) {
      clientX = moveEvent.touches[0].clientX
      clientY = moveEvent.touches[0].clientY
    }

    const x = Math.max(0, Math.min(clientX - left, props.size))
    const y = Math.max(0, Math.min(clientY - targetTop, props.size))

    emit(
      'change',
      Number(((x / props.size) * 100).toFixed(2)),
      Number((100 - (y / props.size) * 100).toFixed(2)),
    )
  }

  const handleEnd = () => {
    document.removeEventListener('mousemove', handleMove)
    document.removeEventListener('mouseup', handleEnd)
    document.removeEventListener('touchmove', handleMove)
    document.removeEventListener('touchend', handleEnd)
  }

  // 初始触发
  handleMove(e)

  // 添加事件监听
  if (e instanceof MouseEvent) {
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleEnd)
  }

  if (e instanceof TouchEvent) {
    e.preventDefault()
    document.addEventListener('touchmove', handleMove, { passive: false })
    document.addEventListener('touchend', handleEnd)
  }
}
</script>

<style scoped>
@import '../../style/Saturation.css';
</style>
