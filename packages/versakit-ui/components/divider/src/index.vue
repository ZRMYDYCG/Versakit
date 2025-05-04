<template>
  <div
    class="vk-divider"
    :class="[
      { 'vk-vertical': props.direction === 'vertical' },
      { 'vk-unstyled': props.unstyled },
      props.pt?.root,
    ]"
    :style="
      !props.unstyled
        ? {
            'justify-content': props.position,
            'border-top': `1px ${props.line} #dcdfe6`,
          }
        : undefined
    "
  >
    <div
      class="vk-divider-title"
      v-if="props.position"
      :class="props.pt?.title"
    >
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
  unstyled: false,
  pt: () => ({}),
})
</script>

<style>
@import '../style/index.css';

.vk-unstyled {
  all: unset;
  display: block;
}
</style>
