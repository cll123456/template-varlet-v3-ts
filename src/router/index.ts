import routes from '~pages'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, { path: '/', redirect: '/first' }],
})
// eslint-disable-next-line no-console
console.log(routes)
export default router
