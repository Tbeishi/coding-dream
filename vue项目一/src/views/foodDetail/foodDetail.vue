<template>
    <h3 class="title">商品详情</h3>
    <div class="container">
        <div class="container-left">
        <div class="pic-container">
        <div class="bigPic">
        <el-image :src="curFood.image" style="height: 100%;"></el-image>
        </div>
        <div class="samllPic-container">
        <div class="samllPic" 
        v-for="(item,index) in selectedFood.kinds" 
        :key="item.kindsId"
        :class="{'active':curIndex === index}"
        @click = "handle(item,index)"
        >
        <el-image :src="item.image" style="height: 100%;"></el-image>
        </div>
        </div>
        </div>
        </div>
        <div class="container-right">
            <h4>名称：{{ selectedFood.categoryName }}</h4>
            <p>规格：<span class="kinds">{{ curFood.categoryName }}</span></p>
            <p>单价：<i>¥</i><span class="newPrice">{{ curFood.price }}</span></p>
            <p >购买数量：
                <i class="iconfont icon-jianshao" 
                :class="{'forbid':curFood.count === 0}"
                @click="curFood.count > 0 && curFood.count--"
                ></i>
                <span class="buyCount">{{ curFood.count }}</span>
                <i class="iconfont icon-jia" @click="curFood.count++"></i>
            </p>
            <div class="btn">
                <el-button type="primary" :class="{'empty':curFood.count === 0}">加入购物车</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted,ref,toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { usefoodDetail } from '@/store/foodDetail'
const { selectedFood } = toRefs(usefoodDetail())
const route = useRoute()
const res =ref()
const curIndex = ref(0)
const curFood = ref(selectedFood.value.kinds[0])
onMounted(()=>{
    res.value = route.params.id
})

const handle = (item,index)=>{
    curIndex.value = index
    curFood.value = item
}
</script>

<style scoped lang="less" >
.title{
    margin-top: 20px;
    margin-bottom: 30px;
}
.container{
    display:flex;
    .container-left{
    
    .pic-container{
        display: flex;
        .bigPic{
        width: 400px;
        height: 400px;
        transition: all .3s;
        }
        .samllPic-container{
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-wrap: wrap;
            // align-items: center;
            align-items: start;
            margin-left: 10px;
            .samllPic{
            margin: 0 5px;
            width: 60px;
            height: 60px;
            border: 0.5px solid #d9d9d9;
            &.active{
            border: 1px solid rgb(255, 3, 3)
            }
        }
        }
       
    }
    }
   .container-right{
    margin-left: 40px;
    h4{
        font-size: 20px;
        font-weight: 500;
        line-height: 40px;
        color: #4a4a4a;
    }
    p{
        line-height: 40px;
        color: #4e4e4e;
        font-size: 15px;
        .kinds{
            color: #959595;
        }
        i{
            color: rgb(255, 0, 0);
            font-size: 13px;
        }
        .iconfont{
            display: inline-block;
            color: #00a0dc;
            font-size: 22px;
            transform: translateY(3px);
            cursor: pointer;
            &.forbid{
            cursor:not-allowed;
            color: #a4d4e5;
            } 
        }
        .buyCount{
            display: inline-block;
            line-height: 43px;
            margin: 0 10px;
        }
        .newPrice{
            color: rgb(255, 0, 0);
            font-size: 18px;
        }
    }

    .btn{
        margin-top: 15px;
        cursor: pointer;
        .empty{
        cursor:not-allowed;
        border-color: #a0cfff;
        background-color: #a0cfff;
        }
    }
   }
}
</style>