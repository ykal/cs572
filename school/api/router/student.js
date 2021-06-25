"use-strict";

const { Router } = require("express");
const { studentController, courseController } = require("../controllers");
const router = Router();

router.get("/", studentController.getAll);
router.get("/:id", studentController.getById);
router.get("/:id/courses", courseController.getStudentCourses);

module.exports = router;