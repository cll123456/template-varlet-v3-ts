import { onBeforeRouteLeave } from 'vue-router'
/**
 * 页面路由离开的动画hook
 * @param routerName {String} 进入的路由名称，就是需要进入那个页面的开场动画
 * @param beforeAnimationName {String} 进入动画的名称 'slide_right' 'slide_left'}
 * @param afterAnimationName {String} 离开动画的名称,默认('fade')需要恢复原来的动画
 */
export function useRouterAnimation(
  routerName: string,
  beforeAnimationName: string,
  afterAnimationName: string,
) {
  onBeforeRouteLeave((to, from, next) => {
    // 离开前，改成想要的进入动画
    if (to.name === routerName) {
      to.meta = {
        ...(to.meta || {}),
        transitionName: beforeAnimationName,
      }
    }
    next()
    // 离开后，改成想要的进入动画
    setTimeout(() => {
      to.meta = {
        ...(to.meta || {}),
        transitionName: afterAnimationName,
      }
    }, 300)
  })
}
