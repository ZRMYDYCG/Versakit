export interface InputNumberProps {
  modelValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  placeholder?: string
  controls?: boolean // 是否显示控制按钮
  precision?: number // 精度，小数点位数
}

export interface InputNumberEmits {
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}
