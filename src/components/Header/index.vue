<script lang="ts" setup>
import { StyleProvider } from '@varlet/ui'
const dark = () => import('@varlet/ui/es/themes/dark')

defineProps({
  /**
   * 标题
   */
  title: {
    type: String,
    default: '标题',
  },
  /**
   * 是否展示返回按钮
   */
  isShowGoBack: {
    type: Boolean,
    default: false,
  },
})

const ins = getCurrentInstance()
const emits = defineEmits<{
  /**
   * 返回按钮事件
   */
  (event: 'goBack'): void
}>()

const router = useRouter()

const goBack = () => {
  emits('goBack')
  if (
    ins?.vnode.props?.onGoBack &&
    typeof ins?.vnode.props?.onGoBack === 'function'
  ) {
    ins.vnode.props.onGoBack()
  } else {
    router.back()
  }
}

/**
 * 是否是黑夜模式
 */
const isDark = ref(false)
const changeTheme = async () => {
  isDark.value = !isDark.value
  const darkStyle = await dark()
  const cls = document.getElementById('app')
  if (isDark.value) {
    StyleProvider(darkStyle.default)
    cls?.classList.add('dark')
  } else {
    cls?.classList.remove('dark')
    StyleProvider(null)
  }
}
</script>
<template>
  <var-app-bar :title="title">
    <template v-if="isShowGoBack" #left>
      <var-button
        round
        text
        color="transparent"
        text-color="#ffffff"
        @click="goBack"
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
    <template #right>
      <var-button
        round
        text
        color="transparent"
        text-color="#ffffff"
        @click="changeTheme"
      >
        <var-icon v-if="!isDark" name="white-balance-sunny" />
        <var-icon v-if="isDark" name="weather-night" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
</template>

<style lang="scss" scoped></style>
