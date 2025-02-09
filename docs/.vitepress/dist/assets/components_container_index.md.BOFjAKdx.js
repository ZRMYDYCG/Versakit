import {
  V as m,
  c as J,
  e as v,
  A as d,
  p as g,
} from './chunks/theme.B5pwRwa9.js'
import {
  d as u,
  o as U,
  c as o,
  G as e,
  w as n,
  k as t,
  a as l,
  _ as T,
  aq as p,
  B as f,
} from './chunks/framework.Z42t_U4q.js'
import { Q as s } from './chunks/index.DEUECMle.js'
const h = `<template>\r
  <div class="common-layout">\r
    <ver-container>\r
      <ver-aside width="200px">Aside</ver-aside>\r
      <ver-container direction="column">\r
        <ver-header>Header</ver-header>\r
        <ver-main>Main</ver-main>\r
        <ver-footer>Footer</ver-footer>\r
      </ver-container>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {\r
  VerContainer,\r
  VerHeader,\r
  VerMain,\r
  VerAside,\r
  VerFooter,\r
} from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
\r
  .ver-aside {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    text-align: center;\r
    color: #303133;\r
    background-color: rgb(216.8, 235.6, 255);\r
  }\r
\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
\r
  .ver-footer {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
}\r
</style>\r
`,
  D = { class: 'common-layout' },
  x = u({
    __name: 'partSeven',
    setup(a) {
      return (c, r) => (
        U(),
        o('div', D, [
          e(t(J), null, {
            default: n(() => [
              e(
                t(m),
                { width: '200px' },
                { default: n(() => r[0] || (r[0] = [l('Aside')])), _: 1 },
              ),
              e(
                t(J),
                { direction: 'column' },
                {
                  default: n(() => [
                    e(t(v), null, {
                      default: n(() => r[1] || (r[1] = [l('Header')])),
                      _: 1,
                    }),
                    e(t(d), null, {
                      default: n(() => r[2] || (r[2] = [l('Main')])),
                      _: 1,
                    }),
                    e(t(g), null, {
                      default: n(() => r[3] || (r[3] = [l('Footer')])),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  Y = T(x, [['__scopeId', 'data-v-d8577821']]),
  B = `<template>\r
  <div class="common-layout">\r
    <ver-container>\r
      <ver-aside width="200px">Aside</ver-aside>\r
      <ver-container direction="column">\r
        <ver-header>Header</ver-header>\r
        <ver-main>Main</ver-main>\r
      </ver-container>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerContainer, VerHeader, VerMain, VerAside } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
\r
  .ver-aside {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    text-align: center;\r
    color: #303133;\r
    background-color: rgb(216.8, 235.6, 255);\r
  }\r
\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
\r
  .ver-footer {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
}\r
</style>\r
`,
  y = { class: 'common-layout' },
  Z = u({
    __name: 'partSix',
    setup(a) {
      return (c, r) => (
        U(),
        o('div', y, [
          e(t(J), null, {
            default: n(() => [
              e(
                t(m),
                { width: '200px' },
                { default: n(() => r[0] || (r[0] = [l('Aside')])), _: 1 },
              ),
              e(
                t(J),
                { direction: 'column' },
                {
                  default: n(() => [
                    e(t(v), null, {
                      default: n(() => r[1] || (r[1] = [l('Header')])),
                      _: 1,
                    }),
                    e(t(d), null, {
                      default: n(() => r[2] || (r[2] = [l('Main')])),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  O = T(Z, [['__scopeId', 'data-v-f8d3be10']]),
  R = `<template>\r
  <div class="common-layout">\r
    <ver-container direction="column">\r
      <ver-header>Header</ver-header>\r
      <ver-container>\r
        <ver-aside width="200px">Aside</ver-aside>\r
        <ver-container direction="column">\r
          <ver-main>Main</ver-main>\r
          <ver-footer>Footer</ver-footer>\r
        </ver-container>\r
      </ver-container>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {\r
  VerContainer,\r
  VerHeader,\r
  VerMain,\r
  VerAside,\r
  VerFooter,\r
} from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
\r
  .ver-aside {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    text-align: center;\r
    color: #303133;\r
    background-color: rgb(216.8, 235.6, 255);\r
  }\r
\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
\r
  .ver-footer {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
}\r
</style>\r
`,
  _ = { class: 'common-layout' },
  b = u({
    __name: 'partFive',
    setup(a) {
      return (c, r) => (
        U(),
        o('div', _, [
          e(
            t(J),
            { direction: 'column' },
            {
              default: n(() => [
                e(t(v), null, {
                  default: n(() => r[0] || (r[0] = [l('Header')])),
                  _: 1,
                }),
                e(t(J), null, {
                  default: n(() => [
                    e(
                      t(m),
                      { width: '200px' },
                      { default: n(() => r[1] || (r[1] = [l('Aside')])), _: 1 },
                    ),
                    e(
                      t(J),
                      { direction: 'column' },
                      {
                        default: n(() => [
                          e(t(d), null, {
                            default: n(() => r[2] || (r[2] = [l('Main')])),
                            _: 1,
                          }),
                          e(t(g), null, {
                            default: n(() => r[3] || (r[3] = [l('Footer')])),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  C = T(b, [['__scopeId', 'data-v-2c2970ad']]),
  k = `<template>\r
  <div class="common-layout">\r
    <ver-container direction="column">\r
      <ver-header>Header</ver-header>\r
      <ver-container>\r
        <ver-aside width="200px">Aside</ver-aside>\r
        <ver-main>Main</ver-main>\r
      </ver-container>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerContainer, VerHeader, VerMain, VerAside } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
\r
  .ver-aside {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    text-align: center;\r
    color: #303133;\r
    background-color: rgb(216.8, 235.6, 255);\r
  }\r
\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
}\r
</style>\r
`,
  w = { class: 'common-layout' },
  E = u({
    __name: 'partFour',
    setup(a) {
      return (c, r) => (
        U(),
        o('div', w, [
          e(
            t(J),
            { direction: 'column' },
            {
              default: n(() => [
                e(t(v), null, {
                  default: n(() => r[0] || (r[0] = [l('Header')])),
                  _: 1,
                }),
                e(t(J), null, {
                  default: n(() => [
                    e(
                      t(m),
                      { width: '200px' },
                      { default: n(() => r[1] || (r[1] = [l('Aside')])), _: 1 },
                    ),
                    e(t(d), null, {
                      default: n(() => r[2] || (r[2] = [l('Main')])),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  W = T(E, [['__scopeId', 'data-v-47867854']]),
  V = `<template>\r
  <div class="common-layout">\r
    <ver-container>\r
      <ver-aside width="200px">Aside</ver-aside>\r
      <ver-main>Main</ver-main>\r
      <ver-aside width="200px">Aside</ver-aside>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerContainer, VerAside, VerMain } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .is-vertical {\r
    flex-direction: column;\r
  }\r
\r
  .ver-aside {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c1deff;\r
  }\r
\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
}\r
</style>\r
`,
  X = { class: 'common-layout' },
  F = u({
    __name: 'partThree',
    setup(a) {
      return (c, r) => (
        U(),
        o('div', X, [
          e(t(J), null, {
            default: n(() => [
              e(
                t(m),
                { width: '200px' },
                { default: n(() => r[0] || (r[0] = [l('Aside')])), _: 1 },
              ),
              e(t(d), null, {
                default: n(() => r[1] || (r[1] = [l('Main')])),
                _: 1,
              }),
              e(
                t(m),
                { width: '200px' },
                { default: n(() => r[2] || (r[2] = [l('Aside')])), _: 1 },
              ),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  I = T(F, [['__scopeId', 'data-v-19ecd1d0']]),
  A = `<template>\r
  <div class="common-layout">\r
    <ver-container direction="column">\r
      <ver-header>Header</ver-header>\r
      <ver-main>Main</ver-main>\r
      <ver-footer>Footer</ver-footer>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerContainer, VerHeader, VerMain, VerFooter } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
\r
  .ver-footer {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
}\r
</style>\r
`,
  Q = { class: 'common-layout' },
  L = u({
    __name: 'partTow',
    setup(a) {
      return (c, r) => (
        U(),
        o('div', Q, [
          e(
            t(J),
            { direction: 'column' },
            {
              default: n(() => [
                e(t(v), null, {
                  default: n(() => r[0] || (r[0] = [l('Header')])),
                  _: 1,
                }),
                e(t(d), null, {
                  default: n(() => r[1] || (r[1] = [l('Main')])),
                  _: 1,
                }),
                e(t(g), null, {
                  default: n(() => r[2] || (r[2] = [l('Footer')])),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  j = T(L, [['__scopeId', 'data-v-a2fad046']]),
  M = `<template>\r
  <div class="common-layout">\r
    <ver-container direction="column">\r
      <ver-header>Header</ver-header>\r
      <ver-main>Main</ver-main>\r
    </ver-container>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerContainer, VerHeader, VerMain } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.common-layout {\r
  .ver-header {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #c6e2ff;\r
  }\r
  .ver-main {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background-color: #ecf5ff;\r
    height: 150px;\r
  }\r
}\r
</style>\r
`,
  S = { class: 'common-layout' },
  z = u({
    __name: 'partOne',
    setup(a) {
      return (c, r) => (
        U(),
        o('div', S, [
          e(
            t(J),
            { direction: 'column' },
            {
              default: n(() => [
                e(t(v), null, {
                  default: n(() => r[0] || (r[0] = [l('Header')])),
                  _: 1,
                }),
                e(t(d), null, {
                  default: n(() => r[1] || (r[1] = [l('Main')])),
                  _: 1,
                }),
              ]),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  G = T(z, [['__scopeId', 'data-v-7aa54d7e']]),
  P = JSON.parse(
    '{"title":"Container 布局容器","description":"","frontmatter":{},"headers":[],"relativePath":"components/container/index.md","filePath":"components/container/index.md"}',
  ),
  N = { name: 'components/container/index.md' },
  K = Object.assign(N, {
    setup(a) {
      return (c, r) => {
        const i = f('ClientOnly')
        return (
          U(),
          o('div', null, [
            r[0] ||
              (r[0] = p(
                '<h1 id="container-布局容器" tabindex="-1">Container 布局容器 <a class="header-anchor" href="#container-布局容器" aria-label="Permalink to &quot;Container 布局容器&quot;">​</a></h1><p>用于布局的容器组件，方便快速搭建页面的基本结构：</p><p><code>ver-container</code>外层容器。当子元素中包含 <code>ver-header</code> 或 <code>t-footer</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。</p><p><code>ver-header</code>：顶栏容器。</p><p><code>ver-aside</code>：侧边栏容器。</p><p><code>ver-main</code>：主要区域容器。</p><p><code>ver-footer</code>：底栏容器。</p><blockquote><p><strong>Tips</strong></p><p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， <code>ver-container</code> 的直接子元素必须是&gt; 后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 <code>ver-container</code></p></blockquote><h2 id="常见布局" tabindex="-1">常见布局 <a class="header-anchor" href="#常见布局" aria-label="Permalink to &quot;常见布局&quot;">​</a></h2>',
                9,
              )),
            e(i, null, {
              default: n(() => [
                e(
                  t(s),
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
                    vueCode: t(M),
                  },
                  { vue: n(() => [e(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(i, null, {
              default: n(() => [
                e(
                  t(s),
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
                    vueCode: t(A),
                  },
                  { vue: n(() => [e(j)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(i, null, {
              default: n(() => [
                e(
                  t(s),
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
                    vueCode: t(V),
                  },
                  { vue: n(() => [e(I)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(i, null, {
              default: n(() => [
                e(
                  t(s),
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
                    vueCode: t(k),
                  },
                  { vue: n(() => [e(W)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(i, null, {
              default: n(() => [
                e(
                  t(s),
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
                    vueCode: t(R),
                  },
                  { vue: n(() => [e(C)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(i, null, {
              default: n(() => [
                e(
                  t(s),
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
                    vueCode: t(B),
                  },
                  { vue: n(() => [e(O)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(i, null, {
              default: n(() => [
                e(
                  t(s),
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
                    vueCode: t(h),
                  },
                  { vue: n(() => [e(Y)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
          ])
        )
      }
    },
  })
export { P as __pageData, K as default }
