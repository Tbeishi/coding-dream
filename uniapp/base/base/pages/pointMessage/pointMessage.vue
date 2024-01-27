<template>
	<view class="container">
		<view class="header" :style="{ paddingTop: safeAreaInsets ? safeAreaInsets.top + 20 + 'rpx' : ''}">
			<text class="iconfont icon-zuojiantou" @click="backWay"></text>
			<view class="title">{{ link === '1' ? '巡检点' : '点定位' }}</view>
		</view>
		<view class="content">
			<view class="list">
				<text>点编号</text>
				<text>{{ pointItem.id }}</text>
			</view>
			<view class="list">
				<text>点名称</text>
				<text>{{ pointItem.dotname }}</text>
			</view>
			<view class="list">
				<text>点备注</text>
				<text>{{ pointItem.note }}</text>
			</view>
			<view class="list">
				<text style="flex:0 0 200rpx">地点</text>
				<text>{{ address }}</text>
			</view>
			<view class="list" >
				<text>定位信息</text>
				<view style="flex-direction: column;display: flex;">
					<text>经度：{{ Longitude }}</text>
					<text>纬度：{{ Latitude }}</text>
				</view>
			</view>
			<view class="list" v-if="link === '1'">
				<text>导航</text>
				<image src="../../static/map.png" style="height: 120rpx;width: 120rpx;" @click="gomapApp(Latitude,Longitude,address)">
				</image>
			</view>
		</view>
		<view class="btn-container" v-if="link === '3'">
			<button type="default" class="btn" @click="updata">更新定位信息</button>
			<button type="warn" class="btn" @click="save">保存</button>
		</view>
			<!-- <view class="list">
				<text>检查项目</text>
				<text>无</text>
			</view>
			<view class="list">
				<text>点类型</text>
				<text>固定点</text>
			</view>
			<view class="list">
				<text>巡查路线</text>
				<text>未设置</text>
			</view> -->
			<!-- <view class="list">
				<text>离线巡查</text>
				<image src="../../static/map.png" style="height: 120rpx;width: 120rpx;" @click="goWay">
				</image>
			</view>
			<view class="list">
				<text>拍照数量</text>
				<text>0 - 10</text>
			</view> -->
	</view>
</template>

<script>
import { updataPoint } from '../../api/updataPoint.js'
	export default {
		data() {
			return {
				 safeAreaInsets:'',
				 link:'',
				 pointItem:'', //点信息
				 Longitude:'',
				 Latitude:'',
				 address:''
			}
		},
		onLoad(option) {
			const encodedItem = option.data;
			const decodedItem = decodeURIComponent(encodedItem);
			const item = JSON.parse(decodedItem);
			this.pointItem = item
			this.Longitude = item.Longitude
			this.Latitude = item.Latitude
			this.address = item.address
			this.link = option.link
			this.safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets
		},
		methods:{
			async save(){
				const { data } = await updataPoint ({
					id: this.pointItem.id,
					dotname: this.pointItem.dotname,
					Longitude: this.Longitude,
					Latitude: this.Latitude,
					address: this.address,
					note: this.pointItem.note
				})
					uni.showToast({
						title: data.code === '200' ? '保存成功！' : '保存失败！',
						mask: true,
						icon:data.code === '200' ? 'success' : 'error',    //将值设置为 success 或者 'error'
						duration: 1000    //持续时间为 2秒
					})
			},
			backWay:()=>{
				uni.navigateBack({
					delta: 1,
				});
			},
			updata(){
				let that = this
				uni.chooseLocation({
					success: function (res) {
						uni.showToast({
							title: '位置更新成功！',
							mask: true,
							icon: 'success',    //将值设置为 success 或者 ''
							duration: 1000    //持续时间为 2秒
						})
						that.address = res.address
						that.Latitude = res.latitude.toFixed(2)
						that.Longitude = res.longitude.toFixed(2)
					},
					fail:function(res){
						uni.showToast({
							title: '位置更新失败！',
							mask: true,
							icon: 'error',    //将值设置为 success 或者 ''
							duration: 1000    //持续时间为 2秒
						})  
					}
				});
			},
			// 打开的点击事件，传经纬度和地点名
			gomapApp(latitude,longitude,name){
			    let url = "";
					plus.nativeUI.actionSheet({//选择菜单
					    title: "选择地图应用",
					    cancel: "取消",
					    buttons: [{title: "腾讯地图"},{title: "百度地图"}, {title: "高德地图"}]
					}, function(e) {
					    switch (e.index) {
							//下面是拼接url,不同系统以及不同地图都有不同的拼接字段
					        case 1:
							    //注意referer=xxx的xxx替换成你在腾讯地图开发平台申请的key
					            url = `qqmap://map/geocoder?coord=${latitude},${longitude}&referer=xxx`;
					            break;
					        case 2:
					            url = `baidumap://map/marker?location=${latitude},${longitude}&title=${name}&coord_type=gcj02&src=andr.baidu.openAPIdemo`;
					            break;
							case 3:
							    url = `androidamap://viewMap?sourceApplication=appname&poiname=${name}&lat=${latitude}&lon=${longitude}&dev=0`;
								break;
					        default:
					            break;
					    }
					    if (url != "") {
					        url = encodeURI(url);
							//plus.runtime.openURL(url,function(e){})调起手机APP应用
					        plus.runtime.openURL(url, function(e) {
					            plus.nativeUI.alert("本机未安装指定的地图应用");
					        });
						}
					})
				}
		}
	}
</script>

<style lang="scss">
.container{
	.header{
		display: flex;
		position: relative;
		height: 100rpx;
		background-color: #c53736;
		line-height: 100rpx;
		font-weight: 700;
		color: white;
		padding: 0 30rpx;
		margin-bottom: 30rpx;
		.iconfont{
			font-size: 50rpx;
		}
		.title{
			position: absolute;
			left: 50%;
			transform: translate(-50%);
		}
	}
	.content{
		width: 90%;
		margin: 0 auto;
		.list{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx;
			color: #666965;
			height: 100rpx;
			border-bottom: 4rpx solid #e9ebe8;
		}
	}
	.btn {
		margin-top: 40rpx;
		width: 90%;
	}
}
</style>
