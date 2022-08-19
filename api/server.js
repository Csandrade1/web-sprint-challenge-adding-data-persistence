// build your server here and require it from index.js
const express = require("express");

const server = express();

const projectRouter = require("./project/router");

server.use("/api/project", projectRouter);

module.exports = server;
