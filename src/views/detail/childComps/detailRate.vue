<template>
	<div class="detailRate">
		
		<div class="moreRate">
			<div class="moreRate_left">
				用户评价
			</div>
			<div class="moreRate_right">
				更多
			</div>
		</div>

		<div>
			
				<img :src="rate.userImg" class='user_img'/>
			
			<span class="user_name">{{rate.userName}}</span>
		</div>

		<div class="Content">
			<span class="Content_Content">{{rate.userContent}}</span>
			
			<div class="Content_ts">
			<span class="Content_time">{{rate.time}} </span>
			<span class="Content_style">{{rate.style}}</span>
				
			</div>
		</div>

		<div class="detailRate_div">
			<img v-for="item in rate.contentImg" :src="item" />
		</div>

	</div>
</template>

<script>
	export default {
		name: 'detailRate',
		props: {
			rate: {
				type: Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.detailRate {
	margin-bottom: 5px;
	margin-top: 20px;
	}
	
	.moreRate{
		height: 30px;
		text-align: center;
		line-height: center;
		margin-top: 15px;
		font-size: 14px;
		border-bottom:4px solid rgba(0,0,0,.05);
	}
	
	.moreRate_left{
		float: left;
		margin-left: 5px;
	}
	
	.moreRate_right{
		float: right;
		margin-right: 5px;
		
	}
	
	.user_img {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		overflow: hidden;
		
		margin-top: 10px;
		margin-left: 5px;
	}
	
	.user_name {
		position: absolute;
		font-size: 14px;
		margin-top: 22px;
		margin-left: 10px;
	}
	.Content{
		margin: 10px 8px;
	}
	
	.Content_Content{
		font-size: 14px;
	}
	
	.Content_ts{
		margin-top: 5px;
	}
	
	.Content_time{
		font-size: 11px;
	}
	
	.Content_style{
		font-size: 11px;
	}
	
	.detailRate_div{
		margin-left: 5px;
	}
	
	.detailRate_div img{
		height: 70px;
		width: 70px;
		margin-right: 5px;
	}
</style>
