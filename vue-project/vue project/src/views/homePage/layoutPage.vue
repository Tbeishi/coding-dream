<template>
    <div class="common-layout">
    <el-container>
      <el-aside width="150px">
        <div class="logo"></div>
        <el-menu background-color="#232323"
        text-color="#fff"
        :default-active="$route.path"
        active-text-color="#ffd04b"
        router
        >
        <el-menu-item index="/food/sy">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/food/menu">
            <el-icon><IceTea /></el-icon>
            <span>零食菜单</span>
          </el-menu-item>
          <el-menu-item index="/food/orders">
            <el-icon><Memo /></el-icon>
            <span>我的订单</span>
          </el-menu-item>
          <el-menu-item index="/my/notLogin" v-if="!UserStore.user">
            <el-icon><Avatar /></el-icon>
            <span>个人中心</span>
          </el-menu-item>

          <el-sub-menu index="/my" v-else>
            <template #title>
            <el-icon><Avatar /></el-icon>
              <span>个人中心</span>
            </template>
            <el-menu-item index="/my/profile">
            <el-icon><Message /></el-icon>
              <span>基本资料</span>
            </el-menu-item>
            <el-menu-item index="/my/avatar">
            <el-icon><PictureFilled /></el-icon>
              <span>更换头像</span>
            </el-menu-item>
            <el-menu-item index="/my/password">
            <el-icon><RefreshLeft /></el-icon>
              <span>重置密码</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside> 
      <el-container>

        <el-header>
        <span class="message">欢迎您！<strong>{{ UserStore.user }}</strong></span>
        <div class="itemBar">
            <div class="shoppingCart" @click="router.push({name:'mycart'})">
                <i class="iconfont icon-gouwuchekong"></i>
                <div class="cart">
                    <span>购物车</span>
                    <div class="count" v-show="CartStore.Cartcount>0">{{ CartStore.Cartcount }}</div>
                </div>
            </div>      
        </div>
          <el-dropdown placement="bottom-end" @command="handlecommand">  
          <span class="dropdown__box"> 
            <el-avatar :src="defaultAvatar" :size="30"/>
            <el-icon><CaretBottom /></el-icon>
          </span>
          <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="Message" command="profile" v-if="UserStore.user">基本资料</el-dropdown-item>
            <el-dropdown-item :icon="PictureFilled" command="avatar" v-if="UserStore.user">更换头像</el-dropdown-item>
            <el-dropdown-item :icon="RefreshLeft" command="password" v-if="UserStore.user">重置密码</el-dropdown-item>
            <el-dropdown-item :icon="SwitchButton" :command="UserStore.user ? 'layout' : 'login'">{{UserStore.user ? '退出登录' : '去登录'}}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
        </el-dropdown>
      </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script setup>
import {House,IceTea,Memo,RefreshLeft,PictureFilled,Message,Avatar,CaretBottom,Document,SwitchButton} from '@element-plus/icons-vue'
import { useRouter }  from 'vue-router'
import { ElMessageBox } from 'element-plus'
import defaultAvatar from '@/assets/picture/默认头像.jpg'
import { computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useCartStore } from '@/store/cart'

const UserStore = useUserStore()
const CartStore = useCartStore()
const router = useRouter()

const handlecommand = async (key)=>{
    if(key === 'layout'){
    await ElMessageBox.confirm(
    '你确定要退出吗?',
    '温馨提示',
    {
      confirmButtonText: '是',
      cancelButtonText: '否',
      type: 'warning',
    })
    UserStore.count = 0
    UserStore.user = ''
    router.replace({path:'/login'})
    }
    else if(key == 'login'){
    router.replace({path:'/login'})
    }
    else{
    router.replace({path:`/my/${key}`})
    }
}

</script>

<style scoped lang="less">
.el-header{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .message{
    line-height: 60px;
  }
    .itemBar{
    display: flex;
    flex: 1;
    justify-content: flex-end;
    .shoppingCart{
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    .iconfont{
     font-size: 25px;
    }
      .cart{
      margin: 0 20px 0 5px;
      .count{
        background: linear-gradient(90deg,#fc9153,#f01414);
        border-radius: 16px;
        color: #fff;
        font-size: 10px;
        font-weight: 700;
        line-height: 16px;
        padding: 0 6px;
        text-align: center;
        position: absolute;
        left: 13px;
        top: 14px;
        }
      }
    }
  }
}
.el-aside{
      height:100vh;
      background-color: black;
    .logo{
      height: 120px;
      background: url(../../assets/picture/头像.jpg) no-repeat center center/cover;
  }
    .el-menu {
      border-right: none;
  }
}

.dropdown__box{
    display: flex;
    align-items: center;
    &:focus{
    outline: none;
  }
  .el-icon {
    color: #999;
    margin-left: 10px;
  }
}
</style>