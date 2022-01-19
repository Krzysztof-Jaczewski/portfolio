import { graphql, Link, useStaticQuery } from "gatsby"
import { nanoid } from "nanoid"
import React from "react"
import "./styled.css"

const Navbar = () => {
  const data = useStaticQuery(
    graphql`
      query NavBarInfo {
        site {
          siteMetadata {
            title
            navigation {
              name
              link
            }
          }
        }
      }
    `
  )

  const { title, navigation } = data.site.siteMetadata

  return (
    <nav>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <div className="links">
        {navigation.map(item => (
          <Link key={nanoid()} to={item.link}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
