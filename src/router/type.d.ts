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
    /**
     * 当前页面滚动的位置
     */
    scrollPosition?: {
      /**
       * 顶部距离
       */
      top: number
      /**
       * 左侧距离
       */
      left: number
      /**
       * 滚动的行为
       */
      behavior?: ScrollBehavior
    }
  }
}
