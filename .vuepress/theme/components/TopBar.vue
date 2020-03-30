<template>
	<header class="topbar">
		<router-link to="/">
			<h3 class="topbar-title">Diego Francisco</h3>
		</router-link>
		<div class="github-icon">
			<a class="github-link" href="https://github.com/DiegoFranciscoHG">
				<GithubIcon :size="50" />
			</a>
		</div>
	</header>
</template>

<script>
import GithubIcon from 'vue-material-design-icons/GithubFace.vue';
export default {
	components: {
		GithubIcon,
	},
};
</script>

<style lang="stylus">
.topbar
	z-index 10
	border-bottom 1px #eaecef solid
	padding 0
	position fixed
	width 100%
	background-color white
	color #4C566A
	display flex
	justify-content space-between
	box-shadow rgba(184, 194, 215, 0.25) 0px 4px 6px, rgba(184, 194, 215, 0.1) 0px 5px 7px

.topbar-title
	margin 10px
	font-weight: 400
	color #2E3440

	&:hover
		color #5E81AC

.github-face-icon
	svg
		height 25px !important
		width 25px !important

.github-icon
	display flex
	margin-right 20px

.github-link
	display flex
	color #2E3440
</style>
