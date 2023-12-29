<template>
    <div>
    <div class="card-header">
    <div>
    <!-- <i class="iconfont icon-remen"></i> -->
    <div class="title">{{ food.foodName }}</div>
    </div>
    <div class="more">更多</div>
    </div>
    <div  class="container">
        <div class="card" v-for="item in food.category" :key="item.categoryId">
            <el-card>
                <div class="card-pic">
                <img :src="item.img" alt="" style="width:55%;height: 55%">
                </div>
                <div class="card-container">
                <div class="sellName">{{ item.categoryName }}</div>
                <div class="sellCount">销量<div class="count">{{ item.sellCount }}</div></div>
                <div class="sellPrice">
                    <span class="price"><i>¥</i>{{ item.nowPrice }}<span class="priceText">起</span></span>
                    <span class="oldPrice" v-show="item.oldPrice"><i>¥</i>{{ item.oldPrice }}起</span>
                </div>
                </div>
            </el-card>
        </div>
    </div>
</div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
    food:{
        type:Object,
    }
})
</script>

<style lang="less" scoped>
.container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); /* 自适应列，最小宽度100px */
    grid-gap: 40px;
    width: 100%;
}

.card{
    .el-card{
    width: 250px;
    height: 250px;
    transition: all .3s ease-in-out;
    margin-top: 8px;
    &:hover{
        transform: translateY(-8px);
    }
    }
}

::v-deep(.el-card__body){
    padding: 0;
    padding-top: 6px;
}

.card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3px;
    .title{
    font-weight: 700;
    font-size: 18px;
    position: relative;
    padding: 12px 10px;
    &::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 10px; /* 调整高度以达到期望的胶囊形状 */
      background: linear-gradient(to right, #ff9569 0%, #e92758 100%);
      border-radius: 5px; /* 边框半径，使其呈现胶囊形状 */
      }
    }
    .more{
        font-size: 14px;
        color: rgb(121, 121, 121);
    }
}

.card-pic{
    text-align: center;
}

.card-container{
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    .sellName{
    font-weight: 700;
    padding: 4px 0;
}
.sellCount{
    font-size: 14px;
    color: rgb(174, 174, 174);
    .count{
        display: inline-block;
        padding-left: 2px;
    }
}

.sellPrice{
    padding-top: 10px;
    .price{
        font-size: 20px;
        color: rgb(255, 0, 0);
        i{
            font-size: 20px;
            color: rgb(255, 0, 64);
        }
        .priceText{
            padding-left: 2px;
            font-size: 15px;
        }
    }
    .oldPrice{
        // font-size: 10px;
        color: #9c9c9c;
        font-size: 14px;
        text-decoration: line-through;
        i{
            font-size: 14px;
            padding: 0 0 0 5px;
        }
    }
}
}

</style>