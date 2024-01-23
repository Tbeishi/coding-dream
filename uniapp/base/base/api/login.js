import baseURL from '../utils/http.js'

//登录接口请求
export const doLogin = (data) =>{
	return uni.request({
		url:baseURL + '/account/userInfo',
		method:'GET',
		data:data
	})
}