const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(
    "./src/templates/ProjectDetails/index.js"
  )
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: projectTemplate,
      context: { slug: node.frontmatter.slug },
    })
  })
}
