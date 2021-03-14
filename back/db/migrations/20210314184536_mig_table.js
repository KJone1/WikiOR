exports.up = function (knex) {
  return knex.schema.createTable("errors", (table) => {
    table.increments();
    table.string("fault").notNullable();
    table.specificType("solution", "text[]").notNullable();
    table.specificType("cause", "text[]").notNullable();
    table.string("type").notNullable();
    table.string("subtype");
    table.string("severity");
    table.string("desc");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("errors");
};
