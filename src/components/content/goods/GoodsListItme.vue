<template>
	<div class="goods-list-item" @click="gooditemclick">

		<img :src="showimg" class="goods-img" @load="imgitemload" />
		<div class='goods-text'>
			<p>{{goodsitem.title}}</p>
			<div goods-span>
				<span class="goods-price">{{goodsitem.price}}</span>
				<span class="goods-collect">{{goodsitem.cfav}}</span>
			</div>
		</div>


	</div>
</template>

<script>
	export default {
		name: 'GoodsListItme',
		props: {
			goodsitem: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		computed:{
			showimg(){
				return this.goodsitem.image || this.goodsitem.show.img
			}
		},
		methods: {
			imgitemload() {
				this.$bus.$emit('imgitemload')
				// console.log(this.$bus)
				
			},
			gooditemclick() {
				this.$router.push('/detail/' + this.goodsitem.iid)
			}
		}
	}
</script>

<style>
	.goods-list-item {
		width: 48%;
		position: relative;
	}

	.goods-img {
		width: 100%;
		border-radius: 5px;
	}

	.goods-text {
		font-size: 14px;
		height: 40px;
	}

	.goods-text p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 3px;
	}

	.goods-price {
		color: var(--color-high-text);
		margin-right: 20px;
	}

	.goods-collect::before {
		content: '';
		position: absolute;
		left: 40px;
		top: ;
		width: 14px;
		height: 14px;
		background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
	}
</style>
