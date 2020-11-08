import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home =() => import('views/home/home.vue')
const category =() => import('views/category/category.vue')
const shopcar =() => import('views/shopcar/shopcar.vue')
const profile =() => import('views/profile/profile.vue')
const detail =() => import('views/detail/detail.vue')

const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:home
	},{
		path:'/category',
		component:category
	},{
		path:'/shopcar',
		component:shopcar
	},{
		path:'/profile',
		// component:'../views/profile/profile.vue',
		component:profile
	},{
		path:'/detail/:id',
		component:detail
	}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
