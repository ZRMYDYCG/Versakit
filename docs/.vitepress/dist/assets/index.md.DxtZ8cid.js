import { H as o, J as r, K as l } from './chunks/theme.B5pwRwa9.js'
import {
  o as u,
  c as m,
  G as e,
  w as a,
  k as i,
  a as n,
} from './chunks/framework.Z42t_U4q.js'
const b = JSON.parse(
    '{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Versakit","image":{"src":"https://raw.githubusercontent.com/lenran659/Versakit/main/logo.svg","alt":"Versakit"},"actions":[{"theme":"brand","text":"开始使用","link":"/guide/installation/"}]},"features":[{"icon":"💡","title":"Vue3组件库","details":"基于vite打包和TypeScript开发"},{"icon":"📦","title":"持续开发中","details":"更新迭代"},{"icon":"🛠️","title":"按需引入","details":"直接支持按需引入无需配置任何插件。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}',
  ),
  c = { name: 'index.md' },
  d = Object.assign(c, {
    setup(h) {
      const s = [
        {
          avatar:
            'https://avatars.githubusercontent.com/u/74483049?s=400&u=102dfac48d0067d9d7a5576134e409590bbfaafe&v=4',
          name: 'Jannik',
          title: 'Creator',
          links: [{ icon: 'github', link: 'https://github.com/lenran659' }],
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/131731035?v=4',
          name: 'Pei',
          title: 'UI Designer | Developer',
          links: [{ icon: 'github', link: 'https://github.com/Dream-2022' }],
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/122306263?v=4',
          name: 'JustHappy',
          title: 'Developer',
          links: [{ icon: 'github', link: 'https://github.com/Simonmie' }],
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/128499037?v=4',
          name: 'ZHuuO',
          title: 'Developer',
          links: [{ icon: 'github', link: 'https://github.com/ZHuuO' }],
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/184910937?v=4',
          name: 'StriveToLearnCode',
          title: 'Developer',
          links: [
            { icon: 'github', link: 'https://github.com/StriveToLearnCode' },
          ],
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/180088207?v=4',
          name: 'Fofow',
          title: 'Developer',
          links: [{ icon: 'github', link: 'https://github.com/Natorx' }],
        },
      ]
      return (p, t) => (
        u(),
        m('div', null, [
          e(i(l), null, {
            default: a(() => [
              e(i(o), null, {
                title: a(() => t[0] || (t[0] = [n('团队成员')])),
                lead: a(
                  () => t[1] || (t[1] = [n(' 我们是一群热爱开源的人。 ')]),
                ),
                _: 1,
              }),
              e(i(r), { size: 'small', members: s }),
            ]),
            _: 1,
          }),
        ])
      )
    },
  })
export { b as __pageData, d as default }
