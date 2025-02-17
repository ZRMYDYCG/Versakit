import { createApp } from 'vue'
import App from './App.vue'

import Versakit from '@versakit/ui' // 引入组件库
import '@versakit/ui/dist/style.css' // 引入样式
const app = createApp(App)

app.use(Versakit)
app.mount('#app')
