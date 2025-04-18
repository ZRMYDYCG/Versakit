import { DefaultTheme } from 'vitepress'

export const getDirectives = (): DefaultTheme.Sidebar => {
  return [
    {
      text: 'Directives 指令',
      items: [
        { text: 'Ripple 水波纹', link: '/directives/ripple/' },
        { text: 'NumberAnimation 数字动画', link: '/directives/increase/' },
        { text: 'Debounce 防抖', link: '/directives/debounce/' },
        { text: 'Throttle 节流', link: '/directives/throttle/' },
        { text: 'Drag 拖拽', link: '/directives/drag/' },
        { text: 'LazyLoad 图片懒加载', link: '/directives/lazy-load/' },
        { text: 'Copy 复制', link: '/directives/copy/' },
        { text: 'LongPress 长按', link: '/directives/long-press/' },
        { text: 'Typewriter 打字机', link: '/directives/typewriter/' },
        { text: 'Resize 大小调整', link: '/directives/resize/' },
      ],
    },
  ]
}
