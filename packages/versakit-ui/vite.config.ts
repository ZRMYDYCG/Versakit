import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import fs from 'fs-extra'

// CSS工程化
import autoprefixer from 'autoprefixer'
import postCssPxToRem from 'postcss-pxtorem'
import postNested from 'postcss-nested'
import mixins from 'postcss-mixins'
import cssnano from 'cssnano'

import CssMagic from 'postcss-magic'

// TS
import dts from 'vite-plugin-dts'

import { visualizer } from 'rollup-plugin-visualizer'

import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
  plugins: [
    {
      name: 'clean-dist',
      buildStart() {
        // 在构建开始前清理 dist 目录
        fs.emptyDirSync(resolve(__dirname, 'dist'))
      },
    },
    dts({ tsconfigPath: '../../tsconfig.build.json' }),
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
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
        cssnano({
          preset: 'default',
        }),
      ] as any,
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      external: [
        'vue',
        /\.test\.(ts|tsx)$/,
        /\.spec\.(ts|tsx)$/,
        /__tests__/,
        /__mocks__/,
      ],
      input: {
        index: 'index.ts',
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
      },
      output: [
        {
          format: 'umd',
          dir: 'dist/umd',
          entryFileNames: '[name].umd.js',
          name: 'index',
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'esm',
          dir: 'dist/esm',
          entryFileNames: '[name].esm.js',
        },
      ],
    },
    lib: {
      entry: 'index.ts',
      name: 'versakit-ui',
    },
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
  },
})
