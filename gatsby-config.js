const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },

  plugins: [
//    {
//      resolve: "gatsby-plugin-tinacms",
//      options: {
//        plugins: ["gatsby-tinacms-git", "gatsby-tinacms-remark", "gatsby-tinacms-json",],
//        sidebar: {
//          hidden: process.env.NODE_ENV === "production",
//          position: "displace"
//        },
//      },
//    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/data`,
        name: `data`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EliteCareChiropractic`,
        short_name: `EliteCare`,
        start_url: `/`,
        background_color: `#0397D7`,
        theme_color: `#0397D7`,
        display: `standalone`,
        icon: `src/images/logo-810x600.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
  ],
};
