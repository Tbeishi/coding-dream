<template>
    <div>
        <emptyCart/>
        <myCart/>
    </div>
</template>

<script setup>
import myCart from '@/components/myCart/myCart.vue'
import emptyCart from '@/components/emptyCart/emptyCart.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route= useRoute()

onMounted(()=>{
console.log(route.params);
})
</script>