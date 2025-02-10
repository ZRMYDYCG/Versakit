import { m as s, y as m } from './chunks/theme.BxWFLTKc.js'
import {
  d,
  p as U,
  o as u,
  c as p,
  G as e,
  k as r,
  j as n,
  _ as v,
  w as a,
  a as i,
  B as g,
} from './chunks/framework.Z42t_U4q.js'
import { Q as J } from './chunks/index.DEUECMle.js'
const O = `<template>\r
  <div>\r
    <VerProgress :animation="true" :percent />\r
\r
    <div>\r
      <VerProgress :animation="true" type="circle" :percent />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerProgress } from '@versakit/ui'\r
\r
const percent = ref(0)\r
\r
setInterval(() => {\r
  percent.value = percent.value >= 100 ? 0 : percent.value + 10\r
}, 1000)\r
<\/script>\r
`,
  f = d({
    __name: 'animation',
    setup(T) {
      const t = U(0)
      return (
        setInterval(() => {
          t.value = t.value >= 100 ? 0 : t.value + 10
        }, 1e3),
        (l, o) => (
          u(),
          p('div', null, [
            e(r(s), { animation: !0, percent: t.value }, null, 8, ['percent']),
            n('div', null, [
              e(
                r(s),
                { animation: !0, type: 'circle', percent: t.value },
                null,
                8,
                ['percent'],
              ),
            ]),
          ])
        )
      )
    },
  }),
  V = `<template>\r
  <div>\r
    <VerProgress type="circle" :percent />\r
    <VerProgress type="circle" :percent status="success" />\r
    <VerProgress type="circle" :percent status="error" />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerProgress } from '@versakit/ui'\r
\r
const percent = ref(75)\r
<\/script>\r
\r
<style scoped>\r
.progress {\r
  margin: 20px;\r
}\r
</style>\r
`,
  R = d({
    __name: 'circle',
    setup(T) {
      const t = U(75)
      return (l, o) => (
        u(),
        p('div', null, [
          e(r(s), { type: 'circle', percent: t.value }, null, 8, ['percent']),
          e(
            r(s),
            { type: 'circle', percent: t.value, status: 'success' },
            null,
            8,
            ['percent'],
          ),
          e(
            r(s),
            { type: 'circle', percent: t.value, status: 'error' },
            null,
            8,
            ['percent'],
          ),
        ])
      )
    },
  }),
  Q = v(R, [['__scopeId', 'data-v-6da9d0bd']]),
  b = `<template>\r
  <div>\r
    <VerProgress :percent />\r
    <VerProgress :percent status="success" />\r
    <VerProgress :percent status="error" />\r
\r
    <div\r
      style="\r
        display: flex;\r
        justify-content: center;\r
        align-items: center;\r
        flex-direction: column;\r
      "\r
    >\r
      <VerProgress :percent="value" />\r
      <div style="display: flex; justify-content: space-around">\r
        <VerButton @click="value++" type="success">+</VerButton>\r
        <VerButton @click="value--" type="error">-</VerButton>\r
      </div>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerProgress, VerButton } from '@versakit/ui'\r
\r
const percent = ref(75)\r
const value = ref(0)\r
<\/script>\r
\r
<style scoped>\r
.progress {\r
  margin: 20px;\r
}\r
</style>\r
`,
  D = {
    style: {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'flex-direction': 'column',
    },
  },
  k = { style: { display: 'flex', 'justify-content': 'space-around' } },
  B = d({
    __name: 'base',
    setup(T) {
      const t = U(75),
        l = U(0)
      return (o, c) => (
        u(),
        p('div', null, [
          e(r(s), { percent: t.value }, null, 8, ['percent']),
          e(r(s), { percent: t.value, status: 'success' }, null, 8, [
            'percent',
          ]),
          e(r(s), { percent: t.value, status: 'error' }, null, 8, ['percent']),
          n('div', D, [
            e(r(s), { percent: l.value }, null, 8, ['percent']),
            n('div', k, [
              e(
                r(m),
                { onClick: c[0] || (c[0] = (y) => l.value++), type: 'success' },
                { default: a(() => c[2] || (c[2] = [i('+')])), _: 1 },
              ),
              e(
                r(m),
                { onClick: c[1] || (c[1] = (y) => l.value--), type: 'error' },
                { default: a(() => c[3] || (c[3] = [i('-')])), _: 1 },
              ),
            ]),
          ]),
        ])
      )
    },
  }),
  E = v(B, [['__scopeId', 'data-v-cf2d8b16']]),
  Y = JSON.parse(
    '{"title":"Progress 进度条","description":"","frontmatter":{},"headers":[],"relativePath":"components/progress/index.md","filePath":"components/progress/index.md"}',
  ),
  h = { name: 'components/progress/index.md' },
  w = Object.assign(h, {
    setup(T) {
      return (t, l) => {
        const o = g('ClientOnly')
        return (
          u(),
          p('div', null, [
            l[0] ||
              (l[0] = n(
                'h1',
                { id: 'progress-进度条', tabindex: '-1' },
                [
                  i('Progress 进度条 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#progress-进度条',
                      'aria-label': 'Permalink to "Progress 进度条"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[1] ||
              (l[1] = n(
                'p',
                null,
                '用于展示操作进度，告知用户当前状态和预期。',
                -1,
              )),
            l[2] ||
              (l[2] = n(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  i('基本使用 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基本使用',
                      'aria-label': 'Permalink to "基本使用"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e(o, null, {
              default: a(() => [
                e(
                  r(J),
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
                  { vue: a(() => [e(E)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[3] ||
              (l[3] = n(
                'h2',
                { id: '环形进度条', tabindex: '-1' },
                [
                  i('环形进度条 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#环形进度条',
                      'aria-label': 'Permalink to "环形进度条"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e(o, null, {
              default: a(() => [
                e(
                  r(J),
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
                  { vue: a(() => [e(Q)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[4] ||
              (l[4] = n(
                'h2',
                { id: '动画', tabindex: '-1' },
                [
                  i('动画 '),
                  n(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#动画',
                      'aria-label': 'Permalink to "动画"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e(o, null, {
              default: a(() => [
                e(
                  r(J),
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
                    vueCode: r(O),
                  },
                  { vue: a(() => [e(f)]), _: 1 },
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
export { Y as __pageData, w as default }
