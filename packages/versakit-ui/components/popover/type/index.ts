type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'right'

export interface PopoverProps {
  trigger?: 'click' | 'hover'
  content?: string
  title?: string
  placement?: Placement
  width?: number | string
  visible?: boolean
}
