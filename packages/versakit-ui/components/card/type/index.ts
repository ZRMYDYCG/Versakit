export type ShadowType = 'always' | 'hover' | 'never'

export interface PtProps {
  /** 卡片容器的自定义类名 */
  root?: string | Record<string, any>
  /** 卡片头部的自定义类名 */
  header?: string | Record<string, any>
  /** 卡片主体的自定义类名 */
  body?: string | Record<string, any>
  /** 卡片底部的自定义类名 */
  footer?: string | Record<string, any>
}

export interface CardProps {
  /** 卡片阴影显示时机 */
  shadow?: ShadowType
  /** 卡片标题，用于无障碍访问 */
  title?: string
  /** 卡片描述，用于无障碍访问 */
  description?: string
  /** 是否禁用默认样式 */
  unstyled?: boolean
  /** Pass-through 样式类名 */
  pt?: PtProps
}
