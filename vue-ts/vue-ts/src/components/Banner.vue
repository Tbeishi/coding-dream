<template>
     <ul>
    <li v-for="banner in banners" :key="banner.targetId">
      <img :src="banner.pic" alt="">
    </li>
   </ul>
</template>

<script lang="ts" setup>
import { useBannerStore } from '../store/banner'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';

const { banners } = storeToRefs(useBannerStore())
const { getBanners } = useBannerStore()

onMounted(async ()=>{
  await getBanners()
})
</script>

<style scope>
</style>