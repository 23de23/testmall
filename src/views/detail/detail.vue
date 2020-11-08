<template>
	<div class="detail">
		<detailNavbar></detailNavbar>
		<Scroll class='detailscroll' ref='bscroll' @scroll='contentScroll'>
			<detailSwiper :banner='this.topImages'></detailSwiper>
			<DetailBaseInfo :goods='goods'></DetailBaseInfo>
			<DetailShopInfo :shop='shop'></DetailShopInfo>
			<DetailGoodsInfo :detailInfo='detailInfo' @imgonload='imgonload'></DetailGoodsInfo>
			<DetailParamInfo :paramInfo='paramInfo'></DetailParamInfo>
			<detailRate :rate='rate'></detailRate>
			<GoodsList :goods='recommend'></GoodsList>


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
			GoodsList
		},
		methods: {
			//计算滚动高度
			imgonload() {
				this.$refs.bscroll.Bscroll.refresh()
			},
			contentScroll(position) {
				// console.log(position)
				if (-position.y > 1500) {
					if (!this.ibm) {
						this.$refs.bscroll.Bscroll.refresh()
						this.ibm = true
						console.log('刷一次')
					}

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
		height: calc(100vh - 48.5px);
		/* height: 300px; */
	}
</style>
