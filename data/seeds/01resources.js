exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex("resources").truncate();
  await knex("resources").insert([
    { resource_name: "what", resource_description: "whatt" },
    { resource_name: "grzgz", resource_description: "hjv" },
    { resource_name: "grgg", resource_description: "fjedbn" },
  ]);
};
