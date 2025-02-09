import { y as s, M as i } from './chunks/theme.B5pwRwa9.js'
import {
  p as c,
  o as U,
  b,
  w as r,
  G as t,
  k as a,
  a as n,
  _ as g,
  c as J,
  F as B,
  aq as V,
  j as e,
  B as p,
} from './chunks/framework.Z42t_U4q.js'
import { Q as m } from './chunks/index.DEUECMle.js'
const v = `<template>\r
  <VerBadge type="number" :value="value1">\r
    <VerButton @click="countUp()">点我增加</VerButton>\r
  </VerBadge>\r
</template>\r
\r
<script setup>\r
import { VerBadge, VerButton } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
const value1 = ref(95)\r
\r
const countUp = () => {\r
  value1.value++\r
}\r
<\/script>\r
`,
  O = {
    __name: 'number',
    setup(T) {
      const u = c(95),
        l = () => {
          u.value++
        }
      return (d, o) => (
        U(),
        b(
          a(i),
          { type: 'number', value: u.value },
          {
            default: r(() => [
              t(
                a(s),
                { onClick: o[0] || (o[0] = (y) => l()) },
                { default: r(() => o[1] || (o[1] = [n('点我增加')])), _: 1 },
              ),
            ]),
            _: 1,
          },
          8,
          ['value'],
        )
      )
    },
  },
  f = `<template>\r
  <VerBadge>\r
    <VerButton type="primary">点我没啥</VerButton>\r
  </VerBadge>\r
  <VerBadge type="text" value="new">\r
    <VerButton>点我没事</VerButton>\r
  </VerBadge>\r
</template>\r
\r
<script setup>\r
import { VerBadge, VerButton } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped lang="scss">\r
.ver-badge {\r
  margin-right: 20px;\r
}\r
</style>\r
`,
  R = {
    __name: 'base',
    setup(T) {
      return (u, l) => (
        U(),
        J(
          B,
          null,
          [
            t(a(i), null, {
              default: r(() => [
                t(
                  a(s),
                  { type: 'primary' },
                  { default: r(() => l[0] || (l[0] = [n('点我没啥')])), _: 1 },
                ),
              ]),
              _: 1,
            }),
            t(
              a(i),
              { type: 'text', value: 'new' },
              {
                default: r(() => [
                  t(a(s), null, {
                    default: r(() => l[1] || (l[1] = [n('点我没事')])),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  },
  k = g(R, [['__scopeId', 'data-v-be15925e']]),
  D = { tabindex: '0' },
  C = JSON.parse(
    '{"title":"Badge 徽标","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge/index.md","filePath":"components/badge/index.md"}',
  ),
  Q = { name: 'components/badge/index.md' },
  x = Object.assign(Q, {
    setup(T) {
      return (u, l) => {
        const d = p('ClientOnly'),
          o = p('Tool')
        return (
          U(),
          J('div', null, [
            l[6] ||
              (l[6] = V(
                '<h1 id="badge-徽标" tabindex="-1">Badge 徽标 <a class="header-anchor" href="#badge-徽标" aria-label="Permalink to &quot;Badge 徽标&quot;">​</a></h1><p>按钮和图标上的数字或状态标记。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>可以通过设置 <code>type</code> 属性改变徽标类型。 数量值可接受 <code>Number</code> 或 <code>String。</code></p>',
                4,
              )),
            t(d, null, {
              default: r(() => [
                t(
                  a(m),
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
                    vueCode: a(f),
                  },
                  { vue: r(() => [t(k)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[7] ||
              (l[7] = e(
                'h2',
                { id: '最大值徽标', tabindex: '-1' },
                [
                  n('最大值徽标 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#最大值徽标',
                      'aria-label': 'Permalink to "最大值徽标"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[8] ||
              (l[8] = e(
                'p',
                null,
                [
                  n('当徽标中数字大于 '),
                  e('code', null, '99'),
                  n(' 时候会显示 '),
                  e('code', null, '99+'),
                  n('，使用数字徽标需将 '),
                  e('code', null, 'type'),
                  n(' 属性设置为 '),
                  e('code', null, 'number'),
                ],
                -1,
              )),
            t(d, null, {
              default: r(() => [
                t(
                  a(m),
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
                    vueCode: a(v),
                  },
                  { vue: r(() => [t(O)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[9] ||
              (l[9] = e(
                'h2',
                { id: 'badge-api', tabindex: '-1' },
                [
                  n('Badge API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#badge-api',
                      'aria-label': 'Permalink to "Badge API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[10] ||
              (l[10] = e(
                'h3',
                { id: 'badge-属性', tabindex: '-1' },
                [
                  n('Badge 属性 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#badge-属性',
                      'aria-label': 'Permalink to "Badge 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', D, [
              l[5] ||
                (l[5] = e(
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
                  l[2] || (l[2] = e('td', null, '指定徽标的类型', -1)),
                  e('td', null, [
                    l[0] || (l[0] = e('code', null, 'enum', -1)),
                    t(o, { value: 'number,string' }),
                  ]),
                  l[3] || (l[3] = e('td', null, 'number', -1)),
                ]),
                l[4] ||
                  (l[4] = e(
                    'tr',
                    null,
                    [
                      e('td', null, [e('code', null, 'value')]),
                      e('td', null, '徽标显示的值'),
                      e('td', null, [
                        e('code', null, 'number'),
                        n(' / '),
                        e('code', null, 'string'),
                      ]),
                      e('td', null, '-'),
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
export { C as __pageData, x as default }
