import { css } from "@emotion/react";
import { Link } from "gatsby";

import { SEO } from "../components/SEO";
import meJpg from "../images/me_small.jpeg";
import PageLayout from "../layouts/PageLayout";

const IndexPage = () => {
  return (
    <PageLayout>
      <h1
        css={css`
          color: #696969;
        `}
      >
        Index of /
        <span
          css={css`
            color: #222;
          `}
        >
          Angus Lam
        </span>
        /
      </h1>
      <hr />
      <p>
        Hello! I am Angus. Welcome to my website! You'll find a collection of my
        work here, from a breadth of my interests, hobbies, adventures, and
        brainworms.
      </p>
      <img
        alt="Picture of Angus Lam"
        css={css`
          max-height: 350px;
          max-width: 100%;
        `}
        src={meJpg}
      />
      <ul>
        <li>
          <Link to="https://moodboring.com" target="_blank">
            Moodboring
          </Link>{" "}
          Browser-based photo editor with a lot of <em>(my)</em> personality
        </li>
        <li>
          <Link to="/items">Personal item log</Link> An experiment in
          maintaining a catalog of personal belongings
        </li>
        <li>
          <Link to="https://angushtlam.github.io/ads-privacy/" target="_blank">
            “The Ads Are Following Me!”
          </Link>{" "}
          Visual story website about online advertising and retargeting
        </li>
        <li>
          <Link to="https://kindredunspirits.com" target="_blank">
            Kindred Unspirits
          </Link>{" "}
          Holographic stickers of household items. I designed them and built an
          online store to learn how physical items are sold online. The store
          was rated five stars until I shut it down.
        </li>
        <li>
          <Link to="https://angus.dev" target="_blank">
            angus.dev
          </Link>{" "}
          My day job. I write code for a living.
        </li>
        <li>
          Blog
          <ul>
            <li>
              <Link to="/photos-migration">
                “My migration from iCloud Photos to Google Photos went so
                terribly that I had to write Python scripts and it still took 80
                hours”
              </Link>
            </li>
            <li>
              <Link to="/building-a-student-tech-community">
                “Building a student tech community”
              </Link>{" "}
              How I organized UB ACM, my alma mater's computer science club,
              from 2017-2019.
            </li>
            <li>
              <Link to="/blog">See all posts…</Link>
            </li>
          </ul>
        </li>
      </ul>
    </PageLayout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
