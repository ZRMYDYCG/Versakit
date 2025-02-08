import { u as c } from './chunks/theme.DSVdNaqk.js'
import {
  d as T,
  p,
  o as n,
  b as h,
  k as r,
  _ as V,
  c as m,
  j as t,
  a as U,
  G as a,
  w as J,
  aq as u,
  B as x,
} from './chunks/framework.Z42t_U4q.js'
import { Q as i } from './chunks/index.DEUECMle.js'
const C = `<template>\r
  <VerTextarea v-model="textarea" :maxlength="10" placeholder="请输入内容" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { VerTextarea } from '@versakit/ui'\r
const textarea = ref('')\r
<\/script>\r
\r
<style scoped>\r
.ver-textarea {\r
  width: 300px;\r
  height: 100px;\r
}\r
</style>\r
`,
  S = T({
    __name: 'maxlength',
    setup(o) {
      const d = p('')
      return (e, l) => (
        n(),
        h(
          r(c),
          {
            modelValue: d.value,
            'onUpdate:modelValue': l[0] || (l[0] = (s) => (d.value = s)),
            maxlength: 10,
            placeholder: '请输入内容',
          },
          null,
          8,
          ['modelValue'],
        )
      )
    },
  }),
  b = V(S, [['__scopeId', 'data-v-2a678aff']]),
  g = `<template>\r
  <VerTextarea disabled placeholder="请输入内容" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerTextarea } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.ver-textarea {\r
  width: 300px;\r
  height: 100px;\r
}\r
</style>\r
`,
  R = T({
    __name: 'disabled',
    setup(o) {
      return (d, e) => (
        n(), h(r(c), { disabled: '', placeholder: '请输入内容' })
      )
    },
  }),
  B = V(R, [['__scopeId', 'data-v-05b5a5bb']]),
  F = `<template>\r
  <VerTextarea v-model="textareaVal" placeholder="请输入内容" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref } from 'vue'\r
import { VerTextarea } from '@versakit/ui'\r
const textareaVal = ref('')\r
<\/script>\r
\r
<style scoped>\r
.ver-textarea {\r
  width: 300px;\r
  height: 100px;\r
}\r
</style>\r
`,
  f = T({
    __name: 'base',
    setup(o) {
      const d = p('')
      return (e, l) => (
        n(),
        h(
          r(c),
          {
            modelValue: d.value,
            'onUpdate:modelValue': l[0] || (l[0] = (s) => (d.value = s)),
            placeholder: '请输入内容',
          },
          null,
          8,
          ['modelValue'],
        )
      )
    },
  }),
  v = V(f, [['__scopeId', 'data-v-c72943d0']]),
  _ = JSON.parse(
    '{"title":"TextArea 文本域","description":"","frontmatter":{},"headers":[],"relativePath":"components/textarea/index.md","filePath":"components/textarea/index.md"}',
  ),
  N = { name: 'components/textarea/index.md' },
  L = Object.assign(N, {
    setup(o) {
      return (d, e) => {
        const l = x('ClientOnly')
        return (
          n(),
          m('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'textarea-文本域', tabindex: '-1' },
                [
                  U('TextArea 文本域 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#textarea-文本域',
                      'aria-label': 'Permalink to "TextArea 文本域"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = t(
                'p',
                null,
                '多行纯文本编辑控件，适用于评论或反馈表单中的一段意见。',
                -1,
              )),
            e[2] ||
              (e[2] = t(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  U('基础用法 '),
                  t(
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
            e[3] || (e[3] = t('p', null, '用于多行输入。', -1)),
            a(l, null, {
              default: J(() => [
                a(
                  r(i),
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
                    vueCode: r(F),
                  },
                  { vue: J(() => [a(v)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[4] ||
              (e[4] = t(
                'h2',
                { id: '禁用状态', tabindex: '-1' },
                [
                  U('禁用状态 '),
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
            e[5] ||
              (e[5] = t(
                'p',
                null,
                [
                  U('使用 '),
                  t('code', null, 'disabled'),
                  U(' 属性设置不可点击。'),
                ],
                -1,
              )),
            a(l, null, {
              default: J(() => [
                a(
                  r(i),
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
                    vueCode: r(g),
                  },
                  { vue: J(() => [a(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[6] ||
              (e[6] = t(
                'h2',
                { id: '限制长度', tabindex: '-1' },
                [
                  U('限制长度 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#限制长度',
                      'aria-label': 'Permalink to "限制长度"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[7] ||
              (e[7] = t(
                'p',
                null,
                [
                  U('使用 '),
                  t('code', null, 'maxlength'),
                  U(' 属性限制最大输入长度。'),
                ],
                -1,
              )),
            a(l, null, {
              default: J(() => [
                a(
                  r(i),
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
                  { vue: J(() => [a(b)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[8] || (e[8] = u('', 3)),
          ])
        )
      }
    },
  })
export { _ as __pageData, L as default }
