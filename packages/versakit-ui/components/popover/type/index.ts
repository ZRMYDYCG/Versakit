export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right'
export type PopoverTrigger = 'hover' | 'click' | 'focus' | 'manual'

export interface PopoverProps {
  /** 触发方式 */
  trigger?: PopoverTrigger
  /** 弹出位置 */
  placement?: PopoverPlacement
  /** 是否显示箭头 */
  arrow?: boolean
  /** 弹出框内容 */
  content?: string
  /** 弹出框宽度 */
  width?: string | number
  /** 是否可见 */
  visible?: boolean
  /** 延迟显示，单位毫秒 */
  openDelay?: number
  /** 延迟隐藏，单位毫秒 */
  closeDelay?: number
  /** 自定义类名 */
  class?: string
  /** 自定义样式 */
  style?: Record<string, string>
}
