type BtnType = 'primary' | 'secondary' | 'success' | 'error' | 'warn'

export interface ButtonProps {
  size?: string
  disabled?: boolean
  circle?: boolean
  type?: BtnType | ''
  icon?: string
  variant?: string
}
