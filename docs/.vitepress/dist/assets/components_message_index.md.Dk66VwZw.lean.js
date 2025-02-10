import { y as i, k as u } from './chunks/theme.BxWFLTKc.js'
import {
  d as g,
  o as J,
  c as p,
  G as t,
  w as s,
  a as l,
  k as o,
  _ as T,
  j as e,
  B as m,
} from './chunks/framework.Z42t_U4q.js'
import { Q as V } from './chunks/index.DEUECMle.js'
const B = `<template>\r
  <div>\r
    <VerButton type="success" @click="success">success</VerButton>\r
    <VerButton type="warn" @click="warning">warning</VerButton>\r
    <VerButton type="info" @click="info">info</VerButton>\r
    <VerButton type="error" @click="error">error</VerButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerButton, VerMessage } from '@versakit/ui'\r
\r
const success = () => {\r
  VerMessage({\r
    type: 'success',\r
    plain: true,\r
    content: '这是一条消息',\r
  })\r
}\r
const warning = () => {\r
  VerMessage({\r
    type: 'warn',\r
    plain: true,\r
    content: '这是一条消息',\r
  })\r
}\r
\r
const info = () => {\r
  VerMessage({\r
    type: 'info',\r
    plain: true,\r
    content: '这是一条消息',\r
  })\r
}\r
\r
const error = () => {\r
  VerMessage({\r
    type: 'error',\r
    plain: true,\r
    content: '这是一条消息',\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.ver-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  f = g({
    __name: 'plain',
    setup(c) {
      const U = () => {
          u({ type: 'success', plain: !0, content: '这是一条消息' })
        },
        n = () => {
          u({ type: 'warn', plain: !0, content: '这是一条消息' })
        },
        a = () => {
          u({ type: 'info', plain: !0, content: '这是一条消息' })
        },
        d = () => {
          u({ type: 'error', plain: !0, content: '这是一条消息' })
        }
      return (C, r) => (
        J(),
        p('div', null, [
          t(
            o(i),
            { type: 'success', onClick: U },
            { default: s(() => r[0] || (r[0] = [l('success')])), _: 1 },
          ),
          t(
            o(i),
            { type: 'warn', onClick: n },
            { default: s(() => r[1] || (r[1] = [l('warning')])), _: 1 },
          ),
          t(
            o(i),
            { type: 'info', onClick: a },
            { default: s(() => r[2] || (r[2] = [l('info')])), _: 1 },
          ),
          t(
            o(i),
            { type: 'error', onClick: d },
            { default: s(() => r[3] || (r[3] = [l('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  y = T(f, [['__scopeId', 'data-v-5f2d1397']]),
  b = `<template>\r
  <div>\r
    <VerButton type="success" @click="success">success</VerButton>\r
    <VerButton type="warn" @click="warning">warning</VerButton>\r
    <VerButton type="info" @click="info">info</VerButton>\r
    <VerButton type="error" @click="error">error</VerButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerButton, VerMessage } from '@versakit/ui'\r
\r
const success = () => {\r
  VerMessage({\r
    type: 'success',\r
    content: '这是一条消息',\r
  })\r
}\r
const warning = () => {\r
  VerMessage({\r
    type: 'warn',\r
    content: '这是一条消息',\r
  })\r
}\r
\r
const info = () => {\r
  VerMessage({\r
    type: 'info',\r
    content: '这是一条消息',\r
  })\r
}\r
\r
const error = () => {\r
  VerMessage({\r
    type: 'error',\r
    content: '这是一条消息',\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.ver-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  M = g({
    __name: 'status',
    setup(c) {
      const U = () => {
          u({ type: 'success', content: '这是一条消息' })
        },
        n = () => {
          u({ type: 'warn', content: '这是一条消息' })
        },
        a = () => {
          u({ type: 'info', content: '这是一条消息' })
        },
        d = () => {
          u({ type: 'error', content: '这是一条消息' })
        }
      return (C, r) => (
        J(),
        p('div', null, [
          t(
            o(i),
            { type: 'success', onClick: U },
            { default: s(() => r[0] || (r[0] = [l('success')])), _: 1 },
          ),
          t(
            o(i),
            { type: 'warn', onClick: n },
            { default: s(() => r[1] || (r[1] = [l('warning')])), _: 1 },
          ),
          t(
            o(i),
            { type: 'info', onClick: a },
            { default: s(() => r[2] || (r[2] = [l('info')])), _: 1 },
          ),
          t(
            o(i),
            { type: 'error', onClick: d },
            { default: s(() => r[3] || (r[3] = [l('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  k = T(M, [['__scopeId', 'data-v-a9d163ac']]),
  v = `<template>\r
  <div>\r
    <VerButton @click="openMessage">点击</VerButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerButton, VerMessage } from '@versakit/ui'\r
\r
const openMessage = () => {\r
  VerMessage({\r
    type: 'info',\r
    content: '这是一条消息',\r
    duration: 2000,\r
  })\r
}\r
<\/script>\r
`,
  N = g({
    __name: 'base',
    setup(c) {
      const U = () => {
        u({ type: 'info', content: '这是一条消息', duration: 2e3 })
      }
      return (n, a) => (
        J(),
        p('div', null, [
          t(
            o(i),
            { onClick: U },
            { default: s(() => a[0] || (a[0] = [l('点击')])), _: 1 },
          ),
        ])
      )
    },
  }),
  S = { tabindex: '0' },
  F = { tabindex: '0' },
  D = JSON.parse(
    '{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message/index.md","filePath":"components/message/index.md"}',
  ),
  x = { name: 'components/message/index.md' },
  Q = Object.assign(x, {
    setup(c) {
      return (U, n) => {
        const a = m('ClientOnly'),
          d = m('Tool')
        return (
          J(),
          p('div', null, [
            n[11] ||
              (n[11] = e(
                'h1',
                { id: 'message-消息提示', tabindex: '-1' },
                [
                  l('Message 消息提示 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#message-消息提示',
                      'aria-label': 'Permalink to "Message 消息提示"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            n[12] ||
              (n[12] = e(
                'p',
                null,
                '常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。',
                -1,
              )),
            n[13] ||
              (n[13] = e(
                'h2',
                { id: '基本用法', tabindex: '-1' },
                [
                  l('基本用法 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基本用法',
                      'aria-label': 'Permalink to "基本用法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            n[14] || (n[14] = e('p', null, '从顶部出现，3 秒后自动消失。', -1)),
            t(a, null, {
              default: s(() => [
                t(
                  o(V),
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
                    vueCode: o(v),
                  },
                  { vue: s(() => [t(N)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            n[15] ||
              (n[15] = e(
                'h2',
                { id: '不同状态', tabindex: '-1' },
                [
                  l('不同状态 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#不同状态',
                      'aria-label': 'Permalink to "不同状态"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            n[16] ||
              (n[16] = e(
                'p',
                null,
                '用来显示「成功、警告、消息、错误」类的操作反馈。',
                -1,
              )),
            t(a, null, {
              default: s(() => [
                t(
                  o(V),
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
                    vueCode: o(b),
                  },
                  { vue: s(() => [t(k)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            n[17] ||
              (n[17] = e(
                'h2',
                { id: '不同风格', tabindex: '-1' },
                [
                  l('不同风格 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#不同风格',
                      'aria-label': 'Permalink to "不同风格"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            n[18] ||
              (n[18] = e(
                'p',
                null,
                '用来显示「成功、警告、消息、错误」类的操作反馈。',
                -1,
              )),
            t(a, null, {
              default: s(() => [
                t(
                  o(V),
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
                    vueCode: o(B),
                  },
                  { vue: s(() => [t(y)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            n[19] ||
              (n[19] = e(
                'h2',
                { id: 'message-api', tabindex: '-1' },
                [
                  l('Message API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#message-api',
                      'aria-label': 'Permalink to "Message API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            n[20] ||
              (n[20] = e(
                'h3',
                { id: 'message-属性', tabindex: '-1' },
                [
                  l('Message 属性 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#message-属性',
                      'aria-label': 'Permalink to "Message 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', S, [
              n[6] ||
                (n[6] = e(
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
                  n[1] || (n[1] = e('td', null, [e('code', null, 'type')], -1)),
                  n[2] || (n[2] = e('td', null, '绑定值', -1)),
                  e('td', null, [
                    n[0] || (n[0] = e('code', null, 'enum', -1)),
                    t(d, { value: 'success,warning,info,error' }),
                  ]),
                  n[3] || (n[3] = e('td', null, [e('code', null, 'info')], -1)),
                ]),
                n[4] ||
                  (n[4] = e(
                    'tr',
                    null,
                    [
                      e('td', null, [e('code', null, 'content')]),
                      e('td', null, '消息的内容'),
                      e('td', null, [e('code', null, 'string')]),
                      e('td', null, '-'),
                    ],
                    -1,
                  )),
                n[5] ||
                  (n[5] = e(
                    'tr',
                    null,
                    [
                      e('td', null, [e('code', null, 'duration')]),
                      e('td', null, '消息的持续时间'),
                      e('td', null, [e('code', null, 'number')]),
                      e('td', null, [e('code', null, '3000')]),
                    ],
                    -1,
                  )),
              ]),
            ]),
            n[21] ||
              (n[21] = e(
                'h3',
                { id: 'message-方法', tabindex: '-1' },
                [
                  l('Message 方法 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#message-方法',
                      'aria-label': 'Permalink to "Message 方法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', F, [
              n[10] ||
                (n[10] = e(
                  'thead',
                  null,
                  [
                    e('tr', null, [
                      e('th', null, '名称'),
                      e('th', null, '描述'),
                      e('th', null, '类型'),
                    ]),
                  ],
                  -1,
                )),
              e('tbody', null, [
                e('tr', null, [
                  n[8] ||
                    (n[8] = e('td', null, [e('code', null, 'destroy')], -1)),
                  n[9] || (n[9] = e('td', null, 'message 的销毁函数', -1)),
                  e('td', null, [
                    n[7] || (n[7] = e('code', null, 'function', -1)),
                    t(d, { value: '() => void' }),
                  ]),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { D as __pageData, Q as default }
