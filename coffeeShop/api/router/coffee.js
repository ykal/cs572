"use strict";

const { Router } = require("express");
const { coffeeController, sizeController, reviewController } = require("../controllers");

const router = Router();

router.post("/", coffeeController.create);
router.get("/", coffeeController.findAll);
router.get("/:coffeeId", coffeeController.findOneById);
router.put("/:coffeeId", coffeeController.updateById);
router.patch("/:coffeeId", coffeeController.patchById);
router.delete("/:coffeeId", coffeeController.removeById);

router.post("/:coffeeId/sizes", sizeController.add);
router.get("/:coffeeId/sizes", sizeController.findAll);
router.put("/:coffeeId/sizes/:sizeId", sizeController.updateById);
router.delete("/:coffeeId/sizes/:sizeId", sizeController.removeById);

router.post("/:coffeeId/reviews", reviewController.add);
router.get("/:coffeeId/reviews", reviewController.findAll);
router.get("/:coffeeId/reviews/:reviewId", reviewController.findById);
router.put("/:coffeeId/reviews/:reviewId", reviewController.updateById);
router.delete("/:coffeeId/reviews/:reviewId", reviewController.removeById);

module.exports = router;