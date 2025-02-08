import { p as a, i as s } from './chunks/theme.DSVdNaqk.js'
import {
  d as f,
  o as U,
  c as p,
  G as l,
  w as r,
  a as o,
  k as i,
  _ as b,
  aq as m,
  j as n,
  B as k,
} from './chunks/framework.Z42t_U4q.js'
import { Q as J } from './chunks/index.DEUECMle.js'
const N = `<template>\r
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
  h = f({
    __name: 'position',
    setup(T) {
      const d = () => {
          s({ title: 'title', content: 'content', position: 'top-left' })
        },
        t = () => {
          s({ title: 'title', content: 'content' })
        },
        c = () => {
          s({ title: 'title', content: 'content', position: 'bottom-left' })
        },
        u = () => {
          s({ title: 'title', content: 'content', position: 'bottom-right' })
        }
      return (V, e) => (
        U(),
        p('div', null, [
          l(
            i(a),
            { onClick: d },
            { default: r(() => e[0] || (e[0] = [o('top-left')])), _: 1 },
          ),
          l(
            i(a),
            { onClick: t },
            { default: r(() => e[1] || (e[1] = [o('top-right')])), _: 1 },
          ),
          l(
            i(a),
            { onClick: c },
            { default: r(() => e[2] || (e[2] = [o('bottom-left')])), _: 1 },
          ),
          l(
            i(a),
            { onClick: u },
            { default: r(() => e[3] || (e[3] = [o('bottom-right')])), _: 1 },
          ),
        ])
      )
    },
  }),
  B = b(h, [['__scopeId', 'data-v-6a788921']]),
  g = `<template>\r
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
  O = f({
    __name: 'plain',
    setup(T) {
      const d = () => {
          s({ title: 'title', type: 'info', plain: !0, content: 'content' })
        },
        t = () => {
          s({ title: 'title', type: 'success', plain: !0, content: 'content' })
        },
        c = () => {
          s({ title: 'title', type: 'warn', plain: !0, content: 'content' })
        },
        u = () => {
          s({ title: 'title', type: 'error', plain: !0, content: 'content' })
        }
      return (V, e) => (
        U(),
        p('div', null, [
          l(
            i(a),
            { type: 'info', onClick: d },
            { default: r(() => e[0] || (e[0] = [o('info')])), _: 1 },
          ),
          l(
            i(a),
            { type: 'success', onClick: t },
            { default: r(() => e[1] || (e[1] = [o('success')])), _: 1 },
          ),
          l(
            i(a),
            { type: 'warn', onClick: c },
            { default: r(() => e[2] || (e[2] = [o('warning')])), _: 1 },
          ),
          l(
            i(a),
            { type: 'error', onClick: u },
            { default: r(() => e[3] || (e[3] = [o('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  v = b(O, [['__scopeId', 'data-v-153c8c42']]),
  Q = `<template>\r
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
  R = f({
    __name: 'type',
    setup(T) {
      const d = () => {
          s({ title: 'title', type: 'info', content: 'content' })
        },
        t = () => {
          s({ title: 'title', type: 'success', content: 'content' })
        },
        c = () => {
          s({ title: 'title', type: 'warning', content: 'content' })
        },
        u = () => {
          s({ title: 'title', type: 'error', content: 'content' })
        }
      return (V, e) => (
        U(),
        p('div', null, [
          l(
            i(a),
            { type: 'info', onClick: d },
            { default: r(() => e[0] || (e[0] = [o('info')])), _: 1 },
          ),
          l(
            i(a),
            { type: 'success', onClick: t },
            { default: r(() => e[1] || (e[1] = [o('success')])), _: 1 },
          ),
          l(
            i(a),
            { type: 'warn', onClick: c },
            { default: r(() => e[2] || (e[2] = [o('warning')])), _: 1 },
          ),
          l(
            i(a),
            { type: 'error', onClick: u },
            { default: r(() => e[3] || (e[3] = [o('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  D = b(R, [['__scopeId', 'data-v-9c0f1c5e']]),
  C = `<template>\r
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
  y = f({
    __name: 'base',
    setup(T) {
      const d = () => {
        s({ title: 'title', content: 'content' })
      }
      return (t, c) => (
        U(),
        p('div', null, [
          l(
            i(a),
            { onClick: d },
            {
              default: r(() => c[0] || (c[0] = [o('openNotification')])),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  E = { tabindex: '0' },
  A = JSON.parse(
    '{"title":"Notification 通知","description":"","frontmatter":{},"headers":[],"relativePath":"components/notification/index.md","filePath":"components/notification/index.md"}',
  ),
  _ = { name: 'components/notification/index.md' },
  x = Object.assign(_, {
    setup(T) {
      return (d, t) => {
        const c = k('ClientOnly'),
          u = k('Tool')
        return (
          U(),
          p('div', null, [
            t[4] ||
              (t[4] = m(
                '<h1 id="notification-通知" tabindex="-1">Notification 通知 <a class="header-anchor" href="#notification-通知" aria-label="Permalink to &quot;Notification 通知&quot;">​</a></h1><p>悬浮出现在页面角落，显示全局的通知提醒消息。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>你可以通过设置 <code>title</code> 和 <code>message</code> 属性来设置通知的标题和正文内容。 默认情况下，通知在 4500 毫秒后自动关闭，但你可以通过设置 <code>duration</code> 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 <code>duration</code> 接收一个 Number，单位为毫秒。</p>',
                4,
              )),
            l(c, null, {
              default: r(() => [
                l(
                  i(J),
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
                    vueCode: i(C),
                  },
                  { vue: r(() => [l(y)]), _: 1 },
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
                  o('不同类型 '),
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
                  o('我们提供了四种不同类型的提醒框：'),
                  n('code', null, 'success'),
                  o('、'),
                  n('code', null, 'warning'),
                  o('、'),
                  n('code', null, 'info'),
                  o(' 和 '),
                  n('code', null, 'error'),
                  o('。'),
                ],
                -1,
              )),
            l(c, null, {
              default: r(() => [
                l(
                  i(J),
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
                    vueCode: i(Q),
                  },
                  { vue: r(() => [l(D)]), _: 1 },
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
                  o('不同风格 '),
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
                  o('通知色彩更加鲜明，支持 '),
                  n('code', null, 'success'),
                  o('、'),
                  n('code', null, 'warning'),
                  o('、'),
                  n('code', null, 'info'),
                  o(' 和 '),
                  n('code', null, 'error'),
                  o(' 四种类型。'),
                ],
                -1,
              )),
            l(c, null, {
              default: r(() => [
                l(
                  i(J),
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
                    vueCode: i(g),
                  },
                  { vue: r(() => [l(v)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[9] ||
              (t[9] = m(
                '<h2 id="自定义消息弹出的位置" tabindex="-1">自定义消息弹出的位置 <a class="header-anchor" href="#自定义消息弹出的位置" aria-label="Permalink to &quot;自定义消息弹出的位置&quot;">​</a></h2><p>可以让 Notification 从屏幕四角中的任意一角弹出。</p><p>使用 <code>position</code> 属性设置 Notification 的弹出位置， 支持四个选项：<code>top-right</code>、<code>top-left</code>、<code>bottom-right</code> 和 <code>bottom-left</code>， 默认为 <code>top-right</code>。</p>',
                3,
              )),
            l(c, null, {
              default: r(() => [
                l(
                  i(J),
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
                    vueCode: i(N),
                  },
                  { vue: r(() => [l(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[10] ||
              (t[10] = m(
                '<h2 id="notification-api" tabindex="-1">Notification API <a class="header-anchor" href="#notification-api" aria-label="Permalink to &quot;Notification API&quot;">​</a></h2><h3 id="notification-属性" tabindex="-1">Notification 属性 <a class="header-anchor" href="#notification-属性" aria-label="Permalink to &quot;Notification 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>duration</code></td><td>notification 的持续时间</td><td><code>number</code></td><td><code>4500</code></td></tr></tbody></table><h3 id="notification-方法" tabindex="-1">Notification 方法 <a class="header-anchor" href="#notification-方法" aria-label="Permalink to &quot;Notification 方法&quot;">​</a></h3>',
                4,
              )),
            n('table', E, [
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
                    l(u, { value: '() => void' }),
                  ]),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { A as __pageData, x as default }
