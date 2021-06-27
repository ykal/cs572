"use strict";

const { Router } = require("express");
const { coffeeController } = require("../controllers");

const router = Router();

router.post("/", coffeeController.create);
router.get("/", coffeeController.findAll);
router.get("/:coffeeId", coffeeController.findOneById);
router.put("/:coffeeId", coffeeController.updateById);
router.patch("/:coffeeId", coffeeController.patchById);

module.exports = router;