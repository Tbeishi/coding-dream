<template>
    <div>
    <el-scrollbar>
    <el-table
    :data="CartStore.Cartdata"
    style="width: 100%"
    :cell-style="{padding:'20px 0',fontSize:'15px'}"
    max-height="450px"
    @selection-change="countPay"
    ref = "table"
  >
  <el-table-column width="70">
    <template #default="{$index}">
      <el-checkbox v-model="checkedList[$index]"></el-checkbox>
    </template>
  </el-table-column>
    <el-table-column label="图片" width="150">
      <template #default="{row}">
        <el-image :src="row.image" style="width: 50px; height: 50px"></el-image>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="名称"/>
    <el-table-column label="单价">
    <template #default="{row}">
        <span>¥{{ row.price}}</span>
    </template>
  </el-table-column>
  <el-table-column label="购买数量">
    <template #default="{row,$index}">
        <i class="iconfont icon-jianshao" @click="reduce(row)" :class="{'showjian': animationList[$index].show,'returnjian': animationList[$index].disapper}"></i>
        <el-input type="button" size="default" style="width:42px" class="count" @click="changeAnimation($index)" v-model="row.count"/>
        <i class="iconfont icon-jia" @click="row.count++" :class="{'showjia': animationList[$index].show,'returnjia': animationList[$index].disapper}"></i>
    </template>
  </el-table-column>
    <el-table-column label="合计">
    <template #default="{row}">
        <span class="cost"><i>¥</i>{{ row.price*row.count }}</span>
    </template>
  </el-table-column>
  <el-table-column width="100px">
    <template #header>
      <el-icon><Grid /></el-icon>
    </template>
  </el-table-column> 
  </el-table>
</el-scrollbar>
<div class="footer">
<div class="footer-left">
  <el-checkbox size="large" @change="checkAll" v-model="checked"/>
  <div @click="checkAll" style="margin-left: 5px;">全选</div>
</div>
<div class="footer-right">
  <div class="total">总计:<span class="pay"><i>¥</i>{{ allPay }}</span></div>
  <div><el-button type="danger" round size="large" @click="open">结算</el-button></div>
</div>
</div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
import { useCartStore } from '@/store/cart'
import { Grid } from '@element-plus/icons-vue'

const CartStore = useCartStore()
const router = useRouter()
const count = ref(0) 
const table = ref(null)
const checkedList = ref([])
const checked = ref(false)
const animationList = ref([])
const clickedItem = ref() 
CartStore.cartNameList.forEach(() => {
  checkedList.value.push(false)
  animationList.value.push({show:false, disapper:false})
});

const changeAnimation = (index)=>{
  animationList.value[index].show = true
  if(clickedItem.value >= 0){
    animationList.value[clickedItem.value].show = false
    animationList.value[clickedItem.value].disapper = true
  }
  clickedItem.value = index
  animationList.value[clickedItem.value].disapper = false
}

const open = () => {
  if(count.value === 0)
  ElMessage({ type:'error', message:'您还没有选择宝贝哦！'})
  else {
    router.push({name:'pay'})
  }
}

const reduce = (row) => {
  if(row.count > 1)
  row.count--
}

const checkAll = ()=>{
  const flag = checkedList.value.every((item)=> item === true)
  if(!flag){
    for(let i=0; i<checkedList.value.length ; i++){
    checkedList.value[i] = true
  }
}
  else{
    for(let i=0; i<checkedList.value.length ; i++){
    checkedList.value[i] = !checkedList.value[i]
  }
}
}

//监听商品是否被全选，是则全选按钮自动选上，反之，取消选上
 watch(checkedList.value, (newVal,oldVal) => {
      if(!newVal.includes(false)){
        checked.value = true
      }
      else{
        checked.value = false
      }
})

//计算购物车被选物品的总价
const allPay = computed(()=>{
  let res = 0
  checkedList.value.forEach((item,index)=>{
    if(item === true){
      res += CartStore.Cartdata[index].price * CartStore.Cartdata[index].count
    }
  })
  return res
})
</script>

<style lang="less" scoped>
::v-deep(.el-table__header){
  padding: 0;
  .cell{
    font-weight: 700;
    color:rgb(88, 88, 88)
  }
}

::v-deep(.el-table__cell){
  padding: 15px 10px;
  .cell{
    font-size:18px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .iconfont{
    position: absolute;
    top: 0;
    left: 66px;
    color: #00a0dc;
    font-size: 22px;
    padding: 5px 0;
    transition: all .5s;
    }
  }
}

::v-deep(.el-checkbox__inner){
  border: 1px solid rgb(164, 164, 164);
  margin-left: 20px;
}

::v-deep(.el-table__header .el-table-column--selection .el-checkbox__inner) {
display: none;
pointer-events:none;
}

::v-deep(.footer-left .el-checkbox__inner) {
  width: 18px;
  height: 18px;
  border: 1px solid rgb(164, 164, 164);
}

@keyframes showjianshao{
  0%{opacity: 0;};
  60%{opacity: 0.5;};
  100%{opacity: 1;transform: translate(-40px) rotate(360deg);}
}

@keyframes showjia{
  0%{opacity: 0;};
  60%{opacity: 0.5;};
  100%{opacity: 1;transform: translate(40px) rotate(360deg);}
}

@keyframes returnjianshao{
  0%{opacity: 1;transform: translate(-40px) rotate(360deg)};
  60%{opacity: 0.5;};
  100%{opacity: 0;}
}

@keyframes returnjia{
  0%{opacity: 1;transform: translate(40px) rotate(360deg)};
  60%{opacity: 0.5;};
  100%{opacity: 0;}
}
.showjian{
  animation: showjianshao 1.3s ease forwards;
}
.returnjian{
  animation: returnjianshao 1.3s ease forwards;
}
  
.showjia{
  animation: showjia 1.3s ease forwards;
}
.returnjia{
  animation: returnjia 1.3s ease forwards;
}

.el-input{
  line-height: 32px;
  font-size:15px;
  cursor: pointer;
  z-index: 5;
}

.cost{
  font-size: 20px;
  color:#f01414;
}

.footer{
  width: 100%;
  height: 72px;
  background-color: rgb(238, 238, 238);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footer-left{
    display: flex;
    margin-left: 16px;
    font-size:15px;
    color:#7f7f7f;
    align-items: center;
  }
  .footer-right{
    display: flex;
    align-items: center;
    .el-button{
      margin: 30px;
      width: 100px;
    }
  }
  .total{
    .pay{
  font-size: 30px;
  color:#f01414;
  }
  }
}

.footer-left ::after{
  width: 5px;
  height: 10px;
  translate: 1px;
}
</style>