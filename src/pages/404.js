import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
    <SEO title="Page Not Found" meta={{name: 'robots', content: 'noindex'}} />
    <h1 className="text-3xl md:text-4xl leading-tight mb-6">Page Not Found</h1>
    <p className="mb-2">It looks like you found a broken link. Sorry!</p>
    <p><Link to="/" className="text-blue-500 hover:underline">&larr; Back to Home Page</Link></p>
  </Layout>
)
