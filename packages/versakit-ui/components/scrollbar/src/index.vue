<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { VerScrollBarProps } from '../type/index'

defineOptions({ name: 'VerScrollBar' })

const props = withDefaults(defineProps<VerScrollBarProps>(), {
  direction: 'vertical',
  height: '100%',
  width: '100%',
  thumbColor: '#909399',
  trackColor: '#f5f5f5',
  thumbHoverColor: '#606266',
  hideDelay: 1000,
})

const containerRef = ref<HTMLElement | null>(null)
const contentRef: any = ref<HTMLElement | null>(null)
const verticalThumbRef = ref<HTMLElement | null>(null)
const horizontalThumbRef = ref<HTMLElement | null>(null)

const showScrollbar = ref(false)
const hideTimer = ref<number | null>(null)
const isDragging = ref(false)
const startPosition = ref({ x: 0, y: 0 })
const startScroll = ref({ x: 0, y: 0 })

const verticalThumbHeight = computed(() => {
  if (!containerRef.value || !contentRef.value) return '0%'
  const containerHeight = containerRef.value.clientHeight
  const contentHeight = contentRef.value.scrollHeight
  const percentage = (containerHeight / contentHeight) * 100
  return `${Math.min(100, Math.max(percentage, 10))}%`
})

const horizontalThumbWidth = computed(() => {
  if (!containerRef.value || !contentRef.value) return '0%'
  const containerWidth = containerRef.value.clientWidth
  const contentWidth = contentRef.value.scrollWidth
  const percentage = (containerWidth / contentWidth) * 100
  return `${Math.min(100, Math.max(percentage, 10))}%`
})

const verticalThumbPosition = computed(() => {
  if (!containerRef.value || !contentRef.value) return '0%'
  const containerHeight = containerRef.value.clientHeight
  const contentHeight = contentRef.value.scrollHeight
  const scrollTop = contentRef.value.scrollTop
  const maxScroll = contentHeight - containerHeight
  const percentage =
    (scrollTop / maxScroll) * (100 - parseFloat(verticalThumbHeight.value))
  return `${percentage}%`
})

const horizontalThumbPosition = computed(() => {
  if (!containerRef.value || !contentRef.value) return '0%'
  const containerWidth = containerRef.value.clientWidth
  const contentWidth = contentRef.value.scrollWidth
  const scrollLeft = contentRef.value.scrollLeft
  const maxScroll = contentWidth - containerWidth
  const percentage =
    (scrollLeft / maxScroll) * (100 - parseFloat(horizontalThumbWidth.value))
  return `${percentage}%`
})

const showVertical = computed(() => {
  return (
    ['vertical', 'both'].includes(props.direction) &&
    contentRef.value?.scrollHeight > (containerRef.value?.clientHeight || 0)
  )
})

const showHorizontal = computed(() => {
  return (
    ['horizontal', 'both'].includes(props.direction) &&
    contentRef.value?.scrollWidth > (containerRef.value?.clientWidth || 0)
  )
})

const handleScroll = () => {
  showScrollbar.value = true
  if (hideTimer.value) {
    clearTimeout(hideTimer.value)
  }
  if (!isDragging.value) {
    hideTimer.value = window.setTimeout(() => {
      showScrollbar.value = false
    }, props.hideDelay)
  }
}

const handleMouseEnter = () => {
  showScrollbar.value = true
  if (hideTimer.value) {
    clearTimeout(hideTimer.value)
  }
}

const handleMouseLeave = () => {
  if (!isDragging.value) {
    hideTimer.value = window.setTimeout(() => {
      showScrollbar.value = false
    }, props.hideDelay)
  }
}

const handleVerticalDragStart = (e: MouseEvent) => {
  e.preventDefault()
  isDragging.value = true
  startPosition.value.y = e.clientY
  if (contentRef.value) {
    startScroll.value.y = contentRef.value.scrollTop
  }
  document.addEventListener('mousemove', handleVerticalDrag)
  document.addEventListener('mouseup', handleDragEnd)
}

const handleHorizontalDragStart = (e: MouseEvent) => {
  e.preventDefault()
  isDragging.value = true
  startPosition.value.x = e.clientX
  if (contentRef.value) {
    startScroll.value.x = contentRef.value.scrollLeft
  }
  document.addEventListener('mousemove', handleHorizontalDrag)
  document.addEventListener('mouseup', handleDragEnd)
}

const handleVerticalDrag = (e: MouseEvent) => {
  if (!isDragging.value || !containerRef.value || !contentRef.value) return

  const deltaY = e.clientY - startPosition.value.y
  const containerHeight = containerRef.value.clientHeight
  const contentHeight = contentRef.value.scrollHeight
  const scrollRatio =
    (contentHeight - containerHeight) /
    (containerHeight - parseFloat(verticalThumbHeight.value))

  contentRef.value.scrollTop = startScroll.value.y + deltaY * scrollRatio
}

const handleHorizontalDrag = (e: MouseEvent) => {
  if (!isDragging.value || !containerRef.value || !contentRef.value) return

  const deltaX = e.clientX - startPosition.value.x
  const containerWidth = containerRef.value.clientWidth
  const contentWidth = contentRef.value.scrollWidth
  const scrollRatio =
    (contentWidth - containerWidth) /
    (containerWidth - parseFloat(horizontalThumbWidth.value))

  contentRef.value.scrollLeft = startScroll.value.x + deltaX * scrollRatio
}

const handleDragEnd = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', handleVerticalDrag)
  document.removeEventListener('mousemove', handleHorizontalDrag)
  document.removeEventListener('mouseup', handleDragEnd)
  handleMouseLeave()
}

onMounted(() => {
  if (contentRef.value) {
    contentRef.value.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (contentRef.value) {
    contentRef.value.removeEventListener('scroll', handleScroll)
  }
  if (hideTimer.value) {
    clearTimeout(hideTimer.value)
  }
})
</script>

<template>
  <div
    ref="containerRef"
    class="scrollbar"
    :style="{ width, height }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      ref="contentRef"
      class="scrollbar-content"
      :class="{
        'with-vertical': showVertical,
        'with-horizontal': showHorizontal,
      }"
    >
      <slot></slot>
    </div>

    <div
      v-if="showVertical"
      class="scrollbar-track vertical"
      :style="{ backgroundColor: trackColor }"
    >
      <div
        ref="verticalThumbRef"
        class="scrollbar-thumb"
        :class="{ visible: showScrollbar || isDragging }"
        :style="{
          height: verticalThumbHeight,
          transform: `translateY(${verticalThumbPosition})`,
          backgroundColor: thumbColor,
          '--hover-color': thumbHoverColor,
        }"
        @mousedown="handleVerticalDragStart"
      />
    </div>

    <div
      v-if="showHorizontal"
      class="scrollbar-track horizontal"
      :style="{ backgroundColor: trackColor }"
    >
      <div
        ref="horizontalThumbRef"
        class="scrollbar-thumb"
        :class="{ visible: showScrollbar || isDragging }"
        :style="{
          width: horizontalThumbWidth,
          transform: `translateX(${horizontalThumbPosition})`,
          backgroundColor: thumbColor,
          '--hover-color': thumbHoverColor,
        }"
        @mousedown="handleHorizontalDragStart"
      />
    </div>
  </div>
</template>

<style src="../style/index.css" scoped></style>
