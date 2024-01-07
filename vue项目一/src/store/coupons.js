import { defineStore } from "pinia"
import { ref } from "vue"
import  getCouponsData  from './couponsData'

export const useCouponsStore = defineStore('coupons',()=>{
    const couponsList = ref(getCouponsData())
    return {
        couponsList
    }
},{
    persist:true,
})