"use-strict";

const { Router } = require("express");
const { gamesController, publishersController } = require("../controller")
const gamesRouter = Router();

gamesRouter.get("/", gamesController.getAll);
gamesRouter.post("/", gamesController.createGame);
gamesRouter.get("/:id", gamesController.getById);
gamesRouter.patch("/:id", gamesController.patchGame);
gamesRouter.put("/:id", gamesController.putGame);
gamesRouter.delete("/:id", gamesController.deleteGame);

gamesRouter.post("/:id/publisher", publishersController.addGamePublisher);
gamesRouter.delete("/:id/publisher", publishersController.deleteGamePublisher);

module.exports = gamesRouter;