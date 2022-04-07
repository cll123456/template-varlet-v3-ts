import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, { path: '/', redirect: '/first' }],
})
// eslint-disable-next-line no-console
console.log(routes)
export default router
