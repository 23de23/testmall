<template>
	<Swiper>
	  <SwiperItem v-for="item in banner">
	    <a :href="item.link">
	      <img :src="item.image" @load="imgonload">
	    </a>
	  </SwiperItem>
	</Swiper>
</template>

<script>
	import {getHomeMultidata} from 'network/home.js'
	import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
	

	export default {
		name: 'HomeSwiper',
		components:{
			Swiper,
			SwiperItem
		},
		data() {
			return {
				banner:null,
			}
		},
		methods: {
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banner = res.data.banner.list
					// console.log(res.data.banner.list)
				})
			},
			imgonload(){
				console.log('图片加载完成')
				this.$emit('imgonload')
			}
		},
		created() {
			this.getHomeMultidata()
		}
	}
</script>

<style>
</style>
