import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Angus Lam - anguslam.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-4xl font-bold">angus lam</h1>
        <p className="mb-4">hi, welcome to my space on the internet</p>
        <ul className="list-disc">
          <li className="ml-8">
            <Link href="https://angus.dev/" passHref>
              <a className="text-blue-500 underline">
                my programming hobby turned day job - angus.dev
              </a>
            </Link>
            <ul className="list-disc">
              <li className="ml-8">
                <Link
                  href="https://angus.dev/article/building-a-student-tech-community"
                  passHref
                >
                  <a className="text-blue-500 underline">
                    "Building a student tech community." A blog post about how I
                    organized UB ACM in 2017-2019.
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="ml-8">
            travel
            <ul className="list-disc">
              <li className="ml-8">
                <Link href="https://angus.dev/article/miami/" passHref>
                  <a className="text-blue-500 underline">
                    a visitor's travelogue for miami
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="ml-8">
            <Link href="/items" passHref>
              <a className="text-blue-500 underline">personal item log</a>
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
