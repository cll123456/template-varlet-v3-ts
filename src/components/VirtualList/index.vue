<script lang="ts" setup>
import { Locale } from '@varlet/ui'
import { Ref, ref } from 'vue'
import { IListAll } from './type'
import { toPxNum, dt, createNamespace } from './utils'
import VirtualListProps from './props'
// 属性
const props = defineProps(VirtualListProps)
const { n } = createNamespace('list')
// 多语言包
const pack = Locale.pack.value

// 虚拟dom的变量
const defHeight = ref(props.itemDefaultHeight)
const showCount = ref(props.showCounts)
const listAll: Ref<IListAll[]> = ref([])
const renderList: Ref<IListAll[]> = ref([])
const virtualViewHeight = ref(0)
const scrollTop = ref(0)

// 原有的属性，无限加载
const detectorEl: Ref<HTMLElement | null> = ref(null)
let scrollerRef: Ref<HTMLDivElement | null> = ref(null)

// 无限滚动的方法
/**
 * load方法
 */
const load = () => {
  props['onUpdate:error'] && props['onUpdate:error'](false)
  props['onUpdate:loading'] && props['onUpdate:loading'](true)
  props.onLoad && props.onLoad()
}

const isReachBottom = () => {
  const containerBottom =
    scrollerRef.value === null
      ? window.innerHeight
      : (scrollerRef.value as HTMLElement)?.getBoundingClientRect().bottom
  const { bottom: detectorBottom } = (
    detectorEl.value as HTMLElement
  ).getBoundingClientRect()

  return Math.floor(detectorBottom) - toPxNum(props.offset) <= containerBottom
}

onMounted(() => {
  if (props.useVirtual) {
    init()
    getInfiniteScrollHeight()
    props.immediateCheck && handleScroll()
  }
})

watch(props.dataList, (val, oldVal) => {
  if (val.length > 0 && props.useVirtual) {
    init()
  }
})
/**
 * // 获取可见区的高度
 */
const getInfiniteScrollHeight = () => {
  const InfiniteScrollContainer = document.querySelector(
    '.InfiniteScrollContainer',
  )
  if (InfiniteScrollContainer) {
    virtualViewHeight.value =
      InfiniteScrollContainer?.getBoundingClientRect().height
  }
}

/**
 * 初始化
 */
const init = async () => {
  if (props.dataList.length > 0) {
    const preListAllLength = listAll.value.length
    listAll.value = JSON.parse(
      JSON.stringify([
        ...listAll.value,
        ...props.dataList.slice(preListAllLength, props.dataList.length),
      ]),
    )
    for (let i = preListAllLength; i < listAll.value.length; i++) {
      const item = listAll.value[i]
      item.curRowId = i // 存入当前行的下标
      item.hasRenderDom = false // 当前行是否渲染过 Date.now()
      item.curRowKey = i // vue-for循环使用的唯一值
      item.curRowMarginTop =
        i === 0
          ? 0
          : listAll.value[i - 1].curRowMarginTop +
            listAll.value[i - 1].curRowHeight // 当前的行的距离列表顶部的距离
      item.curRowHeight = defHeight.value // 单行的高度
    }

    if (renderList.value.length === 0) {
      renderList.value = listAll.value.slice(0, showCount.value) // 获取初始渲染的列表
    }
    // 数据变化
    getRenderList()
    // 获取渲染的列表
    nextTick(() => {
      renderList.value.forEach((i) => {
        renderListHeightChange(i)
      })
    })
  }
}

/**
 * 获取每一个item的真实高度
 * @param item
 */
const renderListHeightChange = (item: IListAll) => {
  if (!item.hasRenderDom) {
    let id = item.curRowId
    let offsetHeight = document
      .getElementsByClassName('InfiniteScrollItem' + id)[0]
      .getBoundingClientRect().height
    listAll.value[id as any].curRowHeight = offsetHeight
    listAll.value[id as any].hasRenderDom = true
    // 重新统计下高度 防止滚动过快时列表后面的列表的scrollTop小于前面的scrollTop
    for (let i = 0; i < listAll.value.length; i++) {
      if (i > 0) {
        listAll.value[i].curRowMarginTop =
          listAll.value[i - 1].curRowMarginTop +
          listAll.value[i - 1].curRowHeight
      }
    }
  }
}
/**
 * 滚动列表的高度
 */
const listHeight = computed(() => {
  let height = 0
  listAll.value.forEach((i) => {
    height += i.curRowHeight
  })
  return height
})

const handleScroll = async (e?: UIEvent) => {
  // 触底操作
  const { loading, finished, error } = props
  if (loading) return
  if (!loading && !finished && !error && isReachBottom()) {
    load()
  } else {
    // 其他操作
    if (scrollerRef.value) {
      // 滚动超出多少距离进行计算
      if (
        Math.abs(scrollerRef.value.scrollTop - scrollTop.value) >
        defHeight.value
      ) {
        scrollTop.value = scrollerRef.value.scrollTop
        getRenderList()
      }
    }
  }
}

const itemHasShow = (item: IListAll) => {
  if (
    item.curRowMarginTop < scrollTop.value &&
    item.curRowMarginTop + item.curRowHeight >
      scrollTop.value + virtualViewHeight.value
  ) {
    return true
  } else if (
    item.curRowMarginTop > scrollTop.value &&
    item.curRowMarginTop < scrollTop.value + virtualViewHeight.value
  ) {
    return true
  } else {
    return (
      item.curRowMarginTop + item.curRowHeight > scrollTop.value - 300 &&
      item.curRowMarginTop + item.curRowHeight <
        scrollTop.value + virtualViewHeight.value + 300
    )
  }
}

const marginTopTotal = computed(() =>
  renderList.value[0] ? renderList.value[0].curRowMarginTop : 0,
)

const getRenderList = () => {
  for (let i = 0; i < listAll.value.length; i++) {
    if (itemHasShow(listAll.value[i])) {
      let count = i + showCount.value
      renderList.value = listAll.value.slice(
        i,
        Math.min(count, listAll.value.length),
      )
      // 获取渲染的列表
      nextTick(() => {
        renderList.value.forEach((i) => {
          renderListHeightChange(i)
        })
      })
      break
    }
  }
}
</script>
<template>
  <template v-if="useVirtual">
    <div
      ref="scrollerRef"
      class="InfiniteScrollContainer h-full relative overflow-y-auto overflow-x-hidden"
      @scroll="handleScroll"
    >
      <div
        class="absolute top-0 left-0 right-0"
        :style="`height: ${listHeight}px`"
      ></div>
      <div
        class="relative flex flex-col flex-nowrap flex-shrink-0"
        :style="{
          transform: `translate3d(0,${marginTopTotal}px,0)`,
        }"
      >
        <div
          v-for="item in renderList"
          :key="item.curRowId + '_' + item.curRowKey"
          :data-key="item.curRowId"
          :class="`${
            'InfiniteScrollItem' + item.curRowId
          } ${'w-full flex-shrink-0'}`"
        >
          <slot :item="item" :index="item.curRowId"></slot>
        </div>
        <slot v-if="loading" name="loading">
          <div :class="n('loading')">
            <div :class="n('loading-text')">
              {{ dt(loadingText, pack.listLoadingText) }}
            </div>
            <var-loading size="mini" :radius="10" />
          </div>
        </slot>

        <slot v-if="finished" name="finished">
          <div :class="n('finished')">
            {{ dt(finishedText, pack.listFinishedText) }}
          </div>
        </slot>

        <slot v-if="error" name="error">
          <div v-ripple :class="n('error')" @click="load">
            {{ dt(errorText, pack.listErrorText) }}
          </div>
        </slot>
        <!-- 判断是否触底 -->
        <div ref="detectorEl" :class="n('detector')"></div>
      </div>
    </div>
  </template>
  <!-- 不需要使用虚拟列表 -->
  <var-list v-else v-bind="props">
    <div v-for="item in dataList" :key="item.id">
      <slot :item="item" :index="item.id"></slot>
    </div>
  </var-list>
</template>

<style lang="scss" scoped></style>
