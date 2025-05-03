<template>
  <teleport to="body">
    <transition name="fade" @after-leave="afterLeave">
      <div
        v-show="props.modelValue"
        :class="[
          props.unstyled ? '' : 'vk-dialog_wrapper',
          getPtClass('wrapper'),
        ]"
        role="dialog"
        aria-modal="true"
        aria-label="对话框"
        @click.self="close"
        @keydown.esc="close"
        tabindex="-1"
        ref="dialogRef"
      >
        <div
          :class="[props.unstyled ? '' : 'vk-dialog', getPtClass('dialog')]"
          :style="dialogStyle"
        >
          <div
            :class="[
              props.unstyled ? '' : 'vk-dialog_header',
              getPtClass('header'),
            ]"
          >
            <slot name="title">
              <span
                :class="[
                  props.unstyled ? '' : 'vk-dialog_title',
                  getPtClass('title'),
                ]"
                id="dialog-title"
              >
                {{ props.title }}
              </span>
            </slot>
            <button
              type="button"
              :class="[
                props.unstyled ? '' : 'vk-dialog_headerbtn',
                getPtClass('closeBtn'),
              ]"
              @click="close"
              aria-label="关闭对话框"
            >
              <VKIcon :name="closeIcon || 'close'" />
            </button>
          </div>
          <div
            :class="[
              props.unstyled ? '' : 'vk-dialog_body',
              getPtClass('body'),
            ]"
            role="document"
            aria-labelledby="dialog-title"
          >
            <slot></slot>
          </div>
          <div
            v-if="$slots.footer"
            :class="[
              props.unstyled ? '' : 'vk-dialog_footer',
              getPtClass('footer'),
            ]"
          >
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { DiaLogProps } from '../type/index'
import { VKIcon } from '@versakit/icons'

defineOptions({ name: 'VKDialog' })

const props = withDefaults(defineProps<DiaLogProps>(), {
  title: '标题',
  modelValue: false,
  width: '30%',
  top: '15vh',
  closeIcon: '',
  closeOnEsc: true,
  appendToBody: true,
  lockScroll: true,
  unstyled: false,
  pt: () => ({}),
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])

const dialogRef = ref<HTMLElement | null>(null)
const previousActiveElement = ref<HTMLElement | null>(null)

const dialogStyle = computed(() => ({
  width: props.width,
  marginTop: props.top,
}))

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const open = () => {
  emit('open')
  previousActiveElement.value = document.activeElement as HTMLElement
  nextTick(() => {
    dialogRef.value?.focus()
  })
}

const afterLeave = () => {
  previousActiveElement.value?.focus()
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
  outer.remove()

  return widthNoScroll - widthWithScroll
}

const lockScrollHandler = () => {
  if (!props.lockScroll) return
  if (props.modelValue) {
    const scrollBarWidth = getScrollBarWidth()
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollBarWidth}px`
  } else {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
}

// 提取 pt 类名
const getPtClass = (key: keyof NonNullable<DiaLogProps['pt']>) => {
  const ptVal = props.pt?.[key]
  return typeof ptVal === 'string' ? ptVal : ''
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

<style>
@import '../style/index.css';
</style>
