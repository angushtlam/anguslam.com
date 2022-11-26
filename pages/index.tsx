import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Angus Lam - anguslam.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-4xl font-bold">
          angus lam
        </h1>
        <p className="mb-4">
          hi, welcome to my space on the internet
        </p>
        <ul className="list-disc">
          <li className="ml-8">
            <a className="text-blue-500 underline" href="/">
              my programming hobby turned day job - angus.dev
            </a>
          </li>
        </ul>
      </main>
      <footer className="mt-4">
        ©️ Angus Lam 2022
      </footer>
    </div>
  )
}

export default Home