import type { DirectionType } from '../../../utils/constant'

type lineType =
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'

export interface PtProps {
  root?: string // 应用于根 div 的 class
  title?: string // 应用于标题 div 的 class
}

export interface DividerProps {
  line?: lineType
  position?: string
  direction?: DirectionType
  unstyled?: boolean
  pt?: PtProps
}
