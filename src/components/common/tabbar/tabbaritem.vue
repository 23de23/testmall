<template>
	<div class="d" @click="itemclick">
		<div v-if="!isactive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activestyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		name: 'tabbaritme',
		props: {
			activecolor: {
				type: String,
				default: 'block'
			},
			path:{
				type:String
			}
		},
		data() {
			return {
				// isactive: true
			}
		},
		methods:{
			itemclick(){
				this.$router.push(this.path)
			}
		},
		computed:{
			isactive(){
				return this.$route.path.indexOf(this.path) !== -1
			},
			
			activestyle(){
				if(this.isactive){
					return {color:this.activecolor}
				}else{
					return {}
				}
			}
			
		}
	}
</script>

<style>
	.d {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}

	.d img {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: bottom;

	}
</style>
