import { x as U, D as h, y as b } from './chunks/theme.B5pwRwa9.js'
import {
  d as p,
  o as s,
  b as B,
  w as r,
  G as t,
  a,
  k as n,
  _ as T,
  c as i,
  j as e,
  F as C,
  C as v,
  t as c,
  aq as y,
  B as m,
} from './chunks/framework.Z42t_U4q.js'
import { Q as u } from './chunks/index.DEUECMle.js'
const S = `<template>\r
  <ver-row>\r
    <ver-card style="width: 480px" shadow="always">Always</ver-card>\r
    <ver-card style="width: 480px" shadow="hover">Hover</ver-card>\r
    <ver-card style="width: 480px" shadow="never">Never</ver-card>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerCard, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.ver-card {\r
  margin: 20px 0;\r
}\r
</style>\r
`,
  x = p({
    __name: 'shadow',
    setup(o) {
      return (J, l) => (
        s(),
        B(n(h), null, {
          default: r(() => [
            t(
              n(U),
              { style: { width: '480px' }, shadow: 'always' },
              { default: r(() => l[0] || (l[0] = [a('Always')])), _: 1 },
            ),
            t(
              n(U),
              { style: { width: '480px' }, shadow: 'hover' },
              { default: r(() => l[1] || (l[1] = [a('Hover')])), _: 1 },
            ),
            t(
              n(U),
              { style: { width: '480px' }, shadow: 'never' },
              { default: r(() => l[2] || (l[2] = [a('Never')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  N = T(x, [['__scopeId', 'data-v-a1630ba3']]),
  F = `<template>\r
  <div>\r
    <ver-card>\r
      <template #header>\r
        <div>\r
          <span>头部</span>\r
        </div>\r
      </template>\r
      <div>\r
        <span>内容</span>\r
      </div>\r
      <template #footer>\r
        <div>\r
          <span>底部</span>\r
        </div>\r
      </template>\r
    </ver-card>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerCard } from '@versakit/ui'\r
<\/script>\r
`,
  g = p({
    __name: 'template',
    setup(o) {
      return (J, l) => (
        s(),
        i('div', null, [
          t(n(U), null, {
            header: r(
              () =>
                l[0] ||
                (l[0] = [e('div', null, [e('span', null, '头部')], -1)]),
            ),
            footer: r(
              () =>
                l[1] ||
                (l[1] = [e('div', null, [e('span', null, '底部')], -1)]),
            ),
            default: r(() => [
              l[2] || (l[2] = e('div', null, [e('span', null, '内容')], -1)),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  f = `<template>\r
  <div>\r
    <ver-card>\r
      <div v-for="o in 4" :key="o" class="text item">\r
        {{ 'List item ' + o }}\r
      </div>\r
    </ver-card>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerCard } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.card-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
.text {\r
  font-size: 14px;\r
}\r
\r
.item {\r
  margin-bottom: 18px;\r
}\r
</style>\r
`,
  k = p({
    __name: 'simple',
    setup(o) {
      return (J, l) => (
        s(),
        i('div', null, [
          t(n(U), null, {
            default: r(() => [
              (s(),
              i(
                C,
                null,
                v(4, (d) =>
                  e(
                    'div',
                    { key: d, class: 'text item' },
                    c('List item ' + d),
                    1,
                  ),
                ),
                64,
              )),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  w = T(k, [['__scopeId', 'data-v-0c8e15e0']]),
  D = `<template>\r
  <div>\r
    <ver-card>\r
      <template #header>\r
        <div class="card-header">\r
          <span>Card name</span>\r
          <ver-button size="sm" type="primary">按 钮</ver-button>\r
        </div>\r
      </template>\r
      <div v-for="o in 4" :key="o" class="text item">\r
        {{ 'List item ' + o }}\r
      </div>\r
    </ver-card>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerCard, VerButton } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.card-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
.text {\r
  font-size: 14px;\r
}\r
\r
.item {\r
  margin-bottom: 18px;\r
}\r
</style>\r
`,
  O = { class: 'card-header' },
  Q = p({
    __name: 'base',
    setup(o) {
      return (J, l) => (
        s(),
        i('div', null, [
          t(n(U), null, {
            header: r(() => [
              e('div', O, [
                l[1] || (l[1] = e('span', null, 'Card name', -1)),
                t(
                  n(b),
                  { size: 'sm', type: 'primary' },
                  { default: r(() => l[0] || (l[0] = [a('按 钮')])), _: 1 },
                ),
              ]),
            ]),
            default: r(() => [
              (s(),
              i(
                C,
                null,
                v(4, (d) =>
                  e(
                    'div',
                    { key: d, class: 'text item' },
                    c('List item ' + d),
                    1,
                  ),
                ),
                64,
              )),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  M = T(Q, [['__scopeId', 'data-v-79bf1b49']]),
  L = { tabindex: '0' },
  _ = JSON.parse(
    '{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card/index.md","filePath":"components/card/index.md"}',
  ),
  Y = { name: 'components/card/index.md' },
  A = Object.assign(Y, {
    setup(o) {
      return (J, l) => {
        const d = m('ClientOnly'),
          V = m('Tool')
        return (
          s(),
          i('div', null, [
            l[5] || (l[5] = y('', 5)),
            t(d, null, {
              default: r(() => [
                t(
                  n(u),
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
                    vueCode: n(D),
                  },
                  { vue: r(() => [t(M)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[6] ||
              (l[6] = e(
                'h2',
                { id: '简单卡片', tabindex: '-1' },
                [
                  a('简单卡片 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#简单卡片',
                      'aria-label': 'Permalink to "简单卡片"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[7] || (l[7] = e('p', null, '卡片可以只有内容区域。', -1)),
            t(d, null, {
              default: r(() => [
                t(
                  n(u),
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
                  { vue: r(() => [t(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[8] ||
              (l[8] = e(
                'h2',
                { id: '插槽', tabindex: '-1' },
                [
                  a('插槽 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#插槽',
                      'aria-label': 'Permalink to "插槽"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[9] || (l[9] = e('p', null, '卡片可以只有内容区域。', -1)),
            t(d, null, {
              default: r(() => [
                t(
                  n(u),
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
                  { vue: r(() => [t(g)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[10] ||
              (l[10] = e(
                'h2',
                { id: '带有阴影效果的卡片', tabindex: '-1' },
                [
                  a('带有阴影效果的卡片 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#带有阴影效果的卡片',
                      'aria-label': 'Permalink to "带有阴影效果的卡片"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[11] ||
              (l[11] = e(
                'p',
                null,
                '你可以定义什么时候展示卡片的阴影效果。',
                -1,
              )),
            l[12] ||
              (l[12] = e(
                'p',
                null,
                [
                  a('通过 '),
                  e('code', null, 'shadow'),
                  a(' 属性设置卡片阴影出现的时刻。该属性的值可以是: '),
                  e('code', null, 'always'),
                  a('、'),
                  e('code', null, 'hover'),
                  a(' 或 '),
                  e('code', null, 'never'),
                ],
                -1,
              )),
            t(d, null, {
              default: r(() => [
                t(
                  n(u),
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
                    vueCode: n(S),
                  },
                  { vue: r(() => [t(N)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[13] ||
              (l[13] = e(
                'h2',
                { id: 'card-api', tabindex: '-1' },
                [
                  a('Card API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#card-api',
                      'aria-label': 'Permalink to "Card API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[14] ||
              (l[14] = e(
                'h3',
                { id: 'card-属性', tabindex: '-1' },
                [
                  a('Card 属性 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#card-属性',
                      'aria-label': 'Permalink to "Card 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', L, [
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
                    (l[1] = e('td', null, [e('code', null, 'shadow')], -1)),
                  l[2] ||
                    (l[2] = e(
                      'td',
                      null,
                      '可以使用shadow来决定卡片拥有阴影的时机',
                      -1,
                    )),
                  e('td', null, [
                    l[0] || (l[0] = e('code', null, 'enum', -1)),
                    t(V, { value: 'always,hover,never' }),
                  ]),
                  l[3] || (l[3] = e('td', null, 'always', -1)),
                ]),
              ]),
            ]),
            l[15] ||
              (l[15] = e(
                'h3',
                { id: 'card-插槽', tabindex: '-1' },
                [
                  a('Card 插槽 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#card-插槽',
                      'aria-label': 'Permalink to "Card 插槽"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[16] ||
              (l[16] = e(
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
                      e('td', null, [e('code', null, 'header')]),
                      e('td', null, '卡片标题内容'),
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
export { _ as __pageData, A as default }
