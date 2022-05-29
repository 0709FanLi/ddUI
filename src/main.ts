import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.scss'
import '@/lib/dd.scss'
import 'github-markdown-css'

const app = createApp(App)
app.use(router)

app.mount('#app')
