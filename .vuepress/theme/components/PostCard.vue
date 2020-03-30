<template>
	<div class="post-card">
		<div>
			<router-link :to="path">
				<h2 class="post-card-title">{{title}}</h2>
			</router-link>
			<p v-if="description" class="post-card-description">{{description}}</p>
			<br v-if="description" />
			<div class="post-card-metadata">
				<span v-if="author"><TypewriterIcon />&nbsp;{{author}}</span>
				<span v-if="date" class="post-card-date"><CalendarIcon />&nbsp;{{date}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import CalendarIcon from 'vue-material-design-icons/Calendar.vue';
import TypewriterIcon from 'vue-material-design-icons/Typewriter.vue';

export default {
	props: ['title', 'path', 'description', 'date', 'author'],
	components: {
		CalendarIcon,
		TypewriterIcon,
	},
};
</script>

<style lang="stylus">
.post-card
	border 1px #eaecef solid
	border-radius 3px
	margin-bottom 20px
	box-shadow rgba(184, 194, 215, 0.25) 0px 4px 6px, rgba(184, 194, 215, 0.1) 0px 5px 7px;
	padding 10px
	background-color white

.post-card-title
	font-weight 600
	margin 10px
	color #2E3440

	&:hover
		color #5E81AC

.post-card-description
	margin-left 10px

.post-card-date
	display flex
	justify-content flex-end

.post-card-metadata
	display flex
	justify-content space-between
	margin-left 10px
	margin-bottom 10px
	margin-right 10px
</style>
