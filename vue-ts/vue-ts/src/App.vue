<script setup lang="ts">
import { onMounted,ref } from 'vue';
import { useBanner } from './api/index'
import type { Banner } from './models/banner'
const banners = ref<Banner[]>([]) //vue的响应式

onMounted(async ()=>{
  banners.value = await useBanner()
  console.log(banners.value);
})
</script>

<template>
  <div>
   <ul>
    <li v-for="banner in banners" :key="banner.targetId">
      <img :src="banner.pic" alt="">
    </li>
   </ul>
  </div>
</template>

<style scoped>
</style>
