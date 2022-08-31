// build your `Project` model here

const db = require("../../data/dbConfig");

function getAll() {
  return db("projects");
}

async function add(project) {
  return db("projects")
    .insert(project)
    .then(() => {
      return getAll();
    });
}

module.exports = {
  getAll,
  add,
};
// const validateProject = (req, res, next) => {
//   const { project_name } = req.body;
//   if (
//     project_name === undefined ||
//     typeof project_name !== "string" ||
//     !project_name.trim()
//   ) {
//     next({ status: 400, message: "invalid project_name" });
//   } else {
//     next();
//   }
// };

// function add(project) {
//   return db("projects")
//     .insert(project_id)
//     .then(([id]) => {
//       return db("projects").where("project_id", project_id);
//     });
// }
