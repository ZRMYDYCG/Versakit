import { w as J } from './chunks/theme.B5pwRwa9.js'
import {
  d as i,
  p as u,
  o as d,
  b as m,
  k as r,
  _ as h,
  c as p,
  j as l,
  a as U,
  G as a,
  w as o,
  aq as R,
  B as O,
} from './chunks/framework.Z42t_U4q.js'
import { Q as c } from './chunks/index.DEUECMle.js'
const x = `<template>\r
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
  b = i({
    __name: 'maxlength',
    setup(T) {
      const n = u('')
      return (e, t) => (
        d(),
        m(
          r(J),
          {
            modelValue: n.value,
            'onUpdate:modelValue': t[0] || (t[0] = (s) => (n.value = s)),
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
  V = h(b, [['__scopeId', 'data-v-2a678aff']]),
  Q = `<template>\r
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
  D = i({
    __name: 'disabled',
    setup(T) {
      return (n, e) => (
        d(), m(r(J), { disabled: '', placeholder: '请输入内容' })
      )
    },
  }),
  E = h(D, [['__scopeId', 'data-v-05b5a5bb']]),
  g = `<template>\r
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
  k = i({
    __name: 'base',
    setup(T) {
      const n = u('')
      return (e, t) => (
        d(),
        m(
          r(J),
          {
            modelValue: n.value,
            'onUpdate:modelValue': t[0] || (t[0] = (s) => (n.value = s)),
            placeholder: '请输入内容',
          },
          null,
          8,
          ['modelValue'],
        )
      )
    },
  }),
  Y = h(k, [['__scopeId', 'data-v-c72943d0']]),
  _ = JSON.parse(
    '{"title":"TextArea 文本域","description":"","frontmatter":{},"headers":[],"relativePath":"components/textarea/index.md","filePath":"components/textarea/index.md"}',
  ),
  v = { name: 'components/textarea/index.md' },
  w = Object.assign(v, {
    setup(T) {
      return (n, e) => {
        const t = O('ClientOnly')
        return (
          d(),
          p('div', null, [
            e[0] ||
              (e[0] = l(
                'h1',
                { id: 'textarea-文本域', tabindex: '-1' },
                [
                  U('TextArea 文本域 '),
                  l(
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
              (e[1] = l(
                'p',
                null,
                '多行纯文本编辑控件，适用于评论或反馈表单中的一段意见。',
                -1,
              )),
            e[2] ||
              (e[2] = l(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  U('基础用法 '),
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
            e[3] || (e[3] = l('p', null, '用于多行输入。', -1)),
            a(t, null, {
              default: o(() => [
                a(
                  r(c),
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
                  { vue: o(() => [a(Y)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[4] ||
              (e[4] = l(
                'h2',
                { id: '禁用状态', tabindex: '-1' },
                [
                  U('禁用状态 '),
                  l(
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
              (e[5] = l(
                'p',
                null,
                [
                  U('使用 '),
                  l('code', null, 'disabled'),
                  U(' 属性设置不可点击。'),
                ],
                -1,
              )),
            a(t, null, {
              default: o(() => [
                a(
                  r(c),
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
                    vueCode: r(Q),
                  },
                  { vue: o(() => [a(E)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[6] ||
              (e[6] = l(
                'h2',
                { id: '限制长度', tabindex: '-1' },
                [
                  U('限制长度 '),
                  l(
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
              (e[7] = l(
                'p',
                null,
                [
                  U('使用 '),
                  l('code', null, 'maxlength'),
                  U(' 属性限制最大输入长度。'),
                ],
                -1,
              )),
            a(t, null, {
              default: o(() => [
                a(
                  r(c),
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
                    vueCode: r(x),
                  },
                  { vue: o(() => [a(V)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[8] ||
              (e[8] = R(
                '<h2 id="textarea-api" tabindex="-1">Textarea API <a class="header-anchor" href="#textarea-api" aria-label="Permalink to &quot;Textarea API&quot;">​</a></h2><h3 id="textarea-属性" tabindex="-1">Textarea 属性 <a class="header-anchor" href="#textarea-属性" aria-label="Permalink to &quot;Textarea 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>disabled</code></td><td>是否禁用</td><td><code>boolean</code></td><td>false</td></tr><tr><td><code>placeholder </code></td><td>输入框占位文本</td><td><code>string</code></td><td>-</td></tr><tr><td><code>v-model</code> / <code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>maxlength</code></td><td>最大值</td><td><code>string</code></td><td>-</td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { _ as __pageData, w as default }
