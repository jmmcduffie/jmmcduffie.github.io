module.exports = {
  siteMetadata: {
    title: "jmmcduffie.com",
    author: "Jeremy McDuffie",
    description: "The #indieweb home of Jeremy McDuffie",
    siteUrl: "https://www.jmmcduffie.com",
    webmentionUrl: "https://webmention.io/www.jmmcduffie.com/webmention",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: "jmmcduffie",
              includeDefaultCss: true,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "›",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "jmmcduffie.com",
        short_name: "jmmcduffie.com",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#48bb78",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-webmention",
      options: {
        username: "www.jmmcduffie.com",
        mentions: true,
        pingbacks: false,
        domain: "jmmcduffie.com",
        token: process.env.WEBMENTIONS_TOKEN,
      },
    },
  ],
}
