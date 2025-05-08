<template>
  <div
    v-if="visible"
    :class="vkClass"
    :style="backTopStyle"
    @click.stop="handleClick"
    role="button"
    aria-label="回到顶部"
  >
    <VKIcon v-if="icon != ''" :name="icon" :color="iconColor" size="26" />
    <span v-else>
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { VKIcon } from '@versakit/icons'
import { computed, ref, onMounted, shallowRef, onUnmounted } from 'vue'
import type { BackTopProps } from '../type/index'

const props = withDefaults(defineProps<BackTopProps>(), {
  right: '60',
  bottom: '40',
  icon: '',
  iconColor: '#8b5cf6',
  visibilityHeight: '150',
  unstyled: false,
})

const iconColor = computed(() => props.iconColor || '#8b5cf6')

const vkClass = computed(() => {
  if (props.unstyled) {
    return getPtClass('root')
  }
  return 'vk-backtop'
})

const backTopStyle = computed(() => ({
  right: `${props.right}px`,
  bottom: `${props.bottom}px`,
}))

const el = shallowRef<HTMLElement | null>(null)
// 移除未使用的container变量
const visible = ref(false)

const handleClick = () => {
  el.value?.scrollTo({ top: 0, behavior: 'smooth' })
}

let scrollTimer: number | null = null
const handleScroll = () => {
  if (scrollTimer) return
  scrollTimer = window.setTimeout(() => {
    if (el.value) {
      visible.value = el.value.scrollTop >= parseInt(props.visibilityHeight)
    }
    scrollTimer = null
  }, 300)
}

// 组件无头化处理
const getPtClass = (key: keyof NonNullable<BackTopProps['pt']>) => {
  const ptVal = props.pt?.[key]
  return typeof ptVal === 'string' ? ptVal : ''
}

onMounted(() => {
  el.value = document.documentElement
  handleScroll()
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
  if (scrollTimer) {
    clearTimeout(scrollTimer)
  }
})
</script>

<style>
@import '../style/index.css';
</style>
