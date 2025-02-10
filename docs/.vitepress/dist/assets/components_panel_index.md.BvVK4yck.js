import { l as o } from './chunks/theme.BxWFLTKc.js'
import {
  o as s,
  c as m,
  G as n,
  w as a,
  a as t,
  k as r,
  F as J,
  b,
  j as e,
  B as p,
} from './chunks/framework.Z42t_U4q.js'
import { Q as U } from './chunks/index.DEUECMle.js'
const h = `<template>\r
  <VerPanel shadow="always">始终</VerPanel>\r
  <VerPanel shadow="hover">悬浮</VerPanel>\r
  <VerPanel shadow="never">永不</VerPanel>\r
</template>\r
\r
<script setup>\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
`,
  w = {
    __name: 'shadow',
    setup(d) {
      return (i, l) => (
        s(),
        m(
          J,
          null,
          [
            n(
              r(o),
              { shadow: 'always' },
              { default: a(() => l[0] || (l[0] = [t('始终')])), _: 1 },
            ),
            n(
              r(o),
              { shadow: 'hover' },
              { default: a(() => l[1] || (l[1] = [t('悬浮')])), _: 1 },
            ),
            n(
              r(o),
              { shadow: 'never' },
              { default: a(() => l[2] || (l[2] = [t('永不')])), _: 1 },
            ),
          ],
          64,
        )
      )
    },
  },
  f = `<template>\r
  <VerPanel>基本面板</VerPanel>\r
</template>\r
\r
<script setup>\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
`,
  v = {
    __name: 'base',
    setup(d) {
      return (i, l) => (
        s(),
        b(r(o), null, {
          default: a(() => l[0] || (l[0] = [t('基本面板')])),
          _: 1,
        })
      )
    },
  },
  V = { tabindex: '0' },
  P = JSON.parse(
    '{"title":"Panel 面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/panel/index.md","filePath":"components/panel/index.md"}',
  ),
  O = { name: 'components/panel/index.md' },
  C = Object.assign(O, {
    setup(d) {
      return (i, l) => {
        const u = p('ClientOnly'),
          T = p('Tool')
        return (
          s(),
          m('div', null, [
            l[5] ||
              (l[5] = e(
                'h1',
                { id: 'panel-面板', tabindex: '-1' },
                [
                  t('Panel 面板 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#panel-面板',
                      'aria-label': 'Permalink to "Panel 面板"',
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
                '面板通常是指一个独立的容器，用于承载内容。',
                -1,
              )),
            l[7] ||
              (l[7] = e(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  t('基础用法 '),
                  e(
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
            l[8] || (l[8] = e('p', null, '这是一个很简单的面板。', -1)),
            n(u, null, {
              default: a(() => [
                n(
                  r(U),
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
                    vueCode: r(f),
                  },
                  { vue: a(() => [n(v)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[9] ||
              (l[9] = e(
                'h2',
                { id: '阴影', tabindex: '-1' },
                [
                  t('阴影 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#阴影',
                      'aria-label': 'Permalink to "阴影"',
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
                '你可以定义什么时候展示面板的阴影效果。',
                -1,
              )),
            l[11] ||
              (l[11] = e(
                'p',
                null,
                [
                  t('通过'),
                  e('code', null, 'shadow'),
                  t('属性设置卡片阴影出现的时刻。该属性的值可以是: '),
                  e('code', null, 'always'),
                  t('、'),
                  e('code', null, 'hover'),
                  t(' 或 '),
                  e('code', null, 'never'),
                ],
                -1,
              )),
            n(u, null, {
              default: a(() => [
                n(
                  r(U),
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
                  { vue: a(() => [n(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[12] ||
              (l[12] = e(
                'h2',
                { id: 'panel-api', tabindex: '-1' },
                [
                  t('Panel API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#panel-api',
                      'aria-label': 'Permalink to "Panel API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[13] ||
              (l[13] = e(
                'h3',
                { id: 'panel-属性', tabindex: '-1' },
                [
                  t('Panel 属性 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#panel-属性',
                      'aria-label': 'Permalink to "Panel 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', V, [
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
                      '可以使用 shadow 来决定卡片拥有阴影的时机',
                      -1,
                    )),
                  e('td', null, [
                    l[0] || (l[0] = e('code', null, 'enum', -1)),
                    n(T, { value: 'always,hover,never' }),
                  ]),
                  l[3] ||
                    (l[3] = e('td', null, [e('code', null, 'always')], -1)),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { P as __pageData, C as default }
