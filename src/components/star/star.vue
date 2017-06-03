<template>
	<div class="star">
		<span v-for="item in starTotal" :class="starType()" class="star_common"></span>
	</div>
</template>

<script>
	let score, on, half, off;
	export default {
		props: {
			size: {
				type: Number,
				default: 24
			},
			score: {
				type: Number,
				default: 2.5
			}
		},
		data () {
			return {
				starTotal: 5
			}
		},
		created () {
			score = this.score;
			on = parseInt(score);
			half = Math.round(score) === on ? 0 : 1;
			off = this.starTotal - (on + half);
		},
		methods: {
			starType () {
				let className;
				if (on) {
					className = `star${this.size}_on`;
					on--;
					return className;
				}
				if (half) {
					className = `star${this.size}_half`;
					half--;
					return className;
				}
				if (off) {
					className = `star${this.size}_off`;
					off--;
					return className;
				}
			}
		}
	}
</script>

<style lang="sass">
	@import "../../common/sass/mixin";
	%star24
		display: inline-block
		width: 10px
		height: 9.5px
		background-size: 10px 9.5px

	%star36
		display: inline-block
		width: 15px
		height: 14.5px
		background-size: 15px 14.5px

	%star48
		display: inline-block
		width: 20px
		height: 19px
		background-size: 20px 19px

	.star_common
		margin-right: 20px
		&:last-child
			margin-right: 0

	.star24
		&_on
			@extend %star24
			@include star-size(24, 'on')
		&_half
			@extend %star24
			@include star-size(24, 'half')
		&_off
			@extend %star24
			@include star-size(24, 'off')
	.star36
		&_on
			@extend %star36
			@include star-size(36, 'on')
		&_half
			@extend %star36
			@include star-size(36, 'half')
		&_off
			@extend %star36
			@include star-size(36, 'off')

	.star48
		&_on
			@extend %star48
			@include star-size(48, 'on')
		&_half
			@extend %star48
			@include star-size(48, 'half')
		&_off
			@extend %star48
			@include star-size(48, 'off')
</style>
