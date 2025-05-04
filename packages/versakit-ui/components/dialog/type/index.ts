export interface DiaLogProps {
  title?: string
  modelValue?: boolean
  width?: string
  top?: string
  closeIcon?: string
  closeOnEsc?: boolean
  appendToBody?: boolean
  lockScroll?: boolean
  unstyled?: boolean
  pt?: PtProps
}

export interface PtProps {
  wrapper?: string
  dialog?: string
  header?: string
  title?: string
  closeBtn?: string
  body?: string
  footer?: string
}
