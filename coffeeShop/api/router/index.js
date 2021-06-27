"use strict";

const { Router } = require("express");
const coffeeRouter = require("./coffee");

const router = Router();

router.use('/coffees', coffeeRouter);

module.exports = router;