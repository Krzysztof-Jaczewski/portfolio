/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: "Web Developer",
    name: "Krzysztof Jaczewski",
    description: "Web front-end developer",
    copyright: "This site was created in 2022 ",
    navigation: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Projects", link: "/projects" },
    ],
  },
}
