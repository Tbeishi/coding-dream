<template>
    <div class="content">
      <el-card class="box-card">
      <template #header>
      <div class="card-header">
        <span>购物车</span>
        <el-button class="button" type='primary' text='primary'>
          <div @click="manage=!manage" :class="{'manage': manage===true}" style="display: flex;align-items: center;">
          <el-icon size="20" ><Grid /></el-icon>
          <span style="font-size: 13px">{{manage ?'退出管理':'管理'}}</span>
          </div>
        </el-button>
      </div>
    </template>
    <el-scrollbar height="468.7px">
    <el-table
    :data="CartStore.Cartdata"
    style="width: 100%"
    :cell-style="lastRowStyle"
    ref = "table"
    :header-cell-style="{background:'rgb(213, 213, 213)'}"
  >
  <el-table-column width="70">
    <template #default="{$index}">
      <el-checkbox v-model="checkedList[$index]"></el-checkbox>
    </template>
  </el-table-column>
    <el-table-column label="商品信息" width="299">
      <template #default="{row}">
      <div class="Foodmessage">
        <el-image :src="row.image" class="image"></el-image>
        <div class="more">
          <div style="font-size: 15px;font-weight: 700;">{{ row.Foodname }}</div>
          <div style="font-size: 12px;color:rgb(148, 148, 148)">样式:{{ row.name }}</div>
        </div>
      </div>
      </template>
    </el-table-column>
    <el-table-column label="单价">
    <template #default="{row}">
        <span>¥{{ row.price}}</span>
    </template>
  </el-table-column>
  <el-table-column label="购买数量">
    <template #default="{row,$index}">
        <i class="iconfont icon-jianshao" @click="reduce(row)" :class="{'showjian': animationList[$index].show,'returnjian': animationList[$index].disapper,'forbid':row.count === 1}"></i>
        <el-input type="button" size="default" style="width:42px" class="count" @click="changeAnimation($index)" v-model="row.count"/>
        <i class="iconfont icon-jia" @click="row.count++" :class="{'showjia': animationList[$index].show,'returnjia': animationList[$index].disapper}"></i>
    </template>
  </el-table-column>
    <el-table-column label="合计">
    <template #default="{row}">
        <span class="cost"><i>¥</i>{{ row.price*row.count }}</span>
    </template>
  </el-table-column>
  <el-table-column width="117px">
    <template #default="{$index}">
        <i class="iconfont icon-jianhao" @click="deleteCart($index)" :class="{'move':manage === true,'disappear':manage === false}"></i>
    </template>
  </el-table-column>
  </el-table>
  <div class="fixFooter" >不好意思，已经到底了喔~</div> 
</el-scrollbar>
</el-card>



<div class="footer Deletefooter" :class="{'showDelete':manage === true,'disappearDelete':manage === false}">
  <div class="footer-left">
    <el-checkbox size="large" @change="checkAll" v-model="checked"/>
    <div div @click="checkAll" style="margin-left: 5px">全选</div>
  </div>
  <div class="footer-right">
    <el-button type="danger" round size="large" @click="deleteHandel">
      <i class="iconfont icon-shanchu"></i>
      <span>删除</span>
    </el-button>
  </div>
</div>

<div class="footer payfooter" :class="{'disappearPay':manage === true,'showPay':manage === false}">
  <div class="footer-left">
    <el-checkbox size="large" @change="checkAll" v-model="checked"/>
    <div div @click="checkAll" style="margin-left: 5px">全选</div>
  </div>
  <div class="footer-right">
    <div class="total">总计:<span class="pay"><i>¥</i>{{ allPay }}</span></div>
    <div><el-button type="success" round size="large" @click="open">结算</el-button></div>
  </div>
</div>

</div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
import { useCartStore } from '@/store/cart'
import { Grid } from '@element-plus/icons-vue'

const CartStore = useCartStore()
const router = useRouter()
const table = ref(null)
const checkedList = ref([])
const checked = ref(false)
const animationList = ref([])
const clickedItem = ref() 
const manage = ref()
const showFootFixed = ref(false)
const scroll = ref()

CartStore.cartNameList.forEach(() => {
  checkedList.value.push(false)
  animationList.value.push({show:false, disapper:false})
});

//动画的出现和隐藏
const changeAnimation = (index)=>{
  animationList.value[index].show = true
  if(clickedItem.value >= 0){
    animationList.value[clickedItem.value].show = false
    animationList.value[clickedItem.value].disapper = true
  }
  clickedItem.value = index
  animationList.value[clickedItem.value].disapper = false
}

const lastRowStyle = ({ rowIndex })=>{
  if(CartStore.Cartdata.length > 4 && rowIndex === CartStore.Cartdata.length - 1){
    return {padding:'20px 0',fontSize:'15px'}
  }
  else{
    return {padding:'20px 0',fontSize:'15px'}
  }
}

const open = () => {
  if(!checkedList.value.includes(true))
  ElMessage({ type:'error', message:'您还没有选择宝贝哦！'})
  else {
    CartStore.payList = CartStore.Cartdata.filter((item,index)=>{
      if(checkedList.value[index]===true){
        return item
      }
    })
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
 watch(checkedList.value, (newVal) => {
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

//滚动监听
const scrollhandle = ()=>{
  const flag = scroll.value.wrapRef.scrollHeight - scroll.value.wrapRef.scrollTop - scroll.value.wrapRef.clientHeight <= 72
  console.log(flag);
  if(flag) showFootFixed.value = true
  else {
    showFootFixed.value = false
  }
}

//点击图标➖删除该列商品信息
const deleteCart = (index)=>{
  if(CartStore.Cartdata.length===1)CartStore.Cartcount=0
  CartStore.cartNameList.splice(index,1)
  CartStore.Cartdata.splice(index,1)
  checkedList.value.splice(index,1)
  animationList.value.splice(index,1)
}

//监听购物车列表商品数量变化
watch(CartStore.Cartdata,(newvalue)=>{
    CartStore.Cartcount = newvalue.reduce((pre,cur)=>pre + cur.count,0)
})

//点击删除，删除所有勾选的商品信息
const deleteHandel = ()=>{
  let length = checkedList.value.length
  for(let i = 0 ;i < length ;i++){
    if(checkedList.value[i] === true){
      CartStore.cartNameList.splice(i,1)
      CartStore.Cartdata.splice(i,1)
      animationList.value.splice(i,1)
      checkedList.value.splice(i,1)
      i--
      length--
    }
  }
  if(length === 0){ CartStore.Cartcount=0}
}
</script>

<style lang="less" scoped>
.card-header{
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  align-items: center;
}

::v-deep(.el-card__header){
  padding: 10px 20px;
}

::v-deep(.el-card__body){
  padding: 0;
}

.scroll-wrapper{
  height: 520px;
  overflow: hidden;
}

.Foodmessage{
  display: flex;
  justify-content: space-between;
  width: 80%;
  transform: translateX(35px);
  .image{
    height: 50px;
    width: 50px;
  }
  .more{
    display: flex;
    margin-left: 5px;
    flex:1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}

::v-deep(.el-table__header){
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
    .iconfont.icon-jianshao{
    position: absolute;
    top: 0;
    left: 63px;
    color: #00a0dc;
    font-size: 22px;
    padding: 5px 0;
    transition: all .5s;
    &.forbid{
    cursor:not-allowed;
    color: #a4d4e5;
    } 
    }
    .iconfont.icon-jia{
      position: absolute;
      top: 0;
      left: 62px;
      color: #00a0dc;
      font-size: 22px;
      padding: 5px 0;
      transition: all .5s;
    }
  }
}

::v-deep(.el-table__row){
  z-index: 4;
}

.manage{
  color: #f01414;
}

.iconfont.icon-jianhao{
  color:#f01414;
  font-size: 20px;
  transition: all .3s;
  opacity: 0;
  &.move{
    animation: showjianhao 0.6s ease forwards;
  }
  &.disappear{
    animation: disappearjianhao 0.3s ease forwards;
  }
}

@keyframes showjianhao{
  0%{transform: translateX(68.5px);opacity: 0};
  70%{opacity: 0.6;}
  100%{transform: translateX(px);opacity: 1;}
}

@keyframes disappearjianhao{
  0%{transform: translateX(0px);opacity: 1;};
  50%{opacity: 0.2;}
  100%{transform: translateX(68.5px);opacity: 0;}
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
  position: fixed;
  width: 924px;
  height: 72px;
  background-color: rgb(226, 226, 226);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .3s;
  opacity: 1;
  bottom: 20px;
  z-index: 999;
  &.showPay{
    animation:appear 0.3s ease forwards;
  }
  &.disappearPay{
    animation:disappear 0.6s ease forwards;
  }
  &.showDelete{
    animation:appear 0.6s ease forwards;
  }
  &.disappearDelete{
    animation:disappear 0.3s ease forwards;
  }
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

@keyframes disappear {
  0%{opacity: 1}
  50%{opacity: 0.2;}
  100%{opacity: 0;transform: translateY(100px)}
}

@keyframes appear {
  0%{opacity: 0;transform: translateY(100px);}
  50%{opacity: 0.2;}
  70%{opacity: 0.6;}
  100%{opacity: 1;}
}

.footer-left ::after{
  width: 5px;
  height: 10px;
  translate: 1px;
}

.fixFooter{
  height: 72px;
  width: 924px;
  color: rgb(115, 115, 115);
  bottom: 20px;
  text-align: center;
  line-height: 72px;
}
</style>