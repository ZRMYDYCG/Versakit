<template>
  <div class="ver-popover" ref="popoverRef">
    <div
      class="ver-popover__trigger"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      <slot />
    </div>
    <Transition name="ver-popover-fade">
      <div
        v-show="isVisible"
        class="ver-popover__content"
        :class="[
          `ver-popover__content--${placement}`,
          { 'ver-popover__content--arrow': arrow },
        ]"
        :style="contentStyle"
      >
        <div class="ver-popover__arrow" v-if="arrow"></div>
        <div class="ver-popover__inner">
          <slot name="content">{{ content }}</slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import type { PopoverProps } from '../type'

defineOptions({ name: 'VerPopover' })

const props = withDefaults(defineProps<PopoverProps>(), {
  trigger: 'hover',
  placement: 'top',
  arrow: true,
  openDelay: 0,
  closeDelay: 0,
})

const popoverRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let timeout: number | null = null

const contentStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
}))

const clearTimeout = () => {
  if (timeout) {
    window.clearTimeout(timeout)
    timeout = null
  }
}

const show = () => {
  clearTimeout()
  if (props.openDelay) {
    timeout = window.setTimeout(() => {
      isVisible.value = true
    }, props.openDelay)
  } else {
    isVisible.value = true
  }
}

const hide = () => {
  clearTimeout()
  if (props.closeDelay) {
    timeout = window.setTimeout(() => {
      isVisible.value = false
    }, props.closeDelay)
  } else {
    isVisible.value = false
  }
}

const handleMouseEnter = () => {
  if (props.trigger === 'hover') {
    show()
  }
}

const handleMouseLeave = () => {
  if (props.trigger === 'hover') {
    hide()
  }
}

const handleClick = () => {
  if (props.trigger === 'click') {
    if (isVisible.value) {
      hide()
    } else {
      show()
    }
  }
}

const handleFocus = () => {
  if (props.trigger === 'focus') {
    show()
  }
}

const handleBlur = () => {
  if (props.trigger === 'focus') {
    hide()
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (popoverRef.value && !popoverRef.value?.contains(event.target as Node)) {
    hide()
  }
}

watch(
  () => props.visible,
  (val) => {
    if (props.trigger === 'manual') {
      isVisible.value = val
    }
  },
)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style>
@import '../style/index.css';
</style>
