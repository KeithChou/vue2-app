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
				<div class="header-activity-con">
					<icon :iconType="seller.supports[0].type" iconStyle="1" class="header-icon"></icon>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
				<div class="header-activity-num">
					<span class="num">{{seller.supports.length}}个</span>
					<span class="icon-keyboard_arrow_right"></span>
				</div>
			</div>
		</div>
		<div class="header-bg">
			<img :src="seller.avatar" :alt="seller.name" class="header-bg-img">
		</div>
		<div class="header-bulletin" @click="bulletinCome">
			<span class="header-bulletin-icon"></span>
			<span class="header-bulletin-text">{{seller.bulletin}}</span>
			<span class="icon-keyboard_arrow_right"></span>
		</div>
		<transition name="adsMove">
			<div class="bulletin-wrapper" v-if="bulletinShow" @click="bulletinShow=false" ref="bulletinWrapper">
				<div class='bulletin-container'>
					<div class="bulletin-main">
						<div class="bulletin-main-title">
							<h1 class="title">{{seller.name}}</h1>
						</div>
						<div class="bulletin-main-star">
							<star :size=48 :score=seller.score></star>
						</div>
						<div class="bulletin-main-line">
							<split title="优惠信息"></split>
						</div>
						<div class="bulletin-main-message" v-if="seller.supports.length">
							<ul class="bulletin-main-message-ul">
								<li v-for="item in seller.supports" class="bulletin-main-message-list">
									<icon :iconType=item.type iconStyle='2'></icon>
									<span class="text">{{item.description}}</span>
								</li>
							</ul>
						</div>
						<div class="bulletin-main-line">
							<split title="商家公告"></split>
						</div>
						<div class="bulletin-main-ads" v-if="seller.bulletin">
							<div class="text">{{seller.bulletin}}</div>
						</div>
					</div>
					<div class="bulletin-footer">
						<span class="icon-close"></span>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import star from '../star/star';
	import icon from '../icon/icon';
	import split from '../split/split';

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
			icon: icon,
			star: star,
			split: split
		},
		data () {
			return {
				bulletinShow: false
			}
		},
		methods: {
			bulletinCome () {
				let that = this;
				this.bulletinShow = !this.bulletinShow;
				this.$nextTick(function () {
					let scroll = new BScroll(that.$refs.bulletinWrapper, {
						preventDefault: false
					});
					console.log(scroll);
				})
			}
		}
	}
</script>

<style lang="sass">
	@import "../../common/sass/mixin";
	.header
		flex: 1 0 auto
		min-width: 0
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
			min-width: 0
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
		&-activity
			display: flex
			align-items: center
			&-con
				font-size: 0
				flex: 1 1 auto
				margin-top: 3px
				.text
					font-size: 10px
					color: rgb(255, 255, 255)
					vertical-align: middle
					font-weight: 200
					line-height: 12px
					margin-left: 4px
			&-num
				display: flex
				align-items: center
				justify-content: center
				padding: 7px 8px
				text-align: center
				font-size: 0
				color: #fff
				font-weight: 200
				line-height: 12px
				border-radius: 14px
				background-color: rgba(0, 0, 0, .2);
				.num
					font-size: 10px
					margin-right: 2px
				.icon-keyboard_arrow_right
					font-size: 10px

		&-bulletin
			display: flex
			align-items: center
			position: absolute
			bottom: 0
			left: 0
			right: 0
			height: 28px
			padding: 0 12px
			color: #fff
			line-height: 28px
			white-space: nowrap
			font-size: 0
			box-sizing: border-box
			background-color: rgba(0, 0, 0, .2)
			&-icon
				flex: 0 0 22px
				width: 22px
				height: 12px
				background-size: 22px 12px
				margin-right: 4px
				@include bg-image('./bulletin');
				@media screen and (device-pixel-ratio: 3)
					width: 33px
					height: 18px
					background-size: 33px
			&-text
				flex: 1 1 auto
				font-size: 10px
				color: rgb(255, 255, 255)
				font-weight: 200
				margin-right: 8px
				text-overflow: ellipsis
				overflow: hidden
				white-space: nowrap
			.icon-keyboard_arrow_right
				font-size: 10px
	.bulletin
		&-wrapper
			display: flex
			flex-flow: column nowrap
			position: fixed
			left: 0
			right: 0
			top: 0
			bottom: 0
			background-color: rgba(7, 17, 27, .8)
			padding: 64px 36px 32px
		&-container
			padding-bottom: 100px
		&-main
			flex: 1 0 auto
			width: 100%
			&-title
				.title
					font-size: 16px
					font-weight: 700
					color: rgb(255, 255, 255)
					line-height: 16px
					text-align: center
					margin-bottom: 16px
			&-star
				text-align: center
				margin-bottom: 28px
			&-line
				margin-bottom: 24px
			&-message
				margin: 0 12px
				&-list
					margin-bottom: 12px
					&:last-child
						margin-bottom: 0
					.text
						font-size: 12px
						font-weight: 200
						color: rgb(255, 255, 255)
						line-height: 12px
				&-ul
					margin-bottom: 28px
			&-ads
				margin: 0 12px
				.text
					font-size: 12px
					font-weight: 200
					color: rgb(255, 255, 255)
					line-height: 24px
		&-footer
			width: 100%
			text-align: center
			margin-top: 50px
			.icon-close
				font-size: 32px
				color: rgba(255, 255, 255, .5)
	.adsMove
		&-enter
			transform: translateX(100%)
			opacity: 0
			&-active
				transition: all .5s linear
		&-leave
			&-active
				opacity: 0
				transition: all .5s linear
				transform: translateX(100%)

</style>
