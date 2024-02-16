import { css } from "@emotion/react";
import * as React from "react";

export default function Footer() {
  return (
    <footer
      css={css`
        color: #696969;
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            flex: 1 0;
          `}
        >
          <h3>Socials</h3>
          <ul>
            <li>
              <a
                href="https://linkedin.com/in/angushtlam"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.threads.net/@angustofar"
                rel="noreferrer"
                target="_blank"
              >
                Threads
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/angushtlam"
                rel="noreferrer"
                target="_blank"
              >
                Twitter/X
              </a>
            </li>
          </ul>
        </div>
        <div
          css={css`
            flex: 1 0;
          `}
        >
          <h3>About me</h3>
          <p>
            Angus is a software engineer with experience working at technology
            startups like Stripe, Lugg, Optimizely, and more. This is his
            personal website where he shares his work, knowledge, experiences,
            and other topics he finds interesting.
          </p>
        </div>
      </div>

      <p>© Angus Lam 2017-{new Date().getFullYear()}</p>
    </footer>
  );
}
