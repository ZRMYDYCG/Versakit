import {
  _ as J,
  ar as T,
  a8 as m,
  o as i,
  c as s,
  j as l,
  a,
  G as t,
  w as n,
  k as r,
  B as d,
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
  O = {}
function v(c, U) {
  const e = T('increase')
  return m((i(), s('div', null, null, 512)), [[e, 100]])
}
const Q = J(O, [['render', v]]),
  h = JSON.parse(
    '{"title":"NumberAnimation 数字动画","description":"","frontmatter":{},"headers":[],"relativePath":"directives/increase/index.md","filePath":"directives/increase/index.md"}',
  ),
  N = { name: 'directives/increase/index.md' },
  k = Object.assign(N, {
    setup(c) {
      return (U, e) => {
        const o = d('ClientOnly')
        return (
          i(),
          s('div', null, [
            e[0] ||
              (e[0] = l(
                'h1',
                { id: 'numberanimation-数字动画', tabindex: '-1' },
                [
                  a('NumberAnimation 数字动画 '),
                  l(
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
              (e[1] = l(
                'h2',
                { id: '基本用法', tabindex: '-1' },
                [
                  a('基本用法 '),
                  l(
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
              (e[2] = l(
                'p',
                null,
                '你可以在组件内通过v-increase属性，让元素获得数字动画。',
                -1,
              )),
            t(o, null, {
              default: n(() => [
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
                    vueCode: r(p),
                  },
                  { vue: n(() => [t(Q)]), _: 1 },
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
export { h as __pageData, k as default }
