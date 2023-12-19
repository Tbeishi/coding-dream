<template>
    <div>
        <emptyCart v-if="CartStore.Cartdata.length === 0"/>
        <myCart v-else/>
    </div>
</template>

<script setup>
import myCart from '@/components/myCart/myCart.vue'
import emptyCart from '@/components/emptyCart/emptyCart.vue'
import { useCartStore } from '@/store/cart'
const CartStore = useCartStore()
</script>