<template>
	<view class="weather" v-if="isShow">
		<view class="main">
			<view class="main_info">
				<text class="number">{{todaydata.temperature ? todaydata.temperature + '°': ''}}</text>
				<text>{{todaydata.info ? todaydata.info : ''}}</text>
			</view>
			<view class="sub_info">
				<text class="wind">{{todaydata.direct ? todaydata.direct : ''}}{{todaydata.power ? todaydata.power : ''}}</text>
				<text class="humidity">湿度{{todaydata.humidity? todaydata.humidity :''}}%</text>
			</view>
		</view>
		<view class="future">
			<view class="today">
				<view class="info">
					<text>今天</text>
					<text class="number">{{futureList[0].temperature? futureList[0].temperature:''}}</text>
				</view>
				<text class="status">{{futureList[0].weather?futureList[0].weather:''}}</text>
			</view>
			<view class="tomorrow">
				<view class="info">
					<text>明天</text>
					<text class="number">{{futureList[1].temperature?futureList[1].temperature:''}}</text>
				</view>
				<text class="status">{{futureList[1].weather?futureList[1].weather:''}}</text>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			todaydata:[],
			futureList:[],
			localtion:'',
			city:'',
			isShow:false
		}
	},
	components:{
	},
	onLoad() {
		// 弹窗 提示是否获取地理位置
		this.getLocation()
		// 调用 获取天气预报数据 函数
	},
	methods: {
		// 获取天气预报数据
		async getWeather() {
			let str = 'https://apis.juhe.cn/simpleWeather/query?key=4d822b8c9b8b3de1ebd6e7f85438e45f&city='
			let url = str.concat(this.city)
			console.log(this.city)
			console.log(url)
			const res = await this.$myRequest({
				url:url
			})
			let weatherlist = res.data.result.future
			let realtime = res.data.result.realtime
			console.log(weatherlist,realtime)
			this.todaydata = realtime
			this.futureList = weatherlist
		},
		// 弹窗 提示是否获取地理位置
		getLocation() {
			let that = this
			let localtion = ''
			let str = 'https://restapi.amap.com/v3/geocode/regeo?key=2655125337e3b981114136954d42fb23&location='
			let url = ''
			uni.getLocation({
				success: (res) => {
					this.isShow = true
					localtion = res.longitude + ',' + res.latitude
					url = str.concat(localtion)
					this.$myRequest({
						url
					})
					.then(function(res){
						that.city = res.data.regeocode.addressComponent.city.split('市')[0]
						that.getWeather()
					})
				}
			})
		} 
	},
}
</script>

<style lang="less">
	page {
		width: 100%;
		height: 100%;
		background-color: #f3f3f3;
	}
	.weather {
		.main {
			width: 100%;
			height: 500rpx;
			background-image: linear-gradient(to top,#fff,#3a8be6);
			position: relative;
			border-bottom: 1rpx solid #ccc;
			.main_info {
				position: absolute;
				top: 45%;
				left: 50%;
				transform: translate(-50%,-50%);
				.number {
					font-size: 140rpx;
				}
				text {
					font-size: 50rpx;
				}
			}
			.sub_info {
				position: absolute;
				top: 70%;
				left: 50%;
				transform: translate(-50%,-50%);
				text {
					opacity: .8;
					font-size: 30rpx;
				}
				.wind{
					margin-right: 40rpx;
				}
				.humidity {
					
				}
			}
		}
		.future {
			display: flex;
			padding: 30rpx 20rpx;
			background-color: #fff;
			.today{
				flex: 1;
				border-right: 2rpx solid #ccc;
				.info{
					text {}
					.number {
						margin-left: 130rpx;
					}
				}
				.status {
					float: right;
					margin: 20rpx 30rpx 0 0;
				}
			}
			.tomorrow {
				flex: 1;
				margin-left: 30rpx;
				.info{
					.number {
						margin-left: 130rpx;
					}
				}
				.status {
					float: right;
					margin: 20rpx 30rpx 0 0;
				}
			}
		}
	}
</style>
