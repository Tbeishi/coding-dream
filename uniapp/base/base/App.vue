<script>
	export default {
		onLaunch: function() {
			this.safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets
		    uni.onTabBarMidButtonTap(()=>{
				// 使用uniapp提供扫码api
				      uni.scanCode({
				        scanType: ['qrCode'],
				       // 扫码成功后的回调
				        success: (res) => {
				        // res中包含二维码中的信息，其中就有网络链接
				        // 使用navigateTo跳转，并且携带参数，参数为二维码中的链接
				          uni.navigateTo({
				            // 这里注意，此地址只是自己提前写好的，并且路径前面一定要加/
				            url:`/pages/webPage/webPage?link=${res.result}`
				          })
				        }
				      })
		    })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style lang="scss">
@import url('https://at.alicdn.com/t/c/font_4420098_lenet3okjs.css');
</style>
