export interface PtProps {
  /* backTop容器的自定义类名 */
  root?: string
}

export interface BackTopProps {
  right?: string
  bottom?: string
  visibleHeight?: string
  icon?: string
  iconColor?: string
  visibilityHeight?: string
  /** 是否禁用默认样式 */
  unstyled?: boolean
  pt?: PtProps
}
export const BacktopEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type BacktopEmits = typeof BacktopEmits
