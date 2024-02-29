import { graphql } from "gatsby";
import * as React from "react";
import Header from "../components/Header";
import PageLayout from "./PageLayout";
import "../styles/markdown.css";
import { SEO } from "../components/SEO";

export default function ArticleLayout({ children, data }) {
  const { title, updated } = data.mdx.frontmatter;

  return (
    <PageLayout>
      <Header breadcrumb="blog">{title}</Header>
      {children}
      <p>Last updated {updated}</p>
    </PageLayout>
  );
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        updated(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;

export const Head = ({ data }) => (
  <SEO title={`${data.mdx.frontmatter.title} | Angus Lam - anguslam.com`} />
);
