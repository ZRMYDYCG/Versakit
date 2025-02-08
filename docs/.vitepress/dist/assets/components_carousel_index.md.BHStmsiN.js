import { B as s, x as h } from './chunks/theme.CWxU7uh8.js'
import {
  d as J,
  o,
  c as i,
  G as t,
  w as l,
  k as n,
  j as e,
  _ as u,
  a,
  B as m,
} from './chunks/framework.Z42t_U4q.js'
import { Q as U } from './chunks/index.DEUECMle.js'
const C = `<script setup lang="ts">\r
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
  V = J({
    __name: 'slot',
    setup(c) {
      return (p, r) => (
        o(),
        i('div', x, [
          t(
            n(h),
            {
              autoplay: !0,
              interval: 3e3,
              'show-arrows': !0,
              'show-indicators': !0,
              direction: 'horizontal',
              trigger: 'hover',
            },
            {
              default: l(() => [
                t(
                  n(s),
                  { width: '1200px', height: '600px' },
                  {
                    default: l(
                      () =>
                        r[0] ||
                        (r[0] = [
                          e(
                            'div',
                            { class: 'custom-slide' },
                            [
                              e('h3', null, '自定义内容 1'),
                              e('p', null, '这是一个使用 slot 的示例'),
                            ],
                            -1,
                          ),
                        ]),
                    ),
                    _: 1,
                  },
                ),
                t(
                  n(s),
                  { width: '1200px', height: '600px' },
                  {
                    default: l(
                      () =>
                        r[1] ||
                        (r[1] = [
                          e(
                            'div',
                            { class: 'custom-slide' },
                            [
                              e('h3', null, '自定义内容 2'),
                              e('p', null, '你可以放置任何内容'),
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
  g = u(V, [['__scopeId', 'data-v-8a2bf9ce']]),
  T = `<script setup lang="ts">\r
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
      <VerCarouselItem\r
        src="https://picsum.photos/id/1018/1200/800"\r
        alt="山川湖泊"\r
        caption="山川湖泊"\r
        width="1200px"\r
        height="600px"\r
        fit="cover"\r
      />\r
      <VerCarouselItem\r
        src="https://picsum.photos/id/1015/1200/800"\r
        alt="城市风光"\r
        caption="城市风光"\r
        width="1200px"\r
        height="600px"\r
        fit="cover"\r
      />\r
      <VerCarouselItem\r
        src="https://picsum.photos/id/1019/1200/800"\r
        alt="自然风景"\r
        caption="自然风景"\r
        width="1200px"\r
        height="600px"\r
        fit="cover"\r
      />\r
    </VerCarousel>\r
  </div>\r
</template>\r
\r
<style lang="scss" scoped>\r
.carousel-wrapper {\r
  width: 100%;\r
  height: 600px;\r
  margin: 40px 0;\r
  overflow: hidden;\r
}\r
</style>\r
`,
  w = { class: 'carousel-wrapper' },
  v = J({
    __name: 'base',
    setup(c) {
      return (p, r) => (
        o(),
        i('div', w, [
          t(
            n(h),
            {
              autoplay: !0,
              interval: 3e3,
              'show-arrows': !0,
              'show-indicators': !0,
              direction: 'horizontal',
              trigger: 'hover',
            },
            {
              default: l(() => [
                t(n(s), {
                  src: 'https://picsum.photos/id/1018/1200/800',
                  alt: '山川湖泊',
                  caption: '山川湖泊',
                  width: '1200px',
                  height: '600px',
                  fit: 'cover',
                }),
                t(n(s), {
                  src: 'https://picsum.photos/id/1015/1200/800',
                  alt: '城市风光',
                  caption: '城市风光',
                  width: '1200px',
                  height: '600px',
                  fit: 'cover',
                }),
                t(n(s), {
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
  f = u(v, [['__scopeId', 'data-v-54ac7fa7']]),
  _ = JSON.parse(
    '{"title":"Carousel 走马灯","description":"","frontmatter":{},"headers":[],"relativePath":"components/carousel/index.md","filePath":"components/carousel/index.md"}',
  ),
  b = { name: 'components/carousel/index.md' },
  F = Object.assign(b, {
    setup(c) {
      return (p, r) => {
        const d = m('ClientOnly')
        return (
          o(),
          i('div', null, [
            r[0] ||
              (r[0] = e(
                'h1',
                { id: 'carousel-走马灯', tabindex: '-1' },
                [
                  a('Carousel 走马灯 '),
                  e(
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
            r[1] ||
              (r[1] = e(
                'p',
                null,
                '在有限空间内，循环播放同一类型的图片、文字等内容',
                -1,
              )),
            r[2] ||
              (r[2] = e(
                'h2',
                { id: '基本使用', tabindex: '-1' },
                [
                  a('基本使用 '),
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
            t(d, null, {
              default: l(() => [
                t(
                  n(U),
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
                    vueCode: n(T),
                  },
                  { vue: l(() => [t(f)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[3] ||
              (r[3] = e(
                'h2',
                { id: '自定义内容', tabindex: '-1' },
                [
                  a('自定义内容 '),
                  e(
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
              default: l(() => [
                t(
                  n(U),
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
                    vueCode: n(C),
                  },
                  { vue: l(() => [t(g)]), _: 1 },
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
export { _ as __pageData, F as default }
