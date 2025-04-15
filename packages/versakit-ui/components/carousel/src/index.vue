<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from 'vue'
import type { CarouselProps } from '../type/index.ts'

// 修改组件名称为 VKCarousel
defineOptions({ name: 'VKCarousel' })

// 定义属性并设置默认值
const props = withDefaults(defineProps<CarouselProps>(), {
  autoplay: true,
  interval: 3000,
  showArrows: true,
  showIndicators: true,
  trigger: 'hover',
  direction: 'horizontal',
})

// 使用 ref 定义响应式数据
const items = ref<any[]>([])
const currentIndex = ref(0)
const isHovering = ref(false)
let autoplayTimer: number | null = null

// 注册和注销轮播项
const registerItem = (item: any) => {
  items.value.push(item)
}

const unregisterItem = (uid: number) => {
  const index = items.value.findIndex((item) => item.uid === uid)
  if (index > -1) {
    items.value.splice(index, 1)
  }
}

// 切换到下一张幻灯片
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length
}

// 切换到上一张幻灯片
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + items.value.length) % items.value.length
}

// 跳转到指定幻灯片
const goToSlide = (index: number) => {
  currentIndex.value = index
}

// 开始自动播放
const startAutoplay = () => {
  if (props.autoplay && !isHovering.value && items.value.length > 1) {
    autoplayTimer = window.setInterval(() => {
      nextSlide()
    }, props.interval)
  }
}

// 停止自动播放
const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

// 鼠标进入事件处理
const handleMouseEnter = () => {
  if (props.trigger === 'hover') {
    isHovering.value = true
    stopAutoplay()
  }
}

// 鼠标离开事件处理
const handleMouseLeave = () => {
  if (props.trigger === 'hover') {
    isHovering.value = false
    startAutoplay()
  }
}

// 提供上下文数据
provide('carousel', {
  currentIndex,
  items,
  registerItem,
  unregisterItem,
  direction: props.direction,
})

// 生命周期钩子
onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <div
    class="carousel"
    :class="direction"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    role="region"
    aria-label="Carousel Component"
  >
    <div class="carousel-container">
      <slot></slot>
    </div>

    <!-- 箭头导航 -->
    <template v-if="props.showArrows && items.length > 1">
      <button
        class="carousel-arrow carousel-arrow-prev"
        @click="prevSlide"
        aria-label="Previous Slide"
      >
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            fill="currentColor"
            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
          />
        </svg>
      </button>
      <button
        class="carousel-arrow carousel-arrow-next"
        @click="nextSlide"
        aria-label="Next Slide"
      >
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            fill="currentColor"
            d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
          />
        </svg>
      </button>
    </template>

    <!-- 指示器 -->
    <div
      v-if="props.showIndicators && items.length > 1"
      class="carousel-indicators"
    >
      <button
        v-for="(_, index) in items"
        :key="index"
        class="carousel-indicator"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
        :aria-label="'Go to slide ' + (index + 1)"
      />
    </div>
  </div>
</template>

<style>
@import '../style/index.css';
</style>
