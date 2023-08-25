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
        />
      </Head>
      <main>
        <h1 className="font-bold text-4xl">Index of /Angus Lam/</h1>
        <p className="mb-4">
          Welcome, you've made it to my website. I have a few things to share.
        </p>
        <ul className="list-disc">
          <li className="ml-8">
            Blog @ angus.dev
            <ul className="list-disc">
              <li className="ml-8">
                <Link href="https://angus.dev/photos-migration.html" passHref>
                  <a className="text-blue-500 underline">
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
                  <a className="text-blue-500 underline">
                    "Building a student tech community"
                  </a>
                </Link>{" "}
                A blog post about how I organized UB ACM in 2017-2019.
              </li>
              <li className="ml-8">
                <Link href="https://angus.dev/" passHref>
                  <a className="text-blue-500 underline">
                    See all posts…
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="ml-8">
            Projects
            <ul className="list-disc">
              <li className="ml-8">
                <Link href="https://kindredunspirits.com" passHref>
                  <a className="text-blue-500 underline" target="_blank">
                    Kindred Unspirits
                  </a>
                </Link>{" "}
                Holographic stickers of household items
              </li>
              <li className="ml-8">
                <Link href="/items" passHref>
                  <a className="text-blue-500 underline">Personal item log</a>
                </Link>{" "}
                An experiment in maintaining a catalog of personal belongings
              </li>
            </ul>
          </li>
          <li className="ml-8">
            Travel
            <ul className="list-disc">
              <li className="ml-8">
                <Link href="https://angus.dev/miami.html" passHref>
                  <a className="text-blue-500 underline">
                    Miami travelogue 2022
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
