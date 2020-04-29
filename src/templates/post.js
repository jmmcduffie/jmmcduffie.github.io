import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <article className="max-w-2xl h-entry">
        <h1 className="text-4xl md:text-5xl leading-tight p-name">
          <Link to={pageContext.slug} className="u-url">{post.frontmatter.title}</Link>
        </h1>

        <footer className="text-gray-600 mb-10">
          <time pubdate="pubdate" className="dt-published">{post.frontmatter.date}</time>
        </footer>

        <div className="markdown e-content" dangerouslySetInnerHTML={{ __html: post.html }} />
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
