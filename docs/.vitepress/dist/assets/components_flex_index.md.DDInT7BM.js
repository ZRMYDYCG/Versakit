import { F as T, g as p, i as y, h as c } from './chunks/theme.B5pwRwa9.js'
import {
  d as g,
  o as U,
  b as F,
  w as u,
  c as m,
  C as b,
  j as e,
  F as J,
  k as a,
  _ as C,
  p as V,
  h as B,
  G as t,
  a as s,
  a8 as N,
  a9 as k,
  B as S,
} from './chunks/framework.Z42t_U4q.js'
import { Q as f } from './chunks/index.DEUECMle.js'
const O = `<script setup lang="ts">\r
import { VerFlex } from '@versakit/ui'\r
<\/script>\r
<template>\r
  <VerFlex wrap="wrap">\r
    <div v-for="n in 20" :key="n" class="flex-item" />\r
  </VerFlex>\r
</template>\r
\r
<style scoped>\r
.flex-item {\r
  width: 80px;\r
  height: 40px;\r
  background-color: var(--theme-primary-500, var(--ver-primary-500));\r
}\r
</style>\r
`,
  Q = g({
    __name: 'wrap',
    setup(x) {
      return (r, l) => (
        U(),
        F(
          a(T),
          { wrap: 'wrap' },
          {
            default: u(() => [
              (U(),
              m(
                J,
                null,
                b(20, (n) => e('div', { key: n, class: 'flex-item' })),
                64,
              )),
            ]),
            _: 1,
          },
        )
      )
    },
  }),
  M = C(Q, [['__scopeId', 'data-v-87f29874']]),
  D = `<script setup lang="ts">\r
import { ref, computed } from 'vue'\r
import { VerRadio, VerSlider, VerFlex } from '@versakit/ui'\r
\r
const gapSize = ref<'small' | 'middle' | 'large' | 'custom'>('small')\r
const customGapSize = ref(16)\r
\r
const computedGap = computed<number | 'small' | 'middle' | 'large'>(() => {\r
  if (gapSize.value === 'custom') {\r
    return customGapSize.value\r
  }\r
  return gapSize.value\r
})\r
<\/script>\r
<template>\r
  <div>\r
    <VerRadio label="small" v-model="gapSize">small</VerRadio>\r
    <VerRadio label="middle" v-model="gapSize">middle</VerRadio>\r
    <VerRadio label="large" v-model="gapSize">large</VerRadio>\r
    <VerRadio label="custom" v-model="gapSize">custom</VerRadio>\r
    <VerSlider\r
      v-model="customGapSize"\r
      v-show="gapSize === 'custom'"\r
    ></VerSlider>\r
  </div>\r
  <VerFlex :gap="computedGap" style="margin-top: 10px">\r
    <div v-for="n in 4" :key="n" class="flex-item" />\r
  </VerFlex>\r
</template>\r
\r
<style scoped>\r
.flex-item {\r
  width: 80px;\r
  height: 40px;\r
  background-color: var(--theme-primary-500, var(--ver-primary-500));\r
}\r
</style>\r
`,
  R = g({
    __name: 'gap',
    setup(x) {
      const r = V('small'),
        l = V(16),
        n = B(() => (r.value === 'custom' ? l.value : r.value))
      return (d, i) => (
        U(),
        m(
          J,
          null,
          [
            e('div', null, [
              t(
                a(p),
                {
                  label: 'small',
                  modelValue: r.value,
                  'onUpdate:modelValue': i[0] || (i[0] = (o) => (r.value = o)),
                },
                { default: u(() => i[5] || (i[5] = [s('small')])), _: 1 },
                8,
                ['modelValue'],
              ),
              t(
                a(p),
                {
                  label: 'middle',
                  modelValue: r.value,
                  'onUpdate:modelValue': i[1] || (i[1] = (o) => (r.value = o)),
                },
                { default: u(() => i[6] || (i[6] = [s('middle')])), _: 1 },
                8,
                ['modelValue'],
              ),
              t(
                a(p),
                {
                  label: 'large',
                  modelValue: r.value,
                  'onUpdate:modelValue': i[2] || (i[2] = (o) => (r.value = o)),
                },
                { default: u(() => i[7] || (i[7] = [s('large')])), _: 1 },
                8,
                ['modelValue'],
              ),
              t(
                a(p),
                {
                  label: 'custom',
                  modelValue: r.value,
                  'onUpdate:modelValue': i[3] || (i[3] = (o) => (r.value = o)),
                },
                { default: u(() => i[8] || (i[8] = [s('custom')])), _: 1 },
                8,
                ['modelValue'],
              ),
              N(
                t(
                  a(y),
                  {
                    modelValue: l.value,
                    'onUpdate:modelValue':
                      i[4] || (i[4] = (o) => (l.value = o)),
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                [[k, r.value === 'custom']],
              ),
            ]),
            t(
              a(T),
              { gap: n.value, style: { 'margin-top': '10px' } },
              {
                default: u(() => [
                  (U(),
                  m(
                    J,
                    null,
                    b(4, (o) => e('div', { key: o, class: 'flex-item' })),
                    64,
                  )),
                ]),
                _: 1,
              },
              8,
              ['gap'],
            ),
          ],
          64,
        )
      )
    },
  }),
  w = C(R, [['__scopeId', 'data-v-c1228679']]),
  L = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerSegmented, VerFlex } from '@versakit/ui'\r
import { AlignProps, JustifyProps } from '@versakit/ui/components/flex/type'\r
\r
const justify = ref<JustifyProps>('flex-start')\r
const justifyOptions = [\r
  { label: 'flex-start', value: 'flex-start' },\r
  { label: 'center', value: 'center' },\r
  { label: 'flex-end', value: 'flex-end' },\r
  { label: 'space-between', value: 'space-between' },\r
  { label: 'space-around', value: 'space-around' },\r
  { label: 'space-evenly', value: 'space-evenly' },\r
]\r
\r
const align = ref<AlignProps>('flex-start')\r
const alignOptions = [\r
  { label: 'flex-start', value: 'flex-start' },\r
  { label: 'center', value: 'center' },\r
  { label: 'flex-end', value: 'flex-end' },\r
]\r
<\/script>\r
<template>\r
  <div style="line-height: 36px">justify-content:</div>\r
  <VerSegmented v-model="justify" :options="justifyOptions"></VerSegmented>\r
  <div style="line-height: 36px">align-items:</div>\r
  <VerSegmented v-model="align" :options="alignOptions"></VerSegmented>\r
  <VerFlex class="flex-container" :align="align" :justify="justify">\r
    <div v-for="n in 4" :key="n" class="flex-item" />\r
  </VerFlex>\r
</template>\r
<style scoped>\r
.flex-container {\r
  height: 150px;\r
  border-radius: 5px;\r
  border: 1px dotted var(--theme-primary-500, var(--ver-primary-500));\r
  margin-top: 15px;\r
}\r
\r
.flex-item {\r
  width: 80px;\r
  height: 40px;\r
  background-color: var(--theme-primary-500, var(--ver-primary-500));\r
}\r
</style>\r
`,
  h = g({
    __name: 'align',
    setup(x) {
      const r = V('flex-start'),
        l = [
          { label: 'flex-start', value: 'flex-start' },
          { label: 'center', value: 'center' },
          { label: 'flex-end', value: 'flex-end' },
          { label: 'space-between', value: 'space-between' },
          { label: 'space-around', value: 'space-around' },
          { label: 'space-evenly', value: 'space-evenly' },
        ],
        n = V('flex-start'),
        d = [
          { label: 'flex-start', value: 'flex-start' },
          { label: 'center', value: 'center' },
          { label: 'flex-end', value: 'flex-end' },
        ]
      return (i, o) => (
        U(),
        m(
          J,
          null,
          [
            o[2] ||
              (o[2] = e(
                'div',
                { style: { 'line-height': '36px' } },
                'justify-content:',
                -1,
              )),
            t(
              a(c),
              {
                modelValue: r.value,
                'onUpdate:modelValue': o[0] || (o[0] = (v) => (r.value = v)),
                options: l,
              },
              null,
              8,
              ['modelValue'],
            ),
            o[3] ||
              (o[3] = e(
                'div',
                { style: { 'line-height': '36px' } },
                'align-items:',
                -1,
              )),
            t(
              a(c),
              {
                modelValue: n.value,
                'onUpdate:modelValue': o[1] || (o[1] = (v) => (n.value = v)),
                options: d,
              },
              null,
              8,
              ['modelValue'],
            ),
            t(
              a(T),
              { class: 'flex-container', align: n.value, justify: r.value },
              {
                default: u(() => [
                  (U(),
                  m(
                    J,
                    null,
                    b(4, (v) => e('div', { key: v, class: 'flex-item' })),
                    64,
                  )),
                ]),
                _: 1,
              },
              8,
              ['align', 'justify'],
            ),
          ],
          64,
        )
      )
    },
  }),
  W = C(h, [['__scopeId', 'data-v-fc623443']]),
  z = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerFlex, VerRadio } from '@versakit/ui'\r
\r
const direction = ref('horizontal')\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerRadio label="horizontal" v-model="direction">horizontal</VerRadio>\r
    <VerRadio label="vertical" v-model="direction">vertical</VerRadio>\r
  </div>\r
  <VerFlex :vertical="direction === 'vertical'">\r
    <div v-for="n in 4" :key="n" class="flex-item" />\r
  </VerFlex>\r
</template>\r
\r
<style scoped>\r
.flex-item {\r
  width: 25%;\r
  height: 80px;\r
  background-color: var(--theme-primary-500, var(--ver-primary-500));\r
}\r
</style>\r
`,
  E = g({
    __name: 'base',
    setup(x) {
      const r = V('horizontal')
      return (l, n) => (
        U(),
        m(
          J,
          null,
          [
            e('div', null, [
              t(
                a(p),
                {
                  label: 'horizontal',
                  modelValue: r.value,
                  'onUpdate:modelValue': n[0] || (n[0] = (d) => (r.value = d)),
                },
                { default: u(() => n[2] || (n[2] = [s('horizontal')])), _: 1 },
                8,
                ['modelValue'],
              ),
              t(
                a(p),
                {
                  label: 'vertical',
                  modelValue: r.value,
                  'onUpdate:modelValue': n[1] || (n[1] = (d) => (r.value = d)),
                },
                { default: u(() => n[3] || (n[3] = [s('vertical')])), _: 1 },
                8,
                ['modelValue'],
              ),
            ]),
            t(
              a(T),
              { vertical: r.value === 'vertical' },
              {
                default: u(() => [
                  (U(),
                  m(
                    J,
                    null,
                    b(4, (d) => e('div', { key: d, class: 'flex-item' })),
                    64,
                  )),
                ]),
                _: 1,
              },
              8,
              ['vertical'],
            ),
          ],
          64,
        )
      )
    },
  }),
  G = C(E, [['__scopeId', 'data-v-6bf3d871']]),
  Y = { tabindex: '0' },
  I = JSON.parse(
    '{"title":"Flex 弹性布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/flex/index.md","filePath":"components/flex/index.md"}',
  ),
  A = { name: 'components/flex/index.md' },
  P = Object.assign(A, {
    setup(x) {
      return (r, l) => {
        const n = S('ClientOnly'),
          d = S('Tool')
        return (
          U(),
          m('div', null, [
            l[18] ||
              (l[18] = e(
                'h1',
                { id: 'flex-弹性布局', tabindex: '-1' },
                [
                  s('Flex 弹性布局 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#flex-弹性布局',
                      'aria-label': 'Permalink to "Flex 弹性布局"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[19] ||
              (l[19] = e(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  s('基本使用 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基本使用',
                      'aria-label': 'Permalink to "基本使用"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t(n, null, {
              default: u(() => [
                t(
                  a(f),
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
                    vueCode: a(z),
                  },
                  { vue: u(() => [t(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[20] ||
              (l[20] = e(
                'h2',
                { id: '对齐方式', tabindex: '-1' },
                [
                  s('对齐方式 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#对齐方式',
                      'aria-label': 'Permalink to "对齐方式"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t(n, null, {
              default: u(() => [
                t(
                  a(f),
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
                    vueCode: a(L),
                  },
                  { vue: u(() => [t(W)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[21] ||
              (l[21] = e(
                'h2',
                { id: '间隙设置', tabindex: '-1' },
                [
                  s('间隙设置 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#间隙设置',
                      'aria-label': 'Permalink to "间隙设置"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t(n, null, {
              default: u(() => [
                t(
                  a(f),
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
                    vueCode: a(D),
                  },
                  { vue: u(() => [t(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[22] ||
              (l[22] = e(
                'h2',
                { id: '自动换行', tabindex: '-1' },
                [
                  s('自动换行 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自动换行',
                      'aria-label': 'Permalink to "自动换行"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t(n, null, {
              default: u(() => [
                t(
                  a(f),
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
                    vueCode: a(O),
                  },
                  { vue: u(() => [t(M)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[23] ||
              (l[23] = e(
                'h2',
                { id: 'flex-api', tabindex: '-1' },
                [
                  s('Flex API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#flex-api',
                      'aria-label': 'Permalink to "Flex API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', Y, [
              l[17] ||
                (l[17] = e(
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
                l[16] ||
                  (l[16] = e(
                    'tr',
                    null,
                    [
                      e('td', null, [e('code', null, 'vertical')]),
                      e('td', null, [
                        e('code', null, 'flex'),
                        s(' 主轴的方向是否垂直'),
                      ]),
                      e('td', null, [e('code', null, 'boolean')]),
                      e('td', null, 'false'),
                    ],
                    -1,
                  )),
                e('tr', null, [
                  l[1] || (l[1] = e('td', null, [e('code', null, 'wrap')], -1)),
                  l[2] ||
                    (l[2] = e(
                      'td',
                      null,
                      [
                        s('设置元素单行显示还是多行显示；参考 '),
                        e('code', null, 'flex-wrap'),
                      ],
                      -1,
                    )),
                  e('td', null, [
                    l[0] || (l[0] = e('code', null, 'enum', -1)),
                    t(d, { value: 'nowrap,wrap,wrap-reverse' }),
                  ]),
                  l[3] || (l[3] = e('td', null, 'nowrap', -1)),
                ]),
                e('tr', null, [
                  l[5] ||
                    (l[5] = e('td', null, [e('code', null, 'justify')], -1)),
                  l[6] ||
                    (l[6] = e(
                      'td',
                      null,
                      [
                        s('设置元素在主轴方向上的对齐方式；参考 '),
                        e('code', null, 'justify-content'),
                      ],
                      -1,
                    )),
                  e('td', null, [
                    l[4] || (l[4] = e('code', null, 'enum', -1)),
                    t(d, {
                      value:
                        'normal,flex-start,center,flex-end,space-between,space-around,space-evenly',
                    }),
                  ]),
                  l[7] || (l[7] = e('td', null, 'normal', -1)),
                ]),
                e('tr', null, [
                  l[9] ||
                    (l[9] = e('td', null, [e('code', null, 'align')], -1)),
                  l[10] ||
                    (l[10] = e(
                      'td',
                      null,
                      [
                        s('设置元素在交叉轴方向上的对齐方式；参考 '),
                        e('code', null, 'align-items'),
                      ],
                      -1,
                    )),
                  e('td', null, [
                    l[8] || (l[8] = e('code', null, 'enum', -1)),
                    t(d, { value: 'normal,flex-start,center,flex-end' }),
                  ]),
                  l[11] || (l[11] = e('td', null, 'normal', -1)),
                ]),
                e('tr', null, [
                  l[13] ||
                    (l[13] = e('td', null, [e('code', null, 'gap')], -1)),
                  l[14] ||
                    (l[14] = e(
                      'td',
                      null,
                      [
                        s('设置网格之间的间隙，数组时表示: '),
                        e('code', null, '[水平间距, 垂直间距]'),
                      ],
                      -1,
                    )),
                  e('td', null, [
                    l[12] || (l[12] = e('code', null, 'enum', -1)),
                    t(d, { value: 'number,number[],small,middle,large' }),
                  ]),
                  l[15] || (l[15] = e('td', null, 'middle', -1)),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { I as __pageData, P as default }
