import { G as d } from './chunks/theme.CWxU7uh8.js'
import {
  d as f,
  p as i,
  o as v,
  c as U,
  G as n,
  k as r,
  j as o,
  a as c,
  w as p,
  B as T,
} from './chunks/framework.Z42t_U4q.js'
import { Q as V } from './chunks/index.DEUECMle.js'
const g = `<script setup lang="ts">\r
import { VerSlider } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
const value = ref(0)\r
const value2 = ref(20)\r
const value3 = ref(50)\r
\r
const handleChange = (val: number) => {\r
  console.log('Changed:', val)\r
}\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerSlider v-model="value" />\r
\r
    <VerSlider\r
      v-model="value2"\r
      :min="0"\r
      :max="200"\r
      :step="5"\r
      @change="handleChange"\r
    />\r
\r
    <VerSlider v-model="value3" disabled @change="handleChange" />\r
  </div>\r
</template>\r
`,
  J = f({
    __name: 'base',
    setup(h) {
      const s = i(0),
        e = i(20),
        t = i(50),
        m = (u) => {
          console.log('Changed:', u)
        }
      return (u, l) => (
        v(),
        U('div', null, [
          n(
            r(d),
            {
              modelValue: s.value,
              'onUpdate:modelValue': l[0] || (l[0] = (a) => (s.value = a)),
            },
            null,
            8,
            ['modelValue'],
          ),
          n(
            r(d),
            {
              modelValue: e.value,
              'onUpdate:modelValue': l[1] || (l[1] = (a) => (e.value = a)),
              min: 0,
              max: 200,
              step: 5,
              onChange: m,
            },
            null,
            8,
            ['modelValue'],
          ),
          n(
            r(d),
            {
              modelValue: t.value,
              'onUpdate:modelValue': l[2] || (l[2] = (a) => (t.value = a)),
              disabled: '',
              onChange: m,
            },
            null,
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  k = JSON.parse(
    '{"title":"Slider 滑块","description":"","frontmatter":{},"headers":[],"relativePath":"components/slider/index.md","filePath":"components/slider/index.md"}',
  ),
  C = { name: 'components/slider/index.md' },
  B = Object.assign(C, {
    setup(h) {
      return (s, e) => {
        const t = T('ClientOnly')
        return (
          v(),
          U('div', null, [
            e[0] ||
              (e[0] = o(
                'h1',
                { id: 'slider-滑块', tabindex: '-1' },
                [
                  c('Slider 滑块 '),
                  o(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#slider-滑块',
                      'aria-label': 'Permalink to "Slider 滑块"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = o(
                'h2',
                { id: '基本用法', tabindex: '-1' },
                [
                  c('基本用法 '),
                  o(
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
            n(t, null, {
              default: p(() => [
                n(
                  r(V),
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
                  { vue: p(() => [n(J)]), _: 1 },
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
export { k as __pageData, B as default }
