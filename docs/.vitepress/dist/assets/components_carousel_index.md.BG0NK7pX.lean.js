import { a, n as h } from './chunks/theme.B5pwRwa9.js'
import {
  d as U,
  o,
  c as i,
  G as t,
  w as n,
  k as l,
  j as r,
  _ as m,
  a as s,
  B as T,
} from './chunks/framework.Z42t_U4q.js'
import { Q as u } from './chunks/index.DEUECMle.js'
const J = `<script setup lang="ts">\r
import { VerCarousel, VerCarouselItem } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <div class="carousel-wrapper">\r
    <VerCarousel\r
      :autoplay="true"\r
      :interval="3000"\r
      :show-arrows="true"\r
      :show-indicators="true"\r
      direction="horizontal"\r
      trigger="hover"\r
    >\r
      <VerCarouselItem width="1200px" height="600px">\r
        <div class="custom-slide">\r
          <h3>自定义内容 1</h3>\r
          <p>这是一个使用 slot 的示例</p>\r
        </div>\r
      </VerCarouselItem>\r
      <VerCarouselItem width="1200px" height="600px">\r
        <div class="custom-slide">\r
          <h3>自定义内容 2</h3>\r
          <p>你可以放置任何内容</p>\r
        </div>\r
      </VerCarouselItem>\r
    </VerCarousel>\r
  </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
.container {\r
  padding: 40px;\r
  width: 100%;\r
  max-width: 1200px;\r
  margin: 0 auto;\r
}\r
\r
.carousel-wrapper {\r
  width: 100%;\r
  height: 600px;\r
  margin: 40px 0;\r
  overflow: hidden;\r
}\r
\r
h2 {\r
  text-align: center;\r
  margin-bottom: 20px;\r
  color: #333;\r
  font-size: 2em;\r
}\r
\r
.custom-slide {\r
  width: 100%;\r
  height: 100%;\r
  display: flex;\r
  flex-direction: column;\r
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r
  color: white;\r
  border-radius: 8px;\r
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r
}\r
\r
.custom-slide h3 {\r
  font-size: 3em;\r
  margin-bottom: 1em;\r
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\r
}\r
\r
.custom-slide p {\r
  font-size: 1.5em;\r
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\r
}\r
</style>\r
`,
  x = { class: 'carousel-wrapper' },
  g = U({
    __name: 'slot',
    setup(c) {
      return (p, e) => (
        o(),
        i('div', x, [
          t(
            l(h),
            {
              autoplay: !0,
              interval: 3e3,
              'show-arrows': !0,
              'show-indicators': !0,
              direction: 'horizontal',
              trigger: 'hover',
            },
            {
              default: n(() => [
                t(
                  l(a),
                  { width: '1200px', height: '600px' },
                  {
                    default: n(
                      () =>
                        e[0] ||
                        (e[0] = [
                          r(
                            'div',
                            { class: 'custom-slide' },
                            [
                              r('h3', null, '自定义内容 1'),
                              r('p', null, '这是一个使用 slot 的示例'),
                            ],
                            -1,
                          ),
                        ]),
                    ),
                    _: 1,
                  },
                ),
                t(
                  l(a),
                  { width: '1200px', height: '600px' },
                  {
                    default: n(
                      () =>
                        e[1] ||
                        (e[1] = [
                          r(
                            'div',
                            { class: 'custom-slide' },
                            [
                              r('h3', null, '自定义内容 2'),
                              r('p', null, '你可以放置任何内容'),
                            ],
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
          ),
        ])
      )
    },
  }),
  w = m(g, [['__scopeId', 'data-v-8a2bf9ce']]),
  v = `<script setup lang="ts">
import { VerCarousel, VerCarouselItem } from '@versakit/ui'
<\/script>

<template>
  <div class="carousel-wrapper">
    <VerCarousel
      :autoplay="true"
      :interval="3000"
      :show-arrows="true"
      :show-indicators="true"
      direction="horizontal"
      trigger="hover"
    >
      <VerCarouselItem
        src="https://picsum.photos/id/1018/1200/800"
        alt="山川湖泊"
        caption="山川湖泊"
        width="1200px"
        height="600px"
        fit="cover"
      />
      <VerCarouselItem
        src="https://picsum.photos/id/1015/1200/800"
        alt="城市风光"
        caption="城市风光"
        width="1200px"
        height="600px"
        fit="cover"
      />
      <VerCarouselItem
        src="https://picsum.photos/id/1019/1200/800"
        alt="自然风景"
        caption="自然风景"
        width="1200px"
        height="600px"
        fit="cover"
      />
    </VerCarousel>
  </div>
</template>

<style lang="scss" scoped>
.carousel-wrapper {
  width: 100%;
  height: 600px;
  margin: 40px 0;
  overflow: hidden;
}
</style>
`,
  C = { class: 'carousel-wrapper' },
  O = U({
    __name: 'base',
    setup(c) {
      return (p, e) => (
        o(),
        i('div', C, [
          t(
            l(h),
            {
              autoplay: !0,
              interval: 3e3,
              'show-arrows': !0,
              'show-indicators': !0,
              direction: 'horizontal',
              trigger: 'hover',
            },
            {
              default: n(() => [
                t(l(a), {
                  src: 'https://picsum.photos/id/1018/1200/800',
                  alt: '山川湖泊',
                  caption: '山川湖泊',
                  width: '1200px',
                  height: '600px',
                  fit: 'cover',
                }),
                t(l(a), {
                  src: 'https://picsum.photos/id/1015/1200/800',
                  alt: '城市风光',
                  caption: '城市风光',
                  width: '1200px',
                  height: '600px',
                  fit: 'cover',
                }),
                t(l(a), {
                  src: 'https://picsum.photos/id/1019/1200/800',
                  alt: '自然风景',
                  caption: '自然风景',
                  width: '1200px',
                  height: '600px',
                  fit: 'cover',
                }),
              ]),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  b = m(O, [['__scopeId', 'data-v-aab8cf88']]),
  E = JSON.parse(
    '{"title":"Carousel 走马灯","description":"","frontmatter":{},"headers":[],"relativePath":"components/carousel/index.md","filePath":"components/carousel/index.md"}',
  ),
  V = { name: 'components/carousel/index.md' },
  D = Object.assign(V, {
    setup(c) {
      return (p, e) => {
        const d = T('ClientOnly')
        return (
          o(),
          i('div', null, [
            e[0] ||
              (e[0] = r(
                'h1',
                { id: 'carousel-走马灯', tabindex: '-1' },
                [
                  s('Carousel 走马灯 '),
                  r(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#carousel-走马灯',
                      'aria-label': 'Permalink to "Carousel 走马灯"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = r(
                'p',
                null,
                '在有限空间内，循环播放同一类型的图片、文字等内容',
                -1,
              )),
            e[2] ||
              (e[2] = r(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  s('基本使用 '),
                  r(
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
            t(d, null, {
              default: n(() => [
                t(
                  l(u),
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
                    vueCode: l(v),
                  },
                  { vue: n(() => [t(b)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[3] ||
              (e[3] = r(
                'h2',
                { id: '自定义内容', tabindex: '-1' },
                [
                  s('自定义内容 '),
                  r(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义内容',
                      'aria-label': 'Permalink to "自定义内容"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t(d, null, {
              default: n(() => [
                t(
                  l(u),
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
                    vueCode: l(J),
                  },
                  { vue: n(() => [t(w)]), _: 1 },
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
export { E as __pageData, D as default }
