<template>
   <el-card class="card">
    <template #header>
      <div class="card-header">
        <span>食品菜单</span>
        <el-button type="primary">加入购物车</el-button>
      </div>
    </template>
    <el-table  style="width: 100%">
    <el-table-column label="名称"/>
    <el-table-column label="图片"/>
    <el-table-column label="价格"/>
    <el-table-column label="数量"/>
    <el-table-column>
      <template #header>
        <el-input  size="small" placeholder="搜索食品"/>
      </template>
      <template #default="">
        <el-button size="small" 
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
   </el-card>
</template>

<style scoped>
.card{
    height: 100%;
}

.card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-card{
}
</style>