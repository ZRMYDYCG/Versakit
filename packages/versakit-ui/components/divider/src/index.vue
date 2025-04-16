<template>
  <div
    class="vk-divider"
    :class="{ 'vk-vertical': props.direction === 'vertical' }"
    :style="{
      'justify-content': props.position,
      'border-top': `1px ${props.line} #dcdfe6`,
    }"
  >
    <div class="vk-divider-title" v-if="props.position">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DividerProps } from '../type/index'

defineOptions({ name: 'VkDivider' })

const props = withDefaults(defineProps<DividerProps>(), {
  line: 'solid',
  position: 'left',
  direction: 'horizontal',
})
</script>

<style>
@import '../style/index.css';
</style>
