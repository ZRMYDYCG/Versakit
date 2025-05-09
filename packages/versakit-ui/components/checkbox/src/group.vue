<script setup lang="ts">
import { provide, reactive, toRef } from 'vue'
import type { CheckboxGroupProps } from '../type'

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
provide(
  'checkboxGroup',
  reactive({
    modelValue: toRef(props, 'modelValue'),
    disabled: toRef(props, 'disabled'),
    onChange,
  }),
)
</script>

<template>
  <div class="ver-checkbox-group">
    <slot></slot>
  </div>
</template>

<style>
@import '../style/index.css';
</style>
