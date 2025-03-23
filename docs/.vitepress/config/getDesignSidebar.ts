import { DefaultTheme } from 'vitepress'

export const getDesignSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: '主题',
      items: [{ text: '主题生成器', link: '/design/theme/' }],
    },
  ]
}
