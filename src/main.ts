import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.scss'
import '@/lib/dd.scss'
import 'github-markdown-css'
import registerDdUi from './lib/index'

const app = createApp(App)
app.use(router)
app.use(registerDdUi)
app.mount('#app')
