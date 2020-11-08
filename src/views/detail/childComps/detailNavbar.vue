<template>
	<div>
	<navbar>
		<div slot="left" class="back" @click="backimg">
			<img src="~assets/img/common/back.svg"/>
		</div>
		<div slot="center" class="titles">
			<div class="titles_item"  :class="{active:clickindex === index}" @click="clickitem(index)" v-for="(item,index) in titles">{{item}}</div>
		</div>
	</navbar>
	</div>
</template>

<script>
	import navbar from 'components/common/navbar/navbar.vue'
	
	
	export default{
		name:'detailNavbar',
		data(){
			return{
			titles:['商品', '参数', '评论', '推荐'],
			clickindex:0
			}
		},
		components:{
			navbar
		},
		methods:{
			clickitem(index){
				this.clickindex = index
			},
			backimg(){
				this.$router.go(-1)
			}
		}
		
	}
</script>

<style scoped>
	.titles{
		display:flex;
		font-size: 14px;
	}
	
	.titles_item{
		flex: 1;
	}
	
	.active{
		color: var(--color-high-text)
	}
	
	
	.back img{
		margin-top: 10px;
	}
</style>
