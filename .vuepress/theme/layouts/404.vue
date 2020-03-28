<template>
	<div class="not-found-container-outter">
		<div class="not-found-container-inner">
			<div>
				<h1 class="not-found-text">404</h1>
				<hr />
				<br />
				<span>Not found</span>
				<br />
				<br />
				<router-link to="/">Back to home</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,300;1,400&display=swap')

#app
	height 100%

body, html
	font-family 'Roboto', sans-serif
	height 100%
	margin 0

.not-found-container-outter
	height 100%
	display flex
	justify-content center
	flex-direction column
	background-image url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ff0038' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
	background-color #ffffff

.not-found-container-inner
	display flex
	justify-content center
	background-color white
	margin-left 23em
	margin-right 23em
	text-align center
	padding 4em

.not-found-text
	font-size 10em
	margin 0
</style>
