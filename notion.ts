import { Client } from "@notionhq/client";

const client = new Client({
  auth: process.env.NOTION_KEY,
});

async function personalItemLogDatabase() {
  const { results } = await client.databases.query({
    database_id: `${process.env.PERSONAL_ITEM_LOG_DATABASE}`,
  });

  let tableLastUpdated = new Date();
  const items = results
    .filter(
      (item: any) =>
        item.properties.Cost.number && item.properties.Cost.number < 500
    )
    .map((item: any) => {
      const costPerDay =
        item.properties.Cost.number /
          item.properties["Days owned"].formula.number +
        Number.EPSILON;
      const daysUntilTarget = Math.round(
        item.properties.Cost.number -
          item.properties["Days owned"].formula.number
      );

      const lastEditedTime = new Date(item.last_edited_time);
      if (tableLastUpdated > lastEditedTime) {
        tableLastUpdated = lastEditedTime;
      }

      return {
        id: item.id,
        categories: item.properties.Category.multi_select.filter((x: any) => ({
          color: x.color,
          name: x.name,
        })),
        costPerDay: Math.round(costPerDay * 100) / 100,
        daysUntilTarget,
        name: item.properties.Name.title[0].plain_text,
      };
    });

  return {
    items,
    costTodayTotal: items.reduce((total: Number, item: any) => {
      return total + item.costPerDay;
    }, 0),
    tableLastUpdated: tableLastUpdated.toDateString(),
  };
}

export { personalItemLogDatabase };
