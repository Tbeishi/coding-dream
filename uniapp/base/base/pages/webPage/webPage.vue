<template>
		<!-- <web-view :src="src"></web-view> -->
	<view class="container" :style="{ paddingTop: safeAreaInsets ? safeAreaInsets.top + 20 + 'rpx' : ''}">
		<view class="header">
			<text class="iconfont icon-zuojiantou" @click="handle"></text>
			<view>巡检卫士</view>
			<text class="iconfont icon-caidan"></text>
		</view>
		<view class="content">
			<view class="message">
				<text>点编号：</text>
				<text>1001</text>
			</view>
			<view class="message">
				<text>点名称：</text>
				<text>巡检卫士</text>
			</view>
			<view class="message">
				<text>巡检计划：</text>
				<text>网站演示</text>
			</view>
			<view class="check">
				<text style="margin-bottom: 30rpx;">检查项目</text>
				<uni-collapse>
					<!-- 因为list默认带一条分隔线，所以使用 titleBorder="none" 取消面板的分隔线 -->
					<uni-collapse-item :border="true" :show-arrow="false" open v-for="(item,index) in 6" :key=item>
						<template v-slot:title>
							<uni-list>
								<uni-list-item :title="index + 1 + '.电气设备'"></uni-list-item>
							</uni-list>
						</template>
						<view class="content">
							<view class="task">
								<view class="message"><checkbox value="cb" />高压开关柜供电不合格</view>							</uni-card>
								<view class="message"><checkbox value="cb" />供电不合格</view>							</uni-card>
								<view class="message"><checkbox value="cb" />全部合格</view>							</uni-card>
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
			data() {
				return {
					 src: '',
					 safeAreaInsets:''
				}
			},
			onLoad(option) {
				this.safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets
			    console.log(option)
			    this.src = option.link
			},
			methods: {
				handle:()=>{
					uni.switchTab({ url: '/pages/home/home' });
				}
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
		.iconfont{
			font-size: 50rpx;
		}
	}
	.content{
		height: 100%;
		background-color: #f8f8f8;
		padding: 0 40rpx;
		.message{
			padding: 30rpx 0;
			border-bottom: 3rpx solid #dedede;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.check{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			margin-top: 40rpx;
			.content{
				.task{
					display: flex;
					flex-direction: column;
					.message{
						border-bottom: 2rpx solid #e1e1e1;
						padding: 20rpx 0;
					}
				}
			}
		}
	}
}
</style>
