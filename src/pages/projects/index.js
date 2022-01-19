import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../../componets/Layout"
import {
  portfolio,
  styledProjects,
  card,
  icons,
  contetnt,
} from "./projects.module.css"

const Projects = ({ data }) => {
  const projects = data.projects.nodes
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Porjects & websites I`ve Created</h3>
        <div className={styledProjects}>
          {projects.map(project => {
            const image = getImage(project.frontmatter.icon.childImageSharp)
            console.log(image)
            return (
              <Link
                className={card}
                to={`/projects/${project.frontmatter.slug}`}
                key={project.id}
              >
                <div className={icons}>
                  <GatsbyImage image={image} alt="picture" />
                </div>
                <div className="contetnt">
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query MyQuery {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          icon {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
