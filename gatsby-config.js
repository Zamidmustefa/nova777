module.exports = {
  siteMetadata: {
    title: `NovaSpin – Free Social Gaming App for Android & iOS | Official Site`,
    description: `NovaSpin is a free social gaming app for Android and iOS featuring slots, fish games, and keno. For entertainment purposes only. 18+ only.`,
    siteUrl: `https://www.novaspin.com`,
    author: `@NovaSpin`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
  ],
}
