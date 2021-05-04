<template>
	<view class="container">
		<view class="tellphone"><input type="number" placeholder="请输入手机号码" v-model="tell" /></view>
		<view class="btn"><button type="primary" @click="btnClick">查询</button></view>
		<view class="showInfo" v-if="isShow">
			<text>电话号码： {{ tell }}</text>
			<text>省： {{ infodata.province }}</text>
			<text>市： {{ infodata.city }}</text>
			<text>区号： {{ infodata.areacode }}</text>
			<text>运营商： {{ infodata.company }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tell: '',
			infodata: {},
			isShow: false
		};
	},
	methods: {
		async btnClick() {
			let tell = this.tell;
			let reg = new RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/);
			if (!tell.trim()) {
				uni.showToast({
					title:'请输入手机号'
				})
			} else if (reg.test(tell)) {
				let str = 'http://apis.juhe.cn/mobile/get?key=9bb35307b441cad2ca8d45085b0c9a4f&phone=';
				let url = str.concat(tell);
				const res = await this.$myRequest({
					url
				});
				this.infodata = res.data.result;
				if (this.infodata) {
					this.isShow = true;
					uni.showToast({
						title:'查询成功'
					})
				}
			} else {
				uni.showToast({
					title:'手机格式错误'
				})
			}
		}
	}
};
</script>

<style lang="less">
.container {
	.tellphone {
		border: 1px solid #45b787;
		width: 500rpx;
		height: 100rpx;
		border-radius: 30rpx;
		margin: 180rpx auto 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.btn {
		width: 150px;
		margin: 0 auto;
	}
	.showInfo {
		width: 600rpx;
		height: 250rpx;
		background-color: #ccc;
		margin: 80rpx auto;
		border-radius: 30rpx;
		padding: 20rpx 20rpx;
		display: flex;
		flex-direction: column;
		line-height: 50rpx;
	}
}
</style>
