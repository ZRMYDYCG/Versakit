import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VersakitResolver } from '@versakit/resolvers'

// CSS工程化
import autoprefixer from 'autoprefixer'
import postCssPxToRem from 'postcss-pxtorem'
import postNested from 'postcss-nested'
import mixins from 'postcss-mixins'
// @ts-expect-error no types
import each from 'postcss-each'
// @ts-expect-error no types
import eachVariables from 'postcss-each-variables'
// @ts-expect-error no types
import conditionals from 'postcss-conditionals'

const pkgRoot = resolve(__dirname, '..', 'versakit-ui')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      resolvers: [VersakitResolver()],
    }),
    Components({
      include: `${__dirname}/**`,
      resolvers: [VersakitResolver({ importStyle: false })],
      dts: false,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        conditionals(),
        each(),
        eachVariables(),
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
  },
})
