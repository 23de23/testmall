<template>
	<div class="backtop">
		<img src="~assets/img/common/top.png"></img>
	</div>
</template>

<script>
	export default {
		name: 'backtop'
	}
</script>

<style scoped>
	.backtop {
		position: fixed;
		right: 8px;
		bottom: 55px;
		z-index: 12;
	}

	.backtop img {
		width: 43px;
		height: 43px;
	}
</style>
