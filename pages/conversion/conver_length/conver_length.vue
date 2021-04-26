<template>
	<view class="length">
		<conver-list :list="lists"></conver-list>
		<button size="mini" type="primary" >重置</button>
	</view>
</template>

<script>
	import converList from '../../../components/converList.vue'
	export default {
		data() {
			return {
				lists:[
					{
						id:1,
						name:'公里(kilometre)'
					},
					{
						id:2,
						name:'米(metre)'
					},
					{
						id:3,
						name:'分米(decimeter)'
					},
					{
						id:4,
						name:'厘米(centimeter)'
					},
					{
						id:5,
						name:'毫米(millimeter)'
					},
					{
						id:6,
						name:'微米(micrometer)'
					}
				],
				data:0
			}
		},
		components:{
			'conver-list':converList
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	page {
		width: 100%;
		height: 100%;
		background-color: #f3f3f3;
	}
	
	
	button {
		display: block;
		width: 30%;
		margin: 50rpx auto;
	}
</style>
