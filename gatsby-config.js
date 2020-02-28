/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Belarusian Writers',
    description: 'RS School task',
    author: 'Our Team',
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    'gatsby-plugin-typescript', // add typescript
    'gatsby-plugin-material-ui', // add material-ui
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `ru`, `by`],
        defaultLanguage: `en`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.tsx`),
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Belarusian Writers',
        short_name: 'Belarusian_writers',
        start_url: '/',
        icon: `${__dirname}/static/img/favicon-32x32.png`,
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 600,
              ratio: 1.77,
              height: 335,
              related: false,
              noIframerder: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
