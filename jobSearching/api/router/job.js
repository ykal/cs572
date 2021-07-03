"use strict"

const { Router } = require("express");
const { jobController } = require("../controllers");

const router = Router();


router.get("/", jobController.getAll);
router.post("/", jobController.create);
router.get("/:jobId", jobController.getOneById);
router.delete("/:jobId", jobController.removeById);
router.put("/:jobId", jobController.fullUpdateById);

module.exports = router;