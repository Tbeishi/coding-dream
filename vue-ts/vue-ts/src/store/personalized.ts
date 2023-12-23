// hooks函数
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Personalized } from '../models/Personalized.ts'
import { usePersonalized } from "../api";
// 仓库的分支，Personalized
// 专注于数据编程
export const usePersonalizedStore = defineStore('Personalized',()=>{
    const PersonalizedMv = ref<Personalized[]>([])
    const getPersonalizedMv = async()=>{
        if( PersonalizedMv.value.length) return
        PersonalizedMv.value = await usePersonalized()
    }
    return {
        PersonalizedMv,
        getPersonalizedMv
    }
})
