<template>
    <div>
        <el-tabs class="demo-tabs" v-model="data">
         <el-tab-pane label="全部" name="first">
            <el-empty description="暂无订单信息" image-size="200"/>
         </el-tab-pane>
         <el-tab-pane label="待付款" name="second">
            <el-empty description="暂无付款信息" image-size="200"/>
         </el-tab-pane>
         <el-tab-pane label="退款" name="third">
            <el-empty description="暂无退款信息" image-size="200"/>
         </el-tab-pane>
         <el-tab-pane label="待评价" name="fourth">
            <el-empty description="暂无相关订单信息" image-size="200"/>
         </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const data = ref('first')
</script>

<style lang="less" scoped>
::v-deep(.el-tabs__nav-scroll){
    display: flex;
    justify-content: space-between;

}
</style>