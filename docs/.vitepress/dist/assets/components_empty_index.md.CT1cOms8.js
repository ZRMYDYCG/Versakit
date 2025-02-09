import { Y as m } from './chunks/theme.B5pwRwa9.js'
import {
  o as n,
  b as p,
  w as r,
  a as o,
  k as a,
  c as h,
  j as e,
  G as l,
  aq as U,
  B as T,
} from './chunks/framework.Z42t_U4q.js'
import { Q as c } from './chunks/index.DEUECMle.js'
const u = `<template>\r
  <VerEmpty iconName="lightning">\r
    <template #content>这是一个自定义图标</template>\r
  </VerEmpty>\r
</template>\r
<script setup>\r
import { VerEmpty } from '@versakit/ui'\r
<\/script>\r
<style scoped lang="scss"></style>\r
`,
  b = {
    __name: 'extend',
    setup(d) {
      return (s, t) => (
        n(),
        p(
          a(m),
          { iconName: 'lightning' },
          {
            content: r(() => t[0] || (t[0] = [o('这是一个自定义图标')])),
            _: 1,
          },
        )
      )
    },
  },
  y = `<template>\r
  <VerEmpty></VerEmpty>\r
</template>\r
<script setup>\r
import { VerEmpty } from '@versakit/ui'\r
<\/script>\r
<style scoped lang="scss"></style>\r
`,
  J = {
    __name: 'base',
    setup(d) {
      return (s, t) => (n(), p(a(m)))
    },
  },
  D = JSON.parse(
    '{"title":"Empty 无内容","description":"","frontmatter":{},"headers":[],"relativePath":"components/empty/index.md","filePath":"components/empty/index.md"}',
  ),
  E = { name: 'components/empty/index.md' },
  B = Object.assign(E, {
    setup(d) {
      return (s, t) => {
        const i = T('ClientOnly')
        return (
          n(),
          h('div', null, [
            t[0] ||
              (t[0] = e(
                'h1',
                { id: 'empty-无内容', tabindex: '-1' },
                [
                  o('Empty 无内容 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#empty-无内容',
                      'aria-label': 'Permalink to "Empty 无内容"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[1] || (t[1] = e('p', null, '空状态时的占位提示。', -1)),
            t[2] ||
              (t[2] = e(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  o('基础用法 '),
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
            l(i, null, {
              default: r(() => [
                l(
                  a(c),
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
                    vueCode: a(y),
                  },
                  { vue: r(() => [l(J)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[3] ||
              (t[3] = e(
                'h2',
                { id: '自定义图标', tabindex: '-1' },
                [
                  o('自定义图标 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义图标',
                      'aria-label': 'Permalink to "自定义图标"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l(i, null, {
              default: r(() => [
                l(
                  a(c),
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
                    vueCode: a(u),
                  },
                  { vue: r(() => [l(b)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[4] ||
              (t[4] = U(
                '<h2 id="empty-api" tabindex="-1">Empty API <a class="header-anchor" href="#empty-api" aria-label="Permalink to &quot;Empty API&quot;">​</a></h2><h3 id="empty-属性" tabindex="-1">Empty 属性 <a class="header-anchor" href="#empty-属性" aria-label="Permalink to &quot;Empty 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>showDescription</code></td><td>是否展示描述信息</td><td><code>boolean</code></td><td>true</td></tr><tr><td><code>showButton</code></td><td>是否展示按钮</td><td><code>boolean</code></td><td>true</td></tr></tbody></table><h3 id="empty-插槽" tabindex="-1">Empty 插槽 <a class="header-anchor" href="#empty-插槽" aria-label="Permalink to &quot;Empty 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>content</code></td><td>自定义内容文字</td></tr><tr><td><code>iconName</code></td><td>自定义图标</td></tr></tbody></table>',
                5,
              )),
          ])
        )
      }
    },
  })
export { D as __pageData, B as default }
