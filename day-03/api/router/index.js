"use strict";

const { Router } = require("express");
const computationRouter = require("./computation");
const gamesRouter = require("./games");

const apiRouter = Router();

apiRouter.use("/computation", computationRouter);
apiRouter.use("/games", gamesRouter)

module.exports = apiRouter;
