"use strict";

const { Router } = require("express");
const computationRouter = require("./computation");

const apiRouter = Router();

apiRouter.use("/computation", computationRouter);

module.exports = apiRouter;
