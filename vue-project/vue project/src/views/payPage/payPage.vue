<template>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>确认订单</span>
          <!-- <el-button class="button" text>Operation button</el-button> -->
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
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
</style>