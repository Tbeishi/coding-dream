<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';
import { usePersonalizedStore } from './store/personalized'
import Banner from './components/Banner.vue'

const { PersonalizedMv } = storeToRefs(usePersonalizedStore())
const { getPersonalizedMv } = usePersonalizedStore()
onMounted(async ()=>{
  await getPersonalizedMv()
})
</script>

<template>
  <div>
    <Banner/>
   <ul>
        <li v-for="Mv in PersonalizedMv" :key="Mv.Id">
          <img :src="Mv.picUrl" alt="">
          <div>{{ Mv.name }}</div>
        </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
