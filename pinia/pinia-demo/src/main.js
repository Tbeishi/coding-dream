import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import router from '@/router/index.js'
// import '@/assets/main.css'
import { createPinia } from 'pinia'

const app = createApp(App)
// app.use(router) //SPA
app.use(createPinia()) //统一管理数据 会计
app.mount('#app') //UI组件
