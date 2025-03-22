export interface SplitterProps {
  direction?: 'horizontal' | 'vertical'
  defaultSizes?: number[]
  minSize?: number
  maxSize?: number
  gutterSize?: number
  disabled?: boolean
}
