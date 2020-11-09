<template>
	<div class="detail">
		<detailNavbar @titleclick='titleclick($event)'  :titleinfo='titleinfo'></detailNavbar>
		<detailbottombar></detailbottombar>
		
		
		<Scroll class='detailscroll' ref='bscroll' @scroll='contentScroll'>
			<detailSwiper :banner='this.topImages'></detailSwiper>
			<DetailBaseInfo :goods='goods'></DetailBaseInfo>
			<DetailShopInfo :shop='shop'></DetailShopInfo>
			<DetailGoodsInfo :detailInfo='detailInfo' @imgonload='imgonload'></DetailGoodsInfo>
			<DetailParamInfo :paramInfo='paramInfo' ref='ParamInfo'></DetailParamInfo>
			<detailRate :rate='rate' ref='rate'></detailRate>
			<GoodsList :goods='recommend' ref='recommend'></GoodsList>

		</Scroll>
		
		
	</div>
</template>

<script>
	import detailNavbar from './childComps/detailNavbar.vue'
	import detailSwiper from './childComps/detailSwiper.vue'
	import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
	import DetailShopInfo from './childComps/DetailShopInfo.vue'
	import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
	import DetailParamInfo from './childComps/DetailParamInfo.vue'
	import detailRate from './childComps/detailRate.vue'
	import GoodsList from '../../components/content/goods/GoodsList.vue'
	import detailbottombar from './childComps/detailbottombar.vue'


	import {
		getdetail,
		Goods,
		Shop,
		GoodsParam,
		Rate,
		getdetailrecommend
	} from 'network/detail.js'

	import Scroll from 'components/common/scroll/scroll.vue'


	export default {
		name: 'detail',
		data() {
			return {
				id: null,
				topImages: null,
				goods: {},
				shop: {},
				detailInfo: {},
				paramInfo: {},
				rate: {},
				recommend: [],
				//刷新一次的判断数据
				ibm:false,
				//锚点
				titleinfo:0,
				ParamInfo_height:0,
				rate_height:0,
				recommend_height:0
			}
		},
		components: {
			detailNavbar,
			detailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			Scroll,
			DetailGoodsInfo,
			DetailParamInfo,
			detailRate,
			GoodsList,
			detailbottombar
		},
		methods: {
			//计算滚动高度
			imgonload() {
				this.$refs.bscroll.Bscroll.refresh()
				
				
				
				this.ParamInfo_height = -this.$refs.ParamInfo.$el.offsetTop
				this.rate_height = -this.$refs.rate.$el.offsetTop 
				this.recommend_height = -this.$refs.recommend.$el.offsetTop 
			},
			contentScroll(position) {
				this.ParamInfo_height = -this.$refs.ParamInfo.$el.offsetTop
				this.rate_height = -this.$refs.rate.$el.offsetTop 
				this.recommend_height = -this.$refs.recommend.$el.offsetTop  
				// console.log(position)
				if (-position.y > 1500) {
					if (!this.ibm) {
						this.$refs.bscroll.Bscroll.refresh()
						this.ibm = true
						console.log('刷一次')
					}
				}
				
				if(-position.y < -this.ParamInfo_height){
					this.titleinfo = 0
				} else if (-position.y < -this.rate_height && -position.y > -this.ParamInfo_height){
					this.titleinfo = 1
				} else if( -position.y < -this.recommend_height && -position.y >= -this.rate_height){
					this.titleinfo = 2
				}else if(-position.y > -this.recommend_height){
					this.titleinfo = 3
				}
			},
			titleclick(index){
				console.log(index)
				this.titleinfo = index
				
				if(index == 0){
					console.log('跳转')
					this.$refs.bscroll.Bscroll.scrollTo(0,0,300)
				} else if(index == 1){
					this.$refs.bscroll.Bscroll.scrollTo(0,this.ParamInfo_height,300)
				} else if(index == 2){
					this.$refs.bscroll.Bscroll.scrollTo(0,this.rate_height,300)
				} else if( index == 3){
					this.$refs.bscroll.Bscroll.scrollTo(0,this.recommend_height,300)
				}
			}
		},
		created() {

			//存入id
			this.id = this.$route.params.id

			//请求商品数据
			// this.getdetail(this.id)

			getdetail(this.id).then(res => {
				console.log(res);
				// 1.获取顶部的图片轮播数据
				this.topImages = res.result.itemInfo.topImages

				//获取基本消息
				const data = res.result
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

				//获取商铺消息
				this.shop = new Shop(data.shopInfo)

				//获取图片
				this.detailInfo = data.detailInfo;

				//获取参数
				this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

				//获取评论信息
				this.rate = new Rate(data.rate)
			})

			//请求推荐数据
			getdetailrecommend().then(res => {
				console.log(res)
				this.recommend = res.data.list
			})
		}

	}
</script>

<style scoped>
	.detail {
		position: relative;
		z-index: 10;
		background-color: #FFFFFF;
		height: 100vh;
	}

	.detailscroll {
		height: calc(100vh - 97.5px);
		/* height: 300px; */
	}
</style>
