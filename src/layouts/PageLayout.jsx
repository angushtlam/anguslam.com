import { css } from "@emotion/react";
import * as React from "react";

import Footer from "../components/Footer";
import "../styles/index.css";
import "../styles/crt.css";

export default function PageLayout({ children }) {
  return (
    <div
      className="crt"
      css={css`
        align-items: center;
        background: #222;
        background: linear-gradient(#222, #333);
        display: flex;
        height: 100%;
        height: 100vh;
        height: 100dvh;
        justify-content: center;
      `}
    >
      <div
        css={css`
          height: 100%;
          position: relative;
          width: 100%;

          @media (orientation: portrait) and (min-width: 500px) {
            aspect-ratio: 3 / 4;
            height: inherit;
            max-height: 95vh;
            max-width: 95vw;
            width: inherit;
          }

          @media (orientation: landscape) and (min-height: 600px) {
            aspect-ratio: 4 / 3;
            height: inherit;
            max-height: 95vh;
            max-width: 95vw;
            width: inherit;
          }
        `}
      >
        <div
          css={css`
            background: #ffffff;
            border-radius: 50%;
            height: 20px;
            left: 0;
            position: absolute;
            top: -10px;
            width: 100%;

            @media (orientation: portrait) and (max-width: 499px) {
              display: none;
            }

            @media (orientation: landscape) and (max-height: 599px) {
              display: none;
            }
          `}
        />
        <div
          css={css`
            background: #ffffff;
            border-radius: 50%;
            bottom: -10px;
            height: 20px;
            left: 0;
            position: absolute;
            width: 100%;

            @media (orientation: portrait) and (max-width: 499px) {
              display: none;
            }

            @media (orientation: landscape) and (max-height: 599px) {
              display: none;
            }
          `}
        />
        <div
          css={css`
            background: #ffffff;
            border-radius: 50%;
            height: 100%;
            left: -10px;
            position: absolute;
            top: 0;
            width: 20px;

            @media (orientation: portrait) and (max-width: 499px) {
              display: none;
            }

            @media (orientation: landscape) and (max-height: 599px) {
              display: none;
            }
          `}
        />
        <div
          css={css`
            background: #ffffff;
            border-radius: 50%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            right: -10px;
            width: 20px;

            @media (orientation: portrait) and (max-width: 499px) {
              display: none;
            }

            @media (orientation: landscape) and (max-height: 599px) {
              display: none;
            }
          `}
        />
        <div
          css={css`
            background: #ffffff;
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow: auto;
            padding: 10px;
            width: 100%;
          `}
        >
          <main
            css={css`
              flex-grow: 1;
              padding-bottom: 300px;
            `}
          >
            {children}
          </main>
          <div
            css={css`
              flex-grow: 0;
              flex-shrink: 0;
            `}
          >
            <hr />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
