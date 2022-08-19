exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("project").truncate();
  await knex("project").insert([
    { project_name: "hi" },
    { project_name: "hello" },
    { project_name: "yo" },
  ]);
};
