export type Theme = 'light' | 'dark'
export type Format = 'rgb' | 'hex' | 'hsl' | 'hsv'
export const ALPHA_FORMAT_MAP: Record<string, string> = {
  rgb: 'RGBA',
  hex: 'HEX',
  hsl: 'HSLA',
  hsv: 'HSVA',
}
export const FORMAT_MAP: Record<string, string> = {
  rgb: 'RGB',
  hex: 'HEX',
  hsl: 'HSL',
  hsv: 'HSV',
}
export const FORMAT_VALUE_MAP: Record<string, string> = {
  RGB: 'rgb',
  RGBA: 'rgb',
  HEX: 'hex',
  HSL: 'hsl',
  HSLA: 'hsl',
  HSV: 'hsv',
  HSVA: 'hsv',
}
