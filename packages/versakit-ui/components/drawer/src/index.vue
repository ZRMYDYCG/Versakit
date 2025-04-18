<template>
  <teleport to="body">
    <transition name="fade" @after-leave="afterLeave">
      <div
        v-show="props.modelValue"
        :class="['vk-drawer-wrapper', `vk-drawer-${props.direction}`]"
        role="dialog"
        aria-modal="true"
        aria-label="抽屉"
        @click.self="handleClose"
        @keydown.esc="handleClose"
        tabindex="-1"
        ref="drawerRef"
      >
        <div class="vk-drawer" role="document" :style="drawerStyle">
          <div class="vk-drawer_header">
            <span class="vk-drawer_title" id="drawer-title">
              {{ props.title || '标题' }}
            </span>
            <button
              class="vk-drawer_headerbtn"
              @click="handleClose"
              aria-label="关闭抽屉"
            >
              <VKIcon :name="closeIcon || 'close'" />
            </button>
          </div>
          <div class="vk-drawer_body" aria-labelledby="drawer-title">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { DrawerProps } from '../type/type'
import { VKIcon } from '@versakit/icons'

defineOptions({ name: 'VKDrawer' })

const props = withDefaults(defineProps<DrawerProps>(), {
  modelValue: false,
  direction: 'left',
  closeIcon: '',
  width: '30%',
  height: '30%',
  lockScroll: true,
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])

const drawerRef = ref<HTMLElement | null>(null)
const previousActiveElement = ref<HTMLElement | null>(null)

const drawerStyle = computed(() => ({
  width: ['left', 'right'].includes(props.direction) ? props.width : '100%',
  height: ['top', 'bottom'].includes(props.direction) ? props.height : '100%',
}))

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const open = () => {
  emit('open')
  previousActiveElement.value = document.activeElement as HTMLElement
  nextTick(() => {
    drawerRef.value?.focus()
  })
}

const afterLeave = () => {
  if (previousActiveElement.value) {
    previousActiveElement.value.focus()
  }
}

// 优化滚动条宽度计算函数，使用缓存避免重复计算
const getScrollBarWidth = (() => {
  let width: number | null = null

  return () => {
    if (width !== null) return width

    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.width = '100px'
    outer.style.position = 'absolute'
    outer.style.top = '-9999px'
    document.body.appendChild(outer)

    const widthNoScroll = outer.offsetWidth
    outer.style.overflow = 'scroll'

    const inner = document.createElement('div')
    inner.style.width = '100%'
    outer.appendChild(inner)

    const widthWithScroll = inner.offsetWidth
    outer.parentNode?.removeChild(outer)

    width = widthNoScroll - widthWithScroll
    return width
  }
})()

const lockScrollHandler = () => {
  if (props.lockScroll) {
    if (props.modelValue) {
      const scrollBarWidth = getScrollBarWidth()
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }
}

// 监听显示状态
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      open()
    }
    lockScrollHandler()
  },
)

// 优化生命周期钩子
onMounted(() => {
  if (props.modelValue) {
    open()
    lockScrollHandler()
  }
})

onBeforeUnmount(() => {
  // 确保组件卸载时恢复滚动状态
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
})
</script>

<style>
@import '../style/index.css';
</style>
