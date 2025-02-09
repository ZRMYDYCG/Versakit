import { $ as a, D as x, h as S } from './chunks/theme.B5pwRwa9.js'
import {
  d as m,
  o as u,
  b as V,
  w as s,
  G as r,
  a as t,
  k as n,
  _ as p,
  p as c,
  c as v,
  j as l,
  B as T,
} from './chunks/framework.Z42t_U4q.js'
import { Q as i } from './chunks/index.DEUECMle.js'
const f = `c\r
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
  g = m({
    __name: 'truncated',
    setup(o) {
      return (d, e) => (
        u(),
        V(n(x), null, {
          default: s(() => [
            r(
              n(a),
              { class: 'w-100px', truncated: '' },
              {
                default: s(
                  () => e[0] || (e[0] = [t('Self element set width 100px')]),
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
  B = p(g, [['__scopeId', 'data-v-3e10e7a9']]),
  b = `<script setup lang="ts">\r
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
  N = m({
    __name: 'size',
    setup(o) {
      const d = c('md'),
        e = [
          { label: 'XS', value: 'xs' },
          { label: 'SM', value: 'sm' },
          { label: 'MD', value: 'md' },
          { label: 'LG', value: 'lg' },
        ]
      return (J, U) => (
        u(),
        v('div', null, [
          r(
            n(S),
            {
              options: e,
              modelValue: d.value,
              'onUpdate:modelValue': U[0] || (U[0] = (C) => (d.value = C)),
            },
            null,
            8,
            ['modelValue'],
          ),
          r(
            n(a),
            { class: 'mx4', size: d.value },
            { default: s(() => U[1] || (U[1] = [t('我是文本')])), _: 1 },
            8,
            ['size'],
          ),
        ])
      )
    },
  }),
  y = p(N, [['__scopeId', 'data-v-d608a1f8']]),
  F = `<script setup lang="ts">\r
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
  D = m({
    __name: 'base',
    setup(o) {
      return (d, e) => (
        u(),
        V(n(x), null, {
          default: s(() => [
            r(
              n(a),
              { class: 'mx4' },
              { default: s(() => e[0] || (e[0] = [t('Default')])), _: 1 },
            ),
            r(
              n(a),
              { class: 'mx4', type: 'primary' },
              { default: s(() => e[1] || (e[1] = [t('Primary')])), _: 1 },
            ),
            r(
              n(a),
              { class: 'mx4', type: 'success' },
              { default: s(() => e[2] || (e[2] = [t('Success')])), _: 1 },
            ),
            r(
              n(a),
              { class: 'mx4', type: 'info' },
              { default: s(() => e[3] || (e[3] = [t('Info')])), _: 1 },
            ),
            r(
              n(a),
              { class: 'mx4', type: 'warn' },
              { default: s(() => e[4] || (e[4] = [t('Warning')])), _: 1 },
            ),
            r(
              n(a),
              { class: 'mx4', type: 'error' },
              { default: s(() => e[5] || (e[5] = [t('Drange')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  M = p(D, [['__scopeId', 'data-v-de056512']]),
  O = { tabindex: '0' },
  R = JSON.parse(
    '{"title":"Text 文本","description":"","frontmatter":{},"headers":[],"relativePath":"components/text/index.md","filePath":"components/text/index.md"}',
  ),
  Q = { name: 'components/text/index.md' },
  W = Object.assign(Q, {
    setup(o) {
      return (d, e) => {
        const J = T('ClientOnly'),
          U = T('Tool')
        return (
          u(),
          v('div', null, [
            e[10] ||
              (e[10] = l(
                'h1',
                { id: 'text-文本', tabindex: '-1' },
                [
                  t('Text 文本 '),
                  l(
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
            e[11] ||
              (e[11] = l(
                'h2',
                { id: '基础使用', tabindex: '-1' },
                [
                  t('基础使用 '),
                  l(
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
            e[12] ||
              (e[12] = l(
                'p',
                null,
                [
                  t('由 '),
                  l('code', null, 'type'),
                  t(' 属性来选择 Text 的类型。'),
                ],
                -1,
              )),
            r(J, null, {
              default: s(() => [
                r(
                  n(i),
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
                    vueCode: n(F),
                  },
                  { vue: s(() => [r(M)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[13] ||
              (e[13] = l(
                'h2',
                { id: '尺寸', tabindex: '-1' },
                [
                  t('尺寸 '),
                  l(
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
            e[14] ||
              (e[14] = l(
                'p',
                null,
                [
                  t('使用 '),
                  l('code', null, 'size'),
                  t(' 属性配置尺寸，可选的尺寸大小有：'),
                  l('code', null, 'large'),
                  t('， '),
                  l('code', null, 'default'),
                  t(' 或 '),
                  l('code', null, 'small'),
                  t('。'),
                ],
                -1,
              )),
            r(J, null, {
              default: s(() => [
                r(
                  n(i),
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
                    vueCode: n(b),
                  },
                  { vue: s(() => [r(y)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[15] ||
              (e[15] = l(
                'h2',
                { id: '省略', tabindex: '-1' },
                [
                  t('省略 '),
                  l(
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
            e[16] ||
              (e[16] = l(
                'p',
                null,
                [
                  t('通过 '),
                  l('code', null, 'truncated'),
                  t(' 属性,在文本超过视图或最大宽度设置时展示省略符。'),
                ],
                -1,
              )),
            r(J, null, {
              default: s(() => [
                r(
                  n(i),
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
                    vueCode: n(f),
                  },
                  { vue: s(() => [r(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[17] ||
              (e[17] = l(
                'h2',
                { id: 'text-api', tabindex: '-1' },
                [
                  t('Text API '),
                  l(
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
            e[18] ||
              (e[18] = l(
                'h3',
                { id: 'text属性', tabindex: '-1' },
                [
                  t('Text属性 '),
                  l(
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
            l('table', O, [
              e[9] ||
                (e[9] = l(
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
                  e[1] || (e[1] = l('td', null, [l('code', null, 'type')], -1)),
                  e[2] || (e[2] = l('td', null, '文本的类型', -1)),
                  l('td', null, [
                    e[0] || (e[0] = l('code', null, 'enum', -1)),
                    r(U, { value: 'default,primary,secondary' }),
                  ]),
                  e[3] || (e[3] = l('td', null, 'default', -1)),
                ]),
                l('tr', null, [
                  e[5] || (e[5] = l('td', null, [l('code', null, 'size')], -1)),
                  e[6] || (e[6] = l('td', null, '用于调整文本的大小', -1)),
                  l('td', null, [
                    e[4] || (e[4] = l('code', null, 'enum', -1)),
                    r(U, { value: 'lg,md,sm,xs' }),
                  ]),
                  e[7] || (e[7] = l('td', null, 'default', -1)),
                ]),
                e[8] ||
                  (e[8] = l(
                    'tr',
                    null,
                    [
                      l('td', null, [l('code', null, 'truncated ')]),
                      l(
                        'td',
                        null,
                        '在文本超过视图或最大宽度设置时展示省略符。',
                      ),
                      l('td', null, [l('code', null, 'boolean')]),
                      l('td', null, 'false'),
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
export { R as __pageData, W as default }
