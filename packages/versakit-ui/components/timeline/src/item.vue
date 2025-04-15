<script setup lang="ts">
import { inject, computed } from 'vue'
import type { TimelineItemProps } from '../type/index'

const props = withDefaults(defineProps<TimelineItemProps>(), {
  color: '#1890ff',
  position: 'left',
})

const timeline = inject('timeline', { mode: 'left' })

const itemPosition = computed(() => {
  if (props.position) return props.position
  if (timeline.mode === 'alternate') {
    return 'left'
  }
  return timeline.mode
})
</script>

<template>
  <div
    class="timeline-item"
    :class="[`timeline-item-${itemPosition}`]"
    role="listitem"
    aria-label="Timeline Item"
  >
    <div v-if="label" class="timeline-item-label">
      {{ label }}
    </div>
    <div class="timeline-item-tail"></div>
    <div class="timeline-item-head" :style="{ borderColor: color }">
      <slot name="dot">
        <span v-if="dot" class="timeline-item-custom-head" :style="{ color }">
          {{ dot }}
        </span>
      </slot>
    </div>
    <div class="timeline-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  position: relative;
  margin: 0;
  padding-bottom: 20px;
  display: flex;
  align-items: flex-start;
}

.timeline-item-left {
  padding-left: 50%;
}

.timeline-item-right {
  padding-right: 50%;
  flex-direction: row-reverse;
}

.timeline-item-label {
  position: absolute;
  top: -2px;
  width: calc(50% - 12px);
  text-align: right;
  color: var(--vk-neutral-500, #999); /* 使用 VK 前缀变量 */
}

.timeline-item-right .timeline-item-label {
  right: calc(50% + 12px);
  text-align: left;
}

.timeline-item-tail {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  height: calc(100% - 10px);
  border-left: 2px solid var(--vk-neutral-200, #e8e8e8); /* 使用 VK 前缀变量 */
  z-index: 1;
}

.timeline-item-head {
  width: 10px;
  height: 10px;
  background-color: #fff;
  border: 2px solid transparent;
  border-radius: 100px;
  margin-left: -6px;
  z-index: 2;
}

.timeline-item-right .timeline-item-head {
  margin-left: auto;
  margin-right: -6px;
}

.timeline-item-custom-head {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  line-height: 1;
}

.timeline-item-content {
  position: relative;
  flex: 1;
  margin: 0 0 0 20px;
  word-break: break-word;
}

.timeline-item-right .timeline-item-content {
  margin: 0 20px 0 0;
  text-align: right;
}

.timeline-item:last-child .timeline-item-tail {
  display: none;
}
</style>
