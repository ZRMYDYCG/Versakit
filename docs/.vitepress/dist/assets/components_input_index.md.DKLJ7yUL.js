import { U as c, D as m } from './chunks/theme.B5pwRwa9.js'
import {
  d as U,
  p as T,
  o as u,
  b as h,
  w as d,
  G as a,
  k as r,
  c as b,
  j as t,
  a as o,
  aq as J,
  B as f,
} from './chunks/framework.Z42t_U4q.js'
import { Q as p } from './chunks/index.DEUECMle.js'
const V = `<template>\r
  <VerRow>\r
    <VerInput disabled v-model="value" placeholder="Please input" />\r
  </VerRow>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerInput, VerRow } from '@versakit/ui'\r
\r
const value = ref('')\r
<\/script>\r
\r
<style scoped></style>\r
`,
  v = U({
    __name: 'disabled',
    setup(i) {
      const n = T('')
      return (e, l) => (
        u(),
        h(r(m), null, {
          default: d(() => [
            a(
              r(c),
              {
                disabled: '',
                modelValue: n.value,
                'onUpdate:modelValue': l[0] || (l[0] = (s) => (n.value = s)),
                placeholder: 'Please input',
              },
              null,
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  _ = `<template>\r
  <VerRow>\r
    <VerInput v-model="value" placeholder="Please input" />\r
  </VerRow>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerInput, VerRow } from '@versakit/ui'\r
\r
const value = ref('')\r
<\/script>\r
\r
<style scoped></style>\r
`,
  D = U({
    __name: 'base',
    setup(i) {
      const n = T('')
      return (e, l) => (
        u(),
        h(r(m), null, {
          default: d(() => [
            a(
              r(c),
              {
                modelValue: n.value,
                'onUpdate:modelValue': l[0] || (l[0] = (s) => (n.value = s)),
                placeholder: 'Please input',
              },
              null,
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  C = JSON.parse(
    '{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input/index.md","filePath":"components/input/index.md"}',
  ),
  R = { name: 'components/input/index.md' },
  Q = Object.assign(R, {
    setup(i) {
      return (n, e) => {
        const l = f('ClientOnly')
        return (
          u(),
          b('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'input-输入框', tabindex: '-1' },
                [
                  o('Input 输入框 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#input-输入框',
                      'aria-label': 'Permalink to "Input 输入框"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = t(
                'h2',
                { id: '基础使用', tabindex: '-1' },
                [
                  o('基础使用 '),
                  t(
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
            e[2] || (e[2] = t('p', null, '通过鼠标或键盘输入字符.', -1)),
            a(l, null, {
              default: d(() => [
                a(
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
                    vueCode: r(_),
                  },
                  { vue: d(() => [a(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[3] ||
              (e[3] = t(
                'h2',
                { id: '禁用状态', tabindex: '-1' },
                [
                  o('禁用状态 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#禁用状态',
                      'aria-label': 'Permalink to "禁用状态"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[4] ||
              (e[4] = t(
                'p',
                null,
                [
                  o('通过 '),
                  t('code', null, 'disabled'),
                  o(' 属性指定是否禁用 input 组件'),
                ],
                -1,
              )),
            a(l, null, {
              default: d(() => [
                a(
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
                    vueCode: r(V),
                  },
                  { vue: d(() => [a(v)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[5] ||
              (e[5] = J(
                '<h2 id="input-api" tabindex="-1">Input API <a class="header-anchor" href="#input-api" aria-label="Permalink to &quot;Input API&quot;">​</a></h2><h3 id="input-属性" tabindex="-1">Input 属性 <a class="header-anchor" href="#input-属性" aria-label="Permalink to &quot;Input 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>placeholder</code></td><td>输入框中未输入时默认显示的文字</td><td><code>string</code></td><td>-</td></tr><tr><td><code>modelValue</code></td><td>输入框输入内容绑定的值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>type</code></td><td>输入框的类型</td><td><code>string</code></td><td>text</td></tr><tr><td><code>disabled</code></td><td>是否禁用输入框</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { C as __pageData, Q as default }
