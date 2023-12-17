<template>
    <div id="content">
    <el-dialog
    v-model="dialogVisible"
    title="请选择样式"
    width="50%"
    align-center
  >

  <el-scrollbar>
      <el-table :data="KindsItem" style="width: 100%" :cell-style="{padding:'8px 0',fontSize:'15px'}" max-height="400px">
    <el-table-column label="图片">
      <template #default="scope">
        <el-image :src="scope.row.image" style="width: 50px; height: 50px"/>
        <div class="count" v-show="scope.row.count>0">{{scope.row.count}}</div>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="样式">
    </el-table-column>
    <el-table-column label="价格">
      <template #default="scope">
        <span>￥{{scope.row.price}}元</span>
      </template>
    </el-table-column>
    <el-table-column label="购买数量" prop="count">
      <template #default="{row,$index}">
        <!-- :class="{'forbid':row.count === 0}" -->
        <div class="reduce" :class="{'forbid':row.count === 0}">
        <i  class="iconfont icon-jianshao" :class="{'forbid':row.count === 0}" @click="reduceCount($index)"></i>
        </div>
          <span class="cart-count"> {{ row.count }}</span>
          <i class="iconfont icon-jia" @click="addCount($index)"></i>
      </template>
    </el-table-column>
  </el-table>
  </el-scrollbar>

    <template #footer>
      <div class="dialog-footer">
        <div>
          <span class="message" v-show="allcount > 0">已选择<span class="number">{{ allcount }}</span>件商品,合计:</span>
          <span class="cost" v-show="allcount > 0">￥{{ allcost }}</span>
        </div> 
        <div>
          <el-button type="primary" @click="dialogVisible = false" :class="{'empty':allcount === 0}" :disabled="allcount === 0">加入购物车</el-button>
          <el-button type="success" @click="dialogVisible = false" :class="{'notSettled':allcount === 0}" :disabled="allcount === 0"> 立即下单</el-button>
        </div>
      </div>
    </template>
  </el-dialog>
  </div>
</template>

<script setup>
import { computed, provide, ref } from 'vue'
const dialogVisible = ref(false)
const KindsItem = ref(null)

const showDialog = (Item,index)=>{
    dialogVisible.value = true
    KindsItem.value = Item.kinds
    console.log(KindsItem.value);
}

const addCount = (index)=>{
  KindsItem.value[index].count++
}

const reduceCount = (index)=>{
  KindsItem.value[index].count--
}
defineExpose({
    showDialog
})

const allcount = computed(()=>{
  return (KindsItem.value.reduce((pre,cur)=>pre + cur.count,0));
})

const allcost = computed(()=>{
  return (KindsItem.value.reduce((pre,cur)=>pre + cur.count*cur.price,0));
})

provide('cartCount',allcount)
</script>

<style scoped lang="less">
::v-deep .el-dialog__title{
  font-size: 15px;
  line-height: 54px;
  margin-left: 15px;
}
::v-deep .el-dialog__header{
  padding: 0; 
  margin: 0;
  background-color: rgb(244, 244, 244);   
}

::v-deep .el-dialog__headerbtn{
  top:0;
  padding: 10px 10px
}

::v-deep .el-dialog__body{
  min-height: 100px;
  padding: 0;
}
::v-deep .el-table__header{
  padding: 0;
}

.el-image{
  position: relative;
}
.count{
  background: linear-gradient(90deg,#fc9153,#f01414);
  border-radius: 16px;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  padding: 0 6px;
  text-align: center;
  position: absolute;
  left: 36px;
  top: 3px;
}

.reduce{
  margin-bottom: 2px;
  &.forbid{
    cursor:not-allowed;
  }
}
.iconfont{
  color: #00a0dc;
  font-size: 22px;
  padding: 6px;
  vertical-align: middle;
  cursor: pointer;
  &.forbid{
    color: #a4d4e5;
    pointer-events:none;
  }
}

.cart-count{
  display: inline-block;
  color: #8e8e8e;
  font-size: 10px;
  width: 12px;
  text-align: center;
}

::v-deep .el-dialog__footer{
  padding-top: 20px;
}

.empty{
  border-color: #a0cfff;
  background-color: #a0cfff;
}

.notSettled{
  border-color: rgb(183, 225, 162);
  background-color: rgb(183, 225, 162);
}

.dialog-footer{
  display: flex;
  justify-content: space-between;
  .message{
    line-height: 32px;
    .number{
      font-weight: bold;
      padding: 0 4px;
    }
  }
 
  .cost{
    font-size: 23px;
    color:#f01414;
  }
}
</style>

