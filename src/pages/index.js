import { Link } from "gatsby"
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
        </div>
      </section>
      <Link to="/projects" className={styles.button}>
        Check projects
      </Link>
    </Layout>
  )
}

export default Home
