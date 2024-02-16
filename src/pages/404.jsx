import { Link } from "gatsby";
import * as React from "react";

const NotFoundPage = () => {
  return (
    <main>
      <Link to="/">
        <h1>Angus Lam</h1>
      </Link>
      <h2>404 not found</h2>
      <p>
        The page you're trying to visit doesn't exist or moved.{' '}
        <Link to="/">Return to index</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found - Angus Lam anguslam.com</title>;
