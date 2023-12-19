<template>
  <div>
    <el-carousel :interval="5000" height="400px" pause-on-hover>
    <el-carousel-item v-for="item in data" :key="item.id">
      <el-image :src="item.url" style="width:100%"/>
    </el-carousel-item>
  </el-carousel>
  <homeDialog ref="Dialog"/>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import getHomeData from './homeData.js';
import homeDialog from './components/homeDialog.vue'
import { useUserStore } from '@/store/user'

const UserStore = useUserStore()
const data = getHomeData()
const Dialog = ref(null)
onMounted(()=>{
  if(UserStore.count < 1){
    UserStore.count ++
    Dialog.value.showDialog()
  }
})

</script>

<style scoped lang="less">
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>