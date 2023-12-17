<template>
    <div>
    <el-table
    style="width: 100%"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="Date" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="name" label="Name" width="120" />
    <el-table-column property="address" label="Address" show-overflow-tooltip />
  </el-table>
  <div style="margin-top: 20px">
    <el-button
      >Toggle selection status of second and third rows</el-button
    >
    <el-button>Clear selection</el-button>
  </div>
    </div>
</template>