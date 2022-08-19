exports.up = function (knex) {
  return knex.schema.createTable("project", (tbl) => {
    tbl.increments("project_id");
    tbl.string("project_name").notNullable();
    tbl.string("project_description");
    tbl.boolean("project_completed");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project");
};
