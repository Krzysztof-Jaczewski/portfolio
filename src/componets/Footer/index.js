import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import "./styled.css"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query SiteInfo {
        site {
          siteMetadata {
            copyright
          }
        }
      }
    `
  )

  const { copyright } = data.site.siteMetadata

  return <footer>{copyright}</footer>
}

export default Footer
