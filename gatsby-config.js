module.exports = {
	siteMetadata:{
		title: 'Lima Móveis planejados'
	},
	plugins: [
		'gatsby-plugin-postcss',
		{
			resolve:'gatsby-plugin-purgecss',
			options: {
				printRejected:true,
				tailwind:true
			}
		},
		'gatsby-plugin-react-helmet',
]
}
