<template>
    <div class="cart-wrapper">
        <div class="content">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo">
                    <i class="iconfont icon-gouwuchefill"></i>
                    </div>
                </div>
                <div class="price">
                    <span>￥0</span>
                </div>
                <div class="desc">
                    <span>另需配送费￥4元</span>
                </div>
            </div>
            <div class="content-right">
                <span>￥20元起送</span>
            </div>
        </div>
    </div>
</template>

<script>
export default{
   
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
                    .iconfont{
                    font-size: 24px;
                    }
                }
            }
            .price{
                font-size: 16px;
                font-weight: 700;
                border-right: 1px solid hsla(0,0%,100%,.1);
                padding-right: 12px;
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
        }
    }
}
    //         display: flex;
    //         .logo-wrapper{
    //             width: 56px;
    //             height: 56px;
    //             background: #07111b;
    //             border-radius: 50%;
    //             box-sizing: border-box;
    //             margin: 0 12px;
    //             padding: 6px;
    //             position: relative;
    //             top:-10px;
    //             .logo{
    //                 text-align: center;
    //                 width: 44px;
    //                 height: 44px;
    //                 background: #333;
    //                 border-radius: 50%;
    //                 line-height: 40px;
    //                 position: absolute;
    //                 left:50%;
    //                 top:50%;
    //                 transform: translate(-50%,-50%);
    //                 .iconfont{
    //                 font-size: 24px;
    //                 }
    //             }
    //         }
    //       
    //     }
    
//     }
//   }
</style>