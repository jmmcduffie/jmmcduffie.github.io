import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => (
  <Layout>
    <SEO title={data.site.siteMetadata.description} />
    <h2 className="text-lg font-bold mb-4">Blog</h2>

    <ol className="space-y-6 mb-8">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <span className="text-gray-600 text-sm">{node.frontmatter.date}</span>
          <h3 className="text-2xl leading-tight">
            <Link to={node.fields.slug} className="text-blue-500 hover:underline">
              {node.frontmatter.title}
            </Link>
          </h3>
        </li>
      ))}
    </ol>

    <p>
      subscribe <Link to="/rss.xml" className="text-blue-500 hover:underline">via RSS</Link>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
