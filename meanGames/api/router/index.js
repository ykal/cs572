"use strict";

const { Router } = require("express");
const computationRouter = require("./computation");
const gamesRouter = require("./games");
const authRouter = require("./auth");

const apiRouter = Router();

apiRouter.use("/computation", computationRouter);
apiRouter.use("/games", gamesRouter);
apiRouter.use("/auth", authRouter);

module.exports = apiRouter;
