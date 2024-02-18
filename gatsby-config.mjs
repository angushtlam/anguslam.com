import remarkGfm from "remark-gfm";

const config = {
  siteMetadata: {
    siteUrl: "https://anguslam.com",
    title: "Angus Lam - anguslam.com",
    description: `Angus is a software engineer with experience working at technology startups like Stripe, Lugg, Optimizely, and more. This is his personal website where he shares his work, knowledge, experiences, and other topics he finds interesting.`,
    social: {
      linkedIn: `angushtlam`,
      threads: `angustofar`,
      twitter: `angushtlam`,
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    "gatsby-transformer-sharp",
    `gatsby-remark-images`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: "./src/articles/",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ],
};

export default config;
