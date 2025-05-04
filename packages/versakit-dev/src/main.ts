import { createApp } from 'vue'
import App from './App.vue'
import { Versakit } from '@versakit/ui'
import '@versakit/ui/dist/esm/ui.css'
import './style/index.css'

const app = createApp(App)

app.use(Versakit)

app.mount('#app')
