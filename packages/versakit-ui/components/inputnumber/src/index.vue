<script setup lang="ts">
import { ref, watch, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: -Infinity,
  },
  max: {
    type: Number,
    default: Infinity,
  },
  step: {
    type: Number,
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  precision: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['update:modelValue', 'change'])

const inputValue = ref(props.modelValue)
const inputRef = ref<HTMLInputElement>()

const displayValue = computed(() => {
  return props.precision > 0
    ? inputValue.value.toFixed(props.precision)
    : inputValue.value.toString()
})

const increment = () => {
  const newValue = Number(
    (inputValue.value + props.step).toFixed(props.precision),
  )
  updateValue(Math.min(newValue, props.max))
}

const decrement = () => {
  const newValue = Number(
    (inputValue.value - props.step).toFixed(props.precision),
  )
  updateValue(Math.max(newValue, props.min))
}

const updateValue = (newValue: number) => {
  if (props.disabled) return

  const oldValue = inputValue.value
  inputValue.value = newValue

  if (oldValue !== newValue) {
    emit('update:modelValue', newValue)
    emit('change', newValue)
  }
}

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  if (value === '') {
    updateValue(0)
    return
  }

  const numValue = Number(value)
  if (!isNaN(numValue)) {
    updateValue(Math.min(Math.max(numValue, props.min), props.max))
  }
}

watch(
  () => props.modelValue,
  (val) => {
    inputValue.value = val
  },
)
</script>

<template>
  <div class="input-number">
    <button
      class="input-number__decrease"
      :disabled="disabled || inputValue <= min"
      @click="decrement"
    >
      -
    </button>

    <input
      ref="inputRef"
      class="input-number__input"
      type="text"
      :value="displayValue"
      :disabled="disabled"
      @input="handleInput"
    />

    <button
      class="input-number__increase"
      :disabled="disabled || inputValue >= max"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<style lang="css" scoped>
.input-number {
  display: inline-flex;
  align-items: center;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  overflow: hidden;
}

.input-number__input {
  width: 60px;
  height: 32px;
  padding: 0 8px;
  border: none;
  border-left: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
  text-align: center;
  outline: none;
}

.input-number__input:disabled {
  background-color: #f5f7fa;
  cursor: not-allowed;
}

.input-number__decrease,
.input-number__increase {
  width: 32px;
  height: 32px;
  background: #f5f7fa;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  color: #606266;
}

.input-number__decrease:disabled,
.input-number__increase:disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}

.input-number__decrease {
  border-right: 1px solid #dcdfe6;
}

.input-number__increase {
  border-left: 1px solid #dcdfe6;
}
</style>
