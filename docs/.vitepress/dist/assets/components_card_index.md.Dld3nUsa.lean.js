import { k as d, Q as w, p as g } from './chunks/theme.DSVdNaqk.js'
import {
  d as u,
  o as U,
  b as x,
  w as r,
  G as t,
  a,
  k as n,
  _ as p,
  c as s,
  j as l,
  F as h,
  C as m,
  t as b,
  aq as D,
  B as c,
} from './chunks/framework.Z42t_U4q.js'
import { Q as T } from './chunks/index.DEUECMle.js'
const C = `<template>\r
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
  B = u({
    __name: 'shadow',
    setup(o) {
      return (i, e) => (
        U(),
        x(n(w), null, {
          default: r(() => [
            t(
              n(d),
              { style: { width: '480px' }, shadow: 'always' },
              { default: r(() => e[0] || (e[0] = [a('Always')])), _: 1 },
            ),
            t(
              n(d),
              { style: { width: '480px' }, shadow: 'hover' },
              { default: r(() => e[1] || (e[1] = [a('Hover')])), _: 1 },
            ),
            t(
              n(d),
              { style: { width: '480px' }, shadow: 'never' },
              { default: r(() => e[2] || (e[2] = [a('Never')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  f = p(B, [['__scopeId', 'data-v-a1630ba3']]),
  k = `<template>\r
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
  O = u({
    __name: 'template',
    setup(o) {
      return (i, e) => (
        U(),
        s('div', null, [
          t(n(d), null, {
            header: r(
              () =>
                e[0] ||
                (e[0] = [l('div', null, [l('span', null, '头部')], -1)]),
            ),
            footer: r(
              () =>
                e[1] ||
                (e[1] = [l('div', null, [l('span', null, '底部')], -1)]),
            ),
            default: r(() => [
              e[2] || (e[2] = l('div', null, [l('span', null, '内容')], -1)),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  R = `<template>\r
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
  y = u({
    __name: 'simple',
    setup(o) {
      return (i, e) => (
        U(),
        s('div', null, [
          t(n(d), null, {
            default: r(() => [
              (U(),
              s(
                h,
                null,
                m(4, (J) =>
                  l(
                    'div',
                    { key: J, class: 'text item' },
                    b('List item ' + J),
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
  E = p(y, [['__scopeId', 'data-v-0c8e15e0']]),
  L = `<template>\r
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
  Q = { class: 'card-header' },
  Z = u({
    __name: 'base',
    setup(o) {
      return (i, e) => (
        U(),
        s('div', null, [
          t(n(d), null, {
            header: r(() => [
              l('div', Q, [
                e[1] || (e[1] = l('span', null, 'Card name', -1)),
                t(
                  n(g),
                  { size: 'sm', type: 'primary' },
                  { default: r(() => e[0] || (e[0] = [a('按 钮')])), _: 1 },
                ),
              ]),
            ]),
            default: r(() => [
              (U(),
              s(
                h,
                null,
                m(4, (J) =>
                  l(
                    'div',
                    { key: J, class: 'text item' },
                    b('List item ' + J),
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
  z = p(Z, [['__scopeId', 'data-v-79bf1b49']]),
  _ = { tabindex: '0' },
  A = JSON.parse(
    '{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card/index.md","filePath":"components/card/index.md"}',
  ),
  N = { name: 'components/card/index.md' },
  W = Object.assign(N, {
    setup(o) {
      return (i, e) => {
        const J = c('ClientOnly'),
          v = c('Tool')
        return (
          U(),
          s('div', null, [
            e[5] || (e[5] = D('', 5)),
            t(J, null, {
              default: r(() => [
                t(
                  n(T),
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
                    vueCode: n(L),
                  },
                  { vue: r(() => [t(z)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[6] ||
              (e[6] = l(
                'h2',
                { id: '简单卡片', tabindex: '-1' },
                [
                  a('简单卡片 '),
                  l(
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
            e[7] || (e[7] = l('p', null, '卡片可以只有内容区域。', -1)),
            t(J, null, {
              default: r(() => [
                t(
                  n(T),
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
                    vueCode: n(R),
                  },
                  { vue: r(() => [t(E)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[8] ||
              (e[8] = l(
                'h2',
                { id: '插槽', tabindex: '-1' },
                [
                  a('插槽 '),
                  l(
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
            e[9] || (e[9] = l('p', null, '卡片可以只有内容区域。', -1)),
            t(J, null, {
              default: r(() => [
                t(
                  n(T),
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
                    vueCode: n(k),
                  },
                  { vue: r(() => [t(O)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[10] ||
              (e[10] = l(
                'h2',
                { id: '带有阴影效果的卡片', tabindex: '-1' },
                [
                  a('带有阴影效果的卡片 '),
                  l(
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
            e[11] ||
              (e[11] = l(
                'p',
                null,
                '你可以定义什么时候展示卡片的阴影效果。',
                -1,
              )),
            e[12] ||
              (e[12] = l(
                'p',
                null,
                [
                  a('通过 '),
                  l('code', null, 'shadow'),
                  a(' 属性设置卡片阴影出现的时刻。该属性的值可以是: '),
                  l('code', null, 'always'),
                  a('、'),
                  l('code', null, 'hover'),
                  a(' 或 '),
                  l('code', null, 'never'),
                ],
                -1,
              )),
            t(J, null, {
              default: r(() => [
                t(
                  n(T),
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
                    vueCode: n(C),
                  },
                  { vue: r(() => [t(f)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[13] ||
              (e[13] = l(
                'h2',
                { id: 'card-api', tabindex: '-1' },
                [
                  a('Card API '),
                  l(
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
            e[14] ||
              (e[14] = l(
                'h3',
                { id: 'card-属性', tabindex: '-1' },
                [
                  a('Card 属性 '),
                  l(
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
            l('table', _, [
              e[4] ||
                (e[4] = l(
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
                    (e[1] = l('td', null, [l('code', null, 'shadow')], -1)),
                  e[2] ||
                    (e[2] = l(
                      'td',
                      null,
                      '可以使用shadow来决定卡片拥有阴影的时机',
                      -1,
                    )),
                  l('td', null, [
                    e[0] || (e[0] = l('code', null, 'enum', -1)),
                    t(v, { value: 'always,hover,never' }),
                  ]),
                  e[3] || (e[3] = l('td', null, 'always', -1)),
                ]),
              ]),
            ]),
            e[15] ||
              (e[15] = l(
                'h3',
                { id: 'card-插槽', tabindex: '-1' },
                [
                  a('Card 插槽 '),
                  l(
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
            e[16] ||
              (e[16] = l(
                'table',
                { tabindex: '0' },
                [
                  l('thead', null, [
                    l('tr', null, [
                      l('th', null, '插槽名'),
                      l('th', null, '说明'),
                    ]),
                  ]),
                  l('tbody', null, [
                    l('tr', null, [
                      l('td', null, [l('code', null, 'header')]),
                      l('td', null, '卡片标题内容'),
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
export { A as __pageData, W as default }
