export interface SkeletonProps {
  active?: boolean
  avatar?: boolean
  loading?: boolean
  round?: boolean
  rows?: number
  title?: boolean
  avatarSize?: string
  avatarShape?: 'circle' | 'square'
  titleWidth?: string
  rowWidth?: string | string[]
  rowHeight?: string
}
