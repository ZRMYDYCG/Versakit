import { q as o } from './chunks/theme.B5pwRwa9.js'
import {
  d as u,
  o as s,
  b as c,
  w as l,
  j as T,
  k as r,
  c as p,
  aq as i,
  G as t,
  B as d,
} from './chunks/framework.Z42t_U4q.js'
import { Q as U } from './chunks/index.DEUECMle.js'
const h = `<template>\r
  <ver-result status="500">\r
    <template #content>\r
      <span>500 服务器错误</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  m = u({
    __name: '500',
    setup(n) {
      return (a, e) => (
        s(),
        c(
          r(o),
          { status: '500' },
          {
            content: l(
              () => e[0] || (e[0] = [T('span', null, '500 服务器错误', -1)]),
            ),
            _: 1,
          },
        )
      )
    },
  }),
  D = `<template>\r
  <ver-result status="403">\r
    <template #content>\r
      <span>404 资源不存在</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  _ = u({
    __name: '404',
    setup(n) {
      return (a, e) => (
        s(),
        c(
          r(o),
          { status: '403' },
          {
            content: l(
              () => e[0] || (e[0] = [T('span', null, '404 资源不存在', -1)]),
            ),
            _: 1,
          },
        )
      )
    },
  }),
  g = `<template>\r
  <ver-result status="403">\r
    <template #content>\r
      <span>403 禁止访问</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  v = u({
    __name: '403',
    setup(n) {
      return (a, e) => (
        s(),
        c(
          r(o),
          { status: '403' },
          {
            content: l(
              () => e[0] || (e[0] = [T('span', null, '403 禁止访问', -1)]),
            ),
            _: 1,
          },
        )
      )
    },
  }),
  B = `<template>\r
  <ver-result status="info">\r
    <template #content>\r
      <span>信息</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  b = u({
    __name: 'info',
    setup(n) {
      return (a, e) => (
        s(),
        c(
          r(o),
          { status: 'info' },
          {
            content: l(() => e[0] || (e[0] = [T('span', null, '信息', -1)])),
            _: 1,
          },
        )
      )
    },
  }),
  R = `<template>\r
  <ver-result status="warning">\r
    <template #content>\r
      <span>警告</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  C = u({
    __name: 'warning',
    setup(n) {
      return (a, e) => (
        s(),
        c(
          r(o),
          { status: 'warning' },
          {
            content: l(() => e[0] || (e[0] = [T('span', null, '警告', -1)])),
            _: 1,
          },
        )
      )
    },
  }),
  f = `<template>\r
  <ver-result status="error">\r
    <template #content>\r
      <span>错误</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  O = u({
    __name: 'error',
    setup(n) {
      return (a, e) => (
        s(),
        c(
          r(o),
          { status: 'error' },
          {
            content: l(() => e[0] || (e[0] = [T('span', null, '错误', -1)])),
            _: 1,
          },
        )
      )
    },
  }),
  k = `<template>\r
  <ver-result status="success">\r
    <template #content>\r
      <span>成功</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  Z = u({
    __name: 'success',
    setup(n) {
      return (a, e) => (
        s(),
        c(
          r(o),
          { status: 'success' },
          {
            content: l(() => e[0] || (e[0] = [T('span', null, '成功', -1)])),
            _: 1,
          },
        )
      )
    },
  }),
  E = JSON.parse(
    '{"title":"Result 结果页","description":"","frontmatter":{},"headers":[],"relativePath":"components/result/index.md","filePath":"components/result/index.md"}',
  ),
  x = { name: 'components/result/index.md' },
  Q = Object.assign(x, {
    setup(n) {
      return (a, e) => {
        const J = d('ClientOnly')
        return (
          s(),
          p('div', null, [
            e[0] || (e[0] = i('', 5)),
            t(J, null, {
              default: l(() => [
                t(
                  r(U),
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
                    vueCode: r(k),
                  },
                  { vue: l(() => [t(Z)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(J, null, {
              default: l(() => [
                t(
                  r(U),
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
                    vueCode: r(f),
                  },
                  { vue: l(() => [t(O)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(J, null, {
              default: l(() => [
                t(
                  r(U),
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
                    vueCode: r(R),
                  },
                  { vue: l(() => [t(C)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(J, null, {
              default: l(() => [
                t(
                  r(U),
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
                    vueCode: r(B),
                  },
                  { vue: l(() => [t(b)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(J, null, {
              default: l(() => [
                t(
                  r(U),
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
                  { vue: l(() => [t(v)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(J, null, {
              default: l(() => [
                t(
                  r(U),
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
                    vueCode: r(D),
                  },
                  { vue: l(() => [t(_)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(J, null, {
              default: l(() => [
                t(
                  r(U),
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
                    vueCode: r(h),
                  },
                  { vue: l(() => [t(m)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[1] || (e[1] = i('', 5)),
          ])
        )
      }
    },
  })
export { E as __pageData, Q as default }
