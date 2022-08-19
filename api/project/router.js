// build your `/api/projects` router here

const express = require("express");

const router = express.Router();

const Project = require("./model");

router.get("/", async (req, res) => {
  const result = await Project.getAll();
  res.json(result);
});

module.exports = router;
