export interface TabProps {
  modelValue?: string | number
  type?: 'line' | 'card'
  closable?: boolean
  addable?: boolean
}

export interface TabItemProps {
  label: string
  name: string | number
  disabled?: boolean
}
