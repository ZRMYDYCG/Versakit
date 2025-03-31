import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VersakitResolver } from '@versakit/resolvers'
import vueDevTools from 'vite-plugin-vue-devtools'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

// CSS工程化
import autoprefixer from 'autoprefixer'
import postCssPxToRem from 'postcss-pxtorem'
import postNested from 'postcss-nested'
import mixins from 'postcss-mixins'

import CssMagic from 'postcss-magic'

const pkgRoot = resolve(__dirname, '..', 'versakit-ui')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
    }),
    tailwindcss(),
    AutoImport({
      resolvers: [VersakitResolver()],
    }),
    Components({
      include: `${__dirname}/**`,
      resolvers: [VersakitResolver({ importStyle: false })],
      dts: true,
    }),
    vueDevTools(),
  ],
  css: {
    postcss: {
      plugins: [
        CssMagic(),
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
        }),
        mixins(),
        postNested(),
        postCssPxToRem({
          rootValue: 16,
          propList: ['*'],
        }),
      ],
    },
  },
  resolve: {
    alias: [
      {
        find: /^@versakit\/ui(\/(es|lib))?$/,
        replacement: path.resolve(pkgRoot, 'index.ts'),
      },
      {
        find: /^@versakit\/ui\/(es|lib)\/(.*)$/,
        replacement: `${pkgRoot}/$2`,
      },
    ],
  },
  server: {
    host: true,
    port: 3000,
  },
})
