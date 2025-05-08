import type { Component } from 'vue'

export interface BreadcrumbProps {
  /*分隔符*/
  separator?: string
  /*图标分隔符的组件或组件名*/
  separatorIcon?: string | Component
}

export interface BreadcrumbItemProps {
  to?: string
  replace?: boolean
}
