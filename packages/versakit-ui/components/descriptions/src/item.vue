<template>
  <td v-if="isLabel" class="ver-descriptions-item" :colspan="colspan">
    <div class="ver-descriptions__label">
      <slot name="label" v-if="$slots.label"></slot>
      <template v-else>{{ label }}</template>
    </div>
  </td>
  <td
    v-else-if="isContent"
    class="ver-descriptions-item ver-descriptions__content"
    :colspan="colspan"
  >
    <slot />
  </td>
  <td v-else class="ver-descriptions-item" :colspan="colspan">
    <span class="ver-descriptions__label">{{ label }}</span>
    <span class="ver-descriptions__content">
      <slot />
    </span>
  </td>
</template>

<script setup lang="ts">
import type { DescriptionsItemProps } from '../type'

defineOptions({
  name: 'VerDescriptionsItem',
})

withDefaults(defineProps<DescriptionsItemProps>(), {
  isContent: false,
  isLabel: false,
})
</script>
