import { p as m, P as p } from './chunks/theme.CWxU7uh8.js'
import {
  d as D,
  p as f,
  o as U,
  c as w,
  G as t,
  w as a,
  a as o,
  k as d,
  j as e,
  B as v,
} from './chunks/framework.Z42t_U4q.js'
import { Q as T } from './chunks/index.DEUECMle.js'
const J = `<template>\r
  <div>\r
    <VerButton @click="drawerLeft = true">Left</VerButton>\r
    <VerButton @click="drawerTop = true">Top</VerButton>\r
    <VerButton @click="drawerRight = true">Right</VerButton>\r
    <VerButton @click="drawerBottom = true">Bottom</VerButton>\r
\r
    <VerDrawer v-model="drawerLeft">\r
      <span>左边</span>\r
    </VerDrawer>\r
\r
    <VerDrawer direction="top" v-model="drawerTop">\r
      <span>上面</span>\r
    </VerDrawer>\r
\r
    <VerDrawer direction="right" v-model="drawerRight">\r
      <span>上面</span>\r
    </VerDrawer>\r
\r
    <VerDrawer direction="bottom" v-model="drawerBottom">\r
      <span>上面</span>\r
    </VerDrawer>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerDrawer, VerButton } from '@versakit/ui'\r
\r
const drawerLeft = ref(false)\r
const drawerTop = ref(false)\r
const drawerRight = ref(false)\r
const drawerBottom = ref(false)\r
<\/script>\r
`,
  B = D({
    __name: 'direction',
    setup(V) {
      const s = f(!1),
        l = f(!1),
        n = f(!1),
        i = f(!1)
      return (O, r) => (
        U(),
        w('div', null, [
          t(
            d(m),
            { onClick: r[0] || (r[0] = (u) => (s.value = !0)) },
            { default: a(() => r[8] || (r[8] = [o('Left')])), _: 1 },
          ),
          t(
            d(m),
            { onClick: r[1] || (r[1] = (u) => (l.value = !0)) },
            { default: a(() => r[9] || (r[9] = [o('Top')])), _: 1 },
          ),
          t(
            d(m),
            { onClick: r[2] || (r[2] = (u) => (n.value = !0)) },
            { default: a(() => r[10] || (r[10] = [o('Right')])), _: 1 },
          ),
          t(
            d(m),
            { onClick: r[3] || (r[3] = (u) => (i.value = !0)) },
            { default: a(() => r[11] || (r[11] = [o('Bottom')])), _: 1 },
          ),
          t(
            d(p),
            {
              modelValue: s.value,
              'onUpdate:modelValue': r[4] || (r[4] = (u) => (s.value = u)),
            },
            {
              default: a(
                () => r[12] || (r[12] = [e('span', null, '左边', -1)]),
              ),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
          t(
            d(p),
            {
              direction: 'top',
              modelValue: l.value,
              'onUpdate:modelValue': r[5] || (r[5] = (u) => (l.value = u)),
            },
            {
              default: a(
                () => r[13] || (r[13] = [e('span', null, '上面', -1)]),
              ),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
          t(
            d(p),
            {
              direction: 'right',
              modelValue: n.value,
              'onUpdate:modelValue': r[6] || (r[6] = (u) => (n.value = u)),
            },
            {
              default: a(
                () => r[14] || (r[14] = [e('span', null, '上面', -1)]),
              ),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
          t(
            d(p),
            {
              direction: 'bottom',
              modelValue: i.value,
              'onUpdate:modelValue': r[7] || (r[7] = (u) => (i.value = u)),
            },
            {
              default: a(
                () => r[15] || (r[15] = [e('span', null, '上面', -1)]),
              ),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  b = `<template>\r
  <div>\r
    <VerButton @click="drawerLeft = true">基本使用</VerButton>\r
\r
    <VerDrawer v-model="drawerLeft">\r
      <span>左边</span>\r
    </VerDrawer>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerDrawer, VerButton } from '@versakit/ui'\r
\r
const drawerLeft = ref(false)\r
<\/script>\r
`,
  k = D({
    __name: 'base',
    setup(V) {
      const s = f(!1)
      return (l, n) => (
        U(),
        w('div', null, [
          t(
            d(m),
            { onClick: n[0] || (n[0] = (i) => (s.value = !0)) },
            { default: a(() => n[2] || (n[2] = [o('基本使用')])), _: 1 },
          ),
          t(
            d(p),
            {
              modelValue: s.value,
              'onUpdate:modelValue': n[1] || (n[1] = (i) => (s.value = i)),
            },
            {
              default: a(() => n[3] || (n[3] = [e('span', null, '左边', -1)])),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  g = { tabindex: '0' },
  x = JSON.parse(
    '{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer/index.md","filePath":"components/drawer/index.md"}',
  ),
  C = { name: 'components/drawer/index.md' },
  E = Object.assign(C, {
    setup(V) {
      return (s, l) => {
        const n = v('ClientOnly'),
          i = v('Tool')
        return (
          U(),
          w('div', null, [
            l[5] ||
              (l[5] = e(
                'h1',
                { id: 'drawer-抽屉', tabindex: '-1' },
                [
                  o('Drawer 抽屉 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#drawer-抽屉',
                      'aria-label': 'Permalink to "Drawer 抽屉"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[6] ||
              (l[6] = e(
                'p',
                null,
                [
                  o('有些时候, '),
                  e('code', null, 'Dialog'),
                  o(
                    ' 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档。',
                  ),
                ],
                -1,
              )),
            l[7] ||
              (l[7] = e(
                'h2',
                { id: '基础使用', tabindex: '-1' },
                [
                  o('基础使用 '),
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
            l[8] ||
              (l[8] = e('p', null, '呼出一个临时的侧边栏，自定义内容。', -1)),
            t(n, null, {
              default: a(() => [
                t(
                  d(T),
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
                    vueCode: d(b),
                  },
                  { vue: a(() => [t(k)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[9] ||
              (l[9] = e(
                'h2',
                { id: '不同方向', tabindex: '-1' },
                [
                  o('不同方向 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#不同方向',
                      'aria-label': 'Permalink to "不同方向"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[10] ||
              (l[10] = e(
                'p',
                null,
                [
                  o('抽屉可以从四个方向呼出，可以用 '),
                  e('code', null, 'direction'),
                  o(' 设置。'),
                ],
                -1,
              )),
            t(n, null, {
              default: a(() => [
                t(
                  d(T),
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
                    vueCode: d(J),
                  },
                  { vue: a(() => [t(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[11] ||
              (l[11] = e(
                'h2',
                { id: 'drawer-api', tabindex: '-1' },
                [
                  o('Drawer API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#drawer-api',
                      'aria-label': 'Permalink to "Drawer API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[12] ||
              (l[12] = e(
                'h3',
                { id: 'drawer-属性', tabindex: '-1' },
                [
                  o('Drawer 属性 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#drawer-属性',
                      'aria-label': 'Permalink to "Drawer 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', g, [
              l[4] ||
                (l[4] = e(
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
                  l[1] ||
                    (l[1] = e('td', null, [e('code', null, 'direction')], -1)),
                  l[2] || (l[2] = e('td', null, '设置呼出的方向', -1)),
                  e('td', null, [
                    l[0] || (l[0] = e('code', null, 'enum', -1)),
                    t(i, { value: 'left,top,right,bottom' }),
                  ]),
                  l[3] || (l[3] = e('td', null, 'left', -1)),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { x as __pageData, E as default }
