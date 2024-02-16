import path from "path";
const mdxTemplate = path.resolve("./src/templates/ArticleLayout.jsx");

export const createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              published
              slug
            }
            internal {
              contentFilePath
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
        path: `${slug}`,
        component: `${mdxTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
        context: { slug: slug },
      });
    }
  });
};

// Leaflet expects window to be defined
export const onCreateWebpackConfig = ({ stage, loaders, actions }) => {
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
