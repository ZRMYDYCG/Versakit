<script setup lang="ts">
import { provide } from 'vue'
import type { TimelineProps } from '../type/index'

defineOptions({
  name: 'VKTimeline', // 修改组件名称为 VKTimeline
})

const props = withDefaults(defineProps<TimelineProps>(), {
  reverse: false,
  mode: 'left',
  pending: false,
})

// 提供 timeline 的上下文
provide('timeline', {
  mode: props.mode,
})
</script>

<template>
  <div
    class="timeline"
    role="list"
    aria-label="Timeline Component"
    :class="{
      'timeline-reverse': props.reverse,
      'timeline-pending': props.pending,
    }"
  >
    <slot></slot>
  </div>
</template>

<style src="../style/index.css" scoped></style>
