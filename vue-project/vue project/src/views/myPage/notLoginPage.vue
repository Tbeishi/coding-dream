<template>
    <div>
        不好意思，您还没有登录喔！
        <el-button type="success" @click="router.push({name:'login'})">
            去登录
        </el-button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>