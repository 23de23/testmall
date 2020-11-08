<template>
	<Swiper class='detailswiper'>
	  <SwiperItem v-for="item in banner">
	    
	      <img :src="item" >
	    
	  </SwiperItem>
	</Swiper>
	
</template>

<script>
	
	import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
	
	export default{
		name:'detailSwiper',
		components:{
			Swiper,
			SwiperItem
		},
		props:{
			banner:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.detailswiper{
		height: 300px;
		overflow: hidden;
	}
</style>
