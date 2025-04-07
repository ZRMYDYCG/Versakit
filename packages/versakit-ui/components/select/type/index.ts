export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
  children?: SelectOption[]
}

export interface SelectProps {
  /** 绑定值 */
  modelValue?: string | number | (string | number)[]
  /** 是否多选 */
  multiple?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否可清空 */
  clearable?: boolean
  /** 占位符 */
  placeholder?: string
  /** 选项数据 */
  options?: SelectOption[]
  /** 是否可搜索 */
  filterable?: boolean
  /** 自定义类名 */
  class?: string
  /** 自定义样式 */
  style?: Record<string, string>
}

export interface SelectEmits {
  (e: 'update:modelValue', value: string | number | (string | number)[]): void
  (e: 'change', value: string | number | (string | number)[]): void
  (e: 'visible-change', visible: boolean): void
  (e: 'clear'): void
  (e: 'remove-tag', value: string | number): void
}
