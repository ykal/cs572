"use strict";

const { Router } = require("express");
const coffeeRouter = require("./coffee");
const authRouter = require("./auth");

const router = Router();

router.use('/coffees', coffeeRouter);
router.use('/auth', authRouter);

module.exports = router;