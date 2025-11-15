import * as React from "react";

interface HeaderProps {
  breadcrumb?: string;
  children: React.ReactNode;
}

export default function Header({ breadcrumb, children }: HeaderProps) {
  return (
    <>
      <h2 style={{ fontSize: '18px' }}>
        <a href="/">Angus Lam</a>
        {breadcrumb === "blog" && (
          <>
            {" / "}
            <a href="/blog">All blog posts</a>
          </>
        )}
      </h2>
      <h1>{children}</h1>
      <hr />
    </>
  );
}
