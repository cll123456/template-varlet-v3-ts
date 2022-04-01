<script setup lang="ts">
const goBack = () => {
  console.log('goBack')
}
</script>
<template>
  <div>
    <Header :is-show-go-back="true" title="标题" @go-back="goBack" />
    <router-view />
    <Navbar></Navbar>
  </div>
</template>

<style></style>
