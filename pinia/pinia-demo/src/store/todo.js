//todo 数据管理模块 state actions
import { defineStore } from 'pinia'
// vue3.0 hook 函数
import { ref } from 'vue'

export const useTodoStore = defineStore("todo",()=>{
    const todos = ref([{
        txt:'2024年'
    }])
    const addTodo = ()=>{
        todos.value.push = ({txt:'吃饭'})
        console.log(666);
    }
    return{
        todos,
        addTodo
    }
})