<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { SplitterProps } from '../type/index.ts'

const props = withDefaults(defineProps<SplitterProps>(), {
  direction: 'horizontal',
  defaultSizes: () => [50, 50],
  minSize: 10,
  maxSize: 90,
  gutterSize: 4,
  disabled: false,
})

const emit = defineEmits<{
  'update:sizes': [sizes: number[]]
  'drag-start': [sizes: number[]]
  'drag-end': [sizes: number[]]
}>()

const containerRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const startPosition = ref(0)
const startSizes = ref<number[]>([])
const currentSizes = ref<number[]>(props.defaultSizes)

const isHorizontal = computed(() => props.direction === 'horizontal')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleMouseDown = (event: MouseEvent, index: number) => {
  if (props.disabled) return

  event.preventDefault()
  isDragging.value = true
  startPosition.value = isHorizontal.value ? event.clientX : event.clientY
  startSizes.value = [...currentSizes.value]

  emit('drag-start', [...currentSizes.value])

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

const handleMouseMove = (event: MouseEvent) => {
  if (!isDragging.value || !containerRef.value) return

  const container = containerRef.value
  const containerRect = container.getBoundingClientRect()
  const containerSize = isHorizontal.value
    ? containerRect.width
    : containerRect.height
  const currentPosition = isHorizontal.value ? event.clientX : event.clientY
  const delta = currentPosition - startPosition.value
  const deltaPercent = (delta / containerSize) * 100

  const newSizes = [...startSizes.value]
  newSizes[0] = Math.min(
    Math.max(startSizes.value[0] + deltaPercent, props.minSize),
    props.maxSize,
  )
  newSizes[1] = 100 - newSizes[0]

  currentSizes.value = newSizes
  emit('update:sizes', newSizes)
}

const handleMouseUp = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)

  emit('drag-end', [...currentSizes.value])
}

onMounted(() => {
  if (props.defaultSizes.length !== 2) {
    console.warn('Splitter component expects exactly 2 default sizes')
    currentSizes.value = [50, 50]
  }
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <div
    ref="containerRef"
    class="splitter"
    :class="[`splitter-${direction}`, { 'is-disabled': disabled }]"
  >
    <div
      class="splitter-pane"
      :style="{
        [direction === 'horizontal' ? 'width' : 'height']:
          `${currentSizes[0]}%`,
      }"
    >
      <slot name="first"></slot>
    </div>

    <div
      class="splitter-gutter"
      :style="{
        [direction === 'horizontal' ? 'width' : 'height']: `${gutterSize}px`,
      }"
      @mousedown="handleMouseDown($event, 0)"
    >
      <div class="splitter-gutter-handle"></div>
    </div>

    <div
      class="splitter-pane"
      :style="{
        [direction === 'horizontal' ? 'width' : 'height']:
          `${currentSizes[1]}%`,
      }"
    >
      <slot name="second"></slot>
    </div>
  </div>
</template>

<style scoped>
@import '../style/index.css';
</style>
