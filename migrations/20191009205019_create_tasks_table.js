exports.up = async knex => {
  await knex.schema.createTable("tasks", table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.string("name", 255).notNullable();
    table.dateTime("deleted_at");
  });
};

exports.down = async knex => knex.schema.dropTableIfExists("tasks");
