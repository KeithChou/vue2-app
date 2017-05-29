<template>
	<div class="header-wrapper">
		<div class="header-image">
			<img :src="seller.avatar" :alt="seller.name" class="header-avatar">
		</div>
		<div class="header">
			<div class="header-title">
				<span class="brand"></span>
				<span class="title">{{seller.name}}</span>
			</div>
			<div class="header-dispatch">
				<span class="description">{{seller.description}} / </span>
				<span class="deliveryTime">{{seller.deliveryTime}}分钟送达</span>
			</div>
			<div class="header-activity">
				<span class="decrease"></span>
				<span class="activity">{{seller.supports[0].description}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			seller: {
				type: Object,
				default () {
					return {};
				}
			}
		},
		data () {
			return {
				bulletin: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
			}
		}
	}
</script>

<style lang="sass">
	@import "../../common/sass/mixin";
	.header
		&-wrapper
			display: flex
			position: relative
			flex-flow: row nowrap
			padding: 24px 12px 18px 24px
			height: 134px
			background-color: pink
		&-image
			flex: 0 0 64px
			width: 64px
			margin-right: 16px
		&-avatar
			width: 64px
			height: 64px
			border-radius: 2px
		flex: 1 0 auto
		&-title
			font-size: 0
			margin-top: 2px
			margin-bottom: 8px
			.brand
				display: inline-block
				width: 30px
				height: 18px
				vertical-align: middle
				background-size: 30px 18px
				background-repeat: no-repeat
				background-position: center center
				margin-right: 6px
				@include bg-image('./brand')
			.title
				display: inline-block
				font-size: 16px
				color: rgb(255, 255, 255)
				font-weight: bold
				line-height: 18px
				vertical-align: middle
		&-dispatch
			font-size: 12px
			color: rgb(255, 255, 255)
			font-weight: 200
			line-height: 12px
			margin-bottom: 10px
		&-activity
			font-size: 0;
			.activity
				font-size: 10px
				vertical-align: middle
				color: rgb(255, 255, 255)
				font-weight: 200
				line-height: 12px

</style>
