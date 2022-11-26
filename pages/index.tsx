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
          Angus Lam
        </h1>
        <ul>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </main>
      <footer>
        ©️ Angus Lam 2022
      </footer>
    </div>
  )
}

export default Home