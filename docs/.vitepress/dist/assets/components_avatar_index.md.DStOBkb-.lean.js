import { M as t, j as J, U as o, Q as g } from './chunks/theme.CWxU7uh8.js'
import {
  d as u,
  ao as k,
  ap as O,
  o as c,
  c as m,
  F as R,
  C as Q,
  j as e,
  t as D,
  G as r,
  k as n,
  _ as p,
  w as s,
  b as h,
  a,
  aq as V,
  B as f,
} from './chunks/framework.Z42t_U4q.js'
import { Q as U } from './chunks/index.DEUECMle.js'
const _ = `<template>\r
  <div class="demo">\r
    <div v-for="fit in fits" :key="fit" class="block">\r
      <div class="title">{{ fit }}</div>\r
      <ver-avatar shape="square" :size="100" :fit="fit" :src="url" />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { reactive, toRefs } from 'vue'\r
import { VerAvatar } from '@versakit/ui'\r
\r
const state = reactive({\r
  fits: ['fill', 'contain', 'cover', 'none'],\r
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',\r
})\r
const { fits, url } = toRefs(state)\r
<\/script>\r
\r
<style scoped>\r
.demo {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
}\r
.title {\r
  width: 100%;\r
  text-align: center;\r
}\r
.block {\r
  margin-left: 15px;\r
  margin-right: 15px;\r
}\r
</style>\r
`,
  E = { class: 'demo' },
  F = { class: 'title' },
  x = u({
    __name: 'fit',
    setup(b) {
      const d = k({
          fits: ['fill', 'contain', 'cover', 'none'],
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        }),
        { fits: l, url: i } = O(d)
      return (v, Ve) => (
        c(),
        m('div', E, [
          (c(!0),
          m(
            R,
            null,
            Q(
              n(l),
              (T) => (
                c(),
                m('div', { key: T, class: 'block' }, [
                  e('div', F, D(T), 1),
                  r(
                    n(t),
                    { shape: 'square', size: 100, fit: T, src: n(i) },
                    null,
                    8,
                    ['fit', 'src'],
                  ),
                ])
              ),
            ),
            128,
          )),
        ])
      )
    },
  }),
  B = p(x, [['__scopeId', 'data-v-71586171']]),
  C = `<template>\r
  <div class="demo-basic">\r
    <div class="demo-error">\r
      <ver-avatar\r
        src="http://wrong"\r
        fallback="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
      />\r
    </div>\r
    <div class="demo-error">\r
      <ver-avatar src="http://wrong">\r
        <template #error>\r
          <ver-icon name="card-image" />\r
        </template>\r
      </ver-avatar>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerAvatar, VerIcon } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.demo-basic {\r
  display: flex;\r
}\r
.demo-error {\r
  margin: 5px;\r
}\r
</style>\r
`,
  N = { class: 'demo-basic' },
  A = { class: 'demo-error' },
  w = { class: 'demo-error' },
  y = u({
    __name: 'error',
    setup(b) {
      return (d, l) => (
        c(),
        m('div', N, [
          e('div', A, [
            r(n(t), {
              src: 'http://wrong',
              fallback:
                'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            }),
          ]),
          e('div', w, [
            r(
              n(t),
              { src: 'http://wrong' },
              { error: s(() => [r(n(J), { name: 'card-image' })]), _: 1 },
            ),
          ]),
        ])
      )
    },
  }),
  Y = p(y, [['__scopeId', 'data-v-f94f1cba']]),
  z = `<template>\r
  <ver-row>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">circle</div>\r
        <div class="demo-basic--circle">\r
          <div class="block">\r
            <ver-avatar\r
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar>user</ver-avatar>\r
          </div>\r
          <div class="block">\r
            <ver-avatar>\r
              <VerIcon name="card-image" />\r
            </ver-avatar>\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">square</div>\r
        <div class="demo-basic--square">\r
          <div class="block">\r
            <ver-avatar\r
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"\r
              shape="square"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar shape="square">user</ver-avatar>\r
          </div>\r
          <div class="block">\r
            <ver-avatar shape="square">\r
              <VerIcon name="card-image" />\r
            </ver-avatar>\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerAvatar, VerIcon, VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.demo-basic {\r
  text-align: center;\r
}\r
\r
.demo-basic .sub-title {\r
  margin-bottom: 10px;\r
  font-size: 14px;\r
  color: #909399;\r
}\r
\r
.demo-basic .demo-basic--circle,\r
.demo-basic .demo-basic--square {\r
  margin-top: 20px;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.demo-basic .block:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
\r
.demo-basic .block {\r
  flex: 1;\r
}\r
\r
.demo-basic .el-col:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
</style>\r
`,
  L = { class: 'demo-basic' },
  S = { class: 'demo-basic--circle' },
  j = { class: 'block' },
  W = { class: 'block' },
  q = { class: 'block' },
  Z = { class: 'demo-basic' },
  X = { class: 'demo-basic--square' },
  G = { class: 'block' },
  I = { class: 'block' },
  M = { class: 'block' },
  $ = u({
    __name: 'src',
    setup(b) {
      return (d, l) => (
        c(),
        h(n(g), null, {
          default: s(() => [
            r(
              n(o),
              { span: 12 },
              {
                default: s(() => [
                  e('div', L, [
                    l[1] ||
                      (l[1] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', S, [
                      e('div', j, [
                        r(n(t), {
                          src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                        }),
                      ]),
                      e('div', W, [
                        r(n(t), null, {
                          default: s(() => l[0] || (l[0] = [a('user')])),
                          _: 1,
                        }),
                      ]),
                      e('div', q, [
                        r(n(t), null, {
                          default: s(() => [r(n(J), { name: 'card-image' })]),
                          _: 1,
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            r(
              n(o),
              { span: 12 },
              {
                default: s(() => [
                  e('div', Z, [
                    l[3] ||
                      (l[3] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', X, [
                      e('div', G, [
                        r(n(t), {
                          src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                          shape: 'square',
                        }),
                      ]),
                      e('div', I, [
                        r(
                          n(t),
                          { shape: 'square' },
                          {
                            default: s(() => l[2] || (l[2] = [a('user')])),
                            _: 1,
                          },
                        ),
                      ]),
                      e('div', M, [
                        r(
                          n(t),
                          { shape: 'square' },
                          {
                            default: s(() => [r(n(J), { name: 'card-image' })]),
                            _: 1,
                          },
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  P = p($, [['__scopeId', 'data-v-d686a1ef']]),
  H = `<template>\r
  <ver-row>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">circle</div>\r
        <div class="demo-basic--circle">\r
          <div class="block">\r
            <ver-avatar\r
              size="lg"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              size="lg"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">square</div>\r
        <div class="demo-basic--square">\r
          <div class="block">\r
            <ver-avatar\r
              size="xs"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              size="sm"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              size="md"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerAvatar, VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.demo-basic {\r
  text-align: center;\r
}\r
\r
.demo-basic .sub-title {\r
  margin-bottom: 10px;\r
  font-size: 14px;\r
  color: #909399;\r
}\r
\r
.demo-basic .demo-basic--circle,\r
.demo-basic .demo-basic--square {\r
  margin-top: 20px;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.demo-basic .block:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
\r
.demo-basic .block {\r
  flex: 1;\r
}\r
\r
.demo-basic .el-col:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
</style>\r
`,
  K = { class: 'demo-basic' },
  ee = { class: 'demo-basic--circle' },
  le = { class: 'block' },
  re = { class: 'block' },
  ne = { class: 'block' },
  se = { class: 'demo-basic' },
  te = { class: 'demo-basic--square' },
  ae = { class: 'block' },
  ce = { class: 'block' },
  ie = { class: 'block' },
  de = u({
    __name: 'size',
    setup(b) {
      return (d, l) => (
        c(),
        h(n(g), null, {
          default: s(() => [
            r(
              n(o),
              { span: 12 },
              {
                default: s(() => [
                  e('div', K, [
                    l[0] ||
                      (l[0] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', ee, [
                      e('div', le, [
                        r(n(t), {
                          size: 'lg',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', re, [
                        r(n(t), {
                          size: 'lg',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', ne, [
                        r(n(t), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            r(
              n(o),
              { span: 12 },
              {
                default: s(() => [
                  e('div', se, [
                    l[1] ||
                      (l[1] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', te, [
                      e('div', ae, [
                        r(n(t), {
                          size: 'xs',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', ce, [
                        r(n(t), {
                          size: 'sm',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', ie, [
                        r(n(t), {
                          size: 'md',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  oe = p(de, [['__scopeId', 'data-v-f23956cb']]),
  be = `<template>\r
  <ver-row>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">circle</div>\r
        <div class="demo-basic--circle">\r
          <div class="block">\r
            <ver-avatar\r
              :size="24"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              :size="36"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">square</div>\r
        <div class="demo-basic--square">\r
          <div class="block">\r
            <ver-avatar\r
              :size="24"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              :size="36"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerAvatar, VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.demo-basic {\r
  text-align: center;\r
}\r
\r
.demo-basic .sub-title {\r
  margin-bottom: 10px;\r
  font-size: 14px;\r
  color: #909399;\r
}\r
\r
.demo-basic .demo-basic--circle,\r
.demo-basic .demo-basic--square {\r
  margin-top: 20px;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.demo-basic .block:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
\r
.demo-basic .block {\r
  flex: 1;\r
}\r
\r
.demo-basic .el-col:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
</style>\r
`,
  ve = { class: 'demo-basic' },
  Ue = { class: 'demo-basic--circle' },
  me = { class: 'block' },
  ue = { class: 'block' },
  pe = { class: 'block' },
  Te = { class: 'demo-basic' },
  Je = { class: 'demo-basic--square' },
  ge = { class: 'block' },
  he = { class: 'block' },
  fe = { class: 'block' },
  ke = u({
    __name: 'base',
    setup(b) {
      return (d, l) => (
        c(),
        h(n(g), null, {
          default: s(() => [
            r(
              n(o),
              { span: 12 },
              {
                default: s(() => [
                  e('div', ve, [
                    l[0] ||
                      (l[0] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', Ue, [
                      e('div', me, [
                        r(n(t), {
                          size: 24,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', ue, [
                        r(n(t), {
                          size: 36,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', pe, [
                        r(n(t), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            r(
              n(o),
              { span: 12 },
              {
                default: s(() => [
                  e('div', Te, [
                    l[1] ||
                      (l[1] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', Je, [
                      e('div', ge, [
                        r(n(t), {
                          size: 24,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', he, [
                        r(n(t), {
                          size: 36,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', fe, [
                        r(n(t), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  Oe = p(ke, [['__scopeId', 'data-v-42888fb5']]),
  Re = { tabindex: '0' },
  Qe = { tabindex: '0' },
  xe = JSON.parse(
    '{"title":"Avatar 头像","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}',
  ),
  De = { name: 'components/avatar/index.md' },
  Be = Object.assign(De, {
    setup(b) {
      return (d, l) => {
        const i = f('ClientOnly'),
          v = f('Tool')
        return (
          c(),
          m('div', null, [
            l[20] ||
              (l[20] = e(
                'h1',
                { id: 'avatar-头像', tabindex: '-1' },
                [
                  a('Avatar 头像 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#avatar-头像',
                      'aria-label': 'Permalink to "Avatar 头像"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[21] ||
              (l[21] = e(
                'p',
                null,
                'Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。',
                -1,
              )),
            l[22] ||
              (l[22] = e(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  a('基础用法 '),
                  e(
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
            l[23] ||
              (l[23] = e(
                'p',
                null,
                [
                  a(' 使用 '),
                  e('code', null, 'shape'),
                  a(' 和 '),
                  e('code', null, 'size'),
                  a(' 属性来设置 Avatar 的形状和大小。 '),
                ],
                -1,
              )),
            r(i, null, {
              default: s(() => [
                r(
                  n(U),
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
                    vueCode: n(be),
                  },
                  { vue: s(() => [r(Oe)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[24] || (l[24] = V('', 2)),
            r(i, null, {
              default: s(() => [
                r(
                  n(U),
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
                    vueCode: n(H),
                  },
                  { vue: s(() => [r(oe)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[25] ||
              (l[25] = e(
                'h2',
                { id: '展示类型', tabindex: '-1' },
                [
                  a('展示类型 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#展示类型',
                      'aria-label': 'Permalink to "展示类型"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[26] ||
              (l[26] = e('p', null, ' 支持使用图片或者文字作为 Avatar。 ', -1)),
            r(i, null, {
              default: s(() => [
                r(
                  n(U),
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
                    vueCode: n(z),
                  },
                  { vue: s(() => [r(P)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[27] ||
              (l[27] = e(
                'p',
                null,
                [
                  a('图片加载失败时，可以使用 '),
                  e('code', null, 'error'),
                  a(' 属性触发函数，默认触发图片填充效果。'),
                ],
                -1,
              )),
            r(i, null, {
              default: s(() => [
                r(
                  n(U),
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
                    vueCode: n(C),
                  },
                  { vue: s(() => [r(Y)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[28] ||
              (l[28] = e(
                'p',
                null,
                [
                  a('当使用图片作为用户头像时，使用 '),
                  e('code', null, 'object-fit'),
                  a(' 属性设置该图片如何在容器中展示。'),
                ],
                -1,
              )),
            r(i, null, {
              default: s(() => [
                r(
                  n(U),
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
                    vueCode: n(_),
                  },
                  { vue: s(() => [r(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[29] ||
              (l[29] = e(
                'h2',
                { id: 'avatar-api', tabindex: '-1' },
                [
                  a('Avatar API '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#avatar-api',
                      'aria-label': 'Permalink to "Avatar API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[30] ||
              (l[30] = e(
                'h3',
                { id: 'avatar-属性', tabindex: '-1' },
                [
                  a('Avatar 属性 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#avatar-属性',
                      'aria-label': 'Permalink to "Avatar 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', Re, [
              l[15] ||
                (l[15] = e(
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
                l[14] ||
                  (l[14] = e(
                    'tr',
                    null,
                    [
                      e('td', null, 'src'),
                      e('td', null, '图片资源的路径'),
                      e('td', null, [e('code', null, 'string')]),
                      e('td', null, '-'),
                    ],
                    -1,
                  )),
                e('tr', null, [
                  l[3] || (l[3] = e('td', null, 'size', -1)),
                  l[4] || (l[4] = e('td', null, '尺寸大小', -1)),
                  e('td', null, [
                    l[0] || (l[0] = e('code', null, 'number', -1)),
                    l[1] || (l[1] = a(' / ')),
                    l[2] || (l[2] = e('code', null, 'enum', -1)),
                    r(v, { value: 'xs,sm,lg' }),
                  ]),
                  l[5] || (l[5] = e('td', null, '50', -1)),
                ]),
                e('tr', null, [
                  l[7] || (l[7] = e('td', null, 'shape', -1)),
                  l[8] || (l[8] = e('td', null, '头像的形状', -1)),
                  e('td', null, [
                    l[6] || (l[6] = e('code', null, 'enum', -1)),
                    r(v, { value: 'square,circle' }),
                  ]),
                  l[9] || (l[9] = e('td', null, 'circle', -1)),
                ]),
                e('tr', null, [
                  l[11] || (l[11] = e('td', null, 'fit', -1)),
                  l[12] || (l[12] = e('td', null, '头像的填充效果', -1)),
                  e('td', null, [
                    l[10] || (l[10] = e('code', null, 'enum', -1)),
                    r(v, { value: 'fill,contain,cover' }),
                  ]),
                  l[13] || (l[13] = e('td', null, 'cover', -1)),
                ]),
              ]),
            ]),
            l[31] ||
              (l[31] = e(
                'h3',
                { id: 'avatar-事件', tabindex: '-1' },
                [
                  a('Avatar 事件 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#avatar-事件',
                      'aria-label': 'Permalink to "Avatar 事件"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e('table', Qe, [
              l[19] ||
                (l[19] = e(
                  'thead',
                  null,
                  [
                    e('tr', null, [
                      e('th', null, '名称'),
                      e('th', null, '说明'),
                      e('th', null, '回调参数'),
                    ]),
                  ],
                  -1,
                )),
              e('tbody', null, [
                e('tr', null, [
                  l[17] || (l[17] = e('td', null, 'error', -1)),
                  l[18] || (l[18] = e('td', null, '图片加载失败时触发', -1)),
                  e('td', null, [
                    l[16] || (l[16] = e('code', null, 'Function', -1)),
                    r(v, { value: '(evt: MouseEvent) => void' }),
                  ]),
                ]),
              ]),
            ]),
            l[32] ||
              (l[32] = e(
                'h3',
                { id: 'avatar-插槽', tabindex: '-1' },
                [
                  a('Avatar 插槽 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#avatar-插槽',
                      'aria-label': 'Permalink to "Avatar 插槽"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[33] ||
              (l[33] = e(
                'table',
                { tabindex: '0' },
                [
                  e('thead', null, [
                    e('tr', null, [
                      e('th', null, '插槽名'),
                      e('th', null, '说明'),
                    ]),
                  ]),
                  e('tbody', null, [
                    e('tr', null, [
                      e('td', null, 'default'),
                      e('td', null, '自定义默认内容'),
                    ]),
                  ]),
                ],
                -1,
              )),
          ])
        )
      }
    },
  })
export { xe as __pageData, Be as default }
