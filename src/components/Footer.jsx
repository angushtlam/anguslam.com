import { css } from "@emotion/react";
import * as React from "react";

export default function Footer() {
  return (
    <footer
      css={css`
        color: #696969;
        font-style: italic;
      `}
    >
      <div
        css={css`
          @media (min-width: 599px) {
            display: flex;
          }
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
            flex: 2 0;
          `}
        >
          <h3>Why does the site look like a default nginx page?</h3>
          <p>
            I have very fond memories of snooping autoindex pages on poorly
            configured servers back in the late 2000s. It's hard to find those
            nowadays. "Browser default" HTML also has a brutalistic and
            uninstrusive quality in the comtemporary time. It has allowed me to
            focus on creating more novel works rather than tweaking every pixel
            on this site to stylistically tie together everything I work on, no
            matter how disparate, in a futile manner. That is not to say there's
            no styling here—every detail is still meticulously chosen. I could
            have went for a more conventional modern minimalist design, but
            what's the fun in that?
          </p>
        </div>
      </div>

      <p>© Angus Lam 2015-{new Date().getFullYear()}</p>
    </footer>
  );
}
