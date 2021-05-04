<template>
	<view class="timer">
		<van-count-down :time="time" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 time: 30 * 60 * 60 * 1000,
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
