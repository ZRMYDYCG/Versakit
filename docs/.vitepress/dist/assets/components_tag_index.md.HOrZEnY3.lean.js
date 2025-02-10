import { u as o } from './chunks/theme.BxWFLTKc.js'
import {
  d as J,
  o as s,
  c as g,
  j as t,
  G as l,
  w as a,
  a as r,
  k as n,
  F as U,
  _ as m,
  aq as f,
  B as T,
} from './chunks/framework.Z42t_U4q.js'
import { Q as y } from './chunks/index.DEUECMle.js'
const V = `<template>\r
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
  v = { class: 'my' },
  x = { class: 'my' },
  b = { class: 'my' },
  B = J({
    __name: 'base',
    setup(d) {
      return (u, e) => (
        s(),
        g(
          U,
          null,
          [
            t('div', v, [
              l(n(o), null, {
                default: a(() => e[0] || (e[0] = [r('Tag 1')])),
                _: 1,
              }),
              l(
                n(o),
                { type: 'success' },
                { default: a(() => e[1] || (e[1] = [r('Tag 2')])), _: 1 },
              ),
              l(
                n(o),
                { type: 'info' },
                { default: a(() => e[2] || (e[2] = [r('Tag 3')])), _: 1 },
              ),
              l(
                n(o),
                { type: 'warn' },
                { default: a(() => e[3] || (e[3] = [r('Tag 4')])), _: 1 },
              ),
              l(
                n(o),
                { type: 'error' },
                { default: a(() => e[4] || (e[4] = [r('Tag 5')])), _: 1 },
              ),
            ]),
            t('div', x, [
              l(
                n(o),
                { plain: '' },
                { default: a(() => e[5] || (e[5] = [r('Tag 1')])), _: 1 },
              ),
              l(
                n(o),
                { plain: '', type: 'success' },
                { default: a(() => e[6] || (e[6] = [r('Tag 2')])), _: 1 },
              ),
              l(
                n(o),
                { plain: '', type: 'info' },
                { default: a(() => e[7] || (e[7] = [r('Tag 3')])), _: 1 },
              ),
              l(
                n(o),
                { plain: '', type: 'warn' },
                { default: a(() => e[8] || (e[8] = [r('Tag 4')])), _: 1 },
              ),
              l(
                n(o),
                { plain: '', type: 'error' },
                { default: a(() => e[9] || (e[9] = [r('Tag 5')])), _: 1 },
              ),
            ]),
            t('div', b, [
              l(
                n(o),
                { round: '' },
                { default: a(() => e[10] || (e[10] = [r('Tag 1')])), _: 1 },
              ),
              l(
                n(o),
                { round: '', type: 'success' },
                { default: a(() => e[11] || (e[11] = [r('Tag 2')])), _: 1 },
              ),
              l(
                n(o),
                { round: '', type: 'info' },
                { default: a(() => e[12] || (e[12] = [r('Tag 3')])), _: 1 },
              ),
              l(
                n(o),
                { round: '', type: 'warn' },
                { default: a(() => e[13] || (e[13] = [r('Tag 4')])), _: 1 },
              ),
              l(
                n(o),
                { round: '', type: 'error' },
                { default: a(() => e[14] || (e[14] = [r('Tag 5')])), _: 1 },
              ),
            ]),
          ],
          64,
        )
      )
    },
  }),
  D = m(B, [['__scopeId', 'data-v-020c327e']]),
  w = { tabindex: '0' },
  R = JSON.parse(
    '{"title":"Tag 标签","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag/index.md","filePath":"components/tag/index.md"}',
  ),
  C = { name: 'components/tag/index.md' },
  _ = Object.assign(C, {
    setup(d) {
      return (u, e) => {
        const i = T('ClientOnly'),
          p = T('Tool')
        return (
          s(),
          g('div', null, [
            e[7] || (e[7] = f('', 4)),
            l(i, null, {
              default: a(() => [
                l(
                  n(y),
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
                    vueCode: n(V),
                  },
                  { vue: a(() => [l(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[8] ||
              (e[8] = t(
                'h2',
                { id: 'tag-api', tabindex: '-1' },
                [
                  r('Tag API '),
                  t(
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
            e[9] ||
              (e[9] = t(
                'h3',
                { id: 'tag-属性', tabindex: '-1' },
                [
                  r('Tag 属性 '),
                  t(
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
            t('table', w, [
              e[6] ||
                (e[6] = t(
                  'thead',
                  null,
                  [
                    t('tr', null, [
                      t('th', null, '属性'),
                      t('th', null, '说明'),
                      t('th', null, '类型'),
                      t('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              t('tbody', null, [
                t('tr', null, [
                  e[1] || (e[1] = t('td', null, [t('code', null, 'type')], -1)),
                  e[2] || (e[2] = t('td', null, 'Tag 的类型', -1)),
                  t('td', null, [
                    e[0] || (e[0] = t('code', null, 'enum', -1)),
                    l(p, { value: 'primary,success,info,warning,danger' }),
                  ]),
                  e[3] || (e[3] = t('td', null, 'primary', -1)),
                ]),
                e[4] ||
                  (e[4] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'plain')]),
                      t('td', null, '背景是否半透明'),
                      t('td', null, [t('code', null, 'boolean')]),
                      t('td', null, 'false'),
                    ],
                    -1,
                  )),
                e[5] ||
                  (e[5] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'round')]),
                      t('td', null, 'Tag 是否为圆角'),
                      t('td', null, [t('code', null, 'boolean')]),
                      t('td', null, 'false'),
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
export { R as __pageData, _ as default }
