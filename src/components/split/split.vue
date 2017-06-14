<template>
	<div class="split-wrapper">
		<span class="split"></span>
		<p class="split-text">{{title}}</p>
		<span class="split"></span>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="sass">
	.split
		flex: 1 0 auto
		height: 2px
		background-color: rgba(255, 255, 255, .2)
		&-wrapper
			display: flex
			align-items: center
		&-text
			margin: 0 12px
			font-size: 14px
			color: rgb(255, 255, 255)
			line-height: 14px

</style>

