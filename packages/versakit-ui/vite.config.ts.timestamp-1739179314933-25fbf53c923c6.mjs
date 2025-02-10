// vite.config.ts
import vue from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@5.4.14_vue@3.5.13/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import autoprefixer from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.5.1/node_modules/autoprefixer/lib/autoprefixer.js";
import postCssPxToRem from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/postcss-pxtorem@6.1.0_postcss@8.5.1/node_modules/postcss-pxtorem/index.js";
import postNested from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/postcss-nested@7.0.2_postcss@8.5.1/node_modules/postcss-nested/index.js";
import mixins from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/postcss-mixins@11.0.3_postcss@8.5.1/node_modules/postcss-mixins/index.js";
import each from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/postcss-each@1.1.0_postcss@8.5.1/node_modules/postcss-each/index.js";
import eachVariables from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/postcss-each-variables@0.3.0/node_modules/postcss-each-variables/index.js";
import conditionals from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/postcss-conditionals@2.1.0/node_modules/postcss-conditionals/index.js";
import cssnano from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/cssnano@7.0.6_postcss@8.5.1/node_modules/cssnano/src/index.js";
import dts from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/vite-plugin-dts@4.5.0_@types+node@22.13.1_typescript@5.6.3_vite@5.4.14/node_modules/vite-plugin-dts/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.14/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { defineConfig } from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/vite@5.4.14_@types+node@22.13.1_sass@1.84.0/node_modules/vite/dist/node/index.js";
import { visualizer } from "file:///D:/javaj/openSource/Versakit-ui/Versakit/node_modules/.pnpm/rollup-plugin-visualizer@5.14.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({ tsconfigPath: "../../tsconfig.build.json" }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "./icons")],
      symbolId: "icon-[dir]-[name]"
    }),
    visualizer({
      open: true,
      // 打包完成后自动打开分析页面
      gzipSize: true,
      // 显示 gzip 压缩后的大小
      brotliSize: true
      // 显示 brotli 压缩后的大小
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    },
    postcss: {
      plugins: [
        conditionals(),
        each(),
        eachVariables(),
        autoprefixer({
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"]
        }),
        mixins(),
        postNested(),
        postCssPxToRem({
          rootValue: 16,
          propList: ["*"]
        }),
        cssnano({
          preset: "default"
        })
      ]
    }
  },
  // 打包配置
  build: {
    sourcemap: false,
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          exports: "named",
          preserveModules: false
        },
        {
          globals: {
            vue: "Vue"
          }
        },
        {
          format: "umd",
          dir: "dist/umd",
          entryFileNames: "[name].umd.js",
          name: "index"
        },
        {
          format: "esm",
          dir: "dist/esm",
          entryFileNames: "[name].esm.js"
        }
      ]
    },
    lib: {
      entry: "index.ts",
      name: "versakit-ui"
    },
    terserOptions: {
      compress: {
        // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        keep_infinity: true,
        // 生产环境去除 console
        drop_console: true,
        // 生产环境去除 debugger
        drop_debugger: true
      },
      format: {
        comments: false
        // 删除注释
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxqYXZhalxcXFxvcGVuU291cmNlXFxcXFZlcnNha2l0LXVpXFxcXFZlcnNha2l0XFxcXHBhY2thZ2VzXFxcXHZlcnNha2l0LXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxqYXZhalxcXFxvcGVuU291cmNlXFxcXFZlcnNha2l0LXVpXFxcXFZlcnNha2l0XFxcXHBhY2thZ2VzXFxcXHZlcnNha2l0LXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9qYXZhai9vcGVuU291cmNlL1ZlcnNha2l0LXVpL1ZlcnNha2l0L3BhY2thZ2VzL3ZlcnNha2l0LXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG4vLyBDU1NcdTVERTVcdTdBMEJcdTUzMTZcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuaW1wb3J0IHBvc3RDc3NQeFRvUmVtIGZyb20gJ3Bvc3Rjc3MtcHh0b3JlbSdcbmltcG9ydCBwb3N0TmVzdGVkIGZyb20gJ3Bvc3Rjc3MtbmVzdGVkJ1xuaW1wb3J0IG1peGlucyBmcm9tICdwb3N0Y3NzLW1peGlucydcblxuLy8gQHRzLWV4cGVjdC1lcnJvciBubyB0eXBlc1xuaW1wb3J0IGVhY2ggZnJvbSAncG9zdGNzcy1lYWNoJ1xuLy8gQHRzLWV4cGVjdC1lcnJvciBubyB0eXBlc1xuaW1wb3J0IGVhY2hWYXJpYWJsZXMgZnJvbSAncG9zdGNzcy1lYWNoLXZhcmlhYmxlcydcbi8vIEB0cy1leHBlY3QtZXJyb3Igbm8gdHlwZXNcbmltcG9ydCBjb25kaXRpb25hbHMgZnJvbSAncG9zdGNzcy1jb25kaXRpb25hbHMnXG5pbXBvcnQgY3NzbmFubyBmcm9tICdjc3NuYW5vJ1xuLy8gVFNcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG4vLyBcdTU2RkVcdTY4MDdcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBkdHMoeyB0c2NvbmZpZ1BhdGg6ICcuLi8uLi90c2NvbmZpZy5idWlsZC5qc29uJyB9KSxcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLi9pY29ucycpXSxcbiAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxuICAgIH0pLFxuICAgIHZpc3VhbGl6ZXIoe1xuICAgICAgb3BlbjogdHJ1ZSwgLy8gXHU2MjUzXHU1MzA1XHU1QjhDXHU2MjEwXHU1NDBFXHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU1MjA2XHU2NzkwXHU5ODc1XHU5NzYyXG4gICAgICBnemlwU2l6ZTogdHJ1ZSwgLy8gXHU2NjNFXHU3OTNBIGd6aXAgXHU1MzhCXHU3RjI5XHU1NDBFXHU3Njg0XHU1OTI3XHU1QzBGXG4gICAgICBicm90bGlTaXplOiB0cnVlLCAvLyBcdTY2M0VcdTc5M0EgYnJvdGxpIFx1NTM4Qlx1N0YyOVx1NTQwRVx1NzY4NFx1NTkyN1x1NUMwRlxuICAgIH0pLFxuICBdLFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIGFwaTogJ21vZGVybi1jb21waWxlcicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBjb25kaXRpb25hbHMoKSxcbiAgICAgICAgZWFjaCgpLFxuICAgICAgICBlYWNoVmFyaWFibGVzKCksXG4gICAgICAgIGF1dG9wcmVmaXhlcih7XG4gICAgICAgICAgb3ZlcnJpZGVCcm93c2Vyc2xpc3Q6IFsnQ2hyb21lID4gNDAnLCAnZmYgPiAzMScsICdpZSAxMSddLFxuICAgICAgICB9KSxcbiAgICAgICAgbWl4aW5zKCksXG4gICAgICAgIHBvc3ROZXN0ZWQoKSxcbiAgICAgICAgcG9zdENzc1B4VG9SZW0oe1xuICAgICAgICAgIHJvb3RWYWx1ZTogMTYsXG4gICAgICAgICAgcHJvcExpc3Q6IFsnKiddLFxuICAgICAgICB9KSxcbiAgICAgICAgY3NzbmFubyh7XG4gICAgICAgICAgcHJlc2V0OiAnZGVmYXVsdCcsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICAvLyBcdTYyNTNcdTUzMDVcdTkxNERcdTdGNkVcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxuICAgICAgb3V0cHV0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmb3JtYXQ6ICd1bWQnLFxuICAgICAgICAgIGRpcjogJ2Rpc3QvdW1kJyxcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS51bWQuanMnLFxuICAgICAgICAgIG5hbWU6ICdpbmRleCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmb3JtYXQ6ICdlc20nLFxuICAgICAgICAgIGRpcjogJ2Rpc3QvZXNtJyxcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5lc20uanMnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6ICdpbmRleC50cycsXG4gICAgICBuYW1lOiAndmVyc2FraXQtdWknLFxuICAgIH0sXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgLy8gXHU5NjMyXHU2QjYyIEluZmluaXR5IFx1ODhBQlx1NTM4Qlx1N0YyOVx1NjIxMCAxLzBcdUZGMENcdThGRDlcdTUzRUZcdTgwRkRcdTRGMUFcdTVCRkNcdTgxRjQgQ2hyb21lIFx1NEUwQVx1NzY4NFx1NjAyN1x1ODBGRFx1OTVFRVx1OTg5OFxuICAgICAgICBrZWVwX2luZmluaXR5OiB0cnVlLFxuICAgICAgICAvLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTUzQkJcdTk2NjQgY29uc29sZVxuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXG4gICAgICAgIC8vIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1NTNCQlx1OTY2NCBkZWJ1Z2dlclxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGZvcm1hdDoge1xuICAgICAgICBjb21tZW50czogZmFsc2UsIC8vIFx1NTIyMFx1OTY2NFx1NkNFOFx1OTFDQVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVgsT0FBTyxTQUFTO0FBQ3ZZLE9BQU8sVUFBVTtBQUdqQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFlBQVk7QUFHbkIsT0FBTyxVQUFVO0FBRWpCLE9BQU8sbUJBQW1CO0FBRTFCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sYUFBYTtBQUVwQixPQUFPLFNBQVM7QUFHaEIsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxrQkFBa0I7QUFFM0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osSUFBSSxFQUFFLGNBQWMsNEJBQTRCLENBQUM7QUFBQSxJQUNqRCxxQkFBcUI7QUFBQSxNQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUFBLE1BQ2pELFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUEsTUFDVixZQUFZO0FBQUE7QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLGFBQWE7QUFBQSxRQUNiLEtBQUs7QUFBQSxRQUNMLGNBQWM7QUFBQSxRQUNkLGFBQWE7QUFBQSxVQUNYLHNCQUFzQixDQUFDLGVBQWUsV0FBVyxPQUFPO0FBQUEsUUFDMUQsQ0FBQztBQUFBLFFBQ0QsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsZUFBZTtBQUFBLFVBQ2IsV0FBVztBQUFBLFVBQ1gsVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNoQixDQUFDO0FBQUEsUUFDRCxRQUFRO0FBQUEsVUFDTixRQUFRO0FBQUEsUUFDVixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULGlCQUFpQjtBQUFBLFFBQ25CO0FBQUEsUUFDQTtBQUFBLFVBQ0UsU0FBUztBQUFBLFlBQ1AsS0FBSztBQUFBLFVBQ1A7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ1IsS0FBSztBQUFBLFVBQ0wsZ0JBQWdCO0FBQUEsVUFDaEIsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxRQUFRO0FBQUEsVUFDUixLQUFLO0FBQUEsVUFDTCxnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUEsUUFFUixlQUFlO0FBQUE7QUFBQSxRQUVmLGNBQWM7QUFBQTtBQUFBLFFBRWQsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixVQUFVO0FBQUE7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
