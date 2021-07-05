"use strict";

const { Router } = require("express");
const { coffeeController, sizeController, reviewController, authController } = require("../controllers");

const router = Router();

router.post("/", coffeeController.create);
router.get("/", coffeeController.findAll);
router.get("/:coffeeId", coffeeController.findOneById);
router.put("/:coffeeId", authController.onlyAuthenticated, coffeeController.updateById);
router.patch("/:coffeeId", authController.onlyAuthenticated, coffeeController.patchById);
router.delete("/:coffeeId", authController.onlyAuthenticated, coffeeController.removeById);

router.post("/:coffeeId/sizes", authController.onlyAuthenticated, sizeController.add);
router.get("/:coffeeId/sizes", sizeController.findAll);
router.put("/:coffeeId/sizes/:sizeId", authController.onlyAuthenticated, sizeController.updateById);
router.delete("/:coffeeId/sizes/:sizeId", authController.onlyAuthenticated, sizeController.removeById);

router.post("/:coffeeId/reviews", authController.onlyAuthenticated, reviewController.add);
router.get("/:coffeeId/reviews", reviewController.findAll);
router.get("/:coffeeId/reviews/:reviewId", reviewController.findById);
router.put("/:coffeeId/reviews/:reviewId", authController.onlyAuthenticated, reviewController.updateById);
router.delete("/:coffeeId/reviews/:reviewId",authController.onlyAuthenticated, reviewController.removeById);

module.exports = router;