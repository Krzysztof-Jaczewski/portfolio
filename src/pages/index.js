import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../componets/Layout"
import { header, image, button } from "./home.module.css"
import "./global.css"
const Home = ({ data }) => {
  const { name } = data.site.siteMetadata
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2> {name}</h2>
          <h3>frond-end designer</h3>
          <Link to="/projects" className={button}>
            Check projects
          </Link>
        </div>
        <StaticImage
          className={image}
          as="div"
          src="../images/dev.png"
          alt="devImage"
          placeholder="blurred"
        />
      </section>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    site {
      siteMetadata {
        name
      }
    }
  }
`
