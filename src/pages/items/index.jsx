import { css } from "@emotion/react";
import { Link } from "gatsby";
import * as React from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
import ItemsNotionJpg from "./items_notion.jpg";

const ItemsPage = () => {
  const cssTableCell = css`
    border: 1px solid #000000;
    white-space: nowrap;
  `;

  const costTodayTotal = 21.26;
  const items = [
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.71,
      daysUntilTarget: -26,
      name: "Cotopaxi flannel shirt",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 1.21,
      daysUntilTarget: 19,
      name: "HOKA Clifton 9",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 3.27,
      daysUntilTarget: 332,
      name: "Watch",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.19,
      daysUntilTarget: -131,
      name: "Arcade belt",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.07,
      daysUntilTarget: -178,
      name: "Clear backpack",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.16,
      daysUntilTarget: -163,
      name: "White pants",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.04,
      daysUntilTarget: -290,
      name: "Apple iPhone 12 mini clear case",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 1.16,
      daysUntilTarget: 54,
      name: "Steam Deck",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.16,
      daysUntilTarget: -183,
      name: "Loop Experience Plus Earplugs",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.11,
      daysUntilTarget: -191,
      name: "Bluetooth speaker",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 1.01,
      daysUntilTarget: 1,
      name: "Dr Martens boots",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.12,
      daysUntilTarget: -444,
      name: "Paynter Six Mile Tee White #2",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.12,
      daysUntilTarget: -444,
      name: "Paynter Six Mile Tee White #1",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.12,
      daysUntilTarget: -444,
      name: "Paynter Six Mile Tee Black #2",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.12,
      daysUntilTarget: -444,
      name: "Paynter Six Mile Tee Black #1",
    },
    {
      categories: [
        {
          name: "Transportation",
          color: "purple",
        },
      ],
      costPerDay: 0.1,
      daysUntilTarget: -427,
      name: "Bike pedal wrench",
    },
    {
      categories: [
        {
          name: "Transportation",
          color: "purple",
        },
      ],
      costPerDay: 0.03,
      daysUntilTarget: -456,
      name: "Bike tire pump",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.34,
      daysUntilTarget: -314,
      name: "Bike lock",
    },
    {
      categories: [
        {
          name: "Transportation",
          color: "purple",
        },
      ],
      costPerDay: 1.22,
      daysUntilTarget: 102,
      name: "Bike",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.13,
      daysUntilTarget: -589,
      name: "Tote bag",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.23,
      daysUntilTarget: -488,
      name: "Running shoes",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.12,
      daysUntilTarget: -807,
      name: "Battery pack",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.16,
      daysUntilTarget: -478,
      name: "White leather sneakers",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.06,
      daysUntilTarget: -781,
      name: "Apple Watch leather band",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.03,
      daysUntilTarget: -982,
      name: "AirTag #2",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.03,
      daysUntilTarget: -982,
      name: "AirTag #1",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.13,
      daysUntilTarget: -713,
      name: "Speaker",
    },
    {
      categories: [
        {
          name: "Home and living",
          color: "blue",
        },
      ],
      costPerDay: 0.64,
      daysUntilTarget: -400,
      name: "Fan",
    },
    {
      categories: [
        {
          name: "Home and living",
          color: "blue",
        },
      ],
      costPerDay: 0.81,
      daysUntilTarget: -120,
      name: "Bed sheet set #2",
    },
    {
      categories: [
        {
          name: "Home and living",
          color: "blue",
        },
      ],
      costPerDay: 0.46,
      daysUntilTarget: -336,
      name: "Pillows",
    },
    {
      categories: [
        {
          name: "Home and living",
          color: "blue",
        },
      ],
      costPerDay: 0.37,
      daysUntilTarget: -394,
      name: "Bed sheet set #1",
    },
    {
      categories: [
        {
          name: "Home and living",
          color: "blue",
        },
      ],
      costPerDay: 0.45,
      daysUntilTarget: -347,
      name: "Comforter",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.5,
      daysUntilTarget: -331,
      name: "Webcam",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.31,
      daysUntilTarget: -1213,
      name: "Watch",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.34,
      daysUntilTarget: -478,
      name: "Hue lights",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.08,
      daysUntilTarget: -781,
      name: "iPhone leather case",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.83,
      daysUntilTarget: -196,
      name: "Phone",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.08,
      daysUntilTarget: -564,
      name: "Sunglasses",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.16,
      daysUntilTarget: -992,
      name: "Headphones",
    },
    {
      categories: [
        {
          name: "Home and living",
          color: "blue",
        },
      ],
      costPerDay: 0.07,
      daysUntilTarget: -546,
      name: "Fake Banksy Rat canvas art",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 3.08,
      daysUntilTarget: 1721,
      name: "Laptop",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.06,
      daysUntilTarget: -556,
      name: "SD card #2",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 1.65,
      daysUntilTarget: 384,
      name: "Camera",
    },
    {
      categories: [{ name: "Electronics", color: "green" }],
      costPerDay: 0.06,
      daysUntilTarget: -556,
      name: "SD card #1",
    },
    {
      categories: [
        {
          name: "Clothing and accessories",
          color: "red",
        },
      ],
      costPerDay: 0.16,
      daysUntilTarget: -377,
      name: "Vans shoes",
    },
  ];

  return (
    <PageLayout>
      <Header>Personal item log</Header>
      <p>Trying this idea out.</p>
      <p>
        An incremental approach on identifying essentials, responsible
        consumption, and supporting manufacturers of durable goods. As an
        individual living in the twenty-first century, it's an introspective
        challenge to reconcile living in the times of the impending climate
        crisis with spillovers of attitude and luxuries from globalization
        efforts in the previous century. Sustainability is a large topic, but
        this working theory focuses on consumer goods.
      </p>
      <p>
        Prevailing consumer norms generally only includes a surface-level
        analysis on the costs and utility of owning an item for an individual.
        Storage, maintenance, and the impacts on the environment from the supply
        chain are usually not first considerations while looking at the shelf or
        on shopping site.
      </p>
      <p>
        To influence positive environmental changes on the greater society,
        consumer behaviors of supporting disposable or poorly made goods have to
        change. That is not to say the responsibility to address the climate
        crisis solely fall onto the individual. Governments and corporations
        have to play a outsized role too. However, an individual can make an
        impact at a local level by becoming more sustainable in material
        consumption.
      </p>
      <p>
        Environmental sustainability on an individual level doesn't mean
        throwing out all of the single use plastic straws and replacing them
        with glass ones. Nor is it getting rid of a perfectly working 2020 Honda
        Civic with a new 2023 Tesla Model 3 for the sake of using an electric
        vehicle. That's merely another form of consumerism with some
        greenwashing.
      </p>
      <p>
        Demand drives production. Instead of assuming someone else will pick up
        the item at the right price or save it from the dumpster, continuing to
        use items until they reach the end of their lifespan is the best way to
        ensure one's demand stays close to linear of their needs.
      </p>
      <p>
        Of course, the answer to a more sustainable lifestyle is complicated. A
        one-size-fits-all approach when everyone's abilities and needs are
        different. A person's journey to become more sustainable can take many
        forms. Minimalism generally makes the ask of a reduction of material
        possessions without asking the basic question on whether said
        possessions are necessary. In extreme cases, Rob Greenfield even decided
        to dispose of their Social Security card.
      </p>
      <p>
        This is not a call to action to live an extreme lifestyle or change the
        world in a snap. It's not even about giving up luxuries at all, as some
        possessions have special meaning that's worth more than its cost in
        materials. The idea is a record keeping tool and a logical framework to
        become more intentional about owning material items. It’s like a
        perpetual spring cleaning, airing out the attic, or flat-laying out
        possessions. If the process brings a new revelation on one's
        relationship with material goods, then that's all the better.
      </p>
      <p>This project is inspired by:</p>
      <ul>
        <li>
          <Link
            to="https://www.youtube.com/watch?v=BB8o8-EdZY0"
            rel="noopener noreferrer"
          >
            Matt D'Avella, "I counted everything I own as a minimalist"
          </Link>
        </li>
        <li>
          <Link
            to="https://www.youtube.com/watch?v=3zO3xUg157c"
            rel="noopener noreferrer"
          >
            Exploring Alternative, "EXTREME Minimalist Living With ONLY 47
            Possessions!" Interview with Rob Greenfield.
          </Link>
        </li>
        <li>
          <Link
            to="https://alecleach.com/products/the-world-is-on-fire-but-we-re-still-buying-shoes"
            rel="noopener noreferrer"
            target="_blank"
          >
            Alec Leach, "The World Is On Fire But We're Still Buying Shoes"
          </Link>
        </li>
        <li>
          <Link
            to="https://konmari.com/about-the-konmari-method/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Marie Kondo, "What is the KonMari Method?"
          </Link>
        </li>
      </ul>
      <p>
        Simultaneously, I'm trying to rewire my terminally engineer brain to
        avoid overengineering simple ideas or reinventing the wheel. To see test
        out this idea, I created this table in Notion to track the date of
        purchase and price of items I own.
      </p>
      <img src={ItemsNotionJpg} width="200px" />
      <p>
        Below is a truncated version of the table. It's clearly not complete,
        but I'll continue to expand this list over time.
      </p>
      <p>
        Items logged: {items.length}
        <br />
        Cost today for all items: ${costTodayTotal}
      </p>
      <table
        css={css`
          table-layout: auto;
          text-indent: 0;
          border-collapse: collapse;
        `}
      >
        <thead>
          <tr>
            <th css={cssTableCell}>Item name</th>
            <th css={cssTableCell}>Categories</th>
            <th css={cssTableCell}>Cost per day since ownership</th>
            <th css={cssTableCell}>Days until $1/day</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td css={cssTableCell}>{item.name}</td>
                <td css={cssTableCell}>
                  {item.categories.map((category) => (
                    <span key={category.name}>{category.name}</span>
                  ))}
                </td>
                <td css={cssTableCell}>${item.costPerDay}</td>
                <td css={cssTableCell}>
                  {item.daysUntilTarget > 0 ? item.daysUntilTarget : "🎉"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </PageLayout>
  );
};

export default ItemsPage;

export const Head = () => (
  <title>Personal item log | Angus Lam - anguslam.com</title>
);
