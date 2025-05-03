<template>
  <transition name="fade" @after-leave="afterLeave">
    <div
      v-show="props.modelValue"
      v-bind="{}"
      :class="
        props.unstyled
          ? pt.wrapper
          : ['vk-drawer-wrapper', `vk-drawer-${props.direction}`]
      "
      :style="{}"
      role="dialog"
      aria-modal="true"
      aria-label="抽屉"
      @click.self="handleClose"
      @keydown.esc="handleClose"
      tabindex="-1"
      ref="drawerRef"
    >
      <div
        v-bind="{}"
        :class="props.unstyled ? pt.drawer : 'vk-drawer'"
        :style="drawerStyle"
        role="document"
      >
        <div
          v-bind="{}"
          :class="props.unstyled ? pt.header : 'vk-drawer_header'"
          :style="{}"
        >
          <span
            v-bind="{}"
            :class="props.unstyled ? pt.title : 'vk-drawer_title'"
            :style="{}"
            id="drawer-title"
          >
            {{ props.title || '标题' }}
          </span>
          <button
            v-bind="{}"
            :class="props.unstyled ? pt.closeBtn : 'vk-drawer_headerbtn'"
            :style="{}"
            @click="handleClose"
            aria-label="关闭抽屉"
          >
            <VKIcon :name="props.closeIcon || 'close'" />
          </button>
        </div>
        <div
          v-bind="{}"
          :class="props.unstyled ? pt.body : 'vk-drawer_body'"
          :style="{}"
          aria-labelledby="drawer-title"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { VKIcon } from '@versakit/icons'

// PtProps 支持字符串类型

import type { DrawerProps, PtProps } from '../type/index'

defineOptions({ name: 'VKDrawer' })

// Props, pt 默认空对象
const props = withDefaults(defineProps<DrawerProps & { pt?: PtProps }>(), {
  modelValue: false,
  direction: 'left',
  closeIcon: '',
  width: '30%',
  height: '30%',
  lockScroll: true,
  unstyled: false,
  pt: () => ({}),
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])

// 读取并归一化 pt
const pt = computed<Record<keyof PtProps, string>>(() => {
  const p = props.pt ?? {}
  return {
    wrapper: p.wrapper || '',
    drawer: p.drawer || '',
    header: p.header || '',
    title: p.title || '',
    closeBtn: p.closeBtn || '',
    body: p.body || '',
  }
})

// 其他逻辑
const drawerRef = ref<HTMLElement | null>(null)
const previousActiveElement = ref<HTMLElement | null>(null)

const drawerStyle = computed(() => ({
  width: ['left', 'right'].includes(props.direction!) ? props.width! : '100%',
  height: ['top', 'bottom'].includes(props.direction!) ? props.height! : '100%',
}))

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const open = () => {
  emit('open')
  previousActiveElement.value = document.activeElement as HTMLElement
  nextTick(() => drawerRef.value?.focus())
}

const afterLeave = () => previousActiveElement.value?.focus()

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
    outer.remove()
    width = widthNoScroll - widthWithScroll
    return width
  }
})()

const lockScrollHandler = () => {
  if (props.lockScroll) {
    if (props.modelValue) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${getScrollBarWidth()}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }
}

watch(
  () => props.modelValue,
  (val) => {
    if (val) open()
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

<style scoped>
@import '../style/index.css';
</style>
