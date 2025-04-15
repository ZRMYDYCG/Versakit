<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import type { NoticeBarProps } from '../type/index.ts'

defineOptions({
  name: 'VKNoticeBar', // 修改组件名称为 VKNoticeBar
})

const props = withDefaults(defineProps<NoticeBarProps>(), {
  type: 'info',
  closable: false,
  scrollable: false,
  direction: 'horizontal',
  speed: 50,
})

const emit = defineEmits<{
  close: []
}>()

const visible = ref(true)
const containerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const isScrollable = ref(false)
let scrollTimer: number | null = null

const typeIcon = computed(() => {
  if (props.icon) return props.icon

  const icons = {
    info: '📢',
    success: '✅',
    warning: '⚠️',
    error: '❌',
  }
  return icons[props.type]
})

const currentIndex = ref(0)
const texts = computed(() => {
  return Array.isArray(props.text) ? props.text : [props.text]
})

const handleClose = () => {
  visible.value = false
  emit('close')
}

const checkScrollable = () => {
  if (!containerRef.value || !contentRef.value) return false

  const containerWidth = containerRef.value.offsetWidth
  const contentWidth = contentRef.value.offsetWidth

  return contentWidth > containerWidth
}

const startHorizontalScroll = () => {
  if (!containerRef.value || !contentRef.value) return

  const containerWidth = containerRef.value.offsetWidth
  const contentWidth = contentRef.value.offsetWidth

  if (contentWidth > containerWidth) {
    isScrollable.value = true
    let position = 0

    scrollTimer = window.setInterval(() => {
      position--
      if (position < -(contentWidth + 50)) {
        position = containerWidth
      }
      if (contentRef.value) {
        contentRef.value.style.transform = `translateX(${position}px)`
      }
    }, props.speed)
  }
}

const startVerticalScroll = () => {
  if (texts.value.length <= 1) return

  isScrollable.value = true
  scrollTimer = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % texts.value.length
  }, props.speed * 50)
}

const startScroll = () => {
  if (!props.scrollable || !containerRef.value || !contentRef.value) return

  nextTick(() => {
    if (props.direction === 'horizontal') {
      if (checkScrollable()) {
        startHorizontalScroll()
      }
    } else {
      if (texts.value.length > 1) {
        startVerticalScroll()
      }
    }
  })
}

onMounted(() => {
  startScroll()
})

onUnmounted(() => {
  if (scrollTimer) {
    clearInterval(scrollTimer)
  }
})
</script>

<template>
  <transition name="notice-bar">
    <div
      v-if="visible"
      class="notice-bar"
      :class="[`notice-bar-${type}`]"
      role="alert"
      aria-live="polite"
    >
      <div class="notice-bar-icon">
        {{ typeIcon }}
      </div>

      <div
        ref="containerRef"
        class="notice-bar-content"
        :class="{
          'is-scrollable': isScrollable,
          'is-vertical': direction === 'vertical',
        }"
      >
        <template v-if="direction === 'horizontal'">
          <span
            ref="contentRef"
            :class="{ 'notice-bar-scrollable': isScrollable }"
            :style="{
              'padding-left': isScrollable ? '100%' : '0',
            }"
          >
            {{ texts[0] }}
          </span>
        </template>

        <template v-else>
          <transition-group name="notice-bar-vertical">
            <span
              v-for="(item, index) in texts"
              :key="index"
              v-show="currentIndex === index"
              class="notice-bar-vertical-item"
            >
              {{ item }}
            </span>
          </transition-group>
        </template>
      </div>

      <div v-if="closable" class="notice-bar-close" @click="handleClose">✕</div>
    </div>
  </transition>
</template>

<style scoped>
@import '../style/index.css';
</style>
