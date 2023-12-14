<template>
  <div class="goods">
    <div class="goods-content">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li 
            class="menu-item" 
            :class="{'current' : currentIndex === index}"
            v-for="(item, index) in goods" 
            :key="index"
            @click="selectMenu(index)"
          >
            <span class="text">
              <SupportIcon size="3" :type="item.type" v-if="item.type >= 0"/>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>  
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <!-- 一个菜系 -->
          <li class="food-list" v-for="(item,index1) in goods" :key="index1" ref="foodList">
            <h1 class="title">{{ item.name }}</h1>
            <!-- 一道一道菜 -->
            <ul>
              <li class="food-item"  v-for="(food,index2) in item.foods" :key="index2">
                <div class="pic">
                  <img :src="food.image">
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <p class="desc">{{ food.description }}</p>
                  <div class="extra">
                    <span class="count">月售{{ food.sellCount }}份</span>
                    <span>好评率{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <div class="price-context">
                      <span class="now">￥{{ food.price }}</span>
                      <span class="old" v-show="food.oldPrice">￥{{ food.oldPrice }}</span>
                    </div>
                    <div class="cart-context">
                      <i class="iconfont icon-jianshao" v-show="cartCount[index1]"  @click="selectFood(index1,index2)"></i>
                      <span class="cart-count" v-show="cartCount[index1][index2]">{{ cartCount[index1][index2] }}</span>
                      <i class="iconfont icon-jia" @click="selectFood(index1,index2)"></i>
                    </div>
                  </div>
                  <!-- + -->

                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    
    <Cart/>
  </div>
</template>

<script>
import { getGoods } from '@/api'
import SupportIcon from '@/components/support-icon/Support-icon.vue'
import BScroll from '@better-scroll/core'
import Cart from '@/components/cart/Cart.vue'
export default {
  components: {
    SupportIcon,
    Cart
  },
  data() {
    return {
      goods: [],
      currentIndex: 0,
      foodList:[],//各菜系的食物dom结构
      foodBScroll:[],
      scrollY:0,
      foodHeight:[],
      cartCount:[][20],
    }
  },
  created() {
    // 获取商品数据
    getGoods().then(res => {
      console.log(res);
      this.goods = res
      
      this.$nextTick(() => { // $nextTick里面的回调会在页面加载完毕之后才执行
        this.betterScroll()
        this.getFoodHeight()
        this.goods.forEach((item,index)=>{
          const arr = []
          item.foods.forEach(()=>{ arr.push(1)})
          this.cartCount.push(arr)
          
        })
      })
    })
  },
  methods: {
    betterScroll() {
      // 获取到menu-wrapper的dom结构
      new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodBScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        scroll: true,
        probeType:3
      })
      this.foodList = this.$refs.foodList
      this.foodBScroll.on('scroll',(pos)=>{
        this.scrollY = Math.round(Math.abs(pos.y))
      })
    },
    selectMenu(i) {
      // console.log(i);
      this.currentIndex = i
      this.foodBScroll.scrollToElement(this.foodList[i],500)
    },
    selectFood(i,y) {
      console.log(this.cartCount[i][y]);
    },
    getFoodHeight(){
      let height = 0
      this.foodHeight.push(height)
      this.foodList.forEach((foodheight)=>{
        height += foodheight.clientHeight
        this.foodHeight.push(height)
      })
    }
  },
  // computed:{
  //   computeHeight(){
  //     const 
  //   }
  // }
}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
.goods{
  position: absolute;
  width: 100%;
  bottom: 46px;
  top: 177px;
  overflow: hidden;
  &-content{
    display: flex;
    height: 100%;
    .menu-wrapper{
      flex: 0 0 80px;
      background: @color-background-ssss;
      .menu-item{
        padding: 0 14px;
        font-size: @fontsize-small;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
        &.current{
          background: #fff;
          font-weight: 700;
        }
      }
    }
    .foods-wrapper{
      flex: 1;
      .title{
        height: 26px;
        line-height: 26px;
        font-size: @fontsize-small;
        color: rgb(147, 153, 159);
        background: @color-background-ssss;
        padding-left: 14px;
        border-left: 2px solid #d9dde1;
      }
      .food-item{
        display: flex;
        padding-bottom: 18px;
        margin: 18px;
        .pic{
          flex: 0 0 57px;
          margin-right: 10px;
          img{
            width: 100%;
          }
        }
        .content{
          flex: 1;
          .name{
            font-size: @fontsize-medium;
            color: rgb(7, 17, 27);
            margin: 2px 0 8px 0;
          }
          .desc, .extra{
            font-size: @fontsize-small-s;
            color: rgb(147, 153, 159);
            margin-bottom: 8px;
            line-height: 10px;
            .count{
              margin-right: 12px;
            }
          }
          .extra{
            margin-bottom: 0px;
            }
          .price{
            display: flex;
            font-weight: 700;
            line-height: 24px;
            height: 24px;
            justify-content: space-between;
            // align-items: center;

            .price-context{
              .now{
              font-size: @fontsize-medium;
              color: @color-red;
              margin-right: 8px;
            }
            .old{
              font-size: @fontsize-small-s;
              color: rgb(147, 153, 159);
              text-decoration: line-through;
            }
            }
           
            .cart-context{
            margin-top: -2px;
              .iconfont{
              color: #00a0dc;
              font-size: 22px;
              padding: 6px;
              vertical-align: middle;
            }
            .cart-count{
              display: inline-block;
              color: #8e8e8e;
              font-size: 10px;
              width: 12px;
              text-align: center;
            }
            }
            
          }
        }
      }
    }
  }
}
</style>