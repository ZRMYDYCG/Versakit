import { B as o, b as p } from './chunks/theme.BxWFLTKc.js'
import {
  d as f,
  p as C,
  o as h,
  c as m,
  G as a,
  w as n,
  k as s,
  j as t,
  a as d,
  aq as v,
  B as U,
} from './chunks/framework.Z42t_U4q.js'
import { Q as c } from './chunks/index.DEUECMle.js'
const b = `<script setup lang="ts">\r
import { VerCollapse, VerCollapseItem } from '@versakit/ui'\r
\r
import { ref } from 'vue'\r
\r
const activeNames = ref(['1'])\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerCollapse v-model="activeNames" accordion>\r
      <VerCollapseItem title="Consistency" name="1">\r
        <div>\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </div>\r
      </VerCollapseItem>\r
      <VerCollapseItem title="Consistency" name="2">\r
        <div>\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </div>\r
      </VerCollapseItem>\r
      <VerCollapseItem title="Consistency" name="3">\r
        <div>\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </div>\r
      </VerCollapseItem>\r
    </VerCollapse>\r
  </div>\r
</template>\r
`,
  T = f({
    __name: 'accordion',
    setup(u) {
      const r = C(['1'])
      return (e, l) => (
        h(),
        m('div', null, [
          a(
            s(p),
            {
              modelValue: r.value,
              'onUpdate:modelValue': l[0] || (l[0] = (i) => (r.value = i)),
              accordion: '',
            },
            {
              default: n(() => [
                a(
                  s(o),
                  { title: 'Consistency', name: '1' },
                  {
                    default: n(
                      () =>
                        l[1] ||
                        (l[1] = [
                          t(
                            'div',
                            null,
                            ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ',
                            -1,
                          ),
                        ]),
                    ),
                    _: 1,
                  },
                ),
                a(
                  s(o),
                  { title: 'Consistency', name: '2' },
                  {
                    default: n(
                      () =>
                        l[2] ||
                        (l[2] = [
                          t(
                            'div',
                            null,
                            ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ',
                            -1,
                          ),
                        ]),
                    ),
                    _: 1,
                  },
                ),
                a(
                  s(o),
                  { title: 'Consistency', name: '3' },
                  {
                    default: n(
                      () =>
                        l[3] ||
                        (l[3] = [
                          t(
                            'div',
                            null,
                            ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ',
                            -1,
                          ),
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
          ),
        ])
      )
    },
  }),
  w = `<script setup lang="ts">\r
import { VerCollapse, VerCollapseItem } from '@versakit/ui'\r
\r
import { ref } from 'vue'\r
\r
const activeNames = ref(['1'])\r
const handleChange = (val: string[]) => {\r
  console.log(val)\r
}\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerCollapse v-model="activeNames" @change="handleChange">\r
      <VerCollapseItem title="Consistency 1" name="1">\r
        <div>\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </div>\r
      </VerCollapseItem>\r
      <VerCollapseItem title="Consistency 2" name="2">\r
        <div>\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </div>\r
      </VerCollapseItem>\r
      <VerCollapseItem title="Consistency 3" name="3">\r
        <div>\r
          Consistent with real life: in line with the process and logic of real\r
          life, and comply with languages and habits that the users are used to;\r
        </div>\r
      </VerCollapseItem>\r
    </VerCollapse>\r
  </div>\r
</template>\r
`,
  V = f({
    __name: 'base',
    setup(u) {
      const r = C(['1']),
        e = (l) => {
          console.log(l)
        }
      return (l, i) => (
        h(),
        m('div', null, [
          a(
            s(p),
            {
              modelValue: r.value,
              'onUpdate:modelValue': i[0] || (i[0] = (g) => (r.value = g)),
              onChange: e,
            },
            {
              default: n(() => [
                a(
                  s(o),
                  { title: 'Consistency 1', name: '1' },
                  {
                    default: n(
                      () =>
                        i[1] ||
                        (i[1] = [
                          t(
                            'div',
                            null,
                            ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ',
                            -1,
                          ),
                        ]),
                    ),
                    _: 1,
                  },
                ),
                a(
                  s(o),
                  { title: 'Consistency 2', name: '2' },
                  {
                    default: n(
                      () =>
                        i[2] ||
                        (i[2] = [
                          t(
                            'div',
                            null,
                            ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ',
                            -1,
                          ),
                        ]),
                    ),
                    _: 1,
                  },
                ),
                a(
                  s(o),
                  { title: 'Consistency 3', name: '3' },
                  {
                    default: n(
                      () =>
                        i[3] ||
                        (i[3] = [
                          t(
                            'div',
                            null,
                            ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ',
                            -1,
                          ),
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
          ),
        ])
      )
    },
  }),
  O = JSON.parse(
    '{"title":"Collapse 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse/index.md","filePath":"components/collapse/index.md"}',
  ),
  J = { name: 'components/collapse/index.md' },
  k = Object.assign(J, {
    setup(u) {
      return (r, e) => {
        const l = U('ClientOnly')
        return (
          h(),
          m('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'collapse-折叠面板', tabindex: '-1' },
                [
                  d('Collapse 折叠面板 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#collapse-折叠面板',
                      'aria-label': 'Permalink to "Collapse 折叠面板"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] || (e[1] = t('p', null, '通过折叠面板收纳内容区域。', -1)),
            e[2] ||
              (e[2] = t(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  d('基本使用 '),
                  t(
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
            e[3] ||
              (e[3] = t('p', null, '可同时展开多个面板，面板之间不影响。', -1)),
            a(l, null, {
              default: n(() => [
                a(
                  s(c),
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
                    vueCode: s(w),
                  },
                  { vue: n(() => [a(V)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[4] ||
              (e[4] = t(
                'h2',
                { id: '手风琴效果', tabindex: '-1' },
                [
                  d('手风琴效果 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#手风琴效果',
                      'aria-label': 'Permalink to "手风琴效果"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[5] || (e[5] = t('p', null, '每次只能展开一个面板', -1)),
            e[6] ||
              (e[6] = t(
                'p',
                null,
                [
                  d('通过 '),
                  t('code', null, 'accordion'),
                  d(' 属性来设置是否以手风琴模式显示。'),
                ],
                -1,
              )),
            a(l, null, {
              default: n(() => [
                a(
                  s(c),
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
                    vueCode: s(b),
                  },
                  { vue: n(() => [a(T)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[7] || (e[7] = v('', 3)),
          ])
        )
      }
    },
  })
export { O as __pageData, k as default }
