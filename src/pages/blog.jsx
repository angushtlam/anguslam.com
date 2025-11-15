import { Link } from "gatsby";
import * as React from "react";

import Header from "../components/Header";
import { SEO } from "../components/SEO";
import PageLayout from "../layouts/PageLayout";

const IndexPage = () => {
  return (
    <PageLayout>
      <Header>All blog posts</Header>
      <p>
        I'm slowly moving my writing to{" "}
        <Link href="https://angushtlam.substack.com">Substack</Link>. The best
        way to keep up is to subscribe to me there!
      </p>
      <ul>
        <li>
          <Link to="/photos-migration">
            "My migration from iCloud Photos to Google Photos went so terribly
            that I had to write Python scripts and it still took 80 hours"
          </Link>
        </li>
        <li>
          <Link to="/react-native-gotchas">
            "Gotchas for web developers trying out React Native"
          </Link>
        </li>
        <li>
          <Link to="/the-case-for-plain-css">"The case for plain CSS"</Link>
        </li>
        <li>
          <Link
            to="https://angushtlam.substack.com/p/building-a-student-tech-community"
            target="_blank"
          >
            "Building a student tech community"
          </Link>{" "}
          How I organized UB ACM, my alma mater's computer science club, from
          2017-2019.
        </li>
        <li>
          <Link to="/stripe-internship-2018">"My Stripe internship 2018"</Link>
        </li>
        <li>
          <Link to="/optimizely-internship-2017">
            "My internship project at Optimizely 2017"
          </Link>
        </li>
      </ul>
    </PageLayout>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="All blog posts | Angus Lam - anguslam.com" />
);
