import { d as t, E as T, N as i, D as g } from './chunks/theme.B5pwRwa9.js'
import {
  d as m,
  ao as k,
  ap as x,
  o as c,
  c as u,
  F as D,
  C as _,
  j as e,
  t as B,
  G as l,
  k as n,
  _ as p,
  w as s,
  b as h,
  a,
  aq as R,
  B as f,
} from './chunks/framework.Z42t_U4q.js'
import { Q as v } from './chunks/index.DEUECMle.js'
const O = `<template>\r
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
  Y = { class: 'demo' },
  C = { class: 'title' },
  w = m({
    __name: 'fit',
    setup(J) {
      const d = k({
          fits: ['fill', 'contain', 'cover', 'none'],
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        }),
        { fits: r, url: o } = x(d)
      return (U, Re) => (
        c(),
        u('div', Y, [
          (c(!0),
          u(
            D,
            null,
            _(
              n(r),
              (b) => (
                c(),
                u('div', { key: b, class: 'block' }, [
                  e('div', C, B(b), 1),
                  l(
                    n(t),
                    { shape: 'square', size: 100, fit: b, src: n(o) },
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
  E = p(w, [['__scopeId', 'data-v-71586171']]),
  F = `<template>\r
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
  Z = { class: 'demo-basic' },
  z = { class: 'demo-error' },
  A = { class: 'demo-error' },
  I = m({
    __name: 'error',
    setup(J) {
      return (d, r) => (
        c(),
        u('div', Z, [
          e('div', z, [
            l(n(t), {
              src: 'http://wrong',
              fallback:
                'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            }),
          ]),
          e('div', A, [
            l(
              n(t),
              { src: 'http://wrong' },
              { error: s(() => [l(n(T), { name: 'card-image' })]), _: 1 },
            ),
          ]),
        ])
      )
    },
  }),
  y = p(I, [['__scopeId', 'data-v-f94f1cba']]),
  q = `<template>\r
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
  V = { class: 'demo-basic' },
  X = { class: 'demo-basic--circle' },
  Q = { class: 'block' },
  L = { class: 'block' },
  W = { class: 'block' },
  S = { class: 'demo-basic' },
  $ = { class: 'demo-basic--square' },
  N = { class: 'block' },
  M = { class: 'block' },
  G = { class: 'block' },
  j = m({
    __name: 'src',
    setup(J) {
      return (d, r) => (
        c(),
        h(n(g), null, {
          default: s(() => [
            l(
              n(i),
              { span: 12 },
              {
                default: s(() => [
                  e('div', V, [
                    r[1] ||
                      (r[1] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', X, [
                      e('div', Q, [
                        l(n(t), {
                          src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                        }),
                      ]),
                      e('div', L, [
                        l(n(t), null, {
                          default: s(() => r[0] || (r[0] = [a('user')])),
                          _: 1,
                        }),
                      ]),
                      e('div', W, [
                        l(n(t), null, {
                          default: s(() => [l(n(T), { name: 'card-image' })]),
                          _: 1,
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            l(
              n(i),
              { span: 12 },
              {
                default: s(() => [
                  e('div', S, [
                    r[3] ||
                      (r[3] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', $, [
                      e('div', N, [
                        l(n(t), {
                          src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                          shape: 'square',
                        }),
                      ]),
                      e('div', M, [
                        l(
                          n(t),
                          { shape: 'square' },
                          {
                            default: s(() => r[2] || (r[2] = [a('user')])),
                            _: 1,
                          },
                        ),
                      ]),
                      e('div', G, [
                        l(
                          n(t),
                          { shape: 'square' },
                          {
                            default: s(() => [l(n(T), { name: 'card-image' })]),
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
  P = p(j, [['__scopeId', 'data-v-d686a1ef']]),
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
  re = { class: 'block' },
  le = { class: 'block' },
  ne = { class: 'block' },
  se = { class: 'demo-basic' },
  te = { class: 'demo-basic--square' },
  ae = { class: 'block' },
  ce = { class: 'block' },
  oe = { class: 'block' },
  de = m({
    __name: 'size',
    setup(J) {
      return (d, r) => (
        c(),
        h(n(g), null, {
          default: s(() => [
            l(
              n(i),
              { span: 12 },
              {
                default: s(() => [
                  e('div', K, [
                    r[0] ||
                      (r[0] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', ee, [
                      e('div', re, [
                        l(n(t), {
                          size: 'lg',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', le, [
                        l(n(t), {
                          size: 'lg',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', ne, [
                        l(n(t), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            l(
              n(i),
              { span: 12 },
              {
                default: s(() => [
                  e('div', se, [
                    r[1] ||
                      (r[1] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', te, [
                      e('div', ae, [
                        l(n(t), {
                          size: 'xs',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', ce, [
                        l(n(t), {
                          size: 'sm',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', oe, [
                        l(n(t), {
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
  ie = p(de, [['__scopeId', 'data-v-f23956cb']]),
  Je = `<template>\r
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
  Ue = { class: 'demo-basic' },
  ve = { class: 'demo-basic--circle' },
  ue = { class: 'block' },
  me = { class: 'block' },
  pe = { class: 'block' },
  be = { class: 'demo-basic' },
  Te = { class: 'demo-basic--square' },
  ge = { class: 'block' },
  he = { class: 'block' },
  fe = { class: 'block' },
  ke = m({
    __name: 'base',
    setup(J) {
      return (d, r) => (
        c(),
        h(n(g), null, {
          default: s(() => [
            l(
              n(i),
              { span: 12 },
              {
                default: s(() => [
                  e('div', Ue, [
                    r[0] ||
                      (r[0] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', ve, [
                      e('div', ue, [
                        l(n(t), {
                          size: 24,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', me, [
                        l(n(t), {
                          size: 36,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', pe, [
                        l(n(t), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            l(
              n(i),
              { span: 12 },
              {
                default: s(() => [
                  e('div', be, [
                    r[1] ||
                      (r[1] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', Te, [
                      e('div', ge, [
                        l(n(t), {
                          size: 24,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', he, [
                        l(n(t), {
                          size: 36,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', fe, [
                        l(n(t), {
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
  xe = p(ke, [['__scopeId', 'data-v-42888fb5']]),
  De = { tabindex: '0' },
  _e = { tabindex: '0' },
  we = JSON.parse(
    '{"title":"Avatar 头像","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}',
  ),
  Be = { name: 'components/avatar/index.md' },
  Ee = Object.assign(Be, {
    setup(J) {
      return (d, r) => {
        const o = f('ClientOnly'),
          U = f('Tool')
        return (
          c(),
          u('div', null, [
            r[20] ||
              (r[20] = e(
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
            r[21] ||
              (r[21] = e(
                'p',
                null,
                'Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。',
                -1,
              )),
            r[22] ||
              (r[22] = e(
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
            r[23] ||
              (r[23] = e(
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
            l(o, null, {
              default: s(() => [
                l(
                  n(v),
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
                    vueCode: n(Je),
                  },
                  { vue: s(() => [l(xe)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[24] ||
              (r[24] = R(
                '<h2 id="头像大小" tabindex="-1">头像大小 <a class="header-anchor" href="#头像大小" aria-label="Permalink to &quot;头像大小&quot;">​</a></h2><p>图片的 <code>size</code> 也支持使用 <code>string</code> 类型来设置尺寸大小，例如：<code>xs</code> , <code>s</code> , <code>md</code> , <code>lg</code> 。</p>',
                2,
              )),
            l(o, null, {
              default: s(() => [
                l(
                  n(v),
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
                  { vue: s(() => [l(ie)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[25] ||
              (r[25] = e(
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
            r[26] ||
              (r[26] = e('p', null, ' 支持使用图片或者文字作为 Avatar。 ', -1)),
            l(o, null, {
              default: s(() => [
                l(
                  n(v),
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
                    vueCode: n(q),
                  },
                  { vue: s(() => [l(P)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[27] ||
              (r[27] = e(
                'p',
                null,
                [
                  a('图片加载失败时，可以使用 '),
                  e('code', null, 'error'),
                  a(' 属性触发函数，默认触发图片填充效果。'),
                ],
                -1,
              )),
            l(o, null, {
              default: s(() => [
                l(
                  n(v),
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
                    vueCode: n(F),
                  },
                  { vue: s(() => [l(y)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[28] ||
              (r[28] = e(
                'p',
                null,
                [
                  a('当使用图片作为用户头像时，使用 '),
                  e('code', null, 'object-fit'),
                  a(' 属性设置该图片如何在容器中展示。'),
                ],
                -1,
              )),
            l(o, null, {
              default: s(() => [
                l(
                  n(v),
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
                    vueCode: n(O),
                  },
                  { vue: s(() => [l(E)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[29] ||
              (r[29] = e(
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
            r[30] ||
              (r[30] = e(
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
            e('table', De, [
              r[15] ||
                (r[15] = e(
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
                r[14] ||
                  (r[14] = e(
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
                  r[3] || (r[3] = e('td', null, 'size', -1)),
                  r[4] || (r[4] = e('td', null, '尺寸大小', -1)),
                  e('td', null, [
                    r[0] || (r[0] = e('code', null, 'number', -1)),
                    r[1] || (r[1] = a(' / ')),
                    r[2] || (r[2] = e('code', null, 'enum', -1)),
                    l(U, { value: 'xs,sm,lg' }),
                  ]),
                  r[5] || (r[5] = e('td', null, '50', -1)),
                ]),
                e('tr', null, [
                  r[7] || (r[7] = e('td', null, 'shape', -1)),
                  r[8] || (r[8] = e('td', null, '头像的形状', -1)),
                  e('td', null, [
                    r[6] || (r[6] = e('code', null, 'enum', -1)),
                    l(U, { value: 'square,circle' }),
                  ]),
                  r[9] || (r[9] = e('td', null, 'circle', -1)),
                ]),
                e('tr', null, [
                  r[11] || (r[11] = e('td', null, 'fit', -1)),
                  r[12] || (r[12] = e('td', null, '头像的填充效果', -1)),
                  e('td', null, [
                    r[10] || (r[10] = e('code', null, 'enum', -1)),
                    l(U, { value: 'fill,contain,cover' }),
                  ]),
                  r[13] || (r[13] = e('td', null, 'cover', -1)),
                ]),
              ]),
            ]),
            r[31] ||
              (r[31] = e(
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
            e('table', _e, [
              r[19] ||
                (r[19] = e(
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
                  r[17] || (r[17] = e('td', null, 'error', -1)),
                  r[18] || (r[18] = e('td', null, '图片加载失败时触发', -1)),
                  e('td', null, [
                    r[16] || (r[16] = e('code', null, 'Function', -1)),
                    l(U, { value: '(evt: MouseEvent) => void' }),
                  ]),
                ]),
              ]),
            ]),
            r[32] ||
              (r[32] = e(
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
            r[33] ||
              (r[33] = e(
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
export { we as __pageData, Ee as default }
