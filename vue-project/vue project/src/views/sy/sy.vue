<template>
    <el-carousel :interval="5000" height="400px" pause-on-hover>
    <el-carousel-item v-for="item in data" :key="item.id">
      <el-image :src="item.url"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
const data = [
    {
        id: 1,
        name:"可爱多",
        url:"/src/assets/picture/可爱多.jpg",
    },
    {
        id: 2,
        name:"溜溜梅",
        url:"/src/assets/picture/溜溜梅.jpg"
    },
    {
        id: 3,
        name:"奥利奥",
        url:"/src/assets/picture/奥利奥.jpg"
    },
    {
        id: 4,
        name:"麻辣王子",
        url:"/src/assets/picture/麻辣王子.jpg"
    }
]
</script>

<style scoped lang="less">
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>