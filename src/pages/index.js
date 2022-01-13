import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../componets/Layout"
import * as styles from "../styles/home.module.css"
const Home = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>frond-end designer</h3>
          <p> lorem ispum </p>
          <Link to="/projects" className={styles.button}>
            Check projects
          </Link>
        </div>
        <img
          src="/dev.svg"
          alt="devImage"
          style={{ maxWidth: "100%", minWidth: "300px" }}
        />
      </section>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query DevImage {
    file(relativePath: { eq: "snowman.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
