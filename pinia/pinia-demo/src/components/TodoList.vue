<script setup>
const props = defineProps(['todos', 'addTodo'])
</script>

<template>
    <div>
        <ul>
            <li v-for="todo in todos">
                {{ todo.txt }}
            </li>
        </ul>
        <button type="button" @click="addTodo">添加</button>
    </div>
</template>

<style scoped>

</style>
