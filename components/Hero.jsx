import * as React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="align-center border-white border-t-8 flex mb-8 w-full">
        <h1 className="font-black lowercase text-orientation-mixed text-white text-4xl px-8 pt-8">
          Angus Lam
        </h1>
      </div>
      <div className="flex flex-1">
        <div className="flex items-center p-4 mb-8 w-full">
          <div className="m-auto max-w-screen-md">
            <div className="md:flex">
              <div className="border border-white flex-1">
                <h2 className="font-black p-2 text-white title-bg">About</h2>
                <div className="border-b border-white"></div>
                <div className="p-2">
                  <p className="text-white mb-6">
                    Full stack software engineer with an affinity for building
                    products. Currently at Stripe.
                  </p>
                  <p>
                    <a className="text-blue-400 underline" href="#">
                      Contact me
                    </a>
                  </p>
                </div>
              </div>
              <div className="border-b border-r md:border-t border-l md:border-l-0 border-white flex-2">
                <h2 className="font-black p-2 text-white title-bg">
                  Past work
                </h2>
                <div className="border-b border-white"></div>
                <p className="p-2 text-white">
                  Full stack software engineer with an affinity for building
                  products. Currently at Stripe.
                </p>
              </div>
            </div>
            <div className="border-b border-l border-r border-white flex">
              <div className="flex-1">
                <h2 className="font-black p-2 text-white title-bg">Skills</h2>
                <div className="border-b border-white"></div>
                <div className="p-2">
                  <p className="text-white">
                    <span className="font-bold text-sm text-gray-400 uppercase">
                      Languages
                    </span>{" "}
                    Java, JavaScript, Python, Ruby
                  </p>
                  <p className="text-white">
                    <span className="font-bold text-sm text-gray-400 uppercase">
                      Full stack
                    </span>{" "}
                    CSS, Express, Flask, jQuery, MongoDB, Node.js, React, React
                    Native, Webpack
                  </p>
                  <p className="text-white">
                    <span className="font-bold text-sm text-gray-400 uppercase">
                      Game dev
                    </span>{" "}
                    Unity3D, libGDX
                  </p>
                  <p className="text-white">
                    <span className="font-bold text-sm text-gray-400 uppercase">
                      Design
                    </span>{" "}
                    Adobe Illustrator, Adobe Photoshop
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b border-l border-r border-white flex">
              <div className="flex-1">
                <h2 className="font-black p-2 text-white title-bg">Articles</h2>
                <div className="border-b border-white"></div>
                <div className="p-2 text-white">
                  <ul className="list-disc ml-6">
                    <li>
                      <a className="text-blue-400 underline" href="#">
                        Running a student tech community
                      </a>
                    </li>
                    <li>
                      <a className="text-blue-400 underline" href="#">
                        Gotchas for web developers trying out React Native
                      </a>
                    </li>
                    <li>
                      <a className="text-blue-400 underline" href="#">
                        The case for plain CSS
                      </a>
                    </li>
                    <li>
                      <a className="text-blue-400 underline" href="#">
                        more…
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
  );
}
