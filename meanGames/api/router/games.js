"use-strict";

const { Router } = require("express");
const { gamesController, publishersController, reviewsController } = require("../controller")
const gamesRouter = Router();

gamesRouter.get("/", gamesController.getAll);
gamesRouter.post("/", gamesController.createGame);
gamesRouter.get("/:id", gamesController.getById);
gamesRouter.patch("/:id", gamesController.patchGame);
gamesRouter.put("/:id", gamesController.putGame);
gamesRouter.delete("/:id", gamesController.deleteGame);

gamesRouter.post("/:id/publisher", publishersController.addGamePublisher);
gamesRouter.delete("/:id/publisher", publishersController.deleteGamePublisher);
gamesRouter.patch("/:id/publisher", publishersController.patchGamePublisher);

gamesRouter.get("/:id/reviews", reviewsController.getReviews);
gamesRouter.post("/:id/reviews", reviewsController.addReview);
gamesRouter.get("/:id/reviews/:reviewId", reviewsController.getReview);
gamesRouter.delete("/:id/reviews/:reviewId", reviewsController.deleteReview);
gamesRouter.put("/:id/reviews/:reviewId", reviewsController.updateReview);

module.exports = gamesRouter;