import type { SizeType } from '../../../utils/constant'

export interface SwitchPrpops {
  modelValue?: boolean
  size?: SizeType
  unstyled?: boolean
  pt?: PtProps
}

export interface PtProps {
  root?: string | string[] | Record<string, boolean | string>
  core?: string | string[] | Record<string, boolean | string>
  button?: string | string[] | Record<string, boolean | string>
}
