export type ShadowType = 'always' | 'hover' | 'never'

export interface CardProps {
  /** 卡片阴影显示时机 */
  shadow?: ShadowType
  /** 卡片标题，用于无障碍访问 */
  title?: string
  /** 卡片描述，用于无障碍访问 */
  description?: string
}
