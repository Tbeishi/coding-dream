<template>
	<!-- <web-view :src="src"></web-view> -->
	<view class="container">
		<view class="header" :style="{ paddingTop: safeAreaInsets ? safeAreaInsets.top + 20 + 'rpx' : '' }">
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
			<view class="photo">
				<view class="title">现场拍照</view>
				<view class="pic">
					<text class="iconfont icon-xiangji" @click="takePto"></text>
					<view class="imgBox" v-if="imageList.length > 0" v-for="(url,index) in imageList">
						<image :src="url" :key="index" class="img">
						</image>
						<text class="iconfont icon-shanchu" @click="delPic(index)"></text>
					</view>
				</view>
			</view>
			<view class="note">
				<view class="title">巡检备注</view>
				<view class="text">
					<textarea class="text-content" v-model="noteVaule"></textarea>
				</view>
			</view>
			<button type="warn" class="btn" @click="submit">确定完成巡检</button>
			<!-- <view class="check">
				<text style="margin-bottom: 30rpx;">检查项目</text>
				<uni-collapse>
					<uni-collapse-item :border="true" :show-arrow="false" open v-for="(item,index) in 6" :key=item>
						<template v-slot:title>
							<uni-list>
								<uni-list-item :title="index + 1 + '.电气设备'"></uni-list-item>
							</uni-list>
						</template>
						<view class="content">
							<view class="task">
								<view class="message"><checkbox value="cb" />高压开关柜供电不合格</view>							
								<view class="message"><checkbox value="cb" />供电不合格</view>							
								<view class="message"><checkbox value="cb" />全部合格</view>						
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view> -->
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			src: '',
			safeAreaInsets: '',
			imageList:[],
			noteVaule:''
		};
	},
	onLoad(option) {
		this.safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets;
		// console.log(option)
		this.src = option.link;
	},
	methods: {
		handle: () => {
			uni.switchTab({ url: '/pages/home/home' });
		},
		delPic(index){
			this.imageList.splice(index,1)
		},
		submit(){
			console.log(this.imageList);
			console.log(this.noteVaule);
			uni.showToast({
				title: '提交成功！',
				mask: true,
				icon:'success',    //将值设置为 success 或者 'error'
				duration: 2000    //持续时间为 1秒
			})
		},
		takePto() {
			let that = this
			plus.camera.getCamera().captureImage(function (e) {
				plus.io.resolveLocalFileSystemURL(
					e,
					function (entry) {
						entry.file(function (file) {
							that.imageList.push(entry.toLocalURL()) //图片的本地路径
							// this.imgfile = file.name; //图片的文件名
						});
					},
					function (e) {
						console.log('读取拍照文件错误：' + e.message);
					}
				);
			});
		}
	}
};
</script>

<style lang="scss">
.container {
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		background-color: #c53736;
		line-height: 100rpx;
		font-weight: 700;
		color: white;
		padding: 0 30rpx;
		.iconfont {
			font-size: 50rpx;
		}
	}
	.content {
		padding: 0 40rpx 60rpx;
		.message {
			padding: 30rpx 0;
			border-bottom: 3rpx solid #dedede;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.check {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			margin-top: 40rpx;
			.content {
				.task {
					display: flex;
					flex-direction: column;
					.message {
						border-bottom: 2rpx solid #e1e1e1;
						padding: 20rpx 0;
					}
				}
			}
		}
		.photo,
		.note {
			margin-top: 60rpx;
			.title {
				background-color: #e9e9e9;
				text-align: center;
				font-weight: 700;
				height: 80rpx;
				line-height: 80rpx;
				border-top-left-radius: 20rpx;
				border-top-right-radius: 20rpx;
			}
			.pic {
				padding: 60rpx 30rpx 40rpx;
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
				min-height: 80rpx;
				border: 4rpx solid #e2e2e2;
				.icon-xiangji {
					font-size: 40rpx;
					padding: 20rpx;
					background-color: #2c2c2a;
					color: #fdfffc;
					border-radius: 50%;
				}
			}
			.text {
				padding: 30rpx;
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
				border: 4rpx solid #e2e2e2;
				.text-content {
					border-radius: 8rpx;
					width: 100%;
					border: 4rpx solid #dedede;
					height: 180rpx;
				}
			}
		}
		.imgBox{
			margin-top: 30rpx;
			position: relative;
			.img{
				width: 100%;
			}
			.iconfont{
				position: absolute;
				padding: 20rpx;
				border-radius: 50%;
				color: #fcffff;
				background-color: #fa4729;
				font-size: 40rpx;
				bottom: 30rpx;
				right: 30rpx;
			}
		}
		.btn {
			margin-top: 60rpx;
		}
	}
}
</style>
