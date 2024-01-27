<template>
	<view class="container" :style="{ paddingTop: safeAreaInsets ? safeAreaInsets.top + 20 + 'rpx' : ''}">
	<view class="header">
		<view>巡检卫士<text class="iconfont icon-xiangxiajiantou"></text></view>
	</view>
	<view class="sort">
		<text>今天<text class="iconfont icon-xiangxiajiantou"></text></text>
		<text>所有的<text class="iconfont icon-xiangxiajiantou"></text></text>
		<text>按时间排序<text class="iconfont icon-xiangxiajiantou"></text></text>
		<text class="iconfont icon-tianjiatubiao"></text>
	</view>
	<view class="card-container" v-for="item in 10" :key="item">
		<uni-card :is-shadow="false" is-full>
			<view class="Message">
				<text class="title">1号干式变压器<text class="number">6006</text></text>
				<text class="uni-h6">脱硫设备日检</text>
				<text class="uni-h6">设备部 李伟 今天 09:29:02</text>
			</view>
			<text class="iconfont icon-youjiantou"></text>
		</uni-card>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				safeAreaInsets:''
			};
		},
		onLoad() {
			this.safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.container{
	background-color: #c53736;
	.header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		background-color: #c53736;
		line-height: 100rpx;
		font-weight: 700;
		color: white;
		padding: 0 30rpx;
		.iconfont.icon-caidan{
			font-size: 50rpx;
		}
	}
	.sort{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx 20rpx;
		background-color: #b4433c;
		color: #fcefe1;
		.icon-xiangxiajiantou{
			margin-left: 10rpx;
		}
	}
	.uni-card__content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.Message{
			display: flex;
			flex-direction: column;
		}
		.title{
			font-weight: 700;
			font-size: 36rpx;
			.number{
				margin-left: 6rpx;
				font-size: 32rpx;
			}
		}
		.icon-youjiantou{
			font-size: 50rpx;
			color: #afadae;
		}
	}
}

</style>
