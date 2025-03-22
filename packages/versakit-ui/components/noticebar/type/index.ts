export interface NoticeBarProps {
  text: string | string[]
  type?: 'info' | 'success' | 'warning' | 'error'
  closable?: boolean
  icon?: string
  scrollable?: boolean
  direction?: 'horizontal' | 'vertical'
  speed?: number
}
