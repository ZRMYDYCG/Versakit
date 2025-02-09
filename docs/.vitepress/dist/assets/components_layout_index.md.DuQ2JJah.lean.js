import { N as n, D as s } from './chunks/theme.B5pwRwa9.js'
import {
  d as u,
  o as J,
  b as p,
  w as r,
  G as o,
  j as t,
  k as e,
  _ as b,
  c as v,
  F as x,
  C as m,
  aq as T,
  a as d,
  B as g,
} from './chunks/framework.Z42t_U4q.js'
import { Q as i } from './chunks/index.DEUECMle.js'
const f = `<template>\r
  <ver-row :gutter="4">\r
    <ver-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">\r
      <div class="col-box"></div>\r
    </ver-col>\r
    <ver-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">\r
      <div class="col-box"></div>\r
    </ver-col>\r
    <ver-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.col-box {\r
  border-radius: 4px;\r
  min-height: 36px;\r
  background-color: #d3dce6;\r
}\r
\r
.col-box-1 {\r
  background-color: #e5e9f2;\r
}\r
</style>\r
`,
  C = u({
    __name: 'reactive',
    setup(c) {
      return (U, l) => (
        J(),
        p(
          e(s),
          { gutter: 4 },
          {
            default: r(() => [
              o(
                e(n),
                { xs: 8, sm: 6, md: 4, lg: 3, xl: 1 },
                {
                  default: r(
                    () =>
                      l[0] ||
                      (l[0] = [t('div', { class: 'col-box' }, null, -1)]),
                  ),
                  _: 1,
                },
              ),
              o(
                e(n),
                { xs: 4, sm: 6, md: 8, lg: 9, xl: 11 },
                {
                  default: r(
                    () =>
                      l[1] ||
                      (l[1] = [
                        t('div', { class: 'col-box col-box-1' }, null, -1),
                      ]),
                  ),
                  _: 1,
                },
              ),
              o(
                e(n),
                { xs: 4, sm: 6, md: 8, lg: 9, xl: 11 },
                {
                  default: r(
                    () =>
                      l[2] ||
                      (l[2] = [t('div', { class: 'col-box' }, null, -1)]),
                  ),
                  _: 1,
                },
              ),
              o(
                e(n),
                { xs: 8, sm: 6, md: 4, lg: 3, xl: 1 },
                {
                  default: r(
                    () =>
                      l[3] ||
                      (l[3] = [
                        t('div', { class: 'col-box col-box-1' }, null, -1),
                      ]),
                  ),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
        )
      )
    },
  }),
  D = b(C, [['__scopeId', 'data-v-6f667a57']]),
  R = `<template>\r
  <VerRow class="mb-4">\r
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>\r
    <VerCol :span="14">\r
      <div class="col-box col-box-2"></div>\r
    </VerCol>\r
  </VerRow>\r
  <VerRow class="mb-4">\r
    <VerCol :span="6"><div class="col-box col-box-1"></div></VerCol>\r
    <VerCol :span="8"><div class="col-box col-box-2"></div></VerCol>\r
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>\r
  </VerRow>\r
  <VerRow class="mb-4">\r
    <VerCol :span="4"><div class="col-box col-box-1"></div></VerCol>\r
    <VerCol :span="16"><div class="col-box col-box-2"></div></VerCol>\r
    <VerCol :span="4"><div class="col-box col-box-1"></div></VerCol>\r
  </VerRow>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.col-box {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 4px;\r
  min-height: 36px;\r
  background-color: #99a9bf;\r
}\r
\r
.col-box-1 {\r
  background-color: #d3dce6;\r
}\r
\r
.col-box-2 {\r
  background-color: #e5e9f2;\r
}\r
\r
.mb-4 {\r
  margin-bottom: 1rem;\r
}\r
</style>\r
`,
  B = u({
    __name: 'mix',
    setup(c) {
      return (U, l) => (
        J(),
        v(
          x,
          null,
          [
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(n),
                    { span: 10 },
                    {
                      default: r(
                        () =>
                          l[0] ||
                          (l[0] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 14 },
                    {
                      default: r(
                        () =>
                          l[1] ||
                          (l[1] = [
                            t('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(n),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[2] ||
                          (l[2] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[3] ||
                          (l[3] = [
                            t('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 10 },
                    {
                      default: r(
                        () =>
                          l[4] ||
                          (l[4] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(n),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[5] ||
                          (l[5] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 16 },
                    {
                      default: r(
                        () =>
                          l[6] ||
                          (l[6] = [
                            t('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[7] ||
                          (l[7] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  }),
  w = b(B, [['__scopeId', 'data-v-19d058cd']]),
  O = `<template>\r
  <ver-row :gutter="20">\r
    <ver-col :span="6" v-for="n in 4" :key="n">\r
      <div class="col-box"></div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.col-box {\r
  border-radius: 4px;\r
  min-height: 36px;\r
  background-color: #99a9bf;\r
}\r
</style>\r
`,
  Y = u({
    __name: 'gutter',
    setup(c) {
      return (U, l) => (
        J(),
        p(
          e(s),
          { gutter: 20 },
          {
            default: r(() => [
              (J(),
              v(
                x,
                null,
                m(4, (a) =>
                  o(
                    e(n),
                    { span: 6, key: a },
                    {
                      default: r(
                        () =>
                          l[0] ||
                          (l[0] = [t('div', { class: 'col-box' }, null, -1)]),
                      ),
                      _: 2,
                    },
                    1024,
                  ),
                ),
                64,
              )),
            ]),
            _: 1,
          },
        )
      )
    },
  }),
  k = b(Y, [['__scopeId', 'data-v-80b4c387']]),
  V = `<template>\r
  <VerRow class="mb-4">\r
    <VerCol :span="10"><div class="col-box col-box-1">10</div></VerCol>\r
    <VerCol :span="12" :offset="2">\r
      <div class="col-box col-box-2">12</div>\r
    </VerCol>\r
  </VerRow>\r
  <VerRow class="mb-4">\r
    <VerCol :span="8"><div class="col-box col-box-1">8</div></VerCol>\r
    <VerCol :span="8" :offset="8">\r
      <div class="col-box col-box-2">8</div>\r
    </VerCol>\r
  </VerRow>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.col-box {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 4px;\r
  min-height: 36px;\r
  background-color: #99a9bf;\r
}\r
\r
.col-box-1 {\r
  background-color: #d3dce6;\r
}\r
\r
.col-box-2 {\r
  background-color: #e5e9f2;\r
}\r
\r
.mb-4 {\r
  margin-bottom: 1rem;\r
}\r
</style>\r
`,
  E = u({
    __name: 'offset',
    setup(c) {
      return (U, l) => (
        J(),
        v(
          x,
          null,
          [
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(n),
                    { span: 10 },
                    {
                      default: r(
                        () =>
                          l[0] ||
                          (l[0] = [
                            t('div', { class: 'col-box col-box-1' }, '10', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 12, offset: 2 },
                    {
                      default: r(
                        () =>
                          l[1] ||
                          (l[1] = [
                            t('div', { class: 'col-box col-box-2' }, '12', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(n),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[2] ||
                          (l[2] = [
                            t('div', { class: 'col-box col-box-1' }, '8', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 8, offset: 8 },
                    {
                      default: r(
                        () =>
                          l[3] ||
                          (l[3] = [
                            t('div', { class: 'col-box col-box-2' }, '8', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  }),
  Z = b(E, [['__scopeId', 'data-v-0ad19b5f']]),
  h = `<template>\r
  <ver-row class="mb-4">\r
    <ver-col :span="24">\r
      <div class="col-box"></div>\r
    </ver-col>\r
  </ver-row>\r
  <ver-row class="mb-4">\r
    <ver-col :span="12">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="12">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
  </ver-row>\r
  <ver-row class="mb-4">\r
    <ver-col :span="8">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="8">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
    <ver-col :span="8">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
  </ver-row>\r
  <ver-row class="mb-4">\r
    <ver-col :span="6">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="6">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
    <ver-col :span="6">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="6">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
  </ver-row>\r
  <ver-row class="mb-4">\r
    <ver-col :span="4">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="4">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
    <ver-col :span="4">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="4">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
    <ver-col :span="4">\r
      <div class="col-box col-box-1"></div>\r
    </ver-col>\r
    <ver-col :span="4">\r
      <div class="col-box col-box-2"></div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.col-box {\r
  border-radius: 4px;\r
  min-height: 36px;\r
  background-color: #99a9bf;\r
}\r
\r
.col-box-1 {\r
  background-color: #d3dce6;\r
}\r
\r
.col-box-2 {\r
  background-color: #e5e9f2;\r
}\r
\r
.mb-4 {\r
  margin-bottom: 1rem;\r
}\r
</style>\r
`,
  X = u({
    __name: 'base',
    setup(c) {
      return (U, l) => (
        J(),
        v(
          x,
          null,
          [
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(n),
                    { span: 24 },
                    {
                      default: r(
                        () =>
                          l[0] ||
                          (l[0] = [t('div', { class: 'col-box' }, null, -1)]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(n),
                    { span: 12 },
                    {
                      default: r(
                        () =>
                          l[1] ||
                          (l[1] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 12 },
                    {
                      default: r(
                        () =>
                          l[2] ||
                          (l[2] = [
                            t('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(n),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[3] ||
                          (l[3] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[4] ||
                          (l[4] = [
                            t('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[5] ||
                          (l[5] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(n),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[6] ||
                          (l[6] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[7] ||
                          (l[7] = [
                            t('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[8] ||
                          (l[8] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[9] ||
                          (l[9] = [
                            t('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              e(s),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    e(n),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[10] ||
                          (l[10] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[11] ||
                          (l[11] = [
                            t('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[12] ||
                          (l[12] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[13] ||
                          (l[13] = [
                            t('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[14] ||
                          (l[14] = [
                            t('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    e(n),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[15] ||
                          (l[15] = [
                            t('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  }),
  Q = b(X, [['__scopeId', 'data-v-e8992b7d']]),
  W = JSON.parse(
    '{"title":"Layout 布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/layout/index.md","filePath":"components/layout/index.md"}',
  ),
  y = { name: 'components/layout/index.md' },
  A = Object.assign(y, {
    setup(c) {
      return (U, l) => {
        const a = g('ClientOnly')
        return (
          J(),
          v('div', null, [
            l[0] || (l[0] = T('', 5)),
            o(a, null, {
              default: r(() => [
                o(
                  e(i),
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
                    vueCode: e(h),
                  },
                  { vue: r(() => [o(Q)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[1] ||
              (l[1] = t(
                'h2',
                { id: '列偏移', tabindex: '-1' },
                [
                  d('列偏移 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#列偏移',
                      'aria-label': 'Permalink to "列偏移"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[2] ||
              (l[2] = t(
                'p',
                null,
                [
                  d('通过 '),
                  t('code', null, 'offset'),
                  d(' 属性指定分栏偏移的栏数'),
                ],
                -1,
              )),
            o(a, null, {
              default: r(() => [
                o(
                  e(i),
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
                    vueCode: e(V),
                  },
                  { vue: r(() => [o(Z)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[3] ||
              (l[3] = t(
                'h2',
                { id: '分栏间隔', tabindex: '-1' },
                [
                  d('分栏间隔 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#分栏间隔',
                      'aria-label': 'Permalink to "分栏间隔"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[4] ||
              (l[4] = t(
                'p',
                null,
                [
                  d('行提供 '),
                  t('code', null, 'gutter'),
                  d(' 属性来指定列之间的间距，其默认值为0。'),
                ],
                -1,
              )),
            o(a, null, {
              default: r(() => [
                o(
                  e(i),
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
                    vueCode: e(O),
                  },
                  { vue: r(() => [o(k)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[5] ||
              (l[5] = t(
                'h2',
                { id: '混合布局', tabindex: '-1' },
                [
                  d('混合布局 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#混合布局',
                      'aria-label': 'Permalink to "混合布局"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[6] ||
              (l[6] = t(
                'p',
                null,
                '通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。',
                -1,
              )),
            o(a, null, {
              default: r(() => [
                o(
                  e(i),
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
                    vueCode: e(R),
                  },
                  { vue: r(() => [o(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[7] ||
              (l[7] = t(
                'h2',
                { id: '响应式布局', tabindex: '-1' },
                [
                  d('响应式布局 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#响应式布局',
                      'aria-label': 'Permalink to "响应式布局"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[8] ||
              (l[8] = t(
                'p',
                null,
                '参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。',
                -1,
              )),
            o(a, null, {
              default: r(() => [
                o(
                  e(i),
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
                    vueCode: e(f),
                  },
                  { vue: r(() => [o(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[9] || (l[9] = T('', 3)),
          ])
        )
      }
    },
  })
export { W as __pageData, A as default }
