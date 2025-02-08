import { Z as m, a, b as v, g as T, q as p } from './chunks/theme.CWxU7uh8.js'
import {
  d as u,
  o,
  c as i,
  G as e,
  w as l,
  k as n,
  a as t,
  _ as J,
  aq as f,
  B as b,
} from './chunks/framework.Z42t_U4q.js'
import { Q as s } from './chunks/index.DEUECMle.js'
const O = `<template>\r
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
  g = { class: 'common-layout' },
  R = u({
    __name: 'partSeven',
    setup(c) {
      return (U, r) => (
        o(),
        i('div', g, [
          e(n(a), null, {
            default: l(() => [
              e(
                n(m),
                { width: '200px' },
                { default: l(() => r[0] || (r[0] = [t('Aside')])), _: 1 },
              ),
              e(
                n(a),
                { direction: 'column' },
                {
                  default: l(() => [
                    e(n(v), null, {
                      default: l(() => r[1] || (r[1] = [t('Header')])),
                      _: 1,
                    }),
                    e(n(T), null, {
                      default: l(() => r[2] || (r[2] = [t('Main')])),
                      _: 1,
                    }),
                    e(n(p), null, {
                      default: l(() => r[3] || (r[3] = [t('Footer')])),
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
  y = J(R, [['__scopeId', 'data-v-d8577821']]),
  V = `<template>\r
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
  k = { class: 'common-layout' },
  Q = u({
    __name: 'partSix',
    setup(c) {
      return (U, r) => (
        o(),
        i('div', k, [
          e(n(a), null, {
            default: l(() => [
              e(
                n(m),
                { width: '200px' },
                { default: l(() => r[0] || (r[0] = [t('Aside')])), _: 1 },
              ),
              e(
                n(a),
                { direction: 'column' },
                {
                  default: l(() => [
                    e(n(v), null, {
                      default: l(() => r[1] || (r[1] = [t('Header')])),
                      _: 1,
                    }),
                    e(n(T), null, {
                      default: l(() => r[2] || (r[2] = [t('Main')])),
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
  h = J(Q, [['__scopeId', 'data-v-f8d3be10']]),
  E = `<template>\r
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
  D = { class: 'common-layout' },
  F = u({
    __name: 'partFive',
    setup(c) {
      return (U, r) => (
        o(),
        i('div', D, [
          e(
            n(a),
            { direction: 'column' },
            {
              default: l(() => [
                e(n(v), null, {
                  default: l(() => r[0] || (r[0] = [t('Header')])),
                  _: 1,
                }),
                e(n(a), null, {
                  default: l(() => [
                    e(
                      n(m),
                      { width: '200px' },
                      { default: l(() => r[1] || (r[1] = [t('Aside')])), _: 1 },
                    ),
                    e(
                      n(a),
                      { direction: 'column' },
                      {
                        default: l(() => [
                          e(n(T), null, {
                            default: l(() => r[2] || (r[2] = [t('Main')])),
                            _: 1,
                          }),
                          e(n(p), null, {
                            default: l(() => r[3] || (r[3] = [t('Footer')])),
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
  N = J(F, [['__scopeId', 'data-v-2c2970ad']]),
  _ = `<template>\r
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
  B = { class: 'common-layout' },
  C = u({
    __name: 'partFour',
    setup(c) {
      return (U, r) => (
        o(),
        i('div', B, [
          e(
            n(a),
            { direction: 'column' },
            {
              default: l(() => [
                e(n(v), null, {
                  default: l(() => r[0] || (r[0] = [t('Header')])),
                  _: 1,
                }),
                e(n(a), null, {
                  default: l(() => [
                    e(
                      n(m),
                      { width: '200px' },
                      { default: l(() => r[1] || (r[1] = [t('Aside')])), _: 1 },
                    ),
                    e(n(T), null, {
                      default: l(() => r[2] || (r[2] = [t('Main')])),
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
  x = J(C, [['__scopeId', 'data-v-47867854']]),
  w = `<template>\r
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
  A = { class: 'common-layout' },
  L = u({
    __name: 'partThree',
    setup(c) {
      return (U, r) => (
        o(),
        i('div', A, [
          e(n(a), null, {
            default: l(() => [
              e(
                n(m),
                { width: '200px' },
                { default: l(() => r[0] || (r[0] = [t('Aside')])), _: 1 },
              ),
              e(n(T), null, {
                default: l(() => r[1] || (r[1] = [t('Main')])),
                _: 1,
              }),
              e(
                n(m),
                { width: '200px' },
                { default: l(() => r[2] || (r[2] = [t('Aside')])), _: 1 },
              ),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  W = J(L, [['__scopeId', 'data-v-19ecd1d0']]),
  Y = `<template>\r
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
  S = { class: 'common-layout' },
  G = u({
    __name: 'partTow',
    setup(c) {
      return (U, r) => (
        o(),
        i('div', S, [
          e(
            n(a),
            { direction: 'column' },
            {
              default: l(() => [
                e(n(v), null, {
                  default: l(() => r[0] || (r[0] = [t('Header')])),
                  _: 1,
                }),
                e(n(T), null, {
                  default: l(() => r[1] || (r[1] = [t('Main')])),
                  _: 1,
                }),
                e(n(p), null, {
                  default: l(() => r[2] || (r[2] = [t('Footer')])),
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
  j = J(G, [['__scopeId', 'data-v-a2fad046']]),
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
  Z = { class: 'common-layout' },
  z = u({
    __name: 'partOne',
    setup(c) {
      return (U, r) => (
        o(),
        i('div', Z, [
          e(
            n(a),
            { direction: 'column' },
            {
              default: l(() => [
                e(n(v), null, {
                  default: l(() => r[0] || (r[0] = [t('Header')])),
                  _: 1,
                }),
                e(n(T), null, {
                  default: l(() => r[1] || (r[1] = [t('Main')])),
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
  I = J(z, [['__scopeId', 'data-v-7aa54d7e']]),
  P = JSON.parse(
    '{"title":"Container 布局容器","description":"","frontmatter":{},"headers":[],"relativePath":"components/container/index.md","filePath":"components/container/index.md"}',
  ),
  H = { name: 'components/container/index.md' },
  K = Object.assign(H, {
    setup(c) {
      return (U, r) => {
        const d = b('ClientOnly')
        return (
          o(),
          i('div', null, [
            r[0] || (r[0] = f('', 9)),
            e(d, null, {
              default: l(() => [
                e(
                  n(s),
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
                    vueCode: n(M),
                  },
                  { vue: l(() => [e(I)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(d, null, {
              default: l(() => [
                e(
                  n(s),
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
                    vueCode: n(Y),
                  },
                  { vue: l(() => [e(j)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(d, null, {
              default: l(() => [
                e(
                  n(s),
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
                    vueCode: n(w),
                  },
                  { vue: l(() => [e(W)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(d, null, {
              default: l(() => [
                e(
                  n(s),
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
                  { vue: l(() => [e(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(d, null, {
              default: l(() => [
                e(
                  n(s),
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
                    vueCode: n(E),
                  },
                  { vue: l(() => [e(N)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(d, null, {
              default: l(() => [
                e(
                  n(s),
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
                    vueCode: n(V),
                  },
                  { vue: l(() => [e(h)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e(d, null, {
              default: l(() => [
                e(
                  n(s),
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
                  { vue: l(() => [e(y)]), _: 1 },
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
