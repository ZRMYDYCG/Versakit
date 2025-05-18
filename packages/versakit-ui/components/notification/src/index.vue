<template>
  <transition name="slide-fade" @after-leave="props.destroy">
    <div
      v-show="isVisible"
      :class="vkClass"
      :style="positionStyle"
      role="alert"
      aria-live="polite"
    >
      <div class="vk-notification-top">
        <VKIcon :size="25" :color="iconColor" :name="icon" aria-hidden="true" />
        <h2 class="vk-notification-title">{{ title }}</h2>
      </div>
      <div class="vk-notification-content">
        <span>{{ content }}</span>
      </div>
      <div
        class="vk-notification-closebtn"
        @click="handleClose"
        aria-label="关闭通知"
      >
        <VKIcon name="cross" aria-hidden="true" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { VKIcon } from '@versakit/icons'
import type { NotifivationProps } from '../type/index'

defineOptions({ name: 'VKNotification' })

const props = withDefaults(defineProps<NotifivationProps>(), {
  type: 'info',
  plain: false,
  title: '',
  icon: '',
  content: '',
  duration: 3000,
  offset: 25,
  position: 'top-right',
  destroy: () => {},
})

const height = ref(0)
const isVisible = ref(false)

const iconColor = computed(() => {
  switch (props.type) {
    case 'success':
      return '#4ade80'
    case 'warn':
      return 'orange'
    case 'error':
      return 'red'
    default:
      return 'gray'
  }
})

const positionStyle = computed(() => {
  const baseOffset = `${props.offset}px`
  const style: Record<string, string> = {}

  if (props.position.includes('top')) {
    style.top = baseOffset
  } else {
    style.bottom = baseOffset
  }

  if (props.position.includes('left')) {
    style.left = baseOffset
  } else {
    style.right = baseOffset
  }

  return style
})

const handleClose = () => {
  isVisible.value = false
}

const vkClass = computed(() => {
  return [
    'vk-notification',
    props.plain ? `vk-notification-${props.type}-plain` : '',
  ]
})

onMounted(() => {
  isVisible.value = true
  setTimeout(() => {
    isVisible.value = false
  }, props.duration)
})

defineExpose({
  height,
})
</script>

<style>
@import '../style/index.css';
</style>
