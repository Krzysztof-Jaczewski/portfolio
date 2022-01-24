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
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Porjects & websites I`ve Created</h3>
        <div className={styledProjects}>
          {projects.map(project => {
            const image = getImage(project.frontmatter.icon.childImageSharp)
            return (
              <div className={card} key={project.id}>
                <div className={icons}>
                  <GatsbyImage image={image} alt="" />
                </div>
                <div className={contetnt}>
                  <h3>{project.frontmatter.title}</h3>
                  <div className={tags}>
                    {project.frontmatter.stack.map((tag, index) => (
                      <p key={`${project.id}-${index}`}>{tag}</p>
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
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          icon {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 80, height: 80)
            }
          }
          slug
          stack
          title
        }
        id
      }
    }
  }
`
