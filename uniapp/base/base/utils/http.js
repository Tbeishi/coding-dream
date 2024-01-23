const baseURL = 'http://119.23.47.58:8891'
export default baseURL
//添加拦截器
// const httpInterceptor = {
// 	//不是http开头拼接地址
// 	invoke(options){
// 		if(!options.url.startsWith('http')){
// 			options.url = baseURL + options.url
// 		}
// 		console.log(options.url);
// 		options.timeout = 10000
// 		console.log(options);
// 	}
// }

// uni.addInterceptor('request',httpInterceptor)

// export const http = (option) => {
// 	return new Promise((resolve,reject)=>{
// 		uni.requset({
// 			...options,
// 			success(res){
// 				resolve(res)
// 			}
// 		})
// 	})
// }