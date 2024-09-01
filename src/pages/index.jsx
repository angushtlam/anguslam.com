import { css } from "@emotion/react";
import { Link } from "gatsby";
import * as React from "react";

import { SEO } from "../components/SEO";
import meJpg from "../images/me.jpg";
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
        Hello! Welcome! You made it to my website and I'm so glad to see you
        here.
      </p>
      <img
        alt="Picture of Angus Lam"
        css={css`
          max-height: 350px;
          max-width: 100%;
        `}
        src={meJpg}
      />
      <p>
        My name is Angus, a software engineer based in New York currently at
        Stripe. My skills include full-stack engineering, product design, and
        project management, and I specialize in building technology enabled
        products with delightful experiences.
      </p>
      <p>
        I have experience working at technology startups of sizes small and
        large in San Francisco, New York, and Buffalo. Before Stripe, I've
        worked at Lugg, Optimizely, and a few Buffalo startups. I've built
        software from zero-to-one MVPs to scalable enterprise grade features.
      </p>
      <p>
        On this site, you'll find a collection of my professional and personal
        work from a breadth of my interests, hobbies, adventures, and
        brainworms.
      </p>
      <ul>
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
        <li>
          Personal projects
          <ul>
            <li>
              <Link to="https://kindredunspirits.com">Kindred Unspirits</Link>{" "}
              Holographic stickers of household items. I designed and built this
              store to learn how physical items are sold online. The store is
              rated five stars <em>(so far)</em>.
            </li>
            <li>
              <Link to="/items">Personal item log</Link> An experiment in
              maintaining a catalog of personal belongings
            </li>
            <li>
              <Link to="https://angus.dev/ads-privacy">
                “The Ads Are Following Me!”
              </Link>{" "}
              - a visual story website about online advertising and retargeting
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
    </PageLayout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
