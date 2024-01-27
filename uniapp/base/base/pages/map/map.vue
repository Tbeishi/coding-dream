<template>
	<view>
		<view class="header" :style="{ paddingTop: safeAreaInsets ? safeAreaInsets.top + 40 + 'rpx' : '' }">
			<view>
				巡检卫士
				<text class="iconfont icon-xiangxiajiantou"></text>
			</view>
			<text class="iconfont icon-caidan"></text>
		</view>
		<map style="width: 100%; height: 100vh" 
		:latitude="latitude" 
		:longitude="longitude" 
		:markers="markers" 
		@callouttap="callout"
		@markertap="marktap"
		:scale="20"
		>
		</map>
	</view>
</template>

<script>
import coordtransform from 'coordtransform';
import { getPoint } from '../../api/point.js';
export default {
	data() {
		return {
			safeAreaInsets: '',
			id: 0, // 使用 marker点击事件 需要填写id
			title: 'map',
			latitude: 0,
			longitude: 0,
			info_list:[], //标记点信息
			markers: [
				// {
				// 	id:1,
				// 	latitude: 13.0,
				// 	longitude: 21.0,
				// 	iconPath: '/static/map.png',
				// 	callout: {
				// 		content: '标记点1\n\n去导航\n',
				// 		display: 'ALWAYS',
				// 		color: 'blue',
				// 		fontSize: 12,
				// 		bgColor: '#F76425',
				// 	}
				// },
			]
		}
	},
	onShow() {
		this.getdata()
	},
	onLoad() {
		this.safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets;
	},
	methods: {
		callout(e){
			const res = this.info_list.find(item=> item.id === e.detail.markerId)
			this.gomapApp(res.Latitude, res.Longitude,res.address)
		},
		marktap(e){
			console.log('marktap',e.detail);
		},
		getdata(){
			this.markers = []
			getPoint().then(res=>{
				this.info_list = res.data.data.info_list
				this.latitude = this.info_list[0].Latitude
				this.longitude = this.info_list[0].Longitude
				this.info_list.forEach(item=>this.markers.push({
					id:item.id,
					latitude: item.Latitude,
					longitude: item.Longitude,
					iconPath: '/static/map.png',
					callout: {
						content: `${item.address}\n`,
						display: 'ALWAYS',
						color: 'blue',
						fontSize: 12,
						bgColor: '#F76425',
					}
				}))   
			});
		},
		// 打开的点击事件，传经纬度和地点名
		gomapApp(latitude, longitude, name) {
			let url = '';
			plus.nativeUI.actionSheet(
				{
					//选择菜单
					title: '选择地图应用',
					cancel: '取消',
					buttons: [{ title: '腾讯地图' }, { title: '百度地图' }, { title: '高德地图' }]
				},
				function (e) {
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
					if (url != '') {
						url = encodeURI(url);
						//plus.runtime.openURL(url,function(e){})调起手机APP应用
						plus.runtime.openURL(url, function (e) {
							plus.nativeUI.alert('本机未安装指定的地图应用');
						});
					}
				}
			);
		}
	}
};
</script>

<style lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60rpx;
	background-color: #c53736;
	line-height: 100rpx;
	font-weight: 700;
	color: white;
	padding: 0 30rpx 20rpx;
	.iconfont.icon-caidan {
		font-size: 50rpx;
	}
}
</style>
