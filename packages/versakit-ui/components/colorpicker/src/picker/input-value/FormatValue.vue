<template>
  <div class="ver-color-picker-fotmate">
    <div class="ver-color-picker-fotmate-label" ref="targetRef" @click="onShow">
      <span>{{ value }}</span>
      <div class="ver-color-picker-fotmate-arrow" v-if="isNeedSelect"></div>
    </div>
    <Transition>
      <div
        class="ver-color-picker-fotmate-selector"
        ref="selectorRef"
        :style="selectorStyle"
        v-if="isShowSelector"
      >
        <div
          class="ver-color-picker-fotmate-selector-item"
          v-for="option in formatOptions"
          :key="option"
          @click="onFormatChange(option)"
        >
          {{ option }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, unref } from 'vue'
import usePopper from '../../hooks/usePopper'
import { ALPHA_FORMAT_MAP, FORMAT_MAP, FORMAT_VALUE_MAP } from '../../constant'

import type { FormatValueProps } from '../../../type'

const props = withDefaults(defineProps<FormatValueProps>(), {
  value: 'RGBA',
  showAlpha: false,
  options: false,
})

const emit = defineEmits(['change'])

const targetRef = ref<HTMLElement | null>(null)
const selectorRef = ref<HTMLElement | null>(null)
const isShowSelector = ref(false)

const { style: selectorStyle } = usePopper(targetRef, selectorRef, {
  strategy: 'fixed',
  defaultStyle: { zIndex: 2 },
})

const isNeedSelect = computed(
  () => Array.isArray(props.options) && props.options.length > 1,
)

const formatOptions = computed(() => {
  if (!Array.isArray(props.options)) return []

  return props.options
    .map((option) =>
      props.showAlpha ? ALPHA_FORMAT_MAP[option] : FORMAT_MAP[option],
    )
    .filter((v) => !v.includes(props.value))
})

const onShow = () => {
  if (!isNeedSelect.value) return
  isShowSelector.value = true
}

const onFormatChange = (format: string) => {
  emit('change', FORMAT_VALUE_MAP[format])
}

const onAllClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  const currentTarget = unref(targetRef)

  if (
    currentTarget &&
    !currentTarget.isEqualNode(target) &&
    currentTarget.contains(target)
  )
    return

  isShowSelector.value = false
}

onMounted(() => {
  document.addEventListener('mouseup', onAllClick, false)
})

onUnmounted(() => {
  document.removeEventListener('mouseup', onAllClick, false)
})
</script>

<style scoped>
@import '../../../style/FormatValue.css';
</style>
