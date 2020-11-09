<template>
	<div class="detailbottombar">
		<div class="detailbottombar_kefu"><img src="~assets/img/detail/ask.png">
			<div>客服</div>
		</div>
		<div class="detailbottombar_dianpu"><img src="~assets/img/detail/footer1.png">
			<div>店铺</div>
		</div>
		<div class="detailbottombar_shoucang" @click="shoucang">
			<img src="~assets/img/detail/detail_bottom_02.jpg" v-if="dianji">
			<img src="~assets/img/detail/detail_bottom_06.jpg" v-else>
			<div>收藏</div>
		</div>
		<div class="detailbottombar_car">加入购物车</div>
		<div class="detailbottombar_buy">购买</div>
	</div>
</template>

<script>
	export default {
		name: 'detailbottombar',
		data(){
			return{
				dianji:true
			}
		},
		methods:{
			shoucang(){
				this.dianji = ! this.dianji
			}
		}
	}
</script>

<style scoped>
	.detailbottombar {
		position: fixed;
		left: 0px;
		height: 49px;
		right: 0px;
		bottom: 0px;
		background-color: #FFFFFF;
		z-index: 11;
		text-align: center;
		display: flex;


	}

	.detailbottombar_kefu {
		flex: 1;
		font-size: 12px;
		float: left;
		margin-top: 5px;
	}

	.detailbottombar_kefu img {
		float: none;
		height: 20px;
		width: 20px;
	}

	.detailbottombar_dianpu {
		flex: 1;
		font-size: 12px;
		float: left;
		margin-top: 5px;
	}

	.detailbottombar_dianpu img {
		float: none;
		height: 20px;
		width: 20px;
	}

	.detailbottombar_shoucang {
		flex: 1;
		font-size: 12px;
		float: left;
		margin-top: 5px;
	}

	.detailbottombar_shoucang img {
		float: none;
		height: 20px;
		width: 20px;
	}

	.detailbottombar_car {
		line-height: 49px;
		font-size: 14px;
		float: left;
		background-color: gold;
		width: 35%;
	}

	.detailbottombar_buy {
		line-height: 49px;
		font-size: 14px;
		float: left;
		background-color: #BD362F;
		width: 25%;
	}
</style>
