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
            <el-icon><KnifeFork /></el-icon>
            <span>食品菜单</span>
          </el-menu-item>
          <el-menu-item index="/food/orders">
            <el-icon><Memo /></el-icon>
            <span>我的订单</span>
          </el-menu-item>
  
          <el-sub-menu index="/my">
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
        <span class="message">欢迎您！<strong>小米露</strong></span>
        <div class="itemBar">
            <div class="shoppingCart">
                <el-icon size="25"><Document /></el-icon>
                <div class="cart">
                    <span>购物车</span>
                    <div class="count">2</div>
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
            <el-dropdown-item :icon="Message" command="profile">基本资料</el-dropdown-item>
            <el-dropdown-item :icon="PictureFilled" command="avatar">更换头像</el-dropdown-item>
            <el-dropdown-item :icon="RefreshLeft" command="password">重置密码</el-dropdown-item>
            <el-dropdown-item :icon="SwitchButton" command="layout">退出登录</el-dropdown-item>
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
import {House,KnifeFork,Memo,RefreshLeft,PictureFilled,Message,Avatar,CaretBottom,Document,SwitchButton} from '@element-plus/icons-vue'
import { useRouter }  from 'vue-router'
import { ElMessageBox } from 'element-plus'
import defaultAvatar from '../assets/picture/默认头像.jpg'
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
    router.replace({path:'/'})
    }
    else{
    router.replace({path:`/my/${key}`})
    }
}
</script>

<style scoped>
.el-header{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
}

.el-aside{
      height:100vh;
      background-color: black;
}

.logo{
    height: 150px;
    background: url(../assets/picture/头像.jpg) no-repeat center top/cover;
}

.el-menu {
    border-right: none;
}
.dropdown__box{
    display: flex;
    align-items: center;
}

.message{
    line-height: 60px;
}

.dropdown__box:focus{
    outline: none;
}

.dropdown__box .el-icon {
    color: #999;
    margin-left: 10px;
}

.itemBar{
    display: flex;
    flex: 1;
    justify-content: flex-end;
}

.shoppingCart{
    position: relative;
    display: flex;
    align-items: center;
}

.cart{
    margin: 0 20px 0 5px;
}

.cart .count{
    position: absolute;
    padding: 1px 6px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    text-align: center;
    line-height: 15px;
    top: 12px;
    left: 12px;
    font-size: 10px;
    color: aliceblue;
}
</style>