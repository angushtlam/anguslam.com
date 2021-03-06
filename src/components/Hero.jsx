import * as React from "react";
import HeroBackground from "./HeroBackground";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  const heroRef = React.useRef();

  return (
    <div
      className="bg-slate-900 flex flex-col relative"
      ref={heroRef}
    >
      <HeroBackground heroRef={heroRef} />
      <div className="h-full flex flex-1 flex-col z-20">
        <div className="align-center border-white border-t-8 flex mb-8 w-full">
          <Link to="/">
            <h1 className="font-black lowercase text-orientation-mixed text-white text-4xl px-8 pt-8">
              Angus Lam
            </h1>
          </Link>
        </div>
        <div className="flex flex-1">
          <div className="flex items-center px-4 py-8 w-full">
            <div className="mx-auto max-w-screen-md mb-8">
              <div className="md:flex mb-8">
                <div className="border border-t-8 border-white flex-1 shrink-0">
                  <h2 className="font-black p-2 text-white title-bg">About</h2>
                  <div className="p-2">
                    <p className="text-white mb-4">
                      Full stack software engineer with an affinity for building
                      products. I also like owls :)
                    </p>
                    <p className="text-white mb-4">
                      Currently at{" "}
                      <a
                        className="font-black text-blue-500 underline"
                        href="https://stripe.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Stripe
                      </a>
                      . Previously{" "}
                      <a
                        className="font-black text-blue-500 underline"
                        href="https://lugg.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Lugg
                      </a>
                      ,{" "}
                      <a
                        className="font-black text-blue-500 underline"
                        href="https://optimizely.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Optimizely
                      </a>
                      .
                    </p>
                    <p className="text-white">Find me at:</p>
                    <div className="text-white">
                      <ul className="list-disc ml-6">
                        <li>
                          <a
                            className="font-black text-blue-500 underline"
                            href="https://twitter.com/angushtlam"
                            rel="noreferrer"
                            target="_blank"
                          >
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a
                            className="font-black text-blue-500 underline"
                            href="https://github.com/angushtlam"
                            rel="noreferrer"
                            target="_blank"
                          >
                            GitHub
                          </a>
                        </li>
                        <li>
                          <a
                            className="font-black text-blue-500 underline"
                            href="https://linkedin.com/in/angushtlam"
                            rel="noreferrer"
                            target="_blank"
                          >
                            LinkedIn
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex-1 hidden md:block shrink">
                  <div className="p-8">
                    <StaticImage alt="" src="../images/owl.svg" placeholder="none" />
                  </div>
                </div>
              </div>
              <div className="border-b border-l border-r border-t-8 border-white flex">
                <div className="flex-1">
                  <h2 className="font-black p-2 text-white title-bg">
                    Some of my writing
                  </h2>
                  <div className="p-2 text-white">
                    <ul className="list-disc ml-6">
                      <li>
                        <Link
                          className="font-black text-blue-500 underline"
                          to="/article/building-a-student-tech-community"
                        >
                          Building a student tech community
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="font-black text-blue-500 underline"
                          href="/article/react-native-gotchas"
                        >
                          Gotchas for web developers trying out React Native
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="font-black text-blue-500 underline"
                          to="/article/the-case-for-plain-css"
                        >
                          The case for plain CSS
                        </Link>
                      </li>
                      <li>
                        <a
                          className="font-black text-blue-500 underline"
                          href="#articles"
                        >
                          See all???
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 h-14 w-full"
        style={{
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)`,
        }}
      ></div>
    </div>
  );
}
