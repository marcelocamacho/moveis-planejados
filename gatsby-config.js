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
		{
      			resolve: `gatsby-plugin-google-analytics`,
      			options: {
        			// The property ID; the tracking code won't be generated without it
        		trackingId: "G-Q3STZ8F7NY",
      			},
    		},
]
}
//<meta name="google-site-verification" content="J0g4XOzuu0HirNv2QB2wj-Enhp50-y-tJVxfMHNroHk" />
