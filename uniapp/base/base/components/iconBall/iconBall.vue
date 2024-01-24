<template>
	<view class="container">
		<view class="ball-container">
			<text class="iconfont icon-iconfontunie62c"></text>
		</view>
		<text>工作结束</text>
	</view>
</template>

<script>
	export default {
		name:"iconBall",
		
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.container{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 180rpx;
	.ball-container{
		height: 180rpx;
		width: 180rpx;
		background-color: #e06c5e;
		border-radius: 50%;
		border: 4rpx solid #955c53;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 6rpx;
		.icon-iconfontunie62c{
			color: #f9fffd;
			font-size: 100rpx;
		}
	}
}

</style>