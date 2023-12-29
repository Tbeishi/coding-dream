<template>
    <homePlayPic/>
    <div class="card-container">
        <radiusCard v-for="card in cardData" :key="card.id" :card="card"/>
    </div>
    <foodCard v-for="food in foodData" :key="food.foodId" :food="food"/>
</template>

<script setup>
import foodCard from '@/components/foodCard/foodCard.vue'
import { onMounted, ref } from 'vue'
import  getData  from './foodData'
import homePlayPic from '@/components/homePlayPic/homePlayPic.vue'
import radiusCard from '@/components/radiusCard/radiusCard.vue'
import getCardData from './cardData'
const foodData = ref([])
const cardData = ref([])
onMounted(()=>{
foodData.value = getData()
cardData.value = getCardData()
})
</script>

<style lang="less" scoped>
.card-container{
    height: 120px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
}
</style>