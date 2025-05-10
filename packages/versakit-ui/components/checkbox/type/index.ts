export interface CheckboxProps {
  modelValue?: boolean | string[]
  label?: string
  disabled?: boolean
  indeterminate?: boolean
  value?: string
  name?: string
  unstyled?: boolean
  pt?: CheckboxPtProps
}

export interface CheckboxPtProps {
  root?: string | Record<string, any>
}

export interface CheckboxGroupProps {
  modelValue: string[]
  disabled?: boolean
  unstyled?: boolean
  pt?: CheckboxGroupPtProps
}

export interface CheckboxGroupPtProps {
  root?: string | Record<string, any>
}

export interface CheckboxGroupContext {
  modelValue: string[]
  disabled?: boolean
  onChange: (value: string[]) => void
}
