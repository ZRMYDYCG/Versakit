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
              <VerIcon :name="closeIcon || 'close'" />
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
import { VerIcon } from '@versakit/icons'

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

// 处理滚动锁定
const lockScrollHandler = () => {
  if (props.lockScroll) {
    document.body.style.overflow = props.modelValue ? 'hidden' : ''
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
})
</script>

<style>
@import '../style/index.css';
</style>
