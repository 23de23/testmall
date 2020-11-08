import {request} from './request.js'


export function getdetail(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
}

export function getdetailrecommend(){
	return request({
		url:'/recommend',
	})
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}


export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}


export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}


export class Rate {
	constructor(rate) {
	    this.userName = rate.list[0].user.uname
			this.userImg = rate.list[0].user.avatar
			this.userContent = rate.list[0].content
			this.contentImg = rate.list[0].images
			this.time =  rate.list[0].created
			this.style= rate.list[0].style
			
	}
}