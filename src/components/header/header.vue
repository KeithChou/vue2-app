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
			<div class="header-activity" v-if="seller.supports">
				<icon :iconType="seller.supports[0].type" iconStyle="1" class="header-icon"></icon>
				<span class="activity">{{seller.supports[0].description}}</span>
			</div>
		</div>
		<div class="header-bg">
			<img :src="seller.avatar" :alt="seller.name" class="header-bg-img">
		</div>
		<div class="header-bulletin">
			<span class="header-bulletin-icon"></span>
			<span class="header-bulletin-text">{{seller.bulletin}}</span>
			<span class="header-bulletin-arrow">></span>
		</div>
	</div>
</template>

<script>
	import icon from '../icon/icon';
	export default {
		props: {
			seller: {
				type: Object,
				default () {
					return {};
				}
			}
		},
		components: {
			icon: icon
		}
	}
</script>

<style lang="sass">
	@import "../../common/sass/mixin";
	.header
		flex: 1 0 auto
		&-bg
			position: absolute
			z-index: -1
			left: 0
			right: 0
			top: 0
			bottom: 0
			filter: blur(10px)
			overflow: hidden
			&-img
				width: 100%;
				height: 100%;
		&-wrapper
			display: flex
			box-sizing: border-box
			height: 134px
			position: relative
			flex-flow: row nowrap
			padding: 24px 12px 18px 24px
			background-color: rgba(7, 17, 27, .5)
		&-image
			flex: 0 0 64px
			width: 64px
			margin-right: 16px
		&-avatar
			width: 64px
			height: 64px
			border-radius: 2px
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
				@media screen and (device-pixel-ratio: 3)
					width: 33px
					height: 18px
					background-size: 33px 18px
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
			font-size: 0
			.activity
				font-size: 10px
				color: rgb(255, 255, 255)
				vertical-align: middle
				font-weight: 200
				line-height: 12px
				margin-left: 4px
		&-bulletin
			position: absolute
			bottom: 0
			left: 0
			right: 0
			width: 100%
			height: 28px
			line-height: 28px
			white-space: nowrap
			padding: 0 12px
			box-sizing: border-box
			background-color: rgba(0, 0, 0, .2)
			&-icon
				display: inline-block
				width: 22px
				height: 12px
				background-size: 22px 12px
				margin-right: 4px
				vertical-align: middle
				@include bg-image('./bulletin');
				@media screen and (device-pixel-ratio: 3)
					width: 33px
					height: 18px
					background-size: 33px
			&-text
				display: inline-block
				vertical-align: middle
				width: 85%
				font-size: 10px
				color: rgb(255, 255, 255)
				font-weight: 200
				text-overflow: ellipsis
				overflow: hidden
				white-space: nowrap
			&-arrow
				font-size: 10px
				color: rgb(255, 255, 255)
				font-weight: 200
</style>
