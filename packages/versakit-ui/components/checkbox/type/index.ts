export interface CheckboxProps {
  modelValue?: boolean | string[]
  label?: string
  disabled?: boolean
  indeterminate?: boolean
  value?: string
  name?: string
}

export interface CheckboxGroupProps {
  modelValue: string[]
  disabled?: boolean
}

export interface CheckboxGroupContext {
  modelValue: string[]
  disabled?: boolean
  onChange: (value: string[]) => void
}
