<template>
	<div>
		<tabbar>
			<tabbaritem activecolor="red" path='/home'>
				<div slot='item-text'>首页</div>
				<img slot='item-icon' src="~assets/img/tabbar/home.svg" />
				<img slot='item-icon-active' src="~assets/img/tabbar/home_active.svg" />
			</tabbaritem>

			<tabbaritem activecolor="red" path='/category'>
				<div slot='item-text'>分类</div>
				<img slot='item-icon' src="~assets/img/tabbar/category.svg" />
				<img slot='item-icon-active' src="~assets/img/tabbar/category_active.svg" />
			</tabbaritem>

			<tabbaritem activecolor="red" path='/shopcar'>
				<div slot='item-text'>购物车</div>
				<img slot='item-icon' src="~assets/img/tabbar/shopcart.svg" />
				<img slot='item-icon-active' src="~assets/img/tabbar/shopcart_active.svg" />
			</tabbaritem>

			<tabbaritem activecolor="red" path='/profile'>
				<div slot='item-text'>我的</div>
				<img slot='item-icon' src="~assets/img/tabbar/profile.svg" />
				<img slot='item-icon-active' src="~assets/img/tabbar/profile_active.svg" />
			</tabbaritem>

		</tabbar>
	</div>
</template>

<script>
	import tabbar from 'components/common/tabbar/tabbar.vue'
	import tabbaritem from 'components/common/tabbar/tabbaritem.vue'

	export default {
		name: 'maintabbar',
		components: {
			tabbar,
			tabbaritem
		}
	}
</script>

<style>
	body {
		margin: 0;
		padding: 0;
	}
</style>
