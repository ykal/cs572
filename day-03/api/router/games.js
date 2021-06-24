"use-strict";

const { Router } = require("express");
const { gamesController } = require("../controller")
const gamesRouter = Router();

gamesRouter.get("/", gamesController.getAll);

module.exports = gamesRouter;