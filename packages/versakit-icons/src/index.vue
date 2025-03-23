<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { Icon } from '@iconify/vue'
import type { IconsProps } from './type'

const attrs: any = useAttrs()

defineOptions({ name: 'VerIcon', inheritAttrs: false })

const props = withDefaults(defineProps<IconsProps>(), {
  name: '',
  size: 14,
  color: '',
  variant: '',
})

const size = computed(() => `${props.size}px`)
</script>

<template>
  <Icon
    v-bind="attrs"
    :icon="name"
    :style="{
      width: size,
      height: size,
      color: props.color,
    }"
  />
</template>
