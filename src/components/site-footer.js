import React from "react"
import Icon from "./icon"

const SocialLink = ({ href, icon, children }) => (
  <a
    rel="me"
    href={href}
    className="text-blue-700 hover:text-current hover:underline u-url"
  >
    <Icon name={icon} className="mr-1 md:mr-2" />
    <span>{children}</span>
  </a>
)

export default () => (
  <footer
    role="contentinfo"
    className="px-4 py-6 text-gray-700 border-t h-card"
  >
    <div className="justify-between max-w-screen-lg mx-auto space-y-4 md:space-y-0 md:flex">
      <div>
        <img
          class="rounded-full u-photo"
          alt="Jeremy McDuffie"
          src="https://avatars0.githubusercontent.com/jmmcduffie?v=3&amp;s=200"
          srcset="https://avatars0.githubusercontent.com/jmmcduffie?v=3&amp;s=100 1x, https://avatars0.githubusercontent.com/jmmcduffie?v=3&amp;s=200 2x"
          width="100"
          height="100"
        />
      </div>

      <ul className="flex flex-wrap -ml-4 md:block md:m-0">
        <li className="ml-4 md:m-0">
          <SocialLink href="https://github.com/jmmcduffie" icon="github">
            jmmcduffie
          </SocialLink>
        </li>
        <li className="ml-4 md:m-0">
          <SocialLink
            href="https://www.linkedin.com/in/jmmcduffie"
            icon="linkedin"
          >
            jmmcduffie
          </SocialLink>
        </li>
        <li className="ml-4 md:m-0">
          <SocialLink
            href="https://stackoverflow.com/users/943505/jeremy-mcduffie"
            icon="stackoverflow"
          >
            jeremy-mcduffie
          </SocialLink>
        </li>
        <li className="ml-4 md:m-0">
          <SocialLink href="/rss.xml" icon="rss">
            jmmcduffie.com
          </SocialLink>
        </li>
      </ul>

      <p>
        <small className="block text-sm">
          Copyright &copy; 2007–{new Date().getFullYear()}{" "}
          <span class="p-name">Jeremy McDuffie</span>.
        </small>
        <small className="block text-sm">All rights reserved.</small>
      </p>
    </div>
  </footer>
)
