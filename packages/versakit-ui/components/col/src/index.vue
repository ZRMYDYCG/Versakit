<template>
  <div
    :class="['ver-col', classOptions]"
    :style="colStyle"
    role="gridcell"
    :aria-colspan="props.span"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ColProps } from '../type/index'

defineOptions({ name: 'VerCol' })

const props = withDefaults(defineProps<ColProps>(), {
  span: 24,
  offset: 0,
})

const generateClass = computed(() => {
  const prefix = 'ver-col'
  const size: Array<keyof ColProps> = ['xs', 'sm', 'md', 'lg', 'xl']
  return size.reduce(
    (acc, cur) => {
      if (props[cur]) {
        acc[`${prefix}-${cur}-${props[cur]}`] = true
      }
      return acc
    },
    {} as Record<string, boolean>,
  )
})

const classOptions = computed(() => generateClass.value)

const colStyle = computed(() => {
  const styles: Record<string, string> = {}

  if (
    Object.keys(classOptions.value).length === 0 &&
    props.span <= 24 &&
    props.span % 1 === 0
  ) {
    styles.width = `${(100 / 24) * props.span}%`
  }

  if (props.offset <= 24 && props.offset % 1 === 0) {
    styles.marginLeft = `${(100 / 24) * props.offset}%`
  }

  return styles
})
</script>

<style>
@import '../style/index.css';
</style>
