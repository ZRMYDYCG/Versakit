import { G as d, r as J } from './chunks/theme.B5pwRwa9.js'
import {
  d as U,
  p as u,
  o as b,
  b as c,
  w as n,
  G as l,
  j as t,
  k as r,
  c as p,
  a as s,
  aq as v,
  B as h,
} from './chunks/framework.Z42t_U4q.js'
import { Q as m } from './chunks/index.DEUECMle.js'
const f = `<script setup lang="ts">
import { ref } from 'vue'
import { VerTab, VerTabItem } from '@versakit/ui'

const activeTab = ref('1')
<\/script>

<template>
  <VerTab v-model="activeTab" type="card">
    <VerTabItem label="标签1" name="1">
      <div class="content">标签1的内容</div>
    </VerTabItem>
    <VerTabItem label="标签2" name="2">
      <div class="content">标签2的内容</div>
    </VerTabItem>
    <VerTabItem label="标签3" name="3">
      <div class="content">标签3的内容</div>
    </VerTabItem>
  </VerTab>
</template>

<style scoped></style>
`,
  V = U({
    __name: 'card',
    setup(T) {
      const o = u('1')
      return (a, e) => (
        b(),
        c(
          r(J),
          {
            modelValue: o.value,
            'onUpdate:modelValue': e[0] || (e[0] = (i) => (o.value = i)),
            type: 'card',
          },
          {
            default: n(() => [
              l(
                r(d),
                { label: '标签1', name: '1' },
                {
                  default: n(
                    () =>
                      e[1] ||
                      (e[1] = [
                        t('div', { class: 'content' }, '标签1的内容', -1),
                      ]),
                  ),
                  _: 1,
                },
              ),
              l(
                r(d),
                { label: '标签2', name: '2' },
                {
                  default: n(
                    () =>
                      e[2] ||
                      (e[2] = [
                        t('div', { class: 'content' }, '标签2的内容', -1),
                      ]),
                  ),
                  _: 1,
                },
              ),
              l(
                r(d),
                { label: '标签3', name: '3' },
                {
                  default: n(
                    () =>
                      e[3] ||
                      (e[3] = [
                        t('div', { class: 'content' }, '标签3的内容', -1),
                      ]),
                  ),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
          8,
          ['modelValue'],
        )
      )
    },
  }),
  B = `<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerTab, VerTabItem } from '@versakit/ui'\r
\r
const activeTab = ref('1')\r
<\/script>\r
\r
<template>\r
  <VerTab v-model="activeTab">\r
    <VerTabItem label="标签1" name="1">\r
      <div class="content">标签1的内容</div>\r
    </VerTabItem>\r
    <VerTabItem label="标签2" name="2">\r
      <div class="content">标签2的内容</div>\r
    </VerTabItem>\r
    <VerTabItem label="标签3" name="3">\r
      <div class="content">标签3的内容</div>\r
    </VerTabItem>\r
  </VerTab>\r
</template>\r
\r
<style scoped></style>\r
`,
  D = U({
    __name: 'base',
    setup(T) {
      const o = u('1')
      return (a, e) => (
        b(),
        c(
          r(J),
          {
            modelValue: o.value,
            'onUpdate:modelValue': e[0] || (e[0] = (i) => (o.value = i)),
          },
          {
            default: n(() => [
              l(
                r(d),
                { label: '标签1', name: '1' },
                {
                  default: n(
                    () =>
                      e[1] ||
                      (e[1] = [
                        t('div', { class: 'content' }, '标签1的内容', -1),
                      ]),
                  ),
                  _: 1,
                },
              ),
              l(
                r(d),
                { label: '标签2', name: '2' },
                {
                  default: n(
                    () =>
                      e[2] ||
                      (e[2] = [
                        t('div', { class: 'content' }, '标签2的内容', -1),
                      ]),
                  ),
                  _: 1,
                },
              ),
              l(
                r(d),
                { label: '标签3', name: '3' },
                {
                  default: n(
                    () =>
                      e[3] ||
                      (e[3] = [
                        t('div', { class: 'content' }, '标签3的内容', -1),
                      ]),
                  ),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
          8,
          ['modelValue'],
        )
      )
    },
  }),
  C = JSON.parse(
    '{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tab/index.md","filePath":"components/tab/index.md"}',
  ),
  x = { name: 'components/tab/index.md' },
  _ = Object.assign(x, {
    setup(T) {
      return (o, a) => {
        const e = h('ClientOnly')
        return (
          b(),
          p('div', null, [
            a[0] ||
              (a[0] = t(
                'h1',
                { id: 'tabs-标签页', tabindex: '-1' },
                [
                  s('Tabs 标签页 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#tabs-标签页',
                      'aria-label': 'Permalink to "Tabs 标签页"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            a[1] ||
              (a[1] = t(
                'p',
                null,
                '分隔内容上有关联但属于不同类别的数据集合。',
                -1,
              )),
            a[2] ||
              (a[2] = t(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  s('基础用法 '),
                  t(
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
            a[3] ||
              (a[3] = t(
                'p',
                null,
                [
                  s('Tabs 组件提供了选项卡功能，通过 '),
                  t('code', null, 'tabList'),
                  s(' 绑定当前激活的 '),
                  t('code', null, 'Tab'),
                  s(' 名称。'),
                ],
                -1,
              )),
            l(e, null, {
              default: n(() => [
                l(
                  r(m),
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
                    vueCode: r(B),
                  },
                  { vue: n(() => [l(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            a[4] ||
              (a[4] = t(
                'h2',
                { id: '卡片', tabindex: '-1' },
                [
                  s('卡片 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#卡片',
                      'aria-label': 'Permalink to "卡片"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            a[5] ||
              (a[5] = t(
                'p',
                null,
                [
                  s('Tabs 组件提供了选项卡功能，通过 '),
                  t('code', null, 'tabList'),
                  s(' 绑定当前激活的 '),
                  t('code', null, 'Tab'),
                  s(' 名称。'),
                ],
                -1,
              )),
            l(e, null, {
              default: n(() => [
                l(
                  r(m),
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
                    vueCode: r(f),
                  },
                  { vue: n(() => [l(V)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            a[6] || (a[6] = v('', 5)),
          ])
        )
      }
    },
  })
export { C as __pageData, _ as default }
