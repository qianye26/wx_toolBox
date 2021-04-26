<template>
	<view class="list">
		<view class="list-item" v-for="item in list" :key='item.id'>
			<view class="name">{{item.name}}</view>
			<view class="input">
				<input type="number" placeholder="请输入数字">
				<uni-icons type="forward" size="25" ></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"converList",
		data() {
			return {
				
			};
		},
		props:['list']
	}
</script>

<style lang="less">
	.length {
		.list {
			margin: 20rpx 20rpx;
			background-color: #fff;
			.list-item {
				display: flex;
				.name {
					flex: 2;
					text-align: center;
					border-right: 4rpx solid  #f3f3f3;
					border-bottom: 4rpx solid #f3f3f3;
					font-size: 30rpx;
					line-height: 200%;
					color: #666;
				}
				.input {
					flex: 3;
					display: flex;
					border-bottom: 4rpx solid #f3f3f3;
					align-items: center;
					input {
						padding-left: 20rpx;
						font-size: 30rpx;
						color: #666;
					}
				}
			}
		}
	}
</style>
