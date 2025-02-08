import { $ as o } from './chunks/theme.DSVdNaqk.js'
import {
  d as m,
  o as d,
  c as s,
  j as e,
  G as a,
  w as t,
  a as r,
  k as n,
  F as U,
  _ as V,
  aq as y,
  B as T,
} from './chunks/framework.Z42t_U4q.js'
import { Q as f } from './chunks/index.DEUECMle.js'
const J = `<template>\r
  <div class="my">\r
    <VerTag>Tag 1</VerTag>\r
    <VerTag type="success">Tag 2</VerTag>\r
    <VerTag type="info">Tag 3</VerTag>\r
    <VerTag type="warn">Tag 4</VerTag>\r
    <VerTag type="error">Tag 5</VerTag>\r
  </div>\r
\r
  <div class="my">\r
    <VerTag plain>Tag 1</VerTag>\r
    <VerTag plain type="success">Tag 2</VerTag>\r
    <VerTag plain type="info">Tag 3</VerTag>\r
    <VerTag plain type="warn">Tag 4</VerTag>\r
    <VerTag plain type="error">Tag 5</VerTag>\r
  </div>\r
\r
  <div class="my">\r
    <VerTag round>Tag 1</VerTag>\r
    <VerTag round type="success">Tag 2</VerTag>\r
    <VerTag round type="info">Tag 3</VerTag>\r
    <VerTag round type="warn">Tag 4</VerTag>\r
    <VerTag round type="error">Tag 5</VerTag>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerTag } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.my {\r
  margin: 1rem 0;\r
}\r
\r
.ver-tag + .ver-tag {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  b = { class: 'my' },
  v = { class: 'my' },
  O = { class: 'my' },
  k = m({
    __name: 'base',
    setup(g) {
      return (u, l) => (
        d(),
        s(
          U,
          null,
          [
            e('div', b, [
              a(n(o), null, {
                default: t(() => l[0] || (l[0] = [r('Tag 1')])),
                _: 1,
              }),
              a(
                n(o),
                { type: 'success' },
                { default: t(() => l[1] || (l[1] = [r('Tag 2')])), _: 1 },
              ),
              a(
                n(o),
                { type: 'info' },
                { default: t(() => l[2] || (l[2] = [r('Tag 3')])), _: 1 },
              ),
              a(
                n(o),
                { type: 'warn' },
                { default: t(() => l[3] || (l[3] = [r('Tag 4')])), _: 1 },
              ),
              a(
                n(o),
                { type: 'error' },
                { default: t(() => l[4] || (l[4] = [r('Tag 5')])), _: 1 },
              ),
            ]),
            e('div', v, [
              a(
                n(o),
                { plain: '' },
                { default: t(() => l[5] || (l[5] = [r('Tag 1')])), _: 1 },
              ),
              a(
                n(o),
                { plain: '', type: 'success' },
                { default: t(() => l[6] || (l[6] = [r('Tag 2')])), _: 1 },
              ),
              a(
                n(o),
                { plain: '', type: 'info' },
                { default: t(() => l[7] || (l[7] = [r('Tag 3')])), _: 1 },
              ),
              a(
                n(o),
                { plain: '', type: 'warn' },
                { default: t(() => l[8] || (l[8] = [r('Tag 4')])), _: 1 },
              ),
              a(
                n(o),
                { plain: '', type: 'error' },
                { default: t(() => l[9] || (l[9] = [r('Tag 5')])), _: 1 },
              ),
            ]),
            e('div', O, [
              a(
                n(o),
                { round: '' },
                { default: t(() => l[10] || (l[10] = [r('Tag 1')])), _: 1 },
              ),
              a(
                n(o),
                { round: '', type: 'success' },
                { default: t(() => l[11] || (l[11] = [r('Tag 2')])), _: 1 },
              ),
              a(
                n(o),
                { round: '', type: 'info' },
                { default: t(() => l[12] || (l[12] = [r('Tag 3')])), _: 1 },
              ),
              a(
                n(o),
                { round: '', type: 'warn' },
                { default: t(() => l[13] || (l[13] = [r('Tag 4')])), _: 1 },
              ),
              a(
                n(o),
                { round: '', type: 'error' },
                { default: t(() => l[14] || (l[14] = [r('Tag 5')])), _: 1 },
              ),
            ]),
          ],
          64,
        )
      )
    },
  }),
  Q = V(k, [['__scopeId', 'data-v-020c327e']]),
  R = { tabindex: '0' },
  C = JSON.parse(
    '{"title":"Tag 标签","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag/index.md","filePath":"components/tag/index.md"}',
  ),
  E = { name: 'components/tag/index.md' },
  N = Object.assign(E, {
    setup(g) {
      return (u, l) => {
        const i = T('ClientOnly'),
          p = T('Tool')
        return (
          d(),
          s('div', null, [
            l[7] ||
              (l[7] = y(
                '<h1 id="tag-标签" tabindex="-1">Tag 标签 <a class="header-anchor" href="#tag-标签" aria-label="Permalink to &quot;Tag 标签&quot;">​</a></h1><p>用于标记和选择。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>由<code>type</code>属性来选择 tag 类型。也能通过 <code>plain</code> 让 tag 的背景变得半透明，可以通过 <code>color</code> 属性自定义颜色。</p>',
                4,
              )),
            a(i, null, {
              default: t(() => [
                a(
                  n(f),
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
                    vueCode: n(J),
                  },
                  { vue: t(() => [a(Q)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[8] ||
              (l[8] = e(
                'h2',
                { id: 'tag-api', tabindex: '-1' },
                [
                  r('Tag API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#tag-api',
                      'aria-label': 'Permalink to "Tag API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[9] ||
              (l[9] = e(
                'h3',
                { id: 'tag-属性', tabindex: '-1' },
                [
                  r('Tag 属性 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#tag-属性',
                      'aria-label': 'Permalink to "Tag 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', R, [
              l[6] ||
                (l[6] = e(
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
                  l[2] || (l[2] = e('td', null, 'Tag 的类型', -1)),
                  e('td', null, [
                    l[0] || (l[0] = e('code', null, 'enum', -1)),
                    a(p, { value: 'primary,success,info,warning,danger' }),
                  ]),
                  l[3] || (l[3] = e('td', null, 'primary', -1)),
                ]),
                l[4] ||
                  (l[4] = e(
                    'tr',
                    null,
                    [
                      e('td', null, [e('code', null, 'plain')]),
                      e('td', null, '背景是否半透明'),
                      e('td', null, [e('code', null, 'boolean')]),
                      e('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[5] ||
                  (l[5] = e(
                    'tr',
                    null,
                    [
                      e('td', null, [e('code', null, 'round')]),
                      e('td', null, 'Tag 是否为圆角'),
                      e('td', null, [e('code', null, 'boolean')]),
                      e('td', null, 'false'),
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
export { C as __pageData, N as default }
