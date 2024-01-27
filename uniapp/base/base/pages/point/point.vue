<template>
	<view class="container">
		<view class="header" :style="{ paddingTop: safeAreaInsets ? safeAreaInsets.top + 20 + 'rpx' : ''}">
			<!-- <text class="iconfont icon-zuojiantou" @click="back"></text> -->
			<view class="title">点定位</view>
			<!-- <text class="iconfont icon-jia" @click="goway"></text> -->
		</view>
		<view class="content">
			<button type="default" class="btn">
				全部<text class="iconfont icon-youjiantou"></text>
			</button>
			<uni-search-bar cancelButton="none"  placeholder="搜索内容" class="inp"></uni-search-bar>
			<!-- <scroll-view style="height: 80vh" scroll-y="true"> -->
				<view class="card" v-for="(item,index) in data" :key="data.id" @click="handle(3,item)">
					<view class="Message">
						<text class="title">{{item.dotname}}</text>
						<!-- <text class="uni-h6">{{}}</text> -->
					</view>
					<text class="iconfont icon-youjiantou"></text>
				</view>
			<!-- </scroll-view> -->
		</view>
	</view>
</template>

<script>
import { getPoint } from '../../api/point.js';
	export default {
		data() {
			return {
				 safeAreaInsets:'',
				 data:[]
			}
		},
		onLoad(option) {
			this.link = option.link
			this.safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets
		},
		onShow() {
		  this.getData()
		},
		methods:{
			async getData(){
				const res = await getPoint()
					this.data = res.data.data.info_list
			},
			handle:(link,item)=>{
				const itemJsonString = JSON.stringify(item);
				const encodedItem = encodeURIComponent(itemJsonString);
				uni.navigateTo({ url: `/pages/pointMessage/pointMessage?link=${link}&data=${encodedItem}` });
			},
			back:()=>{
				uni.navigateBack({
					delta: 1
				})
			},
			goway:()=>{
				uni.navigateTo({ url: '/pages/addPoint/addPoint' });
			}
		}
	}
</script>

<style lang="scss">
.container{
	.header{
		display: flex;
		height: 100rpx;
		justify-content: center;
		background-color: #c53736;
		line-height: 100rpx;
		font-weight: 700;
		color: white;
		padding: 0 30rpx;
		.iconfont{
			font-size: 50rpx;
		}
	}
	.content{
		width: 90%;
		margin: 0 auto;
		.btn{
			margin-top: 60rpx;
			font-weight: 700;
			height: 100rpx;
			position: relative;
			.icon-youjiantou{
				position: absolute;
				right: 30rpx;
				transform: rotate(90deg);
				line-height: 100rpx;
			}
		}
		.icon-youjiantou{
			font-size: 50rpx;
			color: #afadae;
		}
		.uni-searchbar{
			padding-left: 0;
			padding-right: 0;
		}
		.uni-searchbar__box{
			height: 90rpx;
		}
		.card{
			display: flex;
			height: 150rpx;
			background-color: #f8f8f8;
			border: 4rpx solid #e6e9e5;
			border-radius: 8rpx;
			justify-content: space-between;
			align-items: center;
			padding: 0 30rpx;
			.Message{
					display: flex;
					flex-direction: column;
				.title{
					font-weight: 700;
					font-size: 45rpx;
				}
			}
			.icon-youjiantou{
				font-size: 50rpx;
				color: #afadae;
			}
		}	
	}
}
</style>
