import { css } from "@emotion/react";
import { Link } from "gatsby";
import * as React from "react";

export default function Header({ breadcrumb, children }) {
  return (
    <>
      <h2
        css={css`
          font-size: 18px;
        `}
      >
        <Link to="/">Angus Lam</Link>
        {breadcrumb === "blog" && (
          <>
            {" / "}
            <Link to="/blog">All blog posts</Link>
          </>
        )}
      </h2>
      <h1>{children}</h1>
      <hr />
    </>
  );
}
