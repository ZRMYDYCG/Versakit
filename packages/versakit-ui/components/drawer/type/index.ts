type DirectionType = 'right' | 'left' | 'top' | 'bottom' | ''

export interface PtProps {
  wrapper?: string
  drawer?: string
  header?: string
  title?: string
  closeBtn?: string
  body?: string
}

export interface DrawerProps {
  title?: string
  modelValue?: boolean
  direction?: DirectionType
  closeIcon?: string
  width?: string
  height?: string
  lockScroll?: boolean
  unstyled?: boolean
  pt?: PtProps
}
