<template>
    <div class="foodDetail">
    <h3 class="title">
        <i class="iconfont icon-xiangqing"></i>
        <span>商品详情</span>
    </h3>
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
                :class="{'forbid':buyCount === 0}"
                @click="buyCount > 0 && buyCount--"
                ></i>
                <span class="buyCount">{{ buyCount }}</span>
                <i class="iconfont icon-jia" @click="buyCount++"></i>
            </p>
            <div class="btn">
                <el-button type="primary" 
                :class="{'empty':buyCount === 0}" 
                @click="addCart"
                :disabled="buyCount === 0">加入购物车</el-button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref,toRefs } from 'vue';
import { usefoodDetail } from '@/store/foodDetail'
import { useCartStore } from '@/store/cart'
const { selectedFood } = toRefs(usefoodDetail())
const  CartStore  = useCartStore()
const buyCount = ref(0)
const curIndex = ref(0)
const curFood = ref(selectedFood.value.kinds[0])

const handle = (item,index)=>{
    curIndex.value = index
    curFood.value = item
    buyCount.value = 0
}

const addCart = ()=>{
    const id = curFood.value.kindsId
    if(!CartStore.cartNameList.includes(id)){
        CartStore.cartNameList.push(id)
        curFood.value.name = selectedFood.value.categoryName
        curFood.value.count = buyCount.value
        CartStore.Cartdata.push(curFood.value)
    }
    else{
        const index = CartStore.cartNameList.indexOf(id)
        CartStore.Cartdata[index].count += buyCount.value
    }
}
</script>

<style scoped lang="less" >
.foodDetail{
    margin: 0 50px;
}

.title{
    margin-top: 20px;
    margin-bottom: 30px;
    line-height: 36px;
    i{
        font-size: 20px;
        margin-right: 5px;
        color: rgb(255, 255, 255);
        padding: 8px;
        border-radius: 50%;
        background: linear-gradient(to right, #ff9569 0%, #e92758 100%);
    }
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
            justify-content: start;
            flex-wrap: wrap;
            align-items: start;
            margin-left: 10px;
            .samllPic{
            margin: 0px 5px 25px 5px;
            width: 60px;
            height: 60px;
            border: 0.5px solid #d9d9d9;
            &.active{
            border: 1px solid rgb(255, 3, 3)
            }
            &:nth-child(5n){
                margin-bottom: 0;
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