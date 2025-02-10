import { y as i, S as s } from './chunks/theme.BxWFLTKc.js'
import {
  d as b,
  o as p,
  c as a,
  j as l,
  G as o,
  w as e,
  k as n,
  a as r,
  B as c,
} from './chunks/framework.Z42t_U4q.js'
import { Q as v } from './chunks/index.DEUECMle.js'
const u = `<script setup lang="ts">\r
import { VerTooltip, VerButton } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <div class="tooltip-base-box">\r
    <div class="row center">\r
      <ver-tooltip\r
        class="box-item"\r
        effect="dark"\r
        content="Top Left"\r
        position="top-left"\r
      >\r
        <ver-button ghost>top-left</ver-button>\r
      </ver-tooltip>\r
\r
      <ver-tooltip class="box-item" effect="dark" content="Top " position="top">\r
        <ver-button ghost>top</ver-button>\r
      </ver-tooltip>\r
\r
      <ver-tooltip\r
        class="box-item"\r
        effect="dark"\r
        content="Top Right prompts info"\r
        position="top-right"\r
      >\r
        <ver-button ghost>top-right</ver-button>\r
      </ver-tooltip>\r
    </div>\r
\r
    <div class="row">\r
      <ver-tooltip\r
        class="box-item"\r
        effect="dark"\r
        content="Left Top prompts info"\r
        position="left-top"\r
      >\r
        <ver-button ghost>left-top</ver-button>\r
      </ver-tooltip>\r
      <ver-tooltip\r
        class="box-item"\r
        effect="dark"\r
        content="Right Top prompts info"\r
        position="right-top"\r
      >\r
        <ver-button ghost>right-top</ver-button>\r
      </ver-tooltip>\r
    </div>\r
    <div class="row">\r
      <ver-tooltip\r
        class="box-item"\r
        effect="dark"\r
        content="Left"\r
        position="left"\r
      >\r
        <ver-button ghost class="mt-3 mb-3">left</ver-button>\r
      </ver-tooltip>\r
      <ver-tooltip\r
        class="box-item"\r
        effect="dark"\r
        content="Right"\r
        position="right"\r
      >\r
        <ver-button ghost>right</ver-button>\r
      </ver-tooltip>\r
    </div>\r
    <div class="row">\r
      <ver-tooltip\r
        class="box-item"\r
        effect="dark"\r
        content="left-bottom"\r
        position="left-bottom"\r
      >\r
        <ver-button ghost>left-bottom</ver-button>\r
      </ver-tooltip>\r
      <ver-tooltip\r
        class="box-item"\r
        effect="dark"\r
        content="Right Bottom prompts info"\r
        position="right-bottom"\r
      >\r
        <ver-button ghost>right-bottom</ver-button>\r
      </ver-tooltip>\r
    </div>\r
    <div class="row center">\r
      <ver-tooltip\r
        class="box-item"\r
        effect="dark"\r
        content="Bottom Left prompts info"\r
        position="bottom-left"\r
      >\r
        <ver-button ghost>bottom-left</ver-button>\r
      </ver-tooltip>\r
\r
      <ver-tooltip\r
        class="box-item"\r
        effect="dark"\r
        content="Bottom "\r
        position="bottom"\r
      >\r
        <ver-button ghost>bottom</ver-button>\r
      </ver-tooltip>\r
      <ver-tooltip\r
        class="box-item"\r
        effect="dark"\r
        content="Bottom Right prompts info"\r
        position="bottom-right"\r
      >\r
        <ver-button ghost>bottom-right</ver-button>\r
      </ver-tooltip>\r
    </div>\r
  </div>\r
</template>\r
\r
<style>\r
.tooltip-base-box {\r
  width: 600px;\r
}\r
.tooltip-base-box .row {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
}\r
.tooltip-base-box .center {\r
  justify-content: center;\r
}\r
.tooltip-base-box .box-item {\r
  margin: 10px 10px;\r
}\r
</style>\r
`,
  g = { class: 'tooltip-base-box' },
  h = { class: 'row center' },
  x = { class: 'row' },
  k = { class: 'row' },
  T = { class: 'row' },
  U = { class: 'row center' },
  J = b({
    __name: 'base',
    setup(f) {
      return (d, t) => (
        p(),
        a('div', g, [
          l('div', h, [
            o(
              n(s),
              {
                class: 'box-item',
                effect: 'dark',
                content: 'Top Left',
                position: 'top-left',
              },
              {
                default: e(() => [
                  o(
                    n(i),
                    { ghost: '' },
                    {
                      default: e(() => t[0] || (t[0] = [r('top-left')])),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(s),
              {
                class: 'box-item',
                effect: 'dark',
                content: 'Top ',
                position: 'top',
              },
              {
                default: e(() => [
                  o(
                    n(i),
                    { ghost: '' },
                    { default: e(() => t[1] || (t[1] = [r('top')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(s),
              {
                class: 'box-item',
                effect: 'dark',
                content: 'Top Right prompts info',
                position: 'top-right',
              },
              {
                default: e(() => [
                  o(
                    n(i),
                    { ghost: '' },
                    {
                      default: e(() => t[2] || (t[2] = [r('top-right')])),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ]),
          l('div', x, [
            o(
              n(s),
              {
                class: 'box-item',
                effect: 'dark',
                content: 'Left Top prompts info',
                position: 'left-top',
              },
              {
                default: e(() => [
                  o(
                    n(i),
                    { ghost: '' },
                    {
                      default: e(() => t[3] || (t[3] = [r('left-top')])),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(s),
              {
                class: 'box-item',
                effect: 'dark',
                content: 'Right Top prompts info',
                position: 'right-top',
              },
              {
                default: e(() => [
                  o(
                    n(i),
                    { ghost: '' },
                    {
                      default: e(() => t[4] || (t[4] = [r('right-top')])),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ]),
          l('div', k, [
            o(
              n(s),
              {
                class: 'box-item',
                effect: 'dark',
                content: 'Left',
                position: 'left',
              },
              {
                default: e(() => [
                  o(
                    n(i),
                    { ghost: '', class: 'mt-3 mb-3' },
                    { default: e(() => t[5] || (t[5] = [r('left')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(s),
              {
                class: 'box-item',
                effect: 'dark',
                content: 'Right',
                position: 'right',
              },
              {
                default: e(() => [
                  o(
                    n(i),
                    { ghost: '' },
                    { default: e(() => t[6] || (t[6] = [r('right')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
          ]),
          l('div', T, [
            o(
              n(s),
              {
                class: 'box-item',
                effect: 'dark',
                content: 'left-bottom',
                position: 'left-bottom',
              },
              {
                default: e(() => [
                  o(
                    n(i),
                    { ghost: '' },
                    {
                      default: e(() => t[7] || (t[7] = [r('left-bottom')])),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(s),
              {
                class: 'box-item',
                effect: 'dark',
                content: 'Right Bottom prompts info',
                position: 'right-bottom',
              },
              {
                default: e(() => [
                  o(
                    n(i),
                    { ghost: '' },
                    {
                      default: e(() => t[8] || (t[8] = [r('right-bottom')])),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ]),
          l('div', U, [
            o(
              n(s),
              {
                class: 'box-item',
                effect: 'dark',
                content: 'Bottom Left prompts info',
                position: 'bottom-left',
              },
              {
                default: e(() => [
                  o(
                    n(i),
                    { ghost: '' },
                    {
                      default: e(() => t[9] || (t[9] = [r('bottom-left')])),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(s),
              {
                class: 'box-item',
                effect: 'dark',
                content: 'Bottom ',
                position: 'bottom',
              },
              {
                default: e(() => [
                  o(
                    n(i),
                    { ghost: '' },
                    {
                      default: e(() => t[10] || (t[10] = [r('bottom')])),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(s),
              {
                class: 'box-item',
                effect: 'dark',
                content: 'Bottom Right prompts info',
                position: 'bottom-right',
              },
              {
                default: e(() => [
                  o(
                    n(i),
                    { ghost: '' },
                    {
                      default: e(() => t[11] || (t[11] = [r('bottom-right')])),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ]),
        ])
      )
    },
  }),
  V = JSON.parse(
    '{"title":"Tooltip 文字提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip/index.md","filePath":"components/tooltip/index.md"}',
  ),
  _ = { name: 'components/tooltip/index.md' },
  R = Object.assign(_, {
    setup(f) {
      return (d, t) => {
        const m = c('ClientOnly')
        return (
          p(),
          a('div', null, [
            t[0] ||
              (t[0] = l(
                'h1',
                { id: 'tooltip-文字提示', tabindex: '-1' },
                [
                  r('Tooltip 文字提示 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#tooltip-文字提示',
                      'aria-label': 'Permalink to "Tooltip 文字提示"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[1] ||
              (t[1] = l('p', null, '常用于展示鼠标 hover 时的提示信息。', -1)),
            t[2] ||
              (t[2] = l(
                'h2',
                { id: '基本用法', tabindex: '-1' },
                [
                  r('基本用法 '),
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
            t[3] ||
              (t[3] = l(
                'p',
                null,
                '在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。',
                -1,
              )),
            o(m, null, {
              default: e(() => [
                o(
                  n(v),
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
                    vueCode: n(u),
                  },
                  { vue: e(() => [o(J)]), _: 1 },
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
export { V as __pageData, R as default }
