<script setup lang="ts">
import { ref, reactive, Ref } from 'vue'
</script>

<template>
  <div>
    <var-app-bar title="标题" />
    <router-view />
    <Navbar></Navbar>
  </div>
</template>

<style></style>
