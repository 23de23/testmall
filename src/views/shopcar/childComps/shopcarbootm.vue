<template>
	<div class="shopcarbootm">
		<div class="shopcarbootm_1" @click="selectall">
			<img src="../../../assets/img/cart/tick.svg" class="allimg1" v-if="this.$store.getters.selctinfo" />
			<img src="../../../assets/img/cart/tick.svg" class="allimg2" v-else />
			全选
		</div>
		<div class="shopcarbootm_2">合计:￥{{this.$store.getters.getallprice}}</div>
		<div class="shopcarbootm_3">去结算({{this.$store.getters.getnumber}})</div>
	</div>
</template>

<script>
	export default {
		name: 'shopcarbootm',
		methods:{
			selectall(){
				if(this.$store.getters.selctinfo){
					this.$store.commit('selectunall')
				}else{
					this.$store.commit('selectall')
				}
			}
		}

	}
</script>

<style scoped>
	.shopcarbootm {
		display: flex;
		height: 30px;
		background-color: #ededed;
		position: absolute;
		left: 0px;
		right: 0px;
		bottom: 49px;
	}


	.shopcarbootm_1 {
		width: 20%;
		font-size: 12px;
		
		text-align: center;
		line-height: 30px;
	}

	.shopcarbootm_2 {
		width: 50%;
		text-align: center;
		line-height: 30px;
		font-size: 14px;
	}

	.shopcarbootm_3 {
		width: 30%;
		text-align: center;
		line-height: 30px;
		font-size: 14px;
		background-color: red;
		color: #FFFFFF;
	}
	
	.allimg1{
		background-color: #FF0000;
		border-radius: 100%;
	}
</style>
