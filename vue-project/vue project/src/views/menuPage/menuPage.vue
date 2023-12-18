<template>
  <div>
    <el-card class="card">
    <template #header>
      <div class="card-header">
        <span>零食菜单</span>
        <div>
          <el-button type="primary">分类</el-button>
        </div>
      </div>
    </template>
    <el-table style="width: 100%" 
    :data="formData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" 
    :cell-style="{padding:'8px 0',fontSize:'15px'}"
    >
    <el-table-column prop="name" label="名称"/>
    <el-table-column prop="category" label="类别"/>
    <el-table-column label="图片">
      <template #default="scope">
        <el-image :src="scope.row.img" style="width: 50px; height: 50px"/>
      </template>
    </el-table-column> 
    <el-table-column>
      <template #header>
        <el-input size="small" placeholder="搜索名称或类别" v-model="search"/>
      </template>
      <!-- row - table的每一行数据,类似item -->
      <!-- $index - table的每一行数据的下标 -->
      <template #default="{ row }">
        <el-button type="primary" text bg @click="openDialog(row)">选择样式</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination 
    background
    layout="prev,pager,next,total,jumper"
    :total="formData.length"
    :current-page="currentPage"
    @current-change="handleCurrentChange"
    :page-size="pageSize"
    >
    <!-- hide-on-single-page -->
  </el-pagination>
</el-card>
<cartDialog ref="dialog" @sendData="cartData"/>
</div>
</template>

<script setup>
import { computed, onMounted,ref } from "vue";
import cartDialog from '@/components/cartDialog/cartDialog.vue'
import getData from '@/views/menuPage/menudata.js'
const currentPage = ref(1) //当前页 刷新后默认显示第一页
const pageSize = ref(5) //每一页显示的数据量 此处每页显示5条数据
const dialog = ref(null)
const fooddata = getData()
const search = ref(null)
const emit = defineEmits(['getcart'])

// filter过滤数组，默认不搜索!search.value为true,返回fooddata数据每一项
// 搜索!search.value为false，走||，返回每一项中的名字和分类含有搜索的值
const formData = computed(()=>{
  return fooddata.filter((item)=> !search.value || item.name.includes(search.value) || item.category.includes(search.value))
})

const cartData = (data)=>{
  emit('getcart',data)
}

const openDialog = (row)=>{
  dialog.value.showDialog(row)
}

const handleCurrentChange = (Page) => {
         //每次点击分页按钮，当前页发生变化
    currentPage.value = Page
}

onMounted(()=>{
  document.getElementsByClassName("el-pagination__goto")[0].childNodes[0].nodeValue = "跳转至";
  document.getElementsByClassName("el-pagination__total")[0].childNodes[0].nodeValue = `共${fooddata.length}种商品`;
}) 

</script>

<style scoped lang="less">
.card{
    height: 100%;
    .card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-pagination.is-background{
    padding: 15px 0;
    justify-content: center;
  }
}

.el-card ::v-deep(.el-card__body){
  padding: 0;
}

::v-deep(.el-table__cell){
  padding: 15px 10px;
  .cell{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

::v-deep(.el-table__inner-wrapper){
  height: 389px;
}
</style>