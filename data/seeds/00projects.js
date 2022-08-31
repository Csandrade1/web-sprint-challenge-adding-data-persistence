exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("projects").truncate();
  await knex("projects").insert([
    { project_name: "hi" },
    { project_name: "hello" },
    { project_name: "yo" },
  ]);
};
