import { y as s, o as U, D as v, U as D } from './chunks/theme.BxWFLTKc.js'
import {
  d as p,
  p as u,
  o as T,
  b,
  w as o,
  G as r,
  a as i,
  k as a,
  j as n,
  _ as c,
  c as f,
  aq as k,
  B as V,
} from './chunks/framework.Z42t_U4q.js'
import { Q as m } from './chunks/index.DEUECMle.js'
const h = `<template>\r
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
  B = p({
    __name: 'header',
    setup(g) {
      const d = u(!1)
      return (l, t) => (
        T(),
        b(a(v), null, {
          default: o(() => [
            r(
              a(s),
              { onClick: t[0] || (t[0] = (e) => (d.value = !0)) },
              {
                default: o(() => t[2] || (t[2] = [i('点击打开对话框')])),
                _: 1,
              },
            ),
            r(
              a(U),
              {
                modelValue: d.value,
                'onUpdate:modelValue': t[1] || (t[1] = (e) => (d.value = e)),
              },
              {
                title: o(
                  () =>
                    t[3] ||
                    (t[3] = [
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
  C = `<template>\r
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
  x = p({
    __name: 'content',
    setup(g) {
      const d = u(!1),
        l = u(!1)
      return (t, e) => (
        T(),
        b(a(v), null, {
          default: o(() => [
            r(
              a(s),
              { onClick: e[0] || (e[0] = (J) => (d.value = !0)) },
              {
                default: o(() => e[5] || (e[5] = [i('点击打开对话框')])),
                _: 1,
              },
            ),
            r(
              a(s),
              { onClick: e[1] || (e[1] = (J) => (l.value = !0)) },
              {
                default: o(() => e[6] || (e[6] = [i('点击打开对话框')])),
                _: 1,
              },
            ),
            r(
              a(U),
              {
                modelValue: d.value,
                'onUpdate:modelValue': e[2] || (e[2] = (J) => (d.value = J)),
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
                modelValue: l.value,
                'onUpdate:modelValue': e[4] || (e[4] = (J) => (l.value = J)),
                title: '表单',
              },
              {
                footer: o(() => [
                  r(a(s), null, {
                    default: o(() => e[8] || (e[8] = [i('取消')])),
                    _: 1,
                  }),
                  r(
                    a(s),
                    {
                      type: 'primary',
                      onClick: e[3] || (e[3] = (J) => (l.value = !1)),
                    },
                    { default: o(() => e[9] || (e[9] = [i(' 确定 ')])), _: 1 },
                  ),
                ]),
                default: o(() => [n('div', null, [r(a(D))])]),
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
  O = c(x, [['__scopeId', 'data-v-76f61fc9']]),
  R = `<template>\r
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
  w = p({
    __name: 'base',
    setup(g) {
      const d = u(!1)
      return (l, t) => (
        T(),
        f('div', null, [
          r(
            a(s),
            { onClick: t[0] || (t[0] = (e) => (d.value = !0)) },
            { default: o(() => t[3] || (t[3] = [i('点击打开对话框')])), _: 1 },
          ),
          r(
            a(U),
            {
              modelValue: d.value,
              'onUpdate:modelValue': t[2] || (t[2] = (e) => (d.value = e)),
            },
            {
              footer: o(() => [
                r(a(s), null, {
                  default: o(() => t[4] || (t[4] = [i('取消')])),
                  _: 1,
                }),
                r(
                  a(s),
                  {
                    type: 'primary',
                    onClick: t[1] || (t[1] = (e) => (d.value = !1)),
                  },
                  { default: o(() => t[5] || (t[5] = [i(' 确定 ')])), _: 1 },
                ),
              ]),
              default: o(() => [
                t[6] || (t[6] = n('span', null, '这是一段信息', -1)),
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
  F = c(w, [['__scopeId', 'data-v-d4c5e3a2']]),
  Y = JSON.parse(
    '{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog/index.md","filePath":"components/dialog/index.md"}',
  ),
  Z = { name: 'components/dialog/index.md' },
  A = Object.assign(Z, {
    setup(g) {
      return (d, l) => {
        const t = V('ClientOnly')
        return (
          T(),
          f('div', null, [
            l[0] ||
              (l[0] = n(
                'h1',
                { id: 'dialog-对话框', tabindex: '-1' },
                [
                  i('Dialog 对话框 '),
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
            l[1] ||
              (l[1] = n(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  i('基础用法 '),
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
            l[2] ||
              (l[2] = n(
                'p',
                null,
                [
                  i(
                    '在保留当前页面状态的情况下，告知用户并承载相关操作。 绑定 ',
                  ),
                  n('code', null, 'v-model'),
                  i(' 到一个 '),
                  n('code', null, 'Boolean'),
                  i(' 类型的变量。'),
                ],
                -1,
              )),
            r(t, null, {
              default: o(() => [
                r(
                  a(m),
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
                    vueCode: a(R),
                  },
                  { vue: o(() => [r(F)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[3] ||
              (l[3] = n(
                'h2',
                { id: '自定义内容', tabindex: '-1' },
                [
                  i('自定义内容 '),
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
            l[4] || (l[4] = n('p', null, '对话框的内容可以是任何东西。', -1)),
            r(t, null, {
              default: o(() => [
                r(
                  a(m),
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
                    vueCode: a(C),
                  },
                  { vue: o(() => [r(O)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[5] ||
              (l[5] = n(
                'h2',
                { id: '自定义标题', tabindex: '-1' },
                [
                  i('自定义标题 '),
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
            l[6] ||
              (l[6] = n(
                'p',
                null,
                [
                  i(
                    '可用于自定义显示标题区域。为了保持可用性，除了使用此插槽外，使用 ',
                  ),
                  n('code', null, 'title'),
                  i(' 属性来指定哪些元素应该读取为对话框标题。'),
                ],
                -1,
              )),
            r(t, null, {
              default: o(() => [
                r(
                  a(m),
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
            l[7] || (l[7] = k('', 5)),
          ])
        )
      }
    },
  })
export { Y as __pageData, A as default }
