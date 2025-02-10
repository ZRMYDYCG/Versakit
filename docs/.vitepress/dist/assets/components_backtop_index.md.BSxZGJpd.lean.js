import { I as m } from './chunks/theme.BxWFLTKc.js'
import {
  d as U,
  o as n,
  c as d,
  a as r,
  G as a,
  k as l,
  F as h,
  w as o,
  aq as c,
  j as e,
  B as p,
} from './chunks/framework.Z42t_U4q.js'
import { Q as b } from './chunks/index.DEUECMle.js'
const k = `<template>\r
  往下滑可以看到右下方的按钮。\r
  <ver-backtop icon="caret-up-fill" />\r
</template>\r
\r
<script setup lang="ts">\r
import { VerBacktop } from '@versakit/ui'\r
<\/script>\r
`,
  T = U({
    __name: 'icon',
    setup(i) {
      return (s, t) => (
        n(),
        d(
          h,
          null,
          [
            t[0] || (t[0] = r(' 往下滑可以看到右下方的按钮。 ')),
            a(l(m), { icon: 'caret-up-fill' }),
          ],
          64,
        )
      )
    },
  }),
  C = `<template>\r
  往下滑可以看到右下方的按钮。\r
  <ver-backtop right="130" bottom="40">UP</ver-backtop>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerBacktop } from '@versakit/ui'\r
<\/script>\r
`,
  v = U({
    __name: 'base',
    setup(i) {
      return (s, t) => (
        n(),
        d(
          h,
          null,
          [
            t[1] || (t[1] = r(' 往下滑可以看到右下方的按钮。 ')),
            a(
              l(m),
              { right: '130', bottom: '40' },
              { default: o(() => t[0] || (t[0] = [r('UP')])), _: 1 },
            ),
          ],
          64,
        )
      )
    },
  }),
  V = { tabindex: '0' },
  x = JSON.parse(
    '{"title":"Backtop 回到顶部","description":"","frontmatter":{},"headers":[],"relativePath":"components/backtop/index.md","filePath":"components/backtop/index.md"}',
  ),
  _ = { name: 'components/backtop/index.md' },
  S = Object.assign(_, {
    setup(i) {
      return (s, t) => {
        const u = p('ClientOnly'),
          J = p('Tool')
        return (
          n(),
          d('div', null, [
            t[4] || (t[4] = c('', 4)),
            a(u, null, {
              default: o(() => [
                a(
                  l(b),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    theme: '',
                    lightTheme: '',
                    darkTheme: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: l(C),
                  },
                  { vue: o(() => [a(v)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[5] ||
              (t[5] = e(
                'h2',
                { id: '图标', tabindex: '-1' },
                [
                  r('图标 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#图标',
                      'aria-label': 'Permalink to "图标"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[6] || (t[6] = e('p', null, '其中的内容可设置为图标。', -1)),
            a(u, null, {
              default: o(() => [
                a(
                  l(b),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    theme: '',
                    lightTheme: '',
                    darkTheme: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: l(k),
                  },
                  { vue: o(() => [a(T)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[7] || (t[7] = c('', 4)),
            e('table', V, [
              t[3] ||
                (t[3] = e(
                  'thead',
                  null,
                  [
                    e('tr', null, [
                      e('th', null, '名称'),
                      e('th', null, '说明'),
                      e('th', null, '回调参数'),
                    ]),
                  ],
                  -1,
                )),
              e('tbody', null, [
                e('tr', null, [
                  t[1] || (t[1] = e('td', null, 'click', -1)),
                  t[2] || (t[2] = e('td', null, '点击按钮触发的事件', -1)),
                  e('td', null, [
                    t[0] || (t[0] = e('code', null, 'Function', -1)),
                    a(J, { value: '(evt: MouseEvent) => void' }),
                  ]),
                ]),
              ]),
            ]),
            t[8] ||
              (t[8] = e(
                'h3',
                { id: 'backtop-插槽', tabindex: '-1' },
                [
                  r('backtop 插槽 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#backtop-插槽',
                      'aria-label': 'Permalink to "backtop 插槽"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[9] ||
              (t[9] = e(
                'table',
                { tabindex: '0' },
                [
                  e('thead', null, [
                    e('tr', null, [
                      e('th', null, '插槽名'),
                      e('th', null, '说明'),
                    ]),
                  ]),
                  e('tbody', null, [
                    e('tr', null, [
                      e('td', null, 'default'),
                      e('td', null, '自定义默认内容'),
                    ]),
                  ]),
                ],
                -1,
              )),
          ])
        )
      }
    },
  })
export { x as __pageData, S as default }
