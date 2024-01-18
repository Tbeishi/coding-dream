<template>
    <div class="cart-wrapper">
        <div class="content">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo" :class="{'highlight': getAllCost > 0}">
                    <i class="iconfont icon-gouwuchefill"></i>
                    </div>
                    <span class="bubble" >
                    <span class="num" v-show="getAllCost">{{ getAllCost }}</span>
                    </span>
                </div>
                <div class="price" :class="{'highlight': getAllCost > 0}">
                    <span>￥{{ getPrice }}</span>
                </div>
                <div class="desc">
                    <span>另需配送费￥4元</span>
                </div>
            </div>
            <div class="content-right" :class="{'highlight': getPrice >= 20}">
                <span>{{ getPrice < 20 ? ( getAllCost > 0 ? `还差￥${20-getPrice}元起送`: '￥20元起送'): '去结算'}}</span>
            </div>
        </div>
        <!-- <cart-detail/> -->
    </div>
</template>

<script>
import CartDetail from '@/components/cart-detail/Cart-Detail.vue'
export default{
  components: { CartDetail },
    data(){
        return{
            costAll:0
        }
    },
    props: {
        costList: {
            type:Array,
            required: true
        },
        cartList:{
            type:Array,
            required: true
        }
    },
    methods: {
    },
   computed:{
    getAllCost(){
        return this.costList.reduce((pre,cur)=> pre + cur,0)
    },
    getPrice(){
        let price = 0
        this.cartList.forEach((cartItem)=>{
            price += cartItem.food.price * cartItem.count
        })
        return price
    }
   }
}
</script>

<style lang="less" scoped>
  .cart-wrapper{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    background: #07111b;
    color: #999;
    .content{
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        z-index: 999;
        .content-left{
            flex:1;
            display: flex;
            align-items: center;
            .logo-wrapper{
                position: relative;
                height: 56px;
                width: 56px;
                top:-6px;
                text-align: center;
                box-sizing: border-box;
                background: #07111b;
                border-radius: 50%;
                margin: 0 12px;
                padding: 6px;
                .logo{
                    height: 44px;
                    text-align: center;
                    line-height: 44px;
                    background: #333;
                    border-radius: 50%;
                    &.highlight{
                     background: #00a0dc;
                     color: #fff;
                    }
                    .iconfont{
                    font-size: 24px;
                    }
                }
                .bubble{
                    background: linear-gradient(90deg,#fc9153,#f01414);
                    border-radius: 16px;
                    color: #fff;
                    font-family: Helvetica;
                    font-size: 10px;
                    font-weight: 700;
                    line-height: 16px;
                    padding: 0 5px;
                    text-align: center;
                    position: absolute;
                    right: 0px;
                    top: 0px;
                }
            }
        
            .price{
                font-size: 16px;
                font-weight: 700;
                border-right: 1px solid hsla(0,0%,100%,.1);
                padding-right: 12px;
                &.highlight{
                color: #fff;
                }
            }
           .desc{
                font-size: 10px;
                line-height: 24px;
                margin-left: 12px;
           }
        }
        .content-right{
            flex:0 0 105px;
            font-size: 12px;
            font-weight: 700;
            line-height: 48px;
            background-color: #333333;
            text-align: center;
            &.highlight{
                background: #00b43c;
                color: #fff;
            }
        }
    }
}
</style>