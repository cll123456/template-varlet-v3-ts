<script lang="ts" setup>
import { IVirtualObject } from '@/components/VirtualList/type'
import { Ref, ref } from 'vue'
const loading = ref(false)
const useVirtual = ref(false)
const finished = ref(false)
const list: Ref<IVirtualObject[]> = ref([])

const load = () => {
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      list.value.push({
        id: list.value.length + 1 + '',
        title: list.value.length + 1,
      })
    }

    loading.value = false

    if (list.value.length >= 110) {
      finished.value = true
    }
  }, 1000)
}
</script>
<template>
  <Header title="fourth" />
  <div class="exclude-h-n-s p-0">
    <VirtualList
      v-model:loading="loading"
      loading-text="正在努力输出"
      finished-text="一滴都没有了"
      error-text="出错了出错了"
      :use-virtual="useVirtual"
      :finished="finished"
      :data-list="list"
      @load="load"
    >
      <template #default="{ item, index }">
        <var-cell :key="index">
          <div>列表项: {{ item.title }}</div>
          <var-divider dashed />
        </var-cell>
      </template>
    </VirtualList>
  </div>
  <Navbar></Navbar>
</template>

<style lang="scss" scoped></style>
