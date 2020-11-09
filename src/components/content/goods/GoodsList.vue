<template>
	<div class="goods-list">
		<GoodsListItme v-for='item in goods' :goodsitem='item'></GoodsListItme>
	</div>
</template>

<script>
	import GoodsListItme from './GoodsListItme.vue'
	
	export default{
		name:'GoodsList',
		components:{
			GoodsListItme
		},
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-top: 30px;
	}
</style>
