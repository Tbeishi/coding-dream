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
            <span class="bubble" v-if="cartCountSum[index] > 0">
                <span class="num"> {{  cartCountSum[index] }}</span>
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
                    <div class="cart-context" v-if="cartCount[index1]">
                      <i class="iconfont icon-jianshao" v-show="cartCount[index1][index2].count"  @click="reduceCart(index1,index2)"></i>
                      <span class="cart-count" v-show="cartCount[index1][index2].count">{{ cartCount[index1][index2].count }}</span>
                      <i class="iconfont icon-jia" @click="addCart(index1,index2)"></i>
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
    
    <Cart :costList="cartCountSum" :cartList="cartFood"/>
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
      foodList:[],//各菜系的食物dom结构
      foodBScroll:[],
      scrollY:0,
      foodHeight:[],
      cartCount:[],
      cartCountSum:[],
      cartFood:[],
      foodNameList:[]
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
        this.goods.forEach((item)=>{
          const arr = []
          item.foods.forEach((food)=>{ arr.push({
            food,
            count: 0
          })})
          this.cartCountSum.push(0)
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
    getFoodHeight(){
      let height = 0
      this.foodHeight.push(height)
      this.foodList.forEach((foodheight)=>{
        height += foodheight.clientHeight
        this.foodHeight.push(height)
      })
      console.log(this.foodHeight);
    },
    addCart(MenuID,foodID){
      this.cartCount[MenuID][foodID].count++
      this.cartCountSum[MenuID]++
      const foodname = this.goods[MenuID].name + this.goods[MenuID].foods[foodID].name 
      if(!this.foodNameList.includes(foodname)){
        this.foodNameList.push(foodname)
        this.cartFood.push(this.cartCount[MenuID][foodID])
      }
    },
    reduceCart(MenuID,foodID){
      this.cartCount[MenuID][foodID].count--
      this.cartCountSum[MenuID]--
    },
  },
  computed:{
   currentIndex(){
    //随着右侧滚动this.scrollY返回不同的下标
    for(let i = 0; i < this.foodHeight.length; i++){
      const h1 = this.foodHeight[i]
      const h2 = this.foodHeight[i+1]
      if(!h2||(this.scrollY >= h1 && this.scrollY < h2)){
        return i
      }
    }
   }
  }
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
        padding: 0 10px;
        font-size: @fontsize-small;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &.current{
          background: #fff;
          font-weight: 700;
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
          right: 2px;
          top: 6px;
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

.food-item&:last-child { 
  margin-bottom: 0px !important;
}
</style>