exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex("tasks").truncate();
  await knex("tasks").insert([
    { task_description: "what", project_id: 1 },
    { task_description: "grzgz", project_id: 1 },
    { task_description: "grgg", project_id: 2 },
  ]);
};
