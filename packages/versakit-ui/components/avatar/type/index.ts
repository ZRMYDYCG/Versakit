export interface AvatarProps {
  src?: string
  alt?: string
  size?: 'small' | 'default' | 'large' | number
  shape?: 'circle' | 'square'
  text?: string
  backgroundColor?: string
  color?: string
}

export interface AvatarGroupProps {
  maxCount?: number
  size?: 'small' | 'default' | 'large' | number
  shape?: 'circle' | 'square'
  maxPopoverPlacement?: 'top' | 'bottom'
}
