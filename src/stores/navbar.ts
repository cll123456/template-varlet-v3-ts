import { BadgeProps } from '@varlet/ui'
import { defineStore } from 'pinia'
/**
 * navbar的类型
 */
export interface INavbar {
  /**
   * navbar title
   */
  title: string
  /**
   * navbar logo
   */
  logo: string
  /**
   * navbar router link object
   */
  links: {
    /**
     * router link name
     */
    name: string
    /**
     * router link path
     */
    url: string
  }
  /**
   * varlet本身组件的badge所有属性
   */
  badge?: BadgeProps
}

export const useNavbarStore = defineStore<
  'navbar',
  { navBarList: INavbar[]; activeColorClass: string },
  any,
  { changeNavBarList: (title: string, content: INavbar) => void }
>('navbar', {
  state: () => ({
    /**
     * navbar的数据
     */
    navBarList: [
      {
        title: 'First',
        logo: 'i-mdi-home-floor-1',
        links: { name: 'Home', url: '/first' },
        badge: {
          value: 0,
          maxValue: 10,
        },
      },
      {
        title: 'Second',
        logo: 'i-mdi-home-floor-2',
        links: { name: 'Home', url: '/second' },
        badge: {
          value: 0,
          maxValue: 10,
        },
      },
      {
        title: 'Third-long-long-long-name',
        logo: 'i-mdi-home-floor-3',
        links: { name: 'Home', url: '/third' },
        badge: {
          value: 0,
          maxValue: 10,
        },
      },
      {
        title: 'Fourth',
        logo: 'i-mdi-numeric-4-box-outline',
        links: { name: 'Home', url: '/fourth' },
        badge: {
          value: 0,
          maxValue: 10,
        },
      },
      {
        title: 'Fifth',
        logo: 'i-mdi-numeric-5-box-outline',
        links: { name: 'Home', url: '/fifth' },
        badge: {
          value: 2,
          maxValue: 10,
        },
      },
    ],
    /**
     * 激活的navbar的颜色
     */
    activeColorClass: 'text-primary-500',
  }),
  actions: {
    /**
     * 改变navbar的数据，主要用于更新badge的值
     * @param title {string} navbar title
     * @param content {INavbar} navbar content 需要改变的内容
     */
    changeNavBarList(title: string, content: Partial<INavbar>) {
      this.navBarList = this.navBarList.map((item) => {
        if (item.title === title) {
          item = { ...item, ...content }
        }
        return item
      })
    },
  },
})
