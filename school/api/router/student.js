"use-strict";

const { Router } = require("express");
const { studentController } = require("../controllers");
const router = Router();
router.get("/", studentController.getAll);

module.exports = router;