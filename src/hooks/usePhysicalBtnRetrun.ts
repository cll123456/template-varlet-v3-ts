import { onMounted, onBeforeUnmount } from 'vue'
/**
 * 移动端物理按钮f返回事件
 * @param doSomeThing {Function} 需要做的事情
 * attention: 如果没有传回调函数，自动router.go(-1)
 */
export function usePhysicalBtnRetrun(doSomeThing?: () => void) {
  const router = useRouter()
  onMounted(() => {
    if (window.history) {
      history.pushState(history.state, '', document.URL)
      window.addEventListener('popstate', cusFunc, false) //false阻止默认事件
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('popstate', cusFunc, false) //false阻止默认事件
  })
  const cusFunc = () => {
    if (doSomeThing && typeof doSomeThing === 'function') {
      doSomeThing()
    } else {
      router.go(-1)
    }
  }
}
