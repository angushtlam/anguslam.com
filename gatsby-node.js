exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              published
              slug
            }
          }
        }
      }
    }
  `);

  data.allMdx.edges.forEach((edge) => {
    const { published, slug } = edge.node.frontmatter;

    if (!!published) {
      actions.createPage({
        path: `article/${slug}`,
        component: require.resolve("./src/templates/ArticleLayout.jsx"),
        context: { slug: slug },
      });
    }
  });
};

// Leaflet expects window to be defined
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leaflet/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
