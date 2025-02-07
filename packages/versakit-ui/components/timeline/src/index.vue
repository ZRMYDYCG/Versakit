<script setup lang="ts">
import { provide } from 'vue'
import type { TimelineProps } from '../type/index'

defineOptions({
  name: 'VerTimeline',
})

const props = withDefaults(defineProps<TimelineProps>(), {
  reverse: false,
  mode: 'left',
  pending: false,
})

provide('timeline', {
  mode: props.mode,
})
</script>

<template>
  <div
    class="timeline"
    :class="{
      'timeline-reverse': reverse,
      'timeline-pending': pending,
    }"
  >
    <slot></slot>
  </div>
</template>

<style src="../style/index.css" scoped></style>
