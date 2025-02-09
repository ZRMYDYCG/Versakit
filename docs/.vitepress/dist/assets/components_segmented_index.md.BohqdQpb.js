import { h as d } from './chunks/theme.B5pwRwa9.js'
import {
  d as g,
  p as u,
  o as p,
  c as v,
  G as a,
  k as o,
  j as l,
  t as i,
  a as c,
  w as m,
  B as T,
} from './chunks/framework.Z42t_U4q.js'
import { Q as V } from './chunks/index.DEUECMle.js'
const b = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerSegmented } from '@versakit/ui'\r
\r
const selectedValue = ref('苹果')\r
const options = [\r
  { label: '苹果', value: '苹果' },\r
  { label: '芒果', value: '芒果' },\r
  { label: '西瓜', value: '西瓜' },\r
]\r
\r
const selectedValue2 = ref('苹果1')\r
const options2 = [\r
  { label: '苹果1', value: '苹果1' },\r
  { label: '芒果1', value: '芒果1' },\r
  { label: '西瓜1', value: '西瓜1' },\r
]\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>\r
\r
    <p class="selected-value">选择值: {{ selectedValue }}</p>\r
\r
    <VerSegmented v-model="selectedValue2" :options="options2"></VerSegmented>\r
\r
    <p class="selected-value">选择值: {{ selectedValue2 }}</p>\r
  </div>\r
</template>\r
`,
  f = { class: 'selected-value' },
  h = { class: 'selected-value' },
  _ = g({
    __name: 'base',
    setup(J) {
      const n = u('苹果'),
        e = [
          { label: '苹果', value: '苹果' },
          { label: '芒果', value: '芒果' },
          { label: '西瓜', value: '西瓜' },
        ],
        t = u('苹果1'),
        U = [
          { label: '苹果1', value: '苹果1' },
          { label: '芒果1', value: '芒果1' },
          { label: '西瓜1', value: '西瓜1' },
        ]
      return (x, s) => (
        p(),
        v('div', null, [
          a(
            o(d),
            {
              modelValue: n.value,
              'onUpdate:modelValue': s[0] || (s[0] = (r) => (n.value = r)),
              options: e,
            },
            null,
            8,
            ['modelValue'],
          ),
          l('p', f, '选择值: ' + i(n.value), 1),
          a(
            o(d),
            {
              modelValue: t.value,
              'onUpdate:modelValue': s[1] || (s[1] = (r) => (t.value = r)),
              options: U,
            },
            null,
            8,
            ['modelValue'],
          ),
          l('p', h, '选择值: ' + i(t.value), 1),
        ])
      )
    },
  }),
  k = JSON.parse(
    '{"title":"Segmented 分段控制器","description":"","frontmatter":{},"headers":[],"relativePath":"components/segmented/index.md","filePath":"components/segmented/index.md"}',
  ),
  B = { name: 'components/segmented/index.md' },
  O = Object.assign(B, {
    setup(J) {
      return (n, e) => {
        const t = T('ClientOnly')
        return (
          p(),
          v('div', null, [
            e[0] ||
              (e[0] = l(
                'h1',
                { id: 'segmented-分段控制器', tabindex: '-1' },
                [
                  c('Segmented 分段控制器 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#segmented-分段控制器',
                      'aria-label': 'Permalink to "Segmented 分段控制器"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = l(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  c('基本使用 '),
                  l(
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
            a(t, null, {
              default: m(() => [
                a(
                  o(V),
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
                    vueCode: o(b),
                  },
                  { vue: m(() => [a(_)]), _: 1 },
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
export { k as __pageData, O as default }
