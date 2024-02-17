import { Link } from "gatsby";
import * as React from "react";
import PageLayout from "../components/PageLayout";

const NotFoundPage = () => {
  return (
    <PageLayout>
      <Link to="/">
        <h1>Angus Lam</h1>
      </Link>
      <h2>404 not found</h2>
      <p>
        The page you're trying to visit doesn't exist or moved.{" "}
        <Link to="/">Return to index</Link>.
      </p>
    </PageLayout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found | Angus Lam - anguslam.com</title>;
