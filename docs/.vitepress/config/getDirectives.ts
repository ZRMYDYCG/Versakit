import { DefaultTheme } from 'vitepress'

export const getDirectives = (): DefaultTheme.Sidebar => {
  return [
    {
      text: 'Directives 指令',
      items: [
        { text: 'Ripple 水波纹', link: '/directives/ripple/' },
        {
          text: 'NumberAnimation 数字动画',
          link: '/directives/increase/',
        },
      ],
    },
  ]
}
