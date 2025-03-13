export type AlignProps = 'normal' | 'flex-start' | 'center' | 'flex-end'

export type JustifyProps =
  | 'normal'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type WrapProps = 'nowrap' | 'wrap' | 'wrap-reverse'

export interface FlexProps {
  vertical?: boolean
  wrap?: WrapProps
  justify?: JustifyProps
  align?: AlignProps
  gap?: number | number[] | 'small' | 'middle' | 'large'
}
