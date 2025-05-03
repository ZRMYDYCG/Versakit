import type { ComType, SizeType } from '../../../utils/constant'

export interface TagProps {
  type?: ComType
  plain?: boolean
  size?: SizeType
  round?: boolean
  unstyled?: boolean
  pt?: PtProps
}

export interface PtProps {
  root?: string | string[] | Record<string, boolean | string>
}
