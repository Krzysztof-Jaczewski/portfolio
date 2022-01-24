import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../componets/Layout"
import "normalize.css"
import {
  portfolio,
  styledProjects,
  card,
  icons,
  contetnt,
  button,
  tags,
} from "./projects.module.css"

const Projects = ({ data }) => {
  const projects = data.projects.nodes
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Porjects & websites I`ve Created</h3>
        <div className={styledProjects}>
          {projects.map(project => (
            <div className={card} key={`asad-${project.id}`}>
              <div className={icons}>{project.frontmatter.icon}</div>
              <div className={contetnt}>
                <h3>{project.frontmatter.title}</h3>
                <div className={tags}>
                  {project.frontmatter.stack.map(tag => (
                    <p>{tag}</p>
                  ))}
                </div>

                <Link
                  className={button}
                  as="button"
                  to={`/projects/${project.frontmatter.slug}`}
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          icon
        }
        id
      }
    }
  }
`
