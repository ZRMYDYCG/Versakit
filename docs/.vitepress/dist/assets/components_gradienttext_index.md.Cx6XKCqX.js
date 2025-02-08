import { w as n, V as c } from './chunks/theme.DSVdNaqk.js'
import {
  o as u,
  c as T,
  G as t,
  w as l,
  a,
  k as r,
  F as U,
  p as x,
  j as d,
  aq as J,
  B as f,
} from './chunks/framework.Z42t_U4q.js'
import { Q as p } from './chunks/index.DEUECMle.js'
const V = `<template>\r
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
  h = {
    __name: 'color',
    setup(m) {
      return (s, e) => (
        u(),
        T(
          U,
          null,
          [
            t(
              r(n),
              {
                gradient: {
                  rotate: 244,
                  start: '#de344f 0%',
                  end: '#68dada 100%',
                },
              },
              { default: l(() => e[0] || (e[0] = [a(' 自定义颜色 ')])), _: 1 },
            ),
            t(
              r(n),
              {
                gradient: {
                  rotate: 244,
                  start: '#4774cf99 0%',
                  end: '#68dada 100%',
                },
              },
              { default: l(() => e[1] || (e[1] = [a(' Hello World ')])), _: 1 },
            ),
            t(
              r(n),
              {
                gradient: {
                  rotate: 244,
                  start: '#a299ff 0%',
                  end: '#11fdd 100%',
                },
              },
              { default: l(() => e[2] || (e[2] = [a(' 你好，世界 ')])), _: 1 },
            ),
          ],
          64,
        )
      )
    },
  },
  g = `<template>\r
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
  G = {
    __name: 'size',
    setup(m) {
      const s = x('md'),
        e = [
          { label: 'XS', value: 'xs' },
          { label: 'SM', value: 'sm' },
          { label: 'MD', value: 'md' },
          { label: 'LG', value: 'lg' },
        ]
      return (o, i) => (
        u(),
        T(
          U,
          null,
          [
            t(
              r(c),
              {
                modelValue: s.value,
                'onUpdate:modelValue': i[0] || (i[0] = (b) => (s.value = b)),
                options: e,
              },
              null,
              8,
              ['modelValue'],
            ),
            t(
              r(n),
              { size: s.value, type: 'success' },
              { default: l(() => i[1] || (i[1] = [a(' 哈哈哈哈 ')])), _: 1 },
              8,
              ['size'],
            ),
            t(
              r(n),
              { size: 24, type: 'error' },
              { default: l(() => i[2] || (i[2] = [a('哈哈哈哈')])), _: 1 },
            ),
          ],
          64,
        )
      )
    },
  },
  v = `<template>\r
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
  D = {
    __name: 'base',
    setup(m) {
      return (s, e) => (
        u(),
        T(
          U,
          null,
          [
            t(
              r(n),
              { type: 'error' },
              { default: l(() => e[0] || (e[0] = [a('炸了')])), _: 1 },
            ),
            t(
              r(n),
              { type: 'info' },
              { default: l(() => e[1] || (e[1] = [a('炸了')])), _: 1 },
            ),
            t(
              r(n),
              { type: 'warning' },
              { default: l(() => e[2] || (e[2] = [a('炸了')])), _: 1 },
            ),
            t(
              r(n),
              { type: 'success' },
              { default: l(() => e[3] || (e[3] = [a('炸了')])), _: 1 },
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
  k = { name: 'components/gradienttext/index.md' },
  C = Object.assign(k, {
    setup(m) {
      return (s, e) => {
        const o = f('ClientOnly')
        return (
          u(),
          T('div', null, [
            e[0] ||
              (e[0] = d(
                'h1',
                { id: 'gradienttext-渐变文字', tabindex: '-1' },
                [
                  a('GradientText 渐变文字 '),
                  d(
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
            e[1] || (e[1] = d('p', null, '用于展示渐变色的文字。', -1)),
            e[2] ||
              (e[2] = d(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  a('基础用法 '),
                  d(
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
            e[3] || (e[3] = d('p', null, '它有不同的类型。', -1)),
            t(o, null, {
              default: l(() => [
                t(
                  r(p),
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
                    vueCode: r(v),
                  },
                  { vue: l(() => [t(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[4] ||
              (e[4] = d(
                'h2',
                { id: '尺寸', tabindex: '-1' },
                [
                  a('尺寸 '),
                  d(
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
              (e[5] = d('p', null, '它可以自定义数值，也可以写规定尺寸。', -1)),
            t(o, null, {
              default: l(() => [
                t(
                  r(p),
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
                  { vue: l(() => [t(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[6] ||
              (e[6] = d(
                'h2',
                { id: '自定义颜色', tabindex: '-1' },
                [
                  a('自定义颜色 '),
                  d(
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
            e[7] || (e[7] = d('p', null, '靠你的天马行空。', -1)),
            t(o, null, {
              default: l(() => [
                t(
                  r(p),
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
                  { vue: l(() => [t(h)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[8] ||
              (e[8] = J(
                '<h2 id="gradienttext-api" tabindex="-1">GradientText API <a class="header-anchor" href="#gradienttext-api" aria-label="Permalink to &quot;GradientText API&quot;">​</a></h2><h3 id="gradienttext-属性" tabindex="-1">GradientText 属性 <a class="header-anchor" href="#gradienttext-属性" aria-label="Permalink to &quot;GradientText 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>渐变文字的类型</td><td><code>string</code></td><td>primary</td></tr><tr><td><code>size</code></td><td>文字大小（当不指定单位时，默认单位: <code>px</code>）</td><td><code>number</code> <code>string</code></td><td>undefined</td></tr><tr><td><code>gradient</code></td><td>自定义渐变色</td><td><code>object</code></td><td>undefined</td></tr></tbody></table><h3 id="gradienttext-插槽" tabindex="-1">GradientText 插槽 <a class="header-anchor" href="#gradienttext-插槽" aria-label="Permalink to &quot;GradientText 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>default</code></td><td>渐变文字的内容</td></tr></tbody></table>',
                5,
              )),
          ])
        )
      }
    },
  })
export { R as __pageData, C as default }
