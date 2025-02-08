import { m as o } from './chunks/theme.DSVdNaqk.js'
import {
  o as s,
  c as J,
  G as n,
  w as a,
  a as t,
  k as r,
  F as V,
  b as T,
  j as l,
  B as U,
} from './chunks/framework.Z42t_U4q.js'
import { Q as p } from './chunks/index.DEUECMle.js'
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
  b = {
    __name: 'shadow',
    setup(d) {
      return (i, e) => (
        s(),
        J(
          V,
          null,
          [
            n(
              r(o),
              { shadow: 'always' },
              { default: a(() => e[0] || (e[0] = [t('始终')])), _: 1 },
            ),
            n(
              r(o),
              { shadow: 'hover' },
              { default: a(() => e[1] || (e[1] = [t('悬浮')])), _: 1 },
            ),
            n(
              r(o),
              { shadow: 'never' },
              { default: a(() => e[2] || (e[2] = [t('永不')])), _: 1 },
            ),
          ],
          64,
        )
      )
    },
  },
  C = `<template>\r
  <VerPanel>基本面板</VerPanel>\r
</template>\r
\r
<script setup>\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
`,
  f = {
    __name: 'base',
    setup(d) {
      return (i, e) => (
        s(),
        T(r(o), null, {
          default: a(() => e[0] || (e[0] = [t('基本面板')])),
          _: 1,
        })
      )
    },
  },
  w = { tabindex: '0' },
  g = JSON.parse(
    '{"title":"Panel 面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/panel/index.md","filePath":"components/panel/index.md"}',
  ),
  v = { name: 'components/panel/index.md' },
  k = Object.assign(v, {
    setup(d) {
      return (i, e) => {
        const u = U('ClientOnly'),
          m = U('Tool')
        return (
          s(),
          J('div', null, [
            e[5] ||
              (e[5] = l(
                'h1',
                { id: 'panel-面板', tabindex: '-1' },
                [
                  t('Panel 面板 '),
                  l(
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
            e[6] ||
              (e[6] = l(
                'p',
                null,
                '面板通常是指一个独立的容器，用于承载内容。',
                -1,
              )),
            e[7] ||
              (e[7] = l(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  t('基础用法 '),
                  l(
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
            e[8] || (e[8] = l('p', null, '这是一个很简单的面板。', -1)),
            n(u, null, {
              default: a(() => [
                n(
                  r(p),
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
                    vueCode: r(C),
                  },
                  { vue: a(() => [n(f)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[9] ||
              (e[9] = l(
                'h2',
                { id: '阴影', tabindex: '-1' },
                [
                  t('阴影 '),
                  l(
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
            e[10] ||
              (e[10] = l(
                'p',
                null,
                '你可以定义什么时候展示面板的阴影效果。',
                -1,
              )),
            e[11] ||
              (e[11] = l(
                'p',
                null,
                [
                  t('通过'),
                  l('code', null, 'shadow'),
                  t('属性设置卡片阴影出现的时刻。该属性的值可以是: '),
                  l('code', null, 'always'),
                  t('、'),
                  l('code', null, 'hover'),
                  t(' 或 '),
                  l('code', null, 'never'),
                ],
                -1,
              )),
            n(u, null, {
              default: a(() => [
                n(
                  r(p),
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
                  { vue: a(() => [n(b)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[12] ||
              (e[12] = l(
                'h2',
                { id: 'panel-api', tabindex: '-1' },
                [
                  t('Panel API '),
                  l(
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
            e[13] ||
              (e[13] = l(
                'h3',
                { id: 'panel-属性', tabindex: '-1' },
                [
                  t('Panel 属性 '),
                  l(
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
            l('table', w, [
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
                      '可以使用 shadow 来决定卡片拥有阴影的时机',
                      -1,
                    )),
                  l('td', null, [
                    e[0] || (e[0] = l('code', null, 'enum', -1)),
                    n(m, { value: 'always,hover,never' }),
                  ]),
                  e[3] ||
                    (e[3] = l('td', null, [l('code', null, 'always')], -1)),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { g as __pageData, k as default }
