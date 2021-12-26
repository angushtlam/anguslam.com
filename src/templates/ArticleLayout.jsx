import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Header from "../components/Header";
import PageLayout from "../components/PageLayout";
import "../styles/markdown.css";

export default function ArticleLayout({ data }) {
  const { title, updated } = data.mdx.frontmatter;
  const { body } = data.mdx;

  return (
    <PageLayout className="bg-slate-100">
      <Header />
      <div className="max-w-screen-md mx-auto p-4">
        <h1 className="font-black text-2xl md:text-3xl mb-8">{title}</h1>

        <div className="markdown-body">
          <MDXRenderer>{body}</MDXRenderer>
        </div>

        <h2>
          Posted on <span>{updated}</span>
        </h2>
      </div>
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
