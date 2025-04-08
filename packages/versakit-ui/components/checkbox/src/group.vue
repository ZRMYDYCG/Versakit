<script setup lang="ts">
import { provide } from 'vue'
import type { CheckboxGroupProps, CheckboxGroupContext } from '../type'

defineOptions({
  name: 'VerCheckboxGroup',
})

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
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

provide<CheckboxGroupContext>('checkboxGroup', {
  modelValue: props.modelValue,
  disabled: props.disabled,
  onChange,
})
</script>

<template>
  <div class="ver-checkbox-group">
    <slot></slot>
  </div>
</template>

<style>
@import '../style/index.css';
</style>
