import { DefaultTheme } from 'vitepress'

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    { text: '指南', link: '/guide/versakit/' },
    { text: '主题', link: '/design/theme/' },
    { text: '组件', link: '/components/layout/' },
    { text: '指令集', link: '/directives/ripple/' },
  ]
}
