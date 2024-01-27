<template>
	<view class="container">
		<view class="header" :style="{ paddingTop: safeAreaInsets ? safeAreaInsets.top + 20 + 'rpx' : '' }">
			<text class="iconfont icon-zuojiantou" @click="goback"></text>
			<view class="title">地理位置</view>
		</view>
		<view class="content">
			<view class="pic">
				<text class="iconfont icon-dingwei"></text>
				<text>暂未设置</text>
			</view>
			<text class="location">江西省赣州市XXXXXX</text>
			<button type="warn" class="btn" @click="gomapApp(latitude,longitude,'江西省赣州市五云镇')">导航到这里</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			 safeAreaInsets:'',
			 latitude: '',
			 longitude: '',
		}
	},
	onLoad(option) {
		this.safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets
		this.getLocation()
	},
	methods:{
		goback:()=>{
			uni.navigateBack({ "delta": 1 })
		},
		getLocation:()=>{
			uni.getLocation({
				type: 'gcj02',
				geocode:true,//设置该参数为true可直接获取经纬度及城市信息
				success: function (res) {
					const { latitude,longitude } = res
					this.latitude = latitude
					this.longitude = longitude
				},
					fail: function () {
						uni.showToast({
						title: '获取地址失败，将导致部分功能不可用',
						icon:'none'
					});
				}
			})
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
		.title {
			position: absolute;
			left: 50%;
			transform: translate(-50%);
		}
	}
	.content {
		.pic {
			margin: 120rpx 0 100rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			color: #29a9ed;
			font-size: 60rpx;
			.icon-dingwei {
				font-size: 300rpx;
				border-radius: 60rpx;
				color: #fefefc;
				background-color: #29a9ed;
				margin-bottom: 30rpx;
			}
		}
		.location {
			color: #6c6f6c;
			font-size: 40rpx;
			margin-left: 45rpx;
		}
		.btn {
			margin-top: 40rpx;
			width: 90%;
		}
	}
}
</style>
