<template>
	<div>
		<TopBar />
		<main>
			<Content />
			<div v-if="!$page.title">
				<h1>Posts</h1>
				<template v-for="post in $site.pages">
					<PostCard
						v-if="post.title"
						:title="post.title"
						:path="post.path"
						:description="post.frontmatter.description"
						:date="post.frontmatter.date"
						:author="post.frontmatter.author" />
				</template>
			</div>
		</main>
	</div>
</template>

<script>
import TopBar from '../components/TopBar';
import PostCard from '../components/PostCard';

export default {
	components: {
		TopBar,
		PostCard,
	},
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,300;1,400&display=swap')
@import url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@2/distr/fira_code.css')

body
	font-family 'Roboto', sans-serif
	margin 0

html
	scroll-padding-top 60px

main
	padding-top 5%
	padding-bottom 5%
	padding-left 20%
	padding-right 20%

pre[class*="language-"]
	border-radius 6px
	background-color #2E3440

div[class*="language-javascript"]
	margin-bottom 40px

	&:after
		float right
		content 'JS'
		color grey

div[class*="language-go"]
	margin-bottom 40px

	&:after
		float right
		content 'Go'
		color grey

div[class*="language-py"]
	margin-bottom 40px

	&:after
		float right
		content 'Python'
		color grey

div[class*="language-clike"]
	margin-bottom 40px

	&:after
		float right
		content 'C/C++'
		color grey

div[class*="language-stylus"]
	margin-bottom 40px

	&:after
		float right
		content 'Stylus'
		color grey

code
	font-family 'Fira Code VF', monospace !important

a
	text-decoration none
	color black

h1
	font-weight 400
	font-size 40px

h1, h2, h3, h4, h5, h6
	font-family 'Roboto', sans-serif

	&:hover .header-anchor
		opacity: 1

a.header-anchor
	color #5E81AC
	opacity 0
	float left
	margin-left -0.87em

	&:hover
		text-decoration underline

blockquote
	font-size 1rem
	color #999;
	border-left .2rem solid #dfe2e5
	margin 1rem 0
	padding .25rem 0 .25rem 1rem

	& > p
		margin 0

.go-to-top
	color #5E81AC !important

.go-to-top:hover {
  color: lighten(#5E81AC, 30%) !important;
}
</style>
