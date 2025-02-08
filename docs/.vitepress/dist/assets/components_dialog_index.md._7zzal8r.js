import { p as s, h as U, Q as J, c } from './chunks/theme.DSVdNaqk.js'
import {
  d as v,
  p as m,
  o as T,
  b as g,
  w as o,
  G as r,
  a as d,
  k as a,
  j as n,
  _ as V,
  c as f,
  aq as k,
  B as D,
} from './chunks/framework.Z42t_U4q.js'
import { Q as p } from './chunks/index.DEUECMle.js'
const O = `<template>\r
  <ver-row>\r
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>\r
\r
    <VerDialog v-model="dialogVisible">\r
      <template #title>\r
        <div class="title">\r
          <h4>This is a custom header!</h4>\r
        </div>\r
      </template>\r
    </VerDialog>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerRow, VerButton, VerDialog } from '@versakit/ui'\r
\r
import { ref } from 'vue'\r
\r
const dialogVisible = ref(false)\r
<\/script>\r
`,
  R = v({
    __name: 'header',
    setup(b) {
      const i = m(!1)
      return (t, l) => (
        T(),
        g(a(J), null, {
          default: o(() => [
            r(
              a(s),
              { onClick: l[0] || (l[0] = (e) => (i.value = !0)) },
              {
                default: o(() => l[2] || (l[2] = [d('点击打开对话框')])),
                _: 1,
              },
            ),
            r(
              a(U),
              {
                modelValue: i.value,
                'onUpdate:modelValue': l[1] || (l[1] = (e) => (i.value = e)),
              },
              {
                title: o(
                  () =>
                    l[3] ||
                    (l[3] = [
                      n(
                        'div',
                        { class: 'title' },
                        [n('h4', null, 'This is a custom header!')],
                        -1,
                      ),
                    ]),
                ),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  h = `<template>\r
  <ver-row>\r
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>\r
    <ver-button @click="dialogFromVisible = true">点击打开对话框</ver-button>\r
    <!-- 普通 -->\r
    <ver-dialog v-model="dialogVisible" title="测试">\r
      <p>这是一个信息</p>\r
    </ver-dialog>\r
    <!-- 表单 -->\r
    <ver-dialog v-model="dialogFromVisible" title="表单">\r
      <div>\r
        <ver-input />\r
      </div>\r
      <template #footer>\r
        <ver-button>取消</ver-button>\r
        <ver-button type="primary" @click="dialogFromVisible = false">\r
          确定\r
        </ver-button>\r
      </template>\r
    </ver-dialog>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerRow, VerButton, VerDialog, VerInput } from '@versakit/ui'\r
\r
import { ref } from 'vue'\r
\r
const dialogVisible = ref(false)\r
const dialogFromVisible = ref(false)\r
<\/script>\r
\r
<style scoped>\r
.t-dialog_footer .t-btn {\r
  margin-right: 20px;\r
}\r
\r
.t-btn + .t-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  Q = v({
    __name: 'content',
    setup(b) {
      const i = m(!1),
        t = m(!1)
      return (l, e) => (
        T(),
        g(a(J), null, {
          default: o(() => [
            r(
              a(s),
              { onClick: e[0] || (e[0] = (u) => (i.value = !0)) },
              {
                default: o(() => e[5] || (e[5] = [d('点击打开对话框')])),
                _: 1,
              },
            ),
            r(
              a(s),
              { onClick: e[1] || (e[1] = (u) => (t.value = !0)) },
              {
                default: o(() => e[6] || (e[6] = [d('点击打开对话框')])),
                _: 1,
              },
            ),
            r(
              a(U),
              {
                modelValue: i.value,
                'onUpdate:modelValue': e[2] || (e[2] = (u) => (i.value = u)),
                title: '测试',
              },
              {
                default: o(
                  () => e[7] || (e[7] = [n('p', null, '这是一个信息', -1)]),
                ),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
            r(
              a(U),
              {
                modelValue: t.value,
                'onUpdate:modelValue': e[4] || (e[4] = (u) => (t.value = u)),
                title: '表单',
              },
              {
                footer: o(() => [
                  r(a(s), null, {
                    default: o(() => e[8] || (e[8] = [d('取消')])),
                    _: 1,
                  }),
                  r(
                    a(s),
                    {
                      type: 'primary',
                      onClick: e[3] || (e[3] = (u) => (t.value = !1)),
                    },
                    { default: o(() => e[9] || (e[9] = [d(' 确定 ')])), _: 1 },
                  ),
                ]),
                default: o(() => [n('div', null, [r(a(c))])]),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  B = V(Q, [['__scopeId', 'data-v-76f61fc9']]),
  E = `<template>\r
  <div>\r
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>\r
\r
    <ver-dialog v-model="dialogVisible">\r
      <span>这是一段信息</span>\r
      <template #footer>\r
        <ver-button>取消</ver-button>\r
        <ver-button type="primary" @click="dialogVisible = false">\r
          确定\r
        </ver-button>\r
      </template>\r
    </ver-dialog>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerDialog } from '@versakit/ui'\r
\r
import { ref } from 'vue'\r
\r
const dialogVisible = ref(false)\r
<\/script>\r
\r
<style scoped>\r
.ver-dialog_footer .ver-btn {\r
  margin-right: 20px;\r
}\r
</style>\r
`,
  C = v({
    __name: 'base',
    setup(b) {
      const i = m(!1)
      return (t, l) => (
        T(),
        f('div', null, [
          r(
            a(s),
            { onClick: l[0] || (l[0] = (e) => (i.value = !0)) },
            { default: o(() => l[3] || (l[3] = [d('点击打开对话框')])), _: 1 },
          ),
          r(
            a(U),
            {
              modelValue: i.value,
              'onUpdate:modelValue': l[2] || (l[2] = (e) => (i.value = e)),
            },
            {
              footer: o(() => [
                r(a(s), null, {
                  default: o(() => l[4] || (l[4] = [d('取消')])),
                  _: 1,
                }),
                r(
                  a(s),
                  {
                    type: 'primary',
                    onClick: l[1] || (l[1] = (e) => (i.value = !1)),
                  },
                  { default: o(() => l[5] || (l[5] = [d(' 确定 ')])), _: 1 },
                ),
              ]),
              default: o(() => [
                l[6] || (l[6] = n('span', null, '这是一段信息', -1)),
              ]),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  x = V(C, [['__scopeId', 'data-v-d4c5e3a2']]),
  A = JSON.parse(
    '{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog/index.md","filePath":"components/dialog/index.md"}',
  ),
  y = { name: 'components/dialog/index.md' },
  Y = Object.assign(y, {
    setup(b) {
      return (i, t) => {
        const l = D('ClientOnly')
        return (
          T(),
          f('div', null, [
            t[0] ||
              (t[0] = n(
                'h1',
                { id: 'dialog-对话框', tabindex: '-1' },
                [
                  d('Dialog 对话框 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#dialog-对话框',
                      'aria-label': 'Permalink to "Dialog 对话框"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[1] ||
              (t[1] = n(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  d('基础用法 '),
                  n(
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
            t[2] ||
              (t[2] = n(
                'p',
                null,
                [
                  d(
                    '在保留当前页面状态的情况下，告知用户并承载相关操作。 绑定 ',
                  ),
                  n('code', null, 'v-model'),
                  d(' 到一个 '),
                  n('code', null, 'Boolean'),
                  d(' 类型的变量。'),
                ],
                -1,
              )),
            r(l, null, {
              default: o(() => [
                r(
                  a(p),
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
                    vueCode: a(E),
                  },
                  { vue: o(() => [r(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[3] ||
              (t[3] = n(
                'h2',
                { id: '自定义内容', tabindex: '-1' },
                [
                  d('自定义内容 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义内容',
                      'aria-label': 'Permalink to "自定义内容"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[4] || (t[4] = n('p', null, '对话框的内容可以是任何东西。', -1)),
            r(l, null, {
              default: o(() => [
                r(
                  a(p),
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
                    vueCode: a(h),
                  },
                  { vue: o(() => [r(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[5] ||
              (t[5] = n(
                'h2',
                { id: '自定义标题', tabindex: '-1' },
                [
                  d('自定义标题 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义标题',
                      'aria-label': 'Permalink to "自定义标题"',
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
                  d(
                    '可用于自定义显示标题区域。为了保持可用性，除了使用此插槽外，使用 ',
                  ),
                  n('code', null, 'title'),
                  d(' 属性来指定哪些元素应该读取为对话框标题。'),
                ],
                -1,
              )),
            r(l, null, {
              default: o(() => [
                r(
                  a(p),
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
                    vueCode: a(O),
                  },
                  { vue: o(() => [r(R)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[7] ||
              (t[7] = k(
                '<h2 id="dialog-api" tabindex="-1">Dialog API <a class="header-anchor" href="#dialog-api" aria-label="Permalink to &quot;Dialog API&quot;">​</a></h2><h3 id="dialog-属性" tabindex="-1">Dialog 属性 <a class="header-anchor" href="#dialog-属性" aria-label="Permalink to &quot;Dialog 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>width</code></td><td>dialog 的宽度</td><td><code>string</code></td><td>30%</td></tr><tr><td><code>top</code></td><td>距顶部距离</td><td><code>string</code></td><td>15vh</td></tr></tbody></table><h3 id="dialog-插槽" tabindex="-1">Dialog 插槽 <a class="header-anchor" href="#dialog-插槽" aria-label="Permalink to &quot;Dialog 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>title</code></td><td>dialog 的标题部分</td></tr><tr><td><code>footer</code></td><td>dialog 的 <code>footer</code> 部分</td></tr></tbody></table>',
                5,
              )),
          ])
        )
      }
    },
  })
export { A as __pageData, Y as default }
