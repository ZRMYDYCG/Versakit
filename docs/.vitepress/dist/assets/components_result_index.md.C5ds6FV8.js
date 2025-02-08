import { o as U } from './chunks/theme.DSVdNaqk.js'
import {
  d as c,
  o as s,
  b as T,
  w as l,
  j as i,
  k as r,
  c as p,
  aq as d,
  G as t,
  B as J,
} from './chunks/framework.Z42t_U4q.js'
import { Q as u } from './chunks/index.DEUECMle.js'
const m = `<template>\r
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
  h = c({
    __name: '500',
    setup(n) {
      return (a, e) => (
        s(),
        T(
          r(U),
          { status: '500' },
          {
            content: l(
              () => e[0] || (e[0] = [i('span', null, '500 服务器错误', -1)]),
            ),
            _: 1,
          },
        )
      )
    },
  }),
  b = `<template>\r
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
  _ = c({
    __name: '404',
    setup(n) {
      return (a, e) => (
        s(),
        T(
          r(U),
          { status: '403' },
          {
            content: l(
              () => e[0] || (e[0] = [i('span', null, '404 资源不存在', -1)]),
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
  O = c({
    __name: '403',
    setup(n) {
      return (a, e) => (
        s(),
        T(
          r(U),
          { status: '403' },
          {
            content: l(
              () => e[0] || (e[0] = [i('span', null, '403 禁止访问', -1)]),
            ),
            _: 1,
          },
        )
      )
    },
  }),
  R = `<template>\r
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
  v = c({
    __name: 'info',
    setup(n) {
      return (a, e) => (
        s(),
        T(
          r(U),
          { status: 'info' },
          {
            content: l(() => e[0] || (e[0] = [i('span', null, '信息', -1)])),
            _: 1,
          },
        )
      )
    },
  }),
  V = `<template>\r
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
  B = c({
    __name: 'warning',
    setup(n) {
      return (a, e) => (
        s(),
        T(
          r(U),
          { status: 'warning' },
          {
            content: l(() => e[0] || (e[0] = [i('span', null, '警告', -1)])),
            _: 1,
          },
        )
      )
    },
  }),
  k = `<template>\r
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
  C = c({
    __name: 'error',
    setup(n) {
      return (a, e) => (
        s(),
        T(
          r(U),
          { status: 'error' },
          {
            content: l(() => e[0] || (e[0] = [i('span', null, '错误', -1)])),
            _: 1,
          },
        )
      )
    },
  }),
  Q = `<template>\r
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
  g = c({
    __name: 'success',
    setup(n) {
      return (a, e) => (
        s(),
        T(
          r(U),
          { status: 'success' },
          {
            content: l(() => e[0] || (e[0] = [i('span', null, '成功', -1)])),
            _: 1,
          },
        )
      )
    },
  }),
  N = JSON.parse(
    '{"title":"Result 结果页","description":"","frontmatter":{},"headers":[],"relativePath":"components/result/index.md","filePath":"components/result/index.md"}',
  ),
  f = { name: 'components/result/index.md' },
  y = Object.assign(f, {
    setup(n) {
      return (a, e) => {
        const o = J('ClientOnly')
        return (
          s(),
          p('div', null, [
            e[0] ||
              (e[0] = d(
                '<h1 id="result-结果页" tabindex="-1">Result 结果页 <a class="header-anchor" href="#result-结果页" aria-label="Permalink to &quot;Result 结果页&quot;">​</a></h1><p>用于反馈一系列操作任务的处理结果。</p><h2 id="何时使用" tabindex="-1">何时使用 <a class="header-anchor" href="#何时使用" aria-label="Permalink to &quot;何时使用&quot;">​</a></h2><p>当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2>',
                5,
              )),
            t(o, null, {
              default: l(() => [
                t(
                  r(u),
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
                    vueCode: r(Q),
                  },
                  { vue: l(() => [t(g)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(o, null, {
              default: l(() => [
                t(
                  r(u),
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
                  { vue: l(() => [t(C)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(o, null, {
              default: l(() => [
                t(
                  r(u),
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
                    vueCode: r(V),
                  },
                  { vue: l(() => [t(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(o, null, {
              default: l(() => [
                t(
                  r(u),
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
                  { vue: l(() => [t(v)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(o, null, {
              default: l(() => [
                t(
                  r(u),
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
                  { vue: l(() => [t(O)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(o, null, {
              default: l(() => [
                t(
                  r(u),
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
                    vueCode: r(b),
                  },
                  { vue: l(() => [t(_)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(o, null, {
              default: l(() => [
                t(
                  r(u),
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
                    vueCode: r(m),
                  },
                  { vue: l(() => [t(h)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[1] ||
              (e[1] = d(
                '<h2 id="result-api" tabindex="-1">Result API <a class="header-anchor" href="#result-api" aria-label="Permalink to &quot;Result API&quot;">​</a></h2><h3 id="result-属性" tabindex="-1">Result 属性 <a class="header-anchor" href="#result-属性" aria-label="Permalink to &quot;Result 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>status</code></td><td>结果的状态，决定图标和颜色</td><td><code>string</code></td><td><code>success</code></td></tr></tbody></table><h3 id="result-插槽" tabindex="-1">Result 插槽 <a class="header-anchor" href="#result-插槽" aria-label="Permalink to &quot;Result 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>content</code></td><td>结果页中的内容</td></tr></tbody></table>',
                5,
              )),
          ])
        )
      }
    },
  })
export { N as __pageData, y as default }
