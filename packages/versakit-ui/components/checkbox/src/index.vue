<script setup lang="ts">
import { computed, inject } from 'vue'
import type { CheckboxProps, CheckboxGroupContext } from '../type'

defineOptions({
  name: 'VerCheckbox',
})

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  disabled: false,
  indeterminate: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean | string[]]
  change: [value: boolean | string[]]
}>()

// 注入 CheckboxGroup 上下文
const checkboxGroup = inject<CheckboxGroupContext | null>('checkboxGroup', null)

// 计算是否选中
const isChecked = computed(() => {
  if (checkboxGroup) {
    return checkboxGroup.modelValue.includes(props.value as string)
  }
  return props.modelValue as boolean
})

// 计算是否禁用
const isDisabled = computed(() => {
  return props.disabled || (checkboxGroup?.disabled ?? false)
})

// 处理变更事件
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement

  if (checkboxGroup) {
    // 在 CheckboxGroup 中的处理逻辑
    const groupValue = [...checkboxGroup.modelValue]
    const value = props.value as string

    if (target.checked) {
      if (!groupValue.includes(value)) {
        groupValue.push(value)
      }
    } else {
      const index = groupValue.indexOf(value)
      if (index > -1) {
        groupValue.splice(index, 1)
      }
    }

    checkboxGroup.onChange(groupValue)
  } else {
    // 独立 Checkbox 的处理逻辑
    emit('update:modelValue', target.checked)
    emit('change', target.checked)
  }
}
</script>

<template>
  <label
    class="ver-checkbox"
    :class="{
      'is-checked': isChecked,
      'is-disabled': isDisabled,
      'is-indeterminate': indeterminate,
    }"
  >
    <span class="ver-checkbox__input">
      <input
        type="checkbox"
        :checked="isChecked"
        :disabled="isDisabled"
        :name="name"
        :value="value"
        @change="handleChange"
      />
      <span class="ver-checkbox__inner"></span>
    </span>
    <span v-if="label || $slots.default" class="ver-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style>
@import '../style/index.css';
</style>
