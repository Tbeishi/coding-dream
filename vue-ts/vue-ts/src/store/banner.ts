// hooks函数
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Banner } from "../models/banner";
import { useBanner } from "../api";
// 仓库的分支，banner
// 专注于数据编程
export const useBannerStore = defineStore('banner',()=>{
    const banners = ref<Banner[]>([])
    const getBanners = async()=>{
        if( banners.value.length) return
       banners.value = await useBanner()
    }
    return {
        banners,
        getBanners
    }
})
