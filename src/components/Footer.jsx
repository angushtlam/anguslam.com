import * as React from "react";

export default function Header() {
  return (
    <div className="px-4 py-8">
      <div className="md:flex md:space-x-4 mx-auto max-w-screen-lg">
        <div className="flex-2">
          <a href="/">
            <h1 className="font-black lowercase text-orientation-mixed text-2xl">
              Angus Lam
            </h1>
            <ul className="my-4">
              <li>
                <a className="font-black text-blue-500 underline" href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a className="font-black text-blue-500 underline" href="#">
                  GitHub
                </a>
              </li>
              <li>
                <a className="font-black text-blue-500 underline" href="#">
                  LinkedIn
                </a>
              </li>
            </ul>
            <p className="pb-8">© Angus Lam 2017-{Math.max(2018, new Date().getFullYear())}</p>
          </a>
        </div>
        <div className="flex-1">
          <p className="text-sm">
            Angus is a software engineer with experience working at technology
            startups like Stripe, Lugg, Optimizely, and more. This is his
            personal website where he shares his work, knowledge, experiences,
            and other topics he finds interesting.
          </p>
        </div>
      </div>
    </div>
  );
}
