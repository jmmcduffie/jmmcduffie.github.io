import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'


export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header role="banner" className="border-b py-4 px-4 text-gray-700">
      <div className="max-w-screen-lg mx-auto">
        <Link to="/" rel="author" className="text-2xl hover:text-blue-700">
          {data.site.siteMetadata.title}
        </Link>
      </div>
    </header>
  )
}
