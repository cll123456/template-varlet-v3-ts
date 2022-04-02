<script lang="ts" setup>
import { usePhysicalBtnRetrun } from '@/hooks/usePhysicalBtnRetrun'
const router = useRouter()
const goBack = () => {
  router.push('/first')
}

usePhysicalBtnRetrun(() => {
  router.push('/first')
})

const arr = ref([
  '移',
  '动',
  '端',
  '物',
  '理',
  '键',
  '和',
  'header',
  '返',
  '回',
  '键',
  '都',
  '返',
  '回',
  '到',
  'first',
  '页',
  '面',
])
</script>
<template>
  <Header title="second" :is-show-go-back="true" @go-back="goBack" />
  <div class="exclude-h-n-s flex flex-wrap justify-center">
    <div
      v-for="(item, index) in arr"
      :key="item + index"
      :class="`var-elevation--${index} flex justify-center items-center h-25vw w-25vw m-2vw `"
    >
      {{ item }}
    </div>
  </div>
  <Navbar></Navbar>
</template>

<style lang="scss" scoped></style>
