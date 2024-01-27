<template>
	<view>
		<view class="header" :style="{ paddingTop: safeAreaInsets ? safeAreaInsets.top + 20 + 'rpx' : '' }">
			<text class="iconfont icon-zuojiantou" @click="back"></text>
			<view class="title">添加巡检点</view>
			<text class="iconfont icon-saoyisao"></text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			safeAreaInsets: ''
		};
	},
	onLoad(option) {
		this.safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets;
	},
	methods:{
		// handle:()=>{
		// 	uni.navigateTo({ url: '/pages/pointMessage/pointMessage' });
		// },
		back:()=>{
			uni.navigateBack({
				delta: 1
			})
		}
	}
};
</script>

<style lang="scss">
.header {
	display: flex;
	height: 100rpx;
	justify-content: space-between;
	background-color: #c53736;
	line-height: 100rpx;
	font-weight: 700;
	color: white;
	padding: 0 30rpx;
	.iconfont {
		font-size: 50rpx;
	}
}
</style>
