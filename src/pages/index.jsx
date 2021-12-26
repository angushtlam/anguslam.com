import * as React from "react";
import Hero from "../components/Hero";
import PageLayout from "../components/PageLayout";
import { graphql, StaticQuery } from "gatsby";

function CategoryTitle({ children }) {
  return <h2 className="font-black text-gray-500 text-md">{children}</h2>;
}

function CategoryArticleList({ children }) {
  return <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 mt-4">{children}</div>;
}

function CategoryArticle({ frontmatter: { blurb, title }, slug }) {
  return (
    <a className="block" href={`articles/${slug}`}>
      <h3 className="font-black text-blue-700 text-lg underline">{title}</h3>
      <p>{blurb}</p>
    </a>
  );
}

function IndexPageImpl({ allMdx: { edges } }) {
  const categoryOrderingAndTitle = {
    "developer-resources": "Developer resources",
    career: "Career",
    community: "Community",
    miscellaneous: "Miscellaneous",
  };
  const categoryOrder = Object.keys(categoryOrderingAndTitle);

  const categorizedArticles = {};
  for (const category of categoryOrder) {
    categorizedArticles[category] = [];
  }
  const uncategorizedArticles = [];

  for (const edge of edges) {
    const article = edge.node;
    const category = article.frontmatter.category;
    if (!categoryOrder.includes(category)) {
      uncategorizedArticles.push(article);
    } else {
      categorizedArticles[category].push(article);
    }
  }

  return (
    <PageLayout>
      <Hero />
      <div className="px-4 py-16 bg-slate-100">
        <div className="mx-auto max-w-screen-lg">
          {Object.keys(categorizedArticles).map((category) => {
            const articles = categorizedArticles[category];
            return (
              <>
                <CategoryTitle>
                  {categoryOrderingAndTitle[category]}
                </CategoryTitle>
                <CategoryArticleList>
                  {articles.map((article) => (
                    <CategoryArticle {...article} />
                  ))}
                </CategoryArticleList>
              </>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}

export default function IndexPage() {
  return (
    <StaticQuery
      query={graphql`
        {
          allMdx(
            filter: { frontmatter: { published: { eq: true } } }
            sort: { fields: frontmatter___title, order: ASC }
          ) {
            edges {
              node {
                frontmatter {
                  blurb
                  category
                  updated
                  title
                }
                slug
              }
            }
          }
        }
      `}
      render={IndexPageImpl}
    />
  );
}
