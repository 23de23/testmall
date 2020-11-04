<template>
	<div class="goods-list-item">
		<a :href="goodsitem.link">
			<img :src="goodsitem.show.img" class="goods-img" @load="imgitemload"/>
			<div class='goods-text'>
			<p>{{goodsitem.title}}</p>
			<div goods-span>
			<span class="goods-price">{{goodsitem.price}}</span>
			<span class="goods-collect">{{goodsitem.cfav}}</span>
			</div>
			</div>
		</a>
		
	</div>
</template>

<script>
	export default{
		name:'GoodsListItme',
		props:{
			goodsitem:{
				type:Object,
				default(){
					return []
				}
			}
		},
		methods:{
			imgitemload(){
				this.$bus.$emit('imgitemload')
				// console.log(this.$bus)
			}
		}
	}
</script>

<style>
	.goods-list-item{
		width: 48%;
		position: relative;
	}
	
	.goods-img{
		width: 100%;
		border-radius: 5px;
	}
	
	.goods-text{
		font-size: 14px;
		height: 40px;
	}
	
	.goods-text p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 3px;
	}
	
	.goods-price{
		color: var(--color-high-text);
		margin-right: 20px;
	}
	
	 .goods-collect::before {
	  content: '';
	  position: absolute;
	  left:40px ;
	  top: ;
	  width: 14px;
	  height: 14px;
	  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
	}
</style>
