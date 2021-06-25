"use-strict";

const { Router } = require("express");
const { studentController } = require("../controllers");
const router = Router();
router.get("/", studentController.getAll);
router.get("/:id", studentController.getById);

module.exports = router;