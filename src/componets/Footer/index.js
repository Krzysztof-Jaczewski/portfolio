import React from "react"
import "./styled.css"

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} <span>Portfolio build with </span>
        <a href="https://www/gatsbyjs.com">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
