module.exports = {
	title: "Diego's boring blog",
	head: [
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
		['link', { rel: "shortcut icon", href: "/favicon.ico"}],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: "msapplication-config", content: "/browserconfig.xml"}],
	],
	themeConfig: {
		author: 'DiegoFHG',
		domain: 'https://diegofhg.com'
	},
	plugins: [
		['@vuepress/back-to-top'],
		[
			'reading-progress',
			{
				readingDir: '_posts',
			},
		],
		['seo'],
		['vuepress-plugin-reading-time'],
		[
			'@vuepress/blog',
			{
				sitemap: {
					hostname: 'https://diegofhg.com',
				},
				frontmatters: [
					{
						id: 'tag',
						keys: ['tag'],
						path: '/tag/',
						layout: 'Tags',
						scopeLayout: 'Tag'
					},
				],
				directories: [
					{
						id: 'posts',
						dirname: '_posts',
						path: '/',
						pagination: {
							lengthPerPage: 10,
						},
					},
				],
			},
		],
		[
			'vuepress-plugin-container',
			{
				type: 'tip',
				defaultTitle: {
					'/': 'TIP',
				},
			},
		],
		[
			'vuepress-plugin-container',
			{
				type: 'warning',
				defaultTitle: {
					'/': 'Warning',
				},
			},
		],
	],
}
