<script setup lang="ts">
import { ref, reactive, Ref } from 'vue'
import Navbar, { INavbar } from './components/Navbar/index.vue'

const tableList: Ref<INavbar[]> = ref([
  {
    title: 'First',
    logo: 'i-mdi-home-floor-1',
    links: { name: 'Home', url: '/first' },
  },
  {
    title: 'Second',
    logo: 'i-mdi-home-floor-2',
    links: { name: 'Home', url: '/second' },
  },
  {
    title: 'Third-long-long-long-name',
    logo: 'i-mdi-home-floor-3',
    links: { name: 'Home', url: '/third' },
  },
  {
    title: 'Fourth',
    logo: 'i-mdi-numeric-4-box-outline',
    links: { name: 'Home', url: '/fourth' },
  },
  {
    title: 'Fifth',
    logo: 'i-mdi-numeric-5-box-outline',
    links: { name: 'Home', url: '/fifth' },
    badge: {
      value: 2,
    },
  },
])
</script>

<template>
  <div>
    <var-app-bar title="标题" />
    <router-view />
    <Navbar :table-list="tableList"></Navbar>
  </div>
</template>

<style></style>
