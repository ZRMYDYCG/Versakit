export type BadgeType = 'dot' | 'number' | 'text'
export type BadgeValue = string | number

export interface PtProps {
  root?: string | Record<string, any>
  value?: string | Record<string, any>
}

export interface BadgeProps {
  /** 徽标类型 */
  type?: BadgeType
  /** 徽标显示的值 */
  value?: BadgeValue
  /** 自定义aria标签文本 */
  ariaLabel?: string
  unstyled?: boolean
  pt?: PtProps
}
