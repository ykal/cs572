"use-strict";

const { Router } = require("express");
const { gamesController } = require("../controller")
const gamesRouter = Router();

gamesRouter.get("/", gamesController.getAll);
gamesRouter.get("/:id", gamesController.getById);

module.exports = gamesRouter;