<template>
	<div class="RecommendView">
		<a v-for="item in recommend" :href="item.link" class="RecommendView-item">
			<img :src="item.image"/>
			<div>{{item.title}}</div>
		</a>
	</div>
</template>

<script>
	export default{
		name:'RecommendView',
		props:{
			recommend:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.RecommendView{
		display: flex;
		width: 100%;
		text-align: center;
		font-size: 12px;
		
		padding: 10px 0px  20px;
		border-bottom: 10px solid #eee;
	}
	
	.RecommendView-item{
		flex: 1;
	}
	
	.RecommendView-item img{
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}
</style>
