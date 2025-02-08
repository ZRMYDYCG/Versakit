import { l as f, d as p, G as Z, V } from './chunks/theme.DSVdNaqk.js'
import {
  d as x,
  o as d,
  b as D,
  w as U,
  c as u,
  C as c,
  j as l,
  F as m,
  k as a,
  _ as w,
  p as v,
  h as R,
  G as t,
  a as s,
  a8 as y,
  a9 as O,
  B as h,
} from './chunks/framework.Z42t_U4q.js'
import { Q as b } from './chunks/index.DEUECMle.js'
const B = `<script setup lang="ts">\r
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
  k = x({
    __name: 'wrap',
    setup(g) {
      return (n, e) => (
        d(),
        D(
          a(f),
          { wrap: 'wrap' },
          {
            default: U(() => [
              (d(),
              u(
                m,
                null,
                c(20, (r) => l('div', { key: r, class: 'flex-item' })),
                64,
              )),
            ]),
            _: 1,
          },
        )
      )
    },
  }),
  C = w(k, [['__scopeId', 'data-v-87f29874']]),
  z = `<script setup lang="ts">\r
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
  E = x({
    __name: 'gap',
    setup(g) {
      const n = v('small'),
        e = v(16),
        r = R(() => (n.value === 'custom' ? e.value : n.value))
      return (i, o) => (
        d(),
        u(
          m,
          null,
          [
            l('div', null, [
              t(
                a(p),
                {
                  label: 'small',
                  modelValue: n.value,
                  'onUpdate:modelValue': o[0] || (o[0] = (J) => (n.value = J)),
                },
                { default: U(() => o[5] || (o[5] = [s('small')])), _: 1 },
                8,
                ['modelValue'],
              ),
              t(
                a(p),
                {
                  label: 'middle',
                  modelValue: n.value,
                  'onUpdate:modelValue': o[1] || (o[1] = (J) => (n.value = J)),
                },
                { default: U(() => o[6] || (o[6] = [s('middle')])), _: 1 },
                8,
                ['modelValue'],
              ),
              t(
                a(p),
                {
                  label: 'large',
                  modelValue: n.value,
                  'onUpdate:modelValue': o[2] || (o[2] = (J) => (n.value = J)),
                },
                { default: U(() => o[7] || (o[7] = [s('large')])), _: 1 },
                8,
                ['modelValue'],
              ),
              t(
                a(p),
                {
                  label: 'custom',
                  modelValue: n.value,
                  'onUpdate:modelValue': o[3] || (o[3] = (J) => (n.value = J)),
                },
                { default: U(() => o[8] || (o[8] = [s('custom')])), _: 1 },
                8,
                ['modelValue'],
              ),
              y(
                t(
                  a(Z),
                  {
                    modelValue: e.value,
                    'onUpdate:modelValue':
                      o[4] || (o[4] = (J) => (e.value = J)),
                  },
                  null,
                  8,
                  ['modelValue'],
                ),
                [[O, n.value === 'custom']],
              ),
            ]),
            t(
              a(f),
              { gap: r.value, style: { 'margin-top': '10px' } },
              {
                default: U(() => [
                  (d(),
                  u(
                    m,
                    null,
                    c(4, (J) => l('div', { key: J, class: 'flex-item' })),
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
  F = w(E, [['__scopeId', 'data-v-c1228679']]),
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
  j = x({
    __name: 'align',
    setup(g) {
      const n = v('flex-start'),
        e = [
          { label: 'flex-start', value: 'flex-start' },
          { label: 'center', value: 'center' },
          { label: 'flex-end', value: 'flex-end' },
          { label: 'space-between', value: 'space-between' },
          { label: 'space-around', value: 'space-around' },
          { label: 'space-evenly', value: 'space-evenly' },
        ],
        r = v('flex-start'),
        i = [
          { label: 'flex-start', value: 'flex-start' },
          { label: 'center', value: 'center' },
          { label: 'flex-end', value: 'flex-end' },
        ]
      return (o, J) => (
        d(),
        u(
          m,
          null,
          [
            J[2] ||
              (J[2] = l(
                'div',
                { style: { 'line-height': '36px' } },
                'justify-content:',
                -1,
              )),
            t(
              a(V),
              {
                modelValue: n.value,
                'onUpdate:modelValue': J[0] || (J[0] = (T) => (n.value = T)),
                options: e,
              },
              null,
              8,
              ['modelValue'],
            ),
            J[3] ||
              (J[3] = l(
                'div',
                { style: { 'line-height': '36px' } },
                'align-items:',
                -1,
              )),
            t(
              a(V),
              {
                modelValue: r.value,
                'onUpdate:modelValue': J[1] || (J[1] = (T) => (r.value = T)),
                options: i,
              },
              null,
              8,
              ['modelValue'],
            ),
            t(
              a(f),
              { class: 'flex-container', align: r.value, justify: n.value },
              {
                default: U(() => [
                  (d(),
                  u(
                    m,
                    null,
                    c(4, (T) => l('div', { key: T, class: 'flex-item' })),
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
  S = w(j, [['__scopeId', 'data-v-fc623443']]),
  G = `<script setup lang="ts">\r
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
  X = x({
    __name: 'base',
    setup(g) {
      const n = v('horizontal')
      return (e, r) => (
        d(),
        u(
          m,
          null,
          [
            l('div', null, [
              t(
                a(p),
                {
                  label: 'horizontal',
                  modelValue: n.value,
                  'onUpdate:modelValue': r[0] || (r[0] = (i) => (n.value = i)),
                },
                { default: U(() => r[2] || (r[2] = [s('horizontal')])), _: 1 },
                8,
                ['modelValue'],
              ),
              t(
                a(p),
                {
                  label: 'vertical',
                  modelValue: n.value,
                  'onUpdate:modelValue': r[1] || (r[1] = (i) => (n.value = i)),
                },
                { default: U(() => r[3] || (r[3] = [s('vertical')])), _: 1 },
                8,
                ['modelValue'],
              ),
            ]),
            t(
              a(f),
              { vertical: n.value === 'vertical' },
              {
                default: U(() => [
                  (d(),
                  u(
                    m,
                    null,
                    c(4, (i) => l('div', { key: i, class: 'flex-item' })),
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
  Q = w(X, [['__scopeId', 'data-v-6bf3d871']]),
  W = { tabindex: '0' },
  P = JSON.parse(
    '{"title":"Flex 弹性布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/flex/index.md","filePath":"components/flex/index.md"}',
  ),
  A = { name: 'components/flex/index.md' },
  q = Object.assign(A, {
    setup(g) {
      return (n, e) => {
        const r = h('ClientOnly'),
          i = h('Tool')
        return (
          d(),
          u('div', null, [
            e[18] ||
              (e[18] = l(
                'h1',
                { id: 'flex-弹性布局', tabindex: '-1' },
                [
                  s('Flex 弹性布局 '),
                  l(
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
            e[19] ||
              (e[19] = l(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  s('基本使用 '),
                  l(
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
            t(r, null, {
              default: U(() => [
                t(
                  a(b),
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
                    vueCode: a(G),
                  },
                  { vue: U(() => [t(Q)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[20] ||
              (e[20] = l(
                'h2',
                { id: '对齐方式', tabindex: '-1' },
                [
                  s('对齐方式 '),
                  l(
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
            t(r, null, {
              default: U(() => [
                t(
                  a(b),
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
                  { vue: U(() => [t(S)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[21] ||
              (e[21] = l(
                'h2',
                { id: '间隙设置', tabindex: '-1' },
                [
                  s('间隙设置 '),
                  l(
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
            t(r, null, {
              default: U(() => [
                t(
                  a(b),
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
                  { vue: U(() => [t(F)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[22] ||
              (e[22] = l(
                'h2',
                { id: '自动换行', tabindex: '-1' },
                [
                  s('自动换行 '),
                  l(
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
            t(r, null, {
              default: U(() => [
                t(
                  a(b),
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
                    vueCode: a(B),
                  },
                  { vue: U(() => [t(C)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[23] ||
              (e[23] = l(
                'h2',
                { id: 'flex-api', tabindex: '-1' },
                [
                  s('Flex API '),
                  l(
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
            l('table', W, [
              e[17] ||
                (e[17] = l(
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
                e[16] ||
                  (e[16] = l(
                    'tr',
                    null,
                    [
                      l('td', null, [l('code', null, 'vertical')]),
                      l('td', null, [
                        l('code', null, 'flex'),
                        s(' 主轴的方向是否垂直'),
                      ]),
                      l('td', null, [l('code', null, 'boolean')]),
                      l('td', null, 'false'),
                    ],
                    -1,
                  )),
                l('tr', null, [
                  e[1] || (e[1] = l('td', null, [l('code', null, 'wrap')], -1)),
                  e[2] ||
                    (e[2] = l(
                      'td',
                      null,
                      [
                        s('设置元素单行显示还是多行显示；参考 '),
                        l('code', null, 'flex-wrap'),
                      ],
                      -1,
                    )),
                  l('td', null, [
                    e[0] || (e[0] = l('code', null, 'enum', -1)),
                    t(i, { value: 'nowrap,wrap,wrap-reverse' }),
                  ]),
                  e[3] || (e[3] = l('td', null, 'nowrap', -1)),
                ]),
                l('tr', null, [
                  e[5] ||
                    (e[5] = l('td', null, [l('code', null, 'justify')], -1)),
                  e[6] ||
                    (e[6] = l(
                      'td',
                      null,
                      [
                        s('设置元素在主轴方向上的对齐方式；参考 '),
                        l('code', null, 'justify-content'),
                      ],
                      -1,
                    )),
                  l('td', null, [
                    e[4] || (e[4] = l('code', null, 'enum', -1)),
                    t(i, {
                      value:
                        'normal,flex-start,center,flex-end,space-between,space-around,space-evenly',
                    }),
                  ]),
                  e[7] || (e[7] = l('td', null, 'normal', -1)),
                ]),
                l('tr', null, [
                  e[9] ||
                    (e[9] = l('td', null, [l('code', null, 'align')], -1)),
                  e[10] ||
                    (e[10] = l(
                      'td',
                      null,
                      [
                        s('设置元素在交叉轴方向上的对齐方式；参考 '),
                        l('code', null, 'align-items'),
                      ],
                      -1,
                    )),
                  l('td', null, [
                    e[8] || (e[8] = l('code', null, 'enum', -1)),
                    t(i, { value: 'normal,flex-start,center,flex-end' }),
                  ]),
                  e[11] || (e[11] = l('td', null, 'normal', -1)),
                ]),
                l('tr', null, [
                  e[13] ||
                    (e[13] = l('td', null, [l('code', null, 'gap')], -1)),
                  e[14] ||
                    (e[14] = l(
                      'td',
                      null,
                      [
                        s('设置网格之间的间隙，数组时表示: '),
                        l('code', null, '[水平间距, 垂直间距]'),
                      ],
                      -1,
                    )),
                  l('td', null, [
                    e[12] || (e[12] = l('code', null, 'enum', -1)),
                    t(i, { value: 'number,number[],small,middle,large' }),
                  ]),
                  e[15] || (e[15] = l('td', null, 'middle', -1)),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { P as __pageData, q as default }
