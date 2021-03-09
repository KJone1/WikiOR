exports.up = function (knex) {
  return knex.schema
    .createTable("vs", (table) => {
      table.increments();
      table.string("fault").notNullable();
      table.specificType("solution", "text[]").notNullable();
      table.specificType("cause", "text[]").notNullable();
      table.string("type").notNullable();
      table.string("severity");
      table.string("desc");
      table.timestamps(true, true);
    })
    .createTable("erez", (table) => {
      table.increments();
      table.string("fault").notNullable();
      table.specificType("solution", "text[]").notNullable();
      table.specificType("cause", "text[]").notNullable();
      table.string("type").notNullable();
      table.string("severity");
      table.string("desc");
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("vs").dropTableIfExists("erez");
};
