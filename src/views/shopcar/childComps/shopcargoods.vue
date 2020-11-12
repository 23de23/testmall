<template>
	<div class="shopcargoods">
		<shopcargoodsitem v-for="(item,index) in $store.state.cardata" :img='item.img' :desc='item.desc' :price='item.price' :number='item.number' :title='item.title' :index='index'>
			
		</shopcargoodsitem>
	</div>
</template>

<script>
	import shopcargoodsitem from './shopcargoodsitem.vue'
	
	
	export default{
		name:'shopcargoods',
		components:{
			shopcargoodsitem
		}
	}
</script>

<style scoped>
	.shopcargoods{}
</style>
