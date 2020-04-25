import React from 'react'
import Icon from './icon'

const SocialLink = ({ href, icon, children }) => (
  <a rel="me" href={href} className="text-blue-700 hover:text-current hover:underline">
    <Icon name={icon} className="mr-1 md:mr-2" />
    <span>{children}</span>
  </a>
)

export default () => (
  <footer role="contentinfo" className="border-t py-6 px-4 text-gray-700">
    <div className="max-w-screen-lg mx-auto space-y-4 md:space-y-0 md:flex justify-between">
      <p className="text-lg">jmmcduffie.com</p>

      <ul className="flex flex-wrap -ml-4 md:block md:m-0">
        <li className="ml-4 md:m-0">
          <SocialLink href="https://github.com/jmmcduffie" icon="github">jmmcduffie</SocialLink>
        </li>
        <li className="ml-4 md:m-0">
          <SocialLink href="https://www.linkedin.com/in/jmmcduffie" icon="linkedin">jmmcduffie</SocialLink>
        </li>
        <li className="ml-4 md:m-0">
          <SocialLink href="https://stackoverflow.com/users/943505/jeremy-mcduffie" icon="stackoverflow">jeremy-mcduffie</SocialLink>
        </li>
      </ul>

      <p>
        <small className="block text-sm">Copyright &copy; 2013–{new Date().getFullYear()} Jeremy McDuffie.</small>
        <small className="block text-sm">All rights reserved.</small>
      </p>
    </div>
  </footer>
)
