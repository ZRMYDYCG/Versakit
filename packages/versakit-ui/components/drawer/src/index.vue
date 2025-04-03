<template>
  <teleport to="body">
    <transition name="fade" @after-leave="afterLeave">
      <div
        v-show="props.modelValue"
        :class="['ver-drawer-wrapper', `ver-drawer-${props.direction}`]"
        role="dialog"
        aria-modal="true"
        :aria-label="props.title"
        @click.self="handleClose"
        @keydown.esc="handleClose"
        tabindex="-1"
        ref="drawerRef"
      >
        <div class="ver-drawer" role="document" :style="drawerStyle">
          <div class="ver-drawer_header">
            <span class="ver-drawer_title" id="drawer-title">
              {{ props.title || '标题' }}
            </span>
            <button
              class="ver-drawer_headerbtn"
              @click="handleClose"
              aria-label="关闭抽屉"
            >
              <VerIcon :name="closeIcon || 'close'" />
            </button>
          </div>
          <div class="ver-drawer_body" aria-labelledby="drawer-title">
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
import { VerIcon } from '@versakit/icons'

defineOptions({ name: 'VerDrawer' })

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

const getScrollBarWidth = () => {
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

  return widthNoScroll - widthWithScroll
}

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

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      open()
    }
    lockScrollHandler()
  },
)

onMounted(() => {
  if (props.modelValue) {
    open()
    lockScrollHandler()
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
})
</script>

<style>
@import '../style/index.css';
</style>
