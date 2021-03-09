exports.seed = async function (knex) {
  // desc: truncate all existing tables
  await knex.raw('TRUNCATE TABLE "vs" CASCADE');
  await knex.raw('TRUNCATE TABLE "erez" CASCADE');

  await knex("vs").insert([
    {
      fault: "fake fault1",
      solution: ["fake solution1", "fake solution2"],
      cause: ["fake cause1", "fake cause2"],
      type: "fake type",
      severity: "fake severity",
      desc: "in keren or we trust",
    },
    {
      fault: "fake fault2",
      solution: ["fake solution1", "fake solution2"],
      cause: ["fake cause1", "fake cause2"],
      type: "fake type",
      severity: "fake severity",
      desc: "in keren or we trust",
    },
    {
      fault: "fake fault3",
      solution: ["fake solution1", "fake solution2"],
      cause: ["fake cause1", "fake cause2"],
      type: "fake type",
      severity: "fake severity",
      desc: "in keren or we trust",
    },
  ]);
  await knex("erez").insert([
    {
      fault: "fake fault1",
      solution: ["fake solution1", "fake solution2"],
      cause: ["fake cause1", "fake cause2"],
      type: "fake type",
      severity: "fake severity",
      desc: "in keren or we trust",
    },
    {
      fault: "fake fault2",
      solution: ["fake solution1", "fake solution2"],
      cause: ["fake cause1", "fake cause2"],
      type: "fake type",
      severity: "fake severity",
      desc: "in keren or we trust",
    },
    {
      fault: "fake fault3",
      solution: ["fake solution1", "fake solution2"],
      cause: ["fake cause1", "fake cause2"],
      type: "fake type",
      severity: "fake severity",
      desc: "in keren or we trust",
    },
  ]);
};
