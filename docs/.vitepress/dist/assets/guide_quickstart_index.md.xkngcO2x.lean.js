import {
  _ as t,
  o as p,
  c as l,
  aq as a,
  j as e,
  a as i,
  G as h,
  w as k,
  B as r,
} from './chunks/framework.Z42t_U4q.js'
const m = JSON.parse(
    '{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quickstart/index.md","filePath":"guide/quickstart/index.md"}',
  ),
  d = { name: 'guide/quickstart/index.md' }
function E(o, s, g, F, y, c) {
  const n = r('ver-tag')
  return (
    p(),
    l('div', null, [
      s[3] || (s[3] = a('', 5)),
      e('p', null, [
        s[1] || (s[1] = i('自动导入 ')),
        h(n, null, { default: k(() => s[0] || (s[0] = [i('推荐')])), _: 1 }),
        s[2] || (s[2] = i(' ​')),
      ]),
      s[4] || (s[4] = a('', 4)),
    ])
  )
}
const v = t(d, [['render', E]])
export { m as __pageData, v as default }
