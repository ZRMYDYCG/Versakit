<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { Props } from '../type/index'

defineOptions({ name: 'VKTooltip' })

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  color: '#fff',
  backgroundColor: '#333',
})

const tooltipRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const showTooltip = ref(false)

// 优化性能：使用缓存的位置计算函数
const positionCalculators = {
  top: (tooltip: DOMRect, content: HTMLElement) => ({
    top: -content.offsetHeight - 8,
    left: (tooltip.width - content.offsetWidth) / 2,
  }),
  'top-left': (tooltip: DOMRect, content: HTMLElement) => ({
    top: -content.offsetHeight - 8,
    left: 0,
  }),
  'top-right': (tooltip: DOMRect, content: HTMLElement) => ({
    top: -content.offsetHeight - 8,
    left: tooltip.width - content.offsetWidth,
  }),
  bottom: (tooltip: DOMRect, content: HTMLElement) => ({
    top: tooltip.height + 8,
    left: (tooltip.width - content.offsetWidth) / 2,
  }),
  'bottom-left': (tooltip: DOMRect) => ({
    top: tooltip.height + 8,
    left: 0,
  }),
  'bottom-right': (tooltip: DOMRect, content: HTMLElement) => ({
    top: tooltip.height + 8,
    left: tooltip.width - content.offsetWidth,
  }),
  left: (tooltip: DOMRect, content: HTMLElement) => ({
    top: (tooltip.height - content.offsetHeight) / 2,
    left: -content.offsetWidth - 8,
  }),
  'left-top': (tooltip: DOMRect, content: HTMLElement) => ({
    top: 0,
    left: -content.offsetWidth - 8,
  }),
  'left-bottom': (tooltip: DOMRect, content: HTMLElement) => ({
    top: tooltip.height - content.offsetHeight,
    left: -content.offsetWidth - 8,
  }),
  right: (tooltip: DOMRect, content: HTMLElement) => ({
    top: (tooltip.height - content.offsetHeight) / 2,
    left: tooltip.width + 8,
  }),
  'right-top': (tooltip: DOMRect) => ({
    top: 0,
    left: tooltip.width + 8,
  }),
  'right-bottom': (tooltip: DOMRect, content: HTMLElement) => ({
    top: tooltip.height - content.offsetHeight,
    left: tooltip.width + 8,
  }),
}

const updatePosition = () => {
  if (!tooltipRef.value || !contentRef.value) return

  const tooltip = tooltipRef.value.getBoundingClientRect()
  const content = contentRef.value

  // 使用缓存的计算函数获取位置
  const calculator = positionCalculators[props.position]
  const pos = calculator(tooltip, content)

  content.style.top = `${pos.top}px`
  content.style.left = `${pos.left}px`
}

onMounted(() => {
  window.addEventListener('resize', updatePosition)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updatePosition)
})
</script>

<template>
  <div
    ref="tooltipRef"
    class="vk-tooltip"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
    role="tooltip"
    aria-hidden="false"
  >
    <slot></slot>
    <transition name="vk-tooltip" @enter="updatePosition">
      <div
        v-show="showTooltip"
        ref="contentRef"
        class="vk-tooltip-content"
        :class="position"
        :style="{
          color,
          backgroundColor,
          '--bg-color': backgroundColor,
        }"
        aria-live="polite"
      >
        {{ content }}
      </div>
    </transition>
  </div>
</template>

<style>
@import '../style/index.css';
</style>
