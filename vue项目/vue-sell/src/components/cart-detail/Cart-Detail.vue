<template>
    <div class="shop-cart-container">
        <div class="shop-cart-mask">
            <div class="list-header">
                <h1 class="title">购物车</h1>
                <span class="empty">清空</span>
            </div>
            <div class="shop-cart-list">
                <ul>
                    <li>
                        <span class="name">皮蛋瘦肉粥</span>
                        <span>10元</span>
                    </li>
                    <li>
                        <span class="name">皮蛋瘦肉粥</span>
                        <span>10元</span>
                    </li> <li>
                        <span class="name">皮蛋瘦肉粥</span>
                        <span>10元</span>
                    </li> <li>
                        <span class="name">皮蛋瘦肉粥</span>
                        <span>10元</span>
                    </li> <li>
                        <span class="name">皮蛋瘦肉粥</span>
                        <span>10元</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    
}
</script>

<style lang="less" scoped>
.shop-cart-container{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    bottom: 0;
    background-color: #07111b;
    opacity: .6;
    overflow: hidden;
    pointer-events: auto;
    .shop-cart-mask{
        position: absolute;
        bottom: 0;
        height: 200px;
        opacity: 1;
        width: 100%;
        .list-header{
            background: #f3f5f7;
            height: 40px;
            line-height: 40px;
            padding: 0 18px;
            .title{
                color: #333;
                float: left;
                font-size: 14px;
            }
            .empty{
                color: #00a0dc;
                float: right;
                font-size: 12px;
            }
        }
        .shop-cart-list{
            background: #fff;
            max-height: 217px;
            overflow: hidden;
            padding: 0 18px;
        }
    }
}
</style>