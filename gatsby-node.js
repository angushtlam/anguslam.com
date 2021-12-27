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
