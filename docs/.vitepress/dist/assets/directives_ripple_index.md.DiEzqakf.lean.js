import { l as p } from './chunks/theme.BxWFLTKc.js'
import {
  d as T,
  o as i,
  c as J,
  a8 as s,
  b as d,
  w as r,
  a as n,
  k as t,
  ar as m,
  j as a,
  G as o,
  aq as v,
  B as h,
} from './chunks/framework.Z42t_U4q.js'
import { Q as u } from './chunks/index.DEUECMle.js'
const f = `<script setup lang="ts">\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerPanel v-ripple="{ duration: 800, color: '#c4b5fd' }">Primary</VerPanel>\r
\r
    <VerPanel v-ripple="{ duration: 800, color: '#86efac' }">success</VerPanel>\r
\r
    <VerPanel v-ripple="{ duration: 800, color: '#fdba74' }">warn</VerPanel>\r
\r
    <VerPanel v-ripple="{ duration: 800, color: '#fca5a5' }">error</VerPanel>\r
  </div>\r
</template>\r
`,
  b = T({
    __name: 'color',
    setup(U) {
      return (c, e) => {
        const l = m('ripple')
        return (
          i(),
          J('div', null, [
            s(
              (i(),
              d(t(p), null, {
                default: r(() => e[0] || (e[0] = [n('Primary')])),
                _: 1,
              })),
              [[l, { duration: 800, color: '#c4b5fd' }]],
            ),
            s(
              (i(),
              d(t(p), null, {
                default: r(() => e[1] || (e[1] = [n('success')])),
                _: 1,
              })),
              [[l, { duration: 800, color: '#86efac' }]],
            ),
            s(
              (i(),
              d(t(p), null, {
                default: r(() => e[2] || (e[2] = [n('warn')])),
                _: 1,
              })),
              [[l, { duration: 800, color: '#fdba74' }]],
            ),
            s(
              (i(),
              d(t(p), null, {
                default: r(() => e[3] || (e[3] = [n('error')])),
                _: 1,
              })),
              [[l, { duration: 800, color: '#fca5a5' }]],
            ),
          ])
        )
      }
    },
  }),
  B = `<script setup lang="ts">\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerPanel v-ripple>组件内使用v-ripple</VerPanel>\r
  </div>\r
</template>\r
`,
  _ = T({
    __name: 'base',
    setup(U) {
      return (c, e) => {
        const l = m('ripple')
        return (
          i(),
          J('div', null, [
            s(
              (i(),
              d(t(p), null, {
                default: r(() => e[0] || (e[0] = [n('组件内使用v-ripple')])),
                _: 1,
              })),
              [[l]],
            ),
          ])
        )
      }
    },
  }),
  P = JSON.parse(
    '{"title":"Ripple 水波纹","description":"","frontmatter":{},"headers":[],"relativePath":"directives/ripple/index.md","filePath":"directives/ripple/index.md"}',
  ),
  D = { name: 'directives/ripple/index.md' },
  R = Object.assign(D, {
    setup(U) {
      return (c, e) => {
        const l = h('ClientOnly')
        return (
          i(),
          J('div', null, [
            e[0] ||
              (e[0] = a(
                'h1',
                { id: 'ripple-水波纹', tabindex: '-1' },
                [
                  n('Ripple 水波纹 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#ripple-水波纹',
                      'aria-label': 'Permalink to "Ripple 水波纹"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = a(
                'h2',
                { id: '基本用法', tabindex: '-1' },
                [
                  n('基本用法 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基本用法',
                      'aria-label': 'Permalink to "基本用法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[2] ||
              (e[2] = a(
                'p',
                null,
                '你可以在组件内通过v-ripple属性，让元素获得水波纹效果。',
                -1,
              )),
            o(l, null, {
              default: r(() => [
                o(
                  t(u),
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
                    vueCode: t(B),
                  },
                  { vue: r(() => [o(_)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[3] ||
              (e[3] = a(
                'h2',
                { id: '自定义颜色', tabindex: '-1' },
                [
                  n('自定义颜色 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义颜色',
                      'aria-label': 'Permalink to "自定义颜色"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[4] ||
              (e[4] = a(
                'p',
                null,
                '此外，你还可以自定义水波纹的样式，以下是几个水波纹颜色的样式修改示例。',
                -1,
              )),
            o(l, null, {
              default: r(() => [
                o(
                  t(u),
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
                    vueCode: t(f),
                  },
                  { vue: r(() => [o(b)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[5] || (e[5] = v('', 3)),
          ])
        )
      }
    },
  })
export { P as __pageData, R as default }
