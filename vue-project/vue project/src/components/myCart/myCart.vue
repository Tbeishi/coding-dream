<template>
    <div>
    <el-scrollbar>
    <el-table
    :data="cartList"
    style="width: 100%"
    :cell-style="{padding:'20px 0',fontSize:'15px'}"
    max-height="450px"
    @selection-change="countPay"
  >
    <el-table-column type="selection" />
    <el-table-column label="图片" width="150">
      <template #default="{row}">
        <el-image :src="row.image" style="width: 50px; height: 50px"></el-image>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="名称"/>
    <el-table-column label="单价">
    <template #default="{row}">
        <span>￥{{ row.price}}</span>
    </template>
  </el-table-column>
  <el-table-column label="购买数量">
    <template #default="{row}">
        <el-button type="" plain class="count">x{{ row.count}}</el-button>
    </template>
  </el-table-column>
    <el-table-column label="合计">
    <template #default="{row}">
        <span class="cost">￥{{ row.price*row.count }}</span>
    </template>
  </el-table-column>
  <el-table-column width="100px">

  </el-table-column> 
  </el-table>
</el-scrollbar>
<div class="footer">
<div class="footer-right">
  <div class="total">总计:<span class="pay">￥{{ allPay }}</span></div>
  <div><el-button type="danger" round size="large" @click="open">结算</el-button></div>
</div>
</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
const router = useRouter()
const allPay = ref(0)
const count = ref(0)
defineProps({
  cartList:{
    type:Object,
  }
})

const open = () => {
  if(count.value === 0)
  ElMessage({ type:'error', message:'您还没有选择宝贝哦！'})
  else {
    router.push({name:'pay'})
  }
}

// selection为购物车列表选中的每一项
const countPay = (selection)=>{
  count.value ++
  allPay.value = selection.reduce((pre,cur)=> pre + cur.price*cur.count, 0)
}
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
  }
}

.el-button.is-plain.count{
  line-height: 32px;
  font-size:15px;
  cursor: pointer;
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
  justify-content: flex-end;
  align-items: center;
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
</style>