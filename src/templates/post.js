import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <article className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl leading-tight">{post.frontmatter.title}</h1>

        <footer className="text-gray-600 mb-10">
          <time pubdate="pubdate">{post.frontmatter.date}</time>
        </footer>

        <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
