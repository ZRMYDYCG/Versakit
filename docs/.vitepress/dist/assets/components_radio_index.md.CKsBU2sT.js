import { e as s } from './chunks/theme.CWxU7uh8.js'
import {
  d as J,
  p as V,
  o as u,
  c as m,
  G as d,
  w as o,
  a as r,
  k as n,
  j as a,
  aq as b,
  B as v,
} from './chunks/framework.Z42t_U4q.js'
import { Q as p } from './chunks/index.DEUECMle.js'
const T = `<template>\r
  <div>\r
    <VerRadio disabled label="1" v-model="gender">男</VerRadio>\r
    <VerRadio disabled label="0" v-model="gender">女</VerRadio>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerRadio } from '@versakit/ui'\r
\r
const gender = ref(1)\r
<\/script>\r
`,
  f = J({
    __name: 'disabled',
    setup(U) {
      const t = V(1)
      return (l, e) => (
        u(),
        m('div', null, [
          d(
            n(s),
            {
              disabled: '',
              label: '1',
              modelValue: t.value,
              'onUpdate:modelValue': e[0] || (e[0] = (i) => (t.value = i)),
            },
            { default: o(() => e[2] || (e[2] = [r('男')])), _: 1 },
            8,
            ['modelValue'],
          ),
          d(
            n(s),
            {
              disabled: '',
              label: '0',
              modelValue: t.value,
              'onUpdate:modelValue': e[1] || (e[1] = (i) => (t.value = i)),
            },
            { default: o(() => e[3] || (e[3] = [r('女')])), _: 1 },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  c = `<template>\r
  <div>\r
    <VerRadio label="1" v-model="gender">男</VerRadio>\r
    <VerRadio label="0" v-model="gender">女</VerRadio>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerRadio } from '@versakit/ui'\r
\r
const gender = ref(1)\r
<\/script>\r
`,
  C = J({
    __name: 'base',
    setup(U) {
      const t = V(1)
      return (l, e) => (
        u(),
        m('div', null, [
          d(
            n(s),
            {
              label: '1',
              modelValue: t.value,
              'onUpdate:modelValue': e[0] || (e[0] = (i) => (t.value = i)),
            },
            { default: o(() => e[2] || (e[2] = [r('男')])), _: 1 },
            8,
            ['modelValue'],
          ),
          d(
            n(s),
            {
              label: '0',
              modelValue: t.value,
              'onUpdate:modelValue': e[1] || (e[1] = (i) => (t.value = i)),
            },
            { default: o(() => e[3] || (e[3] = [r('女')])), _: 1 },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  x = JSON.parse(
    '{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio/index.md","filePath":"components/radio/index.md"}',
  ),
  h = { name: 'components/radio/index.md' },
  S = Object.assign(h, {
    setup(U) {
      return (t, l) => {
        const e = v('ClientOnly')
        return (
          u(),
          m('div', null, [
            l[0] ||
              (l[0] = a(
                'h1',
                { id: 'radio-单选框', tabindex: '-1' },
                [
                  r('Radio 单选框 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#radio-单选框',
                      'aria-label': 'Permalink to "Radio 单选框"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[1] || (l[1] = a('p', null, '在一组备选项中进行单选。', -1)),
            l[2] ||
              (l[2] = a(
                'h2',
                { id: '基础使用', tabindex: '-1' },
                [
                  r('基础使用 '),
                  a(
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
            l[3] || (l[3] = a('p', null, '单选框的基本使用。', -1)),
            d(e, null, {
              default: o(() => [
                d(
                  n(p),
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
                    vueCode: n(c),
                  },
                  { vue: o(() => [d(C)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[4] ||
              (l[4] = a(
                'h2',
                { id: '禁用状态', tabindex: '-1' },
                [
                  r('禁用状态 '),
                  a(
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
            l[5] ||
              (l[5] = a(
                'p',
                null,
                [
                  a('code', null, 'disabled'),
                  r(' 属性可以用来控制单选框的禁用状态。'),
                ],
                -1,
              )),
            d(e, null, {
              default: o(() => [
                d(
                  n(p),
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
                    vueCode: n(T),
                  },
                  { vue: o(() => [d(f)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[6] ||
              (l[6] = b(
                '<h2 id="radio-api" tabindex="-1">Radio API <a class="header-anchor" href="#radio-api" aria-label="Permalink to &quot;Radio API&quot;">​</a></h2><h3 id="radio-属性" tabindex="-1">Radio 属性 <a class="header-anchor" href="#radio-属性" aria-label="Permalink to &quot;Radio 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code> / <code>model-value</code></td><td>选中项绑定值</td><td><code>string</code> / <code>number</code> / <code>boolean</code></td><td>-</td></tr><tr><td><code>disabled</code></td><td>是否禁用单选框</td><td><code>boolean</code></td><td>false</td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { x as __pageData, S as default }
