"use-strict";

const { Router } = require("express");
const { gamesController } = require("../controller")
const gamesRouter = Router();

gamesRouter.get("/", gamesController.getAll);
gamesRouter.post("/", gamesController.createGame);
gamesRouter.get("/:id", gamesController.getById);
gamesRouter.patch("/:id", gamesController.patchGame);

module.exports = gamesRouter;