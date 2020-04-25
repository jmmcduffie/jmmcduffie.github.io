import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <header role="banner" className="border-b py-4 px-4 text-gray-700">
    <div className="max-w-screen-lg mx-auto">
      <Link to="/" rel="author" className="text-2xl hover:text-blue-700">jmmcduffie.com</Link>
    </div>
  </header>
)
