import vue from '@vitejs/plugin-vue'
import path from 'path'

// CSS工程化
import autoprefixer from 'autoprefixer'
import postCssPxToRem from 'postcss-pxtorem'
import postNested from 'postcss-nested'
import mixins from 'postcss-mixins'
import cssnano from 'cssnano'

// // @ts-expect-error no types  each
// import each from 'postcss-each'
// // @ts-expect-error no types
// import eachVariables from 'postcss-each-variables'
// // @ts-expect-error no types
// import conditionals from 'postcss-conditionals'
import CssMagic from 'postcss-magic'

// TS
import dts from 'vite-plugin-dts'

// 图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { defineConfig } from 'vite'
// import { visualizer } from 'rollup-plugin-visualizer'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
  plugins: [
    dts({ tsconfigPath: '../../tsconfig.build.json' }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), './icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
    }),
    // visualizer({
    //   open: true, // 打包完成后自动打开分析页面
    //   gzipSize: true, // 显示 gzip 压缩后的大小
    //   brotliSize: true, // 显示 brotli 压缩后的大小
    // }),
  ],
  css: {
    postcss: {
      plugins: [
        // conditionals(),
        // each(),
        // eachVariables(),
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
      ],
    },
  },
  // 打包配置
  build: {
    minify: 'terser',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    sourcemap: false,
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          dir: 'dist/es',
          entryFileNames: 'index.js',
          preserveModules: true,
          preserveModulesRoot: 'src',
          manualChunks: {
            'vue-vendor': ['vue'],
            utils: ['./src/utils'],
            components: ['./src/components'],
          },
        },
        {
          format: 'cjs',
          dir: 'dist/lib',
          entryFileNames: 'index.js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          format: 'umd',
          dir: 'dist/dist',
          entryFileNames: 'index.full.js',
          name: 'VersaKit',
          globals: {
            vue: 'Vue',
          },
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
        pure_funcs: ['console.log'],
      },
      format: {
        comments: false,
      },
    },
    emptyOutDir: true,
  },
  optimizeDeps: {
    include: ['vue'],
    exclude: ['your-package-name'],
  },
  cacheDir: 'node_modules/.vite',
})
