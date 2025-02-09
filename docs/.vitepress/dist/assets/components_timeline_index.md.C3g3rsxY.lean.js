import { z as r, C as u } from './chunks/theme.B5pwRwa9.js'
import {
  d as T,
  o as a,
  b as d,
  w as n,
  G as i,
  j as e,
  k as t,
  c,
  a as o,
  B as U,
} from './chunks/framework.Z42t_U4q.js'
import { Q as f } from './chunks/index.DEUECMle.js'
const h = `<script setup lang="ts">
import { VerTimeLineItem, VerTimeline } from '@versakit/ui'
<\/script>

<template>
  <VerTimeline>
    <VerTimeLineItem color="#1890ff">
      <h4>创建项目</h4>
      <p>初始化项目结构和依赖</p>
      <p>2025-01-01</p>
    </VerTimeLineItem>

    <VerTimeLineItem color="red">
      <h4>创建项目</h4>
      <p>初始化项目结构和依赖</p>
      <p>2025-01-01</p>
    </VerTimeLineItem>

    <VerTimeLineItem color="orange">
      <h4>创建项目</h4>
      <p>初始化项目结构和依赖</p>
      <p>2025-01-01</p>
    </VerTimeLineItem>

    <VerTimeLineItem color="green">
      <h4>创建项目</h4>
      <p>初始化项目结构和依赖</p>
      <p>2025-01-01</p>
    </VerTimeLineItem>
  </VerTimeline>
</template>
`,
  V = T({
    __name: 'base',
    setup(m) {
      return (s, l) => (
        a(),
        d(t(u), null, {
          default: n(() => [
            i(
              t(r),
              { color: '#1890ff' },
              {
                default: n(
                  () =>
                    l[0] ||
                    (l[0] = [
                      e('h4', null, '创建项目', -1),
                      e('p', null, '初始化项目结构和依赖', -1),
                      e('p', null, '2025-01-01', -1),
                    ]),
                ),
                _: 1,
              },
            ),
            i(
              t(r),
              { color: 'red' },
              {
                default: n(
                  () =>
                    l[1] ||
                    (l[1] = [
                      e('h4', null, '创建项目', -1),
                      e('p', null, '初始化项目结构和依赖', -1),
                      e('p', null, '2025-01-01', -1),
                    ]),
                ),
                _: 1,
              },
            ),
            i(
              t(r),
              { color: 'orange' },
              {
                default: n(
                  () =>
                    l[2] ||
                    (l[2] = [
                      e('h4', null, '创建项目', -1),
                      e('p', null, '初始化项目结构和依赖', -1),
                      e('p', null, '2025-01-01', -1),
                    ]),
                ),
                _: 1,
              },
            ),
            i(
              t(r),
              { color: 'green' },
              {
                default: n(
                  () =>
                    l[3] ||
                    (l[3] = [
                      e('h4', null, '创建项目', -1),
                      e('p', null, '初始化项目结构和依赖', -1),
                      e('p', null, '2025-01-01', -1),
                    ]),
                ),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  g = JSON.parse(
    '{"title":"Timeline 时间线","description":"","frontmatter":{},"headers":[],"relativePath":"components/timeline/index.md","filePath":"components/timeline/index.md"}',
  ),
  J = { name: 'components/timeline/index.md' },
  k = Object.assign(J, {
    setup(m) {
      return (s, l) => {
        const p = U('ClientOnly')
        return (
          a(),
          c('div', null, [
            l[0] ||
              (l[0] = e(
                'h1',
                { id: 'timeline-时间线', tabindex: '-1' },
                [
                  o('Timeline 时间线 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#timeline-时间线',
                      'aria-label': 'Permalink to "Timeline 时间线"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[1] ||
              (l[1] = e(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  o('基本使用 '),
                  e(
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
            i(p, null, {
              default: n(() => [
                i(
                  t(f),
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
                    vueCode: t(h),
                  },
                  { vue: n(() => [i(V)]), _: 1 },
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
export { g as __pageData, k as default }
