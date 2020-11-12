<template>
	<div>
		<navbar class="navbar"><div slot="center">购物车({{$store.state.cardata.length}})</div></navbar>
		<shopcarbootm></shopcarbootm>
		
		
		<Scroll class='Scroll_hei'>
		<shopcargoods></shopcargoods>

		</Scroll>
		
	</div>
</template>

<script>
	import navbar from 'components/common/navbar/navbar.vue'
	import shopcargoods from './childComps/shopcargoods.vue'
	import shopcarbootm from './childComps/shopcarbootm.vue'
	
	import Scroll from 'components/common/scroll/scroll.vue'
	
	export default {
		name: 'shopcar',
		components:{
			navbar,
			shopcargoods,
			Scroll,
			shopcarbootm
		}
	}
</script>

<style scoped>
	.navbar{
		background-color: #ff8097;
		font-size:16px ;
		color: #FFFFFF;
	}
	
	.Scroll_hei{
		height: calc(100vh - 123px);
		/* height: 400px; */
	}
	
</style>
