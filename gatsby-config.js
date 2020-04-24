require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

let URL;
if (process.env.NODE_ENV === 'production') {
  URL = "https://cactusauria.netlify.com/";
} else {
  URL = 'http://localhost:8000';
}

module.exports = {
  siteMetadata: {
    title: `Cactu Ecommerce <3`,
    description: `La pagina de Cactu <3`,
    author: `juandinella.com`,
    siteUrl: URL,
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Playfair Display\:900`, `Montserrat\:400,700`],
        display: "swap",
      },
    },
  ],
};
