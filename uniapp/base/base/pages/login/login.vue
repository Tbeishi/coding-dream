<template>
	<view class="login-container">
		<view class="header" :style="{ paddingTop: safeAreaInsets ? safeAreaInsets.top + 20 + 'rpx' : ''}">巡检卫士</view>
		<image class="logo" src="../../static/logo.png" mode=""></image>
		<uni-forms :modelValue="formData" :rules="rules" ref="form" >
		<uni-forms-item name="tel" class="user">
			<text class="iconfont icon-yonghu"></text>
			<input type="nickname" class="uni-input" focus  v-model="formData.tel"/>
		</uni-forms-item>
		<uni-forms-item name="password" class="password">
			<text class="iconfont icon-mima"></text>
			<input type="password" class="uni-input" v-model="formData.password"/>
		</uni-forms-item>
		</uni-forms>
		<view class="method">
			<label><checkbox value="cb"/>自动登录</label>
			<text class="trend">动态密码登录</text>
		</view>
		<button class="btn" type="warn"  @click="handleLogin">登录</button>
		<view class="footMessage">
			<text>离线巡查</text>
			<text>忘记密码</text>
		</view>
		<view class="footMessage">
			<text>应用注册</text>
			<text>通讯设计</text>
		</view>
		<view class="footMessage">
			<text>官方网站</text>
			<text>服务与隐私协议</text>
		</view>
	</view>
</template>

<script>
import { doLogin } from '../../api/login.js'
export default {
	data() {
	    return {
		safeAreaInsets:'',
	      formData: {
	            tel: '',       // 存储用户名输入框的值
	            password: '',   // 存储密码输入框的值
	          },
		 rules: {
		 		// 对name字段进行必填验证
		 		tel: {
		 				rules: [{
		 							required: true,
		 							errorMessage: '请输入手机号',
		 						},
		 						{
		 							minLength: 11,
		 							maxLength: 11,
		 							errorMessage: '手机号格式不对',
		 						}
		 					]
		 				},
		 				// 对email字段进行必填验证
		 		password: {
		 				rules: [{
		 						required: true,
		 						errorMessage: '请输入密码',
		 					}]
		 				}
		 		}
	    }
	  },
	  onLoad() {
	  	this.safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets
	  	console.log(this.safeAreaInsets);
	  },
  methods: {
    handleLogin() {
			this.$refs.form.validate().then(res => {
				const data = { phone:this.formData.tel , passwd:this.formData.password}
				doLogin(data).then(res=>{
				// console.log(res);
					if(res.data.code === '101'){ //登录成功跳转首页
						uni.switchTab({ url: '/pages/home/home' });
					}
				})
			})
		}
  }
}
</script>

<style lang="scss">
.login-container{
	background-color: #f9f9f7;
	height: 100%;
	.header{
		height: 100rpx;
		background-color: red;
		text-align: center;
		line-height: 100rpx;
		font-weight: 700;
		color: white;
	}
	.logo{
		width: 250rpx;
		height: 250rpx;
		margin: 80rpx 250rpx;
	}
	.iconfont{
		font-size: 100rpx;
		color: #8f8c8b;
	}
	.uni-input {  
	    border: 1px solid rgba(144, 144, 144, 0.25);  
	    background: rgba(144, 144, 144, 0.075);  
	    height: 40px;  
	    border-radius: 5px; 
		width: 500rpx;
	}
	.user,.password,.uni-forms-item__content{
		margin-bottom: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		.iconfont.icon-yonghu{
			margin-right: 30rpx;
		}
		.iconfont.icon-mima{
			margin-right: 30rpx;
			color: #a0a0a0;
			font-size: 90rpx;
		}
	}
	.method{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10rpx 70rpx;
		.trend{
			color:#527ea0;
		}
	}
	.btn{
		margin-top: 50rpx;
		width: 640rpx;
		margin-bottom: 70rpx;
	}
	.footMessage{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color:#527ea0;
		padding: 0 70rpx;
		margin-bottom: 30rpx;
	}
}

.uni-forms-item__error{
	margin-left: 200rpx;
	uni-text{
		font-size: 34rpx;
	}
}
</style>
