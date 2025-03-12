<script setup lang="ts">
import { computed, inject } from 'vue'
import type { CheckoutProps } from '../type/index.ts'

defineOptions({
  name: 'VerCheckbox',
})

const props = withDefaults(defineProps<CheckoutProps>(), {
  disabled: false,
  indeterminate: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean | string[]]
  change: [value: boolean | string[]]
}>()

const checkboxGroup = inject('checkboxGroup', null)

const isChecked = computed(() => {
  if (checkboxGroup) {
    return (checkboxGroup.modelValue as string[]).includes(
      props.value as string,
    )
  }
  return props.modelValue as boolean
})

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement

  if (checkboxGroup) {
    const groupValue = [...(checkboxGroup.modelValue as string[])]
    const value = props.value as string

    if (target.checked) {
      groupValue.push(value)
    } else {
      const index = groupValue.indexOf(value)
      if (index > -1) {
        groupValue.splice(index, 1)
      }
    }

    checkboxGroup.onChange(groupValue)
  } else {
    emit('update:modelValue', target.checked)
    emit('change', target.checked)
  }
}
</script>

<template>
  <label
    class="checkbox"
    :class="{
      'is-checked': isChecked,
      'is-disabled': disabled,
      'is-indeterminate': indeterminate,
    }"
  >
    <span class="checkbox-input">
      <input
        type="checkbox"
        :checked="isChecked"
        :disabled="disabled"
        :name="name"
        @change="handleChange"
      />
      <span class="checkbox-inner"></span>
    </span>
    <span v-if="label || $slots.default" class="checkbox-label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  margin-right: 16px;
  user-select: none;
}

.checkbox.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.checkbox-input {
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
}

.checkbox-input input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.checkbox.is-disabled .checkbox-input input {
  cursor: not-allowed;
}

.checkbox-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  background-color: #fff;
  transition: all 0.3s;
}

.checkbox-inner::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(15deg) scale(0);
  transition: all 0.2s;
}

.checkbox.is-checked .checkbox-inner {
  background-color: #1890ff;
  border-color: #1890ff;
}

.checkbox.is-checked .checkbox-inner::after {
  transform: rotate(45deg) scale(1);
}

.checkbox.is-indeterminate .checkbox-inner::after {
  top: 7px;
  left: 3px;
  width: 8px;
  height: 0;
  border: 1px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: scale(1);
}

.checkbox-label {
  padding-left: 8px;
  line-height: 1;
}

.checkbox:hover:not(.is-disabled) .checkbox-inner {
  border-color: #1890ff;
}
</style>
