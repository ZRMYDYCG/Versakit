export interface CarouselProps {
  autoplay?: boolean
  interval?: number
  showArrows?: boolean
  showIndicators?: boolean
  trigger?: 'hover' | 'click'
  direction?: 'horizontal' | 'vertical'
  type?: 'default' | 'card'
  height?: string
  indicatorPosition?: 'bottom' | 'top' | 'left' | 'right' | 'outside'
  indicatorType?: 'dot' | 'line' | 'number' | 'custom'
}
