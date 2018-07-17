module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Pandas Eating Lots",
        short_name: "Pandas",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#000",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
  ],
};

