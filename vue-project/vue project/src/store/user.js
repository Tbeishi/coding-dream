import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user',()=>{
    const user = ref('')
    const count = ref(0)
    return {
        user, //记录用户名
        count //记录进入首页次数
    }
},{
    persist:true,
})

