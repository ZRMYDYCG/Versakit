import { DefaultTheme } from 'vitepress'

export const getDesignSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: '设计',
      items: [
        { text: '颜色', link: '/design/color/' },
        { text: '主题生成器', link: '/design/theme/' },
        { text: '图标', link: '/design/icon/' },
      ],
    },
  ]
}
