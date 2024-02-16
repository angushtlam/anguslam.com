import { css } from "@emotion/react";
import { Link } from "gatsby";
import * as React from "react";

import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <main
        css={css`
          padding-bottom: 200px;
        `}
      >
        <h1>
          Index of /<span>Angus Lam</span>/
        </h1>
        <p>
          Welcome, you've made it to my website. I have a few things to share.
        </p>
        <ul>
          <li>
            Blog
            <ul>
              <li>
                <Link to="/photos-migration">
                  "My migration from iCloud Photos to Google Photos went so
                  terribly that I had to write Python scripts and it still took
                  80 hours"
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
                <Link to="/blog">See all posts…</Link>
              </li>
            </ul>
          </li>
          <li>
            Projects
            <ul>
              <li>
                <Link to="https://kindredunspirits.com">Kindred Unspirits</Link>{" "}
                Holographic stickers of household items
              </li>
              <li>
                <Link to="/items">Personal item log</Link> An experiment in
                maintaining a catalog of personal belongings
              </li>
              <li>
                <a
                  href="https://instagram.com/angustofar"
                  rel="noreferrer"
                  target="_blank"
                >
                  Travel Instagram
                </a>{" "}
                Editorials of the places I've traveled
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

export const Head = () => <title>Angus Lam anguslam.com</title>;
