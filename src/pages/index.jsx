import { css } from "@emotion/react";
import { Link } from "gatsby";

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
      <p>Hello! Welcome! I am Angus from New York.</p>
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
              <Link to="https://kindredunspirits.com">Kindred Unspirits</Link>{" "}
              Holographic stickers of household items. I designed them and built
              an online store to learn how physical items are sold online. The
              store was rated five stars until I shut it down.
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <p>
        On my website, you'll find a collection of my professional and personal
        work from a breadth of my interests, hobbies, adventures, and
        brainworms.
      </p>
      <p>
        My main job is working as a software engineer at{" "}
        <Link to="https://stripe.com">Stripe</Link>. I have six years of tenure
        building security and privacy applications. My skills include full-stack
        software development, product design, and project management. I
        specialize in building technology enabled products with visually
        beautiful and delightful experiences. I led and shipped these externally
        visible ships:
        <ul>
          <li>
            <Link to="https://privacy.stripe.com">Privacy Portal</Link>
          </li>
          <li>
            <Link to="https://docs.stripe.com/privacy/redaction">
              Redaction API
            </Link>
          </li>
        </ul>
      </p>
      <p>
        I have experience working at technology startups of sizes small and
        large in San Francisco, New York, and Buffalo <em>(go Bills)</em>.
        Before Stripe, I worked at <Link to="https://lugg.com">Lugg</Link>,{" "}
        <Link to="https://optimizely.com">Optimizely</Link>, and a few Buffalo
        startups. I built software from zero-to-one MVPs to scalable
        enterprise grade features.
      </p>
    </PageLayout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
