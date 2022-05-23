<script lang="ts" setup>
import { useNavbarStore } from '@/stores/navbar'

const navbarStore = useNavbarStore()
// TODO 目前版本的unocss 还不能自动计算生成类名，所以需要手动定义计算属性里面的类名
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const temp = [
  'i-mdi-numeric-1-box-outline',
  'i-mdi-numeric-2-box-outline',
  'i-mdi-numeric-3-box-outline',
  'i-mdi-numeric-4-box-outline',
  'i-mdi-numeric-5-box-outline',
  '!text-primary-500',
]

const navbarList = computed(() => navbarStore.navBarList)

const activeColor = computed(() => navbarStore.activeColorClass)

const route = useRoute()
const router = useRouter()

const isCurrentRoutePath = computed(() => (path: string) => route.path === path)

const goTo = (url: string) => {
  router.push(url)
}
</script>
<template>
  <div
    bg="light-500 dark:dark-500"
    class="h-12 fixed z-1 bottom-0 left-0 right-0 border-t-1 border-opacity-100 border-gray-500 dark:border-light-500 border-dotted"
  >
    <div class="w-full h-full flex justify-center items-center flex-wrap">
      <div
        v-for="(item, index) in navbarList"
        :key="item.title + index"
        class="text-xl justify-center items-center flex flex-col flex-1 p-2 border-gray-500 dark:border-light-500 box-border"
        @click="goTo(item.links.url)"
      >
        <div
          v-if="!item.badge || item.badge.value === 0"
          :class="`${item.logo} ${'dark:text-light-500'} ${
            isCurrentRoutePath(item.links.url) ? activeColor : ''
          } `"
        ></div>
        <var-badge
          v-else
          type="danger"
          v-bind="item.badge"
          position="right-top"
        >
          <div
            :class="`${item.logo} ${'dark:text-light-500'}
          ${isCurrentRoutePath(item.links.url) ? activeColor : ''} `"
          ></div>
        </var-badge>
        <div
          :style="{
            maxWidth: `${100 / (navbarList.length + 1)}vw`,
          }"
          :class="`${
            isCurrentRoutePath(item.links.url) ? activeColor : ''
          } ${'text-sm h-full truncate dark:text-light-500'}`"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
