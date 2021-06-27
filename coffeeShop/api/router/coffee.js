"use strict";

const { Router } = require("express");
const { coffeeController } = require("../controllers");

const router = Router();

router.post("/", coffeeController.create);
router.get("/", coffeeController.findAll);

module.exports = router;