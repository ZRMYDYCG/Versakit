import { f as s } from './chunks/theme.B5pwRwa9.js'
import {
  d as v,
  o as d,
  c as o,
  j as l,
  G as t,
  k as r,
  w as i,
  a as n,
  B as m,
} from './chunks/framework.Z42t_U4q.js'
import { Q as p } from './chunks/index.DEUECMle.js'
const h = `<template>\r
  <div>\r
    <span>Rain</span>\r
    <ver-divider direction="vertical" />\r
    <span>Home</span>\r
    <ver-divider direction="vertical" border-style="dashed" />\r
    <span>Grass</span>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerDivider } from '@versakit/ui'\r
<\/script>\r
`,
  T = v({
    __name: 'vertical',
    setup(a) {
      return (u, e) => (
        d(),
        o('div', null, [
          e[0] || (e[0] = l('span', null, 'Rain', -1)),
          t(r(s), { direction: 'vertical' }),
          e[1] || (e[1] = l('span', null, 'Home', -1)),
          t(r(s), { direction: 'vertical', 'border-style': 'dashed' }),
          e[2] || (e[2] = l('span', null, 'Grass', -1)),
        ])
      )
    },
  }),
  V = `<template>\r
  <div>\r
    <ver-divider>🎇</ver-divider>\r
    <ver-divider position="center">🎇</ver-divider>\r
    <ver-divider position="right">🎇</ver-divider>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerDivider } from '@versakit/ui'\r
<\/script>\r
`,
  f = v({
    __name: 'text',
    setup(a) {
      return (u, e) => (
        d(),
        o('div', null, [
          t(r(s), null, { default: i(() => e[0] || (e[0] = [n('🎇')])), _: 1 }),
          t(
            r(s),
            { position: 'center' },
            { default: i(() => e[1] || (e[1] = [n('🎇')])), _: 1 },
          ),
          t(
            r(s),
            { position: 'right' },
            { default: i(() => e[2] || (e[2] = [n('🎇')])), _: 1 },
          ),
        ])
      )
    },
  }),
  C = `<template>\r
  <div>\r
    <p>\r
      There little thoughts are the rustle of leaves; they have their whisper of\r
      joy in my mind.\r
    </p>\r
    <ver-divider line="dashed" />\r
    <p>\r
      There little thoughts are the rustle of leaves; they have their whisper of\r
      joy in my mind.\r
    </p>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerDivider } from '@versakit/ui'\r
<\/script>\r
`,
  B = v({
    __name: 'style',
    setup(a) {
      return (u, e) => (
        d(),
        o('div', null, [
          e[0] ||
            (e[0] = l(
              'p',
              null,
              ' There little thoughts are the rustle of leaves; they have their whisper of joy in my mind. ',
              -1,
            )),
          t(r(s), { line: 'dashed' }),
          e[1] ||
            (e[1] = l(
              'p',
              null,
              ' There little thoughts are the rustle of leaves; they have their whisper of joy in my mind. ',
              -1,
            )),
        ])
      )
    },
  }),
  y = `<template>\r
  <div>\r
    <p>\r
      There little thoughts are the rustle of leaves; they have their whisper of\r
      joy in my mind.\r
    </p>\r
    <ver-divider />\r
    <p>\r
      There little thoughts are the rustle of leaves; they have their whisper of\r
      joy in my mind.\r
    </p>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerDivider } from '@versakit/ui'\r
<\/script>\r
`,
  g = v({
    __name: 'base',
    setup(a) {
      return (u, e) => (
        d(),
        o('div', null, [
          e[0] ||
            (e[0] = l(
              'p',
              null,
              ' There little thoughts are the rustle of leaves; they have their whisper of joy in my mind. ',
              -1,
            )),
          t(r(s)),
          e[1] ||
            (e[1] = l(
              'p',
              null,
              ' There little thoughts are the rustle of leaves; they have their whisper of joy in my mind. ',
              -1,
            )),
        ])
      )
    },
  }),
  b = { tabindex: '0' },
  x = JSON.parse(
    '{"title":"Divider 分割线","description":"","frontmatter":{},"headers":[],"relativePath":"components/divider/index.md","filePath":"components/divider/index.md"}',
  ),
  D = { name: 'components/divider/index.md' },
  F = Object.assign(D, {
    setup(a) {
      return (u, e) => {
        const U = m('ClientOnly'),
          J = m('Tool')
        return (
          d(),
          o('div', null, [
            e[13] ||
              (e[13] = l(
                'h1',
                { id: 'divider-分割线', tabindex: '-1' },
                [
                  n('Divider 分割线 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#divider-分割线',
                      'aria-label': 'Permalink to "Divider 分割线"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[14] || (e[14] = l('p', null, '区隔内容的分割线。', -1)),
            e[15] ||
              (e[15] = l(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  n('基础用法 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基础用法',
                      'aria-label': 'Permalink to "基础用法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[16] || (e[16] = l('p', null, '对不同段落的文本进行分割。', -1)),
            t(U, null, {
              default: i(() => [
                t(
                  r(p),
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
                    vueCode: r(y),
                  },
                  { vue: i(() => [t(g)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[17] ||
              (e[17] = l(
                'h2',
                { id: '虚线', tabindex: '-1' },
                [
                  n('虚线 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#虚线',
                      'aria-label': 'Permalink to "虚线"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[18] || (e[18] = l('p', null, '您可以设置分隔符的样式。', -1)),
            t(U, null, {
              default: i(() => [
                t(
                  r(p),
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
                    vueCode: r(C),
                  },
                  { vue: i(() => [t(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[19] ||
              (e[19] = l(
                'h2',
                { id: '设置文案', tabindex: '-1' },
                [
                  n('设置文案 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#设置文案',
                      'aria-label': 'Permalink to "设置文案"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[20] ||
              (e[20] = l('p', null, '可以在分割线上自定义文本内容。', -1)),
            t(U, null, {
              default: i(() => [
                t(
                  r(p),
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
                    vueCode: r(V),
                  },
                  { vue: i(() => [t(f)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[21] ||
              (e[21] = l(
                'h2',
                { id: '垂直分割线', tabindex: '-1' },
                [
                  n('垂直分割线 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#垂直分割线',
                      'aria-label': 'Permalink to "垂直分割线"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[22] || (e[22] = l('p', null, '垂直方向的分割线。', -1)),
            t(U, null, {
              default: i(() => [
                t(
                  r(p),
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
                    vueCode: r(h),
                  },
                  { vue: i(() => [t(T)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[23] ||
              (e[23] = l(
                'h2',
                { id: 'divider-api', tabindex: '-1' },
                [
                  n('Divider API '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#divider-api',
                      'aria-label': 'Permalink to "Divider API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l('table', b, [
              e[12] ||
                (e[12] = l(
                  'thead',
                  null,
                  [
                    l('tr', null, [
                      l('th', null, '属性'),
                      l('th', null, '说明'),
                      l('th', null, '类型'),
                      l('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              l('tbody', null, [
                l('tr', null, [
                  e[1] ||
                    (e[1] = l('td', null, [l('code', null, 'direction')], -1)),
                  e[2] || (e[2] = l('td', null, '分隔线的方向', -1)),
                  l('td', null, [
                    e[0] || (e[0] = l('code', null, 'enum', -1)),
                    t(J, { value: 'horizontal,vertical' }),
                  ]),
                  e[3] ||
                    (e[3] = l('td', null, [l('code', null, 'horizontal')], -1)),
                ]),
                l('tr', null, [
                  e[5] ||
                    (e[5] = l('td', null, [l('code', null, 'position')], -1)),
                  e[6] || (e[6] = l('td', null, '分割线的位置', -1)),
                  l('td', null, [
                    e[4] || (e[4] = l('code', null, 'enum', -1)),
                    t(J, { value: 'center,right,left' }),
                  ]),
                  e[7] || (e[7] = l('td', null, [l('code', null, 'left')], -1)),
                ]),
                l('tr', null, [
                  e[9] || (e[9] = l('td', null, [l('code', null, 'line')], -1)),
                  e[10] || (e[10] = l('td', null, '分隔线的虚实', -1)),
                  l('td', null, [
                    e[8] || (e[8] = l('code', null, 'enum', -1)),
                    t(J, { value: 'dashed,solid' }),
                  ]),
                  e[11] ||
                    (e[11] = l('td', null, [l('code', null, 'solid')], -1)),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { x as __pageData, F as default }
