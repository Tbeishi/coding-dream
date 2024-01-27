<template>
	<view class="content" :style="{ paddingTop: safeAreaInsets ? safeAreaInsets.top + 40 + 'rpx' : ''}">
		<view class="header">
			<view>巡检卫士<text class="iconfont icon-xiangxiajiantou"></text></view>
			<!-- @click="openDialog" -->
			<text class="iconfont icon-caidan" ></text> 
		</view>
		<view class="task">
			<view class="taskBall">
				<text>计划执行</text>
				<text class="count">137次<text class="nowDay">今日</text></text>
				<text>已完成3次</text>
				<button plain size="mini" class="btn">查看</button>
			</view>
			<view class="taskBall">
				<text>任务安排</text>
				<text class="count">7个<text class="nowDay">进行中</text></text>
				<text>已完成0个</text>
				<button plain size="mini" class="btn">查看</button>
			</view>
		</view>
		<image class="pic" src="/static/pic.png"></image>
		<view class="Message" v-for="item in 6" :key="item">
			<uni-card :is-shadow="false" is-full>
			<iconBall/>
			<view class="taskMessage">
				<text style="margin: 20rpx 0;">巡检工作已结束</text>
				<text style="margin-bottom: 20rpx">以下地点尚未巡检:调压箱,停车场A区，我，液压装置</text>
				<text>计划名称:机动车间</text>
				<text>巡检路线:生产车间安全</text>
				<text>班组名称:设备管理部</text>
				<text>开始时间: 2020/2/14 9:15:00</text>
				<text>结束时间: 2020/2/14 10:1 5:00</text>
			</view>
			<text class="iconfont icon-youjiantou"></text>
			</uni-card>
		</view>
		<!-- <homeDialog ref="dlog" :safeAreaInsets="safeAreaInsets" /> -->
	</view>
</template>

<script>
	import homeDialog from './components/homeDialog/homeDialog.vue'
	export default {
		// components:{//为当前的组件注册私有子组件
		// 'homeDialog': homeDialog,
		//  },
		data() {
			return {
				safeAreaInsets:''
			};
		},
		onLoad() {
			this.safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets
		},
		methods:{
			openDialog(){
				this.$refs.dlog.open()
			}
		}
	}
</script>

<style lang="scss">
.content{
	background-color: #c53736;
	.header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60rpx;
		background-color: #c53736;
		line-height: 100rpx;
		font-weight: 700;
		color: white;
		padding: 0 30rpx;
		.iconfont.icon-caidan{
			font-size: 50rpx;
		}
	}
	.task{
		background: linear-gradient(180deg, #d0574e, #ff8e4c);
		width: 90%;
		height: 350rpx;
		margin: 0 auto;
		margin-top: 20rpx;
		border-radius: 8rpx;
		z-index: 3;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transform: translateY(12rpx);
		padding: 0 30rpx;
		.taskBall{
			height: 300rpx;
			width: 300rpx;
			background-color: #ce4a42;
			border-radius: 50%;
			border: 5rpx solid #fca69f;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			color: #f1fdf2;
			.count{
				font-weight: 700;
				font-size: 50rpx;
			}
			.nowDay{
				margin-left: 5rpx;
				font-size: 20rpx;
			}
			text{
				margin: 5rpx 0;
			}
			.btn{
				margin-top: 10rpx;
				color: white;
				border-color: #f1fdf2;
			}
		}
	}
	.pic{
		transform: translateY(12rpx);
		width: 100%;
		height: 300rpx;
	}
	.Message{
		height: 100%;
		background-color: #fff;
		.taskMessage{
			display: flex;
			flex-direction: column;
			margin-left: 20rpx;
		}
	}
}

/deep/.uni-card__content{
	display: flex;
	justify-content: space-between;
	align-items: center;
	.icon-youjiantou{
		font-size: 50rpx;
		color: #afadae;
	}
}
</style>
