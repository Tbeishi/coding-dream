<template>
	<view>
		<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
		</map>
	</view>
</template>

<script>
	export default {
		data() {
				return {
					id:0, // 使用 marker点击事件 需要填写id
					title: 'map',
					latitude: 39.909,
					longitude: 116.39742,
					covers: [{
						latitude: 39.909,
						longitude: 116.39742,
						iconPath: '../../../static/location.png'
					}, {
						latitude: 39.90,
						longitude: 116.39,
						iconPath: '../../../static/location.png'
					}]
				}
			},
		onLaunch() {
			uni.chooseLocation({
				success: function (res) {
					console.log('位置名称：' + res.name);
					console.log('详细地址：' + res.address);
					console.log('纬度：' + res.latitude);
					console.log('经度：' + res.longitude);
				}
			});
		},
		methods: {
		
		}
	}
</script>

<style>

</style>
