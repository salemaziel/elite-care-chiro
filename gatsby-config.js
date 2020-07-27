const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },

  plugins: [
 //   {
 //     resolve: "gatsby-plugin-tinacms",
 //     options: {
 //       plugins: [
 //             "gatsby-tinacms-git", 
 //             "gatsby-tinacms-remark", 
 //             "gatsby-tinacms-json",
 //           ],
 //       sidebar: {
 //         hidden: process.env.NODE_ENV === "production",
 //         position: "displace"
 //       },
 //     },
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
        display: `minimal-ui`,
        icon: `src/images/logo-810x600.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
        loginPath: "/login",
        loginRedirectPath: "/dashboard",
        socialLogins: ["google", "twitter", "facebook", "github"],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://elitecare.salemaziel.design',
        sitemap: 'https://elitecare.salemaziel.design/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
