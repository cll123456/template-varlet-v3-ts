import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './main.css'
import 'uno.css'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

const pinia = createPinia()
// eslint-disable-next-line no-console
console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, { path: '/', redirect: '/first' }],
})

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
