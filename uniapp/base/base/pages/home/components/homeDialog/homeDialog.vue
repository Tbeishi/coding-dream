<template>
	<view class="dialog">
		<uni-popup ref="popup" background-color="#fff" type="right" width="400rpx" safe-area>
			<view class="popup-content">
				<view class="header" :style="{ paddingTop: safeAreaInsets ? safeAreaInsets.top + 8 + 'rpx' : '' }">
					<text class="iconfont icon-zuojiantou"></text>
					<text class="title">菜单</text>
				</view>
				<view class="card" @click="handle(1)">
					<view class="Message">
						<text class="iconfont icon-xunjian" style="background-color: #db81aa"></text>
						<text class="title">待巡检项</text>
					</view>
					<text class="iconfont icon-youjiantou"></text>
				</view>
				<view class="card" @click="swap">
					<view class="Message">
						<text class="iconfont icon-saoyisao1" style="background-color: #a4d3e4"></text>
						<text class="title">扫一扫</text>
					</view>
					<text class="iconfont icon-youjiantou"></text>
				</view>
				<view class="card" @click="handle(3)">
					<view class="Message">
						<text class="iconfont icon-ditufuwu"></text>
						<text class="title">点定位</text>
					</view>
					<text class="iconfont icon-youjiantou"></text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
export default {
	name: 'homeDialog',
	props: ['safeAreaInsets'],
	data() {
		return {};
	},
	methods: {
		open() {
			this.$refs.popup.open();
		},
		handle: (e) => {
			uni.navigateTo({ url: `/pages/point/point?link=${e}` });
		},
		goLocation: () => {
			uni.navigateTo({ url: '/pages/setLocation/setLocation' });
		},
		swap() {
			// 使用uniapp提供扫码api
			uni.scanCode({
				scanType: ['qrCode'],
				// 扫码成功后的回调
				success: (res) => {
					// res中包含二维码中的信息，其中就有网络链接
					// 使用navigateTo跳转，并且携带参数，参数为二维码中的链接
					uni.navigateTo({
						// 这里注意，此地址只是自己提前写好的，并且路径前面一定要加/
						url: `/pages/webPage/webPage?link=${res.result}`
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
/deep/.uni-popup .uni-popup__wrapper {
	width: 440rpx;
}
.dialog {
	.header {
		height: 120rpx;
		background-color: #b5413f;
		position: relative;
		.title {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 120rpx;
		padding: 0 30rpx;
		border-bottom: 4rpx solid #e1dfe0;
		.Message {
			display: flex;
			align-items: center;
			.iconfont {
				padding: 12rpx;
				background-color: #c86261;
				border-radius: 50%;
				color: #ffffff;
				font-size: 40rpx;
				margin-right: 16rpx;
			}
		}
		.title {
			color: #424043;
			font-size: 40rpx;
			font-weight: 700;
		}
		.icon-youjiantou {
			font-size: 50rpx;
			color: #afadae;
		}
	}
}
</style>
