import { j as d, h as c } from './chunks/theme.BxWFLTKc.js'
import {
  o as J,
  c as u,
  G as t,
  w as a,
  a as l,
  k as r,
  F as p,
  p as x,
  j as n,
  aq as g,
  B as f,
} from './chunks/framework.Z42t_U4q.js'
import { Q as T } from './chunks/index.DEUECMle.js'
const h = `<template>\r
  <VerGradientText\r
    :gradient="{ rotate: 244, start: '#de344f 0%', end: '#68dada 100%' }"\r
  >\r
    自定义颜色\r
  </VerGradientText>\r
  <VerGradientText\r
    :gradient="{ rotate: 244, start: '#4774cf99 0%', end: '#68dada 100%' }"\r
  >\r
    Hello World\r
  </VerGradientText>\r
  <VerGradientText\r
    :gradient="{ rotate: 244, start: '#a299ff 0%', end: '#11fdd 100%' }"\r
  >\r
    你好，世界\r
  </VerGradientText>\r
</template>\r
\r
<script setup>\r
import { VerGradientText } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped lang="scss"></style>\r
`,
  b = {
    __name: 'color',
    setup(U) {
      return (s, e) => (
        J(),
        u(
          p,
          null,
          [
            t(
              r(d),
              {
                gradient: {
                  rotate: 244,
                  start: '#de344f 0%',
                  end: '#68dada 100%',
                },
              },
              { default: a(() => e[0] || (e[0] = [l(' 自定义颜色 ')])), _: 1 },
            ),
            t(
              r(d),
              {
                gradient: {
                  rotate: 244,
                  start: '#4774cf99 0%',
                  end: '#68dada 100%',
                },
              },
              { default: a(() => e[1] || (e[1] = [l(' Hello World ')])), _: 1 },
            ),
            t(
              r(d),
              {
                gradient: {
                  rotate: 244,
                  start: '#a299ff 0%',
                  end: '#11fdd 100%',
                },
              },
              { default: a(() => e[2] || (e[2] = [l(' 你好，世界 ')])), _: 1 },
            ),
          ],
          64,
        )
      )
    },
  },
  V = `<template>\r
  <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>\r
  <VerGradientText :size="selectedValue" type="success">\r
    哈哈哈哈\r
  </VerGradientText>\r
\r
  <VerGradientText :size="24" type="error">哈哈哈哈</VerGradientText>\r
</template>\r
<script setup>\r
import { ref } from 'vue'\r
import { VerGradientText } from '@versakit/ui'\r
import { VerSegmented } from '@versakit/ui'\r
\r
const selectedValue = ref('md')\r
const options = [\r
  { label: 'XS', value: 'xs' },\r
  { label: 'SM', value: 'sm' },\r
  { label: 'MD', value: 'md' },\r
  { label: 'LG', value: 'lg' },\r
]\r
<\/script>\r
<style scoped lang="scss"></style>\r
`,
  v = {
    __name: 'size',
    setup(U) {
      const s = x('md'),
        e = [
          { label: 'XS', value: 'xs' },
          { label: 'SM', value: 'sm' },
          { label: 'MD', value: 'md' },
          { label: 'LG', value: 'lg' },
        ]
      return (o, i) => (
        J(),
        u(
          p,
          null,
          [
            t(
              r(c),
              {
                modelValue: s.value,
                'onUpdate:modelValue': i[0] || (i[0] = (m) => (s.value = m)),
                options: e,
              },
              null,
              8,
              ['modelValue'],
            ),
            t(
              r(d),
              { size: s.value, type: 'success' },
              { default: a(() => i[1] || (i[1] = [l(' 哈哈哈哈 ')])), _: 1 },
              8,
              ['size'],
            ),
            t(
              r(d),
              { size: 24, type: 'error' },
              { default: a(() => i[2] || (i[2] = [l('哈哈哈哈')])), _: 1 },
            ),
          ],
          64,
        )
      )
    },
  },
  D = `<template>\r
  <VerGradientText type="error">炸了</VerGradientText>\r
  <VerGradientText type="info">炸了</VerGradientText>\r
  <VerGradientText type="warning">炸了</VerGradientText>\r
  <VerGradientText type="success">炸了</VerGradientText>\r
</template>\r
<script setup>\r
import { VerGradientText } from '@versakit/ui'\r
<\/script>\r
<style scoped lang="scss"></style>\r
`,
  B = {
    __name: 'base',
    setup(U) {
      return (s, e) => (
        J(),
        u(
          p,
          null,
          [
            t(
              r(d),
              { type: 'error' },
              { default: a(() => e[0] || (e[0] = [l('炸了')])), _: 1 },
            ),
            t(
              r(d),
              { type: 'info' },
              { default: a(() => e[1] || (e[1] = [l('炸了')])), _: 1 },
            ),
            t(
              r(d),
              { type: 'warning' },
              { default: a(() => e[2] || (e[2] = [l('炸了')])), _: 1 },
            ),
            t(
              r(d),
              { type: 'success' },
              { default: a(() => e[3] || (e[3] = [l('炸了')])), _: 1 },
            ),
          ],
          64,
        )
      )
    },
  },
  R = JSON.parse(
    '{"title":"GradientText 渐变文字","description":"","frontmatter":{},"headers":[],"relativePath":"components/gradienttext/index.md","filePath":"components/gradienttext/index.md"}',
  ),
  G = { name: 'components/gradienttext/index.md' },
  O = Object.assign(G, {
    setup(U) {
      return (s, e) => {
        const o = f('ClientOnly')
        return (
          J(),
          u('div', null, [
            e[0] ||
              (e[0] = n(
                'h1',
                { id: 'gradienttext-渐变文字', tabindex: '-1' },
                [
                  l('GradientText 渐变文字 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#gradienttext-渐变文字',
                      'aria-label': 'Permalink to "GradientText 渐变文字"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] || (e[1] = n('p', null, '用于展示渐变色的文字。', -1)),
            e[2] ||
              (e[2] = n(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  l('基础用法 '),
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
            e[3] || (e[3] = n('p', null, '它有不同的类型。', -1)),
            t(o, null, {
              default: a(() => [
                t(
                  r(T),
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
                  { vue: a(() => [t(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[4] ||
              (e[4] = n(
                'h2',
                { id: '尺寸', tabindex: '-1' },
                [
                  l('尺寸 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#尺寸',
                      'aria-label': 'Permalink to "尺寸"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[5] ||
              (e[5] = n('p', null, '它可以自定义数值，也可以写规定尺寸。', -1)),
            t(o, null, {
              default: a(() => [
                t(
                  r(T),
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
                  { vue: a(() => [t(v)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[6] ||
              (e[6] = n(
                'h2',
                { id: '自定义颜色', tabindex: '-1' },
                [
                  l('自定义颜色 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义颜色',
                      'aria-label': 'Permalink to "自定义颜色"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[7] || (e[7] = n('p', null, '靠你的天马行空。', -1)),
            t(o, null, {
              default: a(() => [
                t(
                  r(T),
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
                  { vue: a(() => [t(b)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[8] || (e[8] = g('', 5)),
          ])
        )
      }
    },
  })
export { R as __pageData, O as default }
