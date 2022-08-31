// build your `/api/resources` router here
const express = require("express");

const router = express.Router();

const Resource = require("./model");

const { validateResourceName } = require("./milddleware");

router.get("/", (req, res, next) => {
  Resource.getAll()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/", validateResourceName, (req, res, next) => {
  Resource.add(req.body)
    .then((newResource) => {
      res.status(201).json(newResource[newResource.length - 1]);
    })
    .catch(next);
});

module.exports = router;
