import { s as U, Q as p, V as v } from './chunks/theme.CWxU7uh8.js'
import {
  d as i,
  o as d,
  b,
  w as r,
  G as n,
  a as t,
  k as J,
  _ as m,
  p as f,
  c as g,
  j as e,
  B as x,
} from './chunks/framework.Z42t_U4q.js'
import { Q as u } from './chunks/index.DEUECMle.js'
const D = `c\r
<script setup lang="ts">\r
import { VerRow, VerText } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <ver-text class="w-100px" truncated>Self element set width 100px</ver-text>\r
  </ver-row>\r
</template>\r
\r
<style scoped>\r
.w-100px {\r
  width: 100px;\r
}\r
</style>\r
`,
  R = i({
    __name: 'truncated',
    setup(T) {
      return (a, l) => (
        d(),
        b(J(p), null, {
          default: r(() => [
            n(
              J(U),
              { class: 'w-100px', truncated: '' },
              {
                default: r(
                  () => l[0] || (l[0] = [t('Self element set width 100px')]),
                ),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  w = m(R, [['__scopeId', 'data-v-3e10e7a9']]),
  B = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerText, VerSegmented } from '@versakit/ui'\r
\r
const selectedValue = ref('md')\r
const options = [\r
  { label: 'XS', value: 'xs' },\r
  { label: 'SM', value: 'sm' },\r
  { label: 'MD', value: 'md' },\r
  { label: 'LG', value: 'lg' },\r
]\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerSegmented :options v-model="selectedValue" />\r
\r
    <ver-text class="mx4" :size="selectedValue">我是文本</ver-text>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.mx4 {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  O = i({
    __name: 'size',
    setup(T) {
      const a = f('md'),
        l = [
          { label: 'XS', value: 'xs' },
          { label: 'SM', value: 'sm' },
          { label: 'MD', value: 'md' },
          { label: 'LG', value: 'lg' },
        ]
      return (o, s) => (
        d(),
        g('div', null, [
          n(
            J(v),
            {
              options: l,
              modelValue: a.value,
              'onUpdate:modelValue': s[0] || (s[0] = (c) => (a.value = c)),
            },
            null,
            8,
            ['modelValue'],
          ),
          n(
            J(U),
            { class: 'mx4', size: a.value },
            { default: r(() => s[1] || (s[1] = [t('我是文本')])), _: 1 },
            8,
            ['size'],
          ),
        ])
      )
    },
  }),
  h = m(O, [['__scopeId', 'data-v-d608a1f8']]),
  C = `<script setup lang="ts">\r
import { VerRow, VerText } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <ver-text class="mx4">Default</ver-text>\r
    <ver-text class="mx4" type="primary">Primary</ver-text>\r
    <ver-text class="mx4" type="success">Success</ver-text>\r
    <ver-text class="mx4" type="info">Info</ver-text>\r
    <ver-text class="mx4" type="warn">Warning</ver-text>\r
    <ver-text class="mx4" type="error">Drange</ver-text>\r
  </ver-row>\r
</template>\r
\r
<style scoped>\r
.mx4 {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  k = i({
    __name: 'base',
    setup(T) {
      return (a, l) => (
        d(),
        b(J(p), null, {
          default: r(() => [
            n(
              J(U),
              { class: 'mx4' },
              { default: r(() => l[0] || (l[0] = [t('Default')])), _: 1 },
            ),
            n(
              J(U),
              { class: 'mx4', type: 'primary' },
              { default: r(() => l[1] || (l[1] = [t('Primary')])), _: 1 },
            ),
            n(
              J(U),
              { class: 'mx4', type: 'success' },
              { default: r(() => l[2] || (l[2] = [t('Success')])), _: 1 },
            ),
            n(
              J(U),
              { class: 'mx4', type: 'info' },
              { default: r(() => l[3] || (l[3] = [t('Info')])), _: 1 },
            ),
            n(
              J(U),
              { class: 'mx4', type: 'warn' },
              { default: r(() => l[4] || (l[4] = [t('Warning')])), _: 1 },
            ),
            n(
              J(U),
              { class: 'mx4', type: 'error' },
              { default: r(() => l[5] || (l[5] = [t('Drange')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  y = m(k, [['__scopeId', 'data-v-de056512']]),
  Q = { tabindex: '0' },
  z = JSON.parse(
    '{"title":"Text 文本","description":"","frontmatter":{},"headers":[],"relativePath":"components/text/index.md","filePath":"components/text/index.md"}',
  ),
  E = { name: 'components/text/index.md' },
  X = Object.assign(E, {
    setup(T) {
      return (a, l) => {
        const o = x('ClientOnly'),
          s = x('Tool')
        return (
          d(),
          g('div', null, [
            l[10] ||
              (l[10] = e(
                'h1',
                { id: 'text-文本', tabindex: '-1' },
                [
                  t('Text 文本 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#text-文本',
                      'aria-label': 'Permalink to "Text 文本"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[11] ||
              (l[11] = e(
                'h2',
                { id: '基础使用', tabindex: '-1' },
                [
                  t('基础使用 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基础使用',
                      'aria-label': 'Permalink to "基础使用"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[12] ||
              (l[12] = e(
                'p',
                null,
                [
                  t('由 '),
                  e('code', null, 'type'),
                  t(' 属性来选择 Text 的类型。'),
                ],
                -1,
              )),
            n(o, null, {
              default: r(() => [
                n(
                  J(u),
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
                    vueCode: J(C),
                  },
                  { vue: r(() => [n(y)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[13] ||
              (l[13] = e(
                'h2',
                { id: '尺寸', tabindex: '-1' },
                [
                  t('尺寸 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#尺寸',
                      'aria-label': 'Permalink to "尺寸"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[14] ||
              (l[14] = e(
                'p',
                null,
                [
                  t('使用 '),
                  e('code', null, 'size'),
                  t(' 属性配置尺寸，可选的尺寸大小有：'),
                  e('code', null, 'large'),
                  t('， '),
                  e('code', null, 'default'),
                  t(' 或 '),
                  e('code', null, 'small'),
                  t('。'),
                ],
                -1,
              )),
            n(o, null, {
              default: r(() => [
                n(
                  J(u),
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
                    vueCode: J(B),
                  },
                  { vue: r(() => [n(h)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[15] ||
              (l[15] = e(
                'h2',
                { id: '省略', tabindex: '-1' },
                [
                  t('省略 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#省略',
                      'aria-label': 'Permalink to "省略"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[16] ||
              (l[16] = e(
                'p',
                null,
                [
                  t('通过 '),
                  e('code', null, 'truncated'),
                  t(' 属性,在文本超过视图或最大宽度设置时展示省略符。'),
                ],
                -1,
              )),
            n(o, null, {
              default: r(() => [
                n(
                  J(u),
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
                    vueCode: J(D),
                  },
                  { vue: r(() => [n(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[17] ||
              (l[17] = e(
                'h2',
                { id: 'text-api', tabindex: '-1' },
                [
                  t('Text API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#text-api',
                      'aria-label': 'Permalink to "Text API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[18] ||
              (l[18] = e(
                'h3',
                { id: 'text属性', tabindex: '-1' },
                [
                  t('Text属性 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#text属性',
                      'aria-label': 'Permalink to "Text属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', Q, [
              l[9] ||
                (l[9] = e(
                  'thead',
                  null,
                  [
                    e('tr', null, [
                      e('th', null, '属性'),
                      e('th', null, '说明'),
                      e('th', null, '类型'),
                      e('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              e('tbody', null, [
                e('tr', null, [
                  l[1] || (l[1] = e('td', null, [e('code', null, 'type')], -1)),
                  l[2] || (l[2] = e('td', null, '文本的类型', -1)),
                  e('td', null, [
                    l[0] || (l[0] = e('code', null, 'enum', -1)),
                    n(s, { value: 'default,primary,secondary' }),
                  ]),
                  l[3] || (l[3] = e('td', null, 'default', -1)),
                ]),
                e('tr', null, [
                  l[5] || (l[5] = e('td', null, [e('code', null, 'size')], -1)),
                  l[6] || (l[6] = e('td', null, '用于调整文本的大小', -1)),
                  e('td', null, [
                    l[4] || (l[4] = e('code', null, 'enum', -1)),
                    n(s, { value: 'lg,md,sm,xs' }),
                  ]),
                  l[7] || (l[7] = e('td', null, 'default', -1)),
                ]),
                l[8] ||
                  (l[8] = e(
                    'tr',
                    null,
                    [
                      e('td', null, [e('code', null, 'truncated ')]),
                      e(
                        'td',
                        null,
                        '在文本超过视图或最大宽度设置时展示省略符。',
                      ),
                      e('td', null, [e('code', null, 'boolean')]),
                      e('td', null, 'false'),
                    ],
                    -1,
                  )),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { z as __pageData, X as default }
