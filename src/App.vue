<template>
	<div id="app">
		<maintable></maintable>
		<keep-alive>
		<router-view></router-view>
		</keep-alive>
	</div>
</template>



<script>
	
	
import maintable from 'components/content/maintabbar/maintabbar.vue'

export default {
  name: 'App',
	components:{
		maintable
	}
	
}
</script>

<style>
	@import "assets/css/base.css";
</style>