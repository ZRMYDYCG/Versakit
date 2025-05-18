// type/index.ts
export interface NotifivationProps {
  id?: string
  type?: 'info' | 'success' | 'warn' | 'error' | 'primary'
  title?: string
  content?: string
  plain?: boolean
  icon?: string
  duration?: number
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  offset?: number
  destroy?: () => void
}
