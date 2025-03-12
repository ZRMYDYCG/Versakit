<script setup lang="ts">
import { provide } from 'vue'
import type { CheckoutGroupProps } from '../type/index.ts'

defineOptions({
  name: 'VerCheckboxGroup',
})

const props = withDefaults(defineProps<CheckoutGroupProps>(), {
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
  change: [value: string[]]
}>()

const onChange = (value: string[]) => {
  emit('update:modelValue', value)
  emit('change', value)
}

provide('checkboxGroup', {
  modelValue: props.modelValue,
  disabled: props.disabled,
  onChange,
})
</script>

<template>
  <div class="checkbox-group">
    <slot></slot>
  </div>
</template>

<style scoped>
.checkbox-group {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
