export interface AvatarProps {
  src?: string
  alt?: string
  size?: 'small' | 'default' | 'large' | number
  shape?: 'circle' | 'square'
  text?: string
  backgroundColor?: string
  color?: string
  unstyled?: boolean
  pt?: PtProps
}

export interface PtProps {
  root?: string | string[] | Record<string, boolean | string>
  image?: string | string[] | Record<string, boolean | string>
  text?: string | string[] | Record<string, boolean | string>
}

export interface AvatarGroupProps {
  maxCount?: number
  size?: 'small' | 'default' | 'large' | number
  shape?: 'circle' | 'square'
  maxPopoverPlacement?: 'top' | 'bottom'
}
