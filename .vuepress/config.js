module.exports = {
	title: "Diego's boring blog",
	base: '/Blog/',
	head: [
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
		['link', { rel: "shortcut icon", href: "/favicon.ico"}],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: "msapplication-config", content: "/browserconfig.xml"}],
	],
	plugins: [
		['@vuepress/back-to-top'],
		[
			'@vuepress/blog',
			{
				directories: [
					{
						id: 'posts',
						dirname: '_posts',
						path: '/',
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
