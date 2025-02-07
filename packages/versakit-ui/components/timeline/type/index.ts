export interface TimelineProps {
  reverse?: boolean
  mode?: 'left' | 'right' | 'alternate'
  pending?: boolean
}

export interface TimelineItemProps {
  color?: string
  dot?: string
  label?: string
  position?: 'left' | 'right'
}
