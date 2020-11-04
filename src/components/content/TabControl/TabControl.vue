<template>
	<div class="tab-control">
		<div v-for="(item,index) in titles" class="tab-control-item" @click="dianji(index)" :class="{active:index===dianjiindex}">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabControl',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				dianjiindex:0
			}
		},
		methods:{
			dianji(index){
				this.dianjiindex=index 
				this.$emit('tabclick',index)
			}
		}
	}
</script>

<style>
	.tab-control{
		display: flex;
		text-align: center;
		font-size: 15px;
		height: 40px;
		line-height: 40px;
		background-color: #FFFFFF;
	}
	.tab-control-item{
		flex: 1;
	}
	.active{
		color: var(--color-high-text);
	}
	.active span {
		border-bottom:3px solid var(--color-tint)
	}
	.tab-control-item span{
		padding: 5px;
	}
</style>
