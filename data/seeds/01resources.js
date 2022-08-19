exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("project.resources").truncate();
  await await knex("resource").insert([
    // {resource_id: wat, resource_name: what, resource_description: whatt },
    // {resource_id: , resource_name: , resource_description: },
    // {resource_id: , resource_name: , resource_description: }
  ]);
};
