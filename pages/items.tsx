import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import { personalItemLogDatabase } from "../notion";

const ItemsPage: NextPage = ({ data }: any) => {
  const { costTodayTotal, items, tableLastUpdated } = data;
  return (
    <div>
      <Head>
        <title>Item log - anguslam.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="inline font-bold text-4xl">personal item log</h1>
        <Link href="/" passHref>
          <a className="ml-2 text-blue-500 underline">back to home</a>
        </Link>
        <p className="mb-4">Trying this idea out.</p>
        <p className="mb-4">
          An incremental approach on identifying essentials, responsible
          consumption, and supporting manufacturers of durable goods. As an
          individual living in the twenty-first century, it's an introspective
          challenge to reconcile living in the times of the impending climate
          crisis with spillovers of attitude and luxuries from globalization
          efforts in the previous century. Sustainability is a large topic, but
          this working theory focuses on consumer goods.
        </p>
        <p className="mb-4">
          Prevailing consumer norms generally only includes a surface-level
          analysis on the costs and utility of owning an item for an individual.
          Storage, maintenance, and the impacts on the environment from the
          supply chain are usually not first considerations while looking at the
          shelf or on shopping site.
        </p>
        <p className="mb-4">
          To influence positive environmental changes on the greater society,
          consumer behaviors of supporting disposable or poorly made goods have
          to change. That is not to say the responsibility to address the
          climate crisis solely fall onto the individual. Governments and
          corporations have to play a outsized role too. However, an individual
          can make an impact at a local level by becoming more sustainable in
          material consumption.
        </p>
        <p className="mb-4">
          Environmental sustainability on an individual level doesn't mean
          throwing out all of the single use plastic straws and replacing them
          with glass ones. Nor is it getting rid of a perfectly working 2020
          Honda Civic with a new 2023 Tesla Model 3 for the sake of using an
          electric vehicle. That's merely another form of consumerism with some
          greenwashing.
        </p>
        <p className="mb-4">
          Demand drives production. Instead of assuming someone else will pick
          up the item at the right price or save it from the dumpster,
          continuing to use items until they reach the end of their lifespan is
          the best way to ensure one's demand stays close to linear of their
          needs.
        </p>
        <p className="mb-4">
          Of course, the answer to a more sustainable lifestyle is complicated.
          A one-size-fits-all approach when everyone's abilities and needs are
          different. A person's journey to become more sustainable can take many
          forms. Minimalism generally makes the ask of a reduction of material
          possessions without asking the basic question on whether said
          possessions are necessary. In extreme cases, Rob Greenfield even
          decided to dispose of their Social Security card.
        </p>
        <p className="mb-4">
          This is not a call to action to live an extreme lifestyle or change
          the world in a snap. It's not even about giving up luxuries at all, as
          some possessions have special meaning that's worth more than its cost
          in materials. The idea is a record keeping tool and a logical
          framework to become more intentional about owning material items. It’s
          like a perpetual spring cleaning, airing out the attic, or flat-laying
          out possessions. If the process brings a new revelation on one's
          relationship with material goods, then that's all the better.
        </p>
        <p className="mb-4">This project is inspired by:</p>
        <ul className="list-disc mb-4">
          <li className="ml-8">
            <Link href="https://www.youtube.com/watch?v=BB8o8-EdZY0" passHref>
              <a className="text-blue-500 underline" rel="noopener noreferrer">
                Matt D'Avella, "I counted everything I own as a minimalist"
              </a>
            </Link>
          </li>
          <li className="ml-8">
            <Link href="https://www.youtube.com/watch?v=3zO3xUg157c" passHref>
              <a className="text-blue-500 underline" rel="noopener noreferrer">
                Exploring Alternative, "EXTREME Minimalist Living With ONLY 47
                Possessions!" Interview with Rob Greenfield.
              </a>
            </Link>
          </li>
          <li className="ml-8">
            <Link
              href="https://alecleach.com/products/the-world-is-on-fire-but-we-re-still-buying-shoes"
              passHref
            >
              <a
                className="text-blue-500 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Alec Leach, "The World Is On Fire But We're Still Buying Shoes"
              </a>
            </Link>
          </li>
          <li className="ml-8">
            <Link href="https://konmari.com/about-the-konmari-method/" passHref>
              <a
                className="text-blue-500 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Marie Kondo, "What is the KonMari Method?"
              </a>
            </Link>
          </li>
        </ul>
        <p className="mb-4">
          Simultaneously, I'm trying to rewire my terminally engineer brain to
          avoid overengineering simple ideas or reinventing the wheel. To see
          test out this idea, I created this table in Notion to track the date
          of purchase and price of items I own.
        </p>
        <Image
          alt="Notion table screenshot"
          src="/items_notion.jpg"
          height={892 / 4}
          width={1717 / 4}
        />
        <p className="mb-4">
          Below is a truncated version of the table. It's clearly not complete,
          but I'll continue to expand this list over time.
        </p>
        <p className="mb-4">
          Items logged: {items.length}
          <br />
          Cost today for all items: ${costTodayTotal}
          <br />
          Last updated: {tableLastUpdated}
        </p>
        <table className="border border-black table-auto">
          <thead>
            <tr>
              <th className="border border-black whitespace-nowrap">
                Item name
              </th>
              <th className="border border-black whitespace-nowrap">
                Categories
              </th>
              <th className="border border-black whitespace-nowrap">
                Cost per day since ownership
              </th>
              <th className="border border-black whitespace-nowrap">
                Days until $1/day
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: any) => {
              return (
                <tr key={item.id}>
                  <td className="border border-black whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="border border-black whitespace-nowrap">
                    {item.categories.map((category: any) => (
                      <span
                        className={`bg-${category.color}-400`}
                        key={category.name}
                      >
                        {category.name}
                      </span>
                    ))}
                  </td>
                  <td className="border border-black">${item.costPerDay}</td>
                  <td className="border border-black">
                    {item.daysUntilTarget > 0 ? item.daysUntilTarget : "🎉"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const data = await personalItemLogDatabase();
  return { props: { data } };
}

export default ItemsPage;
