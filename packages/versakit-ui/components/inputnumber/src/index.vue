<script setup lang="ts">
import { computed, ref } from 'vue'
import type { InputNumberProps, InputNumberEmits } from '../type/index'

defineOptions({
  name: 'VerInputNumber',
})

const props = withDefaults(defineProps<InputNumberProps>(), {
  modelValue: 0,
  min: -Infinity,
  max: Infinity,
  step: 1,
  disabled: false,
  controls: true,
  precision: undefined,
})

const emit = defineEmits<InputNumberEmits>()

const inputValue = ref(props.modelValue)

// 格式化数值
const formatValue = (value: number): number => {
  if (typeof props.precision === 'number') {
    return Number(value.toFixed(props.precision))
  }
  return value
}

// 验证并限制数值范围
const validateValue = (value: number): number => {
  if (isNaN(value)) return props.min ?? 0
  if (value < props.min) return props.min
  if (value > props.max) return props.max
  return formatValue(value)
}

// 处理输入变化
const handleInput = (event: Event) => {
  const value = Number((event.target as HTMLInputElement).value)
  const validValue = validateValue(value)
  inputValue.value = validValue
  emit('update:modelValue', validValue)
  emit('change', validValue)
}

// 增加值
const increase = () => {
  if (props.disabled) return
  const newValue = validateValue(inputValue.value + props.step)
  inputValue.value = newValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

// 减少值
const decrease = () => {
  if (props.disabled) return
  const newValue = validateValue(inputValue.value - props.step)
  inputValue.value = newValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

// 计算是否禁用增加按钮
const isIncreaseDisabled = computed(() => {
  return props.disabled || inputValue.value >= props.max
})

// 计算是否禁用减少按钮
const isDecreaseDisabled = computed(() => {
  return props.disabled || inputValue.value <= props.min
})
</script>

<template>
  <div class="ver-input-number" :class="{ 'is-disabled': disabled }">
    <input
      type="number"
      :value="inputValue"
      :disabled="disabled"
      :placeholder="placeholder"
      class="ver-input-number__input"
      @input="handleInput"
    />
    <div v-if="controls" class="ver-input-number__controls">
      <button
        type="button"
        class="ver-input-number__increase"
        :class="{ 'is-disabled': isIncreaseDisabled }"
        @click="increase"
        :disabled="isIncreaseDisabled"
      >
        +
      </button>
      <button
        type="button"
        class="ver-input-number__decrease"
        :class="{ 'is-disabled': isDecreaseDisabled }"
        @click="decrease"
        :disabled="isDecreaseDisabled"
      >
        -
      </button>
    </div>
  </div>
</template>

<style scoped>
@import url('../style/index.css');
</style>
