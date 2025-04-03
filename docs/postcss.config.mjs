import { postcssIsolateStyles } from 'vitepress'

/**
 * https://vitepress.dev/guide/markdown#raw
 */
export default {
  plugins: [
    postcssIsolateStyles({
      includeFiles: [/vp-doc\.css/], // defaults to /base\.css/
    }),
  ],
}
