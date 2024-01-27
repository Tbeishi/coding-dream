import baseURL from '../utils/http.js'

//登录接口请求
export const getPoint = () =>{
	return uni.request({
		url:baseURL + '/xungeng/xunjiandian',
		method:'GET',
	})
}