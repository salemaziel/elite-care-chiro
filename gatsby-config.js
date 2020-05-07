const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },

  plugins: [
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
      resolve: `gatsby-plugin-tawk`,
      options: {
       // tawkId: "5ea0b46f69e9320caac662db",
            // tawkID = widget ID
      },
    },
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
    // `gatsby-plugin-offline`,
  ],
};
