<template>
    <div>
        <emptyCart v-if="cartData.length === 0"/>
        <myCart v-else :cartList="cartData"/>
    </div>
</template>

<script setup>
import myCart from '@/components/myCart/myCart.vue'
import emptyCart from '@/components/emptyCart/emptyCart.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route= useRoute()
const cartData = ref([])
onMounted(()=>{
    cartData.value = JSON.parse(route.params.cartData)
})
</script>