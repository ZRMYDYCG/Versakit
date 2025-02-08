import {
  _ as o,
  ar as d,
  a8 as m,
  o as r,
  c as s,
  j as t,
  a,
  G as l,
  w as i,
  k as n,
  B as T,
} from './chunks/framework.Z42t_U4q.js'
import { Q as u } from './chunks/index.DEUECMle.js'
const p = `<script setup lang="ts"><\/script>\r
\r
<template>\r
  <div v-increase="100"></div>\r
</template>\r
\r
<style lang="scss" scoped></style>\r
`,
  V = {}
function C(U, J) {
  const e = d('increase')
  return m((r(), s('div', null, null, 512)), [[e, 100]])
}
const N = o(V, [['render', C]]),
  B = JSON.parse(
    '{"title":"NumberAnimation 数字动画","description":"","frontmatter":{},"headers":[],"relativePath":"directives/increase/index.md","filePath":"directives/increase/index.md"}',
  ),
  h = { name: 'directives/increase/index.md' },
  _ = Object.assign(h, {
    setup(U) {
      return (J, e) => {
        const c = T('ClientOnly')
        return (
          r(),
          s('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'numberanimation-数字动画', tabindex: '-1' },
                [
                  a('NumberAnimation 数字动画 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#numberanimation-数字动画',
                      'aria-label': 'Permalink to "NumberAnimation 数字动画"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = t(
                'h2',
                { id: '基本用法', tabindex: '-1' },
                [
                  a('基本用法 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基本用法',
                      'aria-label': 'Permalink to "基本用法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[2] ||
              (e[2] = t(
                'p',
                null,
                '你可以在组件内通过v-increase属性，让元素获得数字动画。',
                -1,
              )),
            l(c, null, {
              default: i(() => [
                l(
                  n(u),
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
                    vueCode: n(p),
                  },
                  { vue: i(() => [l(N)]), _: 1 },
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
export { B as __pageData, _ as default }
