<template>
	<view class="calculator">
		<view class="result"><input type="text" v-model="data" /></view>
		<view class="button">
			<view class="button-item special" @click="back">
				<text>退格</text>
			</view>
			<view class="button-item special" @click="clearNum">
				<text>清屏</text>
			</view>
			<view class="button-item special">
			</view>
			<view class="button-item special" @click="AddSymbol('+')">
				<text>+</text>
			</view>
			<view class="button-item" @click="clickNum(7)">
				<text>7</text>
			</view>
			<view class="button-item" @click="clickNum(8)">
				<text>8</text>
			</view>
			<view class="button-item" @click="clickNum(9)">
				<text>9</text>
			</view>
			<view class="button-item special"  @click="AddSymbol('-')">
				<text>-</text>
			</view>
			<view class="button-item" @click="clickNum(4)">
				<text>4</text>
			</view>
			<view class="button-item" @click="clickNum(5)">
				<text>5</text>
			</view>
			<view class="button-item" @click="clickNum(6)">
				<text>6</text>
			</view>
			<view class="button-item special"  @click="AddSymbol('×')">
				<text>×</text>
			</view>
			<view class="button-item" @click="clickNum(1)">
				<text>1</text>
			</view>
			<view class="button-item" @click="clickNum(2)">
				<text>2</text>
			</view>
			<view class="button-item" @click="clickNum(3)">
				<text>3</text>
			</view>
			<view class="button-item special" @click="AddSymbol('÷')">
				<text big>÷</text>
			</view>
			<view class="button-item">
				<text></text>
			</view>
			<view class="button-item" @click="clickNum(0)">
				<text>0</text>
			</view>
			<view class="button-item" @click="clickDot()">
				<text>.</text>
			</view>
			<view class="button-item special" @click="getres">
				<text>=</text>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入rpn.js的calCommonExp方法 替代eval方法
import {calCommonExp} from '../../util/rpn.js'
	
export default {
	data() {
		return {
			data: '',
			// 
			flag: false
		};
	},
	methods: {
		// 点击数字按钮
		clickNum(num) {
			if(this.flag) {
				this.data = num + ''
				this.flag = false
			} else if(parseFloat(this.data) === 0) {
				this.data = num + ''
				// console.log(this.data)
			} else {
				this.data = this.data + num	+''
				// console.log(this.data)
			}
		},
		// 点击.
		clickDot() {
			let length = this.data.length
			let dataend = this.data.substr(length-1,1)
			let arr = this.data.replace(/÷/g,'+').replace(/-/g,'+').replace(/×/g,'+').split('+')
			if(dataend == '+' || dataend == '-' ||dataend == '×'||dataend == '÷'|| dataend == '.') {
				return
			} else if (arr[arr.length-1].includes('.')) {
				return
			}
			this.data = this.data + '.';
		
		},
		// 点击清屏按钮
		clearNum() {
			this.data = ''
		},
		// 点击退格按钮
		back() {
			let length = this.data.length
			if (length === 1 ) {
				this.data = 0 +'' 
			} else  {
				this.data = this.data.toString().substr(0,length-1)
			}
		},
		// 点击 加减乘除 显示到 结果上  并计算结果
		AddSymbol(f) {
			// 取得屏幕的最后一个字符
			let length = this.data.length
			let dataend = this.data.substr(length-1,1)
			if(length == 0 || this.data == '0') {
				return
			}  else if(dataend == '+' || dataend == '-' ||dataend == '×'||dataend == '÷') {
				return
			}
			else {
				this.data  = this.data + f
			}
		},
		// 点击等号
		getres() {
			let length = this.data.length
			// 取得屏幕的最后一个字符
			let dataend = this.data.substr(length-1,1)
			// 判断是否有运算符
			let check = this.data.includes('+') | this.data.includes('-') | this.data.includes('×') | this.data.includes('÷')
			if(!check || this.data.length == 0 || this.data == '0') {
				return
			} else if(dataend == '+' || dataend == '-' ||dataend == '×'||dataend == '÷') {
				return
			} else {
				let str = this.data.replace(/÷/g,'/').replace(/×/g,'*')
				this.data = calCommonExp(str)
				this.flag = true
			}
		}
	}
};
</script>

<style lang="less">
	page {
		height: 100%;
		width: 100%;
		background-color: #f3f3f3;
	}
.calculator {
	// width: 750%;
	// height: 100%;
	// overflow: hidden;
	.result {
		padding: 20rpx 10rpx;
		input {
			width: 95%;
			height: 90rpx;
			background-color: #fff;
			border-radius: 10rpx;
			margin: 0 auto;
			text-align: right;
			font-size: 50rpx;
		}
	}
	.button {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-content: flex-start;
		margin-top: 50rpx;
		.button-item {
			width: 22%;
			height: 160rpx;
			margin: 10rpx 10rpx 0 5rpx;
			background-color: pink;
			background-color: #45b787;
			border-radius: 20rpx;
			text-align: center;
			text {
				font-size: 50rpx;
				color: #fff;
				line-height: 160rpx;
				letter-spacing: 5rpx;
			}
		}
	}
}

.special {
	background-color: #f97d1c !important;
}
</style>
