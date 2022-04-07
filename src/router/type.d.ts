import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 每个页面的动画名称
     */
    transitionName?: string
    /**
     * 是否缓存当前页面
     */
    keepAlive?: boolean
    /**
     * 当前页面的标题
     */
    title?: string
  }
}
