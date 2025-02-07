import Theme from 'vitepress/theme'
import Tool from '../components/tool.vue'
import MyLayout from './Layout.vue'
// 引入样式
import './index.scss'
import 'virtual:group-icons.css'

// 引入组件库
import Versakit from '@versakit/ui'
import { Element, Layui } from '@versakit/theme'
// 引入样式
import '@versakit/ui/dist/style.css'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('Tool', Tool)

    app.use(Versakit)
  },
}
