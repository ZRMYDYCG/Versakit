import { p as a, Q as i, V as c } from './chunks/theme.DSVdNaqk.js'
import {
  d as J,
  o as d,
  b as U,
  w as n,
  G as r,
  k as e,
  _ as O,
  a8 as f,
  a as o,
  ar as k,
  p as g,
  c as V,
  F as D,
  as as R,
  aq as w,
  j as t,
  B as Q,
} from './chunks/framework.Z42t_U4q.js'
import { Q as T } from './chunks/index.DEUECMle.js'
const B = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <VerButton color="pink" circle icon="search" />\r
    <VerButton color="green" circle icon="check" />\r
    <VerButton circle icon="trash" />\r
  </ver-row>\r
</template>\r
<style scoped>\r
.ver-btn {\r
  margin: 0.5rem;\r
}\r
</style>\r
`,
  E = J({
    __name: 'icon',
    setup(v) {
      return (s, l) => (
        d(),
        U(e(i), null, {
          default: n(() => [
            r(e(a), { color: 'pink', circle: '', icon: 'search' }),
            r(e(a), { color: 'green', circle: '', icon: 'check' }),
            r(e(a), { circle: '', icon: 'trash' }),
          ]),
          _: 1,
        })
      )
    },
  }),
  N = O(E, [['__scopeId', 'data-v-89473ca0']]),
  C = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button v-ripple color="blue-1">按 钮</ver-button>\r
    <ver-button v-ripple color="blue-2">按 钮</ver-button>\r
    <ver-button v-ripple color="blue-3">按 钮</ver-button>\r
    <ver-button v-ripple color="blue-4">按 钮</ver-button>\r
    <ver-button v-ripple color="blue-5">按 钮</ver-button>\r
  </ver-row>\r
</template>\r
\r
<style scoped lang="scss">\r
.mb-4 {\r
  display: flex;\r
  justify-content: space-between;\r
  margin-bottom: 1rem;\r
}\r
\r
.ver-btn + .ver-btn {\r
  margin: 0px 6px;\r
}\r
</style>\r
`,
  x = J({
    __name: 'ripple',
    setup(v) {
      return (s, l) => {
        const u = k('ripple')
        return (
          d(),
          U(
            e(i),
            { class: 'mb-4' },
            {
              default: n(() => [
                f(
                  (d(),
                  U(
                    e(a),
                    { color: 'blue-1' },
                    { default: n(() => l[0] || (l[0] = [o('按 钮')])), _: 1 },
                  )),
                  [[u]],
                ),
                f(
                  (d(),
                  U(
                    e(a),
                    { color: 'blue-2' },
                    { default: n(() => l[1] || (l[1] = [o('按 钮')])), _: 1 },
                  )),
                  [[u]],
                ),
                f(
                  (d(),
                  U(
                    e(a),
                    { color: 'blue-3' },
                    { default: n(() => l[2] || (l[2] = [o('按 钮')])), _: 1 },
                  )),
                  [[u]],
                ),
                f(
                  (d(),
                  U(
                    e(a),
                    { color: 'blue-4' },
                    { default: n(() => l[3] || (l[3] = [o('按 钮')])), _: 1 },
                  )),
                  [[u]],
                ),
                f(
                  (d(),
                  U(
                    e(a),
                    { color: 'blue-5' },
                    { default: n(() => l[4] || (l[4] = [o('按 钮')])), _: 1 },
                  )),
                  [[u]],
                ),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  F = O(x, [['__scopeId', 'data-v-33ea882f']]),
  S = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerButton, VerSegmented } from '@versakit/ui'\r
\r
const selectedValue = ref('md')\r
const options = [\r
  { label: 'XS', value: 'xs' },\r
  { label: 'SM', value: 'sm' },\r
  { label: 'MD', value: 'md' },\r
  { label: 'LG', value: 'lg' },\r
]\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>\r
\r
    <ver-button class="mx-2" color="blue-5" :size="selectedValue">\r
      主要按钮\r
    </ver-button>\r
  </div>\r
</template>\r
\r
<style scoped>\r
.ver-btn {\r
  margin: 10px 0px;\r
}\r
</style>\r
`,
  Y = J({
    __name: 'size',
    setup(v) {
      const s = g('md'),
        l = [
          { label: 'XS', value: 'xs' },
          { label: 'SM', value: 'sm' },
          { label: 'MD', value: 'md' },
          { label: 'LG', value: 'lg' },
        ]
      return (u, b) => (
        d(),
        V('div', null, [
          r(
            e(c),
            {
              modelValue: s.value,
              'onUpdate:modelValue': b[0] || (b[0] = (y) => (s.value = y)),
              options: l,
            },
            null,
            8,
            ['modelValue'],
          ),
          r(
            e(a),
            { class: 'mx-2', color: 'blue-5', size: s.value },
            { default: n(() => b[1] || (b[1] = [o(' 主要按钮 ')])), _: 1 },
            8,
            ['size'],
          ),
        ])
      )
    },
  }),
  L = O(Y, [['__scopeId', 'data-v-98ba07b5']]),
  A = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button disabled color="red-5">按 钮</ver-button>\r
    <ver-button disabled variant="plain round" color="red-1">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled color="blue-5">按 钮</ver-button>\r
    <ver-button disabled variant="plain round" color="blue-1">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled color="green-5">按 钮</ver-button>\r
    <ver-button disabled variant="plain round" color="green-1">\r
      按 钮\r
    </ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled color="zinc-5">按 钮</ver-button>\r
    <ver-button disabled variant="plain round" color="zinc-1">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled color="violet-5">按 钮</ver-button>\r
    <ver-button disabled variant="plain round" color="violet-1">\r
      按 钮\r
    </ver-button>\r
  </ver-row>\r
</template>\r
\r
<style scoped>\r
.mb-4 {\r
  display: flex;\r
  align-items: center;\r
  margin-bottom: 1rem;\r
}\r
\r
.ver-btn + .ver-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  W = J({
    __name: 'disabled',
    setup(v) {
      return (s, l) => (
        d(),
        V(
          D,
          null,
          [
            r(
              e(i),
              { class: 'mb-4' },
              {
                default: n(() => [
                  r(
                    e(a),
                    { disabled: '', color: 'red-5' },
                    { default: n(() => l[0] || (l[0] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { disabled: '', variant: 'plain round', color: 'red-1' },
                    { default: n(() => l[1] || (l[1] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            r(
              e(i),
              { class: 'mb-4' },
              {
                default: n(() => [
                  r(
                    e(a),
                    { disabled: '', color: 'blue-5' },
                    { default: n(() => l[2] || (l[2] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { disabled: '', variant: 'plain round', color: 'blue-1' },
                    { default: n(() => l[3] || (l[3] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            r(
              e(i),
              { class: 'mb-4' },
              {
                default: n(() => [
                  r(
                    e(a),
                    { disabled: '', color: 'green-5' },
                    { default: n(() => l[4] || (l[4] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { disabled: '', variant: 'plain round', color: 'green-1' },
                    { default: n(() => l[5] || (l[5] = [o(' 按 钮 ')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            r(
              e(i),
              { class: 'mb-4' },
              {
                default: n(() => [
                  r(
                    e(a),
                    { disabled: '', color: 'zinc-5' },
                    { default: n(() => l[6] || (l[6] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { disabled: '', variant: 'plain round', color: 'zinc-1' },
                    { default: n(() => l[7] || (l[7] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            r(
              e(i),
              { class: 'mb-4' },
              {
                default: n(() => [
                  r(
                    e(a),
                    { disabled: '', color: 'violet-5' },
                    { default: n(() => l[8] || (l[8] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { disabled: '', variant: 'plain round', color: 'violet-1' },
                    { default: n(() => l[9] || (l[9] = [o(' 按 钮 ')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  }),
  z = O(W, [['__scopeId', 'data-v-e861c951']]),
  G = `<template>\r
  <div>\r
    <VerSegmented v-model="typeValue" :options="typeOptions" />\r
    <VerSegmented v-model="variantValue" :options="variantOptions" />\r
\r
    <ver-button :type="typeValue" :variant="variantValue">按 钮</ver-button>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
import { VerButton, VerSegmented } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
let typeValue = ref('primary')\r
let variantValue = ref('plain')\r
\r
let typeOptions = [\r
  { label: 'primary', value: 'primary' },\r
  { label: 'success', value: 'success' },\r
  { label: 'error', value: 'error' },\r
  { label: 'warn', value: 'warn' },\r
  { label: 'info', value: 'info' },\r
]\r
\r
let variantOptions = [\r
  { label: 'ghost', value: 'ghost' },\r
  { label: 'round', value: 'round' },\r
  { label: 'text', value: 'text' },\r
  { label: 'shade', value: 'shade' },\r
  { label: 'full', value: 'full' },\r
]\r
<\/script>\r
<style scoped></style>\r
`,
  Z = J({
    __name: 'style',
    setup(v) {
      let s = g('primary'),
        l = g('plain'),
        u = [
          { label: 'primary', value: 'primary' },
          { label: 'success', value: 'success' },
          { label: 'error', value: 'error' },
          { label: 'warn', value: 'warn' },
          { label: 'info', value: 'info' },
        ],
        b = [
          { label: 'ghost', value: 'ghost' },
          { label: 'round', value: 'round' },
          { label: 'text', value: 'text' },
          { label: 'shade', value: 'shade' },
          { label: 'full', value: 'full' },
        ]
      return (y, p) => (
        d(),
        V('div', null, [
          r(
            e(c),
            {
              modelValue: e(s),
              'onUpdate:modelValue':
                p[0] || (p[0] = (m) => (R(s) ? (s.value = m) : (s = m))),
              options: e(u),
            },
            null,
            8,
            ['modelValue', 'options'],
          ),
          r(
            e(c),
            {
              modelValue: e(l),
              'onUpdate:modelValue':
                p[1] || (p[1] = (m) => (R(l) ? (l.value = m) : (l = m))),
              options: e(b),
            },
            null,
            8,
            ['modelValue', 'options'],
          ),
          r(
            e(a),
            { type: e(s), variant: e(l) },
            { default: n(() => p[2] || (p[2] = [o('按 钮')])), _: 1 },
            8,
            ['type', 'variant'],
          ),
        ])
      )
    },
  }),
  h = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button type="primary">按 钮</ver-button>\r
    <ver-button variant="round" type="primary">按 钮</ver-button>\r
    <ver-button variant="ghost" type="primary">按 钮</ver-button>\r
    <ver-button variant="ghost round" type="primary">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="error">按 钮</ver-button>\r
    <ver-button variant="round" type="error">按 钮</ver-button>\r
    <ver-button variant="ghost" type="error">按 钮</ver-button>\r
    <ver-button variant="ghost round" type="error">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="success">按 钮</ver-button>\r
    <ver-button variant="round" type="success">按 钮</ver-button>\r
\r
    <ver-button variant="ghost" type="success">按 钮</ver-button>\r
    <ver-button variant="ghost round" type="success">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="info">按 钮</ver-button>\r
    <ver-button variant="round" type="info">按 钮</ver-button>\r
    <ver-button variant="ghost" type="info">按 钮</ver-button>\r
    <ver-button variant="ghost round" type="info">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="warn">按 钮</ver-button>\r
    <ver-button variant="round" type="warn">按 钮</ver-button>\r
    <ver-button variant="ghost" type="warn">按 钮</ver-button>\r
    <ver-button variant="ghost round" type="warn">按 钮</ver-button>\r
  </ver-row>\r
</template>\r
\r
<style scoped lang="scss">\r
.mb-4 {\r
  display: flex;\r
  justify-content: space-between;\r
  margin-bottom: 1rem;\r
}\r
\r
.ver-btn + .ver-btn {\r
  margin: 0px 6px;\r
}\r
</style>\r
`,
  j = J({
    __name: 'base',
    setup(v) {
      return (s, l) => (
        d(),
        V(
          D,
          null,
          [
            r(
              e(i),
              { class: 'mb-4' },
              {
                default: n(() => [
                  r(
                    e(a),
                    { type: 'primary' },
                    { default: n(() => l[0] || (l[0] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'round', type: 'primary' },
                    { default: n(() => l[1] || (l[1] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'ghost', type: 'primary' },
                    { default: n(() => l[2] || (l[2] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'ghost round', type: 'primary' },
                    { default: n(() => l[3] || (l[3] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            r(
              e(i),
              { class: 'mb-4' },
              {
                default: n(() => [
                  r(
                    e(a),
                    { type: 'error' },
                    { default: n(() => l[4] || (l[4] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'round', type: 'error' },
                    { default: n(() => l[5] || (l[5] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'ghost', type: 'error' },
                    { default: n(() => l[6] || (l[6] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'ghost round', type: 'error' },
                    { default: n(() => l[7] || (l[7] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            r(
              e(i),
              { class: 'mb-4' },
              {
                default: n(() => [
                  r(
                    e(a),
                    { type: 'success' },
                    { default: n(() => l[8] || (l[8] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'round', type: 'success' },
                    { default: n(() => l[9] || (l[9] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'ghost', type: 'success' },
                    { default: n(() => l[10] || (l[10] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'ghost round', type: 'success' },
                    { default: n(() => l[11] || (l[11] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            r(
              e(i),
              { class: 'mb-4' },
              {
                default: n(() => [
                  r(
                    e(a),
                    { type: 'info' },
                    { default: n(() => l[12] || (l[12] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'round', type: 'info' },
                    { default: n(() => l[13] || (l[13] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'ghost', type: 'info' },
                    { default: n(() => l[14] || (l[14] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'ghost round', type: 'info' },
                    { default: n(() => l[15] || (l[15] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            r(
              e(i),
              { class: 'mb-4' },
              {
                default: n(() => [
                  r(
                    e(a),
                    { type: 'warn' },
                    { default: n(() => l[16] || (l[16] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'round', type: 'warn' },
                    { default: n(() => l[17] || (l[17] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'ghost', type: 'warn' },
                    { default: n(() => l[18] || (l[18] = [o('按 钮')])), _: 1 },
                  ),
                  r(
                    e(a),
                    { variant: 'ghost round', type: 'warn' },
                    { default: n(() => l[19] || (l[19] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  }),
  M = O(j, [['__scopeId', 'data-v-678a4f3e']]),
  I = { tabindex: '0' },
  P = JSON.parse(
    '{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}',
  ),
  X = { name: 'components/button/index.md' },
  $ = Object.assign(X, {
    setup(v) {
      return (s, l) => {
        const u = Q('ClientOnly'),
          b = Q('Tool')
        return (
          d(),
          V('div', null, [
            l[15] ||
              (l[15] = w(
                '<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><p>在日常开发中比较常用的操作按钮。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>versakitUI 提供了一些基础样式来使用，我们可以通过 <code>type</code>、<code>plain</code>、<code>round</code> 来修改按钮的圆角，颜色和是否透明等属性。</p>',
                4,
              )),
            r(u, null, {
              default: n(() => [
                r(
                  e(T),
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
                    vueCode: e(h),
                  },
                  { vue: n(() => [r(M)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[16] ||
              (l[16] = t(
                'h2',
                { id: '按钮风格', tabindex: '-1' },
                [
                  o('按钮风格 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#按钮风格',
                      'aria-label': 'Permalink to "按钮风格"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[17] ||
              (l[17] = t(
                'p',
                null,
                [
                  o('使用 '),
                  t('code', null, 'style'),
                  o(' 和 '),
                  t('code', null, 'variant'),
                  o(' 属性来改变按钮的视觉风格。'),
                ],
                -1,
              )),
            r(u, null, {
              default: n(() => [
                r(
                  e(T),
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
                    vueCode: e(G),
                  },
                  { vue: n(() => [r(Z)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[18] ||
              (l[18] = t(
                'h2',
                { id: '禁止状态', tabindex: '-1' },
                [
                  o('禁止状态 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#禁止状态',
                      'aria-label': 'Permalink to "禁止状态"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[19] ||
              (l[19] = t(
                'p',
                null,
                [
                  o('您可以使用 '),
                  t('code', null, 'disabled'),
                  o(' 属性来定义按钮是否被禁用，该属性接受一个 '),
                  t('code', null, 'Boolean'),
                  o(' 类型的值。'),
                ],
                -1,
              )),
            r(u, null, {
              default: n(() => [
                r(
                  e(T),
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
                    vueCode: e(A),
                  },
                  { vue: n(() => [r(z)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[20] ||
              (l[20] = t(
                'h2',
                { id: '按钮大小', tabindex: '-1' },
                [
                  o('按钮大小 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#按钮大小',
                      'aria-label': 'Permalink to "按钮大小"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[21] ||
              (l[21] = t(
                'p',
                null,
                [
                  o('我们可以通过调整 '),
                  t('code', null, 'size'),
                  o(' 属性来控制按钮大小。'),
                ],
                -1,
              )),
            r(u, null, {
              default: n(() => [
                r(
                  e(T),
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
                    vueCode: e(S),
                  },
                  { vue: n(() => [r(L)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[22] ||
              (l[22] = t(
                'h2',
                { id: '水波纹按钮', tabindex: '-1' },
                [
                  o('水波纹按钮 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#水波纹按钮',
                      'aria-label': 'Permalink to "水波纹按钮"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[23] || (l[23] = t('p', null, '按钮可以结合水波纹一起使用。', -1)),
            r(u, null, {
              default: n(() => [
                r(
                  e(T),
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
                    vueCode: e(C),
                  },
                  { vue: n(() => [r(F)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[24] ||
              (l[24] = t(
                'h2',
                { id: '图标按钮', tabindex: '-1' },
                [
                  o('图标按钮 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#图标按钮',
                      'aria-label': 'Permalink to "图标按钮"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[25] ||
              (l[25] = t(
                'p',
                null,
                [
                  o('使用 '),
                  t('code', null, 'icon'),
                  o(' 属性来设置按钮的图标样式，您可以在我们的 '),
                  t('code', null, 'Icon'),
                  o(' 组件中找到所需图标。'),
                ],
                -1,
              )),
            r(u, null, {
              default: n(() => [
                r(
                  e(T),
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
                    vueCode: e(B),
                  },
                  { vue: n(() => [r(N)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[26] ||
              (l[26] = t(
                'h2',
                { id: 'button-api', tabindex: '-1' },
                [
                  o('Button API '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#button-api',
                      'aria-label': 'Permalink to "Button API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[27] ||
              (l[27] = t(
                'h3',
                { id: 'button-属性', tabindex: '-1' },
                [
                  o('Button 属性 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#button-属性',
                      'aria-label': 'Permalink to "Button 属性"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t('table', I, [
              l[14] ||
                (l[14] = t(
                  'thead',
                  null,
                  [
                    t('tr', null, [
                      t('th', null, '属性'),
                      t('th', null, '说明'),
                      t('th', null, '类型'),
                      t('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              t('tbody', null, [
                t('tr', null, [
                  l[1] || (l[1] = t('td', null, [t('code', null, 'type')], -1)),
                  l[2] ||
                    (l[2] = t(
                      'td',
                      null,
                      [
                        o('按钮的类型，例如可以是 '),
                        t('code', null, 'primary'),
                        o('（主要按钮）、'),
                        t('code', null, 'success'),
                        o('（成功按钮）等不同分类来表示不同状态的样式风格'),
                      ],
                      -1,
                    )),
                  t('td', null, [
                    l[0] || (l[0] = t('code', null, 'enum', -1)),
                    r(b, { value: 'primary,info,warning,error' }),
                  ]),
                  l[3] || (l[3] = t('td', null, 'default', -1)),
                ]),
                l[4] ||
                  (l[4] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'plain')]),
                      t(
                        'td',
                        null,
                        '用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现',
                      ),
                      t('td', null, [t('code', null, 'boolean')]),
                      t('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[5] ||
                  (l[5] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'round')]),
                      t('td', null, '判断按钮是否呈现圆角的外观效果'),
                      t('td', null, [t('code', null, 'boolean')]),
                      t('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[6] ||
                  (l[6] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'disabled')]),
                      t(
                        'td',
                        null,
                        '确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现',
                      ),
                      t('td', null, [t('code', null, 'boolean')]),
                      t('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[7] ||
                  (l[7] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'ghost')]),
                      t('td', null, '是否为ghost'),
                      t('td', null, [t('code', null, 'boolean')]),
                      t('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[8] ||
                  (l[8] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'text')]),
                      t('td', null, '是否为文本按钮'),
                      t('td', null, [t('code', null, 'boolean')]),
                      t('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[9] ||
                  (l[9] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'circle')]),
                      t('td', null, '是否为圆角按钮'),
                      t('td', null, [t('code', null, 'boolean')]),
                      t('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[10] ||
                  (l[10] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'shade')]),
                      t('td', null, '是否是阴影按钮'),
                      t('td', null, [t('code', null, 'boolean')]),
                      t('td', null, 'false'),
                    ],
                    -1,
                  )),
                l[11] ||
                  (l[11] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'color')]),
                      t('td', null, '自定义颜色按钮'),
                      t('td', null, [t('code', null, 'string')]),
                      t('td', null, '-'),
                    ],
                    -1,
                  )),
                l[12] ||
                  (l[12] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'icon')]),
                      t('td', null, '自定义图标按钮'),
                      t('td', null, [t('code', null, 'string')]),
                      t('td', null, '-'),
                    ],
                    -1,
                  )),
                l[13] ||
                  (l[13] = t(
                    'tr',
                    null,
                    [
                      t('td', null, [t('code', null, 'size')]),
                      t('td', null, '自定义按钮大小'),
                      t('td', null, [t('code', null, 'string')]),
                      t('td', null, 'default'),
                    ],
                    -1,
                  )),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { P as __pageData, $ as default }
