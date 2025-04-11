<template>
  <teleport to="body">
    <transition name="fade" @after-leave="afterLeave">
      <div
        v-show="props.modelValue"
        class="ver-dialog_wrapper"
        role="dialog"
        aria-modal="true"
        :aria-label="props.title"
        @click.self="close"
        @keydown.esc="close"
        tabindex="-1"
        ref="dialogRef"
      >
        <div class="ver-dialog" :style="dialogStyle">
          <div class="ver-dialog_header">
            <slot name="title">
              <span class="ver-dialog_title" id="dialog-title">
                {{ props.title }}
              </span>
            </slot>
            <button
              class="ver-dialog_headerbtn"
              @click="close"
              aria-label="关闭对话框"
            >
              <VKIcon :name="closeIcon || 'close'" />
            </button>
          </div>
          <div
            class="ver-dialog_body"
            role="document"
            aria-labelledby="dialog-title"
          >
            <slot></slot>
          </div>
          <div v-if="$slots.footer" class="ver-dialog_footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { DiaLogProps } from '../type/index'
import { VKIcon } from '@versakit/icons'

defineOptions({ name: 'VerDialog' })

const props = withDefaults(defineProps<DiaLogProps>(), {
  title: '标题',
  modelValue: false,
  width: '30%',
  top: '15vh',
  closeIcon: '',
  closeOnEsc: true,
  appendToBody: true,
  lockScroll: true,
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])

const dialogRef = ref<HTMLElement | null>(null)
const previousActiveElement = ref<HTMLElement | null>(null)

// 计算样式
const dialogStyle = computed(() => ({
  width: props.width,
  marginTop: props.top,
}))

// 关闭处理
const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

// 打开时的处理
const open = () => {
  emit('open')
  previousActiveElement.value = document.activeElement as HTMLElement
  nextTick(() => {
    dialogRef.value?.focus()
  })
}

// 关闭后的处理
const afterLeave = () => {
  if (previousActiveElement.value) {
    previousActiveElement.value.focus()
  }
}

// 添加滚动条宽度计算函数
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

// 修改滚动锁定处理函数
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

// 生命周期钩子
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
