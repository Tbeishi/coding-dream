<template>
  <div>
    <el-card class="box-card" style="height: 520px;" :body-style="{ height: '400px',padding:'0'}">
      <template #header>
        <div class="card-header">
          <span>确认订单</span>
          <!-- <el-button class="button" text>Operation button</el-button> -->
        </div>
      </template>
      <el-scrollbar height="520px">
      <div v-for="item in CartStore.payList" :key="item.id" class="cardBody">
        <el-card :body-style="{ padding: '0px' }" class="card">
          <el-image  :src="item.image" style="height: 80px;margin: 4px 0 4px 4px"/>
        <div class="allPay">
          <i>¥{{ item.count*item.price }}</i>
        </div>
        </el-card>
      </div>
    </el-scrollbar>
      <template #footer>
        <div class="footer">
            <div class="footerMessage">
            <span class="count">共1件</span>
            <span class="total">合计:<i>¥</i><span class="pay">18</span></span>
            <div class="welfare">10元<i>¥</i>共减</div>
            </div>
            <el-button type="danger">提交订单</el-button>
        </div>
      </template>
    </el-card>
  </div>
  </template>

<script setup>
import { onMounted } from "vue";
import { useCartStore } from '@/store/cart'

const CartStore = useCartStore()
onMounted(()=>{
    console.log(CartStore.payList);
})
</script>

<style lang="less" scoped>
.footer{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .total{
        padding: 0 12px 0 3px;
        // font-weight: 700;
        .pay{
            font-size: 25px;
            color: rgb(255, 0, 0);
        }
    }
    i{
        color: rgb(255, 0, 0);
        font-size:11px;
        }
    .count{
        font-size: 13px;
        color:rgb(164, 164, 164)
    }
    .welfare{
        display: flex;
        flex-direction:row-reverse;
        padding-right: 12px;
        color: rgb(255, 0, 0);
        font-size: 12px;
        i{
            font-size: 10px;
            padding: 0 2px;
        }
    } 
}

::v-deep(.el-card__footer){
  padding: 10px 20px 10px 0;
}

.cardBody ::v-deep(.el-card__body){
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cardBody{
  margin:  0 20px;
}

.card{
  margin-top: 8px;
  width: 100%;
  // display: flex;
  // justify-content: space-between;
  .allPay{
    margin-right: 20px;
    color: red;
  }
}
</style> 
