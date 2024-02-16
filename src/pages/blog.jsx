import { css } from "@emotion/react";
import { Link } from "gatsby";
import * as React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const IndexPage = () => {
  return (
    <>
      <main
        css={css`
          padding-bottom: 200px;
        `}
      >
        <Header>All blog posts</Header>
        <ul>
          <li>
            Computers
            <ul>
              <li>
                <Link to="/photos-migration">
                  "My migration from iCloud Photos to Google Photos went so
                  terribly that I had to write Python scripts and it still took
                  80 hours"
                </Link>
              </li>
              <li>
                <Link to="/react-native-gotchas">
                  "Gotchas for web developers trying out React Native"
                </Link>
              </li>
              <li>
                <Link to="/the-case-for-plain-css">
                  "The case for plain CSS"
                </Link>
              </li>
              <li>
                <Link to="/building-a-student-tech-community">
                  "Building a student tech community"
                </Link>{" "}
                How I organized UB ACM, my alma mater's computer science club,
                from 2017-2019.
              </li>
              <li>
                <Link to="/stripe-internship-2018">
                  "My Stripe internship 2018"
                </Link>
              </li>
              <li>
                <Link to="/optimizely-internship-2017">
                  "My internship project at Optimizely 2017"
                </Link>
              </li>
            </ul>
          </li>
          <li>
            Fun
            <ul>
              <li>
                <Link to="/miami">"A visitor's travelogue for Miami"</Link>
              </li>
            </ul>
          </li>
          <li>
            Misc
            <ul>
              <li>
                <Link to="/evergreen-writing">
                  "Uh, are your articles up-to-date?"
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>All blog posts - Angus Lam</title>;
