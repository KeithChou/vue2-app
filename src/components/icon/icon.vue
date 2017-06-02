<template>
	<span class="header-icon" :class="iconClass"></span>
</template>

<script>
	export default {
		computed: {
			iconClass () {
				return this.bulletin[this.iconType] + '_' + this.iconStyle;
			}
		},
		props: {
			iconType: {
				type: Number,
				default: 1
			},
			iconStyle: {
				type: String,
				default: '1'
			}
		},
		data () {
			return {
				bulletin: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
			}
		}
	};
</script>

<style lang="sass">
	@import "../../common/sass/mixin";
	.header-icon
		display: inline-block
		vertical-align: middle;
		background-repeat: no-repeat
		background-position: center center
	.decrease
		&_1
			width: 12px
			height: 12px
			background-size: 12px 12px
			@include bg-image('./decrease_1')
		&_2
			width: 16px
			height: 16px
			background-size: 16px 16px
			@include bg-image('./decrease_2')
		&_3
			width: 12px
			height: 12px
			background-size: 12px 12px
			@include bg-image('./decrease_3')
		&_4
			width: 16px
			height: 16px
			background-size: 16px 16px
			@include bg-image('./decrease_4');
	.discount
		&_1
			width: 12px
			height: 12px
			background-size: 12px 12px
			@include bg-image('./discount_1')
		&_2
			width: 16px
			height: 16px
			background-size: 16px 16px
			@include bg-image('./discount_2')
		&_3
			width: 12px
			height: 12px
			background-size: 12px 12px
			@include bg-image('./discount_3')
		&_4
			width: 16px
			height: 16px
			background-size: 16px 16px
			@include bg-image('./discount_4');
	.guarantee
		&_1
			width: 12px
			height: 12px
			background-size: 12px 12px
			@include bg-image('./guarantee_1')
		&_2
			width: 16px
			height: 16px
			background-size: 16px 16px
			@include bg-image('./guarantee_2')
		&_3
			width: 12px
			height: 12px
			background-size: 12px 12px
			@include bg-image('./guarantee_3')
		&_4
			width: 16px
			height: 16px
			background-size: 16px 16px
			@include bg-image('./guarantee_4');
	.invoice
		&_1
			width: 12px
			height: 12px
			background-size: 12px 12px
			@include bg-image('./invoice_1')
		&_2
			width: 16px
			height: 16px
			background-size: 16px 16px
			@include bg-image('./invoice_2')
		&_3
			width: 12px
			height: 12px
			background-size: 12px 12px
			@include bg-image('./invoice_3')
		&_4
			width: 16px
			height: 16px
			background-size: 16px 16px
			@include bg-image('./invoice_4');
	.special
		&_1
			width: 12px
			height: 12px
			background-size: 12px 12px
			@include bg-image('./special_1')
		&_2
			width: 16px
			height: 16px
			background-size: 16px 16px
			@include bg-image('./special_2')
		&_3
			width: 12px
			height: 12px
			background-size: 12px 12px
			@include bg-image('./special_3')
		&_4
			width: 16px
			height: 16px
			background-size: 16px 16px
			@include bg-image('./special_4');
</style>
