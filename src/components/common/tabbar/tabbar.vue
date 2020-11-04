<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'tabbar'
	}
</script>

<style>
	#tab-bar {
		display: flex;
		background-color: #f5f5f5;
		z-index: 9;

		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
