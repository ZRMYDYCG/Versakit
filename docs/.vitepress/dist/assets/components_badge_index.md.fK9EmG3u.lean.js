import { p as s, A as U } from './chunks/theme.CWxU7uh8.js'
import {
  p as T,
  o as i,
  b as V,
  w as r,
  G as l,
  k as a,
  a as n,
  _ as g,
  c,
  F as B,
  aq as b,
  j as e,
  B as p,
} from './chunks/framework.Z42t_U4q.js'
import { Q as m } from './chunks/index.DEUECMle.js'
const C = `<template>\r
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
  v = {
    __name: 'number',
    setup(J) {
      const u = T(95),
        t = () => {
          u.value++
        }
      return (d, o) => (
        i(),
        V(
          a(U),
          { type: 'number', value: u.value },
          {
            default: r(() => [
              l(
                a(s),
                { onClick: o[0] || (o[0] = (_) => t()) },
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
  S = {
    __name: 'base',
    setup(J) {
      return (u, t) => (
        i(),
        c(
          B,
          null,
          [
            l(a(U), null, {
              default: r(() => [
                l(
                  a(s),
                  { type: 'primary' },
                  { default: r(() => t[0] || (t[0] = [n('点我没啥')])), _: 1 },
                ),
              ]),
              _: 1,
            }),
            l(
              a(U),
              { type: 'text', value: 'new' },
              {
                default: r(() => [
                  l(a(s), null, {
                    default: r(() => t[1] || (t[1] = [n('点我没事')])),
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
  h = g(S, [['__scopeId', 'data-v-be15925e']]),
  x = { tabindex: '0' },
  D = JSON.parse(
    '{"title":"Badge 徽标","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge/index.md","filePath":"components/badge/index.md"}',
  ),
  y = { name: 'components/badge/index.md' },
  O = Object.assign(y, {
    setup(J) {
      return (u, t) => {
        const d = p('ClientOnly'),
          o = p('Tool')
        return (
          i(),
          c('div', null, [
            t[6] || (t[6] = b('', 4)),
            l(d, null, {
              default: r(() => [
                l(
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
                  { vue: r(() => [l(h)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[7] ||
              (t[7] = e(
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
            t[8] ||
              (t[8] = e(
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
            l(d, null, {
              default: r(() => [
                l(
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
                    vueCode: a(C),
                  },
                  { vue: r(() => [l(v)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[9] ||
              (t[9] = e(
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
            t[10] ||
              (t[10] = e(
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
            e('table', x, [
              t[5] ||
                (t[5] = e(
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
                  t[1] || (t[1] = e('td', null, [e('code', null, 'type')], -1)),
                  t[2] || (t[2] = e('td', null, '指定徽标的类型', -1)),
                  e('td', null, [
                    t[0] || (t[0] = e('code', null, 'enum', -1)),
                    l(o, { value: 'number,string' }),
                  ]),
                  t[3] || (t[3] = e('td', null, 'number', -1)),
                ]),
                t[4] ||
                  (t[4] = e(
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
export { D as __pageData, O as default }
