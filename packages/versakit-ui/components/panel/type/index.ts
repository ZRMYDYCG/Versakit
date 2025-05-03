export type PanelShadow = 'always' | 'hover' | 'never'

export interface PtProps {
  root?: string | string[] | Record<string, boolean | string>
}

export interface PanelProps {
  /** 面板阴影显示时机 */
  shadow?: PanelShadow
  /** 是否不使用内置样式 */
  unstyled?: boolean
  /** 可传递类名 */
  pt?: PtProps
}
