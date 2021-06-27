"use strict";

const { Router } = require("express");
const { coffeeController } = require("../controllers");

const router = Router();

router.post("/", coffeeController.addCoffee);

module.exports = router;