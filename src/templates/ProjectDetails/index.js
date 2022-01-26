import React from "react"
import Layout from "../../componets/Layout"
import "normalize.css"
import { details, featured } from "./projectDetails.module.css"

const ProjectDetails = () => {
  return (
    <Layout>
      <div className={details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={featured}>{/* <img /> */}</div>
        {/* <div className={html} dangerouslySetInnerHTML={}/> */}
      </div>
    </Layout>
  )
}

export default ProjectDetails
