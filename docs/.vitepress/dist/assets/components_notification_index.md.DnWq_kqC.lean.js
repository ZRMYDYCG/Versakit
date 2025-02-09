import { y as J, Z as a } from './chunks/theme.B5pwRwa9.js'
import {
  d as f,
  o as u,
  c as p,
  G as o,
  w as l,
  a as r,
  k as i,
  _ as g,
  aq as m,
  j as n,
  B,
} from './chunks/framework.Z42t_U4q.js'
import { Q as T } from './chunks/index.DEUECMle.js'
const h = `<template>\r
  <div>\r
    <VerButton @click="topleft">top-left</VerButton>\r
    <VerButton @click="topright">top-right</VerButton>\r
    <VerButton @click="bottomleft">bottom-left</VerButton>\r
    <VerButton @click="bottomright">bottom-right</VerButton>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerNotification } from '@versakit/ui'\r
\r
const topleft = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
    position: 'top-left',\r
  })\r
}\r
\r
const topright = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
  })\r
}\r
\r
const bottomleft = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
    position: 'bottom-left',\r
  })\r
}\r
\r
const bottomright = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
    position: 'bottom-right',\r
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
  R = f({
    __name: 'position',
    setup(d) {
      const s = () => {
          a({ title: 'title', content: 'content', position: 'top-left' })
        },
        t = () => {
          a({ title: 'title', content: 'content' })
        },
        c = () => {
          a({ title: 'title', content: 'content', position: 'bottom-left' })
        },
        U = () => {
          a({ title: 'title', content: 'content', position: 'bottom-right' })
        }
      return (b, e) => (
        u(),
        p('div', null, [
          o(
            i(J),
            { onClick: s },
            { default: l(() => e[0] || (e[0] = [r('top-left')])), _: 1 },
          ),
          o(
            i(J),
            { onClick: t },
            { default: l(() => e[1] || (e[1] = [r('top-right')])), _: 1 },
          ),
          o(
            i(J),
            { onClick: c },
            { default: l(() => e[2] || (e[2] = [r('bottom-left')])), _: 1 },
          ),
          o(
            i(J),
            { onClick: U },
            { default: l(() => e[3] || (e[3] = [r('bottom-right')])), _: 1 },
          ),
        ])
      )
    },
  }),
  k = g(R, [['__scopeId', 'data-v-6a788921']]),
  V = `<template>\r
  <div>\r
    <VerButton type="info" @click="info">info</VerButton>\r
    <VerButton type="success" @click="success">success</VerButton>\r
    <VerButton type="warn" @click="warning">warning</VerButton>\r
    <VerButton type="error" @click="error">error</VerButton>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerNotification } from '@versakit/ui'\r
\r
const info = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'info',\r
    plain: true,\r
    content: 'content',\r
  })\r
}\r
\r
const success = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'success',\r
    plain: true,\r
    content: 'content',\r
  })\r
}\r
\r
const warning = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'warn',\r
    plain: true,\r
    content: 'content',\r
  })\r
}\r
\r
const error = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'error',\r
    plain: true,\r
    content: 'content',\r
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
  D = f({
    __name: 'plain',
    setup(d) {
      const s = () => {
          a({ title: 'title', type: 'info', plain: !0, content: 'content' })
        },
        t = () => {
          a({ title: 'title', type: 'success', plain: !0, content: 'content' })
        },
        c = () => {
          a({ title: 'title', type: 'warn', plain: !0, content: 'content' })
        },
        U = () => {
          a({ title: 'title', type: 'error', plain: !0, content: 'content' })
        }
      return (b, e) => (
        u(),
        p('div', null, [
          o(
            i(J),
            { type: 'info', onClick: s },
            { default: l(() => e[0] || (e[0] = [r('info')])), _: 1 },
          ),
          o(
            i(J),
            { type: 'success', onClick: t },
            { default: l(() => e[1] || (e[1] = [r('success')])), _: 1 },
          ),
          o(
            i(J),
            { type: 'warn', onClick: c },
            { default: l(() => e[2] || (e[2] = [r('warning')])), _: 1 },
          ),
          o(
            i(J),
            { type: 'error', onClick: U },
            { default: l(() => e[3] || (e[3] = [r('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  C = g(D, [['__scopeId', 'data-v-153c8c42']]),
  v = `<template>\r
  <div>\r
    <VerButton type="info" @click="info">info</VerButton>\r
    <VerButton type="success" @click="success">success</VerButton>\r
    <VerButton type="warn" @click="warning">warning</VerButton>\r
    <VerButton type="error" @click="error">error</VerButton>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerNotification } from '@versakit/ui'\r
\r
const info = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'info',\r
    content: 'content',\r
  })\r
}\r
\r
const success = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'success',\r
    content: 'content',\r
  })\r
}\r
\r
const warning = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'warning',\r
    content: 'content',\r
  })\r
}\r
\r
const error = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'error',\r
    content: 'content',\r
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
  _ = f({
    __name: 'type',
    setup(d) {
      const s = () => {
          a({ title: 'title', type: 'info', content: 'content' })
        },
        t = () => {
          a({ title: 'title', type: 'success', content: 'content' })
        },
        c = () => {
          a({ title: 'title', type: 'warning', content: 'content' })
        },
        U = () => {
          a({ title: 'title', type: 'error', content: 'content' })
        }
      return (b, e) => (
        u(),
        p('div', null, [
          o(
            i(J),
            { type: 'info', onClick: s },
            { default: l(() => e[0] || (e[0] = [r('info')])), _: 1 },
          ),
          o(
            i(J),
            { type: 'success', onClick: t },
            { default: l(() => e[1] || (e[1] = [r('success')])), _: 1 },
          ),
          o(
            i(J),
            { type: 'warn', onClick: c },
            { default: l(() => e[2] || (e[2] = [r('warning')])), _: 1 },
          ),
          o(
            i(J),
            { type: 'error', onClick: U },
            { default: l(() => e[3] || (e[3] = [r('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  w = g(_, [['__scopeId', 'data-v-9c0f1c5e']]),
  y = `<template>\r
  <div>\r
    <VerButton @click="openNotification">openNotification</VerButton>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerNotification } from '@versakit/ui'\r
\r
const openNotification = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
  })\r
}\r
<\/script>\r
`,
  x = f({
    __name: 'base',
    setup(d) {
      const s = () => {
        a({ title: 'title', content: 'content' })
      }
      return (t, c) => (
        u(),
        p('div', null, [
          o(
            i(J),
            { onClick: s },
            {
              default: l(() => c[0] || (c[0] = [r('openNotification')])),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  O = { tabindex: '0' },
  A = JSON.parse(
    '{"title":"Notification 通知","description":"","frontmatter":{},"headers":[],"relativePath":"components/notification/index.md","filePath":"components/notification/index.md"}',
  ),
  N = { name: 'components/notification/index.md' },
  S = Object.assign(N, {
    setup(d) {
      return (s, t) => {
        const c = B('ClientOnly'),
          U = B('Tool')
        return (
          u(),
          p('div', null, [
            t[4] || (t[4] = m('', 4)),
            o(c, null, {
              default: l(() => [
                o(
                  i(T),
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
                    vueCode: i(y),
                  },
                  { vue: l(() => [o(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[5] ||
              (t[5] = n(
                'h2',
                { id: '不同类型', tabindex: '-1' },
                [
                  r('不同类型 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#不同类型',
                      'aria-label': 'Permalink to "不同类型"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[6] ||
              (t[6] = n(
                'p',
                null,
                [
                  r('我们提供了四种不同类型的提醒框：'),
                  n('code', null, 'success'),
                  r('、'),
                  n('code', null, 'warning'),
                  r('、'),
                  n('code', null, 'info'),
                  r(' 和 '),
                  n('code', null, 'error'),
                  r('。'),
                ],
                -1,
              )),
            o(c, null, {
              default: l(() => [
                o(
                  i(T),
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
                    vueCode: i(v),
                  },
                  { vue: l(() => [o(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[7] ||
              (t[7] = n(
                'h2',
                { id: '不同风格', tabindex: '-1' },
                [
                  r('不同风格 '),
                  n(
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
            t[8] ||
              (t[8] = n(
                'p',
                null,
                [
                  r('通知色彩更加鲜明，支持 '),
                  n('code', null, 'success'),
                  r('、'),
                  n('code', null, 'warning'),
                  r('、'),
                  n('code', null, 'info'),
                  r(' 和 '),
                  n('code', null, 'error'),
                  r(' 四种类型。'),
                ],
                -1,
              )),
            o(c, null, {
              default: l(() => [
                o(
                  i(T),
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
                    vueCode: i(V),
                  },
                  { vue: l(() => [o(C)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[9] || (t[9] = m('', 3)),
            o(c, null, {
              default: l(() => [
                o(
                  i(T),
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
                    vueCode: i(h),
                  },
                  { vue: l(() => [o(k)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[10] || (t[10] = m('', 4)),
            n('table', O, [
              t[3] ||
                (t[3] = n(
                  'thead',
                  null,
                  [
                    n('tr', null, [
                      n('th', null, '名称'),
                      n('th', null, '描述'),
                      n('th', null, '类型'),
                    ]),
                  ],
                  -1,
                )),
              n('tbody', null, [
                n('tr', null, [
                  t[1] ||
                    (t[1] = n('td', null, [n('code', null, 'destroy')], -1)),
                  t[2] || (t[2] = n('td', null, 'notification 的销毁函数', -1)),
                  n('td', null, [
                    t[0] || (t[0] = n('code', null, 'function', -1)),
                    o(U, { value: '() => void' }),
                  ]),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { A as __pageData, S as default }
