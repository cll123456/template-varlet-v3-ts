import { defineStore } from 'pinia'

export const useHeadStore = defineStore<
  'head',
  { isDark: boolean },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  { changeTheme: (isDark: boolean) => void }
>('head', {
  state: () => ({
    /**
     * 激活的navbar的颜色
     */
    isDark: false,
  }),
  actions: {
    /**
     * 改变主题
     * @param isDark {boolean} 是否是黑暗
     */
    changeTheme(isDark: boolean) {
      this.isDark = isDark
    },
  },
})
