export interface NoticeBarProps {
  text: string
  type?: 'info' | 'success' | 'warning' | 'error'
  closable?: boolean
  icon?: string
  scrollable?: boolean
  speed?: number
}
