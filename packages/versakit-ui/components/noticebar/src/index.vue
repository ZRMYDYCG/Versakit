<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { NoticeBarProps } from '../type/index.ts'

const props = withDefaults(defineProps<NoticeBarProps>(), {
  type: 'info',
  closable: false,
  scrollable: false,
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

const handleClose = () => {
  visible.value = false
  emit('close')
}

const startScroll = () => {
  if (!props.scrollable || !containerRef.value || !contentRef.value) return

  const containerWidth = containerRef.value.offsetWidth
  const contentWidth = contentRef.value.offsetWidth

  if (contentWidth > containerWidth) {
    isScrollable.value = true
    let position = containerWidth

    scrollTimer = window.setInterval(() => {
      position--
      if (position < -contentWidth) {
        position = containerWidth
      }
      if (contentRef.value) {
        contentRef.value.style.transform = `translateX(${position}px)`
      }
    }, props.speed)
  }
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
    <div v-if="visible" class="notice-bar" :class="[`notice-bar-${type}`]">
      <div class="notice-bar-icon">
        {{ typeIcon }}
      </div>

      <div
        ref="containerRef"
        class="notice-bar-content"
        :class="{ 'is-scrollable': isScrollable }"
      >
        <span
          ref="contentRef"
          :class="{ 'notice-bar-scrollable': isScrollable }"
        >
          {{ text }}
        </span>
      </div>

      <div v-if="closable" class="notice-bar-close" @click="handleClose">✕</div>
    </div>
  </transition>
</template>

<style scoped>
@import '../style/index.css';
</style>
