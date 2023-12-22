<script setup>
//已组件为开发单元
import { ref } from 'vue'
// const todos = ref([
//   {text:'haha'}
// ])
import { storeToRefs } from 'pinia'
import { useTodoStore } from './store/todo'
import TodoList from './components/TodoList.vue'
const TodoStore = useTodoStore()
// const { todos,addTodo } = storeToRefs(TodoStore)

// console.log(TodoStore.todos);
defineProps({
})
</script>

<template>
  <div>
    <TodoList :todos="TodoStore.todos" :addTodo="TodoStore.addTodo"/>
  </div>
</template>

<style scoped>
</style>
