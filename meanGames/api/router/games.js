"use-strict";

const { Router } = require("express");
const { gamesController, publishersController, reviewsController, authController } = require("../controller")
const gamesRouter = Router();

gamesRouter.get("/", gamesController.getAll);
gamesRouter.post("/", authController.onlyAuthenticated, gamesController.createGame);
gamesRouter.get("/:id", gamesController.getById);
gamesRouter.patch("/:id", authController.onlyAuthenticated, gamesController.patchGame);
gamesRouter.put("/:id", authController.onlyAuthenticated, gamesController.putGame);
gamesRouter.delete("/:id", authController.onlyAuthenticated, gamesController.deleteGame);

gamesRouter.post("/:id/publisher", authController.onlyAuthenticated, publishersController.addGamePublisher);
gamesRouter.delete("/:id/publisher", authController.onlyAuthenticated, publishersController.deleteGamePublisher);
gamesRouter.patch("/:id/publisher", authController.onlyAuthenticated, publishersController.patchGamePublisher);

gamesRouter.get("/:id/reviews", reviewsController.getReviews);
gamesRouter.post("/:id/reviews", authController.onlyAuthenticated, reviewsController.addReview);
gamesRouter.get("/:id/reviews/:reviewId", reviewsController.getReview);
gamesRouter.delete("/:id/reviews/:reviewId", authController.onlyAuthenticated, reviewsController.deleteReview);
gamesRouter.put("/:id/reviews/:reviewId", authController.onlyAuthenticated, reviewsController.updateReview);

module.exports = gamesRouter;