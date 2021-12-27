import * as React from "react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <div className="align-center border-black border-t-8 flex mb-8 space-between w-full">
      <Link className="block" to="/">
        <h1 className="font-black lowercase text-orientation-mixed text-4xl px-8 pt-8">
          Angus Lam
        </h1>
      </Link>
    </div>
  );
}
