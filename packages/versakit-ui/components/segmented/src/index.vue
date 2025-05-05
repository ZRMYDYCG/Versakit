<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue'
import type { SegmentedProps } from '../type/index.ts'

defineOptions({ name: 'VKSegmented' })

const props = defineProps<SegmentedProps>()
const componentId = `segmented-${Math.random().toString(36).slice(2, 11)}`
const labelRefs = ref<HTMLElement[]>([])

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const updateValue = (value: string | number) => {
  emit('update:modelValue', value)
}

const activeIndex = computed(() =>
  props.options.findIndex((option: any) => option.value === props.modelValue),
)

const highlightStyle = computed(() => {
  if (labelRefs.value.length === 0) return {}

  const activeLabel = labelRefs.value[activeIndex.value]
  if (!activeLabel) return {}

  let leftOffset = 0
  for (let i = 0; i < activeIndex.value; i++) {
    const label = labelRefs.value[i]
    if (label) {
      leftOffset += label.offsetWidth
    }
  }

  return {
    transform: `translateX(${leftOffset}px)`,
    width: `${activeLabel.offsetWidth}px`,
  }
})

onMounted(async () => {
  await nextTick()
  labelRefs.value = Array.from(
    document.querySelectorAll(`[data-segmented-id="${componentId}"]`),
  )
})

// 新增 pt 和 unstyled 处理
const { unstyled, pt = {} } = props as any
const rootClass = computed(() => [
  'segmented-control',
  pt.root,
  unstyled ? '' : 'default-root-class',
])
const containerClass = computed(() => [
  'segmented-control-container',
  pt.container,
  unstyled ? '' : 'default-container-class',
])
const highlightClass = computed(() => [
  'segmented-control-highlight',
  pt.highlight,
  unstyled ? '' : 'default-highlight-class',
])
const itemClass = computed(() => [
  'segmented-control-item',
  pt.item,
  unstyled ? '' : 'default-item-class',
])
</script>

<template>
  <div :class="rootClass">
    <div
      :class="containerClass"
      role="radiogroup"
      aria-label="Segmented Control"
    >
      <div :class="highlightClass" :style="highlightStyle" />
      <div
        v-for="(option, index) in props.options"
        :key="option.value"
        :class="itemClass"
      >
        <input
          type="radio"
          :id="`${componentId}-${index}`"
          :name="componentId"
          :value="option.value"
          :checked="props.modelValue === option.value"
          @change="updateValue(option.value)"
          aria-labelledby="`${componentId}-label-${index}`"
        />
        <label
          :for="`${componentId}-${index}`"
          :data-segmented-id="componentId"
          :id="`${componentId}-label-${index}`"
          ref="labelRefs"
        >
          {{ option.label }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 当 unstyled 为 false 时应用的默认样式 */
@media not all and (--unstyled) {
  @import '../style/index.css';
}
</style>
