import type { HeadConfig } from 'vitepress'

export const getHead = (): HeadConfig[] => {
  return [
    [
      'link',
      {
        rel: 'icon',
        href: '/Versakit/image/logo.svg',
      },
    ],
  ]
}
