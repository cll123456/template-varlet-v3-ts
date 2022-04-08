import routes from '~pages'
export function useScrollPosition(scrollContainerSelector: string | Window) {
  const route = useRoute()
  let scrollContainer: Element | Window | null
  // 监听滚动事件
  onMounted(() => {
    // window
    if (scrollContainerSelector instanceof Window) {
      scrollContainer = window
    } else {
      scrollContainer = document.querySelector(scrollContainerSelector)
    }
    // not exit
    if (!scrollContainer) {
      return
    }
    // 一开始就滚动到对应位置
    routes.forEach((item) => {
      if (item.name === route.name) {
        // scrollContainer
        scrollContainer?.scrollTo({
          left: item.meta?.scrollPosition?.left,
          top: item.meta?.scrollPosition?.top,
        })
      }
    })
    // 添加时间监听
    scrollContainer?.addEventListener('scroll', handleScroll, {
      passive: false,
    })
  })

  /**
   * 滚动函数
   * @param e {Event} 事件函数
   */
  const handleScroll = (e: Event) => {
    const scrollTop =
      e.target === window
        ? window.scrollY
        : (e.target as HTMLDivElement).scrollTop
    const scrollLeft =
      e.target === window
        ? window.scrollX
        : (e.target as HTMLDivElement).scrollLeft
    routes.forEach((item) => {
      if (item.name === route.name) {
        item.meta = {
          ...(item.meta || {}),
          scrollPosition: {
            top: scrollTop,
            left: scrollLeft,
          },
        }
      }
    })
  }

  // 销毁监听
  onBeforeUnmount(() => {
    scrollContainer?.removeEventListener('scroll', handleScroll)
  })
}
