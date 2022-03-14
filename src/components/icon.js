import React from "react"
import icons from "../images/icons.svg"

export default ({ name, className }) => (
  <svg className={`fill-current inline-block w-4 h-4 ${className}`}>
    <use href={`${icons}#${name}`} />
  </svg>
)
