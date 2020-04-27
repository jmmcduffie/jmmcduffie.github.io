/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'jmmcduffie.com'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              username: 'jmmcduffie',
              includeDefaultCss: true
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '›'
            }
          }
        ]
      }
    },
    'gatsby-plugin-postcss'
  ],
}
