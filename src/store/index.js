import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		cardata:[]
  },
  mutations: {
		
		
		addshopcar(state,payload){
			let imb=false
			for(let item of state.cardata){
				if(item.id === payload.id){
					imb = item
				}
			}
			if(imb){
				imb.number += 1 
			}else{
				payload.number=1
				state.cardata.push(payload)
			}
		},
		
		adddatanumber(state,payload){
			state.cardata[payload].number += 1
		},
		
		readddatanumber(state,payload){
			state.cardata[payload].number -= 1
		},
		selectif(state,payload){
			state.cardata[payload].select = !state.cardata[payload].select
		},
		
		
		selectall(state){
			for(let item of state.cardata){
				item.select = true
			}
		},
		selectunall(state){
			for(let item of state.cardata){
				item.select = false
			}
		}
		
  },
  actions: {
		
  },
  modules: {
		
  },
	getters:{
		getnumber(state){
			let num=0
			for(let item of state.cardata){
				if(item.select){
					num += item.number
				}
			}
			return num
		},
		getallprice(state){
			let price = 0
			for(let item of state.cardata){
				if(item.select){
					price += item.number * item.price
				}
			}
			return price
		},
		
		selctinfo(state){
			let info = true
			for(let item of state.cardata){
				if(!item.select){
					info = false
				}
			}
			if(state.cardata.length == 0){
				info = false
			}
			return info
		}
		
	}
})
