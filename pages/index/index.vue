<template>
	<view class="home">
		<view class="toolList">
			<!-- 计算器模块 -->
			<view class="list-item" @click="GoCalculator">
				<image src="../../static/tool/Calculator.jpg" mode="aspectFill"></image>
				<text>计算器</text>
			</view>
			<!-- 单位换算模块 -->
			<view class="list-item" @click="GoConservison">
				<image src="../../static/tool/conversion.jpg" mode="aspectFill"></image>
				<text>单位换算</text>
			</view>
			<!-- 天气预报 -->
			<view class="list-item" @click="GoWeather">
				<image src="../../static/tool/weather.jpg" mode="aspectFill"></image>
				<text>天气预报</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		// 进入计算器页面
		GoCalculator() {
			uni.navigateTo({
				url:"../calculator/calculator"
			})
		},
		// 进入单位换算模块
		GoConservison() {
			uni.navigateTo({
				url:"../conversion/conversion"
			})
		},
		// 进入天气预报模块
		GoWeather() {
			uni.navigateTo({
				url:'../weather/weather'
			})
		}
	}
};
</script>

<style lang="less">
.home {
	.toolList {
		width: 750rpx;
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		.list-item {
			width: 187.5rpx;
			height: 187.5rpx;
			margin: 30rpx 0 10rpx 0;
			// background-color: pink;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			image {
				height: 130rpx;
				width: 130rpx;
				margin-bottom: 10rpx;
			}
			text {
				font-size: 30rpx;
			}
		}
	}
}
</style>
