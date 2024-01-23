<template>
	<view class="content">
		<view class="header">
			<view>巡检卫士<text class="iconfont icon-xiangxiajiantou"></text></view>
			<text class="iconfont icon-caidan"></text>
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
		<image class="pic" src="/static/pic.png" mode=""></image>
		<iconBall/>
	</view>
</template>

<script setup>
</script>

<style lang="scss">
.content{
	height: 100%;
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
		width: 100%;
		height: 300rpx;
	}
}


</style>
