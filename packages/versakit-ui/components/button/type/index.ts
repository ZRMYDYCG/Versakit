type BtnType = 'primary' | 'secondary' | 'success' | 'error' | 'warn'

export interface PtProps {
  root?: string | Record<string, any>
  icon?: string | Record<string, any>
  label?: string | Record<string, any>
}

export interface ButtonProps {
  size?: string
  disabled?: boolean
  circle?: boolean
  type?: BtnType | ''
  icon?: string
  variant?: string
  unstyled?: boolean
  pt?: PtProps
}
