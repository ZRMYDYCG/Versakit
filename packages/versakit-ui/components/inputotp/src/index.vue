<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from 'vue'
import type { InputOtpProps } from '../type/index.ts'

defineOptions({
  name: 'VerInputOtp',
})

const props = withDefaults(defineProps<InputOtpProps>(), {
  length: 6,
  type: 'number',
  placeholder: '○',
  inputClass: '',
  disabled: false,
  autoFocus: true,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  complete: [value: string]
}>()

const inputs = ref<HTMLInputElement[]>([])
const inputValues = ref<string[]>(Array(props.length).fill(''))

// 将输入值转换为数组
const updateInputValues = () => {
  const valueArray = props.modelValue.split('')
  inputValues.value = Array(props.length)
    .fill('')
    .map((_, index) => valueArray[index] || '')
}

// 监听 modelValue 的变化
watch(() => props.modelValue, updateInputValues, { immediate: true })

// 合并所有输入值
const combineValues = () => {
  const value = inputValues.value.join('')
  emit('update:modelValue', value)
  if (value.length === props.length) {
    emit('complete', value)
  }
}

// 处理输入
const handleInput = (index: number, event: Event) => {
  const input = event.target as HTMLInputElement
  const value = input.value

  // 如果是数字类型，过滤非数字字符
  if (props.type === 'number' && !/^\d*$/.test(value)) {
    input.value = inputValues.value[index]
    return
  }

  // 只取最后一个字符
  inputValues.value[index] = value.slice(-1)

  // 自动跳转到下一个输入框
  if (value && index < props.length - 1) {
    nextTick(() => {
      inputs.value[index + 1]?.focus()
    })
  }

  combineValues()
}

// 处理键盘事件
const handleKeydown = (index: number, event: KeyboardEvent) => {
  const input = event.target as HTMLInputElement

  if (event.key === 'Backspace' && !input.value && index > 0) {
    // 当前输入框为空且按下删除键时，跳转到上一个输入框
    inputValues.value[index - 1] = ''
    nextTick(() => {
      inputs.value[index - 1]?.focus()
    })
    combineValues()
  } else if (event.key === 'ArrowLeft' && index > 0) {
    // 左箭头键，跳转到上一个输入框
    inputs.value[index - 1]?.focus()
  } else if (event.key === 'ArrowRight' && index < props.length - 1) {
    // 右箭头键，跳转到下一个输入框
    inputs.value[index + 1]?.focus()
  }
}

// 处理粘贴事件
const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault()
  if (!event.clipboardData) return

  const pastedData = event.clipboardData.getData('text')
  const digits =
    props.type === 'number'
      ? pastedData.replace(/\D/g, '').split('')
      : pastedData.split('')

  inputValues.value = Array(props.length)
    .fill('')
    .map((_, index) => digits[index] || '')

  combineValues()
}

// 处理点击事件
const handleClick = (index: number) => {
  if (props.disabled) return
  inputs.value[index]?.select()
}

// 自动聚焦第一个输入框
const initFocus = () => {
  if (props.autoFocus && !props.disabled) {
    nextTick(() => {
      inputs.value[0]?.focus()
    })
  }
}

// 组件挂载后初始化
onMounted(() => {
  updateInputValues()
  initFocus()
})
</script>

<template>
  <div class="input-otp" :class="{ 'is-disabled': disabled }">
    <input
      v-for="(value, index) in inputValues"
      :key="index"
      ref="inputs"
      v-model="inputValues[index]"
      :type="type === 'number' ? 'tel' : 'text'"
      :class="['input-otp-item', inputClass]"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="1"
      :pattern="type === 'number' ? '[0-9]*' : undefined"
      inputmode="numeric"
      autocomplete="one-time-code"
      @input="handleInput(index, $event)"
      @keydown="handleKeydown(index, $event)"
      @paste="handlePaste"
      @click="handleClick(index)"
    />
  </div>
</template>

<style scoped>
.input-otp {
  display: flex;
  gap: 8px;
  align-items: center;
}

.input-otp.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.input-otp-item {
  width: 40px;
  height: 40px;
  padding: 0;
  font-size: 20px;
  text-align: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: white;
  transition: all 0.3s;
  outline: none;
  caret-color: #1890ff;
}

.input-otp-item:hover:not(:disabled) {
  border-color: #40a9ff;
}

.input-otp-item:focus {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.input-otp-item:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

/* 去除数字输入框的上下箭头 */
.input-otp-item::-webkit-outer-spin-button,
.input-otp-item::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input-otp-item[type='number'] {
  appearance: textfield;
  -moz-appearance: textfield;
}
</style>
