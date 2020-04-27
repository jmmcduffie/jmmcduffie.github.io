import React from 'react'
import Masthead from '../components/masthead'
import SiteFooter from '../components/site-footer'

export default ({ children }) => (
  <>
    <Masthead/>

    <main role="main" className="bg-white py-10 px-4">
      <div className="max-w-screen-lg mx-auto">
        {children}
      </div>
    </main>

    <SiteFooter/>
  </>
)
