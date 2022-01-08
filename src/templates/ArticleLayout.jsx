import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import "../styles/markdown.css";

export default function ArticleLayout({ data }) {
  const { title, updated } = data.mdx.frontmatter;
  const { body } = data.mdx;

  return (
    <PageLayout className="bg-slate-100" title={title}>
      <Header />
      <div className="max-w-screen-md mx-auto p-4">
        <h1 className="font-black text-2xl md:text-3xl mb-8">{title}</h1>

        <div className="markdown-body">
          <MDXRenderer>{body}</MDXRenderer>
        </div>

        <div className="inline-block bg-slate-200 mt-12 p-4">
          <p>Last updated {updated}</p>
          <p>
            <em>Are the articles up-to-date or still relevant? </em>
            <Link className="font-black text-blue-500 underline"
            to="/article/evergreen-writing">Explainer here →</Link>
          </p>
        </div>
      </div>
      <Footer />
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
      body
    }
  }
`;
