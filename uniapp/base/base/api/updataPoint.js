import baseURL from '../utils/http.js'

//登录接口请求
export const updataPoint = (data) =>{
	return uni.request({
		url:baseURL + '/xungeng/xunjiandian',
		method:'PUT',
		data:data,
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}