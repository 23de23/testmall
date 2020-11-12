<template>
	<div class="shopcargoodsitem">

		<div class="item_se" @click="dianjicoloer">
			<img src="../../../assets/img/cart/tick.svg" class="item_se_img1" v-if="this.$store.state.cardata[index].select" />
			<img src="../../../assets/img/cart/tick.svg" class="item_se_img2" v-else />
		</div>


		<div>
			<img :src="img" class="item_img">
		</div>

		<div class="item_info">
			<div class="item_title">{{title}}</div>
			<div class="item_desc">{{desc}}</div>

			<div class="item_bo">
				<div class="item_bo1 left">￥{{price}}</div>
				<div class="item_bo2 right">
					<button class="btn" @click="dianjijia">+</button> x{{number}} <button class="btn" @click="dianjijian">-</button>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	export default {
		name: 'shopcargoodsitem',
		props: {
			img: {
				type: String,
				default: ''
			},
			price: {
				type: String
			},
			number: {
				type: Number
			},
			desc: {
				type: String
			},
			title: {
				type: String
			},
			index:{
				type:Number
			}
		},
		data() {
			return {
				coler:null,
			}
		},
		methods: {
			dianjicoloer() {
				this.$store.commit('selectif',this.index)
				if (this.coler) {
					this.coler = !this.coler
				} else {
					this.coler = !this.coler
				}
			},
			dianjijia(){
				// this.number += 1
				this.$store.commit('adddatanumber',this.index)
			},
			dianjijian(){
				if(this.number >= 2){
				this.$store.commit('readddatanumber',this.index)
				}else{
					alert('不能在少了')
				}
			}
		},
		created(){
			this.coler=this.$store.state.cardata[this.index]
		},
	}
</script>

<style scoped>
	.shopcargoodsitem {
		width: 100vw;
		display: flex;
		padding: 5px;
		border-bottom: 1px solid #cccccc;
	}

	.item_img {
		display: block;
		width: 80px;
		height: 100px;
		border-radius: 5px;
		object-fit: cover;
	}

	.item_info {
		font-size: 17px;
		position: relative;
		overflow: hidden;
		width: 88%;
		padding: 5px 10px;
		color: #333333;
	}

	.item_title,
	.item_desc {
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.item_info .item_desc {
		font-size: 14px;
		margin-top: 15px;
		color: #666666;
	}

	.item_bo {
		position: absolute;
		right: 10px;
		left: 10px;
		bottom: 10px;
		margin-top: 10px;
	}

	.item_se {
		width: 12%;
		text-align: center;
		line-height: 100px;
		padding-right: 5px;
	}

	.item_se_img1 {
		background-color: #ff8097;
		border-radius: 100%;
		border: #ff8097 solid 2px;
	}


	.item_se_img2 {
		/* background-color: #ff8097; */
		border-radius: 100%;
		border: #ff8097 solid 2px;
	}

	.btn {
		height: 20px;
		width: 20px;

	}
</style>
