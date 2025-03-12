export interface CheckoutProps {
  modelValue?: boolean | string[]
  label?: string
  disabled?: boolean
  indeterminate?: boolean
  value?: string
  name?: string
}

export interface CheckoutGroupProps {
  modelValue: string[]
  disabled?: boolean
}
