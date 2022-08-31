// build your `/api/projects` router here

const express = require("express");
const { validateProjectName } = require("./middleware");

const router = express.Router();

const Project = require("./model");

router.get("/", async (req, res, next) => {
  await Project.getAll()
    .then((projects) => {
      projects.map((project) => {
        project.project_completed === 0
          ? (project.project_completed = false)
          : (project.project_completed = true);
      });
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Project.add(req.body)
    .then((project) => {
      if (project[project.length - 1].project_completed == 0) {
        project[project.length - 1].project_completed = false;
        res.status(201).json(project[project.length - 1]);
      } else {
        project[project.length - 1].project_completed = true;
        res.status(201).json(project[project.length - 1]);
      }
    })
    .catch(next);
});

// router.post("/", validateProject, (req, res, next) => {
//   Project.insert({ project_name: req.name })
//     .then((project) => {
//       res.status(201).json(project);
//     })

//     .catch(next);
// });

module.exports = router;
