import { Link } from "gatsby";
import * as React from "react";
import PageLayout from "../components/PageLayout";
import { css } from "@emotion/react";
import { SEO } from "../components/SEO";

const NotFoundPage = () => {
  return (
    <PageLayout>
      <div
        css={css`
          text-align: center;
        `}
      >
        <h1>404 not found</h1>
        <hr />
        <p>
          The page you're trying to visit doesn't exist or moved.{" "}
          <Link to="/">Return to index</Link>.
        </p>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;

export const Head = () => <SEO title="Not found | Angus Lam - anguslam.com" />;
