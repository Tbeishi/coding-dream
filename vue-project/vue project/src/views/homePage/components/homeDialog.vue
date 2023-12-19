<template>
    <div>
    <el-dialog
    v-model="dialogVisible"
    width="50%"
    align-center
    title="新用户福利"
  >
  <div class="message">{{ !UserStore.user ?'新用户注册立送10元无门槛优惠券！': '恭喜您获得10元无门槛优惠券！'}}</div>

    <template #footer>
      <div class="dialog-footer">
        <el-button type="success" @click="router.push({name:'login'})" v-if="!UserStore.user">去注册</el-button>
        <el-button type="success" v-else @click="dialogVisible = false">确认</el-button>
      </div>
    </template>
  </el-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user'

const UserStore = useUserStore()
const router = useRouter()
const dialogVisible = ref(false)
const showDialog = ()=>{
    dialogVisible.value = true
}

defineExpose({
    showDialog,
})
</script>

<style scoped>
.message{
    text-align: center;
    font-size: 20px;
    color: red;
}
</style>