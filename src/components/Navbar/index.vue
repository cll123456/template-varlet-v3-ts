<script lang="ts" setup>
import { ref, PropType } from 'vue'

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
}
const props = defineProps({
  /**
   * 列表数据
   */
  tableList: {
    type: Array as PropType<INavbar[]>,
    default: () => [],
  },
  /**
   * 激活颜色类名
   */
  activeColorClass: {
    type: String,
    default: 'text-primary-500',
  },
})

const route = useRoute()
const router = useRouter()

const isCurrentRoutePath = computed(() => (path: string) => route.path === path)

const goTo = (url: string) => {
  router.push(url)
}
</script>
<template>
  <div
    h-12
    bg="body-500"
    fixed
    z-1
    bottom-0
    left-0
    right-0
    border-t-1
    border-opacity-100
    border-gray-500
    border-dotted
  >
    <div w-full h-full flex justify-center items-center flex-wrap>
      <div
        v-for="(item, index) in props.tableList"
        :key="item.title + index"
        class="text-xl justify-center items-center flex flex-col flex-1 p-2 border-gray-500 box-border"
        @click="goTo(item.links.url)"
      >
        <div
          :class="`${item.logo} ${
            isCurrentRoutePath(item.links.url) ? props.activeColorClass : ''
          } `"
        ></div>
        <div
          :style="{
            maxWidth: `${100 / props.tableList.length}vw`,
          }"
          text-sm
          h-full
          truncate
          :class="`${
            isCurrentRoutePath(item.links.url) ? props.activeColorClass : ''
          }`"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
