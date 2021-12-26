import * as React from "react";
import ReactHelmet from "react-helmet";

import "../styles/global.css";
import "../styles/index.css";

export default function PageLayout({ children, ...props }) {
  return (
    <div {...props}>
      <ReactHelmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@500;900&display=swap"
          rel="stylesheet"
        />
      </ReactHelmet>
      {children}
    </div>
  );
}
