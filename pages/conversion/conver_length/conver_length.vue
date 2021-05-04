<template>
	<view class="length">
		<van-cell-group>
			<van-field :value="qianmi" title-width autosize type="number" label="公里(kilometre)" placeholder="请输入数字" bind:click-icon="onClickIcon" @change="changeqianmi" />
			<van-field :value="mi" title-width autosize type="number" label="米(metre)" placeholder="请输入数字" bind:click-icon="onClickIcon" @change="changemi" />
			<van-field :value="fenmi" title-width autosize type="number" label="分米(decimeter)" placeholder="请输入数字" bind:click-icon="onClickIcon" @change="changefenmi" />
			<van-field :value="limi" title-width autosize type="number" label="厘米(centimeter)" placeholder="请输入数字" bind:click-icon="onClickIcon" @change="changelimi" />
			<van-field :value="haomi" title-width autosize type="number" label="毫米(millimeter)" placeholder="请输入数字" bind:click-icon="onClickIcon" @change="changehaomi" />
			<van-field :value="weimi" title-width autosize type="number" label="微米(micrometer)" placeholder="请输入数字" bind:click-icon="onClickIcon" @change="changeweimi" />
		</van-cell-group>

		<button size="mini" type="primary" @click="reset">重置</button>
	</view>
</template>

<script>
import converList from '../../../components/converList.vue';
export default {
	data() {
		return {
			qianmi: '',
			mi: Number,
			fenmi: Number,
			limi: Number,
			haomi: Number,
			weimi: Number,
			data: 0
		};
	},
	components: {
		'conver-list': converList
	},
	methods: {
		changeqianmi(e) {
			console.log(e.detail);
			this.qianmi = e.detail;
		},
		changemi(e) {
			this.mi = e.detail;
		},
		changefenmi(e) {
			this.fenmi = e.detail;
		},
		changelimi(e) {
			this.limi = e.detail;
		},
		changehaomi(e) {
			this.haomi = e.detail;
		},
		changeweimi(e) {
			this.weimi = e.detail;
		},
		reset() {
			this.qianmi = 0
			}
	},
	watch: {
		qianmi(value, old) {
			this.mi = value * 1000;
		},
		mi(value, old) {
			this.qianmi = value / 1000;
			this.fenmi = value * 10;
		},
		fenmi(value, old) {
			this.limi = value * 10;
			this.mi = value / 10;
		},
		limi(value, old) {
			this.haomi = value * 10;
			this.fenmi = value / 10;
		},
		haomi(value, old) {
			this.weimi = value * 1000;
			this.limi = value / 10;
		},
		weimi(value, old) {
			this.haomi = value / 1000;
		}
	}
};
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
	position: relative;
	top: 50rpx;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
