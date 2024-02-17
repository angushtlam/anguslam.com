import { css } from "@emotion/react";
import * as React from "react";

import Footer from "../components/Footer";
import "../styles/index.css";

export default function PageLayout({ children }) {
  return (
    <div
      className="crt"
      css={css`
        align-items: center;
        background: #fafafa;
        display: flex;
        height: 100vh;
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
            height: 10px;
            left: 0;
            position: absolute;
            top: -5px;
            width: 100%;
          `}
        />
        <div
          css={css`
            background: #ffffff;
            border-radius: 50%;
            bottom: -5px;
            height: 10px;
            left: 0;
            position: absolute;
            width: 100%;
          `}
        />
        <div
          css={css`
            background: #ffffff;
            border-radius: 50%;
            height: 100%;
            left: -5px;
            position: absolute;
            top: 0;
            width: 10px;
          `}
        />
        <div
          css={css`
            background: #ffffff;
            border-radius: 50%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            right: -5px;
            width: 10px;
          `}
        />
        <div
          css={css`
            background: #ffffff;
            height: 100%;
            overflow: auto;
            padding: 5px;
            width: 100%;
          `}
        >
          <main
            css={css`
              padding-bottom: 200px;
            `}
          >
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
