import type { SizeType } from '../../../utils/constant'

export interface SegmentedProps {
  modelValue: string | number
  options?:
    | (
        | string
        | {
            label?: string
            value?: string | number
          }
      )[]
    | any
  size?: SizeType
  unstyled?: boolean
  pt?: {
    root?: string
    container?: string
    highlight?: string
    item?: string
  }
}
