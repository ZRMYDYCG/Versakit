import { W as i } from './chunks/theme.CWxU7uh8.js'
import {
  d as m,
  o,
  b as T,
  w as l,
  a as n,
  k as b,
  c,
  j as e,
  G as r,
  aq as h,
  B as p,
} from './chunks/framework.Z42t_U4q.js'
import { Q as u } from './chunks/index.DEUECMle.js'
const U = `<script setup lang="ts">\r
import { VerTab } from '@versakit/ui'\r
\r
const customTabList: any = [\r
  { id: 'tab1', label: 'Tab1', name: 'tab1-content' },\r
  { id: 'tab2', label: 'Tab2', name: 'tab2-content' },\r
  { id: 'tab3', label: 'Tab3', name: 'tab3-content' },\r
]\r
<\/script>\r
\r
<template>\r
  <ver-tab :tabList="customTabList">\r
    <template #tab1-content>1</template>\r
    <template #tab2-content>2</template>\r
    <template #tab3-content>3</template>\r
  </ver-tab>\r
</template>\r
\r
<style scoped></style>\r
`,
  J = m({
    __name: 'base',
    setup(d) {
      const s = [
        { id: 'tab1', label: 'Tab1', name: 'tab1-content' },
        { id: 'tab2', label: 'Tab2', name: 'tab2-content' },
        { id: 'tab3', label: 'Tab3', name: 'tab3-content' },
      ]
      return (t, a) => (
        o(),
        T(
          b(i),
          { tabList: s },
          {
            'tab1-content': l(() => a[0] || (a[0] = [n('1')])),
            'tab2-content': l(() => a[1] || (a[1] = [n('2')])),
            'tab3-content': l(() => a[2] || (a[2] = [n('3')])),
            _: 1,
          },
        )
      )
    },
  }),
  B = JSON.parse(
    '{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tab/index.md","filePath":"components/tab/index.md"}',
  ),
  f = { name: 'components/tab/index.md' },
  C = Object.assign(f, {
    setup(d) {
      return (s, t) => {
        const a = p('ClientOnly')
        return (
          o(),
          c('div', null, [
            t[0] ||
              (t[0] = e(
                'h1',
                { id: 'tabs-标签页', tabindex: '-1' },
                [
                  n('Tabs 标签页 '),
                  e(
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
            t[1] ||
              (t[1] = e(
                'p',
                null,
                '分隔内容上有关联但属于不同类别的数据集合。',
                -1,
              )),
            t[2] ||
              (t[2] = e(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  n('基础用法 '),
                  e(
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
            t[3] ||
              (t[3] = e(
                'p',
                null,
                [
                  n('Tabs 组件提供了选项卡功能，通过 '),
                  e('code', null, 'tabList'),
                  n(' 绑定当前激活的 '),
                  e('code', null, 'Tab'),
                  n(' 名称。'),
                ],
                -1,
              )),
            r(a, null, {
              default: l(() => [
                r(
                  b(u),
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
                    vueCode: b(U),
                  },
                  { vue: l(() => [r(J)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[4] ||
              (t[4] = h(
                '<h2 id="tabs-api" tabindex="-1">Tabs API <a class="header-anchor" href="#tabs-api" aria-label="Permalink to &quot;Tabs API&quot;">​</a></h2><h3 id="tabs-属性" tabindex="-1">Tabs 属性 <a class="header-anchor" href="#tabs-属性" aria-label="Permalink to &quot;Tabs 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>tabList</code></td><td>Tabs 中绑定的数据</td><td><code>array</code></td><td>-</td></tr></tbody></table><h3 id="tabs-插槽" tabindex="-1">Tabs 插槽 <a class="header-anchor" href="#tabs-插槽" aria-label="Permalink to &quot;Tabs 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>自定义</td><td>为 Tab 的唯一名称</td></tr></tbody></table>',
                5,
              )),
          ])
        )
      }
    },
  })
export { B as __pageData, C as default }
