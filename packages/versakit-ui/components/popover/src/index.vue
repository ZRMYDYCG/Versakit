<template>
  <div class="ver-popover" ref="popoverRef">
    <div
      class="ver-popover__trigger"
      @click="trigger === 'click' && togglePopover()"
      @mouseenter="trigger === 'hover' && showPopover()"
      @mouseleave="trigger === 'hover' && hidePopover()"
    >
      <slot></slot>
    </div>
    <div
      v-show="visible"
      class="ver-popover__content"
      :style="contentStyle"
      :class="[placement]"
    >
      <div v-if="title" class="ver-popover__title">{{ title }}</div>
      <div class="ver-popover__body">
        <slot name="content">{{ content }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { PopoverProps } from '../type'

defineOptions({
  name: 'VerPopover',
})

const props = withDefaults(defineProps<PopoverProps>(), {
  trigger: 'click',
  placement: 'bottom',
  width: 150,
  visible: false,
})

const visible = ref(props.visible)
const popoverRef = ref<HTMLElement>()

const contentStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
}))

const showPopover = () => {
  visible.value = true
}

const hidePopover = () => {
  visible.value = false
}

const togglePopover = () => {
  visible.value = !visible.value
}
</script>

<style>
@import '../style/index.css';
</style>
