module.exports = {
	title: "Diego's boring blog",
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
