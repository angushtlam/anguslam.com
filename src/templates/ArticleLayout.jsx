import { graphql } from "gatsby";
import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/markdown.css";

export default function ArticleLayout({ children, data }) {
  const { title, updated } = data.mdx.frontmatter;

  return (
    <div>
      <div>
        <Header breadcrumb="blog">{title}</Header>
        <div>{children}</div>
        <div>
          <p>Last updated {updated}</p>
        </div>
      </div>
      <Footer />
    </div>
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
