import { Client } from "@notionhq/client";

const client = new Client({
  auth: process.env.NOTION_KEY,
});

async function personalItemLogDatabase() {
  const { results } = await client.databases.query({
    database_id: `${process.env.PERSONAL_ITEM_LOG_DATABASE}`,
  });


  const items = results
    .filter((item: any) => !item.properties["Hide online"].checkbox)
    .map((item: any) => {
      const costPerDay =
        item.properties.Cost.number /
          item.properties["Days owned"].formula.number +
        Number.EPSILON;
      const daysUntilTarget = Math.round(
        item.properties.Cost.number -
          item.properties["Days owned"].formula.number
      );

      return {
        id: item.id,
        categories: item.properties.Category.multi_select.filter((x: any) => ({
          color: x.color,
          name: x.name,
        })),
        costPerDay: Math.round(costPerDay * 100) / 100,
        daysUntilTarget,
        name:
          item.properties["Short name"].rich_text.length > 0
            ? item.properties["Short name"].rich_text[0].plain_text
            : item.properties.Name.title[0].plain_text,
      };
    });

  return {
    items,
    costTodayTotal: items.reduce((total: Number, item: any) => {
      return total + item.costPerDay;
    }, 0),
  };
}

export { personalItemLogDatabase };
