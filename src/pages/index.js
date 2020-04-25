import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h2 className="text-lg font-bold mb-4">Blog</h2>

    <ol className="space-y-6">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <span className="text-gray-600 text-sm">{node.frontmatter.date}</span>
          <h3 className="text-2xl leading-tight">{node.frontmatter.title}</h3>
        </li>
      ))}
    </ol>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
