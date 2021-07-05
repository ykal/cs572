"use strict";

const computationController = require("./computation");
const gamesController = require("./games");
const publishersController = require("./publishers");
const reviewsController = require("./reviews");
const authController = require("./auth");

module.exports = {
  computationController,
  gamesController,
  publishersController,
  reviewsController,
  authController
};
