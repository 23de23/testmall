<template>
	<div class="wrapper" ref='wrapper'>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import scroll from 'better-scroll'


	export default {
		name: 'scroll',
		data() {
			return {
				Bscroll: null,
			}
		},
		methods: {
			creat() {
				this.Bscroll = new scroll(this.$refs.wrapper, {
					probeType: 3,
					click: true,
					pulldown: true,
					pullUpLoad: true
				})

			},
			// scrollTo(x, y, time=300) {
			//   this.scroll && this.scroll.scrollTo(x, y, time)
			// },

		},
		mounted() {
			this.creat()
			this.Bscroll.on('scroll', (position) => {
				this.$emit('scroll', position)
			})
			this.Bscroll.on('pullingUp', () => {
				console.log('到底了')
				this.$emit('pullingUp')
			})


		}
	}
</script>

<style>
	.wrapper {
		/* height: calc(100vh - 64px); */
		overflow: hidden;
	}
</style>
