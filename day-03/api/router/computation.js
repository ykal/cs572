"use strict";

const { Router } = require("express");
const { computationController } = require("../controller");

const computationRouter = Router();

computationRouter.get(
  "/multiply/:firstNum",
  computationController.multiplyTwoNumbers
);

module.exports = computationRouter;
