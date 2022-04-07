<script setup lang="ts"></script>
<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transitionName || 'fade'">
      <template v-if="route.meta.keepAlive">
        <keep-alive>
          <div :key="route.path" class="relative">
            <component :is="Component" />
          </div>
        </keep-alive>
      </template>
      <template v-else>
        <div :key="route.path" class="relative">
          <component :is="Component" />
        </div>
      </template>
    </transition>
  </router-view>
</template>

<style>
/* 可以为进入和离开动画设置不同的持续时间和动画函数 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
  position: absolute !important;
  background-color: white;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide_left-enter-active,
.slide_left-leave-active,
.slide_right-enter-active,
.slide_right-leave-active {
  transition: all 0.3s;
  position: absolute !important;
  background-color: white;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}

.slide_left-enter-from,
.slide_right-leave-to {
  opacity: 1;
  transform: translateX(100%);
}

.slide_right-enter-from,
.slide_left-leave-to {
  opacity: 1;
  transform: translateX(-100%);
}

.slide_left-leave-to,
.slide_right-leave-to {
  opacity: 0.3;
}
</style>
