<template>
	<view class="dialog">
		<uni-popup ref="popup" background-color="#fff" type="right" width="400rpx" safe-area>
			<view class="popup-content">
			<view class="header" :style="{ paddingTop: safeAreaInsets ? safeAreaInsets.top + 8 + 'rpx' : ''}">
				<text class="iconfont icon-zuojiantou"></text>
				<text class="title">菜单</text>
			</view>
			<uni-card :is-shadow="false" is-full v-for="item in 10" :key="item">
				<view class="Message">
					<text class="iconfont icon-ditufuwu"></text>
					<text class="title">巡检点</text>
				</view>
				<text class="iconfont icon-youjiantou"></text>
			</uni-card>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name:"homeDialog",
		props:['safeAreaInsets'],
		data() {
			return {
			};
		},
		methods:{
			open() {
				this.$refs.popup.open()
			},
		}
	}
</script>

<style lang="scss">
/deep/.uni-popup .uni-popup__wrapper {
    width: 440rpx;
}
.dialog{
	.header{
		height: 120rpx;
		background-color: #b5413f;
		position: relative;
		.title{
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}
}

/deep/.uni-card__content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.icon-ditufuwu{
			padding: 12rpx;
			background-color: #c86261;
			border-radius: 50%;
			color: #ffffff;
			font-size: 36rpx;
			margin-right: 10rpx
		}
		.title{
			color: #424043;
			font-size: 42rpx;
			font-weight: 700;
		}
		.icon-youjiantou{
		font-size: 50rpx;
		color: #afadae;
		}
}
</style>
