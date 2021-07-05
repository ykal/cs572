"use strict";

const coffeeController = require("./coffee");
const sizeController = require("./size");
const reviewController = require("./review");
const authController = require("./auth");

module.exports = {
  coffeeController,
  sizeController,
  reviewController,
  authController
};