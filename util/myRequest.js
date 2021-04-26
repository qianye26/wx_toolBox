function myRequest(options){
	return new Promise((resolve,reject)=> {
		uni.request({
			url:options.url,
			method:options.method || 'GET',
			data:options.data || {},
			success:(res) =>{
				resolve(res)
			},
			fail:(err)=>{
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}

module.exports = {
	myRequest
}