exports.up = function (knex) {
  return knex.schema
    .createTable("resource", (tbl) => {
      tbl.increments("resource_id");
      tbl.string("resource_name").notNullable();
      tbl.string("resource_description");
    })
    .createTable("project_resources", (tbl) => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resource");
      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resource");
};
