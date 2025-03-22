import type { PositioningStrategy, Placement } from '@popperjs/core'
export type Theme = 'light' | 'dark'
export type Format = 'rgb' | 'hex' | 'hsl' | 'hsv'

export type ColorPickerPassThroughOptions = {
  root?: string | any
  icon?: string | any
  label?: string | any
}

export interface ColorPickerProps {
  value?: string
  variant?: string
  unstyled?: boolean
  size?: number | string
  width?: number | string
  height?: number | string
  format?: Format
  showPicker?: boolean | undefined
  showAlpha?: boolean
  addColor?: boolean
  deleteColor?: boolean
  max?: number
  zIndex?: number
  colors?: Array<string>
  popupContainer?: string | HTMLElement | boolean
  position?: PositioningStrategy
  placement?: Placement
  formatOptions?: Format[] | boolean
  pt?: ColorPickerPassThroughOptions
}

export interface PickerProps {
  value?: string
  format?: Format
  showAlpha?: boolean
  colors?: Array<string>
  style?: Record<string, string>
  formatOptions?: Format[] | boolean
}
export interface FormatValueProps {
  value?: string
  showAlpha?: boolean
  options?: Format[] | boolean
}

export interface HueProps {
  width?: number
  height?: number
  hue?: number
}
export interface SaturationProps {
  size?: number
  value?: number
  hue?: number
  saturation?: number
}
export interface AddColorProps {
  size?: number
  selected: boolean
}
export interface ColorItemProps {
  size?: number | string
  width?: number | string
  height?: number | string
  value?: string
  border?: boolean
  borderRadius?: number
  selected?: boolean
  draggable?: boolean
}
export interface AlphaProps {
  width?: number
  height?: number
  color?: string
  alpha?: number
}
export interface ColorProps {
  colors?: Array<string>
  selectedIndex?: number
}
export interface InputProps {
  width?: number
  value?: string
  format?: string
  showAlpha?: boolean
  formatOptions?: Format[] | boolean
}
