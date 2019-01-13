module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: 'SWAPI',
    //     // This is field under which it's accessible
    //     fieldName: 'swapi',
    //     // Url to query from
    //     url: 'https://api.graphcms.com/simple/v1/swapi',
    //   },
    // },
    // // Passing paramaters (passed to apollo-link)
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'GitHub',
    //     fieldName: 'github',
    //     // Url to query from
    //     url: 'https://api.github.com/graphql',
    //     // HTTP headers
    //     headers: {
    //       // Learn about environment variables: https://gatsby.app/env-vars
    //       Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    //     },
    //     // Additional options to pass to node-fetch
    //     fetchOptions: {},
    //   },
    // },
    // Creating arbitrary Apollo Link (for advanced situations)
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // The top level query type, can be anything you want!
        typeName: 'GCMS',
        // The field you'll query against, can also be anything you want.
        fieldName: 'gcms',
        // Your API endpoint, available from the dashboard and settings window.
        url:
          'https://api-uswest.graphcms.com/v1/cjqvb9hh04f3s01dn3ml6o8zg/master',
        /*typeName: "GitHub",
        fieldName: "github",
        // Create Apollo Link manually. Can return a Promise.
        createLink: (pluginOptions) => {
          return createHttpLink({
            uri: 'https://api.github.com/graphql',
            headers: {
              'Authorization': `bearer ${process.env.GITHUB_TOKEN}`,
            },
            fetch,
          });
        },*/
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
