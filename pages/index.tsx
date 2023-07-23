import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Angus Lam - anguslam.com</title>
        <meta
          name="description"
          content="Angus Lam's project and portfolio site. He is a software engineer at Stripe with a background in computer science and linguistics, and interest in creating delightful products, building communities, and designing spaces. Angus's blog can be found at https://angus.dev/."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="font-bold lowercase text-4xl">Angus Lam</h1>
        <p className="mb-4">hi, welcome to my space on the internet</p>
        <ul className="list-disc">
          <li className="ml-8">
            <Link href="https://angus.dev/" passHref>
              <a className="text-blue-500 underline" target="_blank">
                blog @ angus.dev
              </a>
            </Link>
            <ul className="list-disc">
              <li className="ml-8">
                <Link href="https://angus.dev/photos-migration.html" passHref>
                  <a className="text-blue-500 underline" target="_blank">
                    "My migration from iCloud Photos to Google Photos went so
                    terribly that I had to write Python scripts and it still
                    took 80 hours"
                  </a>
                </Link>
              </li>
              <li className="ml-8">
                <Link
                  href="https://angus.dev/building-a-student-tech-community.html"
                  passHref
                >
                  <a className="text-blue-500 underline" target="_blank">
                    "Building a student tech community" A blog post about how I
                    organized UB ACM in 2017-2019.
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="ml-8">
            projects
            <ul className="list-disc">
              <li className="ml-8">
                <Link href="https://kindredunspirits.com" passHref>
                  <a className="text-blue-500 underline" target="_blank">
                    kindred unspirits - i sell holographic stickers of household
                    items
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="ml-8">
            travel
            <ul className="list-disc">
              <li className="ml-8">
                <Link href="https://angus.dev/miami.html" passHref>
                  <a className="text-blue-500 underline">
                    miami travelogue 2022
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
    </>
  );
};

export default IndexPage;
