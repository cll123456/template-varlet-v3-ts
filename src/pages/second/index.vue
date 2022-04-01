<script lang="ts" setup>
import { ref } from 'vue'
const router = useRouter()
const goBack = () => {
  router.push('/first')
}
</script>
<template>
  <Header title="second" :is-show-go-back="true" @go-back="goBack" />
  <div>second</div>
  <Navbar></Navbar>
</template>

<style lang="scss" scoped></style>
