"use strict";

const { Router } = require("express");
const { coffeeController, sizeController } = require("../controllers");

const router = Router();

router.post("/", coffeeController.create);
router.get("/", coffeeController.findAll);
router.get("/:coffeeId", coffeeController.findOneById);
router.put("/:coffeeId", coffeeController.updateById);
router.patch("/:coffeeId", coffeeController.patchById);
router.delete("/:coffeeId", coffeeController.removeById);

router.post("/:coffeeId/sizes", sizeController.add);
router.get("/:coffeeId/sizes", sizeController.findAll);
router.delete("/:coffeeId/sizes/:sizeId", sizeController.removeById);

module.exports = router;