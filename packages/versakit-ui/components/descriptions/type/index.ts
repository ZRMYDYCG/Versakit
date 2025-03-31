import type { VNode, VNodeProps } from 'vue'

export type DescriptionsItem = {
  label?: string
  index?: number
}

export interface DescriptionsProps {
  title?: string
  extra?: string
  column?: number
  border?: boolean
  size?: 'default' | 'small' | 'large'
  direction?: 'horizontal' | 'vertical'
}

export interface DescriptionsItemProps {
  label?: string
  colspan?: number
  border?: boolean
  isLabel?: boolean
  isContent?: boolean
}

export type DescriptionsItemVNode = VNode & {
  type: {
    name?: string
  }
  props: (Partial<DescriptionsItemProps> & VNodeProps) | null
}
