<template>
	<div id="home" >
		<navbar class="home-nav" >
			<div slot="center">购物街</div>
		</navbar>
		
		<tab-control ref='tabcontrol1' class:='tab-control1' @tabclick='tabclick($event)' :titles="['流行','新款','精选']" v-show="imgonload_data_buer"></tab-control>
			
		<scroll @scroll='contentScroll' ref='scroll' @pullingUp='pullingUp' class="homeScroll">
					<home-swiper @imgonload='imgonload'></home-swiper>
					<recommend-view :recommend='recommend'></recommend-view>
					<feature></feature>
					<tab-control class:='tab-control' v-show="!imgonload_data_buer" ref='tabcontrol2' @tabclick='tabclick($event)' :titles="['流行','新款','精选']"></tab-control>
					<GoodsList :goods='tabcontrol_data'></GoodsList>
		</scroll>
		
		<backtop v-show="isShowBackTop" @click.native="backClick" ></backtop>


	</div>
</template>


<script>
	import {
		getHomeMultidata,
		getHomeGoods
	} from 'network/home.js'

	import navbar from 'components/common/navbar/navbar.vue'
	import TabControl from 'components/content/TabControl/TabControl.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import scroll from 'components/common/scroll/scroll.vue'
	import backtop from 'components/content/backtop/backtop.vue'


	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import Feature from './childComps/Feature.vue'

	export default {
		name: 'home',
		components: {
			navbar,
			HomeSwiper,
			RecommendView,
			Feature,
			TabControl,
			GoodsList,
			scroll,
			backtop
		},
		data() {
			return {
				recommend: null,
				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'new': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					}
				},
				goodstabdata:'pop',
				tabcontrol_data: null,
				scroll_data: [],
				pulldown: true,
				isShowBackTop:false,
				imgload:0,
				imgonload_data:0,
				imgonload_data_buer:null
			}

		},
		computed: {

		},
		methods: {
			tabclick(event) {
				switch (event) {
					
					case 0:
						this.goodstabdata= 'pop'
						this.tabcontrol_data = this.goods.pop.list
						break
					case 1:
						this.goodstabdata= 'new'
						this.tabcontrol_data = this.goods.new.list
						break
					case 2:
						this.goodstabdata= 'sell'
						this.tabcontrol_data = this.goods.sell.list
						break
				}
				this.$refs.tabcontrol1.dianjiindex = event
				this.$refs.tabcontrol2.dianjiindex = event
			},
			tabclickkkkk() {
				this.tabcontrol_data = this.goods.pop.list
			},
			
			//上拉加载更多
			pullingUp(){
				this.getHomeGoods(this.goodstabdata)
				this.$refs.scroll.Bscroll.finishPullUp()
			},
			//返回顶部按钮计算
			contentScroll(position){
				// console.log(position)
				this.isShowBackTop = (-position.y) > 1000
				this.imgonload_data_buer = (-position.y) > this.imgonload_data -40
				
			},
			backClick(){
				this.$refs.scroll.Bscroll.scrollTo(0, 0,300)
				console.log('返回')
				
				//tabcontrol的显示与隐藏
				
			},
				//接收高度
			imgonload(){
				this.imgonload_data=this.$refs.tabcontrol2.$el.offsetTop
				console.log(this.imgonload_data)
			},
			

			// 数据相关
			getHomeGoods_recommend() {
				getHomeMultidata().then(res => {
					this.recommend = res.data.recommend.list
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1
				// console.log('数据请求成功')
				// console.log(page)
				getHomeGoods(type, page).then(
					res => {
						this.goods[type].list.push(...res.data.list)
						this.goods[type].page += 1
						
					}
				)
			},
			
			
		},
		created() {
			this.getHomeGoods_recommend() //推荐数据获取

			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')

			this.tabclickkkkk() //第一次获取tab contal数据
		},
		mounted(){
			var imgd=this.$refs.scroll.Bscroll
			this.$bus.$on('imgitemload',function(){
				imgd.refresh()
			})
				
				
			//获取tab-control的高度
			// if(imgonload_data){
			// console.log(this.$refs.tabcontrol.$el.offsetTop)
			// }
		},
		activated(){
			this.$refs.scroll.Bscroll.refresh()
			}
	}
</script>

<style scoped>
	#home {
		padding-top: 44px;
	}

	.home-nav {
		background-color: #ff8097;
		color: #FFFFFF;

		position: fixed;
		left: 0;
		right: 0;
		top: 0;

		z-index: 9;
	}

	.tab-control {
		z-index: 9;
	}

/* 	.tab-control {
		position: sticky;
		top: 44px;
	} */
	
	.tabcontrol1{
		position: relative;
		top: 44px;
		left: 0px;
		z-index: 10;
	}
	
	.homeScroll{
		height: calc(100vh - 93px);
	}
</style>
